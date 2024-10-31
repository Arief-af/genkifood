<template>
  <header
    class="bg-dark justify-between flex px-10 items-center text-white h-[100px]"
  >
    <section class="flex items-center font-bold">
      <box-icon class="fill-white" name="chevron-left"></box-icon>
      <span @click="$router.go(-1)">Back</span>
    </section>
    <section>
      <slot name="header" />
    </section>
  </header>
  <main
    class="px-10 h-[calc(100vh-100px)] overflow-y-scroll w-full bg-dark min-w-screen relative mx-auto pb-[200px]"
  >
    <Transition>
      <section v-if="transition">
        <slot />
      </section>
    </Transition>
  </main>

</template>

<script setup>
import Avatar from "@/components/avatar/index.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const currentRoute = ref(route.path);
const data = ref(JSON.parse(localStorage.getItem("profile")));

const transition = ref(false);
onMounted(() => {
  transition.value = true;
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
