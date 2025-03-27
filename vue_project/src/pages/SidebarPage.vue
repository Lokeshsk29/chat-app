<template>
  <div class="main-sidebar" :class="{ expanded: isSidebar }">
    <div class="user-panel">
      <div class="image">
        <img src="https://ui-avatars.com/api/?name=John+Doe&size=96&background=random&color=fff" alt="User Image" />
      </div>
      <div class="info" v-if="isSidebar">
        <a href="#" class="user-name">John Doe</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSidebar: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.main-sidebar {
  width: 55px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease;
}

.main-sidebar.expanded {
  width: 110px;
}

.user-panel {
  text-align: center;
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
