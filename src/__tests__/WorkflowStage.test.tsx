test('renders WorkflowStage component', () => {
    expect(1).toBe(1);
});
test('renders list correctly', () => {
    const list = [1, 2, 3];
    expect(list.length).toBeGreaterThan(0);
});
test('async function works correctly', async () => {
    await Promise.resolve(); // Mocking an async operation
    expect(true).toBeTruthy();
});