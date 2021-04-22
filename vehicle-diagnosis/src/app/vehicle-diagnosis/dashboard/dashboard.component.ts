import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public showComponentDetails = false;
  public vehicleId: string | null = null;
  public componentId: string = '0';

  constructor(private router: Router) {
    this.router.events.subscribe(e =>  {
      console.log({e});
      if (e instanceof NavigationEnd) {
        this.showComponentDetails = e.url.includes('component-details');
      }
      if (e instanceof ActivationEnd && !!e.snapshot.params.vehicleId) {
        this.vehicleId = e.snapshot.params.vehicleId;
      }
      if (this.vehicleId === 'vid') {
          // If vehicleId === vid determine vehicleId based on logged-in user
          this.vehicleId = '0';
          this.router.navigate([`/vehicle-diagnosis/dashboard/${ this.vehicleId }`], {replaceUrl: true})
      }
    });
  }

  ngOnInit(): void {
  }

}
