import React from 'react'
import tlcLogoFull from '/tlcLogoFull.webp'
import searchIcon from '/search.svg'
import accountIcon from '/account.svg'
import cartIcon from '/cart.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LayoutHeader() {
    const navi = useNavigate();
    const accountPageHandler = () => {
        if(localStorage.length === 0){
            navi("/account/login");
        } else {
            navi("/account");
        }
    };

    return (
    <>
        <div className='layoutHeader'
            class='grid grid-cols-6 gap-[1rem]'>
            <></>
            <div className='layoutLogoFull'
                class='grid justify-center my-[3rem] col-start-2 col-span-4'>
                <Link to='/'>
                    <img src={tlcLogoFull} alt="tlcLogoFull" />
                </Link>
            </div>
            <div className='layoutUserMenu'
                class='grid grid-cols-3 text-center content-center gap-[2rem] px-[5rem]'>
                <img src={searchIcon} alt="searchIcon" />
                <img src={accountIcon} alt="accountIcon" onClick={accountPageHandler}/>
                <img src={cartIcon} alt="cartIcon" />
            </div>
        </div>
        <hr />
        <div class='flex justify-center my-[1.5rem]'>
            <div className='layoutHeaderMenu'
                class='grid grid-cols-5 max-w-[1200px] text-center gap-[3rem]'>
                <Link to='/'>ホーム</Link>
                <Link to='/collections'>商品一覧</Link>
                <Link to='/about'>TIMELESS COFFEEについて</Link>
                <Link to='/blog'>ブログ</Link>
                <Link to='/contact'>お問い合わせ</Link>
            </div>
        </div>
        <hr />
    </>
    )
}

export default LayoutHeader