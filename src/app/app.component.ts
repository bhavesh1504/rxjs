import { AfterViewInit, Component } from '@angular/core';
import { Search } from './app interface/searchinterface';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'rxjs';
  // @ViewChild('searchForm') searchForm: NgForm;
  searchResults:Search[];
  searchTerm:any;

constructor(private _userservice : UserserviceService){}

  ngAfterViewInit(){

    this._userservice.getSearches().subscribe(res=>{
      console.log(res)
      this.searchResults = res
      this.data = res;
    })

    
    
  // const formValue = this.searchForm.valueChanges;

    // formValue.pipe(
    //   map(data => data['searchTerm']),
    //   debounceTime(500),
    //   distinctUntilChanged()
      
    // )

  }

data:Search[];

  onChange(){

    console.log(this.searchTerm)
      if(this.searchTerm.length>0){
      this.data=[];
        
         this.searchResults.forEach(e =>{
          if(e.username.includes(this.searchTerm.trim())||e.email.includes(this.searchTerm.trim())){this.data.push(e)} 
        }) 
        console.log(this.data);
      } else{
        this.data = this.searchResults;
      }
  }

}
