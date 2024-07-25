<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()

const page = computed(() => {
  if (route.path === '/projects') {
    return 'Home'
  } else {
    return 'Projects'
  }
})

const redirect = computed(() => {
  if (route.path === '/projects') {
    return '/'
  } else {
    return '/projects'
  }
})


</script>

<template>
  <header>
    <div class="flex absolute right-[1vw] gap-5 mr-5 mt-5">
            <a target="_blank" rel="noopener" href="https://github.com/KogaTsuki"><img class="w-12 h-auto" src="./assets/GitHub-Mark.png"></a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/koshlendergupta"><img class="w-12 h-auto" src="./assets/linkedin-64.png"></a>
    </div>
    <div class="flex absolute left-[1vw] ml-5 mt-8 text-gray-200 text-lg w-fit">
        <router-link :to="redirect"> {{ page }} </router-link>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
