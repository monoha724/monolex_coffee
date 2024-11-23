import React from 'react'
import tlcLogoFull from '/tlcLogoFull.webp'
import karabinerLogo from '/karabinerLogo.webp'

function MainCompanyLogo() {
  return (
    <div className='MainCompanyLogo'
        class='flex justify-center'>
        <div class='grid grid-cols-2 gap-[3rem] max-w-[1200px] w-full place-items-end'>
            <div class='grid gap-[1rem]'>
                <img src={tlcLogoFull} alt="tlcLogo" />
                <p class='text-center text-sm'>
                    カラビナテクノロジー株式会社をPRするサークル内の有志で行っているプロジェクトです。<br />
                    プログラミング、コーディング、デザイン、音楽。<br />
                    それぞれの得意分野を活かしながら、エンジニアに嬉しいコーヒーをお届けします。
                </p>
            </div>
            <div class='grid gap-[1rem]'>
                <img src={karabinerLogo} alt="karabinerLogo" />
                <p class='text-center text-sm'>
                ”創造力”を”現実”につなげる。<br />
                主にシステム開発・アプリ開発・ Webサイト制作を行っている会社です。<br />
                福岡を拠点に、南は沖縄から北は仙台、また海外のメンバーも参加しています。<br />
                </p>
            </div>
        </div>
    </div>
  )
}

export default MainCompanyLogo