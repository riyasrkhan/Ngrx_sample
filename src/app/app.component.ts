import { Component } from '@angular/core';
import { DisplayA_Alert, DisplayB_Alert} from './store/actions/users.action'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   constructor(private store: Store<string>) { }

  
  display_A_Alert() {
    this.store.dispatch(new DisplayA_Alert(""));
    
  }
  display_B_Alert(){
    this.store.dispatch(new DisplayB_Alert(""));
  }
}
