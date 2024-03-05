<template>
  <div class="component-global">
    <div class="activity-slogan">Audit, atteignez vos objectifs</div>
    <div class="activity-description">
      <div>
        L’audit est une procédure qui certifie les comptes de votre entreprise
        pour attester la bonne santé financière ainsi que de la régularité de sa
        gestion.
      </div>
      <div>
        Chez SG Conseils nous allons plus loin, nous vous proposons un réel
        accompagnement.
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$base-white: #bec8da;
$base-black: #191c20;
$base-blue: #7d93b5;
.component-global {
  color: $base-black;
  .activity-slogan {
    position: absolute;
    top: 45vh;
    left: 5vw;
    margin: 2.5rem 0 0 5rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  .activity-description {
    position: absolute;
    background: $base-white;
    top: 64vh;
    height: 20vh;
    width: 50vw;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    font-size: 1.2rem;
    // box-shadow: inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff;
  }
}
</style>
