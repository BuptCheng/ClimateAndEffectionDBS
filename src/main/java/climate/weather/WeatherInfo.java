package climate.weather;
import javax.persistence.*;
import java.math.BigDecimal;



@NamedNativeQuery(
        name="complexQuery",
        query="select ceil(w.wid) as wid, to_char(w.wdate,'yy-mm-dd') as windDate,l.city_name as city,  ceil(h.humidity) as humidity," +
                "             ceil(p.pressure) as pressure, round(t.temperature,2) as temperature, ceil(ws.wind_speed) as windSpeed, wd.description as windDesc from Location l, Weather w, " +
                "                       Humidity h, Pressure p, Temperature t, Weather_Description wd, Wind_Speed ws " +
                "                       where w.wid =h.wid and w.wid=p.wid and w.wid = t.wid and w.wid = wd.wid " +
                "                       and w.wid = ws.wid and w.location_Id = l.location_Id and w.wid = ?1",
        resultClass=WeatherInfo.class
)

@Entity
public class WeatherInfo {
    @Id
    @Column(name="WID")
    private long wid;

    @Column(name="WINDDATE")
    private String date;
    @Column(name="CITY")
    private String city;
    @Column(name="HUMIDITY")
    private BigDecimal humidity;
    @Column(name="PRESSURE")
    private BigDecimal pressure;
    @Column(name="TEMPERATURE")
    private BigDecimal temperature;
    @Column(name="WINDSPEED")
    private BigDecimal windSpeed;
    @Column(name="WINDDESC")
    private String windDesc;
    WeatherInfo(){};
    WeatherInfo(String city, String windDate){
        this.city = city;
        this.date = windDate;
    }
    public WeatherInfo(long wid, String windDate, String city, BigDecimal humidity, BigDecimal pressure, BigDecimal temperature, BigDecimal windSpeed, String windDesc) {
        this.wid = wid;
        this.date = windDate;
        this.city = city;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.windDesc = windDesc;
    }
    public String getWindDate() {
        return date;
    }

    public void setWindDate(String windDate) {
        this.date = windDate;
    }
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public BigDecimal getTemperature() {
        return temperature;
    }

    public void setTemperature(BigDecimal temperature) {
        this.temperature = temperature;
    }

    public BigDecimal getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(BigDecimal windSpeed) {
        this.windSpeed = windSpeed;
    }

    public BigDecimal getHumidity() {
        return humidity;
    }

    public void setHumidity(BigDecimal humidity) {
        this.humidity = humidity;
    }

    public BigDecimal getPressure() {
        return pressure;
    }

    public void setPressure(BigDecimal pressure) {
        this.pressure = pressure;
    }

    public String getWindDesc() {
        return windDesc;
    }

    public void setWindDesc(String windDesc) {
        this.windDesc = windDesc;
    }




}
