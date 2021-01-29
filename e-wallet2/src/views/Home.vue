<template>
  <div class="home">
    
   <CardStack />
  </div>
</template>

<script>
// @ is an alias to /src
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    CardStack
  }
};
</script>
