import {Action} from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filtro';

export class SetFiltroAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filtro: filtroValidos) {}
}

export type acciones = SetFiltroAction;

export type filtroValidos = 'todos' | 'completados' | 'pendientes';

