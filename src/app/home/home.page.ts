import { Component } from '@angular/core';
import{NavController}from '@ionic/angular';
import {Storage} from'@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
 
  constructor(
    private storage: Storage
  ) {
    this.data = {};
    //Set String Value
    this.setValue("name", "Freaky Jolly");
    //Set Integer Value
    this.setValue("phone", 8908904);
 
    let sampleObj = [
      {
        country: "United States of America",
        address: "638 Fahey Overpass",
        phone: "257.255.3201"
      }, {
        country: "United States of America",
        address: "141 Schowalter Mount",
        phone: "1-868-497-5043 x73289"
      }, {
        country: "United States of America",
        address: "025 Schultz Via",
        phone: "1-814-823-5520 x68656"
      }
    ];
 
    //Set Object Value
    this.setValue("offices", sampleObj);
  }
 
 
  // set a key/value
  setValue(key: string, value: any) {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);
 
      //get Value Saved in key
      this.getValue(key);
 
    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }
 
  // get a key/value pair
  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data[key] = "";
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }
 
  // Remove a key/value pair
  removeKey(key: string) {
    this.storage.remove(key).then(() => {
      console.log('removed ' + key);
      this.data[key] = "";
    }).catch((error) => {
      console.log('removed error for ' + key + '', error);
    });
  }
 
  //Get Current Storage Engine Used
  driverUsed() {
    console.log("Driver Used: " + this.storage.driver);
  }
 
  // Traverse key/value pairs
  traverseKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      console.log("key " + key);
      console.log("iterationNumber " + iterationNumber);
      console.log("value " + value);
    });
  }
 
  // Traverse key/value pairs
  listKeys() {
    this.storage.keys().then((k) => {
      console.table(k)
    });
  }
 
  // Total Keys Stored
  getKeyLength() {
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
    });
  }
 
 
}