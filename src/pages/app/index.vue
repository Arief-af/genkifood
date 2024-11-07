<template>
  <GenkiApp>
     <section class="flex flex-col gap-4">
        <div @click="$router.push('/app/calculator')" class="bg-dark cursor pointer flex justify-between text-white rounded-lg p-5">
            <div class="text-primary">Calculator</div>
            <box-icon class="fill-primary" name='calculator' ></box-icon>
        </div>

        <div @click="$router.push('/app/suhu')" class="bg-dark cursor pointer flex justify-between text-white rounded-lg p-5">
            <div class="text-primary">Konversi Suhu</div>
            <box-icon class="fill-primary" name='sun' ></box-icon>
        </div>

        <div @click="$router.push('/app/money')" class="bg-dark cursor pointer flex justify-between text-white rounded-lg p-5">
            <div class="text-primary">Konversi Mata Uang</div>
            <box-icon class="fill-primary" name='money' ></box-icon>
        </div>

        <div @click="$router.push('/app/bmi')" class="bg-dark cursor pointer flex justify-between text-white rounded-lg p-5">
            <div class="text-primary">BMI</div>
            <box-icon class="fill-primary" name='bowl-rice' ></box-icon>
        </div>

        <div @click="$router.push('/app/countdown')" class="bg-dark cursor pointer flex justify-between text-white rounded-lg p-5">
            <div class="text-primary">Countdown</div>
            <box-icon class="fill-primary" name='bowl-rice' ></box-icon>
        </div>
     </section>
  </GenkiApp>
</template>

<script setup>
import GenkiApp from "@/layouts/GenkiApp.vue";
</script>

<style lang="scss" scoped></style>
