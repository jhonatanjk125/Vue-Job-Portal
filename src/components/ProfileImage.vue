<template>
  <img v-bind:src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="user profile picture"/>
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/32074e24477793.56334dc36d4de.jpg'
    }
  }
}
</script>