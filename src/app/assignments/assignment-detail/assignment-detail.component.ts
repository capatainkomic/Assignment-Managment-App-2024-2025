import { Component ,Input, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Assignment} from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule, MatCardModule, MatCheckboxModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  // @Input() assignmentTransit: Assignment | null;
  title = 'Assignment Detail';

  @Output() deleteAssignmentEvent = new EventEmitter<number>();
  assignmentTransit: Assignment | undefined;


  // Constructeur
  constructor(private authService: AuthenticationService,private assignmentService: AssignmentsService,private route: ActivatedRoute,private router: Router) {}

  // Initialisation
  ngOnInit(): void {
    this.getAssignment();
  }


  // Récupérer un assignment a partir de l'URL
  getAssignment() {

    const id = +this.route.snapshot.params['id']; // Récupère l'id de l'assignment dans l'URL

    this.assignmentService.getAssignment(id) // Utilisation du service pour récupérer un assignment
      .subscribe(assignment => this.assignmentTransit = assignment); // Abonnement à l'Observable dans le service pour récupérer un assignment

  }

  // Assignement non rendu => Assignment rendu
  onCheckSubmitBtn() {
    // Utilisation du service pour mettre à jour l'etat du rendu de l'assignement
    if (this.assignmentTransit != null) {
      this.assignmentTransit.submitted = true;
      this.assignmentService.updateAssignment(this.assignmentTransit)
        .subscribe((message)=> console.log(message)); // Abonnement à l'Observable dans le service pour mettre à jour un assignment
    }

    this.router.navigate(["/assignments"]);
  }

  // Suppression de l'assignement
  onDeleteAssignment() {
    if (this.assignmentTransit == null) {
      return;
    }

    // Utilisation du service pour supprimer un assignment
    this.assignmentService.deleteAssignment(this.assignmentTransit)
      .subscribe((message) => console.log(message)); // Abonnement à l'Observable dans le service pour supprimer un assignment

    //this.assignmentTransit = undefined; // Réinitialise assignmentTransit
    this.router.navigate(["/assignments"]);

  }

  // Navigation vers la page d'edition
  onClickEdit() {
    this.router.navigate(["/assignment", this.assignmentTransit?.id, 'edit'],
      {queryParams: {nom: this.assignmentTransit?.name}, fragment:'edition'}) ;
  }

  // Verifier si un utilisateur est un admin
  isAdmin(): Boolean{
    return this.authService.isAdmin();
  }

}
