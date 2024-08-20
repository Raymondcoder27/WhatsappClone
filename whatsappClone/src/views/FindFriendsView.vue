<script setup>
  import MessageRowComponent from '@/components/MessageRowComponent.vue';
</script>
<template>
  <div id="Messages" class="z-0 overflow-auto pt-1 fixed h-[calc(100vh-100px)] w-[420px]">
    <MessageRowComponent />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
