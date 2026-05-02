import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone:true,
  templateUrl: './student-card.html',
  styleUrls: ['./student-card.css']
})
export class StudentCard {

  name: string = "Anuja Khandale";
  course: string = "AIML Engineering";

  imageUrl = "https://randomuser.me/api/portraits/women/44.jpg";

  // Bonus: Change Image Dynamically
  changeImage() {
    this.imageUrl = "https://randomuser.me/api/portraits/women/" + Math.floor(Math.random()*90) + ".jpg";
  }
}
