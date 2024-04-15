<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Atteignez vos objectifs</div>
    <div>
      L’audit est une procédure qui certifie les comptes de votre entreprise pour attester
      de la bonne santé financière ainsi que de la régularité de sa gestion. Chez SG
      Conseils, nous vous proposons un réel accompagnement.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Certification des comptes de l’entreprise</div>
      <div class="paragraph">
        Cette obligation légale permet d’assurer la conformité avec les normes en vigueur,
        mais aussi de fournir des informations claires sur la santé financière de la
        structure.
      </div>
    </div>
    <div>
      <div class="title">Sécurisez votre développement</div>
      <div class="paragraph">
        Dans un environnement économique plus complexe, vous devez avoir une vision claire
        sur la santé financière de votre entreprise.
      </div>
    </div>
    <div>
      <div class="title">Améliorez votre contrôle interne</div>
      <div class="paragraph">
        Nous optimisons la qualité de vos processus comptables et financiers. Nous vous
        conseillons sur la prévention et la gestion des risques qui pèsent sur votre
        activité.
      </div>
    </div>
    <div>
      <div class="title">Renforcez les liens</div>
      <div class="paragraph">
        Nos équipes vous accompagne pour renforcer le lien de confiance avec vos
        partenaires et participer ainsi à la pérennité et à la croissance de votre
        entreprise.
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
