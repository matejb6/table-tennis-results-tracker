import { Component, OnInit } from '@angular/core';

import { appRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit {
  public routes: string[] = [];

  ngOnInit() {
    this.routes = this.getRoutesFromObject(appRoutes);
  }

  private getRoutesFromObject(obj: any): string[] {
    return Object.values(obj);
  }

  public getRouteName(route: string): string {
    return route.charAt(0).toUpperCase() + route.slice(1);
  }
}
