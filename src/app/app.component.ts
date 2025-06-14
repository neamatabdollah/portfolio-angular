import { Component } from '@angular/core';
import { AppHeroComponent } from "./app-hero/app-hero.component";
import { AppAboutmeComponent } from "./app-aboutme/app-aboutme.component";
import { AppSkillsComponent } from "./app-skills/app-skills.component";
import { AppCardsComponent } from './app-cards/app-cards.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
@Component({
  selector: 'app-root',
  imports: [AppHeroComponent, AppAboutmeComponent, AppSkillsComponent, AppCardsComponent, AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-angular';
}
