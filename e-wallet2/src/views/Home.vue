<template>

  <div class="home">
    <p> Active Card </p>
      <Card :newCard="activeCard" />
      <button v-on:click="removeCard"> Remove Card </button>
   
   <CardStack />
   <button v-on:click= "addCardRoute"> ADD NEW CARD </button>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    Card,
    CardStack
  },

  methods: {
    addCardRoute(){
      this.$router.push("/AddCard");
    },
    removeCard () {
      this.$root.$data.cards.splice(this.$root.$data.activeCardIndex, this.$root.$data.activeCardIndex);
      
    }
  

  },

  computed: {

    activeCard: function(){

      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
  }
};
</script>

<style scoped>
button {
   justify-content: center;
    align-self: center;
    width: 200px;
    height: 40px;
    background-color: black;
    color: white;
    margin-top: 8px;
    border-radius: 10px;
}

p {
  font-family: "PT Mono", monospace;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: .5rem;
}

</style>
