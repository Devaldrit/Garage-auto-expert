import { create } from "zustand";
import { persist } from "zustand/middleware";

type Vehicle = {
  brand: string;
  model: string;
  year: string;
} | null;

type CartItem = {
  id: number;
  title: string;
  price: number;
};

type CartStore = {
  items: CartItem[];
  selectedVehicle: Vehicle;

  // PANIER
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  total: () => number;

  // VEHICULE
  setVehicle: (vehicle: Vehicle) => void;
  clearVehicle: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      selectedVehicle: null,

      // ➤ Ajout service (blocage doublon)
      addItem: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === item.id);
          if (exists) return state;
          return { items: [...state.items, item] };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clearCart: () => set({ items: [] }),

      total: () => get().items.reduce((acc, i) => acc + i.price, 0),

      // ➤ Stockage du véhicule
      setVehicle: (vehicle) => set({ selectedVehicle: vehicle }),

      clearVehicle: () => set({ selectedVehicle: null }),
    }),
    { name: "cart-storage" }
  )
);
