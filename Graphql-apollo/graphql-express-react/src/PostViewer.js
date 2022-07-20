import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Table } from 'reactstrap'
import client from './apollo'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`

export const REMOV_AUTH = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      Success
    }
  }
`

const deleteUser = async (e, id) => {
  await client.mutate({
    variables: { id },
    mutation: REMOV_AUTH,
    refetchQueries: () => [{ query: GET_POSTS }],
  })
}
const rowStyles = (post, canEdit) =>
  canEdit(post) ? { cursor: 'pointer', fontWeight: 'bold' } : {}

// const PostViewer = ({ canEdit, onEdit }) => (
//   <Query query={GET_POSTS}>
//     {({ loading, data }) =>
//       !loading && (
//         <Table>
//           <thead>
//             <tr>
//               <th>Author</th>
//               <th>Body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.posts.map((post, index) => (
//               <tr key={post.id} style={rowStyles(post, canEdit)}>
//                 <td>{post.author}</td>
//                 <td>{post.body}</td>
//                 <td>
//                   <button onClick={() => canEdit(post) && onEdit(post)}>
//                     Edit
//                   </button>
//                 </td>
//                 <td>
//                   <button onClick={(e) => deleteUser(e, index)}>☓</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )
//     }
//   </Query>
// )


const PostViewer = ({ canEdit, onEdit }) => (
  <Query query={GET_POSTS}>
    {({ loading, data }) =>
      !loading && (
        <Table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map((post, index) => (
              <tr key={post.id} style={rowStyles(post, canEdit)}>
                <td>{post.author}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => canEdit(post) && onEdit(post)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={(e) => deleteUser(e, index)}>☓</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }
  </Query>
)

PostViewer.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
}

export default PostViewer

