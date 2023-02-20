import React from 'react';
import { socket } from '../App';



export const UsersChannelsCard = (props: any) => {
const [users, setUsers] = React.useState<any>([]);

// List all users connected to the socket.io websocket server dynamically
socket.on('connect', () => {
    setUsers((user: any) => [...user, socket.id]);
    
    socket.emit('users', socket.id);
});


console.log(users);
return ( 

        <div className='dark:bg-[#2C2828] bg-gray-200 p-2 rounded max-h-[90vh]'>
            { users}




        </div>
    );
}
        

export default UsersChannelsCard;