import  {useState, useEffect ,useRef} from "react";
//firebase and firestore functions
import { getFirestore,collection,query,orderBy,limit,Timestamp  } from "firebase/firestore";
import { useFirestoreQuery } from "../hooks";
import Message from './Message';
import PropTypes from "prop-types"
const Channel=({user=null})=>{
    const db=getFirestore();
    const messagesRef=collection(db,"messages");
    const messages = useFirestoreQuery(
        query(messagesRef,orderBy('createdAt','desc'),limit(100))
    );
    const [newMessage,setNewMessage]=useState("");
    
    const inputRef=useRef();
    const bottomListRef=useRef();
    const {uid,displayName,photoURL}=user;
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[inputRef]);


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
            const now=new Date();
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
            <div className="">
                <div className="">
                    <p className="">Welcome to</p>
                    <p className="">React FireChat</p>
                </div>
                <p className="text-gray-400 text-center">
                This is the beginning of this chat.
                </p>
            </div>
            <ul>
                {messages
                ?.sort((first, second) =>
                    first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
                )
                ?.map(message => (
                    <li key={message.id}>
                    <Message {...message} />
                    </li>
                ))}
            </ul>
            <div ref={bottomListRef} />
            <div>
                <form 
                onSubmit={handleOnSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={newMessage}
                        onChange={handleOnChange}
                        placeholder="Type your message here ..."
                    />
                    <button 
                    type="submit"
                    disabled={!newMessage}
                    >Send</button>

                </form>
            </div>
        </>
    );
};

Channel.propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
      displayName: PropTypes.string,
      photoURL: PropTypes.string,
    }),
  };
export default Channel;