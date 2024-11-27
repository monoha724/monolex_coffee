import React from "react";
import { useState } from "react";
import { useAddCartStore } from "../../store/ProductToCart";

function ProductDetailBtn({ item }) {
  const { cartList } = useAddCartStore();
  const [quentity, setQuentity] = useState(1);
  const { addCart } = useAddCartStore();

  const newCartItem = () => {
    const newItem = { ...item, quentity: quentity };
    addCart(newItem);
    alert("追加成功！");
  };

  return (
    <>
      <div className="btnWrapper" class="grid grid-rows-3 gap-[1rem]">
        <div className="counterWrapper" class="flex justify-between">
          <span class="content-center font-bold">数量</span>
          <div class="flex justify-around border-2 items-center p-3 w-[50%]">
            <button
              onClick={() => {
                if (quentity > 1) {
                  setQuentity(quentity - 1);
                }
              }}
            >
              -
            </button>
            <div>
              <p
                onChange={(e) => {
                  quentity(e.target.value);
                }}
              >
                {quentity}
              </p>
            </div>
            <button
              onClick={() => {
                setQuentity(quentity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        {cartList.findIndex((e) => e.id === item.id) === -1 ? (
          <button
            onClick={() => {
              newCartItem();
              setQuentity(1);
            }}
            class="border-2 hover:font-bold hover:border-slate-950"
          >
            カートに追加
          </button>
        ) : (
          <button class="bg-[#767676] text-[#f1f1f5] disabled">
            カートに追加しました。
          </button>
        )}
        <button class="border-2 hover:font-bold hover:border-slate-950">
          購入
        </button>
      </div>
    </>
  );
}

export default ProductDetailBtn;
