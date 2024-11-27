import React from "react";
import { Link } from "react-router-dom";
import { useAddCartStore } from "../store/productToCart";

function Cart() {
  const { cartList, removeCartItem } = useAddCartStore();

  const totalQuentity = cartList.reduce((acc, cur) => acc + cur.quentity, 0);

  const totalPrice = cartList.reduce(
    (acc, cur) => acc + cur.quentity * cur.price,
    0
  );

  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[3rem]">
        <div>
          <p class="text-3xl font-bold text-[#191919]">カート</p>
        </div>
        <div class="grid grid-flow-row gap-[1rem]">
          {cartList.length !== 0 ? (
            <>
              <div class="grid grid-cols-6 gap-[3rem]">
                <div class="col-start-1 col-end-4 text-[#999999] text-sm">
                  商品
                </div>
                <div class="text-[#999999] text-sm text-center">数量</div>
                <div class="text-[#999999] text-sm text-center">合計</div>
              </div>
              {cartList.map((item) => (
                <div
                  class="grid grid-cols-6 gap-[3rem] max-h-[400px] items-center border-y-2"
                  key={item.id}
                  id={item.id}
                >
                  <img src={item.img} alt={item.id} />
                  <div class="col-start-2 col-end-4">
                    <p class="text-sm text-[#999999]">{item.maker}</p>
                    <p class="text-lg font-bold">{item.pName}</p>
                  </div>
                  <div class="text-center">{item.quentity}</div>
                  <div class="text-center">
                    ¥ {Number(item.price * item.quentity).toLocaleString()}
                  </div>
                  <button
                    class="text-center text-[#767676] hover:text-[#191919]"
                    onClick={() => {
                      removeCartItem(item.id);
                    }}
                  >
                    削除
                  </button>
                </div>
              ))}
              <div class="grid grid-cols-6 gap-[3rem] mt-[1rem] text-center">
                <span class="col-start-4 col-end-5">小計</span>
                <span class="col-start-5 col-end-6">
                  {totalQuentity} 個　¥ {totalPrice.toLocaleString()}
                </span>
              </div>
            </>
          ) : (
            <div class="grid grid-rows-4 place-items-center gap-[1rem]">
              <span class="text-4xl">カートは空です</span>
              <Link to="/collections">
                <button class="bg-[#191919] text-[#f1f1f5] w-fit px-[3rem] py-[1rem] hover:bg-[#767676]">
                  買い物を続ける
                </button>
              </Link>
              <div class="row-start-4 row-end-5 text-center">
                <span class="text-xl">アカウントをお持ちですか?</span>
                <br />
                <span class="text-xl">
                  ログインすることで、チェックアウトがスピーディーに行えます。
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
