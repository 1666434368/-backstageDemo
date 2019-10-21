
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      // 如果路由地址为https开头的地址就以a标签的形式重新打开一个标签页
      // console.log(isExternal(url))
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      // 否则就以router-link的形式跳转
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
