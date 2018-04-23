package climate.weather.entity;
import javax.persistence.*;


@Entity
@Table(name = "Pressure")
public class Pressure {
    @Id
    @Column(name="Wid")
    private long wid;
    @Column(name="pressure")
    private int pressure;

    public Pressure(int wid, int pressure) {
        this.wid = wid;
        this.pressure = pressure;
    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public float getPressure() {
        return pressure;
    }

    public void setPressure(int pressure) {
        this.pressure = pressure;
    }
}
