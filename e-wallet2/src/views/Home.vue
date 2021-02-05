<template>

  <div class="home">
    <p> Active Card </p>
    <section v-if ="activeCard==null">
      <p> Select a card from your wallet </p>
      </section>
      <section v-else>
      <Card :newCard="activeCard" />
      <button v-on:click="removeCard"> Remove Card </button>
      </section>
   
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
      let confirmation = window.confirm("Are you sure you want to delete this card permanently?");
      if (confirmation === true) {

       this.$root.$data.cards.splice(this.$root.$data.activeCardIndex, 1);
       this.$root.$data.activeCardIndex = -1;
      
    }
    }
  

  },

  computed: {

    activeCard: function(){

      if(this.$root.$data.cards.lenght!=0){
       return this.$root.$data.cards[this.$root.$data.activeCardIndex];
      }
      else{
        return null;
      }}
  }
      };
</script>

<style scoped>
button {
   justify-content: center;
    align-self: center;
    width: 200px;
    height: 40px;
    color: white;
    margin-top: 15px;
    border-radius: 10px;
    font-family: "PT Mono", monospace;
    background-color: #635b5e;
}

button:hover {
  background: #ff9f45;
  color: black;
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
