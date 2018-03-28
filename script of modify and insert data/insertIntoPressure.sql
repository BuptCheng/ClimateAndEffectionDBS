-- This script insert data to Pressure table

delete from pressure;

---------------------------------------------
--ID  City_Name

--1	Portland
--2	San_Francisco
--3	Seattle
--4	Los_Angeles
--5	San_Diego
--6	Las_Vegas
--7	Phoenix
--8	Albuquerque
--9	Denver
--10	San_Antonio
--11	Dallas
--12	Houston
--13	Kansas_City
--14	Minneapolis
--15	Saint_Louis
--16	Chicago
--17	Nashville
--18	Indianapolis
--19	Atlanta
--20	Detroit
--21	Jacksonville
--22	Charlotte
--23	Miami
--24	Pittsburgh
--25	Philadelphia
--26	New_York
--27	Boston
---------------------------------------------

-- 1. get pressure of all dates for city Portland
--   for all other cities, change these two lines:
--      1. pressureOrig.Portland (two places)
--      2. wea.location_id = 1
insert into pressure
select wea.wid, pressureOrig.Portland as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 1
and pressureOrig.Portland is not null
order by wid;  -- Portland


-- 2. get pressure of all dates for city San_Francisco
insert into pressure
select wea.wid, pressureOrig.San_Francisco as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 2
and pressureOrig.San_Francisco is not null
order by wid;  -- San_Francisco



-- 3. get pressure of all dates for city Seattle
insert into pressure
select wea.wid, pressureOrig.Seattle as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 3
and pressureOrig.Seattle is not null
order by wid;  -- Seattle



-- 4. get pressure of all dates for city Los_Angeles
insert into pressure
select wea.wid, pressureOrig.Los_Angeles as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 4
and pressureOrig.Los_Angeles is not null
order by wid;  -- Los_Angeles


-- 5. get pressure of all dates for city San_Diego
insert into pressure
select wea.wid, pressureOrig.San_Diego as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 5
and pressureOrig.San_Diego is not null
order by wid;  -- San_Diego


-- 6. get pressure of all dates for city Las_Vegas
insert into pressure
select wea.wid, pressureOrig.Las_Vegas as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 6
and pressureOrig.Las_Vegas is not null
order by wid;  -- Las_Vegas


-- 7. get pressure of all dates for city Phoenix
insert into pressure
select wea.wid, pressureOrig.Phoenix as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 7
and pressureOrig.Phoenix is not null
order by wid;  -- Phoenix



-- 8. get pressure of all dates for city Albuquerque
insert into pressure
select wea.wid, pressureOrig.Albuquerque as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 8
and pressureOrig.Albuquerque is not null
order by wid;  -- Albuquerque


-- 9. get pressure of all dates for city Denver
insert into pressure
select wea.wid, pressureOrig.Denver as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 9
and pressureOrig.Denver is not null
order by wid;  -- Denver


-- 10. get pressure of all dates for city San_Antonio
insert into pressure
select wea.wid, pressureOrig.San_Antonio as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 10
and pressureOrig.San_Antonio is not null
order by wid;  -- San_Antonio



-- 11. get pressure of all dates for city Dallas
insert into pressure
select wea.wid, pressureOrig.Dallas as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 11
and pressureOrig.Dallas is not null
order by wid;  -- Dallas




-- 12. get pressure of all dates for city Houston
insert into pressure
select wea.wid, pressureOrig.Houston as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 12
and pressureOrig.Houston is not null
order by wid;  -- Houston



-- 13. get pressure of all dates for city Kansas_City
insert into pressure
select wea.wid, pressureOrig.Kansas_City as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 13
and pressureOrig.Kansas_City is not null
order by wid;  -- Kansas_City



-- 14. get pressure of all dates for city Minneapolis
insert into pressure
select wea.wid, pressureOrig.Minneapolis as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 14
and pressureOrig.Minneapolis is not null
order by wid;  -- Minneapolis



-- 15. get pressure of all dates for city Saint_Louis
insert into pressure
select wea.wid, pressureOrig.Saint_Louis as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 15
and pressureOrig.Saint_Louis is not null
order by wid;  -- Saint_Louis

-- 16. get pressure of all dates for city Chicago
insert into pressure
select wea.wid, pressureOrig.Chicago as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 16
and pressureOrig.Chicago is not null
order by wid;  -- Chicago


-- 17. get pressure of all dates for city Nashville
insert into pressure
select wea.wid, pressureOrig.Nashville as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 17
and pressureOrig.Nashville is not null
order by wid;  -- Nashville



-- 18. get pressure of all dates for city Indianapolis
insert into pressure
select wea.wid, pressureOrig.Indianapolis as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 18
and pressureOrig.Indianapolis is not null
order by wid;  -- Indianapolis



-- 19. get pressure of all dates for city Atlanta
insert into pressure
select wea.wid, pressureOrig.Atlanta as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 19
and pressureOrig.Atlanta is not null
order by wid;  -- Atlanta

-- 20. get pressure of all dates for city Detroit
insert into pressure
select wea.wid, pressureOrig.Detroit as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 20
and pressureOrig.Detroit is not null
order by wid;  -- Detroit


-- 21. get pressure of all dates for city Jacksonville
insert into pressure
select wea.wid, pressureOrig.Jacksonville as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 21
and pressureOrig.Jacksonville is not null
order by wid;  -- Jacksonville

-- 22. get pressure of all dates for city Charlotte
insert into pressure
select wea.wid, pressureOrig.Charlotte as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 22
and pressureOrig.Charlotte is not null
order by wid;  -- Charlotte

-- 23. get pressure of all dates for city Miami
insert into pressure
select wea.wid, pressureOrig.Miami as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 23
and pressureOrig.Miami is not null
order by wid;  -- Miami

-- 24. get pressure of all dates for city Pittsburgh
insert into pressure
select wea.wid, pressureOrig.Pittsburgh as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 24
and pressureOrig.Pittsburgh is not null
order by wid;  -- Pittsburgh

-- 25. get pressure of all dates for city Philadelphia
insert into pressure
select wea.wid, pressureOrig.Philadelphia as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 25
and pressureOrig.Philadelphia is not null
order by wid;  -- Philadelphia

-- 26. get pressure of all dates for city New_York
insert into pressure
select wea.wid, pressureOrig.New_York as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 26
and pressureOrig.New_York is not null
order by wid;  -- New_York

-- 27. get pressure of all dates for city Boston
insert into pressure
select wea.wid, pressureOrig.Boston as Pressure
from weather wea, insertPressureOriginal pressureOrig
where wea.wdate = pressureOrig.dt
and wea.location_id = 27
and pressureOrig.Boston is not null
order by wid;  -- Boston

commit;





