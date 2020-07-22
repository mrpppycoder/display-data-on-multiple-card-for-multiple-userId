import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cardtemp';
  //title = 'image-gallery';
  data:any = []
 constructor(private http: HttpClient) {
}
getData(){
 
  this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe((res : Data[])=>{
    res.forEach(element => {
      console.log("record",element);
    });
    this.data = res
    console.log("result",res);
    console.log("data",this.data)
  })
}
ngOnInit() {
  this.getData()
}
}  
