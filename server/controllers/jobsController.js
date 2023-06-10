const createJob = async (req, res) => {
	res.send('create job');
}

const getAllJobs = async (req, res) => {
	res.send('Get all jobs');
}

const deleteJob = async (req, res) => {
	res.send('Delete job');
}

const updateJob = async (req, res) => {
	res.send('Update job');
}

const showStats = async (req, res) => {
	res.send('Showing stats');
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }