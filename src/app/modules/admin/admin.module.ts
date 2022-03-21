import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LegajosComponent } from './dashboards/legajos/legajos.component';
import { ProjectComponent } from './dashboards/project/project.component';

@NgModule({
  declarations: [
    LegajosComponent,
    //ProjectComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdministracionModule { }
