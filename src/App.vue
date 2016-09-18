<template>
  <a v-link="{ path: '/fuga' }">fuga</a>
  <a v-link="{ path: '/hello' }">hello</a>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    console.log('app');
  }
}
</script>
