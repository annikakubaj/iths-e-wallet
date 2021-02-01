<template>

  <div class="home">
      <Card :newCard="activeCard" />
    <p>
      hej
    </p>
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

</style>
