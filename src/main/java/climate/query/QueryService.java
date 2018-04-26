package climate.query;

import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import climate.weather.WeatherController;
import climate.weather.entity.Weather;

@Service
public class QueryService {

    private Airline airline;
    //private Airport airport;

    @Autowired
    private QueryRepository queryRepository;
    @Autowired 
    private WeatherController WeatherController;
    

    @Autowired
    private FlightQueryRepository flightQueryRepository;

    /**
     * util queries
     */

    public String findAirportByCode(String code){
        return queryRepository.findAirportByCode(code);
    }

    public String findCityByCode(String code){
        return queryRepository.findCityByAirport(code);
    }

    /**
     * basic queries
     */
    public List<Flight> findFlight(String originAirport, String destAirport) {
        String originCode = queryRepository.findCodeByAirport(originAirport);
        String destCode = queryRepository.findCodeByAirport(destAirport);
        return queryRepository.findByOriginAndDest(originCode, destCode);
    }

    public List<Flight> findFlight(String date) {
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = format1.parse(date);
        } catch (ParseException e) {
            System.out.println(e);
        }
        return queryRepository.findByDate(d);
    }

    public List<Flight> findFlight(String date, String originAirport, String destAirport) {
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = format1.parse(date);
        } catch (ParseException e) {
            System.out.println(e);
        }
        String originCode = queryRepository.findCodeByAirport(originAirport);
        String destCode = queryRepository.findCodeByAirport(destAirport);
        return queryRepository.findByDateLoc(d, originCode, destCode);
    }


    // query for the flight with a duration
    public List<Object[]> findFlightByDuration(String origin, String destination) {
        String ori = queryRepository.findCodeByAirport(origin);
        String dest = queryRepository.findCodeByAirport(destination);
        return flightQueryRepository.findByDuration(ori, dest);
    }

    public List<FlightTime> test(String id) {
        return queryRepository.findByDuration(id);
    }


    /**
     * insight about the data
     * Tweet
     */

    public List<Pair<String, Long>> findTweet(String word) {

        List<Pair<String, Long>> res = new ArrayList<>();
        List<Object[]> query = queryRepository.findTweetByWord(word);
        for (Object[] o : query) {
            Pair<String, Long> pair = new Pair<>((String) o[0], (Long) o[1]);
            res.add(pair);
        }
        return res;
    }

    public List<Pair<String, List<Pair<String, Long>>>> findTweet(String date1, String date2) {
        // pre process the date
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date d1 = new Date();
        Date d2 = new Date();
        try {
            d1 = format.parse(date1);
            d2 = format.parse(date2);
        } catch (ParseException e) {
            System.out.println(e);
        }

        List<Pair<String, List<Pair<String, Long>>>> res = new ArrayList<>();
        for (Airline a : queryRepository.findAirline()) {
            List<Pair<String, Long>> airline = new ArrayList<>();
            for (Object[] o : queryRepository.findSentimentByAirline(d1, d2, a.getCode())) {
                Pair<String, Long> pair = new Pair<>((String) o[0], (Long) o[1]);
                airline.add(pair);
            }
            res.add(new Pair<>(a.getAirline(), airline));
        }
        return res;
    }

    public Map<String, Integer> findTweetReason(String reason) {
        Map<String, Integer> res = new HashMap<>();
        for(Object[] o : queryRepository.findCountByReason(reason)){
            res.put((String)o[0], Math.toIntExact((Long)o[1]));
        }
        return res;
    }


    public List<Pair<String, Double>> findDelayReason(String airportName, String date){
        // pre process the date
        String airport = queryRepository.findCodeByAirport(airportName);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = format.parse(date);
        } catch (ParseException e) {
            System.out.println(e);
        }
        List<Pair<String, Double>> res = new ArrayList();
        List<Object[]> os = flightQueryRepository.findDelay(airport, d);
        List<Object[]> all = flightQueryRepository.findAllFlightByAirport(airport, d);
        for(Object[] o : os){
            for(Object[] a : all){
                if((o[0]).equals(a[0])){
                    int a1 = Math.toIntExact((Long)o[1]);
                    int a2 = Math.toIntExact((Long)a[1]);
                    Pair<String, Double> pair = new Pair<>((String)o[0], (1.0 * a1/a2));
                    res.add(pair);
                    break;
                }
            }
        }
        return res;
    }

    public String findBusiestAirport(String date){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            d = format.parse(date);
        } catch (ParseException e) {
            System.out.println(e);
        }

        return null;
    }

    public List<Pair<String, Double>> findDelayByWeather(String airportName, String desc){

        String airportCode = queryRepository.findCodeByAirport(airportName);
        String city = queryRepository.findCityByAirport(airportCode);
      //  WeatherController weatherController = new WeatherController();
        List<String> dates = WeatherController.findDate(city, desc);

        List<Pair<String, Double>> res = new ArrayList<>();
        Map<String, Double> avg = new HashMap<>();
        List<String> airlines = new ArrayList<>();
        for(String date : dates){
            List<Pair<String, Double>> tmp = this.findDelayReason(airportName, date);
            for(int i = 0; i < tmp.size(); ++i){
                String key = tmp.get(i).getKey();
                if(avg.get(key) == null){
                    avg.put(key, tmp.get(i).getValue());
                    airlines.add(tmp.get(i).getKey());
                }else{
                    avg.put(key, avg.get(key) + tmp.get(i).getValue()) ;
                }
            }
        }
        for(int i = 0; i < airlines.size(); ++i){
            String key = airlines.get(i);
            avg.put(key, avg.get(key) / dates.size());
            res.add(new Pair<>(key, avg.get(key)));
        }
        return res;
    }
}
