import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// A Store holds our applications state
// For items that need to be shared between components, it's often easier to just call from the store
// Rather than having to pass a bunch of props around all the time
// We can make a check on route entry to see if we need to use some information or not
// look at the bottom of router.js for more information

export default new Vuex.Store({
  state: {
    dummy: null,
  },

  // the only way you can change state is to mutate it
  mutations: {
    addDummyInfo(state){
      state.dummy = "DummyDums"
    }
  },
})
