<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Simplifiez vous la vie.</div>
    <div>
      L’environnement réglementaire des entreprises contraint à formaliser un nombre
      significatif d’opérations : statuts de société, bail commercial, assemblée générale,
      mouvement de capital.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Droit des affaires</div>
      <div class="paragraph">
        Nos équipes de juristes apportent leurs compétences dans tous les domaines du
        Droit des Affaires pour vous guider dans vos projets.
      </div>
    </div>
    <div>
      <div class="title">Droit des sociétés</div>
      <div class="paragraph">
        Nous gérons le statut juridique, les opérations de constitution, l’augmentation de
        capital, la cession de parts, les comptes-rendus de conseils d’administration.
      </div>
    </div>
    <div>
      <div class="title">Droit de l’entreprise individuelle</div>
      <div class="paragraph">
        Le traitement des charges d’une entreprise individuelle ne suit pas toujours les
        mêmes règles que pour une société. Faire appel à nous c’est assurer la bonne tenue
        de la comptabilité pour votre entreprise.
      </div>
    </div>
    <div>
      <div class="title">Droit fiscal</div>
      <div class="paragraph">
        La fiscalité des entreprises est un domaine complexe et technique. Nous sommes là
        pour réaliser vos déclarations, par exemple les obligations fiscales ou les
        problématiques de TVA.
      </div>
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
