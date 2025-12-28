import React, { useEffect, useState } from 'react';

export default function github (){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/anuragx0')
        .then(res => res.json())
        .then((data)  => {
            console.log(data);
            setData(data);
        })
    } ,[])


    return(
        <>
        <div className='p-5 h-[60vh] w-[200vh] flex m-5 bg-gray-700 text-white'>
            <img className='rounded-xl' src={data.avatar_url} alt="" />
            <div>
                <h1 className='text-3xl text-center mt-5 p-5 '>GITHUB</h1>
                <h2 className='text-3xl text-center mt-5 p-5 '>Follower : {data.followers}</h2>
                <h4 className='text-xl w-[100vh] text-center mt-5 p-5 text-wrap'>Bio : {data.bio}</h4>
                
            </div>
        </div>
        </>
    )
}

