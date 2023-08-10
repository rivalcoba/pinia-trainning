import { defineStore } from "pinia";
// Importando lista de productos
import products from '../data/products.json';

// Creando un store
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    }
  },
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default;
    }
  }
  // getters
});
