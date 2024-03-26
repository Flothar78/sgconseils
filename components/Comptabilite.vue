<template>
  <div :class="classesProp.childClasses[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 16 16"
    >
      <g fill="currentColor">
        <path
          d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
        ></path>
        <path
          d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
        ></path>
      </g>
    </svg>
  </div>
  <div :class="classesProp.childClasses[1]">
    La comptabilité, pas uniquement une histoire de chiffres.
  </div>
  <div :class="classesProp.childClasses[2]">
    <div>SG Conseils vous accompagne sur la gestion de votre comptabilité.</div>
    <div>
      Nous établissons votre bilan annuel, compte de résultat et nous effectuons
      vos déclarations fiscales.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Des informations précieuses</div>
      <div class="paragraph">
        Grâce à nos analyses et nos conseils d’expert, nous vous aidons à
        anticiper les décisions à prendre pour favoriser votre développement.
      </div>
    </div>
    <div>
      <div class="title">En ligne et interactive</div>
      <div class="paragraph">
        Optimisez votre organisation comptable grâce à nos outils en ligne :
        restitutez en ligne vos documents et accédez au partage de gestion
        complet.
      </div>
    </div>
    <div>
      <div class="title">Claire et proactive</div>
      <div class="paragraph">
        Nous garantissons une information chiffrée fiable, rapide et commentée
        indispensable à vos décisions stratégiques.
      </div>
    </div>
    <div>
      <div class="title">Libérez-vous</div>
      <div class="paragraph">
        Faites confiance à notre cabinet d’expertise comptable et concentrez vos
        forces sur votre coeur de métier.
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
