import React from 'react';
import { SidebarLayout } from './SidebarLayout';
import { profileSettingsBadge } from '../componenets';
import { useAppSelector } from '../redux/hooks';

// sidebar and main are props that are passed to MainLayout JSX element
export const MainLayout = ({ main, settings, setSettings }: { main: any, settings: any, setSettings: any }) => 

    
    
    
(

        <div className='dark:bg-black'>
            <div className='flex h-screen'>
                <div className='dark:bg-[#2C2828] bg-gray-100 pr-3'>
                <SidebarLayout profileSettingsBadge={profileSettingsBadge} />
                </div>
                <div className='dark:bg-[#151313] bg-white '>
                {settings === true ? 'settings' : main}
                </div>
            </div>
        </div>
    );
    

export default MainLayout;