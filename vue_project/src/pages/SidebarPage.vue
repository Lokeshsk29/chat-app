<template>
  <div class="main-sidebar" :class="{ expanded: isSidebar }">
    <div class="user-panel" v-for="i in iconData">
      <div class="image">
        <img src="https://ui-avatars.com/api/?name=John+Doe&size=96&background=random&color=fff" alt="User Image" />
      </div>
      <div class="info" v-if="isSidebar">
        <a href="#" class="user-name">{{ i.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSidebar: {
    type: Boolean,
    default: false
  },
  iconData:{
    type: Object,
    default: () => ({
      name: 'Menu',
      icon: 'fas fa-bars'
    })
  }
});
</script>

<style scoped>
.main-sidebar {
  width: 75px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  overflow-y: auto; 
  justify-content: space-evenly;
  transition: width 0.3s ease;
}

.main-sidebar.expanded {
  width: 110px;
  gap: 10px;
  padding-top: 15px;
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
  width:75%;
  border: 1px solid rebeccapurple;
  border-radius: 15px;
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
</style>
