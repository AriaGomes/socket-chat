import React, { useState } from 'react';
import socketIO from 'socket.io-client';
import { MainLayout } from './layouts';
import { ChatLayout } from './layouts/ChatLayout';
import { useAppSelector } from './redux/hooks';
import { sidebarCollapsed } from './redux/slices/sidebarCollapsedSlice';


export const socket = socketIO('http://localhost:4000');
function App() {


  const settings = useAppSelector((state: any) => state.settings.value);
  console.log(settings);

  socket.on('connect', () => {
    console.log('connected');
  });
  
  return (
    <div>
      <MainLayout main={settings ? '' : <ChatLayout />} />
    </div>
  );
}

export default App;
