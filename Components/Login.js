import Image from "next/image"
import metaverse from "../public/metaverse.jpg"
import mega from "../public/mega.jpg"
import myimage from "../public/myimage.jpg"
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <h1>I am the Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center
              justify-center space-y-4">
              
              <Image 
                 className="object-cover rounded-full"
                 height={200} width={200}
                 src={myimage}
                />
               {/** Logo*/}

               {/** Login Button*/}

               <button onClick={authenticate}
                 className="bg-pink-700 rounded-lg p-5 font-bold animate-pulse"
                  >Login to the METAVERSE</button>
            
            </div>

            <div className="w-full h-screen">
              <Image
                 layout="fill" objectFit="cover"
                 src={metaverse}
                 />
               {/** Logo*/}
            </div>
        </div>
    )
}

export default Login
