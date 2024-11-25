import React from 'react'
import set01 from '/items/best/set01.webp'

function Product() {
  return (
    <div class='mt-[5rem] place-items-center'>
      <div class='grid max-w-[1200px] w-full h-full gap-[3rem]'>
          <div class='grid grid-cols-2 gap-[3rem]'>
            <div>
                <img src={set01} alt="set01" />
            </div>
            <div class='flex flex-col gap-[0.5rem]'>
                <p class='text-[#767676]'>TIMELESS COFFEE</p>
                <p class='text-2xl font-extrabold'>TIMELESS COFFEE + ミルセット</p>
                <div class='mt-[2rem]'>
                    <p class='text-xl font-bold'>¥3,400 JPY</p>
                    <p class='text-sm text-[#767676]'>税込み。配送料はチェックアウト時に計算されます。</p>
                </div>
                <div>
                    
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Product