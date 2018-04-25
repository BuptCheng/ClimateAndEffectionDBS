export class Welement {
  locationID: number;
  date: string;
  city: string;
  latitude: number;
  longitude:number;
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDesc: string;
  constructor(  date: string,
  temperature: number){
    const descs:string[] = ['Vancouver','Portland','San Francisco',
      'Seattle'	,'Los Angeles',	'San Diego'	,'Las Vegas', 'Phoenix',
      '	Albuquerque', 'Denver'	, 'San Antonio', 'Dallas' ,	'Houston',
      'Kansas City', 'Minneapolis'	, 'Saint Louis'	,
      'Chicago'	,'Nashville'	,'Indianapolis',	'Atlanta',	'Detroit',
      'Jacksonville',	'Charlotte',	'Miami',	'Pittsburgh',
      'Toronto',	'Philadelphia',	'New York'	,
      'Montreal	', 'Boston'	,'Beersheba',	'Tel Aviv District'	,
      'Eilat'	, 'Haifa'	,'Nahariyya',	'Jerusalem',
    ];
    this.date=date;
    this.temperature = temperature;
    this.windDesc = descs[Math.round(Math.random()*(descs.length-1))];
  }
}
