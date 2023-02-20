import React, { useState } from 'react';
import socketIO from 'socket.io-client';
import { MainLayout } from './layouts';
import { ChatLayout } from './layouts/ChatLayout';
import { useAppSelector } from './redux/hooks';

export const socket = socketIO('http://localhost:4000');

function App() {
  const [settings, setSettings] = useState(false);
  const theme = useAppSelector((state: any) => state.theme.value);

 

  socket.on('connect', () => {
    console.log('connected');
  });
  
  return (
    <div>
      <MainLayout main={settings ? '' : <ChatLayout />} setSettings={setSettings} />
    </div>
  );
}

export default App;
