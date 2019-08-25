<template>

  <div class="columns">
    <!-- Columns are the grid system of bulma -->
    <!-- They change size dynamically depending on content on the page -->
    <!-- any new column that is added is recalculated -->
    <div class="column">
      <h1 class='title'>This is the about page</h1>
      <h1 class='title'>Notice that the URL changed</h1>
    </div>

    <!-- Now we will use Vue to add new columns -->
    <!-- the v-on:click lets us do something when the button is clicked -->
    <!-- go to the script tag to see what's happening on a button click -->
    <button class='button'> Add new stuff on screen </button>


    <!-- Vue for loop -->
    <!-- can also use "item in items" if you don't care about the index -->
    <div v-for="(item, index) in items" :key="index" class="column">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>

</style>

