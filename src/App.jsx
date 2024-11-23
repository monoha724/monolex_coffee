import { useState } from 'react'
import './App.css'
import tlcLogoFull from '/tlcLogoFull.webp'
import searchIcon from '/search.svg'
import userIcon from '/user.svg'
import cartIcon from '/cart.svg'
import MainBanner from './components/mainPage/MainBanner'

function App() {

  return (
    <div className='layoutPage'>
      <div className='layoutHeaderBanner'
        class='grid grid-cols-6 gap-[1rem]'>
        <></>
        <div className='layoutLogoFull'
          class='grid justify-center my-[3rem] col-start-2 col-span-4'>
          <img src={tlcLogoFull} alt="tlcLogoFull" />
        </div>
        <div className='layoutUserMenu'
          class='grid grid-cols-3 text-center content-center gap-[2rem] px-[5rem]'>
          <img src={searchIcon} alt="searchIcon" />
          <img src={userIcon} alt="userIcon" />
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </div>
      <div class='flex justify-center mb-[3rem]'>
        <div className='layoutHeaderMenu'
          class='grid grid-cols-5 text-center gap-[3rem]'>
          <p>ホーム</p>
          <p>商品一覧</p>
          <p>TIMELESS COFFEEについて</p>
          <p>ブログ</p>
          <p>お問い合わせ</p>
        </div>
      </div>
      <hr />
      <div className='mainContentArea'
        class='flex justify-center w-auto h-auto'>
        <MainBanner />
      </div>
    </div>
  )
}

export default App
