<template>
<header>
    <h1> {{ header }} </h1>
    <p> {{ addCard }} </p>
    </header>
</template>

<script>
export default {
    props: {
        header: String,
        addCard: String

    }
    
}
</script>

<style scoped>

</style>