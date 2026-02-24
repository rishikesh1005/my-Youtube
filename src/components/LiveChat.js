import React,{useState , useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const [liveMessage , setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store)=> store.chat.messages)

  useEffect(()=>{
  
    const i = setInterval(()=>{
      // API POLLING
      console.log("API POLLING")
      
      dispatch(addMessage({
        name: generateRandomName(),
        message:makeRandomMessage(20),
      }
      ))
    },2000)

    return () => clearInterval(i)

  },[])

  return (
    <>
      <div className='ml-1 p-2 h-[500px] border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {ChatMessages.map((c,i)=>(
          <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
          
      </div>

      <form className='ml-1 p-2 border border-black rounded-md' 
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
              name:"Rishi",
              message:liveMessage,
            }))
             setLiveMessage("")
          }}
         
      >
        <input 
            className='w-[350px] px-2 border border-blue-300' 
            type='text'
            value={liveMessage}
            onChange={(e)=>{
                 setLiveMessage(e.target.value)
            }} 
        />
        <button className='mx-2 px-2 bg-green-600'>send</button>
      </form>
    </>
  )
}

export default LiveChat