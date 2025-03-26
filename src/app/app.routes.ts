import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { HomeComponent } from './dashboard/home/home.component';
import { authenticationGuard ,adminGuard } from './shared/authentication.guard';
import { LoginComponent } from './dashboard/login/login.component';

export const routes: Routes = [

  // Page d'accueil affichée avec l'URL 'http://localhost:4200'
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //  pathMatch: 'full' signifie que l'URL doit être vide pour appliquer cette redirection

  // Le template? AssignmentsComponent sera affiché si l'URL est 'http://localhost:4200/home'
  {path:'home', component: HomeComponent},

  // Le template? AddAssignmentComponent sera affiché si l'URL est 'http://localhost:4200/add'
  {path:'add', component: AddAssignmentComponent, canActivate: [authenticationGuard]},

  // Le template AssignmentDetailComponent sera affiché si l'URL est 'http://localhost:4200/assignment/(id d'un assignment)'
  {path: 'assignment/:id', component: AssignmentDetailComponent}, // :id -> propriété dynamique

  // Le template ? EditAssignmentComponent sera affiché si l'URL est
  {path:'assignment/:id/edit', component: EditAssignmentComponent , canActivate: [adminGuard]},

  {path:'assignments',component:AssignmentsComponent},

  { path: 'login', component: LoginComponent }
];
