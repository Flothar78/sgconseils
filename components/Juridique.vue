<template>
  <div :class="classesProp.childClasses[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 14 16"
    >
      <path
        fill-rule="evenodd"
        d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3l-1.5 3h3z"
        fill="currentColor"
      />
    </svg>
  </div>
  <div :class="classesProp.childClasses[1]">
    Juridique, simplifiez vous la vie.
  </div>
  <div :class="classesProp.childClasses[2]">
    <div>
      L’environnement réglementaire des entreprises contraint à formaliser un
      nombre significatif d’opérations : statuts de société, bail commercial,
      assemblée générale, mouvement de capital…
    </div>
    <div>Nous vous accompagnons sur tous ces aspects.</div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Droit des affaires</div>
      Nos équipes de juristes apportent leurs compétences dans tous les domaines
      du Droit des Affaires pour vous guider dans vos projets et tout au long de
      la vie de votre structure.
    </div>
    <div>
      <div class="title">Droit des sociétés</div>
      Entre le choix du statut juridique, la réalisation des opérations de
      constitution, d’augmentation de capital, de cession de parts, des
      comptes-rendus de conseils d’administration et d’assemblées générales,
      nous nous occupons de tout.
    </div>
    <div>
      <div class="title">Droit de l’entreprise individuelle</div>
      Le traitement des charges d’une entreprise individuelle ne suit pas
      toujours les mêmes règles que pour une société que ce soit dans leur
      évaluation ou dans leur déductibilité. De nombreuses spécificités
      s’appliquent, et il est important de les maîtriser. C’est pourquoi faire
      appel à nous c’est assurer la bonne tenue de la comptabilité pour votre
      entreprise.
    </div>
    <div>
      <div class="title">Droit fiscal</div>
      La fiscalité des entreprises est un domaine complexe et technique. Notre
      cabinet d’expert-comptable est là pour vous apporter les éclairages
      nécessaires, réaliser vos déclarations et notamment en ce qui concerne les
      obligations fiscales, les problématiques de TVA, d’impôts sur les
      sociétés…
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
