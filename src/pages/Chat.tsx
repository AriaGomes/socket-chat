import { useState } from 'react';
import { ChatBox } from '../componenets';


export const Chat = () => {
    const [messages , setMessages] = useState([]);
    console.log('Chat');
    return (

        
    <>
    <div className="flex flex-col h-full">
    <div className='dark:bg-[#2C2828] dark:text-white bg-white px-2 py-2 text-xl'>
            Chat
        </div>


      

        <div className='dark:bg-[#151313] bg-white break-words overflow-x-hidden h-full w-full'>
            {messages.map((message: any) => (
                <div className='dark:bg-[#2C2828] bg-gray-100 px-2 py-2'>
                    <div className='dark:text-white'>
                        {message.time}
                    </div>
                    <div className='dark:text-white'>
                        {message.author}:
                    </div>
                    <div className='dark:text-white'>
                        {message.msg}
                    </div>
                    
                </div>
            ))}
        </div>
         

                <div className='sticky dark:bg-[#2C2828] bg-gray-100 pt-3'>
                    <ChatBox setMessages={setMessages} />
                </div>
            </div>
         
            </>
           


    );
};

export default Chat;