import {renderHook} from '@testing-library/react-hooks/native';
import {useAsync} from './useAsync';

describe('useAsync', () => {
  it('should return null while it just be call', () => {
    const {result} = renderHook(() => useAsync());
    expect(result.current?.data).toBe(null);
  });

  it('should return a run method to run a promise to get data', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useAsync());
    expect(typeof result.current.run).toBe('function');

    const {run} = result.current;
    run(Promise.resolve('ok'));

    await waitForNextUpdate();
    expect(result.current.data).toBe('ok');
  });
});
