import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tlcLogoSquare from "/tlcLogoSquare.webp";

function Login() {
  const navi = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null || undefined) {
      navi("/");
    }
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo.data);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ userInfo: userInfo.data })
      );
      navi("/");
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[1rem] place-items-center">
        <p class="text-3xl font-bold text-[#191919] text-center">ログイン</p>
        <img class="w-[20%]" src={tlcLogoSquare} alt="tlcLogoSquare" />
        <div class="grid place-items-center">
          <button
            class="px-[3rem] py-[1rem] border-2 hover:bg-[#034C91] hover:border-[#034c91] hover:text-[#FFDD2C]"
            onClick={() => googleLogin()}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
