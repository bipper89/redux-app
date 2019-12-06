import {Acciones, AGREGAR_TODO, DELETE_ALL_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, TOGGLEALL_TODO} from './todo.actions';
import {Todo} from './models/todo.model';

const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Pedir prestado el traje de Iron Man')
];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {

  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.payload);
      return [...state, todo];

    case TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case TOGGLEALL_TODO:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      })

    case EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });
    case DELETE_TODO:
      return state.filter(todoDelete => todoDelete.id !== action.id);

    case DELETE_ALL_TODO:
      return state.filter((todoDelte => !todoDelte.completado));

    default:
      return state;
  }

}
