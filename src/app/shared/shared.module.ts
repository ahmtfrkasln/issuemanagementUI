import {NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {CommonModule} from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    ModalModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  exports: [
    ModalModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  entryComponents: [
    ConfirmationComponent
  ],
  declarations: [ConfirmationComponent, NotFoundComponent]
})
export class SharedModule { }
