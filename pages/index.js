import Head from 'next/head'
import Login from '../Components/Login'
import { useMoralis } from "react-moralis";
import Header from '../Components/Header';
import Messages from '../Components/Messages';

export default function Home() {
  const { isAuthenticated } = useMoralis();


  if(!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b
         from-black to-fuchsia-700 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/metaverse.jpg" />
      </Head>
      <h1>Welcome to the App</h1>

       
         <div className='max-w-screen-2xl mx-auto'>
            {/** Header */}
             <Header />
            {/** Messages */}
             <Messages />
       
         </div>
    </div>
  )
}
