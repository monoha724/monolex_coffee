import React from "react";

function LayoutFooter() {
  return (
    <div
      className="layoutFooter"
      class="bg-stone-900 mt-[5rem] p-[5rem_0rem_3rem_0rem]"
    >
      <div class="flex flex-cols gap-[3rem] text-[#EDEDED] justify-center">
        <span>検索</span>
        <span>返送ポリシー</span>
        <span>配送ポリシー</span>
        <span>利用規約</span>
        <span>プライバシーポリシー</span>
        <span>特定商取引法に基づく表記</span>
      </div>
      <div class="flex justify-center mt-[5rem]">
        <span class="text-xs text-[#999999]">
          @ 2025, MONOLEX COFFEE karabiner
        </span>
      </div>
    </div>
  );
}

export default LayoutFooter;
