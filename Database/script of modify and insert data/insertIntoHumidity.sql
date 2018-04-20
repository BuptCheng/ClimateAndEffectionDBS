-- This script insert data to Humidity table

delete from humidity;

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

-- 1. get humidity of all dates for city Portland
--   for all other cities, change these two lines:
--      1. humidityOrig.Portland (two places)
--      2. wea.location_id = 1
insert into humidity
select wea.wid, humidityOrig.Portland as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 1
and humidityOrig.Portland is not null
order by wid;  -- Portland


-- 2. get humidity of all dates for city San_Francisco
insert into humidity
select wea.wid, humidityOrig.San_Francisco as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 2
and humidityOrig.San_Francisco is not null
order by wid;  -- San_Francisco



-- 3. get humidity of all dates for city Seattle
insert into humidity
select wea.wid, humidityOrig.Seattle as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 3
and humidityOrig.Seattle is not null
order by wid;  -- Seattle



-- 4. get humidity of all dates for city Los_Angeles
insert into humidity
select wea.wid, humidityOrig.Los_Angeles as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 4
and humidityOrig.Los_Angeles is not null
order by wid;  -- Los_Angeles


-- 5. get humidity of all dates for city San_Diego
insert into humidity
select wea.wid, humidityOrig.San_Diego as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 5
and humidityOrig.San_Diego is not null
order by wid;  -- San_Diego


-- 6. get humidity of all dates for city Las_Vegas
insert into humidity
select wea.wid, humidityOrig.Las_Vegas as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 6
and humidityOrig.Las_Vegas is not null
order by wid;  -- Las_Vegas


-- 7. get humidity of all dates for city Phoenix
insert into humidity
select wea.wid, humidityOrig.Phoenix as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 7
and humidityOrig.Phoenix is not null
order by wid;  -- Phoenix



-- 8. get humidity of all dates for city Albuquerque
insert into humidity
select wea.wid, humidityOrig.Albuquerque as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 8
and humidityOrig.Albuquerque is not null
order by wid;  -- Albuquerque


-- 9. get humidity of all dates for city Denver
insert into humidity
select wea.wid, humidityOrig.Denver as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 9
and humidityOrig.Denver is not null
order by wid;  -- Denver


-- 10. get humidity of all dates for city San_Antonio
insert into humidity
select wea.wid, humidityOrig.San_Antonio as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 10
and humidityOrig.San_Antonio is not null
order by wid;  -- San_Antonio



-- 11. get humidity of all dates for city Dallas
insert into humidity
select wea.wid, humidityOrig.Dallas as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 11
and humidityOrig.Dallas is not null
order by wid;  -- Dallas




-- 12. get humidity of all dates for city Houston
insert into humidity
select wea.wid, humidityOrig.Houston as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 12
and humidityOrig.Houston is not null
order by wid;  -- Houston



-- 13. get humidity of all dates for city Kansas_City
insert into humidity
select wea.wid, humidityOrig.Kansas_City as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 13
and humidityOrig.Kansas_City is not null
order by wid;  -- Kansas_City



-- 14. get humidity of all dates for city Minneapolis
insert into humidity
select wea.wid, humidityOrig.Minneapolis as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 14
and humidityOrig.Minneapolis is not null
order by wid;  -- Minneapolis



-- 15. get humidity of all dates for city Saint_Louis
insert into humidity
select wea.wid, humidityOrig.Saint_Louis as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 15
and humidityOrig.Saint_Louis is not null
order by wid;  -- Saint_Louis

-- 16. get humidity of all dates for city Chicago
insert into humidity
select wea.wid, humidityOrig.Chicago as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 16
and humidityOrig.Chicago is not null
order by wid;  -- Chicago


-- 17. get humidity of all dates for city Nashville
insert into humidity
select wea.wid, humidityOrig.Nashville as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 17
and humidityOrig.Nashville is not null
order by wid;  -- Nashville



-- 18. get humidity of all dates for city Indianapolis
insert into humidity
select wea.wid, humidityOrig.Indianapolis as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 18
and humidityOrig.Indianapolis is not null
order by wid;  -- Indianapolis



-- 19. get humidity of all dates for city Atlanta
insert into humidity
select wea.wid, humidityOrig.Atlanta as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 19
and humidityOrig.Atlanta is not null
order by wid;  -- Atlanta

-- 20. get humidity of all dates for city Detroit
insert into humidity
select wea.wid, humidityOrig.Detroit as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 20
and humidityOrig.Detroit is not null
order by wid;  -- Detroit


-- 21. get humidity of all dates for city Jacksonville
insert into humidity
select wea.wid, humidityOrig.Jacksonville as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 21
and humidityOrig.Jacksonville is not null
order by wid;  -- Jacksonville

-- 22. get humidity of all dates for city Charlotte
insert into humidity
select wea.wid, humidityOrig.Charlotte as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 22
and humidityOrig.Charlotte is not null
order by wid;  -- Charlotte

-- 23. get humidity of all dates for city Miami
insert into humidity
select wea.wid, humidityOrig.Miami as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 23
and humidityOrig.Miami is not null
order by wid;  -- Miami

-- 24. get humidity of all dates for city Pittsburgh
insert into humidity
select wea.wid, humidityOrig.Pittsburgh as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 24
and humidityOrig.Pittsburgh is not null
order by wid;  -- Pittsburgh

-- 25. get humidity of all dates for city Philadelphia
insert into humidity
select wea.wid, humidityOrig.Philadelphia as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 25
and humidityOrig.Philadelphia is not null
order by wid;  -- Philadelphia

-- 26. get humidity of all dates for city New_York
insert into humidity
select wea.wid, humidityOrig.New_York as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 26
and humidityOrig.New_York is not null
order by wid;  -- New_York

-- 27. get humidity of all dates for city Boston
insert into humidity
select wea.wid, humidityOrig.Boston as Humidity
from weather wea, insertHumidityOriginal humidityOrig
where wea.wdate = humidityOrig.dt
and wea.location_id = 27
and humidityOrig.Boston is not null
order by wid;  -- Boston

commit;





