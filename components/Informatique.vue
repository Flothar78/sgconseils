<template>
  <div class="component-global">
    <div class="activity-slogan">Outils informatiques, gagnez du temps.</div>
    <div class="activity-description">
      <div>
        Nous mettons en place une organisation administrative, comptable et
        informatique optimale pour vous libérer du temps et vous consacrer
        totalement à votre activité.
      </div>
      <div>
        Nous nous adaptons à votre environnement de travail, vos habitudes et
        vos contraintes.
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
