import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    RouterLink,

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  features = [
    {
      icon: 'assignment',
      title: 'Assignment Management',
      description: 'Create and manage all your assignments in one place'
    },
    {
      icon: 'calendar_today',
      title: 'Due Dates',
      description: 'Track important deadlines'
    },
    {
      icon: 'check_circle',
      title: 'Submission',
      description: 'Mark assignments as submitted'
    }
  ];

  constructor(private assignmentService: AssignmentsService){}

  stats = {
    totalAssignments: 0,
    submitted: 0,
    pending: 0
  };

  ngOnInit(): void {
    this.loadStat();
  }

  loadStat():void {

    // Stat du total d'assignements
    this.assignmentService.getAssignmentsTotal().subscribe((total)=>{
      this.stats.totalAssignments = total;
    })

    // Stat du total d'assignement soumis
    this.assignmentService.getSubmittedAssignmentsTotal().subscribe((total)=>{
      this.stats.submitted = total;
    })

    // Stat du total d'assignements non soumis
    this.assignmentService.getPendingAssignmentsTotal().subscribe((total)=>{
      this.stats.pending = total;
    })
  }
}
