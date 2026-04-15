import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  name: string = "Anuja";
  roll: number = 123;

  showDetails() {
    alert("Student: " + this.name);
  }
}