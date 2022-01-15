import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, concatMap, forkJoin, map, Observable, of } from 'rxjs';
import { SearchUsersResponse } from '../shared/interfaces/search-users-response.interface';
import { UsersService } from '../shared/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<SearchUsersResponse | { error: any }> {
  constructor(private service: UsersService, private _snackBar: MatSnackBar) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchUsersResponse | { error: any }> {
    // const formName = route.params['formName'];
    return this.service.searchUsers('sample', 1, 10).pipe(
      concatMap((users: SearchUsersResponse) => {
        const arrObsProfiles = users.items.map((userData) => this.service.getUserProfile(userData.url));

        // const saveDirectory$ = this.movieRepository.postDirector(director, movie.id);
        // const saveMovieImage$ = this.movieRepository.addMovieImage(image, director.movie_id);

        return forkJoin(arrObsProfiles).pipe(
          map((obs) => {
            users.items.forEach((user, index) => (user.profile = obs[index]));
            // you can check if the both records created based on your api response;
            return users;
          })
        );
      }),
      catchError((error) => {
        this._snackBar.open(error, 'Splash', {
          duration: 5 * 1000
        });

        return of({ error: error });
      })
    );
  }
}
