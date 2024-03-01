<template>
  <div class="company-name">SG CONSEILS</div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
.company-name {
  background: linear-gradient(
    0.25turn,
    $base-blue,
    $dark-blue,
    $dark-blue,
    $dark-blue
  );
  color: #e9ecf2;
  text-shadow: 1px 1px 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1.6px;
  width: 35vw;
  height: 9vh;
  box-shadow: 4px 0px #edf060;
}
</style>
