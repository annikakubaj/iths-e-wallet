<template>
<div>
<card :newCard="newCard"/>
<form @submit.prevent="addThisCard">

    <label for="card-number"> CARD NUMBER</label>
    <input
    name="cardnumber"
    maxlength="16"
    type="text"
    v-model="newCard.number"
    />
    
        <label for="input-name"> CARDHOLDER NAME </label>
        <input
         id="input-name" 
         class="cardform"
         type="text" 
         v-model="newCard.name" />

         <label for="date"> VALID THRU </label>
         <input
         id="date"
         type="text"
         v-model="newCard.date"/>

         <label for="vendor"> VENDOR </label>
         <select name="vendor" v-model="newCard.vendor">
             <option value="vendor-bitcoin">Bitcoin Inc</option>
             <option value="vendor-blockchain">Blockchain Inc</option>
             <option value="vendor-evil">Evil Corp</option>
             <option value="vendor-ninja"> Ninja Bank</option>
             </select>


        
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
                name: "",
                date: "",
                vendor: ""
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