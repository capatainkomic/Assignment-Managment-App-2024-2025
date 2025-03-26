import { Component, ElementRef, /*EventEmitter, Output,*/OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-assignment',
  imports: [FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css',
  providers: [provideNativeDateAdapter()]
})

export class AddAssignmentComponent implements OnInit {
  // @Output() newAssignment = new EventEmitter<Assignment>();
  ajoutActive = false;
  assignmentName: string = "";
  assignmentDueDate: Date;
  formIsSubmitted = false ;
  title = 'Add an assignment';

  // Constructeur
  constructor(private assignmentService:AssignmentsService){}

  // Initialisation
  ngOnInit():void {
    this.ajoutActive = true;
    this.formIsSubmitted = false;
  }

  // Ajout d'un nouveau assignment
  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.name = this.assignmentName ;
    newAssignment.dueDate = this.assignmentDueDate;
    newAssignment.submitted = false;

    //this.newAssignment.emit(newAssignment);
    this.assignmentService.addAssignment(newAssignment)
      .subscribe(message => {console.log(message) }); // On souscrit à l'Observable pour ajouter un assignment

    this.formIsSubmitted = true;

  }






}
