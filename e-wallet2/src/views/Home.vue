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
