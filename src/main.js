import { createApp } from "vue";
import "./assets/css/app.css";
import router from "./router";
import App from "./App.vue";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
import 'boxicons'
const app = createApp(App);
app.use(pinia)
app.use(router);
import FormInput from "./components/form/Input.vue";
import TextArea from "./components/form/TextArea.vue";
app.component("FormInput", FormInput);
app.component("TextArea", TextArea);
app.mount("#app");
