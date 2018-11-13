<template>
    <div style="background: bisque">
      {{ id }}
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'user',
  props: ['id'],
  data () {
    return {
      msg: this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
