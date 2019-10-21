<template>
  <el-menu class="navbar">
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <el-tooltip :content="$t('navbar.Screenfull')" effect="dark" placement="bottom">
          <screenfull id="screenfull" class="right-menu-item hover-effect" />
        </el-tooltip>
        <el-tooltip :content="$t('navbar.Theme')" effect="dark" placement="bottom">
          <theme-picker class="theme" @change="themeChange" />
        </el-tooltip>
        <el-tooltip :content="$t('navbar.Language')" effect="dark" placement="bottom">
          <lang-select class="international right-menu-item" />
        </el-tooltip>
      </template>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              {{ $t('navbar.Home') }}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.LogOut') }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull'
import ThemePicker from '@/components/ThemePicker'
import LangSelect from '@/components/LangSelect'

export default {
  components: {
    Screenfull,
    ThemePicker,
    LangSelect
  },
  computed: {
    ...mapGetters([
      'avatar',
      'device'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  background-color: transparent;
  height: 70px;
  line-height: 70px;
  float: right;
  border-radius: 0px !important;
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 70px;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
    .theme{
      padding: 22px 8px;
      height: 50px;
      float: left;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      float: right;
      margin:15px 30px 15px 0;
      .avatar-wrapper {
        position: relative;
        padding-left: 8px;
        height: 40px;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.user-dropdown{
  top: 50px !important;
}
</style>
