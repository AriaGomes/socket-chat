import { useState, useCallback, useEffect } from 'react';
import { socket } from '../App';

export const ChatBox = (props: any) => {
  const [typing, setTyping] = useState(false);
  const [typingId, setTypingId] = useState('');
  

  const handleButtonSubmit = useCallback(() => {
    const chat = document.getElementById('chat') as HTMLTextAreaElement;
    socket.emit('chat', chat.value);
    chat.value = '';
  }, []);

  const handleOnTyping = useCallback(() => {
    socket.emit('typing', socket.id);

    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      socket.emit('stopTyping', socket.id);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleChatMessage = useCallback((msg: string, author: string) => {
    console.log(msg);
    // add metadata to message, time, name, etc

    const newMsg = { msg, author, time: new Date().toLocaleTimeString() };

    props.setMessages((prev: any) => [...prev, newMsg]);
  }, []);

  const handleTyping = useCallback((id: string) => {
    setTyping(true);
    setTypingId(id);


    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      socket.emit('stopTyping', socket.id);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleStopTyping = useCallback((id: string) => {
    console.log('stopTyping');
    setTyping(false);
    // Return component that shows typing
  }, []);

  useEffect(() => {
    socket.on('chat', handleChatMessage);
    socket.on('typing', handleTyping);
    socket.on('stopTyping', handleStopTyping);

    return () => {
      socket.off('chat', handleChatMessage);
      socket.off('typing', handleTyping);
      socket.off('stopTyping', handleStopTyping);
    };
  }, [handleChatMessage, handleTyping, handleStopTyping]);

    return (
        <div className='flex flex-col'>
        <div className="flex items-center px-3 mx-3 mb-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Upload image</span>
        </button>
        <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Add emoji</span>
        </button>
        <textarea id="chat" onChange={handleOnTyping} className="block h-15 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." style={{resize: 'none'}}></textarea>
            <button type="submit" onClick={handleButtonSubmit} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span className="sr-only">Send message</span>
        </button>
   
       
        </div>
        <div className='px-3 pb-2 h-[30px]'>
            {typing && <div> {typingId} is typing...</div>}
        </div>
    </div>
              
    );
};

export default ChatBox;