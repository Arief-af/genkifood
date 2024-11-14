<template>
  <GenkiApp>
    <FormInput
      v-model="data.tb"
      type="number"
      placeholder="Masukkan Tinggi Badan Anda (cm)"
      class="my-5"
    >
      <template #label>Tinggi Badan (cm)*</template>
    </FormInput>
    <FormInput
      v-model="data.bb"
      type="number"
      placeholder="Masukkan Berat Badan Anda (kg)"
      class="my-5"
    >
      <template #label>Berat Badan (kg)*</template>
    </FormInput>
    <button
      @click="calculate"
      class="btn bg-primary hover:bg-primary text-dark w-full"
    >
      Hitung
    </button>

    <section>
      <div v-if="loading" class="w-full bg-dark skeleton h-32 mt-5"></div>

      <template v-if="result">
        <h4 class="text-lg text-primary mt-5">
          Rumus BMI: {{ `${data.bb} / (${heightInMeters} * ${heightInMeters})` }}
        </h4>
        <h4 class="text-lg text-primary">Berat Badan: {{ data.bb }} kg</h4>
        <h4 class="text-lg text-primary">Tinggi Badan: {{ data.tb }} cm</h4>
        <h4 class="text-lg text-primary">Hasil BMI: {{ result.toFixed(2) }}</h4>
        <h4 class="text-lg text-primary">Kategori: {{ category }}</h4>
      </template>
    </section>
  </GenkiApp>
</template>

<script setup>
import { ref } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";

const data = ref({
  tb: null,
  bb: null
});
const result = ref(null);
const category = ref("");
const loading = ref(false);

const calculate = () => {
  loading.value = true;
  
  // Convert height from cm to meters for the BMI formula
  const heightInMeters = data.value.tb / 100;
  
  // Calculate BMI
  result.value = data.value.bb / (heightInMeters * heightInMeters);
  
  // Determine BMI category
  if (result.value < 18.5) {
    category.value = "Berat Badan Kurang";
  } else if (result.value >= 18.5 && result.value < 24.9) {
    category.value = "Normal";
  } else if (result.value >= 25 && result.value < 29.9) {
    category.value = "Berat Badan Berlebih";
  } else if (result.value >= 30 && result.value < 34.9) {
    category.value = "Obesitas Kelas I";
  } else if (result.value >= 35 && result.value < 39.9) {
    category.value = "Obesitas Kelas II";
  } else {
    category.value = "Obesitas Kelas III";
  }
  
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
