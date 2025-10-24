// import { fetchProjects } from './apiService'; 

import React, { useState, useEffect } => 'react';

// Use a placeholder function for the API import in this file
const fetchProjects = () => new Promise(res => res([{ id: 999, title: 'Placeholder' }])); 

function BuggyProjectList({ filterTerm }) {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true); 
            setErrorMsg(null); 

            try {
                const data = await fetchProjects();
                
                setProjects(data); 
                
            } catch (err) {
                setErrorMsg(err); 
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const filteredProjects = projects.filter(p => 
        p.title.toLowerCase().includes(filterTerm.toLowerCase())
    );

    if (isLoading) return <div>Loading projects...</div>;
    if (errorMsg) return <div style={{ color: 'red' }}>Error: {errorMsg}</div>;

    return (
        <div>
            <h2>Project Status Board</h2>
            {filteredProjects.length === 0 && !isLoading && <div>No projects found.</div>}
            <ul>
                {filteredProjects.map(project => (
                    <li key={project.id}>
                        <strong>{project.title}</strong>: 
                        Status: {project.status || project.state} 
                        (Est: {project.estimate} days)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BuggyProjectList;
