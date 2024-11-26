import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailBtn from "../components/product/ProductDetailBtn";

function Product() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getItem() {
      const response = await fetch(`http://localhost:3000/items/${id}`);
      const resData = await response.json();
      setItem(resData);
    }

    getItem();
  }, []);

  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1000px] w-full h-full gap-[5rem]">
        <div
          className="productDetailWrapper"
          class="grid grid-cols-2 gap-[3rem]"
        >
          <div>
            <img src={item.img} alt={item.img} />
          </div>
          <div class="flex flex-col h-full justify-between">
            <div class="flex flex-col">
              <p class="text-[#767676]">{item.maker}</p>
              <p class="text-2xl font-extrabold">{item.pName}</p>
            </div>
            <div class="flex flex-col text-end gap-1">
              <p class="text-xl font-bold">¥{item.price} JPY</p>
              <p class="text-sm text-[#767676]">
                税込み。配送料はチェックアウト時に計算されます。
              </p>
            </div>
            <hr />
            <ProductDetailBtn />
          </div>
        </div>
        <div className="productDetailExp" class="grid grid-cols-2 gap-[3rem]">
          <div class="flex flex-col gap-[1rem]">
            <p class="font-bold">特徴</p>
            <hr />
            <p>
              ・日本初のコーヒーかすでできたステンレスタンブラー
              <br />
              <br />
              ・夏は冷たさ、冬は温かさを維持する、オールシーズンに対応可能
              <br />
              <br />
              ・「TABLE FOR TWO」に賛同し、売り上げの一部が発展途上国へ寄付
              <br />
              <br />※ TABLE FOR TWOとは
              <br />
              先進国の人々と開発途上国の子どもたちが食事を分かち合うというコンセプトで活動する特定非営利活動法人。世界では、約10億人が飢餓や栄養失調で苦しむ一方、約20億人が食に起因する生活習慣病を抱えています。この食の不均衡を解消し、開発途上国と先進国双方の人々の健康を同時に改善することをミッションとしています。
            </p>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <p class="font-bold">詳細</p>
            <hr />
            <p>
              本体サイズ：W80 × H145mm
              <br />
              <br />
              外側・蓋：ポリプロピレン、コーヒーかす
              <br />
              <br />
              内側：ステレンス
              <br />
              <br />
              パッキン：シリコン
              <br />
              <br />
              保温効力：1時間 59℃
              <br />
              <br />
              保冷効力：1時間 8℃
              <br />
              <br />
              包装形態：個包装（紙箱）
              <br />
              <br />
              食洗機：不可
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
