import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private userSubscription: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.userSubscription = this.userService.user$.subscribe()

  }

  ngOnDestroy() {
    // Clean up the subscription if this template is destroyed
    this.userSubscription.unsubscribe();
  }

}
