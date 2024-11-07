<template>
  <div>
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
import Notification from "./components/notification/index.vue";
import { useNotificationStore } from "./stores/notification";
const notificationStore = useNotificationStore();
import Aos from 'aos';

Aos.init();
</script>
