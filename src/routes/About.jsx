import React from "react";
import aboutImg from "/aboutImg.webp";
import tlcLogoFull from "/tlcLogoFull.webp";
import karabinerLogo from "/karabinerLogo.webp";

function About() {
  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full h-full gap-[3rem]">
        <p class="text-3xl font-bold text-[#191919]">MONOLEX COFFEEについて</p>
        <div class="grid grid-cols-2 gap-[3rem]">
          <div>
            <img src={aboutImg} alt="aboutImg" />
          </div>
          <div>
            <p class="text-2xl font-extrabold">
              夜に飲んでも、眠れるコーヒーはないものかと思った、
            </p>
            <br />
            <p class="text-lg text-[#191919]">
              とあるIT企業の社員の一言からこのコーヒーはつくられました。
              <br />
              <br />
              しっかりとした深煎りなコーヒーの味はそのままに、
              <br />
              カフェインレスにすることで、
              <br />
              夜に飲んでも、眠りを妨げることないよう加工をしています。
              <br />
              <br />
              ブラックとしてそのままの味わい楽しんだり、
              <br />
              ミルクを入れてカフェオレにしてもまた違った味わいが楽しめます。
              <br />
              <br />
              カフェインが気になる大人から、小さなお子さんまで
              <br />
              幅広く飲んでもらえると嬉しいです。 もちろん朝や昼にもぜひどうぞ。
              <br />
              <br />
              部屋でひとり、自分だけの静かな世界で自分のために淹れるコーヒー。
              <br />
              晩ごはんのあと、何気ない会話のために大切な人ために淹れるコーヒー。
              <br />
              <br />
              MONOLEX COFFEEは、
              <br />
              そんな時間に小さな明かりを灯すようなコーヒーです。
              <br />
              <br />
              <br />
            </p>
            <p class="text-end font-bold">とあるIT企業の社員より</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
