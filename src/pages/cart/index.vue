<template>
  <CartLayout>
    <section
      v-for="item in cartData"
      :key="item.id"
      class="w-full flex items-center justify-between mb-5"
    >
      <div class="text-wrap text-sm w-full">
        <div class="font-medium text-primary">{{ item.name }}</div>
        <div v-if="item.hand_gloves">Hand Gloves (+2000)</div>
        <div>Quantity: {{ item.quantity }}</div>
        <div>Total Price: IDR {{ formatedPrice(item.total_price) }}</div>
      </div>
      <div class="w-full flex justify-end items-center">
        <section>
          <img class="object-cover w-24" :src="item.image" alt="img" />
          <button
            @click="removeItem(item.id)"
            type="submit"
            class="bg-primary h-max mt-2 outline-none border-0 text-dark hover:bg-primary hover:text-dark w-full btn rounded-md"
          >
            Remove
          </button>
        </section>
      </div>
    </section>
    <hr class="my-10" />
    <section class="text-primary">
      Discount 30% Max IDR 20,000 <br />
      Total: IDR {{ formatedPrice(discountedTotal) }} <br />
    </section>
  </CartLayout>
</template>

<script setup>
import CartLayout from "@/layouts/Cart.vue";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
const formatedPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
let favorit = ref(false);
const data = ref(JSON.parse(localStorage.getItem("profile")));
console.log(data.value);
const router = useRouter();

let cartData = ref([]);
import { useCartStore } from "@/stores/cartStore";
const cartStore = useCartStore();
onMounted(() => {
  cartData.value = cartStore.data;
});

const logout = () => {
  localStorage.removeItem("data");
  router.push("/login");
};

// Function to calculate total price and discounted total
const calculateTotal = () => {
  let total = 0;
  cartData.value.forEach((item) => {
    total += item.total_price;
  });
  return total;
};

const removeItem = (id) => {
  cartStore.removeData(id);
};

const totalPrice = computed(() => calculateTotal());
const discount = computed(() => Math.min(totalPrice.value * 0.3, 20000));
const discountedTotal = computed(() => totalPrice.value - discount.value);
</script>

<style lang="scss" scoped></style>
