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
        {
          provider && (
            <button>Connect to Phantom Wallet</button>
          )
        }
        {
          !provider && <p>No provider found. Install <a href="https://phantom.app/">Phantom Browser extension</a></p>
        }
      </header>
    </div>
  );
}

export default App;
