import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-users.html',
  styleUrls: ['./api-users.css']
})
export class ApiUsersComponent implements OnInit {

  users: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error("Error:", err);
          this.loading = false;
        }
      });
  }
}