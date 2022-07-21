import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { PublicKey,Transaction} from "@solana/web3.js";


// 
type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
    onlyIfTrusted: boolean;
  }


  interface PhantomProvider {
    publicKey: PublicKey | null;
    isConnected: boolean | null;
    signTransaction: (transaction: Transaction) => Promise<Transaction>;
    signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
    signMessage: (
      message: Uint8Array | string,
      display?: DisplayEncoding
    ) => Promise<any>;
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, handler: (args: any) => void) => void;
    request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
  }
function App() {

  // var to store a function that gets a wallet provider
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  // vars to store and update provider's state
  const [provider,setProvider]=useState<PhantomProvider | undefined>(undefined);
  
  //generating a wallet key
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>( undefined );
  
  // prompting user to connect wallet if it exists
  const connectWallet=async()=>{
    
    // using to ignore the line below it
    // @ts-ignore
    const { solana }=window;

    if(solana){

      try{

        const response=await solana.connect();
        console.log('wallet account', response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      }
      catch(err){
        //
        console.log("User rejected the request");
      }
    }

  }

  //detecting if phantom provider exists
  useEffect(()=>{
    const provider=getProvider();

    if(provider) setProvider(provider);
    else setProvider(undefined);
  },[]); //only executes once the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h2>Connect to Phantom Wallet</h2>
        { //if extenion's there but wallet key's not
          provider ?
          walletKey ?
          <>Connected account {walletKey}</>
          :
          <button onClick={connectWallet}>Connect to Phantom Wallet</button>
          :
          <p>No provider found. Install <a href="https://phantom.app/">Phantom Browser extension</a></p>
        }
      </header>
    </div>
  );
}

export default App;
