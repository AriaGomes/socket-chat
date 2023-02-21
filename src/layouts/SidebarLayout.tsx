import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersCard , ProfileSettingsCard, ChannelsCard } from '../componenets';
import { useAppSelector } from '../redux/hooks';

export const SidebarLayout = () => {

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 20,
      };

    const sidebarCollapsed = useAppSelector((state: any) => state.sidebarCollapsed.value);
    return (
        <AnimatePresence>
        <motion.div transition={spring} layout className={`dark:bg-[#2C2828] bg-gray-100 h-full grid grid-rows-2 ${sidebarCollapsed ? 'w-14 gap-y-2' : 'w-[350px] gap-y-2'}`}>
            <motion.div  className='h-max-[90vh] h-full row-span-1'>
                
            { !sidebarCollapsed && <UsersCard /> }
            
           
            </motion.div>

            <motion.div className='h-full row-span-1'>
                { !sidebarCollapsed && <ChannelsCard />}
            </motion.div>

            <motion.div>
            <ProfileSettingsCard /> 
            </motion.div>
        </motion.div>
        </AnimatePresence>
    );
};
export default SidebarLayout;