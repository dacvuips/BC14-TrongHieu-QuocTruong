import { ShareDataService } from 'src/app/_core/services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  dataCourse: any = [];
  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.shareData.shareCourse.subscribe((result: any) => {
      this.dataCourse = result;
    });
  }
}
