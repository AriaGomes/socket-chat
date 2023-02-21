import React from 'react';
import { SidebarLayout } from '.';

export const MainLayout = ({ main }: { main: any }) => 

    
    
    
(

        <div className='dark:bg-black'>
            <div className='flex h-screen'>
                <div className='dark:bg-[#2C2828] bg-gray-100 px-2 py-2'>
                <SidebarLayout />
                </div>
                <div className='dark:bg-[#151313] bg-white px-2 py-2 w-full break-words overflow-x-hidden'>
                {main}
                </div>
            </div>
        </div>
    );
    

export default MainLayout;