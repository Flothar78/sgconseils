<template>
  <div class="company-activity">
    <div>Pour le développement de vos entreprises.</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
.company-activity {
  margin: 7.45rem 0 0 4rem;
  color: white;
  background: linear-gradient(
    0.25turn,
    $darkest-blue,
    $dark-blue,
    $dark-blue,
    $base-blue
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 1rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-shadow: 1px 1px 4px $base-black;
  width: 63vw;
  min-height: 4vh;
  box-shadow: -4px 0px;
}
@media screen and (max-width: 767px) {
  .company-activity {
    justify-content: center;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 2px $base-black;
    font-weight: 700;
    margin: 13.3rem 0 0 -1rem;
    padding: 0 1rem;
    width: 100vw;
    height: 8vh;
    box-shadow: -6px 0px;
  }
}
</style>
