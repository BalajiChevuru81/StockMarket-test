import { Component, OnInit } from '@angular/core';    
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
import { UserServiceService } from '../userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: any;
  constructor(private userservice:UserServiceService) { }  
    user : User=new User();  
  submitted = false;  
    ngOnInit() {  
    this.submitted=false;  
  }  
  
  usersaveform=new FormGroup({  
    username:new FormControl('' , [Validators.required , Validators.maxLength(15) ] ),  
    password:new FormControl('' , [Validators.required , Validators.maxLength(15) ] ),
    firstname:new FormControl('' , [Validators.required , Validators.maxLength(15) ] ),
    lastname:new FormControl('' , [Validators.required , Validators.maxLength(15) ] ),
    email:new FormControl('',[Validators.required,Validators.email]),  
    gender:new FormControl('' , [Validators.required , Validators.maxLength(6) ] ),
    address:new FormControl('' , [Validators.required , Validators.maxLength(15) ] ),
    phone:new FormControl('' , [Validators.required , Validators.maxLength(13) ] ),
     
  });  
  
  saveUser(saveUser){  
    this.user=new User();     
    this.user.username=this.Username.value;
    this.user.password=this.Password.value;
    this.user.firstname=this.Firstname.value; 
    this.user.lastname=this.Lastname.value; 
    this.user.email=this.Email.value;  
    this.user.gender=this.Gender.value;
    this.user.address=this.Address.value; 
    this.user.phone=this.Phone.value; 
    this.submitted = true;  
    this.save();  
  }  
  
  save() {
    this.userservice.saveUser(this.user)
     .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    }
    get Username(){
    return this.usersaveform.get('username');
    }
    get Password(){
    return this.usersaveform.get('password');
    }
    get Firstname(){
    return this.usersaveform.get('firstname');
    }
    get Lastname(){
    return this.usersaveform.get('lastname');
    }
    get Email(){
      return this.usersaveform.get('email');
      }
   
    get Gender(){
    return this.usersaveform.get('gender');
    }
    get Address(){
      return this.usersaveform.get('address');
      }
    get Phone(){
      return this.usersaveform.get('phone');
      }

    saveUserForm(){
    this.submitted=false;
    this.usersaveform.reset();
    }
   }