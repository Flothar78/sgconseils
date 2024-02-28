<template>
  <div
    class="scroll-button"
    @click="scrollDown()"
    :class="{ twinkle: isActive }"
  >
    METIERS
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
  animation: flash 1.5s infinite ease-in;
}
.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px #b12434 solid;
  background: #b12434;
  width: 5rem;
  height: 2rem;
  border-radius: 10%;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 85%;
  margin: auto;
}
</style>
