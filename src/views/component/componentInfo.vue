<template>
  <div>
    <button @click="handleInput">input</button>
    <div>
      <span>123</span>
      <c-input
        ref="componentInfo"
        :prop="prop"
        v-model="parentValue"
        label="名称："
        mark-position="before"
        autocomplete="on"
        placeholder="请输入名称"
      />
    </div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import CInput from '@/views/component/input/input'
export default {
  name: 'ComponentInfo',
  components: {
    CInput
  },
  data() {
    return {
      parentValue: '',
      prop: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    }
  },
  watch: {
    parentValue(val, newVal) {
      console.log('componentInfo', val, newVal)
    }
  },
  mounted() {
    console.log(this.$refs.componentInfo)
    // this.$refs.componentInfo.validate = (valid) => {}
  },
  methods: {
    handleInput() {
      this.$router.push(
        {
          path: 'cinput'
        }
      )
    },
    handleClick() {
      console.log('componentInfo Click', this.parentValue)
      console.log(this)
      this.$refs.componentInfo.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    }
    // validate: function validate(callback) {
    //   var _this2 = this

    //   if (!this.model) {
    //     console.warn('[Element Warn][Form]model is required for validate to work!')
    //     return
    //   }

    //   var promise = void 0
    //   // if no callback, return promise
    //   if (typeof callback !== 'function' && window.Promise) {
    //     promise = new window.Promise(function(resolve, reject) {
    //       callback = function callback(valid) {
    //         valid ? resolve(valid) : reject(valid)
    //       }
    //     })
    //   }

    //   var valid = true
    //   var count = 0
    //   // 如果需要验证的fields为空，调用验证时立刻返回callback
    //   if (this.fields.length === 0 && callback) {
    //     callback(true)
    //   }
    //   var invalidFields = {}
    //   this.fields.forEach(function(field) {
    //     field.validate('', function(message, field) {
    //       if (message) {
    //         valid = false
    //       }
    //       // eslint-disable-next-line
    //       invalidFields = merge_default()({}, invalidFields, field)
    //       if (typeof callback === 'function' && ++count === _this2.fields.length) {
    //         callback(valid, invalidFields)
    //       }
    //     })
    //   })

    //   if (promise) {
    //     return promise
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
