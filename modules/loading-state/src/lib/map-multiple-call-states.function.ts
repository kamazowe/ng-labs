import { CallState, LoadingState } from './result-state';
import { isErrorCallState } from './is-error-callState.function';
import { defaultErrorCallState } from './call-state.function';

const areNotErrorCallStates = (
  callstates: CallState[]
): callstates is LoadingState[] => {
  return callstates.every((callState) => !isErrorCallState(callState));
};

const someLoadingCallStates = (
  callstates: LoadingState[]
): callstates is LoadingState[] => {
  return callstates.some((callState) => callState === LoadingState.LOADING);
};

const someInitCallStates = (
  callstates: LoadingState[]
): callstates is LoadingState[] => {
  return callstates.some((callState) => callState === LoadingState.INIT);
};

// default strategy
export const mapMultipleCallStates = (callstates: CallState[]): CallState => {
  if (areNotErrorCallStates(callstates)) {
    if (someLoadingCallStates(callstates)) {
      return LoadingState.LOADING;
    } else if (someInitCallStates(callstates)) {
      return LoadingState.INIT;
    } else {
      return LoadingState.LOADED;
    }
  } else {
    return defaultErrorCallState();
  }
};
