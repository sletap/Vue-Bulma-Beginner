<template>
  <div>
    <!-- This is the default bulma navbar -->
    <div id="navbar">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- router-link lets you change your url! We're switching between '/' and '/about' here -->
          <div class="navbar-item">
            <!-- uses the bulma button and sets is blue using is-link -->
            <router-link to="/"> 
              <button class='button is-link'> Main Page </button> 
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/about">
              <button class='button is-link'> About Page </button> 
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- bulma classes. hero is-fullheight is setting a 'hero' section to the whole page -->
    <!-- is-success is another color, like is-link  -->
    <div class="section hero is-fullheight is-success">
      <router-view/>
    </div>
    <!-- Go to views/about for more stuff -->
  </div>
</template>