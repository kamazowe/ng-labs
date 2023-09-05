import { filter, OperatorFunction } from 'rxjs';
import { isDefined } from './is-defined.function';

export const filterNill = <T>(): OperatorFunction<T | undefined | null, T> => {
  return (source$) =>
    source$.pipe(filter((value): value is T => isDefined(value)));
};
