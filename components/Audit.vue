<template>
  <div :class="classesProp.childClasses[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 48 48"
    >
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
        <path
          d="m8 36l.005-7.957a1 1 0 0 1 1-1h10.002c.922 0 .917-.818.917-2.764c0-1.946-4.902-3.585-4.902-10.426S20.1 5 24.32 5s8.817 2.012 8.817 8.853c0 6.841-4.876 7.929-4.876 10.426s0 2.764.78 2.764h9.96a1 1 0 0 1 1 1V36z"
        />
        <path stroke-linecap="round" d="M8 42h32" />
      </g>
    </svg>
  </div>

  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Audit, atteignez vos objectifs.</div>
    <div>
      L’audit est une procédure qui certifie les comptes de votre entreprise pour attester
      de la bonne santé financière ainsi que de la régularité de sa gestion.
    </div>
    <div>
      Chez SG Conseils nous allons plus loin, nous vous proposons un réel accompagnement.
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
