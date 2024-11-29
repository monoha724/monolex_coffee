import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Collections() {
  const [items, setItems] = useState([]);
  // const [totalItemsCount, setTotalItemsCount] = useState();

  useEffect(() => {
    async function getItems(curPage = 1) {
      await axios
        .get("http://localhost:3000/items", {
          params: {
            _page: curPage,
            _limit: 8,
            _sort: Number("id"),
            _order: "desc",
          },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setTotalItemsCount();
        });
    }

    getItems();
  }, []);

  console.log();

  return (
    <div class="mt-[5rem] place-items-center">
      <div class="grid max-w-[1200px] w-full gap-[3rem]">
        <p class="text-3xl font-bold text-[#191919]">商品</p>
        <div class="grid grid-cols-4 gap-[3rem_1rem]">
          {items.map((item) => (
            <Link
              to={`/product/${item?.id}`}
              key={item.id}
              id={item.id}
              class="hover:drop-shadow-xl"
            >
              <div class="grid gap-[1rem]">
                <img src={item.img} alt={item.img} />
                <div class="grid gap-1">
                  <span class="text-[#999999]">{item.maker}</span>
                  <span>{item.pName}</span>
                  <span class="font-extrabold">
                    ¥{Number(item.price).toLocaleString()} JPY
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="paginationWrapper">{}</div>
      </div>
    </div>
  );
}

export default Collections;
