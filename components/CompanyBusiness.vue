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
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-shadow: 1px 1px 4px $base-black;
  width: 63vw;
  min-height: 4vh;
  box-shadow: -4px 0px;
}
@media screen and (max-width: 767px) {
  .company-activity {
    font-size: 1rem;
    letter-spacing: 0.8px;
    font-weight: 500;
    margin: 2rem 0 0 .5rem;
    padding: 1rem 0 1rem 1rem;
    width: 85vw;
    height: 5vh;
    box-shadow: -6px 0px;
  }
}
//@media screen and (min-width: 1536px) {
//  .company-activity {
//    padding: 1rem 0 1rem 2rem;
//    font-size: 1.4rem;
//    font-weight: 500;
//    letter-spacing: 2px;
//    text-shadow: 3px 3px 4px black;
//    height: 9vh;
//    box-shadow: -8px 0px;
//  }
//}
</style>
