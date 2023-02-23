import React from 'react';
import axios from 'axios';


const handleUserClick = (e: any) => {
    console.log(e.target.innerHTML);
}


export const UsersCard = (props: any) => {
const [users, setUsers] = React.useState<any>([]);
axios.get('http://localhost:4000/api/users').then((res) => {
        setUsers(res.data.ids);
    })
    .catch((err) => {
        console.log(err);
    });
return ( 

        <div className='dark:bg-gray-800 bg-gray-200 p-2 rounded h-full grid grid-rows-2 overflow-y-auto'>
            <div className='row-span-1'>
            <h1 className='dark:text-white'>Users Online:</h1>
            { users.map((user: any) => 
                 (
                    <div key={user} className='dark:text-white p-2 rounded'>
                        <a onClick={handleUserClick}>
                        {user}
                        </a>
                    </div>
                )
            )
            }
            </div>






        </div>
    );
};
        

export default UsersCard;