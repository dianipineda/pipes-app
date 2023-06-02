import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower: string = 'pepe';
  public nameUpper: string = 'PEPE';
  public fullName: string = 'PepE PInedA';

  public customDate: Date = new Date();
}
