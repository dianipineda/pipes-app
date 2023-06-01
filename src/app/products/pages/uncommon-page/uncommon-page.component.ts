import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'charlie';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Dulce';
    this.gender = 'female';
  }

  //i18n Plural
  public clientes: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Martin',
    'Valentina',
  ];
}
