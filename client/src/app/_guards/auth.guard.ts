import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../_services/account.service";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  canActivate(): Observable<boolean> {
    // @ts-ignore
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        return this.toastr.error('You shall not pass!');
      })
    )
  }
}
