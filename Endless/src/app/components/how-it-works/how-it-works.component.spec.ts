import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowItWorksComponent } from './how-it-works.component';
import { HttpClientModule } from '@angular/common/http';

describe('HowItWorksComponent', () => {
  let component: HowItWorksComponent;
  let fixture: ComponentFixture<HowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Test that the resulting array is of proper number of indices
  it('should set stepData as an Array of 4 objects', () => {
    fixture.componentInstance.setStepData(testData);
    expect(fixture.componentInstance.stepData.length).toEqual(4);
  });
  //Test that the resulting array contains the correct keys in each index
  it('each stepData array index should have a title and body key value pair', () => {
    fixture.componentInstance.setStepData(testData);
    expect("title" in fixture.componentInstance.stepData[0] &&
           "body" in fixture.componentInstance.stepData[0]).toBeTruthy();

    expect("title" in fixture.componentInstance.stepData[1] &&
           "body" in fixture.componentInstance.stepData[1]).toBeTruthy();
    
    expect("title" in fixture.componentInstance.stepData[2] &&
           "body" in fixture.componentInstance.stepData[2]).toBeTruthy();

    expect("title" in fixture.componentInstance.stepData[3] &&
           "body" in fixture.componentInstance.stepData[3]).toBeTruthy();
  });
  //Test that proper sorting is occuring on the inner and outer array for the object. 
  it('each title and body key value pair in a stepData array index should contain data in the following order', () => {
    fixture.componentInstance.setStepData(testData);
    expect(fixture.componentInstance.stepData[0].title).toContain("Test Step 1");
    expect(fixture.componentInstance.stepData[0].body).toContain("This is step test 1");

    expect(fixture.componentInstance.stepData[1].title).toContain("Test Step 2");
    expect(fixture.componentInstance.stepData[1].body).toContain("This is step test 2");

    expect(fixture.componentInstance.stepData[2].title).toContain("Test Step 3");
    expect(fixture.componentInstance.stepData[2].body).toContain("This is step test 3");

    expect(fixture.componentInstance.stepData[3].title).toContain("Test Step 4");
    expect(fixture.componentInstance.stepData[3].body).toContain("This is step test 4");
  });
});

//Set Test Variables
const testData: any = [
  {
     "id":"d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
     "stepNumber":"2",
     "versionContent":[
        {
           "title":"Test Step 2",
           "body":"This is step test 2",
           "effectiveDate":"2019-05-04T03:04:05.000Z"
        },
        {
           "title":"We Deliver",
           "body":"Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
           "effectiveDate":"2019-04-04T05:04:05.000Z"
        }
     ]
  },
  {
     "id":"dce2554e-00dc-45c1-99c1-93a554d7eba7",
     "stepNumber":"4",
     "versionContent":[
        {
          "title":"Test Step 4",
          "body":"This is step test 4",
           "effectiveDate":"2019-05-20T03:04:05.000Z"
        }
     ]
  },
  {
     "id":"422e6b50-9c5a-43d5-90cb-839f4678cb75",
     "stepNumber":"3",
     "versionContent":[
        {
          "title":"Test Step 3",
          "body":"This is step test 3",
           "effectiveDate":"2019-04-04T03:04:05.000Z"
        },
        {
          "title":"Test Step 3",
          "body":"This is step test 3",
           "effectiveDate":"2019-04-04T05:04:05.000Z"
        },
        {
          "title":"Test Step 3",
          "body":"This is step test 3",
           "effectiveDate":"2019-02-04T08:04:05.000Z"
        }
     ]
  },
  {
     "id":"d9a439d0-8dbf-4bab-8e08-626f8194a075",
     "stepNumber":"1",
     "versionContent":[
        {
          "title":"Test Step 1",
          "body":"This is step test 1",
           "effectiveDate":"2019-05-20T03:04:05.000Z"
        }
     ]
  }
]
