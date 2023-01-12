import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  routerLinks=[{
    labelName:'Items',
    url:'/items',
    isActive:true
  },
  {
    labelName:'Sales Dashboard',
    url:'/sales-order',
    isActive:false
  },
  {
    labelName:'Invoices',
    url:'/invoice',
    isActive:false
  },
  {
    labelName:'Report',
    url:'/report',
    isActive:false
  },
  {
    labelName:'Order List',
    url:'/order list',
    isActive:false
  }]
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  navigate(l:any){
    let rl=this.routerLinks.map((r:any)=>{
     
      if(l==r.url){
        r.isActive=true
      }else{
        r.isActive=false
      }
      return r

    })
    this.routerLinks=rl
    // if(l.url==='/items'){
    //   this.routerLinks[0].isActive=true
    //   this.routerLinks[1].isActive=false
    // }else if(l.url==='/sales-order'){
    //   this.routerLinks[1].isActive=true
    //   this.routerLinks[0].isActive=false
    // }
    console.log(this.routerLinks)
    this.router.navigate([l])
  }

}
