<template>
  <div class="company-name">{{ title }}</div>
</template>

<script setup>
import { defineProps } from "vue";

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
  text-shadow: 2px 2px 6px $base-blue;
  font-weight: bold;
  letter-spacing: 1.4px;
  width: 40vw;
  height: 9vh;
  box-shadow: 4px 0px;
}
</style>
