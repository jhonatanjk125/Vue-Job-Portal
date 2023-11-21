<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold"><span v-bind:class="actionClass">{{ action }}</span> <br> for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at G careers</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList';

export default {
  name: 'TheHeadline',
  data () {
    return {
      action: 'Build',
      interval: null,
    }; 
  },
  computed: {
    actionClass() {
      return this.action.toLowerCase();
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code'];
        const nextAction = nextElementInList(actions, this.action);
        this.action = nextAction;
      }, 3000)
    }
  },
};
</script>

<style scoped>
.build {
  color: #1A73E8;
}

.create {
  color: #34A853
}

.design {
  color: #F9AB00;
}

.code {
  color: #D93025;
}
</style>