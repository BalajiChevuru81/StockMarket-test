import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstockexchange',
  templateUrl: './addstockexchange.component.html',
  styleUrls: ['./addstockexchange.component.css']
})
export class AddstockexchangeComponent implements OnInit {


  manageservice: ManageService = new ManageService();


  submitted: boolean;
  Id3: any;
  StockExchange: any;
  Breaf: any;
  Address: any;
  Remarks: any;

  constructor(private Manageservice: ManageService) { }

  ngOnInit() {

  };


companysaveform = new FormGroup({

  id3: new FormControl('', [Validators.required]),

  stockExchange:new FormControl('',[Validators.required]),

  breaf: new FormControl('', [Validators.required]),

  address: new FormControl('', [Validators.required]),

  remarks: new FormControl('', [Validators.required]),

 });

 saveStockExchangeDataField(saveStockExchangeDataField) {



  this.manageservice = new ManageService();

  this.manageservice.id3 = this.Id3.value;

  this.manageservice.stockExchange = this.StockExchange.value

  this.manageservice.breaf = this.Breaf.value;

  this.manageservice.address = this.Address.value;

  this.manageservice.remarks = this.Remarks.value;

  this.submitted = true;

  this.save();

 }

 save() {

  this.manageservice.saveStockExchangeDataField(this.manageservice)

   .subscribe(data => console.log(data), error => console.log(error));

  this.manageservice = new ManageService();

 }

 get id3() {

  return this.companysaveform.get('id3');

 }

 get stockExchange() {

  return this.companysaveform.get('turnover');

 }

 get Ceo() {

  return this.companysaveform.get('ceoname');

 }

 get BoardOfDirectors() {

  return this.companysaveform.get('bod');

 }

 get ListInStockExchange() {

  return this.companysaveform.get('listedinse');

 }

 get Sector() {

  return this.companysaveform.get('sector');

 }



 saveCompanyForm() {

  this.submitted = false;

  this.companysaveform.reset();

 }



}
