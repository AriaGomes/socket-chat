import React from 'react';

export const ChatLayout = (props: any) => 
    // console.log("")
     (
        <div className='dark:bg-[#151313] dark:text-white bg-white px-2 py-2'>
            {props.children}
        </div>
    )

export default ChatLayout;