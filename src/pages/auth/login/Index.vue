<script setup>
import { ref } from "vue";
import AuthLayout from "../../../layouts/Auth.vue";
import { useRouter } from "vue-router";

import { useNotificationStore } from "../../../stores/notification";
const data = ref({ username: "", password: "" }); // Initialize with empty strings
const router = useRouter();
const notificationStore = useNotificationStore();
const onSubmit = () => {
  try {
    const existingData = localStorage.getItem("data");
    let dataArray = [];

    if (existingData) {
      dataArray = JSON.parse(existingData);
    }

    const user = dataArray.find(
      (user) =>
        user.username === data.value.username &&
        user.password === data.value.password
    );

    localStorage.setItem("profile", JSON.stringify(user));

    if (user) {
      notificationStore.showNotification("Login Berhasil!", "success");
      router.push("/");
    } else {
      notificationStore.showNotification(
        "Username atau password tidak sesuai!",
        "error"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

let showPW = ref(false);
</script>

<template>
  <AuthLayout title="Login Akun" back-path="/">
    <form data-aos="fade-up" @submit.prevent="onSubmit" class="mt-4">
      <div for="username" class="text-primary mb-3">Username*</div>
      <label class="input bg-dark flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input
          v-model="data.username"
          type="text"
          class="grow"
          placeholder="Username"
        />
      </label>
      <div for="username" class="text-primary mb-3">Password*</div>
      <label class="input bg-dark flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          v-model="data.password"
          :type="showPW ? 'text' : 'password'"
          class="grow"
          placeholder="password"
        />
        <box-icon @click="showPW = !showPW" class="badge fill-white" name='show'></box-icon>
      </label>
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-3 my-5 cursor-pointer">
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-sm"
          />
          <span class="label-text text-white">Remember me</span>
        </label>
      </div>
      <button
        type="submit"
        class="bg-primary outline-none border-0 text-dark hover:bg-primary hover:text-dark w-full btn rounded-md"
      >
        Login
      </button>
      <div class="flex items-center justify-center my-5">
        <router-link to="/register" class="label-text text-white">
          Belum punya akun?
          <span class="text-primary font-bold">Klik disini</span>
        </router-link>
      </div>
    </form>
  </AuthLayout>
</template>
