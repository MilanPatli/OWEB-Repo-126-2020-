// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { NgModule } from '@angular/core';
// import { RatingModule} from 'ng-starrating';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, NgModule, RatingModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'proektnaAngular';
// }


import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule instead of RouterOutlet
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], // Import HeaderComponentModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proektnaAngular';
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
    // other components
  ],
  imports: [
    CommonModule,
    RouterModule, // Use RouterModule here
    RatingModule
    // other modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
