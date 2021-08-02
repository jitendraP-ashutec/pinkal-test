import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';  
import { analyzeAndValidateNgModules } from '@angular/compiler';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  constructor(private router:Router) {  }
   
   
  ngOnInit(): void {
  
 
    let studobj=[{
      title:'homework',
      s_date:'21-07-2021',
      e_date:'22-072021',
      time:'9:50',
      location:'Ahmedabad',
      email:'pnraval4686@gmail.com',
      description:'computer engineer',
      guestlist:'anraval@gmail.com,knr7@gmail.com'

    },
  { title:'work',
  s_date:'23-07-2021',
  e_date:'24-07-2021',
  time:'8:50',
  location:'Palanpur',
  email:'knr7@gmail.com',
  description:'mechanical engineer',
  guestlist:'anraval@gmail.com,pnraval4686@gmail.com'

      
  }];
  localStorage.setItem('userdata',JSON.stringify(studobj));
 
  }
     
     ontitle(event:any){
      console.log(event.target.value);
     
  }
     onsd(st:any){
      console.log(st.target.value);
}
     oned(et:any){
      console.log(et.target.value);
}
  ismeridian = true;
  
  mytime: Date = new Date();
 
  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
   
}

onSubmit(pageName:string):void{
    
  this.router.navigate([`${pageName}`]);
}
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  
  isValidFormSubmitted = false;  
  
  user = new User();  
  
  onFormSubmit(form: NgForm) {  
    this.isValidFormSubmitted = false;  
  
    if (form.invalid) {  
       return;  
    }  
  
    this.isValidFormSubmitted = true;  
    form.resetForm(); 
    
 }
 onem(ea:any){
   console.log(ea.target.value);
 }
 onloc(em:any){
  console.log(em.target.value);
}
 ondesr(drp:any){
   console.log(drp.target.value);
 }
 onclick(val:any){
   console.log(val.target.value);
 }
 public users=Array();

 onCreateGuest(guest:any){
   this.users.push({
     myname:guest.value
   }
   
    );
  guest.value="";
    }
    allDay:boolean=true;
    oncheck(){
      this.allDay=!this.allDay;
    }
   
}
export class User {  
  emailId ?:string;  
}

