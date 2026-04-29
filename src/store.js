import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  name: "Alex",

  increase: () => set((state) => ({ count: state.count + 1 })),
  changeName: () => set({ name: "John" }),
}));

export default useStore;
