package climate.weather;


import climate.weather.entity.Location;
import climate.weather.entity.Weather;
import climate.weather.repository.LocationRepository;
import climate.weather.repository.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;


@RestController
public class WeatherController {
    @PersistenceContext
    EntityManager entityManager;

    @Autowired
    private LocationRepository locationRepository;
    @Autowired
    private WeatherRepository weatherRepository;

    @RequestMapping("/weather/location/name/{name}")
    public List<Location> locationHandler(@RequestParam(value="name", defaultValue="Miami") String name) {

        return locationRepository.findBycityName("Boston");
    }
    @RequestMapping("/weather/locationId")
    public List<Location> locationIdHandler(@RequestParam(value="id", defaultValue="27") int id) {

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

        //return weatherRepository.findBywidAndlocation(id);
        //return entityManager.createNamedQuery("complexQuery").setParameter(1,id).getResultList();
        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wid = ?1 and w.location_id = ?2";
        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,id).setParameter(2,locationId).getResultList();

    }
    @RequestMapping("/weather/dateandcity")
    public List<WeatherInfo> weatherHandler3(@RequestParam(value="date", defaultValue="2015-01-29") String date, @RequestParam(value="city", defaultValue="Miami") String city) {

        //return weatherRepository.findBywidAndlocation(id);
        //return entityManager.createNamedQuery("complexQuery").setParameter(1,id).getResultList();
        String query = "select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc " +
                "from Location l left outer join Weather w on w.location_Id = l.location_Id left outer join Humidity h on w.wid =h.wid " +
                "left outer join Pressure p on w.wid =p.wid left outer join Temperature t on w.wid =t.wid  left outer join Weather_Description wd " +
                "on w.wid = wd.wid left outer join Wind_Speed ws on w.wid = ws.wid where w.wdate = to_date(?1,'yyyy--mm--dd') and l.city_name = ?2";

        return entityManager.createNativeQuery(query, WeatherInfo.class).setParameter(1,date).setParameter(2,city).getResultList();

    }



    @RequestMapping("queryAll")
    @ResponseBody
    public List<Location> queryAll(){
        List<Location> list = new ArrayList<>();
        for(Location l : locationRepository.findAll()){
            list.add(l);
        }
        return list;
    }


}