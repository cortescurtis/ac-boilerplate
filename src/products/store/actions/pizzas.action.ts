import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Feature] Load Pizzas';
export const MY_ACTION = '[Feature] My Action';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() {}
}

export class MyAction implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: any) {}
}

// action types
export type PizzasAction = MyAction | LoadPizzas;
