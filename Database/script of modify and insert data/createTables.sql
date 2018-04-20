drop table weather_description;
drop table humidity;
drop table pressure;
drop table wind_speed;
drop table temperature;
drop table weather CASCADE CONSTRAINTS;
drop table location CASCADE CONSTRAINTS;

create table location(
location_id number not null primary key,
city_name varchar2(20),
latitude decimal(11,7),
longitude decimal(11,7)
);

create table weather(
wid number not null primary key,
wdate date,
location_id references location(location_id)
);

create table weather_description(
wid number not null primary key,
description varchar2(50),
constraint weather_description_WD_fk foreign key (wid) references weather (wid)
);

create table humidity(
wid number not null primary key,
humidity decimal(10,4),
constraint humidity_humidity_fk foreign key (wid) references weather (wid)
);

create table pressure(
wid number not null primary key,
pressure decimal(10,4),
constraint pressure_pressure_fk foreign key (wid) references weather (wid)
);

create table wind_speed(
wid number not null primary key,
wind_speed decimal(10,4),
constraint wind_speed_WS_fk foreign key (wid) references weather (wid)
);

create table temperature(
wid number not null primary key,
temperature decimal(10,4),
constraint temperature_temperature_fk foreign key (wid) references weather (wid)
);