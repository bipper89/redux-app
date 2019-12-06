import {acciones, filtroValidos, SET_FILTER} from './filter.actions';

const estadoInicial: filtroValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: acciones): filtroValidos {

  switch (action.type) {
    case SET_FILTER:
      return action.filtro;

    default:
      return state;
  }
}
