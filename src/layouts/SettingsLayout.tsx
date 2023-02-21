import React from 'react';

export const SettingsLayout = ({ children } : any) => (
        <div className='dark:bg-black w-full'>
            <div>
                <div className='dark:bg-[#151313] bg-white px-2 py-2'>
                {children}
                </div>
            </div>
        </div>
    );

export default SettingsLayout;