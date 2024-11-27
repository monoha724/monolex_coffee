import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const [userData, setUserData] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("userInfo");
    setUserData(JSON.parse(localData));
  }, []);

  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[3rem]">
        <p class="text-3xl font-bold text-[#191919]">アカウント</p>
        <div class="grid grid-cols-3 items-center place-items-center">
          <div>
            <img src={userData.userInfo?.picture} alt="userPicture" />
          </div>
          <div class="grid grid-rows-2">
            <span>{userData.userInfo?.family_name}</span>
            <span>{userData.userInfo?.email}</span>
          </div>
          <button
            class="bg-[#191919] text-[#f1f1f5] w-fit px-[3rem] py-[1rem] hover:bg-[#767676]"
            onClick={() => {
              localStorage.removeItem("userInfo");
              localStorage.removeItem("cartStorage");
              navi("/");
            }}
          >
            ログアウト
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Account;
