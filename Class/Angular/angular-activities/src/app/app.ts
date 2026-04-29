import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-activities');
  
  text: string = "";

}

//Activity 3
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [
//     FormsModule
//   ]
// })
// export class AppModule {}


//activity 4
// import { HttpClient } from '@angular/common/http';

// export class AppComponent {
//   users: any[] = [];
//   loading = true;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.http.get("https://jsonplaceholder.typicode.com/users")
//       .subscribe((data: any) => {
//         this.users = data;
//         this.loading = false;
//       });
//   }
// }


