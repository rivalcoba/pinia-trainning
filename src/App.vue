<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// Importando STORE Product
import { useProductStore } from './stores/ProductStore';
// Se pone en acción el store llamado la función
const productStore = useProductStore();
// Invocando al action "fill" del Store
productStore.fill();

// Importando Store Cart
import { useCartStore } from './stores/CartStore';
const cartStore = useCartStore();

const addToCart = (count, product) => {
  count = parseInt(count);
  for (let index = 0; index < count; index++){
    cartStore.items.push(product);
  }
};

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="addToCart($event, product)"
      />
    </ul>
  </div>
</template>
