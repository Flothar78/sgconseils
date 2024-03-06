<template>
  <div :class="classesProp.childClasses[0]">
    Notre but, mieux vous accompagner au quotidien.
  </div>
  <div :class="classesProp.childClasses[1]">
    <div>
      Nous nous impliquons dans la stratégie de votre entreprise et ses projets
      de croissance.
    </div>
    <div>Nous apportons notre vision, en la compilant à vos objectifs.</div>
  </div>
</template>

<script setup>
const classesProp = defineProps({
  childClasses: {
    type: Array,
  },
});
</script>
