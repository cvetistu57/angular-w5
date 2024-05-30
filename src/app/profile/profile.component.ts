import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: User = {
    id: '1',
    username: 'AnimeFan',
    email: 'animefan@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(): void {
    console.log('Profile updated', this.user);
  }
}
