import {CanActivateFn, Router} from '@angular/router';
import {SecurityService} from './security.service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    const securityService=inject(SecurityService);
    const router=inject(Router);
    if (securityService.isLoggedIn()) return true;
    else router.navigateByUrl("/login");
    return false;
};
