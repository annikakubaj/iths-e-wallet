import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data (){
    return {
      activeCardIndex: 1
      ,cards: [
        {
          id: 1,
          name:"NAME",
          number: "XXXXXXX",
          month: "00",
          year: "0000",
          vendor: "",
        }
      ],
    
    }



  },
  router,
  render: h => h(App)
}).$mount("#app");
