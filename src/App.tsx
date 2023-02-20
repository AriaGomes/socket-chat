import React, { useState } from 'react';
import socketIO from 'socket.io-client';
import { MainLayout } from './layouts';
import { useAppSelector } from './redux/hooks';

function App() {
  const [settings, setSettings] = useState(false);
  const theme = useAppSelector((state: any) => state.theme.value);

 
  const socket = socketIO('http://localhost:4000');
  socket.on('connect', () => {
    console.log('connected');
  });
  
  return (
    <div>
      <MainLayout main={<div>das</div>} settings={settings} setSettings={setSettings} />
    </div>
  );
}

export default App;
