<template>
  <div class="company-activity">Experts Comptables</div>
  <div class="company-slogan">Le partenaire de vos ambitions.</div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
.company-activity {
  position: absolute;
  top: 22rem;
  left: 6rem;
  color: white;
  background: linear-gradient(
    0.35turn,
    $base-blue,
    #425b8a,
    #425b8a,
    $base-blue
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
padding-left: 1rem;
  font-size: 1.3rem;
  text-shadow: 2px 2px 2px black;
  width: 28vw;
  height: 6vh;
}
.company-slogan {
  position: absolute;
  top: 26rem;
  left: 8rem;
  color: black;  font-size: 1.3rem;
  text-shadow: 1px 1px 1px black;
}
</style>
