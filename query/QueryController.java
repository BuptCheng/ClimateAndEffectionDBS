package climate.query;

import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QueryController {

    @Autowired
    private QueryService queryService;
    /**
     * util queries
     */
    @RequestMapping("/findAirportCode")
    public String findAirportCode(@RequestParam("code") String code){
        return queryService.findAirportByCode(code);
    }

    /**
     * basic queries
     */
    @RequestMapping("/listFlightOriDest")
    public List<Flight> listFlight(@RequestParam("ori") String origin, @RequestParam("dest") String dest){
        return queryService.findFlight(origin, dest);
    }

    @RequestMapping("/listFlightDate")
    public List<Flight> listFlight(@RequestParam("date") String date){
        return queryService.findFlight(date);
    }

    @RequestMapping("/listFlightDateLoc")
    public List<Flight> listFlight(@RequestParam("date") String date, @RequestParam("ori") String origin, @RequestParam("dest") String dest){
        return queryService.findFlight(date, origin, dest);
    }

    @RequestMapping("/queryAirlineDuration")
    public List<Object[]> findFastest(@RequestParam("ori") String origin, @RequestParam("dest") String dest){
        return queryService.findFlightByDuration(origin, dest);
    }

    @RequestMapping("/test")
    public List<FlightTime> test(@RequestParam("ori") String origin){
        return queryService.test(origin);
    }

    /**
     * the insights
     */
    @RequestMapping("insight/queryTweetWord")
    public List<Pair<String, Long>> listTweet(@RequestParam("word") String word){
        return queryService.findTweet(word);
    }

    @RequestMapping("insight/queryTweetSentiment")
    public List<Pair<String, List<Pair<String, Long>>>> listTweet(@RequestParam("d1") String date1, @RequestParam("d2") String date2){
        return queryService.findTweet(date1, date2);
    }

    @RequestMapping("insight/queryTweetReason")
    public Map<String, Integer> listTweetReason(@RequestParam("reason") String reason){
        return queryService.findTweetReason(reason);
    }

    //find delay by airlines and reason
    @RequestMapping("insight/queryDelay")
    public List<Pair<String,Double>> queryDelayReason(@RequestParam("airport") String airport, @RequestParam("date") String date){
        return queryService.findDelayReason(airport, date);
    }

    @RequestMapping("insight/queryDelayWeather")
    public List<Pair<String,Double>> queryDelayWeather(@RequestParam("airport") String airport, @RequestParam("desc") String desc){
        return queryService.findDelayByWeather(airport, desc);
    }
}
