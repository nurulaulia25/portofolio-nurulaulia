import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PortofolioWebComponent } from "./portofolio-web/portofolio-web.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    PortofolioWebComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { 
  title = 'Nurul Aulia';
}