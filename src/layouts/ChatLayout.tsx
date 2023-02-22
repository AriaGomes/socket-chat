import React from 'react';
import { Chat } from '../pages';

export const ChatLayout = (props: any) => 
    // console.log("")
     (
        <div className='dark:bg-[#151313] dark:text-white bg-white h-full'>
            <Chat />
        </div>
    );

export default ChatLayout;