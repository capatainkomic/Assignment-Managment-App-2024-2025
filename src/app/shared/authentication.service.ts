import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInUser : User | null = null;

  // Tableau des utilisateurs
  users : User[] = [
    {
      username:  'user1',
      password: 'user1',
      role :'user'
    },
    {
      username:  'admin1',
      password: 'admin1',
      role :'admin'
    }
  ];

  // Constructeur
  constructor(private router: Router){}

  // Se connecter
  login(username: string, password: string): boolean {
    const user = this.users.find(u =>
      u.username === username && u.password === password
    );

    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  // Se deconnecter
  logOut(){
    this.loggedInUser = null ;
    this.router.navigate(['/home']); // Redirection vers l'accueil
  }

  // Verifier si un utilisateur est connecté
  isLogged(): boolean {
    return this.loggedInUser !== null;
  }

  // Verifier si un utilisateur est un admin
  isAdmin(): boolean {
    return this.isLogged() && this.loggedInUser!.role === 'admin';
  }

  // Récuperer l'utilisateur
  getCurrentUser(): User | null {
    return this.loggedInUser;
  }



}
