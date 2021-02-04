import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from "v-mask";

Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  data (){
    return {
      activeCardIndex: -1
      ,cards: [
        {
          id: 1,
          name:"Annika K",
          number: "XXX XXX XXX ",
          month: "02",
          year: "2021",
          vendor: "",
        }
      ],
    
    }



  },
  router,
  render: h => h(App)
}).$mount("#app");
