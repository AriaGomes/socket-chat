import React, { useState } from 'react';
import { motion } from 'framer-motion';
import socketIO from 'socket.io-client';
import { MainLayout, SettingsLayout } from './layouts';
import { ChatLayout } from './layouts/ChatLayout';
import { Settings } from './pages/Settings';
import { useAppSelector } from './redux/hooks';
import { Chat } from './pages';


export const socket = socketIO('http://localhost:4000');
function App() {
if (localStorage.getItem('sidebarCollapsed') === undefined) {
  localStorage.setItem('sidebarCollapsed', 'false');
}

  const theme = useAppSelector((state: any) => state.theme.value);
  const settings = useAppSelector((state: any) => state.settings.value);

  if (
    theme === 'dark'
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  socket.on('connect', () => {
    console.log('connected');
  });
  
  // fade in animation for the main layout delay of 0.5s
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 60,
      },
    },
  };
  
  return (
    <motion.div transition={fadeIn} layout>
      <MainLayout main={settings ? <SettingsLayout /> : <ChatLayout /> } />
    </motion.div>
  );
}

export default App;
