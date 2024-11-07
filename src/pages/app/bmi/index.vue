<template>
  <GenkiApp>
    <FormInput
      v-model="data.tb"
      type="text"
      placeholder="Masukan Tinggi Badan Anda"
      class="my-5"
    >
      <template #label>Tingi Badan*</template>
    </FormInput>
    <FormInput
      v-model="data.bb"
      type="text"
      placeholder="Masukan Berat Badan Anda"
      class="my-5"
    >
      <template #label>Berat Badan*</template>
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
          Rumus BMI: {{ `${data.bb} + / (${data.tb} * ${data.tb})` }}
        </h4>
        <h4 class="text-lg text-primary">Berat Badan: {{ data.bb }}</h4>
        <h4 class="text-lg text-primary">Tinggi Badan: {{ data.tb }}</h4>
        <h4 class="text-lg text-primary">Hasil IMT: {{ result }}</h4>
      </template>
    </section>
  </GenkiApp>
</template>

<script setup>
import { ref } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";
const data = ref({});
const result = ref(null);
const loading = ref(false);

const calculate = () => {
  loading.value = true;
  result.value = data.value.tb / (data.value.bb * data.value.bb);
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
