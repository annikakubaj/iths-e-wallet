<template>
  <main class="AddCard">
   <Top header="ADD A NEW BANK CARD" addCard="NEW CARD" />
   
   <CardForm />
  </main>
</template>

<script>
import Top from '../components/Top'
import CardForm from '../components/CardForm'
export default {

components: {
  Top: Top,
  CardForm: CardForm
},


}


</script>