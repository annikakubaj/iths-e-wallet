<template>
<main class="wrapper">
    <section class="card">
        <div class="chip"> <img src="../assets/chip-dark.svg"/></div>
        <div class="bitcoin"> <img src="../assets/vendor-bitcoin.svg"/></div>
    <div class= "card-number"> Card number </div>
    <div class="card-holder p-small"> CARDHOLDER NAME </div>
    <div class="firstname"> Firstname</div>
    <div class="surname"> Surname</div>
    <div class="valid p-small">VALID THRU</div>
    <div class="date">mm/YY</div>
    
    </section>

    </main>
    
    </template>

<script>
export default {
    
}
</script>

<style scoped>

.wrapper {
display: flex;
width: 100%;
justify-content: center;
}

.card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 220px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
    border-radius: 10px;
    width: 400px;
    background-color: #d8d8d8;
    
 
}  

.card-number {
    grid-column: 2/4;
    grid-row: 3;
font-size: 1.7rem;

}
  

p {
  font-size: 1.1rem;
  font-family: "PT Mono", monospace;
}


.valid {
    grid-column: 4;
    grid-row: 4;
  

}

.p-small {
    font-size: 0.7rem;
}

.card-holder {
    grid-column: 1/3;
    grid-row: 4;
    margin-top: 9px;
    margin-right: 15px;


}

.firstname {
    grid-column: 1;
    grid-row: 5;

}

.surname {
    grid-column: 2;
    grid-row: 5;

}

.date {
    grid-column: 4;
    grid-row: 5;

}

.chip {

}

.bitcoin {
    grid-column: 4;
    margin-top: 15px;
    
    
}


</style>