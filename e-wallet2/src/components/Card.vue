<template>
<main class="wrapper">
    
    <section class="card" :class="newCard.vendor">
        <div class="chip"> <img src="../assets/chip-dark.svg"/></div>
        <!-- <div class="bitcoin"> <img src="../assets/vendor-bitcoin.svg"/></div> -->
        <section class="vendor">
            <img v-if="newCard.vendor ==='vendor-bitcoin'" src="../assets/vendor-bitcoin.svg">
            <img v-else-if="newCard.vendor === 'vendor-evil'" src="../assets/vendor-evil.svg">
            <img v-else-if="newCard.vendor === 'vendor-blockchain'" src="../assets/vendor-blockchain.svg">
            <img v-else-if="newCard.vendor === 'vendor-ninja'" src="../assets/vendor-ninja.svg">

            </section>


    <div class= "card-number"> {{ newCard.number }} </div>
    <div class="card-holder p-small"> CARDHOLDER NAME </div>
    <div class="name"> {{ newCard.name }}</div>
    <div class="valid p-small">VALID THRU</div>
    <div class="month">{{ newCard.month }}</div>
    <div class="year"> {{ newCard.year }} </div>
    
    </section>



    </main>
    
    </template>

<script>

export default {
    props: {
        newCard: Object
    }
    
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
    background: #d8d8d8;
    
 
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
    grid-column: 1;
    grid-row: 4;


}

.name {
    grid-column: 1;
    grid-row: 5;

}

.surname {
    grid-column: 2;
    grid-row: 5;

}

.month {
    grid-column: 4;
    grid-row: 5;
    margin-right: 50px;

    

}

.year {
    grid-column: 3/5;
    grid-row: 5;
   margin-left: 120px;
   justify-content: flex-end;
  
}



.vendor {
    grid-column: 4;
    margin-top: 10px;
}

.vendor-bitcoin {
    background-color: #FFD700;
}

.vendor-evil {
 background-color: #FF1493;   
}
.vendor-blockchain {
background-color: #9932CC;
}

.vendor-ninja {
    background-color: #585454;
}




</style>