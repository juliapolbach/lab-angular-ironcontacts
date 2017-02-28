import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name, email, phoneNumber, image){
    console.log("Add contact has been called");
    this.contacts.push({name: name, email : email, phoneNumber : phoneNumber, image : image });
  }
}
