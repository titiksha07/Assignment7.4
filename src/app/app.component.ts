import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title:"Student Details"
  
  details:Array<Object>=[

   {
     name:"Student 1",
     age:15,
     stream:"Science"
    },
    {
     name:"Student 2",
     age:16,
     stream:"Arts"
    },
    {
     name:"Student 3",
     age:16,
     stream:"Commerce"
    }

  ]


}
