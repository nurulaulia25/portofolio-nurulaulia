import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ResumeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
