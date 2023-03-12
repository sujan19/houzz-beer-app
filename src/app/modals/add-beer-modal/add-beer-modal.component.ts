import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-beer-modal',
  templateUrl: './add-beer-modal.component.html',
  styleUrls: ['./add-beer-modal.component.scss'],
})
export class AddBeerModalComponent {
  beerDetailForm = new FormGroup({
    name: new FormControl('', Validators.required),
    tagline: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  submitted = false;

  constructor(public modalRef: MdbModalRef<AddBeerModalComponent>) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    if (this.beerDetailForm.valid) {
      this.modalRef.close(this.beerDetailForm.value);
      this.beerDetailForm.reset();
    }
  }

  get beerFormControl() {
    return this.beerDetailForm.controls;
  }

  close() {
    this.modalRef.close();
  }
}
