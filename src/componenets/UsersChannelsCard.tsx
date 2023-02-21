import React from 'react';
import axios from 'axios';




export const UsersChannelsCard = (props: any) => {
const [users, setUsers] = React.useState<any>([]);
axios.get('http://localhost:4000/api/users').then((res) => {
        setUsers(res.data.ids)
    })
    .catch((err) => {
        console.log(err)
    })
return ( 

        <div className='dark:bg-gray-800 bg-gray-200 p-2 rounded max-h-[90vh]'>
            { users.map((user: any) => 
                 (
                    <div key={user} className='dark:text-white p-2 rounded'>
                        {user}
                    </div>
                )
            )
            }




        </div>
    );
}
        

export default UsersChannelsCard;