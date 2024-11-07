<template>
  <GenkiApp>
    <h4 class="text-2xl text-primary font-bold mb-5">Konversi Mata Uang</h4>

    <!-- Input Amount -->
    <FormInput
      v-model="data.amount"
      type="number"
      placeholder="Masukkan Jumlah"
      class="my-5"
      @input="fetchConversionRate"
    >
      <template #label>Jumlah*</template>
    </FormInput>

    <!-- Select From Currency -->
    <div class="my-4">
      <label class="text-primary">Dari:</label>
      <select
        v-model="data.fromCurrency"
        @change="fetchConversionRate"
        class="select bg-dark mt-3 select-bordered w-full"
      >
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>

    <!-- Select To Currency -->
    <div class="my-4">
      <label class="text-primary">Ke:</label>
      <select
        v-model="data.toCurrency"
        @change="fetchConversionRate"
        class="select bg-dark mt-3 select-bordered w-full"
      >
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>

    <!-- Display Conversion Result -->
    <FormInput
      v-model="data.result"
      type="text"
      placeholder="Hasil"
      class="my-5"
      readonly
    >
      <template #label>Hasil Konversi*</template>
    </FormInput>
  </GenkiApp>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";
import axios from "axios";

const data = ref({
  amount: 1,
  fromCurrency: "USD",
  toCurrency: "IDR",
  result: "",
});

const currencies = ["USD", "IDR", "EUR", "JPY", "GBP"]; // Add more as needed

const fetchConversionRate = async () => {
  if (!data.value.amount) {
    data.value.result = "";
    return;
  }
  try {
    const API_KEY = "ec6bdb02ecf33344690228e5"; // Replace with your actual API key
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${data.value.fromCurrency}/${data.value.toCurrency}/${data.value.amount}`
    );

    // Check if the result exists and is a valid number
    if (response.data && typeof response.data.conversion_result === "number") {
      data.value.result = response.data.conversion_result.toFixed(2);
    } else {
      data.value.result = "Conversion failed";
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    data.value.result = "Error";
  }
};

// Fetch initial conversion rate on mount
onMounted(fetchConversionRate);
</script>

<style lang="scss" scoped></style>
