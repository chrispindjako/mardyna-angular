import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { DocumentationComponent } from './page/documentation/documentation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'entities', component: EntitiesComponent },
    { path: 'documentation', component: DocumentationComponent }
  ];