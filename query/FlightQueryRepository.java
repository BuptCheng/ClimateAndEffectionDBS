package climate.query;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface FlightQueryRepository extends CrudRepository<FlightTime, FlightTimeId> {

    // query for the flight with a duration
    @Query("select f.flightTimeId.airline, min(f.airTime) from FlightTime f " +
            "where f.flightTimeId.originAirport = ?1 and f.destAirport = ?2 group by f.flightTimeId.airline")
    List<Object[]> findByDuration(String origin, String dest);

    /**
     *  query insights
     */
    @Query("select f.flightTimeId.airline, count(f) from FlightTime f " +
            "where f.depDelay is not null and f.depDelay > 10 and f.flightTimeId.originAirport = ?1 and f.flightTimeId.date = ?2 group by f.flightTimeId.airline")
    List<Object[]> findDelay(String airport, Date date);

    @Query("select f.flightTimeId.airline, count(f) from FlightTime f " +
            "where f.flightTimeId.originAirport = ?1 and f.flightTimeId.date = ?2 group by f.flightTimeId.airline")
    List<Object[]> findAllFlightByAirport(String airport, Date date);

}
