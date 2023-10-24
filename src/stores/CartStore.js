import { defineStore } from "pinia";

// Creando un store
export const useCartStore = defineStore('CartStore', {
  state: () => {
    return {
      items: [],
    }
  },
  //actions
  actions:{
    addItems(count, item){
      count = parseInt(count);
      // Agregando Item a Items
      for (let index = 0; index < count; index++){
        this.items.push(item);
      }
    },
  }
  //getters
});