<template>
  <div
    v-if="isVisible"
    class="fixed flex items-center flex-col gap-5 justify-center w-full h-full bg-dark z-50"
  >
    <div class="text-2xl text-primary font-bold" data-aos="fade-up-right">GenkiApp</div>
    <div class="relative">
      <div class="absolute top-[50px] right-10 z-50">
        <div class="relative inline-flex">
          <div class="w-8 h-8 bg-primary rounded-full"></div>
          <div
            class="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-ping"
          ></div>
          <div
            class="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-pulse"
          ></div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        class="animate-tuing"
        data-aos-anchor-placement="center-bottom"
        src="@/assets/images/arief.png"
        alt="splash"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Use a reactive ref for controlling visibility
const isVisible = ref(true);

let timerHide;

onMounted(() => {
  // Set a timer to hide the component after 5 seconds
  timerHide = setTimeout(() => {
    isVisible.value = false;
  }, 5000);
});

onBeforeUnmount(() => {
  // Clear the timer when the component is destroyed
  clearTimeout(timerHide);
});
</script>
