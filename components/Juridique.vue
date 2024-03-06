<template>
  <div :class="classesProp.childClasses[0]">Juridique, simplifiez vous la vie.</div>
  <div :class="classesProp.childClasses[1]">
    <div>
      L’environnement réglementaire des entreprises contraint à formaliser un
      nombre significatif d’opérations : statuts de société, bail commercial,
      assemblée générale, mouvement de capital…
    </div>
    <div>Nous vous accompagnons sur tous ces aspects.</div>
  </div>
</template>

<script setup>
const classesProp = defineProps({
  childClasses: {
    type: Array,
  },
});
</script>


