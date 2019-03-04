<template>
  <div>
    <h6>{{ city }}权益</h6>
    <button @click="handleGet">测试Mock数据</button>
    <button @click="handlePost">测试Mock数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Welfare',
  data () {
    return {}
  },
  computed: {
    city () {
      return this.$route.query.city
    }
  },
  methods: {
    handleGet () {
      axios.get('https://10.10.10.10/shenyang/get', {
        params: {
          token: 'kakakaka'
        }
      }).then(({ data }) => {
        alert(JSON.stringify(data))
      }).catch(err => {
        alert(err)
      })
    },
    handlePost () {
      axios.post('https://10.10.10.10/shenyang/get', {
        token: 'iiiiii'
      }).then(({ data }) => {
        alert(JSON.stringify(data))
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
