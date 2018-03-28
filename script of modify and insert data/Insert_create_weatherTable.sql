select *
from inserthumidityoriginal;

select *
from insertpressureoriginal;

select *
from inserttemperatureoriginal;

select *
from insertweather_descoriginal;

select *
from insertwind_speedoriginal;

select *
from location;

select wid, to_char(wdate, 'mm/dd/yyyy hh24:mi'), location_id
from Weather
order by wdate, location_id;


-- script to populate Weather table
delete from Weather;

insert into Weather
select rownum, dateTable.dt, locationTable.location_id
from (
    select location_id, city_name
    from location
    ) locationTable,
    (select distinct dt
    from insertHumidityOriginal
    where (to_char(dt, 'hh24') = '00' or to_char(dt, 'hh24') = '12')
    order by dt
    ) dateTable;
    


