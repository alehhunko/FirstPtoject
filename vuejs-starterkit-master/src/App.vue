<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home' }">Основная страница</router-link>
      <router-link :to="{ name: 'router' }">Router</router-link>
      <router-link :to="{ name: 'store' }">Store</router-link>
      <router-link :to="{ name: 'develop' }">Develop</router-link>
      <router-link :to="{ name: 'services' }">Services</router-link>
    </header>
    <main>
      <!-- <img src="@/assets/images/logo.png" alt="Vue.js PWA"> -->
      <transition appear mode="out-in" name="slide-fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less" src="@/assets/styles/app.less"></style>
