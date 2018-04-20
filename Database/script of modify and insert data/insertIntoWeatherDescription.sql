-- This script insert data to Weather_description table

delete from weather_description;

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

-- 1. get weather_description of all dates for city Portland
--   for all other cities, change these two lines:
--      1. weather_descOrig.Portland (two places)
--      2. wea.location_id = 1
insert into weather_description
select wea.wid, weather_descOrig.Portland as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 1
and weather_descOrig.Portland is not null
order by wid;  -- Portland


-- 2. get weather_description of all dates for city San_Francisco
insert into weather_description
select wea.wid, weather_descOrig.San_Francisco as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 2
and weather_descOrig.San_Francisco is not null
order by wid;  -- San_Francisco



-- 3. get weather_description of all dates for city Seattle
insert into weather_description
select wea.wid, weather_descOrig.Seattle as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 3
and weather_descOrig.Seattle is not null
order by wid;  -- Seattle



-- 4. get weather_description of all dates for city Los_Angeles
insert into weather_description
select wea.wid, weather_descOrig.Los_Angeles as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 4
and weather_descOrig.Los_Angeles is not null
order by wid;  -- Los_Angeles


-- 5. get weather_description of all dates for city San_Diego
insert into weather_description
select wea.wid, weather_descOrig.San_Diego as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 5
and weather_descOrig.San_Diego is not null
order by wid;  -- San_Diego


-- 6. get weather_description of all dates for city Las_Vegas
insert into weather_description
select wea.wid, weather_descOrig.Las_Vegas as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 6
and weather_descOrig.Las_Vegas is not null
order by wid;  -- Las_Vegas


-- 7. get weather_description of all dates for city Phoenix
insert into weather_description
select wea.wid, weather_descOrig.Phoenix as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 7
and weather_descOrig.Phoenix is not null
order by wid;  -- Phoenix



-- 8. get weather_description of all dates for city Albuquerque
insert into weather_description
select wea.wid, weather_descOrig.Albuquerque as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 8
and weather_descOrig.Albuquerque is not null
order by wid;  -- Albuquerque


-- 9. get weather_description of all dates for city Denver
insert into weather_description
select wea.wid, weather_descOrig.Denver as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 9
and weather_descOrig.Denver is not null
order by wid;  -- Denver


-- 10. get weather_description of all dates for city San_Antonio
insert into weather_description
select wea.wid, weather_descOrig.San_Antonio as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 10
and weather_descOrig.San_Antonio is not null
order by wid;  -- San_Antonio



-- 11. get weather_description of all dates for city Dallas
insert into weather_description
select wea.wid, weather_descOrig.Dallas as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 11
and weather_descOrig.Dallas is not null
order by wid;  -- Dallas




-- 12. get weather_description of all dates for city Houston
insert into weather_description
select wea.wid, weather_descOrig.Houston as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 12
and weather_descOrig.Houston is not null
order by wid;  -- Houston



-- 13. get weather_description of all dates for city Kansas_City
insert into weather_description
select wea.wid, weather_descOrig.Kansas_City as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 13
and weather_descOrig.Kansas_City is not null
order by wid;  -- Kansas_City



-- 14. get weather_description of all dates for city Minneapolis
insert into weather_description
select wea.wid, weather_descOrig.Minneapolis as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 14
and weather_descOrig.Minneapolis is not null
order by wid;  -- Minneapolis



-- 15. get weather_description of all dates for city Saint_Louis
insert into weather_description
select wea.wid, weather_descOrig.Saint_Louis as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 15
and weather_descOrig.Saint_Louis is not null
order by wid;  -- Saint_Louis

-- 16. get weather_description of all dates for city Chicago
insert into weather_description
select wea.wid, weather_descOrig.Chicago as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 16
and weather_descOrig.Chicago is not null
order by wid;  -- Chicago


-- 17. get weather_description of all dates for city Nashville
insert into weather_description
select wea.wid, weather_descOrig.Nashville as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 17
and weather_descOrig.Nashville is not null
order by wid;  -- Nashville



-- 18. get weather_description of all dates for city Indianapolis
insert into weather_description
select wea.wid, weather_descOrig.Indianapolis as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 18
and weather_descOrig.Indianapolis is not null
order by wid;  -- Indianapolis



-- 19. get weather_description of all dates for city Atlanta
insert into weather_description
select wea.wid, weather_descOrig.Atlanta as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 19
and weather_descOrig.Atlanta is not null
order by wid;  -- Atlanta

-- 20. get weather_description of all dates for city Detroit
insert into weather_description
select wea.wid, weather_descOrig.Detroit as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 20
and weather_descOrig.Detroit is not null
order by wid;  -- Detroit


-- 21. get weather_description of all dates for city Jacksonville
insert into weather_description
select wea.wid, weather_descOrig.Jacksonville as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 21
and weather_descOrig.Jacksonville is not null
order by wid;  -- Jacksonville

-- 22. get weather_description of all dates for city Charlotte
insert into weather_description
select wea.wid, weather_descOrig.Charlotte as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 22
and weather_descOrig.Charlotte is not null
order by wid;  -- Charlotte

-- 23. get weather_description of all dates for city Miami
insert into weather_description
select wea.wid, weather_descOrig.Miami as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 23
and weather_descOrig.Miami is not null
order by wid;  -- Miami

-- 24. get weather_description of all dates for city Pittsburgh
insert into weather_description
select wea.wid, weather_descOrig.Pittsburgh as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 24
and weather_descOrig.Pittsburgh is not null
order by wid;  -- Pittsburgh

-- 25. get weather_description of all dates for city Philadelphia
insert into weather_description
select wea.wid, weather_descOrig.Philadelphia as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 25
and weather_descOrig.Philadelphia is not null
order by wid;  -- Philadelphia

-- 26. get weather_description of all dates for city New_York
insert into weather_description
select wea.wid, weather_descOrig.New_York as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 26
and weather_descOrig.New_York is not null
order by wid;  -- New_York

-- 27. get weather_description of all dates for city Boston
insert into weather_description
select wea.wid, weather_descOrig.Boston as description
from weather wea, insertWeather_descOriginal weather_descOrig
where wea.wdate = weather_descOrig.dt
and wea.location_id = 27
and weather_descOrig.Boston is not null
order by wid;  -- Boston

commit;





