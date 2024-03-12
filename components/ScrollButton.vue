<template>
  <button
    class="scroll-button"
    @click="scrollDown()"
    :class="{ twinkle: isActive }"
  >
    NOS MÉTIERS
  </button>
</template>

<script lang="ts" setup>
const isActive = ref(true);
const emit = defineEmits(["scrollTo"]);
const scrollDown = () => {
  isActive.value = false;
  emit("scrollTo");
};
</script>

<style lang="scss" scoped>
@keyframes glitter {
  0% {
    background: #d94556;
    box-shadow: -1px 1px 18px;
  }
  50% {
    background: #b12434;
    box-shadow: 0px 0px 0px;
    width: 9rem;
    height: 3.2rem;
    font-size: .93rem;
    letter-spacing: 1.1px;
  }
  100% {
    background: #d94556;
    box-shadow: -1px 1px 18px;
  }
}
.twinkle {
  animation: glitter 1.4s ease-in-out infinite;
}
.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px transparent solid;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: #b12434;
  width: 8rem;
  height: 3rem;
  border-radius: 5%;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 9vh;
  margin: auto;
}
@media screen and (max-width: 699px) {
  .scroll-button {
    bottom: 7vh;
  }
}
</style>
