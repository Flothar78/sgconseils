<template>
  <NavBar />
  <div class="global-metiers">
    <div>
      Rendu global de la page des métiers <br />Ci-dessous composant avec id:
      {{ id }}
    </div>
    <div>
      <Juridique v-if="id === 'juridique'" />
      <Gestion v-else-if="id === 'gestion'" />
      <Audit v-else-if="id === 'audit'" />
      <Comptabilite v-else-if="id === 'comptabilite'" />
      <Informatique v-else-if="id === 'informatique'" />
      <Conseil v-else-if="id === 'conseil'" />
      <Social v-else-if="id === 'social'" />
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id;
console.log(id);
</script>

<style scoped>
.global-metiers {
  padding-top: 12vh;
  position: relative;
  background-color: #425B8A;
  color: white;
}
</style>
