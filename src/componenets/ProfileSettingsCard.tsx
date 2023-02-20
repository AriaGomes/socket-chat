import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { toggleSidebar } from '../redux/slices/sidebarCollapsedSlice';



export const ProfileSettingsCard = () => {
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        dispatch(toggleSidebar())
    }

    return (
    <div className='dark:bg-[#2C2828] bg-gray-200 rounded p-2 min-h-[100px] '>
        <button type='submit' onClick={handleOnClick}>
            asd
        </button>
    </div>
);

};
 
export default ProfileSettingsCard;