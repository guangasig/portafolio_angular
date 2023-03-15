import { Component, Input } from '@angular/core';
import { ITitlePage } from './title-page.metadata';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent {
  @Input() data: ITitlePage = {
    text: '',
    type: 'primary',
  }
}
