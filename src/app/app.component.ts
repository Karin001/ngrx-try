import { Component } from '@angular/core';
import * as fromRoot from './reducers/index';
import {Store} from '@ngrx/store';
import * as fromlayout from './core/actions/layout';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSidenav:Observable<boolean>;
  constructor(
    public store:Store<fromRoot.State>
  ){
    this.showSidenav = this.store.select(fromRoot.showSidenav);
  }
  onToggle(){
    this.store.dispatch(new fromlayout.ToggleSidenav())
  }
}
