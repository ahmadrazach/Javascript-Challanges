const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');



const POSTS = [
  { author: "Ahmed Raza", body: "Hello world" },
  { author: "Ali Tariq", body: "Hi, planet!" },
];

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Response{
    Success:Boolean
  }
  type Post {
    id: ID
    author: String
    body: String
  }

  type Mutation {
    submitPost(input: PostInput!): Post
    deletePost(id: ID!):Response
  }
  
  input PostInput {
    id: ID
    author: String!
    body: String!
  }

 
`);

const mapPost = (post, id) => post && ({ id, ...post });

const root = {
  posts: () => POSTS.map(mapPost), // to get array of Posts
  post: ({ id }) => mapPost(POSTS[id], id), // to get a post by passing in id
  submitPost: ({ input: { id, author, body } }) => {
    const post = { author, body };
    let index = POSTS.length;
  
    if (id != null && id >= 0 && id < POSTS.length) {
      
  
      POSTS.splice(id, 1, post);
      index = id;
    } else {
      POSTS.push(post);
    }
  
    return mapPost(post, index);
  },
  deletePost:({id})=>{
    POSTS.splice(id,1);
     console.log("delte post",POSTS);
  }
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);