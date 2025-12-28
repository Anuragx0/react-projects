import React, { useContext} from 'react';
import userContext from '../context/userContext';


function Profile () {
    const {user} = useContext(userContext)

    console.log(user)


    if(!user) return <h2>please Login</h2>

    return <h2 className='m-4 text-4xl'>Welcome {user}</h2>
};


export default Profile ;