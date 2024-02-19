import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Services } from "../models/constants/constant.type";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  currentUrl: string;

  constructor(private router: Router) {}

 canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    this.currentUrl = state.url;
    const token = localStorage.getItem('token');
    if (!token && this.currentUrl !== '/login') {
      this.router.navigate(['login']);
      return false;
    }
    else if (token && this.currentUrl === '/login' || this.currentUrl === '/') {
      this.router.navigate(['coupon']);
      return false;
    }
    const storedService = localStorage.getItem('service');
if (token && (storedService === Services.PND || storedService === Services.Cab) && (this.currentUrl === '/all-subscriptions' || this.currentUrl === '/configure-subscription')) {
    this.router.navigate(['coupon']);
    return false;
}

     return true;
  }
}
