import { CallState } from './result-state';
import { isErrorCallState } from './is-error-callState.function';
import { ArrayElement } from './utils/array-element.type';

export const equalCallStateType = <T extends CallState<unknown>>(
  source: CallState<unknown>,
  searchedCallState: T
): source is T => {
  return (
    source === searchedCallState ||
    (isErrorCallState(source) && isErrorCallState(searchedCallState))
  );
};

export const includesCallStates = <T extends CallState[]>(
  source: CallState,
  searchedCallStates: T
): source is ArrayElement<T> => {
  return searchedCallStates.some((findCallState) =>
    equalCallStateType(source, findCallState)
  );
};
