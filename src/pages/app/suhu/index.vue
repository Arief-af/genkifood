<template>
  <GenkiApp>
    <h4 class="text-2xl text-primary font-bold mb-5">Konversi Suhu</h4>

    <!-- Input Unit Selection -->
    <div class="flex gap-2">
      <div class="flex gap-2" @click="data.inputUnit = 'Celsius'">
        <input
          type="radio"
          name="input-unit"
          class="radio"
          :checked="data.inputUnit === 'Celsius'"
        />
        Celsius
      </div>
      <div class="flex gap-2" @click="data.inputUnit = 'Fahrenheit'">
        <input
          type="radio"
          name="input-unit"
          class="radio"
          :checked="data.inputUnit === 'Fahrenheit'"
        />
        Fahrenheit
      </div>
      <div class="flex gap-2" @click="data.inputUnit = 'Kelvin'">
        <input
          type="radio"
          name="input-unit"
          class="radio"
          :checked="data.inputUnit === 'Kelvin'"
        />
        Kelvin
      </div>
    </div>

    <!-- Input Temperature -->
    <FormInput
      v-model="data.inputValue"
      type="text"
      placeholder="Masukan Suhu"
      class="my-5"
      @input="convertTemperature"
    >
      <template #label>Input A*</template>
    </FormInput>

    <!-- Output Unit Selection -->
    <div class="flex gap-2">
      <div class="flex gap-2" @click="data.outputUnit = 'Celsius'">
        <input
          type="radio"
          name="output-unit"
          class="radio"
          :checked="data.outputUnit === 'Celsius'"
        />
        Celsius
      </div>
      <div class="flex gap-2" @click="data.outputUnit = 'Fahrenheit'">
        <input
          type="radio"
          name="output-unit"
          class="radio"
          :checked="data.outputUnit === 'Fahrenheit'"
        />
        Fahrenheit
      </div>
      <div class="flex gap-2" @click="data.outputUnit = 'Kelvin'">
        <input
          type="radio"
          name="output-unit"
          class="radio"
          :checked="data.outputUnit === 'Kelvin'"
        />
        Kelvin
      </div>
    </div>

    <!-- Output Result -->
    <FormInput
      v-model="data.result"
      type="text"
      placeholder="Hasil"
      class="my-5"
      readonly
    >
      <template #label>Hasil*</template>
    </FormInput>
  </GenkiApp>
</template>

<script setup>
import { ref, watch } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";

const data = ref({
  inputValue: "",
  inputUnit: "Celsius",
  outputUnit: "Celsius",
  result: "",
});

const convertTemperature = () => {
  const input = parseFloat(data.value.inputValue);
  if (isNaN(input)) {
    data.value.result = "";
    return;
  }

  let tempInCelsius;

  // Convert input to Celsius
  if (data.value.inputUnit === "Celsius") {
    tempInCelsius = input;
  } else if (data.value.inputUnit === "Fahrenheit") {
    tempInCelsius = ((input - 32) * 5) / 9;
  } else if (data.value.inputUnit === "Kelvin") {
    tempInCelsius = input - 273.15;
  }

  // Convert Celsius to the desired output unit
  let result;
  if (data.value.outputUnit === "Celsius") {
    result = tempInCelsius;
  } else if (data.value.outputUnit === "Fahrenheit") {
    result = (tempInCelsius * 9) / 5 + 32;
  } else if (data.value.outputUnit === "Kelvin") {
    result = tempInCelsius + 273.15;
  }

  data.value.result = result.toFixed(2);
};

// Watch for changes in inputValue, inputUnit, or outputUnit to trigger conversion
watch(
  [
    () => data.value.inputValue,
    () => data.value.inputUnit,
    () => data.value.outputUnit,
  ],
  convertTemperature
);
</script>

<style lang="scss" scoped></style>
