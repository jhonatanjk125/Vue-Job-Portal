<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a v-bind:href="url" class="flex h-full items-center text-xl">
          {{ company }}
        </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="first:ml-0 ml-9 h-full" v-for="menuItem in menuItems" v-bind:key="menuItem">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex items-center">
          <profile-image v-if="isLoggedin"/>
          <action-button v-else text="Sign in" type="primary" @click="loginUser" />
        </div>
      </div>
      <sub-nav v-if="isLoggedin"/>
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
import SubNav from './SubNav.vue';
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: 'G Careers',
      url: 'https://careers.google.com ',
      menuItems: ['Teams', 'Locations', 'Life at G careers', 'How we hire', 'Students', 'Jobs'],
      isLoggedin: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedin = true;
    }
  },
}
</script>
