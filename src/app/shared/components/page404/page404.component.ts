import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  /**
   * Method that redirects to login page on invalid URL
   */
  redirectToLogin(){
    this.router.navigate(['login']);
  }
}
