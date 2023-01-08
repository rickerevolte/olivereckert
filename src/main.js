import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueVimeoPlayer from 'vue-vimeo-player'

const app = createApp(App)

app.use(router)
app.use(vueVimeoPlayer)
app.mount('#app')


const burgerButton = document.getElementById("burgerButton");
const sideMenu = document.getElementById("sideMenu");
burgerButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click");
    sideMenu.classList.toggle("sideMenuVisible");
});
