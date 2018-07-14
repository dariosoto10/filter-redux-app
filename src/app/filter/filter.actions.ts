import { Action } from "@ngrx/store";

export const SET_FILTRO = '[Filter] Set filter';

export type validFilters = 'all' | 'completed' | 'slopes'

export class SetFilterAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filter: validFilters) { }
}

export type actions = SetFilterAction;
