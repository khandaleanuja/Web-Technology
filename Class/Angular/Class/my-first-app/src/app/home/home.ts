import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  fname: string = 'Anuja';
  myRoll: number = 123;
  imageurl: string = 'https://via.placeholder.com/150';

  showButton() {
    this.fname = 'ATK';
    alert("Name error");
  }
}