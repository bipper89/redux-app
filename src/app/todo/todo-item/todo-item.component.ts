import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {BorrarTodoAction, EditarTodoAction, ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtTodo', {static: false}) txtTodo: ElementRef
  checkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);

    this.checkField.valueChanges.subscribe(
      () => this.store.dispatch(new ToggleTodoAction(this.todo.id))
    );
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtTodo.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
  }

  borrarTodo() {
    this.store.dispatch(new BorrarTodoAction(this.todo.id));
  }

}
