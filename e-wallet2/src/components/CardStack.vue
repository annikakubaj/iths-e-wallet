<template>
<section>

    <p> YOUR WALLET </p>

    <section class="card-stack">
        <Card 
        v-for="card of cardStack"
        :key="card.id"
        :newCard="card"
        
        />

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

</style>