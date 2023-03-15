import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle-page',
  templateUrl: './subtitle-page.component.html',
  styleUrls: ['./subtitle-page.component.css']
})
export class SubtitlePageComponent  implements OnInit {

  @Input() text = '';
  @Input() type = 'light';

  ngOnInit(){

  }

}
