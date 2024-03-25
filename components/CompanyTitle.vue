<template>
  <div class="company-name">{{ title }}</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "SG CONSEILS",
  },
});
</script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
.company-name {
  background: linear-gradient(
    0.25turn,
    $base-blue,
    $dark-blue,
    $dark-blue,
    $darkest-blue
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-shadow: 2px 2px 8px $base-black;
  font-weight: bold;
  letter-spacing: 1.4px;
  width: 40vw;
  height: 9vh;
  box-shadow: 6px 0px;
}
@media screen and (max-width: 767px) {
  .company-name {
    background: linear-gradient(
      0.3turn,
      $base-blue,
      $dark-blue,
      $dark-blue,
      $darkest-blue
    );
    font-size: 1.5rem;
    width: 85vw;
    height: 8vh;
    margin-left: -3rem;
  }
}
@media screen and (min-width: 1536px) {
  .company-name {
    font-size: 2.3rem;
    text-shadow: 4px 4px 6px black;
    letter-spacing: 2.3px;
    height: 12vh;
    box-shadow: 8px 0px;
  }
}
</style>
