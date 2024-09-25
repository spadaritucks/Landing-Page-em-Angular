import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
  providers: [NewsletterService]
})
export class NewsletterFormComponent {
  newsLetterForm!: FormGroup;

  constructor( private service: NewsletterService) {
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit(){
   if(this.newsLetterForm.valid){
    this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
      next: () => {
        this.newsLetterForm.reset();
      }
    })
   }
  }
}
