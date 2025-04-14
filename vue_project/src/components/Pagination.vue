<!-- components/Pagination.vue -->
<template>
    <div class="pagination">
      <button @click="changePage(1)" :disabled="currentPage === 1">«</button>
  
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
  
      <button @click="changePage(totalPages)" :disabled="currentPage === totalPages">»</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    currentPage: Number,
    totalPages: Number,
  })
  
  const emit = defineEmits(['page-change'])
  
  const visiblePages = computed(() => {
    const range = []
    for (let i = Math.max(1, props.currentPage - 4); i <= Math.min(props.totalPages, props.currentPage + 5); i++) {
      range.push(i)
    }
    return range
  })
  
  function changePage(page) {
    if (page !== props.currentPage) {
      emit('page-change', page)
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    padding: 6px 12px;
    border: none;
    background-color: white;
    cursor: pointer;
    font-weight: bold;
  }
  
  button.active {
    background-color: black;
    color: white;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  