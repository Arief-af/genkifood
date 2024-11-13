<template>
  <div>
    <SplashScreenApp />
    <router-view />
    <Notification
      v-if="notificationStore.notification.show"
      :variant="notificationStore.notification.variant"
    >
      {{ notificationStore.notification.message }}
    </Notification>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Notification from "./components/notification/index.vue";
import { useNotificationStore } from "./stores/notification";
import { SplashScreen } from '@capacitor/splash-screen';
import Aos from 'aos';
import SplashScreenApp from './components/splashscreen/index.vue';
// Initialize AOS animations
Aos.init();
SplashScreen.hide();
const notificationStore = useNotificationStore();
</script>
