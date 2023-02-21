import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleTheme } from '../redux/slices/themeSlice';

export const DarkModeSwitch = (props: any) => {

  const theme = useAppSelector((state: any) => state.theme.value);
  const dispatch = useAppDispatch();
  const [isOn, setIsOn] = useState(() => {
    if (theme === 'dark') {
      return true;
    } 
      return false;
    
  });

  const toggleSwitch = () => {
    setIsOn(!isOn);
    dispatch(toggleTheme());
    };
    

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  if (isOn) {
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', theme);
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', theme);
  }

  if (
    theme === 'dark'
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start dark:bg-zinc-700 flex h-[50px] w-[100px] rounded-[50px] bg-gray-200 p-[5px] shadow-inner hover:cursor-pointer ${
        isOn && 'place-content-end'
      }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white dark:bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {!isOn ? (
            <RiSunFill className="h-6 w-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-white" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;