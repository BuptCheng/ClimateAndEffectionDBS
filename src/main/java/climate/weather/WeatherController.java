package climate.weather;


import climate.weather.entity.Location;
import climate.weather.entity.Weather;
import climate.weather.repository.LocationRepository;
import climate.weather.repository.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherController {
    @PersistenceContext
    EntityManager entityManager;
    public final String selectFrom = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
            " ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
            "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
            "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
            "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid ";

    @Autowired
    private LocationRepository locationRepository;

    @RequestMapping("/weather/location/name/{name}")
    public List<Location> locationHandler(@RequestParam(value="name", defaultValue="Miami") String name) {

        return locationRepository.findBycity("Boston");
    }

    @RequestMapping("/city/all")
    public List<Location> cityHandler() {
        List<Location>  l= new ArrayList<>();
        for(Location location:locationRepository.findAll()){
            l.add(location);
        }
        return l;
    }
    @RequestMapping("/city")
    public List<Location> cityHandler2(@RequestParam(value="name", defaultValue="Miami") String name) {
        List<Location>  l= new ArrayList<>();
        for(Location location:locationRepository.findBycity(name)){
            l.add(location);
        }
        return l;
    }

    @RequestMapping("/weather/locationId")
    public List<WeatherInfo> locationIdHandler(@RequestParam(value="id", defaultValue="27") int id) {

        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid \n" +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd \n" +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.location_id = ?1";
        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,id).getResultList();
    }
    @RequestMapping("/weather/wid")
    public List<WeatherInfo> weatherHandler(@RequestParam(value="id", defaultValue="55944") int id) {

        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wid = ?1";
        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,id).getResultList();
    }
    @RequestMapping("/weather/widandlocationId")
    public List<WeatherInfo> weatherHandler2(@RequestParam(value="id", defaultValue="59345") int id, @RequestParam(value="locationId", defaultValue="26") int locationId) {

        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wid = ?1 and w.location_id = ?2";
        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,id).setParameter(2,locationId).getResultList();

    }
    @RequestMapping("/weather/date")
    public List<WeatherInfo> weatherDateHandler(@RequestParam(value="date", defaultValue="2015-01-29") String date) {


        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wdate = to_date(?1,'yyyy--mm--dd')";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,date).getResultList();

    }
    @RequestMapping("/weather/city")
    public List<WeatherInfo> weatherCityHandler(@RequestParam(value="city", defaultValue="Miami") String city) {


        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where l.city_name = ?1";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,city).getResultList();

    }

    @RequestMapping("/weather/dateandcity")
    public List<WeatherInfo> weatherHandler3(@RequestParam(value="date", defaultValue="2015-01-29") String date, @RequestParam(value="city", defaultValue="Miami") String city) {


        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wdate = to_date(?1,'yyyy--mm--dd') and l.city_name = ?2";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,date).setParameter(2,city).getResultList();

    }
    //weather/daterangeandcity?datestart=2015-1-1&dateend=2015-1-2&city=Miami
    @RequestMapping("/weather/daterangeandcity")
    public List<WeatherInfo> weatherHandler4(@RequestParam(value="datestart", defaultValue="2015-01-01") String dateBegin, @RequestParam(value="dateend", defaultValue="2015-01-02") String dateEnd, @RequestParam(value="city", defaultValue="Miami") String city) {


        String query = selectFrom+"where w.wdate >= to_date(?1,'yyyy--mm--dd') and w.wdate <= to_date(?2,'yyyy--mm--dd') and l.city_name = ?3";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,dateBegin).setParameter(2,dateEnd).setParameter(3,city).getResultList();

    }
    @RequestMapping("/weather/dateandtemperature")
    public List<WeatherInfo> weatherHandler5(@RequestParam(value="date", defaultValue="2015-01-01") String date, @RequestParam(value="min", defaultValue="-100") int min,@RequestParam(value="max", defaultValue="200") int max) {

        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wdate = to_date(?1,'yyyy--mm--dd') and t.temperature > ?2 and t.temperature < ?3";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,date).setParameter(2,min).setParameter(3,max).getResultList();

    }
    @RequestMapping("/weather/cityandtemperature")
    public List<WeatherInfo> weatherHandler6(@RequestParam(value="city", defaultValue="Miami") String city, @RequestParam(value="min", defaultValue="-100") int min,@RequestParam(value="max", defaultValue="200") int max) {


        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where l.city_name = ?1 and t.temperature > ?2 and t.temperature < ?3";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,city).setParameter(2,min).setParameter(3,max).getResultList();

    }





}