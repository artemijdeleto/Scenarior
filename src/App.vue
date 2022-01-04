<template>
  <router-view v-slot="{ Component }">
    <component :is="layout">
      <component :is="Component" />
    </component>
  </router-view>
</template>

<script lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

export default {
  components: {
    DefaultLayout,
    EmptyLayout
  },
  mounted() {
    setTimeout(() => document.body.style.opacity = '1', 100);
  },
  computed: {
    layout(): string {
      // @ts-ignore
      return this.$route.meta.layout || 'DefaultLayout';
    }
  }
}
</script>
