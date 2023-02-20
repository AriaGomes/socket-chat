import React from 'react';
import { useAppSelector } from '../redux/hooks';


export const SidebarLayout = ({ profileSettingsBadge }: {profileSettingsBadge: any }) => {
    const sidebarCollapsed = useAppSelector((state: any) => state.sidebarCollapsed.value);
    console.log(sidebarCollapsed);
    return (
        <div className={`dark:bg-[#2C2828] bg-gray-100 w-[350px] ${sidebarCollapsed && 'w-10'}`}>
            {profileSettingsBadge()}
        </div>
    );
};
export default SidebarLayout;