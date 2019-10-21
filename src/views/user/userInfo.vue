<template>
  <div>
    user
  </div>
</template>

<script>
import { asyncRouterMap, constantRouterMap } from '@/router'
export default {
  name: 'UserInfo',
  data() {
    return {

    }
  },
  mounted() {
    console.log(asyncRouterMap, constantRouterMap)
  }
}
</script>

<style scoped>

</style>
