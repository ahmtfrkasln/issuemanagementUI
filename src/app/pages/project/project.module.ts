import {NgModule} from '@angular/core';

import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
