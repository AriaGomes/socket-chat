import React from 'react';
import { DarkModeSwitch } from '../componenets';

export const Settings = () => 
     (
        <><div>
        <div className='dark:bg-black dark:text-white bg-white'>
            Settings
        </div>
    </div><div>
            <DarkModeSwitch />
        </div></>
    );

export default Settings;
