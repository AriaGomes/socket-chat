import React from 'react';
import { Settings } from '../pages';

export const SettingsLayout = ({ children } : any) => (
        <div className='dark:bg-black w-full'>
            <div>
                
                <div className='dark:bg-[#151313] bg-white'>
                    <Settings />
                </div>
            </div>
        </div>
    );

export default SettingsLayout;