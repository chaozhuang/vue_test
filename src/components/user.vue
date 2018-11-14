<template>
    <div style="background: bisque">
      {{ id }}
      <router-view />
      <br />
      <div>
        {{ Local_a }}
      </div>
      <br />
      <div>
        {{ Local_b }}
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'user',
  props: ['id'],
  data () {
    return {
      msg: this.$route.params.id,
      a: 1000
    }
  },
  computed: {
    ...mapState({
      Local_a: state => state.a,
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      Local_b: function (state) {
        return state.a + this.a
      }
    })
  }
  /*
  computed: {
    ...mapState([
      'a'
    ])
  }
  */
}
</script>

<style scoped>

</style>
