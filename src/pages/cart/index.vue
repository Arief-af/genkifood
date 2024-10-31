<template>
  <CartLayout>
    <section class="w-full flex justify-between">
      <div class="text-wrap text-sm w-full">
        <div>Nama Makanan</div>
        <div>Cut:</div>
        <div>Hand Gloves (+2000)</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
      <div class="w-full flex justify-end items-center">
        <img
          class="object-cover w-24"
          src="@/assets/images/menu/chicken.png"
          alt="img"
        />
      </div>
    </section>
    <hr class="my-10">
    <section>
        Discount 30% Max IDR 20,000 <br>
        Total: 0 <br>
    </section>
  </CartLayout>
</template>

<script setup>
import CartLayout from "@/layouts/Cart.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

let favorit = ref(false);
const data = ref(JSON.parse(localStorage.getItem("profile")));
console.log(data.value);
const router = useRouter();
const logout = () => {
  localStorage.removeItem("data");
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>
