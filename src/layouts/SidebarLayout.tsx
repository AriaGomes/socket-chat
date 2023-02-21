import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersChannelsCard , ProfileSettingsCard } from '../componenets';
import ProfileSettingsCardCollapsed from '../componenets/ProfileSettingsCollapsed';
import { useAppSelector } from '../redux/hooks';

export const SidebarLayout = () => {

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 20,
      };

    const sidebarCollapsed = useAppSelector((state: any) => state.sidebarCollapsed.value);
    return (
        
        <motion.div transition={spring} layout className={`dark:bg-[#2C2828] bg-gray-100 flex flex-col  ${sidebarCollapsed ? 'w-14' : 'w-[350px] gap-y-2'}`}>
            <AnimatePresence >
            <motion.div transition={spring} layout className='h-max-[90vh]'>
                
            { !sidebarCollapsed && <UsersChannelsCard /> }
           
            </motion.div>
            </AnimatePresence>
            <motion.div>
            { !sidebarCollapsed && <ProfileSettingsCard /> }
            </motion.div>

            <motion.div>
            { sidebarCollapsed && <ProfileSettingsCardCollapsed /> }
            </motion.div>
        </motion.div>

    );
};
export default SidebarLayout;