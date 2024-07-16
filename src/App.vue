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
    <div class="flex absolute right-[1vw] gap-5 mr-5 mt-2">
            <a target="_blank" rel="noopener" href="https://github.com/KogaTsuki"><img class="w-12 h-auto" src="./assets/GitHub-Mark.png"></a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/koshlendergupta"><img class="w-12 h-auto" src="./assets/linkedin-64.png"></a>
    </div>
  </header>
  <div class="z-50 p-5">
        <router-link :to="redirect"> {{ page }} </router-link>
    </div>

  <RouterView />
</template>

<style scoped>

</style>
