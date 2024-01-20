<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
  const menuShow = ref(false);
  const show = () => {
    menuShow.value = !menuShow.value;
  };
</script>

<template>
  <header>
    <div class="flex absolute right-[1vw] gap-5 mr-10 mt-5">
            <a target="_blank" rel="noopener" href="https://github.com/KogaTsuki"><img class="w-12 h-auto" src="./assets/GitHub-Mark.png"></a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/koshlendergupta"><img class="w-12 h-auto" src="./assets/linkedin-64.png"></a>
    </div>
    <div class="flex fixed gap-5 ml-5 mt-5 z-10">
            <button id="menu" @click="show" class="hover:bg-fixed bg-no-repeat bg-cover text-slate-800 p-2 rounded-xl shadow-xl" style="background-image: url(/box-img.svg);"><img src="./assets/menu.png" alt="Menu Icon" class="w-10 h-auto"></button>
            <div id="MenuCont" v-show="menuShow" class="flex fixed gap-5 ml-20 bg-no-repeat bg-cover text-slate-800 p-2 rounded-xl shadow-2xl" style="background-image: url(/box-img.svg);">
                <div class="text-slate-800 p-2 rounded-xl shadow-xl"><router-link to="/">Home</router-link></div>

                <div class="text-slate-800 p-2 rounded-xl shadow-xl"><router-link to="/about">About</router-link></div>
                
                <div class="bg-inherit text-slate-800 p-2 rounded-xl shadow-xl"><router-link to="/projects">Projects</router-link></div>
            </div>
        </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
