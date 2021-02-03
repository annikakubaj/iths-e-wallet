<template>
<section>

    <h1> YOUR WALLET </h1>

    <section class="card-stack">
        <div v-for="(card, index) of cardStack"
        :key="card.id" @click="onClick(index)">
        <Card :newCard="card" />
        </div>

    </section>
    </section>
    
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
    computed: {
        cardStack() {
            return this.$root.$data.cards
        }
    
    },
     
    methods: {
        newCard(id) {
            this.$root.newCard(id)
        }
        ,onClick(index) {
            
            this.$root.$data.activeCardIndex = index;
        }
    }
}
</script>

<style scoped>

.card-stack {
    position: sticky;
    display: grid;
    grid-auto-rows: 100px;
    margin-bottom: 10rem;
}

h1 {
    font-family: "PT Mono", monospace;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
}

</style>