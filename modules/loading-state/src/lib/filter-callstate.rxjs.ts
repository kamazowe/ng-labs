import { filter, OperatorFunction } from 'rxjs';
import { CallState } from './result-state';
import { includesCallStates } from './is-callState.function';

export const filterCallState = <
  SourceCallState extends CallState,
  SearchedCallState extends SourceCallState
>(
  searchedCallStates: SearchedCallState[]
): OperatorFunction<SourceCallState, SearchedCallState> => {
  return (source$) =>
    source$.pipe(
      filter((value): value is SearchedCallState => {
        return includesCallStates(value, searchedCallStates);
      })
    );
};
