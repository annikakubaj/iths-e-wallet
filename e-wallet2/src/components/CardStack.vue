<template>
<section>

    <p> YOUR WALLET </p>

    <section class="card-stack">
        <Card 
        v-for="card of cards"
        :key="card.id"
        :card="card"
        @newCard="newCard"
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

</style>