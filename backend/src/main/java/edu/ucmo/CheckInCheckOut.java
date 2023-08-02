package edu.ucmo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "checkincheckout")
public class CheckInCheckOut {

    @Id
    private String checkInCheckOutId;

    private String employeeId;

    private String checkInTime;

    private String checkOutTime;

    private String clockInLocation;

    private String clockOutLocation;

    public CheckInCheckOut() {
    }

    public String getCheckInCheckOutId() {
        return checkInCheckOutId;
    }

    public void setCheckInCheckOutId(String checkInCheckOutId) {
        this.checkInCheckOutId = checkInCheckOutId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(String checkInTime) {
        this.checkInTime = checkInTime;
    }

    public String getCheckOutTime() {
        return checkOutTime;
    }

    public void setCheckOutTime(String checkOutTime) {
        this.checkOutTime = checkOutTime;
    }

    public String getClockInLocation() {
        return clockInLocation;
    }

    public void setClockInLocation(String clockInLocation) {
        this.clockInLocation = clockInLocation;
    }

    public String getClockOutLocation() {
        return clockOutLocation;
    }

    public void setClockOutLocation(String clockOutLocation) {
        this.clockOutLocation = clockOutLocation;
    }
}
