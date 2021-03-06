import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private data: DataService, private shareData: ShareDataService) {}
  page: any = 1;
  pageSize: any = 5;
  pages: any = 1;
  pageSizes: any = 5;

  courseWaitReview: any[] = [];
  subCourseWaitReview: any[] = [];
  CourseConfirmed: any[] = [];

  selectedValue: any;
  course: any;
  idUser: any;
  item: any = {
    maKhoaHoc: '',
    taiKhoan: '',
  };

  ngOnInit(): void {
    this.shareData.shareDataUser.subscribe(
      (result: any) => (this.courseWaitReview = result)
    );
    this.shareData.shareDataCourse.subscribe(
      (result: any) => (this.subCourseWaitReview = result)
    );
    this.shareData.shareIdCourseReview.subscribe(
      (result: any) => (this.idUser = result)
    );
    this.shareData.dataCourseConfirmed.subscribe(
      (result: any) => (this.CourseConfirmed = result)
    );
  }

  chooseCourse(event: any) {
    this.selectedValue = event;
   
  }

  registerCourse(): void {
    this.item.taiKhoan = this.idUser;
    this.item.maKhoaHoc = this.selectedValue.maKhoaHoc;
    this.data
      .postCourse(this.item,'QuanLyKhoaHoc/GhiDanhKhoaHoc')
      .subscribe((result: any) => {
        if (result) {
          window.location.reload();
        }
      });
  }

  confirmCourse(value: any): void {
    this.item.taiKhoan = this.idUser;
    this.item.maKhoaHoc = value;
    this.data
      .postCourse(this.item,'QuanLyKhoaHoc/GhiDanhKhoaHoc')
      .subscribe((result: any) => {
        if (result) {
          this.courseWaitReview = result;
          window.location.reload();
        }
      });
  }

  cancelCourse(value: any): void {
    this.item.taiKhoan = this.idUser;
    this.item.maKhoaHoc = value;
    this.data
      .postCourse(this.item,'QuanLyKhoaHoc/HuyGhiDanh')
      .subscribe((result: any) => {
        if (result) {
          this.courseWaitReview = result.value;
          alert('Hu??? th??nh c??ng');
        }
      });
  }
  closeModal() {
    window.location.reload();
  }
}
