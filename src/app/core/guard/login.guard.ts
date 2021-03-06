import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { selectorAuth, AuthState } from '../auth/auth.reducer';


@Injectable()
export class LoginGuard implements CanActivate {
  isLoggedIn: boolean;
  constructor(private store: Store<AppState>,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.select(selectorAuth).subscribe
    ((authState: AuthState) => {
      this.isLoggedIn = authState.isAuthenticated;
      if (!this.isLoggedIn) {
        this.router.navigate(['/login']);
      }
    })
    return this.isLoggedIn;
  }
}
