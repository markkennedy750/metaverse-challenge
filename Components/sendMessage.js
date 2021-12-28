import { useState } from "react"
import { useMoralis } from "react-moralis"

function sendMessage({endOfMessagesRef}) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState("")

    const sendMessage =(e) => {
        e.preventDefault()

        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages()
        if(!message) return

        messages.save({
            message: message,
            username : user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message)=> {
            //The object was saved successfully.
        }, 
        (error)=> {
            console.log(error.message)
        })

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 
               max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400">
            <input className="outline-none bg-transparent
             text-white placeholder-gray-500 pr-5"
             value={message}
             onClick={e => setMessage(e.target.value)}
             placeholder={`Enter a Message ${user.getUsername()}....`} 
             type="text" />
            <button 
              type="submit"
              onClick={sendMessage}
              className="font-bold text-pink-500">Send</button>
        </form>
    )
}

export default sendMessage
