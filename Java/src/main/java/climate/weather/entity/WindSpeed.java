package climate.weather.entity;
import javax.persistence.*;

@Entity
@Table(name = "Wind_speed")
public class WindSpeed {
    @Id
    @Column(name="Wid")
    private long wid;
    @Column(name="wind_Speed")
    private int windSpeed;

    public WindSpeed(int wid, int windSpeed) {
        this.wid = wid;
        this.windSpeed = windSpeed;
    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public int getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(int windSpeed) {
        this.windSpeed = windSpeed;
    }
}
