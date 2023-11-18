import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders Docker-Based Development Workflow title', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Docker-Based Development Workflow/i);
    expect(linkElement).toBeInTheDocument();
});
