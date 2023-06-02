import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Wonderwoman',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Batman',
      canFly: true,
      color: Color.black,
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
