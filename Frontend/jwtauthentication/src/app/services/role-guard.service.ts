import { Injectable } from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LowerCasePipe } from '@angular/common';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');

    const helper = new JwtHelperService();

    const tokenPayload = helper.decodeToken(token);
    // decode the token to get its payload

    console.log(tokenPayload)
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.sub.toLowerCase() !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}