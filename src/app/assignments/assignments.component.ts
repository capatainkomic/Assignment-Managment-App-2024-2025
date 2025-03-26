import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedDirective } from '../shared/submitted.directive';
import { NotSubmittedDirective } from '../shared/not-submitted.directive';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthenticationService } from '../shared/authentication.service';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-assignments',
  imports: [CommonModule,
     SubmittedDirective,NotSubmittedDirective, FormsModule,
     MatInputModule, MatButtonModule, MatFormFieldModule,
     MatDatepickerModule, RouterLink, MatToolbarModule,
     MatSidenavModule, MatIconModule, MatListModule
    ],

  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  providers: [provideNativeDateAdapter()]
})


export class AssignmentsComponent implements OnInit {
  title = "This is the list of your assignments"

  assignmentSelectionne!:Assignment;
  assignmentName = "";
  assignmentDueDate!:Date;
  ajoutActive = false;
  formVisible = false;
  assignments: Assignment[] ;


  // Constructeur
  constructor(
    private assignmentService: AssignmentsService,
    private authenticationService: AuthenticationService
  ) {} // Injection du service

  // Initialisation
  ngOnInit(): void {

    // Autorisé l'accessibilité du bouton d'ajout d'assignment
    setTimeout(() => { this.ajoutActive = true; }, 2000);

    // Initialisation de la liste des assignments
    this.getAssignments();
  }


  // Récuperation de la liste des assignments depuis le service
  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments); // Abonnement à l'Observable dans le service pour récupérer les assignments
  }

  // Cliquer sur un assignment
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
    //console.log("Assignment clicked : ", assignment);
    console.log("assignmentSelectionne value : ", this.assignmentSelectionne);
  }

/*
  // Ajout d'un nouveau assignment
  onAddAssignment() {
    console.log("New assignment added : ", this.assignmentName);
    console.log("Due date : ", this.assignmentDueDate);

    this.assignments.push({
      id: this.assignId(),
      name: this.assignmentName,
      dueDate: this.assignmentDueDate,
      submitted: false
    });
  }


  // Ajouter un assignment en utilisant le service
  onNewAssignment(event:Assignment){
     this.assignmentService.addAssignment(event)
      .subscribe(message => console.log(message)); // Abonnement à l'Observable dans le service pour ajouter un assignment

    this.formVisible = false;
  }

  // Afficher le formulaire d'ajout d'assignment
  onAddAssignmentBtnClick() {
    // this.formVisible = true;

    console.log("Add assignment button clicked");
  }

  // Assigner un id à un assignment
  assignId() : number {
    return this.assignments.length + 1;
  }

  // Soumettre un assignment
  onSubmit($event: any) {
    console.log("Form submitted");
    console.log($event);
  }

  // Suppression d'un assignement de la liste
  onDeleteAssignment(id: number) {
    this.assignments = this.assignments.filter((assignment) => assignment.id !== id);
  }

*/
}
