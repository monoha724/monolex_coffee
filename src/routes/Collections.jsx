import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Collections() {
  const navi = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://localhost:3000/items");
      const resData = await response.json();
      setItems(resData);
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
            <Link to={`/product/${item?.id}`} class="hover:drop-shadow-xl">
              <div class="grid gap-[1rem]">
                <img src={item.img} alt={item.img} />
                <div class="grid gap-1">
                  <span class="text-[#999999]">{item.maker}</span>
                  <span>{item.pName}</span>
                  <span class="font-extrabold">¥{item.price} JPY</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
