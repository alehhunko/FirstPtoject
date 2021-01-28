<template>
  <div class="post">
   <div v-for="post in categories" v-bind:key="post.id">{{ post.email }} : <br/>{{ post.body }}</div>
</div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      
    };
  },
  mounted() {
     this.$store.dispatch('getMail');
  },
  computed: {
    categories () {
      return this.$store.state.all;
    }
  }
};
</script>