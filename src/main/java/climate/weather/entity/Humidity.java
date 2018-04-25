package climate.weather.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Humidity")
public class Humidity {


    @Id
    @Column(name="Wid")
    private long wid;
    @Column(name="humidity")
    private int humidity;

    public Humidity(int wid, int humidity) {
        this.wid = wid;
        this.humidity = humidity;
    }

    public long getWid() {
        return wid;
    }

    public void setWid(long wid) {
        this.wid = wid;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }
}
