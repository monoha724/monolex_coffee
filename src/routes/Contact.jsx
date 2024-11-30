import React from "react";

function Contact() {
  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[3rem] place-items-center">
        <p class="text-3xl font-bold text-[#191919] text-center">
          お問い合わせ
        </p>
        <form action="submit" class="flex flex-col gap-[1rem] w-[50%] h-fit">
          <div class="grid grid-cols-2 gap-[1rem]">
            <input
              type="text"
              class="border-2 border-slate-600 p-2"
              placeholder="名前"
            />
            <input
              type="email"
              class="border-2 border-slate-600 p-2"
              placeholder="メール"
            />
          </div>
          <input
            type="text"
            class="border-2 border-slate-600 p-2"
            placeholder="電話番号"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="コメント"
            class="border-2 border-slate-600 p-2"
          ></textarea>
          <div class="flex items-end">
            <button class="p-[0.5rem] text-[#f1f1f5] bg-slate-950 hover:bg-[#767676] w-[30%]">
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
