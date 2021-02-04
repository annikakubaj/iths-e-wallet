<template>
<div>
<card :newCard="newCard"/>
<div class="form-style">
<form @submit.prevent="addThisCard">

    <label for="card-number"> CARD NUMBER</label>
    <input
    name="cardnumber"
    placeholder="XXXX XXXX XXXX XXXX"
    v-mask="'#### #### #### ####'"
    maxlength="16"
    type="text"
    v-model="newCard.number"
    required
    />
    
        <label for="input-name"> CARDHOLDER NAME </label>
        <input
         id="input-name"
         placeholder="FIRSTNAME LASTNAME" 
         class="cardform"
         type="text" 
         v-model="newCard.name" 
         required/>

         <div class="valid-date">
         <label for="month"> Month </label>
         <select
         id="month"
         type="text"
         v-model="newCard.month"
         required>

         <option value=""></option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
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

         <label for="vendor"> VENDOR 
         </label>
         <select name="vendor" v-model="newCard.vendor">
             <option value="vendor-bitcoin">Bitcoin Inc</option>
             <option value="vendor-blockchain">Blockchain Inc</option>
             <option value="vendor-evil">Evil Corp</option>
             <option value="vendor-ninja"> Ninja Bank</option>
            </select>


        
        <button class="btnAdd">Add This Card</button>

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
                id: "",
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
    this.newCard.id = Date.now().toString()
    this.$root.$data.cards.push(this.newCard)
    this.$router.push("/")
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
    justify-content: center;
    align-self: center;
    width: 200px;
    height: 40px;
    background-color:#ff9f45;
    color:black;
    margin-top: 8px;
    border-radius: 10px;
    font-family: "PT Mono", monospace;
    
}


.form-style {
    display: flex;
    align-items: center;
    flex-direction: column;
}

label {
  font-family: "PT Mono", monospace;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 1rem;
}

input {
    padding: 0.9rem;
    border-radius: 5px;

}

select {
    padding: 3px;
    margin: 3px;
     border-radius: 5px;
}
</style>