import { defineStore } from "pinia";

// Creando un store
export const useCartStore = defineStore('CartStore', {
  state: () => {
    return {
      items: [],
    }
  }
  //actions
  //getters
});