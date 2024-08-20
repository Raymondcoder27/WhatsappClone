<script setup>
  import CheckAllIcon from 'vue-material-design-icons/CheckAll.vue'
</script>

<template>
  <div class="">
   <div class="flex w-full px-4 py-3 items-center cursor-pointer">
    <img
          src="../assets/images/profile.jpeg"
          class="rounded-full mr-4 w-12"
        />

        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            Frank
          </div>
          <div class="text-[12px] text-gray-600">
            Date
          </div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div class="text-[15px] flex justify-between text-gray-500 w-full">
            This is a message...
          </div>
        </div>
   </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
