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
      <img class="w-[50%]" :src="food.image" alt="img" />
    </div>

    <template #footer>
      <section class="w-full">
        <div class="text-lg font-medium mx-auto text-white">
          {{ food.name }}
        </div>
        <hr class="w-[30%] mx-auto mt-2" />

        <label
          v-if="food?.category?.name == 'meat'"
          class="form-control w-full max-w-xs"
        >
          <div class="label">
            <span class="label-text">Cut</span>
          </div>
          <select v-model="formData.cut" class="select bg-dark select-bordered">
            <option value="breast">breast</option>
            <option value="rib">rib</option>
          </select>
          <div class="label">
            <span class="label-text-alt">Choose your cut</span>
          </div>
        </label>

        <div
          :class="food?.category?.name != 'meat' ? 'mt-5' : ''"
          class="form-control w-full"
        >
          <label class="label cursor-pointer">
            <span class="label-text">Hand Gloves</span>
            <input
              v-model="formData.hand_gloves"
              type="checkbox"
              checked="checked"
              class="checkbox"
            />
          </label>
        </div>

        <div class="flex w-full px-1 items-center justify-between">
          Quantity
          <div class="flex items-center">
            <button
              @click="
                formData.quantity > 1 ? formData.quantity-- : formData.quantity
              "
              class="btn bg-dark"
            >
              -
            </button>
            <div class="p-4">{{ formData.quantity }}</div>
            <button @click="formData.quantity++" class="btn bg-dark">+</button>
          </div>
        </div>

        <div
          :class="food?.category?.name != 'meat' ? 'mt-5' : ''"
          class="flex gap-2 w-full"
        >
          <button
            @click="addToCart('/cart')"
            type="submit"
            class="w-1/2 bg-primary outline-none border-0 text-dark hover:bg-primary hover:text-dark btn rounded-md"
          >
            Buy IDR {{ formatedPrice(total_price) }}
          </button>
          <button
            type="submit"
            @click="addToCart('/')"
            class="w-1/2 bg-primary outline-none border-0 text-dark hover:bg-primary hover:text-dark btn rounded-md"
          >
            Add To Cart {{ formatedPrice(total_price) }}
          </button>
        </div>
      </section>
    </template>
  </AppBack>
</template>

<script setup>
import AppBack from "@/layouts/AppBack.vue";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore";
const formatedPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const cartStore = useCartStore();
let favorit = ref(false);
const data = ref(JSON.parse(localStorage.getItem("profile")));
const router = useRouter();
const id = router.currentRoute.value.params.id;

let food = ref({});
const fetchData = () => {
  food.value = cartStore.getFood(id);
};

const formData = ref({
  quantity: 1,
  hand_gloves: true,
});

// Define total_price as a computed property
const total_price = computed(() => {
  return formData.value.hand_gloves
    ? food.value.price * formData.value.quantity + 2000
    : food.value.price * formData.value.quantity;
});

const addToCart = (path) => {
  cartStore.addData({
    id: food.value.id,
    name: food.value.name,
    price: food.value.price,
    rating: food.value.rating,
    image: food.value.image,
    category: food.value.category,
    quantity: formData.value.quantity,
    hand_gloves: formData.value.hand_gloves,
    total_price: total_price.value,
  });
  router.push(path);
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
