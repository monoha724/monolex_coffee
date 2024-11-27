import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddCartStore = create(
  persist(
    (set) => ({
      cartList: [],
      addCart: (val) => set((prev) => ({ cartList: [...prev.cartList, val] })),
      removeCartItem: (val) =>
        set((prev) => ({
          cartList: prev.cartList.filter((item) => item.id !== val),
        })),
    }),
    {
      name: "cartStorage",
    }
  )
);
