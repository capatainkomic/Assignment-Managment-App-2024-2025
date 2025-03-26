import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  // Log d'une action sur un assignment (ajout, suppression, mise à jour)
  log(assignmentName: string, action: string) {
    console.log("Assignment " + assignmentName + " has been " + action);
  }
}
