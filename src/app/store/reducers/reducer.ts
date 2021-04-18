import {UserActions, UserActionTypes} from '../actions/users.action'


// The only reducer we are using for this example
export function UserReducer(state:any,action :UserActions){
    switch(action.type) {
      case UserActionTypes.A_ALERT :
        alert("A alert")
        break
      case UserActionTypes.B_ALERT:
        alert("B Alert")
        break
        
    }
};

