<template>
  <div :class="classesProp.childClasses[0]">Audit, atteignez vos objectifs.</div>
  <div :class="classesProp.childClasses[1]">
    <div>
      L’audit est une procédure qui certifie les comptes de votre entreprise
      pour attester de la bonne santé financière ainsi que de la régularité de sa
      gestion.
    </div>
    <div>
      Chez SG Conseils nous allons plus loin, nous vous proposons un réel
      accompagnement.
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
