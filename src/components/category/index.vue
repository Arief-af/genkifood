<template>
  <div class="w-full">
    <div class="text-md font-bold mt-5 text-white">Category</div>
    <section class="flex gap-2 mt-5 overflow-auto">
      <div
        :class="active === '' ? activeClass : baseClass"
        class="items-center rounded-full w-max px-10 py-2 cursor-pointer"
        @click="setActiveCategory('')"
      >
        ALL
      </div>
      <div
        v-for="category in data"
        :key="category.name"
        :class="category.name === active ? activeClass : baseClass"
        class="items-center rounded-full w-max px-10 py-2 cursor-pointer"
        @click="setActiveCategory(category.name)"
      >
        {{ category.name }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  initialActive: {
    type: String,
    default: "",
  },
});

// Define emits to send the active category back to the parent component
const emit = defineEmits(["update:activeCategory"]);

const activeClass = "bg-primary text-white";
const baseClass = "border-2 border-primary text-primary";
const active = ref(props.initialActive);

// Set active category and emit it to the parent component
function setActiveCategory(categoryName) {
  active.value = categoryName;
  emit("update:activeCategory", categoryName);
}
</script>

<style lang="scss" scoped></style>
