import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProjectService} from '../../services/shared/project.service';
import {Page} from '../../common/Page';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationComponent} from '../../shared/confirmation/confirmation.component';
import {UserService} from '../../services/shared/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  modalRef: BsModalRef;
  projectForm: FormGroup;
  @ViewChild('tplProjectDeleteCell', {static: true}) tplProjectDeleteCell: TemplateRef<any>;
  page = new Page();
  cols = [];
  rows = [];
  managerOpts = [];

  constructor(private projectService: ProjectService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.cols = [
      {prop: 'id', name: 'No'},
      {prop: 'projectName', name: 'Project Name', sortable: false},
      {prop: 'projectCode', name: 'Project Code', sortable: false},
      {prop: 'manager.nameSurname', name: 'Manager', sortable: false},
      {prop: 'id', name: 'Actions', cellTemplate: this.tplProjectDeleteCell, flexGrow: 1, sortable: false}
    ];

    this.setPage({offset: 0});

    this.projectForm = this.formBuilder.group({
      projectCode: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      projectName: [null, [Validators.required, Validators.minLength(4)]],
      managerId: [null, [Validators.required]]
    });

    this.userService.getAll().subscribe(res => this.managerOpts = res);
  }


  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.projectService.getAll(this.page).subscribe(pagedData => {
      this.page.size = pagedData.size;
      this.page.page = pagedData.page;
      this.page.totalElements = pagedData.totalElements;
      this.rows = pagedData.content;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get f() {
    return this.projectForm.controls;
  }

  saveProject() {
    if (!this.projectForm.valid) {
      return;
    }

    this.projectService.createProject(this.projectForm.value).subscribe(
      response => {
        console.log(response);
      }
    );
    this.setPage({offset: 0});
    this.closeAndResetModal();
  }

  closeAndResetModal() {
    this.projectForm.reset();
    this.modalRef.hide();
  }

  showProjectDeleteConfirmation(value): void {
    const modal = this.modalService.show(ConfirmationComponent);
    (modal.content as ConfirmationComponent).showConfirmation(
      'Delete Confirmation',
      'Are you sure for delete Project'
    );

    (modal.content as ConfirmationComponent).onClose.subscribe(res => {
        console.log('Confirm: ' + res);
        if (res === true) {
          this.projectService.delete(value).subscribe(response => {
            console.log('Deleted: ' + response);
            if (response) {
              this.setPage({offset: 0});
            }
          });
        } else {
          console.log('No');
        }
      }
    );
  }

}
