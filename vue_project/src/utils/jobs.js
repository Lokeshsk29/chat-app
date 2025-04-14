export async function getJobListings(offset = 0, limit = 10) {
    const response = await fetch('https://remotive.com/api/remote-jobs');
    const data = await response.json();
    const allJobs = data.jobs;
    
    const paginatedJobs = allJobs.slice(offset, offset + limit);
    return {
      jobs: paginatedJobs,
      total: allJobs.length,
    };
  }
  