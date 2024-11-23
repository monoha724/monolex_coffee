import React from 'react'
import set01 from '/items/best/set01.webp'
import tumblr from '/items/best/tumblr.webp'
import coffee01 from '/items/best/coffee01.webp'
import coffee02 from '/items/best/coffee02.webp'
import set02 from '/items/sets/set02.webp'
import set03 from '/items/sets/set03.webp'
import set05 from '/items/sets/set05.webp'
import set06 from '/items/sets/set06.webp'
import pot04 from '/items/pots/pot04.webp'
import pot05 from '/items/pots/pot05.webp'
import pot06 from '/items/pots/pot06.webp'
import pot08 from '/items/pots/pot08.webp'


function MainCollectionsBoard() {
  return (
    <div className='mainCollectionsBoards'
        class='grid grid-rows-3 gap-[3rem] place-items-center'>
        <div className='mainCollectionsSetArea'
            class='grid max-w-[1200px] gap-[1rem]'>
            <p class='text-2xl font-extrabold'>TIMELESS BEST</p>
            <div class='grid grid-cols-4 content-center gap-[1rem]'>
                <div class='grid gap-[1rem]'>
                    <img src={set01} alt="set01" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>TIMELESS COFFEE</p>
                        <p>TIMELESS COFFEE + ミルセット</p>
                        <p class='font-extrabold'>¥3,400 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={tumblr} alt="tumblr" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>TIMELESS COFFEE</p>
                        <p>SUS Coffee タンブラー (350ml)</p>
                        <p class='font-extrabold'>¥2,420 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={coffee01} alt="coffee01" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>TIMELESS COFFEE</p>
                        <p>TIMELESS コーヒー豆 (100g)</p>
                        <p class='font-extrabold'>¥880 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={coffee02} alt="coffee02" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>TIMELESS COFFEE</p>
                        <p>TIMELESS コーヒー豆 2個セット (200g)</p>
                        <p class='font-extrabold'>¥1,650 JPY</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mainCollectionsDripperArea'
            class='grid max-w-[1200px] gap-[1rem]'>
            <p class='text-2xl font-extrabold'>SET</p>
            <div class='grid grid-cols-4 content-center gap-[1rem]'>
                <div class='grid gap-[1rem]'>
                    <img src={set02} alt="set02" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>COFFEE CHANGGO</p>
                        <p>ハニカム お得セット (豆 200g贈呈)</p>
                        <p class='font-extrabold'>¥3,080 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={set03} alt="set03" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>NUVO</p>
                        <p>HOMEBREW デュアルドリップセット</p>
                        <p class='font-extrabold'>¥1,530 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={set05} alt="set05" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>HARIO</p>
                        <p>アイスコーヒーメーカー</p>
                        <p class='font-extrabold'>¥2,320 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={set06} alt="set06" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>KALITA</p>
                        <p>ウェーブ 185 ドリップセット</p>
                        <p class='font-extrabold'>¥4,400 JPY</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mainCollectionsPotArea'
            class='grid max-w-[1200px] gap-[1rem]'>
            <p class='text-2xl font-extrabold'>COFFEE POT</p>
            <div class='grid grid-cols-4 content-center gap-[1rem]'>
                <div class='grid gap-[1rem]'>
                    <img src={pot06} alt="pot06" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>CITTA</p>
                        <p>テフロンドリップポート</p>
                        <p class='font-extrabold'>¥2,540 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={pot08} alt="pot08" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>NUVO</p>
                        <p>HOMEBREW クラシックドリップポート</p>
                        <p class='font-extrabold'>¥2,650 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={pot04} alt="pot04" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>FELLOW</p>
                        <p>スタッグ 電気ポット 900ml (Black)</p>
                        <p class='font-extrabold'>¥24,240 JPY</p>
                    </div>
                </div>
                <div class='grid gap-[1rem]'>
                    <img src={pot05} alt="pot05" />
                    <div class='grid gap-1'>
                        <p class='text-[#999999]'>FELLOW</p>
                        <p>スタッグ 電気ポット 900ml (White)</p>
                        <p class='font-extrabold'>¥29,750 JPY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

{/* <div class='grid gap-[1rem]'>
    <img src={set01} alt="set01" />
    <div class='grid gap-1'>
        <p class='text-[#999999]'>TIMELESS COFFEE</p>
        <p>TIMELESS COFFEE + ミルセット</p>
        <p class='font-extrabold'>¥3,400 JPY</p>
    </div>
</div> */}

export default MainCollectionsBoard