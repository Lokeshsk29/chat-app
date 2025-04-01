<template>
  <div class="container">
    <SidebarPage :isSidebar="isSidebarEnable" :iconData = "sidebarIcondata"/>
    <div class="main-content">
      <NavbarPage :isSidebar="isSidebarEnable" @toggleSidebar="toggleSidebar" />
      <div class="content">
        <h1>Welcome to Home Page</h1>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SidebarPage from './SidebarPage.vue';
import NavbarPage from './NavbarPage.vue';
import { get_django_data } from '@/utils/api';

let isSidebarEnable = ref(true);
const message = ref('Loading...');
let sidebarIcondata = ref([
  {
  name: 'Home',
  icon: 'home',
  },
  {
  name: 'Chat-Box',
  icon: 'home',
  },
  {
  name: 'Weather Data',
  icon: 'home',
  },
  {
  name: 'Web Settings',
  icon: 'home',
  },
  {
  name: 'Web Settings',
  icon: 'home',
  },
  {
  name: 'Web Settings',
  icon: 'home',
  },
  {
  name: 'Web Settings',
  icon: 'home',
  }
])

async function callable() {
  try {
    const response = await get_django_data({ path: '/api/test/' });
    message.value = response.message;
  } catch (error) {
    message.value = 'Error fetching data!';
  }
}

function toggleSidebar() {
  isSidebarEnable.value = !isSidebarEnable.value;
}

onMounted(() => {
  callable();
});
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
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
