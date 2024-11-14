<script setup>
import { onMounted, reactive, ref } from "vue";

import App from "@/layouts/App.vue";
import { useRouter } from "vue-router";
let data = ref({});
const errors = ref({});
onMounted(() => {
  data.value = JSON.parse(localStorage.getItem("profile"));
});

const logout = () => {
  localStorage.setItem("profile", JSON.stringify({}));
  router.push("/login");
};

const router = useRouter();
const onSubmit = () => {
  try {
    localStorage.setItem("profile", JSON.stringify(data.value));

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <App>
    <div>
      <form @submit.prevent="onSubmit">
        <FormInput
          v-model="data.name"
          type="text"
          placeholder="Masukan nama anda"
          class="my-5"
        >
          <template #label>Nama</template>
          <template v-if="errors.name" #error>{{ errors.name[0] }}</template>
        </FormInput>
        <FormInput
          v-model="data.username"
          type="text"
          placeholder="Masukan nama anda"
          class="my-5"
        >
          <template #label>Username</template>
          <template v-if="errors.name" #error>{{ errors.name[0] }}</template>
        </FormInput>
        <FormInput
          v-model="data.email"
          type="email"
          placeholder="Masukan email anda"
          class="my-5"
        >
          <template #label>Email</template>
          <template v-if="errors.email" #error>{{ errors.email[0] }}</template>
        </FormInput>
        <FormInput
          v-model="data.phone_number"
          type="text"
          placeholder="Masukan nomor telp anda"
          class="my-5"
        >
          <template #label>No Telp</template>
          <template v-if="errors.phone_number" #error>{{
            errors.phone_number[0]
          }}</template>
        </FormInput>
        <FormInput
          v-model="data.date"
          type="date"
          placeholder="Masukan tanggal lahir anda"
          class="my-5"
        >
          <template #label>Birthdate</template>
          <template v-if="errors.date" #error>{{ errors.date[0] }}</template>
        </FormInput>

        <button
          type="submit"
          class="bg-primary mt-5 border-0 text-dark hover:bg-primary hover:text-dark w-full btn rounded-md"
        >
          Update
        </button>
        <button
          @click="logout"
          type="submit"
          class="mb-5 bg-red-700 mt-5 border-0 text-white hover:bg-red-700 hover:text-white w-full btn rounded-md"
        >
          Logout
        </button>
      </form>
      
    </div>
  </App>
</template>
