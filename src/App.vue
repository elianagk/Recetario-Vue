<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="justify-content-center">
      <b-navbar-brand to="/" class="mx-0"><h1>Recetario</h1></b-navbar-brand>      
    </b-navbar>
  
    <router-view/>  

  </div>
</template>

<style lang="css">
  html, #app {
    background-color: #212529;
  }

</style>
