<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/" >Recetario</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/categorias">Categorias</b-nav-item>
        <b-nav-item to="/ingredientes">Ingredientes</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <router-view />
  
</div>
</template>

<style lang="css">
  html, #app {
    background-color: #212529;
  }

</style>
