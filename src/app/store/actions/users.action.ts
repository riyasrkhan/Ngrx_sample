import { Action } from '@ngrx/store';

export enum UserActionTypes  {
  //add
  A_ALERT = '[ALERT] A_ALERT',
  //delete
  B_ALERT = '[ALERT] B_ALERT',
}
export class DisplayA_Alert implements Action {
  readonly type = UserActionTypes.A_ALERT;
  constructor(public payload : string) {}

}
export class DisplayB_Alert implements Action {
  readonly type = UserActionTypes.B_ALERT;
  constructor(public payload : string) {}

}

export type UserActions = DisplayA_Alert | DisplayB_Alert;
