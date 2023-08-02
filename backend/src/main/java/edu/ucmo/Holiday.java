package edu.ucmo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "holiday")
public class Holiday {

    @Id
    private String holidayId;

    private String name;

    private String date;


    public Holiday() {
    }

    public String getHolidayId() {
        return holidayId;
    }

    public void setHolidayId(String holidayId) {
        this.holidayId = holidayId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
