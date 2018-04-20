-- This script insert data to Wind_speed table

delete from wind_speed;

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

-- 1. get wind_speed of all dates for city Portland
--   for all other cities, change these two lines:
--      1. wind_speedOrig.Portland (two places)
--      2. wea.location_id = 1
insert into wind_speed
select wea.wid, wind_speedOrig.Portland as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 1
and wind_speedOrig.Portland is not null
order by wid;  -- Portland


-- 2. get wind_speed of all dates for city San_Francisco
insert into wind_speed
select wea.wid, wind_speedOrig.San_Francisco as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 2
and wind_speedOrig.San_Francisco is not null
order by wid;  -- San_Francisco



-- 3. get wind_speed of all dates for city Seattle
insert into wind_speed
select wea.wid, wind_speedOrig.Seattle as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 3
and wind_speedOrig.Seattle is not null
order by wid;  -- Seattle



-- 4. get wind_speed of all dates for city Los_Angeles
insert into wind_speed
select wea.wid, wind_speedOrig.Los_Angeles as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 4
and wind_speedOrig.Los_Angeles is not null
order by wid;  -- Los_Angeles


-- 5. get wind_speed of all dates for city San_Diego
insert into wind_speed
select wea.wid, wind_speedOrig.San_Diego as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 5
and wind_speedOrig.San_Diego is not null
order by wid;  -- San_Diego


-- 6. get wind_speed of all dates for city Las_Vegas
insert into wind_speed
select wea.wid, wind_speedOrig.Las_Vegas as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 6
and wind_speedOrig.Las_Vegas is not null
order by wid;  -- Las_Vegas


-- 7. get wind_speed of all dates for city Phoenix
insert into wind_speed
select wea.wid, wind_speedOrig.Phoenix as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 7
and wind_speedOrig.Phoenix is not null
order by wid;  -- Phoenix



-- 8. get wind_speed of all dates for city Albuquerque
insert into wind_speed
select wea.wid, wind_speedOrig.Albuquerque as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 8
and wind_speedOrig.Albuquerque is not null
order by wid;  -- Albuquerque


-- 9. get wind_speed of all dates for city Denver
insert into wind_speed
select wea.wid, wind_speedOrig.Denver as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 9
and wind_speedOrig.Denver is not null
order by wid;  -- Denver


-- 10. get wind_speed of all dates for city San_Antonio
insert into wind_speed
select wea.wid, wind_speedOrig.San_Antonio as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 10
and wind_speedOrig.San_Antonio is not null
order by wid;  -- San_Antonio



-- 11. get wind_speed of all dates for city Dallas
insert into wind_speed
select wea.wid, wind_speedOrig.Dallas as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 11
and wind_speedOrig.Dallas is not null
order by wid;  -- Dallas




-- 12. get wind_speed of all dates for city Houston
insert into wind_speed
select wea.wid, wind_speedOrig.Houston as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 12
and wind_speedOrig.Houston is not null
order by wid;  -- Houston



-- 13. get wind_speed of all dates for city Kansas_City
insert into wind_speed
select wea.wid, wind_speedOrig.Kansas_City as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 13
and wind_speedOrig.Kansas_City is not null
order by wid;  -- Kansas_City



-- 14. get wind_speed of all dates for city Minneapolis
insert into wind_speed
select wea.wid, wind_speedOrig.Minneapolis as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 14
and wind_speedOrig.Minneapolis is not null
order by wid;  -- Minneapolis



-- 15. get wind_speed of all dates for city Saint_Louis
insert into wind_speed
select wea.wid, wind_speedOrig.Saint_Louis as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 15
and wind_speedOrig.Saint_Louis is not null
order by wid;  -- Saint_Louis

-- 16. get wind_speed of all dates for city Chicago
insert into wind_speed
select wea.wid, wind_speedOrig.Chicago as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 16
and wind_speedOrig.Chicago is not null
order by wid;  -- Chicago


-- 17. get wind_speed of all dates for city Nashville
insert into wind_speed
select wea.wid, wind_speedOrig.Nashville as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 17
and wind_speedOrig.Nashville is not null
order by wid;  -- Nashville



-- 18. get wind_speed of all dates for city Indianapolis
insert into wind_speed
select wea.wid, wind_speedOrig.Indianapolis as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 18
and wind_speedOrig.Indianapolis is not null
order by wid;  -- Indianapolis



-- 19. get wind_speed of all dates for city Atlanta
insert into wind_speed
select wea.wid, wind_speedOrig.Atlanta as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 19
and wind_speedOrig.Atlanta is not null
order by wid;  -- Atlanta

-- 20. get wind_speed of all dates for city Detroit
insert into wind_speed
select wea.wid, wind_speedOrig.Detroit as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 20
and wind_speedOrig.Detroit is not null
order by wid;  -- Detroit


-- 21. get wind_speed of all dates for city Jacksonville
insert into wind_speed
select wea.wid, wind_speedOrig.Jacksonville as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 21
and wind_speedOrig.Jacksonville is not null
order by wid;  -- Jacksonville

-- 22. get wind_speed of all dates for city Charlotte
insert into wind_speed
select wea.wid, wind_speedOrig.Charlotte as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 22
and wind_speedOrig.Charlotte is not null
order by wid;  -- Charlotte

-- 23. get wind_speed of all dates for city Miami
insert into wind_speed
select wea.wid, wind_speedOrig.Miami as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 23
and wind_speedOrig.Miami is not null
order by wid;  -- Miami

-- 24. get wind_speed of all dates for city Pittsburgh
insert into wind_speed
select wea.wid, wind_speedOrig.Pittsburgh as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 24
and wind_speedOrig.Pittsburgh is not null
order by wid;  -- Pittsburgh

-- 25. get wind_speed of all dates for city Philadelphia
insert into wind_speed
select wea.wid, wind_speedOrig.Philadelphia as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 25
and wind_speedOrig.Philadelphia is not null
order by wid;  -- Philadelphia

-- 26. get wind_speed of all dates for city New_York
insert into wind_speed
select wea.wid, wind_speedOrig.New_York as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 26
and wind_speedOrig.New_York is not null
order by wid;  -- New_York

-- 27. get wind_speed of all dates for city Boston
insert into wind_speed
select wea.wid, wind_speedOrig.Boston as Wind_speed
from weather wea, insertWind_speedOriginal wind_speedOrig
where wea.wdate = wind_speedOrig.dt
and wea.location_id = 27
and wind_speedOrig.Boston is not null
order by wid;  -- Boston

commit;





