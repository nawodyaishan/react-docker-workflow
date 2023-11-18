// src/App.tsx
import {useState} from 'react';
import './App.css';
import WorkflowStage from './components/WorkflowStage';
import {workflowStages} from "./data/workflow-data.ts";

function App() {
    const [currentStage, setCurrentStage] = useState(0);

    return (
        <div className="app">
            <h1>Docker-Based Development Workflow</h1>
            <div className="workflow-container">
                {workflowStages.map((stage, index) => (
                    <WorkflowStage key={index} {...stage} />
                ))}
            </div>
            <div className="navigation-buttons">
                {currentStage > 0 && (
                    <button onClick={() => setCurrentStage(currentStage - 1)}>Previous Stage</button>
                )}
                {currentStage < workflowStages.length - 1 && (
                    <button onClick={() => setCurrentStage(currentStage + 1)}>Next Stage</button>
                )}
            </div>
        </div>
    );
}

export default App;
