<template >
     <div class="content">
        <h1>Welcome to Home Page</h1>
        <p>{{ message }}</p>
      </div>
</template>
<script setup>

import { get_django_data } from '@/utils/api';
import { ref,onMounted } from 'vue';

const message = ref('');

async function callable() {
  try {
    const response = await get_django_data({ path: '/api/test/' });
    message.value = response.message;
  } catch (error) {
    message.value = 'Error fetching data!';
  }
}
onMounted(() => {
  callable();
});
</script>