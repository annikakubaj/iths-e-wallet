<template>
<div>
<card :newCard="newCard"/>
<div class="form-style">
<form @submit.prevent="addThisCard">

    <label for="card-number"> CARD NUMBER</label>
    <input
    name="cardnumber"
    placeholder="XXXX XXXX XXXX XXXX"
    maxlength="16"
    type="text"
    v-model="newCard.number"
    />
    
        <label for="input-name"> CARDHOLDER NAME </label>
        <input
         id="input-name"
         placeholder="FIRSTNAME LASTNAME" 
         class="cardform"
         type="text" 
         v-model="newCard.name" />

         <div class="valid-date">
         <label for="month"> Month </label>
         <select
         id="month"
         type="text"
         v-model="newCard.month">

         <option value=""></option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        </div>

        <div class="valid-date">

        <label for="year"> Year </label>
         <select
         id="year"
         type="text"
         v-model="newCard.year">
         <option value="" ></option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        </div>

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
                month: "",
                year: "",
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


.form-style {
    display: flex;
    align-items: center;
    flex-direction: column;
}

</style>