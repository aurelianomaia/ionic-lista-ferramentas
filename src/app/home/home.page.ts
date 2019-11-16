import { Component } from '@angular/core';
import{NavController}from '@ionic/angular';
import {Storage} from'@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputtext: string;
  key: string = 'username';

  constructor(public navCtrl: NavController, private storage: Storage) {
 // set a key/value
 storage.set('name', 'Max');

 // Or to get a key/value pair
 storage.get('age').then((val) => {
   console.log('Your age is', val);
 });
  }
  saveData(){
    this.storage.set(this.key,this.inputtext)
  }

  loadData(){
    this.storage.get(this.key).then((val) =>{
      console.log('your age is' ,val);
    });
  }
}
