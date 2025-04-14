<template>
    <div class="jobs-container">
      <h2 class="heading">Latest Remote Jobs</h2>
      <div class="jobs-grid">
        <div class="job-card" v-for="job in remoteJobs" :key="job.id">
          <img
            :src="job.company_logo"
            alt="Company Logo"
            class="company-logo"
            @error="(e) => e.target.src = 'https://ui-avatars.com/api/?name=' + job.company_name"
          />
          <h3 class="job-title">{{ job.title }}</h3>
          <p class="company-name">{{ job.company_name }}</p>
          <a :href="job.url" target="_blank" class="apply-link">View Job</a>
        </div>
      </div>
  
      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  import { getJobListings } from '@/utils/jobs'
  import Pagination from '@/components/Pagination.vue'

const remoteJobs = ref([])
const currentPage = ref(1)
const totalPages = ref(0)
const limit = 10

const fetchJobs = async (page) => {
const offset = (page - 1) * limit
const {jobs,total} = await getJobListings(offset, limit)
remoteJobs.value = jobs
totalPages.value = Math.ceil(total / limit)
}

const handlePageChange = (page) => {
currentPage.value = page
fetchJobs(page)
}

onMounted(async () => {
await fetchJobs(currentPage.value)
})
</script>
  
  <style scoped>
  .jobs-container {
    padding: 20px;
  }
  .company-logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  .heading {
    color: #42b983;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.8rem;
  }
  .jobs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  .job-card {
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .job-title {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
  }
  .company-name {
    color: #777;
    margin-bottom: 15px;
  }
  .apply-link {
    margin-top: auto;
    text-decoration: none;
    color: #fff;
    background-color: #42b983;
    padding: 10px;
    text-align: center;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  .apply-link:hover {
    background-color: #36966f;
  }
  .sentinel {
    height: 1px;
  }
  </style>
  