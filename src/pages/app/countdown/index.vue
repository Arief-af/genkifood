<template>
  <GenkiApp>
    <h4 class="text-2xl text-primary font-bold mb-5">Countdown</h4>

    <!-- Input Unit Selection -->
    <div class="flex flex-col items-center justify-center gap-2 mb-5">
      <div class="flex items-center gap-2">
        <label for="date">Select Date: </label>
        <input type="date" v-model="data.date" class="input bg-dark input-bordered" />
      </div>
      <div class="flex items-center gap-2">
        <label for="time">Select Time: </label>
        <input type="time" v-model="data.time" class="input bg-dark input-bordered" />
      </div>
    </div>

    <!-- Countdown Display -->
    <div class="flex justify-center p-7">
      <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div
          class="bg-dark rounded-box text-dark-content flex flex-col p-2"
        >
          <span class="countdown font-mono text-5xl">{{ days }}</span>
          days
        </div>
        <div
          class="bg-dark rounded-box text-dark-content flex flex-col p-2"
        >
          <span class="countdown font-mono text-5xl">{{ hours }}</span>
          hours
        </div>
        <div
          class="bg-dark rounded-box text-dark-content flex flex-col p-2"
        >
          <span class="countdown font-mono text-5xl">{{ minutes }}</span>
          min
        </div>
        <div
          class="bg-dark rounded-box text-dark-content flex flex-col p-2"
        >
          <span class="countdown font-mono text-5xl">{{ seconds }}</span>
          sec
        </div>
      </div>
    </div>
  </GenkiApp>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";

const data = ref({
  date: "",
  time: "",
});
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let countdownInterval = null;

function updateCountdown() {
  const now = new Date();

  // Parse selected date and time
  const targetDate = new Date(`${data.value.date}T${data.value.time}`);

  // Calculate the time difference
  const timeLeft = targetDate - now;

  // If the countdown reaches zero or past, stop the interval
  if (timeLeft <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    clearInterval(countdownInterval);
    return;
  }

  // Update days, hours, minutes, and seconds
  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

// Watch for changes in date and time, and reset the countdown
watch([() => data.value.date, () => data.value.time], () => {
  if (countdownInterval) clearInterval(countdownInterval);
  if (data.value.date && data.value.time) {
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update on change
  }
});

// Clear the interval when the component is unmounted
onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval);
});
</script>

<style lang="scss" scoped></style>
