import {renderHook, act} from '@testing-library/react-hooks/native';
import {useCounter} from './useCounter';

describe('useCounter', () => {
  it('should increment counter', () => {
    const {result} = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
