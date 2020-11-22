
export interface UseCase<S> {
  execute(params: S): void;
}
