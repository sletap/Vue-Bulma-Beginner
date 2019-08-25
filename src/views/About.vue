<template>
  <div>
    <div class="columns">
      <!-- Columns are the grid system of bulma. It uses CSS Flexbox -->
      <!-- They change size dynamically depending on content on the page -->
      <!-- any new column that is added is recalculated -->
      <div class="column is-multiline">
        <h1 class='title'>This is the About.vue page</h1>
        <h1 class='title'>Notice that the URL changed</h1>
      </div>
    </div>
    <!-- start a new bulma columns section -->
    <!-- is-multiline tells it to go to the next line if it's gonna overflow -->
    <div class="columns is-multiline is-centered"> 
    <!-- Vue for loop -->
    <!-- can also use "item in items" if you don't care about the index -->
    <!-- The columns system is in groups of 12. you can include is-x if you want to to customize how much room you want it to take up -->
      <div v-for="(item, index) in items" :key="index" class="column">
        <!-- Use these {{ }} to display a variable or call a data/computed property -->
        <!-- border is a style defined at the button of this file -->
        <!-- It is only available in about -->
        <p class='outside'>{{item}} #{{index + 1}}</p>
      </div>
    </div>

    <!-- Now we will use Vue to add new columns -->
    <!-- the v-on:click lets us do something when the button is clicked -->
    <!-- go to the script tag to see what's happening on a button click -->
    <button v-on:click="addNewItem()" class='button'> Add new stuff on screen </button>
  </div>
</template>

<script>
export default {
  // Variables that we are using ON THIS PAGE SPECIFICALLY
  // These don't carry over to other pages unless you've passed them by using a prop
  // Or you can also send variables to another page by putting it into a Vuex store and calling it on another page
  // Both examples will be included in the store page
  data() {
    return {
      items: []
    }
  },
  methods: {
    addNewItem: function(){
      // use this to reference items from data
      this.items.push('item')
    }
  },
}
</script>


<style scoped>
  /* use 'scoped' so that style from this page doesn't leak into others */
  .outside{
    border: 5px solid #B8C5D6
  }
</style>

