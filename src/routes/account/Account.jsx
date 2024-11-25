import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Account() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('userInfo');
        setUserData(JSON.parse(localData));
    }, [])

    return (
        <div class='mt-[5rem] place-items-center'>
            <div class='max-w-[1200px] w-full'>
                <p class='text-3xl font-bold text-[#191919]'>アカウント</p>
                <div class='grid grid-cols-2'>
                    <div>
                        <img src={userData.userInfo?.picture} alt="userPicture" />
                    </div>
                    <div class='grid grid-rows-2'>
                        <span>{userData.userInfo?.family_name}</span>
                        <span>{userData.userInfo?.email}</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Account