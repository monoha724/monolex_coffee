import { useState } from 'react'
import './App.css'
import tlcLogoFull from '/tlcLogoFull.webp'
import searchIcon from '/search.svg'
import userIcon from '/user.svg'
import cartIcon from '/cart.svg'
import MainBanner from './components/mainPage/MainBanner'
import MainCollectionsBoard from './components/mainPage/MainCollectionsBoard'
import MainCompanyLogo from './components/mainPage/MainCompanyLogo'

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
          class='grid grid-cols-5 max-w-[1200px] text-center gap-[3rem]'>
          <p>ホーム</p>
          <p>商品一覧</p>
          <p>TIMELESS COFFEEについて</p>
          <p>ブログ</p>
          <p>お問い合わせ</p>
        </div>
      </div>
      <div className='mainContentArea'
        class='flex flex-col justify-center w-auto h-auto gap-[3rem]'>
        <MainBanner />
        <MainCollectionsBoard/>
        <hr />
        <MainCompanyLogo />
      </div>
      <div className='layoutFooter'
        class='bg-stone-900 mt-[5rem] p-[5rem_0rem_3rem_0rem]'>
          <div class='flex flex-cols gap-[3rem] text-[#EDEDED] justify-center'>
            <p>検索</p>
            <p>返送ポリシー</p>
            <p>配送ポリシー</p>
            <p>利用規約</p>
            <p>プライバシーポリシー</p>
            <p>特定商取引法に基づく表記</p>
          </div>
          <div class='flex justify-center mt-[5rem]'>
            <p class='text-xs text-[#999999]'>@ 2024, TIMELESS COFFEE karabiner</p>
          </div>
      </div>
    </div>
  )
}

export default App
