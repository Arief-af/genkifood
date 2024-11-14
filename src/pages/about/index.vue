<template>
  <GenkiApp>
     <section class="flex flex-col gap-4">
         <div class="text-primary text-center">
            This App Develop By 
         </div>
         <div class="text-center">Created By Arief - 152022262</div>
      <section class="flex justify-center my-5">
        <div>
          <div class="text-primary text-center text-lg font-bold">
            Rate This App
          </div>
          <div class="rating my-2 mx-auto flex gap-2">
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              class="mask mask-star-2 bg-green-500"
              checked="checked"
            />
            <input
              type="radio"
              name="rating-4"
              checked="checked"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              checked="checked"
              class="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              checked="checked"
              class="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </section>
     </section>
  </GenkiApp>
</template>

<script setup>
import GenkiApp from "@/layouts/GenkiApp.vue";
</script>

<style lang="scss" scoped></style>
