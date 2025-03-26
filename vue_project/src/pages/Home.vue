<template>
    <h1>Welcome to Home Page</h1>
    <p>{{ message }}</p>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { get_django_data } from '@/utils/api';
  
  const message = ref('Loading...');
  async function callable(){

    try {
      const response = await get_django_data({ path: '/api/test/' });
      message.value = response.message;
    } catch (error) {
      message.value = 'Error fetching data!';
    }
  }
  onMounted(() =>{
    callable()
  });
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  