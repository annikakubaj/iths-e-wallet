<template>
<form @submit.prevent="addThisCard">

    <label for="card-number"> Card number</label>
    <input
    name="cardnumber"
    type="text"
    />
    
        <label for="input-name"> CARDHOLDER NAME </label>
        <input
         id="input-name" 
         class="cardform"
         type="text" 
         v-model="name">
        
        <button class="btnAdd">Add Card</button>

        </form>

         

    
</template>

<script>
export default {
    data () {
        return {
            name: ''
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
    height: 50px;
    
}

</style>