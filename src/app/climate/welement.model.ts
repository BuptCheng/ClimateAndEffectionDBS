export class Welement {
  date: String;
  desc: string;
  temperature: number;
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
    this.desc = descs[Math.round(Math.random()*(descs.length-1))];
  }
  getdate(){
    return this.date;
  }
  getdesc(){
    return this.desc;
  }
  gettemperature(){
    return this.temperature;
  }
}
