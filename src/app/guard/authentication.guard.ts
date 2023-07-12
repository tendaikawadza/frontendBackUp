import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSerializer, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  {

  constructor(
    private router: Router,
    private userSvc: UserService
) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.userSvc.isAuthenticated();
      console.log(currentUser);
      if (currentUser) {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
}
 

 // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
  }
