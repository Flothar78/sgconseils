<template>
  <div class="component-global">
    <div class="activity-slogan">
      Conseil en gestion, un accompagnement complet
    </div>
    <div class="activity-description">
      <div>
        A chaque étape du cycle de vie de votre entreprise, SG Conseils vous
        accompagne pour prendre les bonnes décisions.
      </div>
      <div>
        Nous vous offrons un véritable suivi de gestion et des conseils
        sur-mesure.
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
    margin: 3.5rem 0 0 5rem;
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
