import {useEffect,useState,useRef} from "react";
import { onAuthStateChanged } from "firebase/auth";

//useFirestoreQuery function
export function useFirestoreQuery(query){
    const[docs,setDocs]=useState([]);
    //store current query in ref
    const queryRef=useRef(query);
    //compare current query with the previous one
    useEffect(()=>{
        //use Firestore built-in 'is_Equal method
        //to compare queries
        if(!queryRef?.current?.isEqual(query)){
            queryRef.current=query;
        }
    });
    //Re-run data listenet only if query has changed
    useEffect(()=>{
        if(!queryRef.current){
            return null;
        }
        //Subscribe to query with onSnapShot
        const unsubscribe=queryRef.current.onSnapshot(querySnapshot=>{
            //Get all the documents from collection - with IDs
            const data=querySnapshot.docs.map(doc=>({
                ...doc.data(),
                id:doc.id,
            }));
            //Update state
            setDocs(data);
        });
        //Detach listener
        return unsubscribe;
    },[queryRef]);
    return docs;
}
//useAuthState function
export function useAuthState(auth) {
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState(() => auth.currentUser);

useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);
    } else {
        setUser(false);
    }
    if (initializing) {
        setInitializing(false);
    }
    });

    // Cleanup subscription
    return unsubscribe;
}, [auth, initializing]);

return { user, initializing };
}