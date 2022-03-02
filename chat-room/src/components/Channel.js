import useState, { useEffect } from "react";
//firebase and firestore functions
import { getFirestore,collection,query,orderBy,limit,onSnapshot,doc,getDocs,setDocs  } from "firebase/firestore";

const Channel=({user=null})=>{
    const db=getFirestore();
    const query=collection(db,"messages").orderBy('createdAt').limit(100);
    const [messages,setMessages]=useState([]);
    
    useEffect(()=>{
      // Subscribe to query with onSnapshot
        const unsubscribe = query.onSnapshot(querySnapshot => {
             // Get all documents from collection - with IDs
             const data=querySnapshot.docs.map(doc=>({
                 ...doc.data(),id:doc.id
             }));
             //update state
             setDocs(data);

        });

        //Detach listener
        return unsubscribe;

    },[]);
    return (
        <ul>
            {messages.map(message=>{
            <li ley={message.id}>{message.text}</li>
            })}
        </ul>
    );
};
export default Channel;