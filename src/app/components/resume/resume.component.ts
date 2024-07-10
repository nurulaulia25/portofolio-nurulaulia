import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  accordionItems = [
    { 
      title: 'Work Experience' },
    { title: 'Education'},
    { title: 'Certification'},
    { title: 'Skills',},
    { title: 'Experience Project'}
  ];

  selectedItem: number | null = null;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Nurul Aulia - Resume');
  }

  toggleAccordion(index: number) {
    this.selectedItem = this.selectedItem === index ? null : index;
  }

  Downloadfile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
