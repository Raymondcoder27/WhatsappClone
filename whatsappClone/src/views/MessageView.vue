<script setup>
  import MessageRowComponent from '@/components/MessageRowComponent.vue';
  import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue';
  import EmoticonExcitedOutlineIcon from 'vue-material-design-icons/EmoticonExcitedOutline.vue';
  import PaperclipIcon from 'vue-material-design-icons/Paperclip.vue';
  import SendIcon from 'vue-material-design-icons/Send.vue';
</script>


<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div id="BG"></div>
      <div class="border-left border-green-500 w-full">
        <div class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2">
          <div class="flex items-center">
            <img
          src="../assets/images/profile.jpeg"
          class="rounded-full ml-1 w-10"
        />
        <div class="font-semibold ml-1 text-gray-900">
          Frank
        </div>
          </div>

          <DotsVerticalIcon fillColor="#515151" />
        </div>
      </div>

      <div id="MessagesSection"
      class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto">
        <div class="px-20 text-sm">
          <div class="flex w-[calc(100%-50px)]">
            <div class="inline-block bg-white rounded-md p-2 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nihil necessitatibus quisquam eos expedita assumenda, quod repellendus ullam voluptate, laborum velit! Asperiores tempora sunt molestiae aut error iure enim in.
            </div>
          </div>

          <div class="flex justify-end space-x-1 w-[calc(100%-50px)] float-right">
            <div class="inline-block bg-green-200 rounded-md p-2 my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nihil necessitatibus quisquam eos expedita assumenda, quod repellendus ullam voluptate, laborum velit! Asperiores tempora sunt molestiae aut error iure enim in.
            </div>
          </div>
        </div>
      </div>

      <div class="z-10 fixed bottom-0 bg-[#F0F0F0] p-2.5 w-[calc(100vw-420px)]">
        <div class="flex items-center justify-center">
          <EmoticonExcitedOutlineIcon size="27" fillColor="#515151" class="mx-1.5" />
          <PaperclipIcon size="27" fillColor="#515151" class="mx-1.5 mr-3" />
          <input
            type="text"
            class="mr-1 shadow appearance-none w-full py-3 px-4 text-gray-700 rounded-lg leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
            autocomplete="off"
            placeholder="Message"
          />

          <button class="ml-3 p-2 w-12 flex items-center justify-center">
            <SendIcon fillColor="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#BG{
  background: url('../assets/images/message-bg.png') no-repeat center;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
</style>
