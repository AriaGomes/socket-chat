import React from 'react';

export const SidebarLayout = ({ profileSettingsBadge }: {profileSettingsBadge: any }) => (
        <div className='dark:bg-[#2C2828] bg-gray-100'>
            {profileSettingsBadge()}
        </div>
    );

export default SidebarLayout;