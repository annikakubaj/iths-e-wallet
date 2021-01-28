import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data (){
    return {
      cards: [
        {
          name: "Annika",
          number: "123244555",
          date: "12/2",
          vendor: ""
        }
      ],
    
    }



  },
  router,
  render: h => h(App)
}).$mount("#app");
