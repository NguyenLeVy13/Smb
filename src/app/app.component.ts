import { Hero2Component } from './hero2/hero2.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { Feature2Component } from './feature2/feature2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero4Component } from './hero4/hero4.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FormComponent,
    FeatureComponent,
    Feature2Component,
    Hero2Component,
    Hero3Component,
    Hero4Component,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-showcase';
}
