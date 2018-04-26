package climate.weather.entity;

import javax.persistence.*;

@Entity
@Table(name = "Weather")
public class Weather {
    @Id
    @Column(name="WID")
    private long wid;
    @Column(name="WDATE")
    private String wdate;
    @Column(name="LOCATION_ID")
    private  int locationId;
    /*
    @OneToOne
    @JoinColumn(name ="location_Id", insertable = false, updatable = false)
    public Location location;
    @OneToOne
    @JoinColumn(name ="wid")
    public Humidity humidity;
    @OneToOne
    @JoinColumn(name ="wid")
    public Pressure pressure;
    @OneToOne
    @JoinColumn(name ="wid")
    public Temperature  temperature;
    @OneToOne
    @JoinColumn(name ="wid")
    public WeatherDescription weatherDescription;
    @OneToOne
    @JoinColumn(name ="wid")
    public WindSpeed windSpeed ;

     Weather(long wid, String wdate, int locationId, Location location, Humidity humidity, Pressure pressure, Temperature temperature, WeatherDescription weatherDescription, WindSpeed windSpeed) {
        this.wid = wid;
        this.wdate = wdate;
        this.locationId = locationId;
        this.location = location;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.weatherDescription = weatherDescription;
        this.windSpeed = windSpeed;
    }
    */


    Weather( String wdate,long wid, int locationId) {
        this.wid = wid;
        this.wdate = wdate;
        this.locationId = locationId;
    }
    Weather() {

    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public String getWdate() {
        return wdate;
    }

    public void setWdate(String wdate) {
        this.wdate = wdate;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }
}
