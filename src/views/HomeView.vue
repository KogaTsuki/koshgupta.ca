<script setup>
  import Name from '../components/Name.vue';
  import About from '../components/About.vue';
  import Skills from '../components/Skills.vue';
  import { shallowRef, ref } from 'vue';

  const components = [Name, About, Skills];
  let index = 0;
  const direction = ref('forward');
  const currentInfo = shallowRef(components[index]);

  const decrement = () => {
    if (index > 0) {
      direction.value = 'backward';
      index--;
      currentInfo.value = components[index];
    }
  };

  const increment = () => {
    if (index < components.length - 1) {
      direction.value = 'forward';
      index++;
      currentInfo.value = components[index];
    }
  };
</script>

<template>
  <div class="inline-grid grid-cols-12 grid-rows-1 w-screen h-screen">
    <button @click="decrement" class="cursor-pointer duration-200 hover:scale-125 active:scale-100 justify-self-start m-2 z-0" title="Go Back">
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" class="stroke-blue-300">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
      </svg>
    </button>

    <Transition mode="out-in" :name="direction === 'forward' ? 'slide-left' : 'slide-right'">
      <component :is="currentInfo" class="col-span-10 row-span-1 content-center justify-items-center z-10 justify-self-center"></component>
    </Transition>

    <button @click="increment" class="cursor-pointer duration-200 hover:scale-125 active:scale-100 mr-2 justify-self-end content-center z-10" title="Go Back">
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" class="stroke-blue-300">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M13 6L19 12M19 12L13 18M19 12H5"></path>
      </svg>
    </button>
  </div>
</template>

<style>

.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 1s;
}

.slide-left-enter-from {
  transform: translateX(500%);
}
.slide-left-leave-to {
  transform: translateX(-500%);
}
.slide-left-enter-to, .slide-left-leave-from {
  transform: translateX(0%);
}

.slide-right-enter-from {
  transform: translateX(-500%);
}
.slide-right-leave-to {
  transform: translateX(500%);
}
.slide-right-enter-to, .slide-right-leave-from {
  transform: translateX(0%);
}
</style>
