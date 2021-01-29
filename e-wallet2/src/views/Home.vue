<template>
  <div class="home">
      <Card :newCard="activeCard" />
    <p>
      hej
    </p>
   <CardStack />
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
  computed: {

    activeCard: function(){

      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
  }
};
</script>
