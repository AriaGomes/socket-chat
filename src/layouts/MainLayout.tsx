import React from 'react';
import { SidebarLayout } from './SidebarLayout';
import { profileSettingsBadge } from '../componenets';

// sidebar and main are props that are passed to MainLayout JSX element
export const MainLayout = ({ sidebar, main, settings, setSettings }: {sidebar: any , main: any, settings: any, setSettings: any }) => 


    
    
(

        <div className='dark:bg-black'>
            <div className='grid grid-rows-1 grid-cols-10 grid-flow-col h-screen'>
                <div className='dark:bg-[#2C2828] bg-gray-100 col-span-3 row-span-1'>
                <SidebarLayout profileSettingsBadge={profileSettingsBadge} />
                </div>
                <div className='dark:bg-[#151313] bg-white col-span-7'>
                {settings === true ? 'settings' : main}
                </div>
            </div>
        </div>
    );
    

export default MainLayout;