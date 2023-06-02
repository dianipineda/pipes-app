import { Component, OnInit } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
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

  //i18n Plural -> funciona bien con numeros
  public clientes: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Martin',
    'Valentina',
  ];

  public clientMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clientes.shift();
  }

  //key value pipe
  public person = {
    name: 'Dulce',
    age: 10,
    adress: 'Cremelado, Villanueva',
  };

  //async Pipe Obserbable
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  //async Pipe Promesa
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('log Tenemos data en la promesa');
    }, 3500);
  });
}
