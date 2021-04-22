import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRoleEnum } from '../models/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class PredictiveMaintenanceRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const authorized: boolean = localStorage.getItem('role') === UserRoleEnum.VehicleOwner;
      if (!authorized) {
        console.warn('User is not authorized to access this predictive-maintenance!');
      }
      return authorized;
  }
}
