import Vuetify from "vuetify"; // 追加
import "vuetify/dist/vuetify.min.css"; // 追加

import Vue from 'vue/dist/vue.esm.js'
import Records from "./components/Records.vue";
import Header from "./components/Header.vue";

Vue.use(Vuetify); // 追加
const vuetify = new Vuetify(); // 追加

document.addEventListener("DOMContentLoaded", () => {
  var voo = new Vue({
    el: '#voo',
    components: {
      'navbar': Header,
      Records
    }
  });
});