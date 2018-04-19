package climate;

public class Airlines {


    public String Airlines;
    public String Airline_IATA_CODE;
    Airlines(){

    };
    public void setName(String s){
        this.Airlines =s;
    };
    public void setIATACODE(String s){

        this.Airline_IATA_CODE =s;
    };
    public String getAirlines() {
        return Airlines;
    }

    public String getAirline_IATA_CODE() {
        return Airline_IATA_CODE;
    }
}
