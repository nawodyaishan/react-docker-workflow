import {IWorkflow} from "../types/i-workflow.ts";

function WorkflowStage({title, description}: IWorkflow) {
    return (
        <div className="workflow-stage">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default WorkflowStage;
