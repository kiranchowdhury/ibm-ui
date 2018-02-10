import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../core/models/app-state';
import { Store } from '@ngrx/store';
import { AuthState, Group, ActionAuthLogin, ActionAuthAuthorize, AuthorizedRequest } from '../core/auth/auth.reducer';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { Subject } from 'rxjs/Subject';
import { ApiInfo } from '@app/core/models/api-info';
import { MessageResoureService } from '../common/message-resoure.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'anms-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  authState$: Observable<AuthState>;
  landingicon = require('../../assets/landing_icon_computer.png');

  payload: AuthorizedRequest;
  /* Template variables */
    alias: string;
    groups: Group[];
    loading: boolean;
    displayWelcome: boolean;
    errorMsg: string;
    selectedGroup: string;
  constructor(private router: Router,
              private store: Store<AppState>,
              private msgResource: MessageResoureService) {}

  onStart(values) {
    // route to dashboard
   // this.displayWelcome$ = false;
    console.log(values);
    this.payload = {apiid: 'getAuthGroup', methodname: 'getSelectedIBMGroupInfo', selectedgroup: values.selectedGroup};
    this.store.dispatch(new ActionAuthAuthorize(this.payload));
    this.router.navigate(['/dashboard']);
  }



  ngOnInit() {
    this.store.select(state => state.auth).subscribe(authState => {
      this.alias = authState.alias;
      this.groups = authState.groups;
      this.loading = authState.loading;
      this.displayWelcome = authState.displayWelcome;
      this.selectedGroup = authState.selectedGroupCode;
      if (authState.errorMessage && authState.errorMessage.length > 0) {
        this.errorMsg = this.msgResource.getMessage(authState.errorMessage);
      }
    });
  }

}