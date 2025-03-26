import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';



@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  // Tableau des assignements
  assignments: Assignment[] = [
    {
      id: 1,
      name: "Assignment 1",
      dueDate: new Date("2021-01-01"),
      submitted: true
    },
    {
      id: 2,
      name: "Assignment 2",
      dueDate: new Date("2021-02-01"),
      submitted: true
    },
    {
      id:3,
      name: "Assignment 3",
      dueDate: new Date("2021-03-01"),
      submitted: false
    }
  ];

  // Constructeur
  constructor(private loggingService:LoggingService) { }

  // Récuperer la liste des assignments sous forme d'Observable
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments); // Transforme le tableau en Observable
  }

  // Récuperer le total des assignments
  getAssignmentsTotal():Observable<number> {
    return of(this.assignments.length);
  }

  // Recuperer le total des assignements soumis
  getSubmittedAssignmentsTotal(): Observable<number>{
    return of(this.assignments.filter(a => a.submitted).length);
  }

  // Récuperer le total des assignements non soumis
  getPendingAssignmentsTotal(): Observable<number> {
    return of(this.assignments.filter(a => !a.submitted).length);
  }

  // Récuperer un assignment par son id
  getAssignment(id: number): Observable<Assignment | undefined> {
    const assignment = this.assignments.find(a => a.id === id); // Récupère l'assignment avec l'id correspondant

    return of(assignment); // Transforme l'assignment en Observable
  }

  // Ajouter un assignment
  addAssignment(assignment: Assignment) : Observable<string> {
    // Génerer un id pour l'assignment
    assignment.id = this.assignments.length + 1;

    // Ajouter l'assignment au tableau
    this.assignments.push(assignment);
    this.loggingService.log(assignment.name, "added");

    return of("Assignment Service : assignment added successfully"); // Transforme la chaine de caractères en Observable
  }

  // Mettre à jour un assignment
  updateAssignment(assignment: Assignment) : Observable<string> {
    // Récupération de l'index de l'assignement à modifier
    const index = this.assignments.findIndex((a)=> a.id === assignment.id);

    console.log("index :", index);

    if(index != -1){
    // Mise a jour de l'assignment
    this.assignments[index] = assignment;
    this.loggingService.log(assignment.name, "updated");

    return of("Assignment Service : assignment updated successfully"); // Transforme la chaine de caractères en Observable
    }else{
      return of("Assignment Service couldn't update the assignment"); // Transforme la chaine de caractères en Observable
    }
  }

  // Supprimer un assignment
  deleteAssignment(assignment:Assignment) : Observable<string> {
    const index = this.assignments.indexOf(assignment); // Récupère l'index de l'assignment à supprimer
    this.assignments.splice(index, 1);  // Supprime l'assignment du tableau avec slice : méthode pour supprimer un élément d'un tableau
    this.loggingService.log(assignment.name, "deleted");

    return of("Assignment Service : assignment deleted successfully"); // Transforme la chaine de caractères en Observable
  }
}
