interface StateModel<T> {
  loading: boolean;
  data?: T | null;
  error?: string | null;
}

export type { StateModel };
