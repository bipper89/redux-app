import {Todo} from './todo/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todo/todo.reducer';
import {filtroReducer} from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: string;
}


export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
