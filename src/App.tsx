import React, { useState } from 'react';
import { Manager } from 'socket.io-client';
import { MainLayout } from './layouts';
import { useAppSelector } from './redux/hooks';

function App() {
  const [settings, setSettings] = useState(false);
  const theme = useAppSelector((state: any) => state.theme.value);

  const manager = new Manager('http://localhost:4000', {
    autoConnect: false
  });


const socket = manager.socket('/');

socket.on('connect', () => {
  console.log('connected');
});

manager.open((err) => {
  if (err) {
    // an error has occurred
    console.log(err);
  } else {
    // the connection was successfully established
  }
});
  
  // print theme value from redux store
  console.log(theme);
  return (
    <div>
      <MainLayout sidebar={<div>asd</div>} main={<div>das</div>} settings={settings} setSettings={setSettings} />
    </div>
  );
}

export default App;
