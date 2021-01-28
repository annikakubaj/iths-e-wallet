<template>
<div>
<card :newCard="newCard"/>
<form @submit.prevent="addThisCard">

    <label for="card-number"> Card number</label>
    <input
    name="cardnumber"
    type="text"
    v-model="newCard.number"
    />
    
        <label for="input-name"> CARDHOLDER NAME </label>
        <input
         id="input-name" 
         class="cardform"
         type="text" 
         v-model="newCard.name">
        
        <button class="btnAdd">Add Card</button>

        </form>
        </div> 

         

    
</template>

<script>
import Card from "./Card.vue"
export default {
    components: {
        Card
    },

    data () {
        return {
            newCard: {
                number: "",
                name: ""
            }
        }
    },

methods: {
addThisCard() {
    this.$root.$data.cards.push(this.newCard)
}
}
    
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 400px;
    
}

.btnAdd {
    width: 400px;
    background-color: black;
    color: white;
}

</style>