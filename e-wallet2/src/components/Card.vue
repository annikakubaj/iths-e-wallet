<template>
    <section class= "card"> 
        <p class="card-number">CARD NUMBER</p>
        <p class="expiry-date">Expiry date</p>
        <p class="valid p-small">Valid until</p>
        <p class="card-name p-small"> Cardholders Name</p>
        <p class="input-name">inputted name</p>
        
    </section>
    
    


</template>

<script>
export default {
    
}
</script>

<style scoped>

.card {
  width: 25%;
  height: 220px;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 1rem;
}  

.card-number {
    grid-row: 2;
    grid-column: 1/3;
    font-size: 1.7rem;
    padding-top: 0.5rem;
    padding-bottom: 0.8rem;
}

p {
  font-size: 1.1rem;
  font-family: "PT Mono", monospace;
}

.expiry-date {
    grid-row: 4;
    grid-column: 2;
    align-self: end;
    justify-self: end;
}

.expiry-date {
justify-self: end;
}

.valid {

}

.p-small {
    font-size: 0.7rem;
}



</style>