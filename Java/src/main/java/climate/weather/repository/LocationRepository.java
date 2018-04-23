package climate.weather.repository;
import climate.weather.entity.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@RepositoryRestResource(collectionResourceRel = "/weather/location",path = "/weather/location")
public interface LocationRepository extends CrudRepository<Location, Integer> {


    List<Location> findBycityName(@RequestParam(defaultValue="Gainesville")String city_name);
    List<Location> findBylocationId(@RequestParam(defaultValue= "27")int locationId);



}
