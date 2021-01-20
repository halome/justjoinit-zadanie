export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
}

export enum ResponseType {
  OK,
  ERROR,
  UNKNOWN,
}

export interface RequestResponse<T> {
  type: ResponseType;
  data: T;
}
