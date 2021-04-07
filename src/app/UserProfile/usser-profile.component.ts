import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usser-profile',
  templateUrl: './usser-profile.component.html',
  styleUrls: ['./usser-profile.component.css'],
})
export class UsserProfileComponent implements OnInit {
  constructor() {}
  SaveProfile() {
    alert('Profile saved');
  }
  ngOnInit(): void {}
}
