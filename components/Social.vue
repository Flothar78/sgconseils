<template>
  <div class="component-global">
    <div class="activity-slogan">L’expertise RH qu’il vous faut</div>
    <div class="activity-description">
      <div>
        SG Conseils vous accompagne face aux changements constants de la
        réglementation et du droit social.
      </div>
      <div>
        Grâce à un suivi régulier de la gestion du personnel, depuis la gestion
        de la paie jusqu’aux ressources humaines soyez confiant en toute
        situation.
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
