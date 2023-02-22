import React from 'react';
import { SidebarLayout } from '.';

export const MainLayout = ({ main }: { main: any }) => 

    
    
    
(

        <div className='dark:bg-black h-screen'>
            <div className='flex h-full'>
                <div className='dark:bg-[#2C2828] bg-gray-100 px-2 py-2'>
                <SidebarLayout />
                </div>
                <div className='dark:bg-[#151313] bg-white break-words overflow-x-hidden w-full'>
                {main}
                </div>
            </div>
        </div>
    );
    

export default MainLayout;