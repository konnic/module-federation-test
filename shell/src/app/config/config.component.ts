import { Component, OnInit } from '@angular/core';

import { UserRoleEnum } from './../models/user-role.enum';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public authStatus: string | null;
  public userRole: string | null;
  public userRoleEnum = UserRoleEnum;

  constructor() {
    this.authStatus = localStorage.getItem('authenticated') || '';
    this.userRole = localStorage.getItem('role') || '';
  }

  ngOnInit(): void {
  }

  public setAuthenticated(authenticated: boolean): void {
    localStorage.setItem('authenticated', authenticated.toString());
    this.authStatus = localStorage.getItem('authenticated');
  }

  public setUserRole(role: UserRoleEnum): void {
    localStorage.setItem('role', role);
    this.userRole = localStorage.getItem('role');
  }

}
