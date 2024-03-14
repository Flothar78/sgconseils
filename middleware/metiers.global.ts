export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/metiers" || to.path === "/metiers/") {
    return navigateTo("/#metiers");
  }
});
