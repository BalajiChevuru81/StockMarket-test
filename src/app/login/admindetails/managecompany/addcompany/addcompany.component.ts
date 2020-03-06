import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


//import { ManagecompanyComponent } from '../managecompany.component';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})


export class AddcompanyComponent implements OnInit {
  
  
  company: Company = new  Company();


  submitted: boolean;

  constructor(private companyservice: CompanyService) { }

  ngOnInit() {

  };


companysaveform = new FormGroup({

  companyName: new FormControl('', [Validators.required]),

  ceoname: new FormControl('', [Validators.required]),

  turnover:new FormControl('',[Validators.required]),

  bod: new FormControl('', [Validators.required]),

  listedinse: new FormControl('', [Validators.required]),

  sector: new FormControl('', [Validators.required]),

  remarks: new FormControl('', [Validators.required]),

  stockcode: new FormControl('', [Validators.required])

 });

 saveCompany(saveCompany) {



  this.company = new Company();

  this.company.companyName = this.CompanyName.value;

  this.company.turnover = this.Turnover.value

  this.company.ceo = this.Ceo.value;

  this.company.boardOfDirectors = this.BoardOfDirectors.value;

  this.company.listInStockExchange = this.ListInStockExchange.value;

  this.company.sector = this.Sector.value;

  this.submitted = true;

  this.save();

 }

 save() {

  this.companyservice.saveCompany(this.company)

   .subscribe(data => console.log(data), error => console.log(error));

  this.company = new Company();

 }

 get CompanyName() {

  return this.companysaveform.get('companyName');

 }

 get Turnover() {

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