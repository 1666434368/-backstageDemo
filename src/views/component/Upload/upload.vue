<template>
  <el-upload
    class="avatar-uploader"
    action=""
    :multiple="true"
    :limit="10"
    :on-change="handlePictureCardPreview"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
export default {
  data() {
    return  {

    }
  }  
}
</script>

<style lang="scss" scoped>

</style>
