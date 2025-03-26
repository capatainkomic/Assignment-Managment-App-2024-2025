import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
 selector: 'app-edit-assignment',
 standalone: true,
 providers: [provideNativeDateAdapter()],
 imports: [
   FormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatButtonModule,
 ],
 templateUrl: './edit-assignment.component.html',
 styleUrl: './edit-assignment.component.css',
})

export class EditAssignmentComponent implements OnInit{
  title = 'Assignment Edition';
  assignment: Assignment | undefined;
  // Pour les champs de formulaire
  nomAssignment = '';
  dateDeRendu?: Date = undefined;


  // Constructeur
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  // Initialisation
  ngOnInit(): void {
    this.getAssignment();

    // Affichage des queryParams et fragment
    /*
    console.log("Query Params : ");
    console.log(this.route.snapshot.queryParams) ;
    console.log("Fragment : ") ;
    console.log(this.route.snapshot.fragment) ;
    */

    // Affichage des queryParams et fragment (v2) : si les paramètres et fragment change dynamiquement
    this.route.queryParams.subscribe((params)=> {
      console.log("Query Params : ") ;
      console.log(params);
    }) ;

    this.route.fragment.subscribe((fragment)=>{
      console.log("Fragment : ");
      console.log(fragment);
    })
  }

  // Récupérer un assignment a partir de l'URL
  getAssignment() {
    const id = +this.route.snapshot.params['id']; // Récupère l'id de l'assignment dans l'URL

    this.assignmentsService.getAssignment(id) // Utilisation du service pour récupérer un assignment
      .subscribe(assignment => this.assignment = assignment); // Abonnement à l'Observable dans le service pour récupérer un assignment

  }

  // Mise a jour de l'assignement
  onSaveAssignment() {
    if (!this.assignment) return;
    if (this.nomAssignment == '' || this.dateDeRendu === undefined) return;

    const updatedAssignment = new Assignment();

    // On récupère les valeurs qui ne peuvent pas etre changé par le formulaire
    updatedAssignment.id = this.assignment.id;
    updatedAssignment.submitted = this.assignment.submitted;

    // On récupère les valeurs dans le formulaire
    updatedAssignment.name = this.nomAssignment;
    updatedAssignment.dueDate = this.dateDeRendu;

    // Utilisation du service pour la mise a jour de l'assignement
    this.assignmentsService
      .updateAssignment(updatedAssignment)
      .subscribe((message) => {
        console.log(message);

        // navigation vers la home page
        this.router.navigate(['/assignments']);
      });
  }
 }
