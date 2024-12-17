import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit() {
  }

  contactForm: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(6)]]
   });
  }

  
  get name() {
    return this.contactForm.get('name');
  }

  
  public get email() {
    return this.contactForm.get('email');
  }

  
  public get message(){
    return this.contactForm.get('message');
  }
  
  onSubmit(){
    if (this.contactForm.valid){
      console.log('Form Submitted!', this.contactForm.value);
      alert("Your message has been sent successfully!");
      this.contactForm.reset();
    }else {
      alert("Please fill in all fields!");
    }
  }

}
