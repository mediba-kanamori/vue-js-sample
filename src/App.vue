<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },

  components: {
    Hello
  },

  created() {
    console.log('hoge');
  }
}
</script>
