import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { DELETE_ALL_TODO_COMPLETED, DeleteAllTodoCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  slope: number;

  validFilters: fromFilterActions.validFilters[] = ['all', 'completed', 'slopes'];
  filterUpdate: fromFilterActions.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.countSlope( state.todos );
      this.filterUpdate = state.filter;
    })
  }

  changeFilter( newFilter: fromFilterActions.validFilters ) {
    const action = new fromFilterActions.SetFilterAction( newFilter );
    this.store.dispatch( action );
  }

  countSlope( todos: Todo[] ) {
    this.slope = todos.filter(todo => !todo.completed).length;
  }

  clearCompleted() {
    const action = new DeleteAllTodoCompleted();
    this.store.dispatch( action );
  }

}
