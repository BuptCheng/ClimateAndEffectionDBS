package climate.weather.repository;
import climate.weather.entity.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
public interface HumidityRepository extends CrudRepository<Location, Integer> {


}
