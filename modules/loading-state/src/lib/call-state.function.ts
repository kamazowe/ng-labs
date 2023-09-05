import { CallStateError, DefaultErrorType } from './result-state';

export const defaultErrorCallState = (): CallStateError<DefaultErrorType> => ({
  error: true,
});
