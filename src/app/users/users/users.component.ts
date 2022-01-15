import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { concatMap, forkJoin, map } from 'rxjs';
import { SearchUsersResponse } from '../shared/interfaces/search-users-response.interface';
import { User, UserProfile } from '../shared/interfaces/user.interface';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'gh-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: Array<User>;
  public displayedColumns: string[] = ['avatar_url', 'identity', 'community'];
  public searchForm: FormGroup;
  public searchResultLength: number;
  expandedElement: null;

  constructor(
    private route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly usersService: UsersService,
    private _snackBar: MatSnackBar
  ) {
    this.searchForm = this.formBuilder.group({
      query: ['sample', Validators.maxLength(50)]
    });
    this.route.data.subscribe(({ users: { items, total_count } }) => {
      this.users = items;
      this.searchResultLength = total_count;
    });
  }

  ngOnInit(): void {}

  clearField(field: string): void {
    this.searchForm.get(field).reset();
  }

  filter(event): void {
    this.search();
  }

  search(page?: number, perPage?: number): void {
    this.usersService
      .searchUsers(this.searchForm.get('query').value, page, perPage)
      .pipe(
        concatMap((users: SearchUsersResponse) => {
          const arrObsProfiles = users.items.map((userData) => this.usersService.getUserProfile(userData.url));

          return forkJoin(arrObsProfiles).pipe(
            map((obs) => {
              users.items.forEach((user, index) => (user.profile = obs[index]));
              return users;
            })
          );
        })
      )
      .subscribe(
        ({ items, total_count }) => {
          this.users = items;
          this.searchResultLength = total_count;
        },
        (err) => {
          this._snackBar.open(err, 'Splash', {
            duration: 5 * 1000
          });
        }
      );
  }

  getName(userProfile: UserProfile): string {
    return userProfile.name;
  }

  handlePageEvent(event): void {
    this.search(event.pageIndex + 1, event.pageSize);
  }
}
