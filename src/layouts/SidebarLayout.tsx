import React from 'react';
import { UsersChannelsCard , ProfileSettingsCard } from '../componenets';
import { useAppSelector } from '../redux/hooks';

export const SidebarLayout = ({ setSettings } : {setSettings?:any}) => {
    const sidebarCollapsed = useAppSelector((state: any) => state.sidebarCollapsed.value);
    console.log(sidebarCollapsed);
    return (
        <div className={`dark:bg-[#2C2828] bg-gray-100 w-[350px] flex flex-col gap-y-2 ${sidebarCollapsed && 'w-10'}`}>
            <div className='h-max-[90vh]'>
            <UsersChannelsCard />
            </div>

            <div>
            <ProfileSettingsCard setSettings={setSettings} />
            </div>
        </div>
    );
};
export default SidebarLayout;