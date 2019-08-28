import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent} from './_layout';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap';
import {ProjectService} from './services/shared/project.service';
import {IssueService} from './services/shared/issue.service';
import {IssueHistoryService} from './services/shared/issue.history.service';
import {UserService} from './services/shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ApiService, ProjectService, IssueService, IssueHistoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
