import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefit-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss'
})
export class BenefitComponent {
@Input() imgPath: string = '';
@Input() cardTitle: string = '';
@Input() cardDescription : string = '';

}
