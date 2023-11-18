import {render, screen} from '@testing-library/react';
import WorkflowStage from '../components/WorkflowStage';
import '@testing-library/jest-dom';

test('renders WorkflowStage component', () => {
    render(<WorkflowStage title="Test Title" description="Test Description"/>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
});