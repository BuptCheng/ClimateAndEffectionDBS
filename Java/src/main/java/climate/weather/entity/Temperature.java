package climate.weather.entity;
import javax.persistence.*;


@Entity
@Table(name = "Temperature")
public class Temperature {
    @Id
    @Column(name="Wid")
    private long wid;
    @Column(name="temperature")
    private float temperature;

    public Temperature(int wid, float temperature) {
        this.wid = wid;
        this.temperature = temperature;
    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public float getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }
}
