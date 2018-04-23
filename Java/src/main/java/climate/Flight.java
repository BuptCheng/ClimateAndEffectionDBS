package climate;

public class Flight {
    String airline;
    String originAirport;
    String destinationAirport;
    String city;
    String date;
    int flightNumber;
    int schedualDepartureTime;
    int schedualArriveTime;
    int departureDelay;
    int arriveDelay;
    Flight(){ }
    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getOriginAirport() {
        return originAirport;
    }

    public void setOriginAirport(String originAirport) {
        this.originAirport = originAirport;
    }

    public String getDestinationAirport() {
        return destinationAirport;
    }

    public void setDestinationAirport(String destinationAirport) {
        this.destinationAirport = destinationAirport;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(int flightNumber) {
        this.flightNumber = flightNumber;
    }

    public int getSchedualDepartureTime() {
        return schedualDepartureTime;
    }

    public void setSchedualDepartureTime(int schedualDepartureTime) {
        this.schedualDepartureTime = schedualDepartureTime;
    }

    public int getSchedualArriveTime() {
        return schedualArriveTime;
    }

    public void setSchedualArriveTime(int schedualArriveTime) {
        this.schedualArriveTime = schedualArriveTime;
    }

    public int getDepartureDelay() {
        return departureDelay;
    }

    public void setDepartureDelay(int departureDelay) {
        this.departureDelay = departureDelay;
    }

    public int getArriveDelay() {
        return arriveDelay;
    }

    public void setArriveDelay(int arriveDelay) {
        this.arriveDelay = arriveDelay;
    }





}
