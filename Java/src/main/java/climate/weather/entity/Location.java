package climate.weather.entity;
import javax.persistence.*;

//example : 23 Miami 25.774269 -80.193657
@Entity
@Table(name = "Location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="LOCATION_ID")
    private int locationId;
    @Column(name = "city_name")
    private String cityName;
    @Column(name="latitude")
    private float latitude;
    @Column(name="longitude")
    private float longitude;

    public Location() {
    }

    public Location(int location_id, String cityname, float latitude, float longtitude) {
        this.locationId = location_id;
        this.cityName = cityname;
        this.latitude = latitude;
        this.longitude = longtitude;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }


}
