package climate.weather.entity;
import javax.persistence.*;

@Entity
@Table(name = "Weather_Description")
public class WeatherDescription {
    @Id
    @Column(name="Wid")
    private long wid;
    @Column(name="Weather_Description")
    private String WeatherDescription;

    public WeatherDescription(int wid, String weatherDescription) {
        this.wid = wid;
        WeatherDescription = weatherDescription;
    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public String getWeatherDescription() {
        return WeatherDescription;
    }

    public void setWeatherDescription(String weatherDescription) {
        WeatherDescription = weatherDescription;
    }
}
