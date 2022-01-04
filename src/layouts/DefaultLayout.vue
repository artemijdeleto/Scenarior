<template>
  <VMenubar></VMenubar>

  <div>
    <transition name="slide-fade" mode="out-in">
      <slot>
        <div class="mx-auto flex min-h-screen justify-center items-center">
          <Spinner />
        </div>
      </slot>
    </transition>
  </div>
</template>

<script setup>
import VMenubar from '@/components/TheMenubar.vue';
import Spinner from "@/components/Spinner.vue";
</script>
