import { isDefined } from './utils/is-defined.function';
import {
  CallStateError,
  ResultState,
  LoadingState,
  CallState,
} from './result-state';

export const initialResultState = <ResultType, ErrorType>(): ResultState<
  ResultType,
  ErrorType
> => {
  return {
    result: null,
    callState: LoadingState.INIT,
  };
};

export const loadingResultState = <ResultType, ErrorType>(
  prevResultState: ResultState<ResultType, ErrorType> | null = null
): ResultState<ResultType, ErrorType> => {
  return {
    result: isDefined(prevResultState) ? prevResultState.result : null,
    callState: LoadingState.LOADING,
  };
};

export const loadedResultState = <ResultType, ErrorType>(
  nextResult: ResultType
): ResultState<ResultType, ErrorType> => {
  return {
    result: nextResult,
    callState: LoadingState.LOADED,
  };
};

export const errorResultState = <ResultType, ErrorType>(
  prevResultState: ResultState<ResultType, ErrorType>,
  errorState: CallStateError<ErrorType>,
  nextResult?: ResultType | null
): ResultState<ResultType, ErrorType> => {
  return {
    result: nextResult ?? prevResultState.result,
    callState: errorState,
  };
};

export const defaultErrorResultState = <ResultType>(
  prevResultState: ResultState<ResultType, true>,
  nextResult?: ResultType | null
): ResultState<ResultType, true> => {
  return errorResultState(prevResultState, { error: true }, nextResult);
};

export const isCallStateError = <T>(
  callState: CallState<T>
): callState is CallStateError<T> => {
  return !!(callState as CallStateError<unknown>)?.error;
};
