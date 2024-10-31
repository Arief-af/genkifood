<template>
  <header class="bg-dark-cover justify-between flex px-10 items-center text-white h-[100px]">
    <section>
      Hey, {{ data.username }} <br>
      <span class="opacity-50 text-sm">Ready to eat?</span>
    </section>
    <section>
      <avatar />
    </section>
  </header>
  <main
    class="px-10 h-[calc(100vh-100px)] overflow-y-scroll w-full bg-dark-cover min-w-screen relative mx-auto pb-[200px]"
  >
    <Transition>
      <section v-if="transition">
        <slot />
      </section>
    </Transition>
  </main>
  <footer
    class="footer absolute w-[100%] h-[74px] bg-dark-cover backdrop-filter backdrop-blur-lg shadow-lg rounded-t-full bg-opacity-50 bottom-0 justify-center items-center flex gap-2"
  >
    <div
      @click="$router.push('/profile')"
      :class="currentRoute == '/profile' ? 'bg-primary' : ''"
      class="w-16 h-16 flex justify-center items-center text-sm rounded-full shadow text-primary"
    >
      <box-icon
        :class="currentRoute == '/profile' ? 'fill-dark' : 'fill-primary'"
        name="user"
      ></box-icon>
    </div>

    <div
      @click="$router.push('/home')"
      :class="currentRoute == '/home' ? 'bg-primary' : ''"
      class="w-16 h-16 flex justify-center items-center text-sm rounded-full shadow text-primary"
    >
      <box-icon
        :class="currentRoute == '/home' ? 'fill-dark' : 'fill-primary'"
        name="home"
      ></box-icon>
    </div>

    <div
      @click="$router.push('/cart')"
      :class="currentRoute == '/cart' ? 'bg-primary' : ''"
      class="w-16 h-16 flex justify-center items-center text-sm rounded-full shadow text-primary"
    >
      <box-icon
        :class="currentRoute == '/cart' ? 'fill-dark' : 'fill-primary'"
        name="cart"
      ></box-icon>
    </div>
  </footer>
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
