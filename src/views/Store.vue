<template>
  <div class="home">
    <!-- Store is kind of like a global state -->
    <!-- Look at store.js, bottom of router.js and this file for explanations for how you can use store -->
    <h1 class="title"> 
      This is the Store.vue  
    </h1>
    <!-- The store should be prepopulated -->
    <!-- Grabbing something from our store -->
    <!-- This is kinda a bad example because dummy isn't being used on another page but whatever -->
    <p> Output of variable 'dummy' in store: </p>
    <!-- Weird syntax, but it's how you can look at a variable -->
    <p> {{ this.$store.state.dummy }} </p>  
    <p> {{email}} </p>
  </div>
</template>

<script>
import store from '@/store.js'

// @ is an alias to /src

export default {
  // include store here to tell this component to be aware of the store
  store,

  // Use computed if you need to display or get information that you have with a small change
  computed: {
    email: function(){
      return this.$store.state.dummy + '@umich.edu'
    }
  },

  // TODO
  // If you have components you want to display, import them above and then include them below
  // If we have a component named Profile, we can use <Profile> in the above Template
  components: {

  }
}
</script>
