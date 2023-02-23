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
  
  
  return (
    <div >
      <MainLayout main={settings ? <SettingsLayout /> : <ChatLayout /> } />
    </div>
  );
}

export default App;
