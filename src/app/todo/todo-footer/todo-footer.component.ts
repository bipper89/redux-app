import { Component, OnInit } from '@angular/core';
import {filtroValidos, SetFiltroAction} from '../../filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Todo} from '../models/todo.model';
import {BorrarAllTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtroValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: string;
  pendientes: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(filtro: filtroValidos) {
    this.store.dispatch(new SetFiltroAction(filtro));
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarTodo() {
    this.store.dispatch(new BorrarAllTodoAction());
  }
}
