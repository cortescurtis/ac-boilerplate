import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
    loaded: boolean,
    loading: boolean,
    pizzas: Pizza[]
}

const initialState: PizzaState = {
    loaded: false,
    loading: false,
    pizzas: []
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            const pizzas = [...state.pizzas];
            const loaded = false;
            const loading = false;

            console.log('LoadPizzas', state);

            return {
                pizzas,
                loaded,
                loading
            }
        }
    }
    return state;
}
