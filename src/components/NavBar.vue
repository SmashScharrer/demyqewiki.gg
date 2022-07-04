<template>
  <!-- NavBar -->
  <div class="navbar-component">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Demyqewiki.gg</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
