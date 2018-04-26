import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../data.service';
import {Airport} from '../weather-and-flight/weather-and-flight.component';
import {FormControl, Validators} from '@angular/forms';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-airporthandlebadweather',
  templateUrl: './airporthandlebadweather.component.html',
  styleUrls: ['./airporthandlebadweather.component.css']
})
export class AirporthandlebadweatherComponent implements OnInit {


  @ViewChild('Airport') airport: ElementRef ;
  myControl = new FormControl('', [Validators.required]);
  id1 = 'chart1';
  width1 = 600;
  height1 = 400;
  type1 = 'column2d';
  dataFormat1 = 'json';
  dataSource1;
  id2 = 'chart2';
  width2 = 600;
  height2 = 400;
  type2 = 'column2d';
  dataFormat2 = 'json';
  dataSource2;
  description:string ='rain';
  lefttable:any[] =[];
  sunnytable: any[]=[];
  condition:string;
  constructor(private location: Location,
              private _dataService:DataService) {
    //insight/queryDelayWeather?airport=&desc=
    this.searchsunny();
    this.adddataSource();
  }
  searchsunny(){
    this.condition='insight/queryDelayWeather?airport='+'Indianapolis International Airport'+'&'+'desc=snow';
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        console.log(res)

        for(const ele of res ){
          ele.label = ele.key;
          ele.value = ele.value * 100 ;
          delete ele.key;
        }
        this.sunnytable = res;
        this.adddataSource();
      });
  }
  search(){
    this.condition='insight/queryDelayWeather?airport='+this.airport.nativeElement.value+'&'+'desc='+this.description;
    this._dataService.getResults(this.condition)
      .subscribe((res:any[]) => {
        console.log(res)
        for(const ele of res ){
          ele.label = ele.key;
          ele.value = ele.value * 100 ;
          delete ele.key;
        }
        this.lefttable = res;
        this.adddataSource();
      });
    setTimeout(500);

  }
  adddataSource(){
    this.dataSource1 = {
      "chart": {
        "caption": "",
        "subCaption": "",
        "numberSuffix": "%",
        "decimals":"2",
        "theme": "fint",
        "yAxisMaxValue": "20",
        "yAxisMinValue": "0",
        "allowPinMode":0,
      },
      "data": this.lefttable
    }
    setTimeout(500);
    this.dataSource2 = {
      "chart": {
        "caption": "",
        "subCaption": "",
        "numberSuffix": "%",
        "decimals":"2",
        "theme": "fint",
        "yAxisMaxValue": "20",
        "yAxisMinValue": "0",
        "allowPinMode":0,
      },
      "data": this.sunnytable
    }
  }

  filteredOptions: Observable<Airport[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Airport>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }
  filter(name: string): Airport[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user?: Airport): string | undefined {
    return user ? user.name : undefined;
  }
  descriptions: string[]=['snow','rain'];
  options = [
    new Airport("Lehigh Valley International Airport"),
    new Airport("Abilene Regional Airport"),
    new Airport("Albuquerque International Sunport"),
    new Airport("Aberdeen Regional Airport"),
    new Airport("Southwest Georgia Regional Airport"),
    new Airport("Nantucket Memorial Airport"),
    new Airport("Waco Regional Airport"),
    new Airport("Arcata Airport"),
    new Airport("Atlantic City International Airport"),
    new Airport("Adak Airport"),
    new Airport("Kodiak Airport"),
    new Airport("Alexandria International Airport"),
    new Airport("Augusta Regional Airport"),
    new Airport("King Salmon Airport"),
    new Airport("Albany International Airport"),
    new Airport("Waterloo Regional Airport"),
    new Airport("Rick Husband Amarillo International Airport"),
    new Airport("Ted Stevens Anchorage International Airport"),
    new Airport("Alpena County Regional Airport"),
    new Airport("Aspen-Pitkin County Airport"),
    new Airport("Hartsfield-Jackson Atlanta International Airport"),
    new Airport("Appleton International Airport"),
    new Airport("Austin-Bergstrom International Airport"),
    new Airport("Asheville Regional Airport"),
    new Airport("Wilkes-Barre/Scranton International Airport"),
    new Airport("Kalamazoo/Battle Creek International Airport"),
    new Airport("Bradley International Airport"),
    new Airport("Bethel Airport"),
    new Airport("Meadows Field"),
    new Airport("Greater Binghamton Airport"),
    new Airport("Bangor International Airport"),
    new Airport("Birmingham-Shuttlesworth International Airport"),
    new Airport("Billings Logan International Airport"),
    new Airport("Bismarck Municipal Airport"),
    new Airport("Bemidji Regional Airport"),
    new Airport("Bellingham International Airport"),
    new Airport("Central Illinois Regional Airport at Bloomington-Normal"),
    new Airport("Nashville International Airport"),
    new Airport("Boise Airport"),
    new Airport("Gen. Edward Lawrence Logan International Airport"),
    new Airport("Jack Brooks Regional Airport"),
    new Airport("Brunswick Golden Isles Airport"),
    new Airport("Rafael HernÔøOÔøOndez Airport"),
    new Airport("Brainerd Lakes Regional Airport"),
    new Airport("Brownsville/South Padre Island International Airport"),
    new Airport("Wiley Post-Will Rogers Memorial Airport"),
    new Airport("Bert Mooney Airport"),
    new Airport("Baton Rouge Metropolitan Airport"),
    new Airport("Burlington International Airport"),
    new Airport("Buffalo Niagara International Airport"),
    new Airport("Bob Hope Airport"),
    new Airport("Baltimore-Washington International Airport"),
    new Airport("Bozeman Yellowstone International Airport"),
    new Airport("Columbia Metropolitan Airport"),
    new Airport("Akron-Canton Regional Airport"),
    new Airport("Cedar City Regional Airport"),
    new Airport("Merle K. (Mudhole) Smith Airport"),
    new Airport("Del Norte County Airport"),
    new Airport("Chattanooga Metropolitan Airport"),
    new Airport("Charlottesville-Albemarle Airport"),
    new Airport("Charleston International Airport/Charleston AFB"),
    new Airport("The Eastern Iowa Airport"),
    new Airport("Chippewa County International Airport"),
    new Airport("McClellan-Palomar Airport"),
    new Airport("Cleveland Hopkins International Airport"),
    new Airport("Easterwood Airport"),
    new Airport("Charlotte Douglas International Airport"),
    new Airport("Port Columbus International Airport"),
    new Airport("University of Illinois - Willard Airport"),
    new Airport("Houghton County Memorial Airport"),
    new Airport("Canyonlands Field"),
    new Airport("Yellowstone Regional Airport"),
    new Airport("City of Colorado Springs Municipal Airport"),
    new Airport("Columbia Regional Airport"),
    new Airport("Natrona County International Airport"),
    new Airport("Corpus Christi International Airport"),
    new Airport("Yeager Airport"),
    new Airport("Columbus Metropolitan Airport"),
    new Airport("Cincinnati/Northern Kentucky International Airport"),
    new Airport("Central Wisconsin Airport"),
    new Airport("Daytona Beach International Airport"),
    new Airport("Dallas Love Field"),
    new Airport("James M. Cox Dayton International Airport"),
    new Airport("Dubuque Regional Airport"),
    new Airport("Ronald Reagan Washington National Airport"),
    new Airport("Denver International Airport"),
    new Airport("Dallas/Fort Worth International Airport"),
    new Airport("Dothan Regional Airport"),
    new Airport("Dickinson Theodore Roosevelt Regional Airport"),
    new Airport("Dillingham Airport"),
    new Airport("Duluth International Airport"),
    new Airport("Durango-La Plata County Airport"),
    new Airport("Des Moines International Airport"),
    new Airport("Detroit Metropolitan Airport"),
    new Airport("Devils Lake Regional Airport"),
    new Airport("Chippewa Valley Regional Airport"),
    new Airport("Northwest Florida Beaches International Airport"),
    new Airport("Eagle County Regional Airport"),
    new Airport("Elko Regional Airport"),
    new Airport("Elmira/Corning Regional Airport"),
    new Airport("El Paso International Airport"),
    new Airport("Erie International Airport"),
    new Airport("Delta County Airport"),
    new Airport("Eugene Airport"),
    new Airport("Evansville Regional Airport"),
    new Airport("Coastal Carolina Regional Airport"),
    new Airport("Newark Liberty International Airport"),
    new Airport("Key West International Airport"),
    new Airport("Fairbanks International Airport"),
    new Airport("Hector International Airport"),
    new Airport("Fresno Yosemite International Airport"),
    new Airport("Fayetteville Regional Airport"),
    new Airport("Glacier Park International Airport"),
    new Airport("Flagstaff Pulliam Airport"),
    new Airport("Fort Lauderdale-Hollywood International Airport"),
    new Airport("Bishop International Airport"),
    new Airport("Sioux Falls Regional Airport"),
    new Airport("Fort Smith Regional Airport"),
    new Airport("Fort Wayne International Airport"),
    new Airport("Gillette-Campbell County Airport"),
    new Airport("Garden City Regional Airport"),
    new Airport("Spokane International Airport"),
    new Airport("Grand Forks International Airport"),
    new Airport("East Texas Regional Airport"),
    new Airport("Grand Junction Regional Airport"),
    new Airport("Gainesville Regional Airport"),
    new Airport("Gulfport-Biloxi International Airport"),
    new Airport("Green Bay-Austin Straubel International Airport"),
    new Airport("Central Nebraska Regional Airport"),
    new Airport("Killeen-Fort Hood Regional Airport"),
    new Airport("Gerald R. Ford International Airport"),
    new Airport("Piedmont Triad International Airport"),
    new Airport("Greenville-Spartanburg International Airport"),
    new Airport("Gustavus Airport"),
    new Airport("Great Falls International Airport"),
    new Airport("Golden Triangle Regional Airport"),
    new Airport("Gunnison-Crested Butte Regional Airport"),
    new Airport("Guam International Airport"),
    new Airport("Yampa Valley Airport"),
    new Airport("Range Regional Airport"),
    new Airport("Helena Regional Airport"),
    new Airport("Honolulu International Airport"),
    new Airport("Lea County Regional Airport"),
    new Airport("William P. Hobby Airport"),
    new Airport("Westchester County Airport"),
    new Airport("Valley International Airport"),
    new Airport("Huntsville International Airport"),
    new Airport("Barnstable Municipal Airport"),
    new Airport("Hays Regional Airport"),
    new Airport("Washington Dulles International Airport"),
    new Airport("Niagara Falls International Airport"),
    new Airport("George Bush Intercontinental Airport"),
    new Airport("Wichita Dwight D. Eisenhower National Airport"),
    new Airport("Idaho Falls Regional Airport"),
    new Airport("Wilmington Airport"),
    new Airport("Wilmington International Airport"),
    new Airport("Ford Airport"),
    new Airport("Indianapolis International Airport"),
    new Airport("Falls International Airport"),
    new Airport("Sloulin Field International Airport"),
    new Airport("Long Island MacArthur Airport"),
    new Airport("Ithaca Tompkins Regional Airport"),
    new Airport("Hilo International Airport"),
    new Airport("Jackson Hole Airport"),
    new Airport("Jackson-Evers International Airport"),
    new Airport("Jacksonville International Airport"),
    new Airport("John F. Kennedy International Airport"),
    new Airport("Joplin Regional Airport"),
    new Airport("Jamestown Regional Airport"),
    new Airport("Juneau International Airport"),
    new Airport("Kona International Airport at Keahole"),
    new Airport("Ketchikan International Airport"),
    new Airport("Capital Region International Airport"),
    new Airport("Laramie Regional Airport"),
    new Airport("McCarran International Airport"),
    new Airport("Lawton-Fort Sill Regional Airport"),
    new Airport("Los Angeles International Airport"),
    new Airport("Lubbock Preston Smith International Airport"),
    new Airport("Arnold Palmer Regional Airport"),
    new Airport("Lake Charles Regional Airport"),
    new Airport("Blue Grass Airport"),
    new Airport("Lafayette Regional Airport"),
    new Airport("LaGuardia Airport"),
    new Airport("Long Beach Airport"),
    new Airport("Lihue Airport"),
    new Airport("Bill and Hillary Clinton National Airport"),
    new Airport("Lincoln Airport"),
    new Airport("Laredo International Airport"),
    new Airport("La Crosse Regional Airport"),
    new Airport("Lewiston-Nez Perce County Airport"),
    new Airport("Midland International Airport"),
    new Airport("MBS International Airport"),
    new Airport("Kansas City International Airport"),
    new Airport("Orlando International Airport"),
    new Airport("Harrisburg International Airport"),
    new Airport("Chicago Midway International Airport"),
    new Airport("Meridian Regional Airport"),
    new Airport("Memphis International Airport"),
    new Airport("McAllen-Miller International Airport"),
    new Airport("Rogue Valley International Airport"),
    new Airport("Montgomery Regional Airport"),
    new Airport("Manhattan Regional Airport"),
    new Airport("Manchester-Boston Regional Airport"),
    new Airport("Miami International Airport"),
    new Airport("General Mitchell International Airport"),
    new Airport("Muskegon County Airport"),
    new Airport("Melbourne International Airport"),
    new Airport("Quad City International Airport"),
    new Airport("Monroe Regional Airport"),
    new Airport("Mammoth Yosemite Airport"),
    new Airport("Mobile Regional Airport"),
    new Airport("Minot International Airport"),
    new Airport("Sawyer International Airport"),
    new Airport("Monterey Regional Airport"),
    new Airport("Dane County Regional Airport"),
    new Airport("Missoula International Airport"),
    new Airport("Minneapolis-Saint Paul International Airport"),
    new Airport("Louis Armstrong New Orleans International Airport"),
    new Airport("Montrose Regional Airport"),
    new Airport("Martha's Vineyard Airport"),
    new Airport("Myrtle Beach International Airport"),
    new Airport("Albert J. Ellis Airport"),
    new Airport("Oakland International Airport"),
    new Airport("Kahului Airport"),
    new Airport("Will Rogers World Airport"),
    new Airport("Eppley Airfield"),
    new Airport("Nome Airport"),
    new Airport("Ontario International Airport"),
    new Airport("Chicago O'Hare International Airport"),
    new Airport("Norfolk International Airport"),
    new Airport("Worcester Regional Airport"),
    new Airport("Southwest Oregon Regional Airport"),
    new Airport("Ralph Wien Memorial Airport"),
    new Airport("Barkley Regional Airport"),
    new Airport("Plattsburgh International Airport"),
    new Airport("Palm Beach International Airport"),
    new Airport("Portland International Airport"),
    new Airport("Newport News/Williamsburg International Airport"),
    new Airport("Philadelphia International Airport"),
    new Airport("Phoenix Sky Harbor International Airport"),
    new Airport("General Wayne A. Downing Peoria International Airport"),
    new Airport("Hattiesburg-Laurel Regional Airport"),
    new Airport("Pocatello Regional Airport"),
    new Airport("Pittsburgh International Airport"),
    new Airport("Pellston Regional Airport of Emmet County"),
    new Airport("Pensacola International Airport"),
    new Airport("Pago Pago International Airport"),
    new Airport("Tri-Cities Airport"),
    new Airport("Mercedita Airport"),
    new Airport("Petersburg James A. Johnson Airport"),
    new Airport("Palm Springs International Airport"),
    new Airport("Pueblo Memorial Airport"),
    new Airport("Theodore Francis Green State Airport"),
    new Airport("Portland International Jetport"),
    new Airport("Rapid City Regional Airport"),
    new Airport("Redding Municipal Airport"),
    new Airport("Redmond Municipal Airport"),
    new Airport("Raleigh-Durham International Airport"),
    new Airport("Rhinelander-Oneida County Airport"),
    new Airport("Richmond International Airport"),
    new Airport("Rock Springs-Sweetwater County Airport"),
    new Airport("Reno/Tahoe International Airport"),
    new Airport("Roanoke Regional Airport"),
    new Airport("Greater Rochester International Airport"),
    new Airport("Roswell International Air Center"),
    new Airport("Rochester International Airport"),
    new Airport("Southwest Florida International Airport"),
    new Airport("Santa Fe Municipal Airport"),
    new Airport("San Diego International Airport"),
    new Airport("San Antonio International Airport"),
    new Airport("Savannah/Hilton Head International Airport"),
    new Airport("Santa Barbara Municipal Airport"),
    new Airport("South Bend International Airport"),
    new Airport("San Luis Obispo County Regional Airport"),
    new Airport("Deadhorse Airport"),
    new Airport("University Park Airport"),
    new Airport("Louisville International Airport"),
    new Airport("Seattle-Tacoma International Airport"),
    new Airport("San Francisco International Airport"),
    new Airport("Springfield-Branson National Airport"),
    new Airport("St. George Regional Airport"),
    new Airport("Shreveport Regional Airport"),
    new Airport("Sitka Rocky Gutierrez Airport"),
    new Airport("Norman Y. Mineta San JosÔøO International Airport"),
    new Airport("San Angelo Regional Airport"),
    new Airport("Luis MuÔøOoz MarÔøO_n International Airport"),
    new Airport("Salt Lake City International Airport"),
    new Airport("Sacramento International Airport"),
    new Airport("Santa Maria Public Airport"),
    new Airport("John Wayne Airport"),
    new Airport("Abraham Lincoln Capital Airport"),
    new Airport("Wichita Falls Municipal Airport/Sheppard AFB"),
    new Airport("Sarasota-Bradenton International Airport"),
    new Airport("St. Cloud Regional Airport"),
    new Airport("St. Louis International Airport at Lambert Field"),
    new Airport("Cyril E. King Airport"),
    new Airport("Henry E. Rohlsen Airport"),
    new Airport("Friedman Memorial Airport"),
    new Airport("Sioux Gateway Airport"),
    new Airport("Stewart International Airport"),
    new Airport("Syracuse Hancock International Airport"),
    new Airport("Tallahassee International Airport"),
    new Airport("Toledo Express Airport"),
    new Airport("Tampa International Airport"),
    new Airport("Tri-Cities Regional Airport"),
    new Airport("Trenton Mercer Airport"),
    new Airport("Tulsa International Airport"),
    new Airport("Tucson International Airport"),
    new Airport("Cherry Capital Airport"),
    new Airport("Magic Valley Regional Airport"),
    new Airport("Texarkana Regional Airport"),
    new Airport("Tyler Pounds Regional Airport"),
    new Airport("McGhee Tyson Airport"),
    new Airport("Northeast Florida Regional Airport"),
    new Airport("Valdez Airport"),
    new Airport("Valdosta Regional Airport"),
    new Airport("Destin-Fort Walton Beach Airport/Eglin AFB"),
    new Airport("Wrangell Airport"),
    new Airport("Westerly State Airport"),
    new Airport("Northwest Arkansas Regional Airport"),
    new Airport("Yakutat Airport"),
    new Airport("Yuma International Airport"),
  ];
}
