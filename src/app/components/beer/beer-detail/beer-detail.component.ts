import { Component, OnInit } from '@angular/core';
import { AddBeerModalComponent } from 'src/app/modals/add-beer-modal/add-beer-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  modalRef: MdbModalRef<AddBeerModalComponent> | null = null;
  beerList = [];

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {}

  openModal() {
    this.modalRef = this.modalService.open(AddBeerModalComponent);
    this.modalRef.onClose.subscribe((data: any) => {
      if (data) {
        this.beerList.push(data);
      }
    });
  }
}
