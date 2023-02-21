import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { toggleSidebar } from '../redux/slices/sidebarCollapsedSlice';
import { toggleSettings } from '../redux/slices/settingsSlice';

export const ProfileSettingsCard = () => {
    
    const dispatch = useAppDispatch();

    const handleSidebarClick = () => {
        dispatch(toggleSidebar());
    };

    const handleSettingsClick = () => {
        dispatch(toggleSettings());
    };

    


    return (
    <div className='dark:bg-gray-800 bg-gray-200 dark:text-white rounded p-2 min-h-[100px] '>
        <div>
        <button type='submit' onClick={handleSidebarClick}>
            sidebarCollapse
        </button>
        </div>

        <div>
        <button type='submit' onClick={handleSettingsClick}>
            settings
        </button>
        </div>
    </div>
);

};
 
export default ProfileSettingsCard;