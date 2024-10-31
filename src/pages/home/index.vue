<template>
  <AppLayout>
    <HeroCard />
    <Category :data="data" @update:activeCategory="onChangeCategory" />
    <div class="flex justify-between gap-5 flex-wrap mt-5 items-stretch">
      <CardFood
        @click="router.push({ path: `food/${food.id}` })"
        v-for="food in filteredFoodData"
        :key="food.name"
        :data="food"
      />
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/layouts/App.vue";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import HeroCard from "@/components/heroCard/index.vue";
import CardFood from "@/components/cardFood/index.vue";
import Category from "@/components/category/index.vue";
import ChickenImage from "@/assets/images/menu/chicken.png";
import MieImage from "@/assets/images/menu/mie.png";
let data = ref([]);
const router = useRouter();

const activeCategory = ref(""); // Track the selected category
const foodData = ref([
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
]);

// Update activeCategory and filter foodData based on category
const onChangeCategory = (category) => {
  activeCategory.value = category; 
};

// Computed property to filter food items based on activeCategory
const filteredFoodData = computed(() => {
  console.log(activeCategory.value);
  if (!activeCategory.value) {
    return foodData.value; 
  }
  
  return foodData.value.filter(
    (food) =>
      food.category.name.toLowerCase() === activeCategory.value.toLowerCase()
  );
});

onMounted(() => {
  data.value = [{ name: "Meat" }, { name: "Mie" }, { name: "Drink" }];
});
</script>

<style lang="scss" scoped></style>
