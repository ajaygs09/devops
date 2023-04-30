import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() sendData = new EventEmitter();
  constructor(public fb: FormBuilder) {}
  contactForm!: FormGroup;
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      gender: [''],
      dob: [''],
      address: this.fb.group({
        hNO: [''],
        street: [''],
        district: [],
      }),
    });
  }
  submit() {
    const contactDetails = this.contactForm.getRawValue();
    this.sendData.emit(contactDetails);
  }
}
