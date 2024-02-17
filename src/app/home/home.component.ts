import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, AboutComponent, HeaderComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
