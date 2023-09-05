export enum LoadingState {
  'INIT' = 'INIT',
  'LOADING' = 'LOADING',
  'LOADED' = 'LOADED',
}

export type DefaultErrorType = true;

export type CallStateError<ErrorType> = { error: ErrorType };

export type CallState<ErrorType = DefaultErrorType> =
  | LoadingState
  | CallStateError<ErrorType>;

export type ResultState<ResultType, ErrorType> =
  | InitalResultState<ResultType>
  | LoadingResultState<ResultType>
  | ErrorResultState<ErrorType, ResultType>
  | LoadedResultState<ResultType>;

interface InitalResultState<T = null> {
  callState: LoadingState.INIT;
  result: T | null;
}

interface LoadingResultState<T = null> {
  callState: LoadingState.LOADING;
  result: T | null;
}

interface ErrorResultState<ErrorType, T = null> {
  callState: CallStateError<ErrorType>;
  result: T | null;
}

interface LoadedResultState<T = null> {
  callState: LoadingState.LOADED;
  result: T;
}
