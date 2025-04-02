<template>
  <div class="main-sidebar" :class="{ expanded: isSidebarEnable }">
    <div class="user-panel" v-for="i in iconData" :key="i.name">
      <div class="image">
        <img src="https://ui-avatars.com/api/?name=John+Doe&size=96&background=random&color=fff" alt="User Image" />
      </div>
      <div class="info" v-if="isSidebarEnable">
        <a href="#" class="user-name">{{ i.name }}</a>
      </div>
    </div>
    <div class="toggle-container" @click="toggleSidebar">
      <svg v-if="isSidebarEnable" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6L15 12L9 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span v-if="isSidebarEnable" class="toggle-text">Collapse</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let isSidebarEnable = ref(false);

defineProps({
  iconData: {
    type: Object,
    default: () => ({
      name: 'Menu',
      icon: 'fas fa-bars'
    })
  }
});

function toggleSidebar() {
  isSidebarEnable.value = !isSidebarEnable.value;
}
</script>

<style scoped>
.main-sidebar {
  width: 75px;
  /* height: 100%;  */
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-evenly;
  transition: width 0.3s ease;
}

.main-sidebar.expanded {
  width: 110px;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.main-sidebar::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 3px;
}

.main-sidebar::-webkit-scrollbar {
  width: 6px;
}

.main-sidebar::-webkit-scrollbar-track {
  background: #222;
}

.user-panel {
  text-align: center;
  padding: 7px;
  width: 75%;
  border: 1px solid rebeccapurple;
  border-radius: 15px;
  cursor: pointer;
}

.image img {
  border-radius: 50%;
  margin-bottom: 10px;
  width: 48px;
  height: 48px;
}

.user-name {
  color: #42b983;
  text-decoration: none;
}

.toggle-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.toggle-container svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.toggle-text {
  margin-left: 5px;
  color: white;
  font-size: 14px;
}
</style>
