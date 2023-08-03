package edu.ucmo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.lang.Double.*;

@Service
public class ClockingService {

    @Autowired
    CheckInCheckOutRepository checkInCheckOutRepository;

    //Assuming an hourly rate of $10
    private static final double HOURLY_RATE = 10.0;

    public CheckInCheckOut calculateTotalSalary(CheckInCheckOut checkInCheckOut) {
        String checkInTime = checkInCheckOut.getCheckInTime();
        String checkOutTime = checkInCheckOut.getCheckOutTime();

        // Calculate the total hours worked
        double hoursWorked = parseDouble(checkOutTime) - parseDouble(checkInTime);

        // Calculate the total salary based on hourly rate
        double totalSalary = HOURLY_RATE * hoursWorked;

        checkInCheckOut.setTotalSalary(String.valueOf(totalSalary));

        return checkInCheckOutRepository.save(checkInCheckOut);
    }
}
