const mockProjectsData = [
    { id: 101, title: "Project Alpha", state: "Active", estimate: 5 },
    { id: 102, title: "Project Beta", state: "Pending", estimate: 10 },
    { id: 103, title: "Project Gamma", status: "Complete", estimate: 8 }
];

/**
 * Fetches a list of mock projects.
 * @returns {Promise<Array>} A promise that resolves with project data or rejects with an error.
 */
export const fetchProjects = () => {
    return new Promise((resolve, reject) => {
        // Simulate network latency
        setTimeout(() => {
            const shouldError = Math.random() < 0.1; // 10% chance of failure

            if (shouldError) {
                reject("Network connection failed."); 
            } else {
                resolve(mockProjectsData);
            }
        }, 800);
    });
};
