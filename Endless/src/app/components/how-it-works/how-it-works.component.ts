/* 
how-it-works Compnent - Queries RESTful API for steps that are rendered 
                        using ngif via HTML. Additional logic to support 
                        removing unused metadata from final Array can be found
                        in the setStepData function. 
*/
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api-service.service';

//Interface Imports
import { StepsMetaData } from '../../interfaces/endless-interfaces'
import { stepContent } from '../../interfaces/endless-interfaces'

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  public stepData: stepContent[] = []

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getStepsData().subscribe((data: StepsMetaData) => {
        this.setStepData(data) 
    });
  }

  setStepData(data: any) {
    //Sort data using stepNumber key/value pair
    data.sort((a: any, b: any) => a.stepNumber.localeCompare(b.stepNumber))
    for (let i = 0; i < data.length; i++) {
      //Sort versionContent Array if there are multiple objects
      if (data[i].versionContent.length > 1) {
        data[i].versionContent.sort((aDate: any, bDate: any) => new Date(aDate.effectiveDate).getTime() - new Date(bDate.effectiveDate).getTime())
        data[i].versionContent = data[i].versionContent.slice(-1);
      }
      //Remove unnecessary metadata and set stepData variable with the first object in the versionContent array
      delete data[i].versionContent[0].effectiveDate
      this.stepData.push(data[i].versionContent[0])
    }
    console.log(this.stepData)
  }

}


