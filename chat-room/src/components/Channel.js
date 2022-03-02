import useState, { useEffect } from "react";
//firebase and firestore functions
import { getFirestore,collection,query,orderBy,limit,onSnapshot,doc,getDocs,setDocs,Timestamp  } from "firebase/firestore";
import Message from './Message'
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

    //for handeling change
    const handleOnChange=e=>{
        setNewMessage(e.target.value);
    }
    //onSubmit function
    const handleOnSubmit=e=>{
        e.preventDefault();
        const trimmedMessage=newMessage.trim();
        if(trimmedMessage){
            //Add new message in the firestore
            messagesRef.add({
                text:trimmedMessage,
                createdAt:Timestamp.fromDate(now),
                uid,
                displayName,
                photoURL,
            });
            //clear input field
            setNewMessage('');
        }
    }
    return (
        <>
            <ul>
                {messages.map(message=>{
                <li key={message.id}>
                    <Message {...message}/></li>
                })}
            </ul>
            <form onSubmit={handleOnSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={NewMessage}
                    onChange={handleOnChange}
                    placeholder="Type your message here ..."
                />
                <button 
                type="submit"
                disabled={!NewMessage}
                >Send</button>

            </form>
        </>
    );
};
export default Channel;