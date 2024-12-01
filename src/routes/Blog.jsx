import React from "react";
import tlcLogoSquare from "/tlcLogoSquare.webp";
import pberryLogo from "/pberryLogo.webp";
import notion from "/notion.png";

function Blog() {
  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[3rem]">
        <p class="text-3xl font-bold text-[#191919]">
          ブログ (内容ページ追加予定)
        </p>
        <div class="grid grid-cols-3 gap-[3rem]">
          <div class="grid gap-[1rem]">
            <img src={pberryLogo} alt="set01" />
            <div class="grid gap-2">
              <p class="text-xl font-extrabold truncate">
                P-BERRYこだわりのカフェインレスコーヒー
              </p>
              <p class="text-[#999999]">2022年 ○月 ○日</p>
              <p class="line-clamp-4 text-ellipsis">
                こだわりのポイントは 〇薬剤を使用しないカフェイン除去方法
                水抽出、ウォータープロセス、あるいはより具体的な方法の呼称からスイス式水抽出法と呼ばれており、1941年に開発され、アメリカで特許取得されているカフェイン抽出方法。
                ウォータープロセスとは、生豆を熱湯に浸し、コーヒー豆から香りや風味・カフェインを抽出し、その液体を特殊なフィルターでこす事で、カフェインが除去されます。
                その後、ろ過した熱湯に取り除いた豆を浸すことで、香りと味を豆に戻し、カフェインレスのコーヒー豆ができあがります。
              </p>
            </div>
          </div>
          <div class="grid gap-[1rem]">
            <img src={notion} alt="set01" class="w-full" />
            <div class="grid gap-2">
              <p class="text-xl font-extrabold truncate">
                【重要】「プライバシーポリシー」改定のお知らせ
              </p>
              <p class="text-[#999999]">2022年 4月 27日</p>
              <p class="line-clamp-4 text-ellipsis">
                このたび、2022年4月1日付でカラビナテクノロジー株式会社の「プライバシーポリシー」（以下、「本ポリシー」といいます。）を改定いたします。
                本改定は、2022年4月1日より施行した改正個人情報保護法に対応し、弊社の個人情報の取り扱いについて分かりやすくお伝えすることで、お客様により安全に弊社サービスをご利用いただくことを目的とした改定です。
              </p>
            </div>
          </div>
          <div class="grid gap-[1rem]">
            <img src={tlcLogoSquare} alt="set01" />
            <div class="grid gap-2">
              <p class="text-xl font-extrabold truncate">
                コーヒーチーム、結成
              </p>
              <p class="text-[#999999]">2022年 2月 11日</p>
              <p class="line-clamp-4 text-ellipsis">
                カラビナテクノロジーのブラボー(bravo)です。
                カラビナテクノロジーでやっているコーヒーECプロジェクトであるtimeless
                coffeeですが、今年の1月にオープンしました。
                https://timeless-coffee.karabiner.tech/ まだtimeless coffee
                について知らない方は↓のnoteからどうぞ！
                https://note.com/karabinertech/n/n6e1a12c7ebae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
