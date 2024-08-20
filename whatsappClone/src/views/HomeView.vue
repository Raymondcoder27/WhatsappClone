<script setup>
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import ChatsView from "./ChatsView.vue";
</script>

<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div
        class="bg-[#F0F0F0] w-full flex justify-between items-center px-2 py-3"
      >
        <img
          src="../assets/images/profile.jpeg"
          class="rounded-full ml-1 w-10"
        />
        <div class="flex items-center justify-center">
          <AccountGroupIcon fillColor="#515151" class="mr-6" />
          <DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
        </div>
      </div>

      <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
        <div
          class="px-1 m-2 flex items-center justify-center rounded-md bg-[#F0F0F0]"
        >
          <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
          <input
            type="text"
            class="ml-2 appearance-none w-full py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500 bg-[#F0F0F0]"
            autocomplete="off"
            placeholder="Start a new chat"
          />
        </div>
      </div>
    </div>

    <ChatsView class="mt-[100px]" />

    <div class="text-center bg-gray-100 fixed ml-[420px] w-[calc(100vw-420px)]">
      <div class="grid h-screen place-items-center">
        <div>
          <div class="flex items-center w-full justify-center">
            <img
          src="../assets/images/whatsappweblogo.png"
          width="375"
        />
        <div class="text-gray-500 text-[32px] font-light mt-10">

        </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>