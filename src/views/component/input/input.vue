<template>
  <!--
    组件使用原理分析
    1、预计使用时，传递的值有：
      disabled是否可以禁用
      readonly是否可以编辑
      input的类型、
      autocomplete是否自动补全，默认为否、
      placeholder的内容、
      必填标识图标的显示、
      必填标识图标的显示的地方、
      value的内容、
      显示的名称lebel、
  -->
  <div class="c-div">
    <span :class="markPosition === 'after'? 'c-required' : ''" class="c-name">{{ label }}</span>
    <div class="c-content">
      <input
        v-bind="$attrs"
        :disabled="disabled"
        :readonly="readonly"
        :type="type"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :label="label"
        :class="{'c-error' : isError }"
        class="c-input"
        @blur="handleBlur"
      >
      <div class="c-prompt">{{ message }}</div>
    </div>
    <span v-if="markPosition === 'before'" class="c-required"/>
    <!-- <div class="c-prompt">请输入活动名称</div> -->
  </div>
</template>

<script>
export default {
  props: {
    // disabled是否可以禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // readonly是否可以编辑
    readonly: {
      type: Boolean,
      default: false
    },
    // input的类型、
    type: {
      type: String,
      default: 'text'
    },
    // 是否自动补全，默认为否、
    autocomplete: {
      type: String,
      default: 'off'
    },
    // placeholder的内容、
    placeholder: {
      type: String,
      default: ''
    },
    // 是否必填
    required: {
      type: Boolean,
      default: false
    },
    // 必填标识显示的位置、值有after，before
    markPosition: {
      type: String,
      default: 'after'
    },
    // label的内容、
    label: {
      type: String,
      default: ''
    },
    // 验证
    prop: {
      type: [Object, Array],
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      handleBlur: function() {},
      message: '',
      isError: false
    }
  },
  computed: {

  },
  created() {
    console.log(this)
    console.log(this.$props)
    // if (this.$attrs.value) {
    //   this.value = this.$attrs.value
    // }
    const props = this.$props.prop
    if (Object.prototype.toString.call(props) === '[object Array]') {
      console.log('数组', props)
      props.forEach((item, index, arr) => {
        if (item.trigger.indexOf('blur') >= 0 && item.required) {
          this.handleBlur = (e) => {
            if (e.target.value === undefined || e.target.value === null || e.target.value === '') {
              this.message = item.message
              this.isError = true
            } else {
              this.message = ''
              this.isError = false
            }
            this.$emit('input', event.target.value)
            this.handleParentRef()
            console.log(this)
            // this.$forceUpdate()
          }
        }
      })
    } else {
      console.log('对象', props)
    }
  },
  mounted() {
    this.handleParentRef()
  },
  methods: {
    // 鼠标离开input出发的事件函数
    // handleBlur() {
    // }
    // 给父组件的ref绑定一个函数
    handleParentRef() {
      let parentRef = ''
      for (let i in this.$parent.$refs) {
        parentRef = i
      }
      if (parentRef) {
        this.$parent.$refs[parentRef].validate = (callback) => {
          let valid = true
          if (this.message !== '') {
            valid = false
          } else {
            valid = true
          }
          callback(valid)
        }
      }
    }
  }
}
</script>

<style scoped>
.c-div {
  display: inline-flex;
  /* width: 180px; */
  /* height: 40px; */
  margin: 10px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  overflow: hidden;
}
.c-name {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.c-required:before {
  display: inline-block;
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
  margin-top: 15px;
}
.c-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
}
.c-input:focus {
  outline: none;
  border-color: #409eff;
}
.c-error {
  border-color: #f56c6c;
}
.c-error:focus {
  outline: none;
  border-color: #f56c6c;
}
/* .c-input {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
} */
.c-content {
  display: inline-block;
  vertical-align: top;
}
.c-prompt {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
}
input::-webkit-input-placeholder { /* WebKit browsers */
    color: #c0c4cc;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #c0c4cc;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #c0c4cc;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #c0c4cc;
}
</style>
