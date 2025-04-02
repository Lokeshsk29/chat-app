<template>
  <div class="navbar">
    
  </div>
    <!-- <div class="navbar"> -->
      
        <!-- <h1>My Website</h1> -->
      
      <!-- <div class="profile">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe&size=48&background=random&color=fff"
          alt="Profile Picture"
        ></img>
        </div>
      </div>
    </div> -->
  </template>
  
  <script setup>
  defineProps({
    isSidebar: {
      type: Boolean,
      required: true,
    },
  });
  const emit = defineEmits(['toggleSidebar']);
  function toggleSidebar() {
    emit('toggleSidebar');
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ebe6e6;
    color: black;
    padding: 10px 20px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    background-color: #42b983;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #368c6c;
  }
  
  .profile {
    display: flex;
    align-items: center;
  }
  
  .profile img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  span {
    font-size: 16px;
  }
  </style>
  