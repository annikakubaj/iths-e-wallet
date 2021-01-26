<template>
  <main class="AddCard">
   <Top header="ADD A NEW BANK CARD" addCard="NEW CARD" />
   <Card />
   <CardForm />
  </main>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {

components: {
  Top: Top,
  Card: Card,
  CardForm: CardForm
},


}


</script>