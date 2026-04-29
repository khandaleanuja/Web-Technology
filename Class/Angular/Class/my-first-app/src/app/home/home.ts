import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  name: string = "Anuja";
  roll: number = 123;

  students = [
    {name : "Anuja", roll : 1},
    {name : "Sakshi", roll : 2},
    {name : "Rasika", roll : 3},
    {name : "Isha", roll : 4},
  ]

  showDetails() {
    this.name = "Anuja";
    alert("Button clicked!!");
  }


}


// Activity for directives     hide, show and toggle