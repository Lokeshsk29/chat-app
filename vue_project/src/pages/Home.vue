<template>
  <div class="container">
    <SidebarPage :iconData = "sidebarIcondata" @page-selected="set_currentPage" />
    <div class="main-content">
      <NavbarPage :isSidebar="isSidebarEnable" @toggleSidebar="toggleSidebar" />
      <component :is="components[currentPage]" />
     
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SidebarPage from './SidebarPage.vue';
import NavbarPage from './NavbarPage.vue';
import JobsPage from './JobsPage.vue';
import MainHomePage from './MainHomePage.vue';



const currentPage = ref('MainHomePage');

// ChatPage, WeatherPage, SettingsPage

const components = { MainHomePage,JobsPage };


const message = ref('Loading...');
let sidebarIcondata = ref([
  {
  name: 'Home',
  icon: 'home',
  component: MainHomePage
  },
  {
  name: 'Chat-Box',
  icon: 'home',
  component: JobsPage
  },
  {
  name: 'Weather Data',
  icon: 'home',
  component: MainHomePage
  },
  {
  name: 'Web Settings',
  icon: 'home',
  component: MainHomePage
  },
  {
  name: 'Web Settings',
  icon: 'home',
  component: MainHomePage
  },
  {
  name: 'Web Settings',
  icon: 'home',
  component: MainHomePage
  },
  {
  name: 'Web Settings',
  icon: 'home',
  component: MainHomePage
  }
])


function set_currentPage(value) {
  // console.log("home page ",currentPage.value);
  currentPage.value = value;
  // console.log("set_currentPage ",currentPage.value);
  

}




</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: #42b983;
}
</style>
