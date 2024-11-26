import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navi = useNavigate();

  useEffect(() => {
    if (!localStorage.length == 0) {
      navi("/");
    }
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
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
    <div
      className="loginForm"
      class="grid max-w-[1200px] w-full justify-center gap-[3rem]"
    >
      <span class="text-3xl font-bold text-[#191919]">ログイン</span>
      <div>
        <button onClick={() => googleLogin()}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
