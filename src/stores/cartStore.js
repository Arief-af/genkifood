import { defineStore } from "pinia";
import ChickenImage from "@/assets/images/menu/chicken.png";
import MieImage from "@/assets/images/menu/mie.png";
export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    data: [],
    listFood: [
      {
        id: 1,
        name: "Chicken Goat",
        price: 80000,
        rating: 4.5,
        image: ChickenImage,
        category: {
          name: "Meat",
        },
      },
      {
        id: 2,
        name: "MIE Cirambay",
        price: 25000,
        rating: 4.7,
        image: MieImage,
        category: {
          name: "Mie",
        },
      },
    ],
  }),
  actions: {
    addData(data) {
      try {
        this.data.push(data);
      } catch (error) {
        throw error;
      }
    },
    getFood(id) {
      return this.listFood.find((food) => food.id == id);
    },
    removeData(id) {
      const index = this.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
    
  },
  persist: true,
});
