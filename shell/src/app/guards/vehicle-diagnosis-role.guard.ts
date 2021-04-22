import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRoleEnum } from '../models/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class VehicleDiagnosisRoleGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let authorized = true;
      if (state.url.includes('component-details')) {
        authorized = [UserRoleEnum.Garage, UserRoleEnum.FleetManager].includes(localStorage.getItem('role') as UserRoleEnum);;
        if (!authorized) {
          console.warn('User is not authorized to access this component-details!');
        }
      }
      return authorized;
  }
}
