-- This script insert data to Temperature table

delete from temperature;

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

-- 1. get temperature of all dates for city Portland
--   for all other cities, change these two lines:
--      1. temperatureOrig.Portland (two places)
--      2. wea.location_id = 1
insert into temperature
select wea.wid, temperatureOrig.Portland as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 1
and temperatureOrig.Portland is not null
order by wid;  -- Portland


-- 2. get temperature of all dates for city San_Francisco
insert into temperature
select wea.wid, temperatureOrig.San_Francisco as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 2
and temperatureOrig.San_Francisco is not null
order by wid;  -- San_Francisco



-- 3. get temperature of all dates for city Seattle
insert into temperature
select wea.wid, temperatureOrig.Seattle as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 3
and temperatureOrig.Seattle is not null
order by wid;  -- Seattle



-- 4. get temperature of all dates for city Los_Angeles
insert into temperature
select wea.wid, temperatureOrig.Los_Angeles as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 4
and temperatureOrig.Los_Angeles is not null
order by wid;  -- Los_Angeles


-- 5. get temperature of all dates for city San_Diego
insert into temperature
select wea.wid, temperatureOrig.San_Diego as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 5
and temperatureOrig.San_Diego is not null
order by wid;  -- San_Diego


-- 6. get temperature of all dates for city Las_Vegas
insert into temperature
select wea.wid, temperatureOrig.Las_Vegas as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 6
and temperatureOrig.Las_Vegas is not null
order by wid;  -- Las_Vegas


-- 7. get temperature of all dates for city Phoenix
insert into temperature
select wea.wid, temperatureOrig.Phoenix as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 7
and temperatureOrig.Phoenix is not null
order by wid;  -- Phoenix



-- 8. get temperature of all dates for city Albuquerque
insert into temperature
select wea.wid, temperatureOrig.Albuquerque as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 8
and temperatureOrig.Albuquerque is not null
order by wid;  -- Albuquerque


-- 9. get temperature of all dates for city Denver
insert into temperature
select wea.wid, temperatureOrig.Denver as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 9
and temperatureOrig.Denver is not null
order by wid;  -- Denver


-- 10. get temperature of all dates for city San_Antonio
insert into temperature
select wea.wid, temperatureOrig.San_Antonio as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 10
and temperatureOrig.San_Antonio is not null
order by wid;  -- San_Antonio



-- 11. get temperature of all dates for city Dallas
insert into temperature
select wea.wid, temperatureOrig.Dallas as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 11
and temperatureOrig.Dallas is not null
order by wid;  -- Dallas




-- 12. get temperature of all dates for city Houston
insert into temperature
select wea.wid, temperatureOrig.Houston as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 12
and temperatureOrig.Houston is not null
order by wid;  -- Houston



-- 13. get temperature of all dates for city Kansas_City
insert into temperature
select wea.wid, temperatureOrig.Kansas_City as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 13
and temperatureOrig.Kansas_City is not null
order by wid;  -- Kansas_City



-- 14. get temperature of all dates for city Minneapolis
insert into temperature
select wea.wid, temperatureOrig.Minneapolis as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 14
and temperatureOrig.Minneapolis is not null
order by wid;  -- Minneapolis



-- 15. get temperature of all dates for city Saint_Louis
insert into temperature
select wea.wid, temperatureOrig.Saint_Louis as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 15
and temperatureOrig.Saint_Louis is not null
order by wid;  -- Saint_Louis

-- 16. get temperature of all dates for city Chicago
insert into temperature
select wea.wid, temperatureOrig.Chicago as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 16
and temperatureOrig.Chicago is not null
order by wid;  -- Chicago


-- 17. get temperature of all dates for city Nashville
insert into temperature
select wea.wid, temperatureOrig.Nashville as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 17
and temperatureOrig.Nashville is not null
order by wid;  -- Nashville



-- 18. get temperature of all dates for city Indianapolis
insert into temperature
select wea.wid, temperatureOrig.Indianapolis as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 18
and temperatureOrig.Indianapolis is not null
order by wid;  -- Indianapolis



-- 19. get temperature of all dates for city Atlanta
insert into temperature
select wea.wid, temperatureOrig.Atlanta as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 19
and temperatureOrig.Atlanta is not null
order by wid;  -- Atlanta

-- 20. get temperature of all dates for city Detroit
insert into temperature
select wea.wid, temperatureOrig.Detroit as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 20
and temperatureOrig.Detroit is not null
order by wid;  -- Detroit


-- 21. get temperature of all dates for city Jacksonville
insert into temperature
select wea.wid, temperatureOrig.Jacksonville as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 21
and temperatureOrig.Jacksonville is not null
order by wid;  -- Jacksonville

-- 22. get temperature of all dates for city Charlotte
insert into temperature
select wea.wid, temperatureOrig.Charlotte as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 22
and temperatureOrig.Charlotte is not null
order by wid;  -- Charlotte

-- 23. get temperature of all dates for city Miami
insert into temperature
select wea.wid, temperatureOrig.Miami as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 23
and temperatureOrig.Miami is not null
order by wid;  -- Miami

-- 24. get temperature of all dates for city Pittsburgh
insert into temperature
select wea.wid, temperatureOrig.Pittsburgh as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 24
and temperatureOrig.Pittsburgh is not null
order by wid;  -- Pittsburgh

-- 25. get temperature of all dates for city Philadelphia
insert into temperature
select wea.wid, temperatureOrig.Philadelphia as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 25
and temperatureOrig.Philadelphia is not null
order by wid;  -- Philadelphia

-- 26. get temperature of all dates for city New_York
insert into temperature
select wea.wid, temperatureOrig.New_York as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 26
and temperatureOrig.New_York is not null
order by wid;  -- New_York

-- 27. get temperature of all dates for city Boston
insert into temperature
select wea.wid, temperatureOrig.Boston as Temperature
from weather wea, insertTemperatureOriginal temperatureOrig
where wea.wdate = temperatureOrig.dt
and wea.location_id = 27
and temperatureOrig.Boston is not null
order by wid;  -- Boston

commit;





