import React from 'react';
import { UsersChannelsCard , ProfileSettingsCard } from '../componenets';
import { useAppSelector } from '../redux/hooks';

export const SidebarLayout = () => {
    const sidebarCollapsed = useAppSelector((state: any) => state.sidebarCollapsed.value);
    console.log(sidebarCollapsed);
    return (
        <div className={`dark:bg-[#2C2828] bg-gray-100 flex flex-col  ${sidebarCollapsed ? 'w-14' : 'w-[350px] gap-y-2'}`}>
            <div className='h-max-[90vh]'>
            { !sidebarCollapsed && <UsersChannelsCard /> }
            </div>

            <div>
            <ProfileSettingsCard />
            </div>
        </div>
    );
};
export default SidebarLayout;