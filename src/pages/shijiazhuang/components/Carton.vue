<template>
  <div>
    <h3>{{ title }}</h3>
    <a class="btn" href="javascript:;" @click="toWelfare">跳转领取福利页</a>
  </div>
</template>

<script>
export default {
  name: 'Carton',
  data () {
    return {
      title: '石家庄动画'
    }
  },
  methods: {
    toWelfare () {
      this.$router.push({ path: '/welfare', query: { city: '石家庄' } })
    }
  }
}
</script>

<style scoped>
  .btn {
    display: inline-block;
    line-height: 1rem;
    width: 300px;
    border: 1px solid #ccc;
  }
</style>
