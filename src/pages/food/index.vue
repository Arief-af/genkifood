<template>
  <AppBack>
    <template #header>
      <box-icon
        @click="favorit = !favorit"
        v-if="!favorit"
        class="fill-primary cursor-pointer"
        name="heart"
      ></box-icon>
      <box-icon
        @click="favorit = !favorit"
        v-else
        class="fill-primary cursor-pointer"
        name="heart"
        type="solid"
      ></box-icon>
    </template>

    <div class="flex justify-center">
      <img class="w-[50%]" src="@/assets/images/menu/chicken.png" alt="img" />
    </div>

    <template #footer>
      <section class="w-full">
        <div class="text-lg font-medium mx-auto text-white">Nama Makanan</div>
        <hr class="w-[30%] mx-auto mt-2" />

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Cut</span>
          </div>
          <select class="select bg-dark select-bordered">
            <option>breast</option>
            <option>ribs</option>
          </select>
          <div class="label">
            <span class="label-text-alt">Chose your cut</span>
          </div>
        </label>

        <div class="form-control w-full">
          <label class="label cursor-pointer">
            <span class="label-text">Hand Gloves</span>
            <input type="checkbox" checked="checked" class="checkbox" />
          </label>
        </div>

        <div class="flex w-full px-1 items-center justify-between">
          Quantity
          <div class="flex items-center">
            <button class="btn bg-dark">-</button>
            <div class="p-4">1</div>
            <button class="btn bg-dark">+</button>
          </div>
        </div>

        <div class="flex gap-2 w-full">
          <button
            type="submit"
            class="w-1/2 bg-primary outline-none border-0 text-dark hover:bg-primary hover:text-dark btn rounded-md"
          >
            Buy IDR 60,000
          </button>
          <button
            type="submit"
            class="w-1/2 bg-primary outline-none border-0 text-dark hover:bg-primary hover:text-dark btn rounded-md"
          >
            Add To Cart 60,000
          </button>
        </div>
      </section>
    </template>
  </AppBack>
</template>

<script setup>
import AppBack from "@/layouts/AppBack.vue";
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
