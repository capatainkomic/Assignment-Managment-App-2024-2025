import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';

// Autorisation d'acces seulement au utilisateur connecté
export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.isLogged()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

// Autorisation d'acces  seulement au admin
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.isAdmin()) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};
