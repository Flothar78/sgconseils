<template>
  <div :class="classesProp.childClasses[0]">
    La comptabilité, pas uniquement une histoire de chiffres.
  </div>
  <div :class="classesProp.childClasses[1]">
    <div>SG Conseils vous accompagne sur la gestion de votre comptabilité.</div>
    <div>
      Nous établissons votre bilan annuel, compte de résultat et nous effectuons
      vos déclarations fiscales.
    </div>
  </div>
</template>

<script setup>
const classesProp = defineProps({
  childClasses: {
    type: Array,
  },
});
</script>
