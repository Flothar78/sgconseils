<template>
  <div
    class="scroll-button"
    @click="scrollDown()"
    :class="{ twinkle: isActive }"
  >
    <div class="arrow-down"></div>
    <div class="arrow-down"></div>
    <div class="arrow-down"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isActive = ref(true);
const emit = defineEmits(["scrollTo"]);
const scrollDown = () => {
  isActive.value = false;
  emit("scrollTo");
};
</script>

<style lang="scss" scoped>
@keyframes flash {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.twinkle {
  animation: flash 1s infinite ease-in-out;
}
.scroll-button {
  border: 8px #99d17b solid;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 46.9%;
  top: 85%;
  .arrow-down {
    border: 5px #99d17b solid;
    border-width: 0 0.2em 0.2em 0;
    margin: 0.5em 0 -0.5em 1.2em;
    height: 15%;
    width: 15%;
    transform: rotate(45deg);
  }
}
</style>
