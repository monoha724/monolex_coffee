import React from "react";

function ProductDetailBtn() {
  return (
    <>
      <div className="btnWrapper" class="grid grid-rows-3 gap-[1rem]">
        <div className="counterWrapper" class="flex justify-between">
          <span class="content-center font-bold">数量</span>
          <div class="flex justify-around border-2 items-center p-3 w-[50%]">
            <div>
              <p>-</p>
            </div>
            <div>
              <p>0</p>
            </div>
            <div>
              <p>+</p>
            </div>
          </div>
        </div>
        <button class="border-2 hover:font-bold hover:border-slate-950">
          カートに追加
        </button>
        <button class="border-2 hover:font-bold hover:border-slate-950">
          購入
        </button>
      </div>
    </>
  );
}

export default ProductDetailBtn;
