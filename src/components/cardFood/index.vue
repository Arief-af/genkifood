<template>
  <div
    class="bg-dark h-full min-h-[190px] p-5 rounded-lg w-[46%] relative mt-10"
  >
    <img
      src="@/assets/images/menu/chicken.png"
      class="absolute w-24 -top-10 left-1/2 -translate-x-1/2"
      alt="img"
    />
    <div class="text-center mt-10">
      <div class="text-white text-sm">{{ data.name }}</div>
      <div class="flex items-center gap-2 mt-2 justify-center">
        <box-icon class="fill-primary" type="solid" name="star"></box-icon>
        <div class="text-primary font-bold">{{  data.rating }}</div>
      </div>
      <hr class="w-[30%] mx-auto mt-4" />
      <div class="text-sm mt-4 text-primary font-bold">IDR {{ formatedPrice(data.price) }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});

const formatedPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
</script>

<style lang="scss" scoped></style>
