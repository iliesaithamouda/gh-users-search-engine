import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginatorDefaultOptions,
  MatPaginatorModule,
  MAT_PAGINATOR_DEFAULT_OPTIONS
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersComponent } from './users/users.component';

let matForm: MatPaginatorDefaultOptions;
matForm = { ...MAT_PAGINATOR_DEFAULT_OPTIONS, formFieldAppearance: 'outline' };

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatRippleModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        resolve: { users: UsersResolver }
      }
    ])
  ],
  providers: [{ provide: MAT_PAGINATOR_DEFAULT_OPTIONS, useValue: matForm }]
})
export class UsersModule {}
