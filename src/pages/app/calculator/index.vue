<template>
  <GenkiApp>
    <div class="bg-[#212121] rounded-lg overflow-hidden flex items-center justify-center">
      <div
        class="w-[400px] h-[calc(100vh-200px)] mx-auto bg-[#212121] shadow-xl text-gray-800 relative overflow-hidden"
      >
        <!-- <div
          class="p-5 text-white w-max rounded-full mt-5 ms-5 bg-opacity-10 bg-[#21BF73]"
        >
          15-2022-262 - Arief
        </div> -->
        <div class="absolute bottom-0 w-full">
          <div class="w-full h-40 bg-[#212121] gap-2 flex items-end text-right">
            <div class="w-full py-5 px-6 text-6xl text-white font-thin">
              {{ displayValue }}
            </div>
          </div>
          <div class="w-full h-max p-5">
            <div class="flex gap-2 w-full">
              <div class="w-1/4">
                <button @click="clear" class="button">C</button>
              </div>
              <div class="w-1/4">
                <button @click="toggleSign" class="button">+/-</button>
              </div>
              <div class="w-1/4">
                <button @click="setOperator('sqrt')" class="button">√</button>
              </div>
              <div class="w-1/4">
                <button @click="setOperator('square')" class="button">
                  x²
                </button>
              </div>
              <div class="w-1/4">
                <button @click="calculatePercentage" class="button">%</button>
              </div>
            </div>
            <!-- Number and operation buttons -->
            <div
              v-for="(row, rowIndex) in numberRows"
              :key="rowIndex"
              class="flex gap-2 w-full"
            >
              <div v-for="button in row" :key="button" class="w-1/4">
                <button @click="handleButtonClick(button)" class="button">
                  {{ button }}
                </button>
              </div>
            </div>
            <!-- Bottom row -->
            <div class="flex gap-2 w-full">
              <div class="w-1/4">
                <button @click="inputDigit(0)" class="button">0</button>
              </div>
              <div class="w-1/4">
                <button @click="inputDot" class="button">.</button>
              </div>
              <div class="w-2/4">
                <button @click="calculateResult" class="button op-button">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GenkiApp>
</template>

<script setup>
import { ref } from "vue";
import GenkiApp from "@/layouts/GenkiApp.vue";

const displayValue = ref("0");
const firstOperand = ref(null);
const operator = ref(null);
const waitingForSecondOperand = ref(false);

const clear = () => {
  displayValue.value = "0";
  firstOperand.value = null;
  operator.value = null;
  waitingForSecondOperand.value = false;
};

const inputDigit = (digit) => {
  if (waitingForSecondOperand.value) {
    displayValue.value = digit;
    waitingForSecondOperand.value = false;
  } else {
    displayValue.value =
      displayValue.value === "0" ? digit : displayValue.value + digit;
  }
};

const inputDot = () => {
  if (!displayValue.value.includes(".")) {
    displayValue.value += ".";
  }
};

const toggleSign = () => {
  displayValue.value = displayValue.value.startsWith("-")
    ? displayValue.value.slice(1)
    : "-" + displayValue.value;
};

const calculatePercentage = () => {
  displayValue.value = (parseFloat(displayValue.value) / 100).toString();
};

const setOperator = (nextOperator) => {
  const inputValue = parseFloat(displayValue.value);

  if (nextOperator === "sqrt") {
    displayValue.value = calculate(null, inputValue, "sqrt").toString();
  } else if (nextOperator === "square") {
    displayValue.value = calculate(inputValue, null, "square").toString();
  } else {
    if (operator.value && waitingForSecondOperand.value) {
      operator.value = nextOperator;
      return;
    }

    if (firstOperand.value == null && !isNaN(inputValue)) {
      firstOperand.value = inputValue;
    } else if (operator.value) {
      const result = calculate(firstOperand.value, inputValue, operator.value);
      displayValue.value = `${parseFloat(result.toFixed(7))}`;
      firstOperand.value = result;
    }

    operator.value = nextOperator;
    waitingForSecondOperand.value = true;
  }
};

const calculate = (first, second, operator) => {
  switch (operator) {
    case "add":
      return first + second;
    case "subtract":
      return first - second;
    case "multiply":
      return first * second;
    case "divide":
      return second !== 0 ? first / second : "Error";
    case "sqrt":
      return Math.sqrt(second);
    case "square":
      return first ** 2;
    default:
      return second;
  }
};

const calculateResult = () => {
  if (operator.value && !waitingForSecondOperand.value) {
    const inputValue = parseFloat(displayValue.value);
    const result = calculate(firstOperand.value, inputValue, operator.value);
    displayValue.value = `${parseFloat(result.toFixed(7))}`;
    firstOperand.value = result;
    operator.value = null;
    waitingForSecondOperand.value = true;
  }
};

const handleButtonClick = (button) => {
  if (!isNaN(button)) {
    inputDigit(button);
  } else if (button === "+") {
    setOperator("add");
  } else if (button === "-") {
    setOperator("subtract");
  } else if (button === "⨉") {
    setOperator("multiply");
  } else if (button === "÷") {
    setOperator("divide");
  }
};

const numberRows = [
  ["7", "8", "9", "⨉"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
];
</script>

<style scoped>
.button {
  @apply bg-[#21BF73] m-1 rounded-lg w-full h-16 outline-none focus:outline-none hover:bg-[#1b613f] hover:bg-opacity-20 text-white text-xl font-light;
}
.op-button {
  @apply bg-[#1b613f] bg-opacity-10 hover:bg-opacity-20 text-2xl font-light;
}
</style>
