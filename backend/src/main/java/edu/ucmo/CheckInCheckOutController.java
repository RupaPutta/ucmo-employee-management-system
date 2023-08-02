package edu.ucmo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class CheckInCheckOutController {

    @Autowired
    private CheckInCheckOutRepository checkInCheckOutRepository;

    @GetMapping("/checkInCheckOuts")
    public List<CheckInCheckOut> getAllCheckInCheckOuts() {
        return checkInCheckOutRepository.findAll();
    }

    @PostMapping("/checkInCheckOuts")
    public CheckInCheckOut createCheckInCheckOuts(@RequestBody CheckInCheckOut checkInCheckOut) {
        return checkInCheckOutRepository.save(checkInCheckOut);
    }

    @GetMapping("/checkInCheckOuts/{id}")
    public ResponseEntity<CheckInCheckOut> getCheckInCheckOutById(@PathVariable String id) {
        CheckInCheckOut checkInCheckOut = checkInCheckOutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CheckInCheckOut not exist with id :" + id));
        return ResponseEntity.ok(checkInCheckOut);
    }

    @PutMapping("/checkInCheckOuts/{id}")
    public ResponseEntity<CheckInCheckOut> updateCheckInCheckOut(@PathVariable String id,
                                                                 @RequestBody CheckInCheckOut checkInCheckOutDetails) {
        CheckInCheckOut checkInCheckOut = checkInCheckOutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CheckInCheckOut not exist with id :" + id));
        checkInCheckOut.setEmployeeId(checkInCheckOutDetails.getEmployeeId());
        checkInCheckOut.setCheckInTime(checkInCheckOutDetails.getCheckInTime());
        checkInCheckOut.setCheckOutTime(checkInCheckOutDetails.getCheckOutTime());
        checkInCheckOut.setClockInLocation(checkInCheckOutDetails.getClockInLocation());
        checkInCheckOut.setClockOutLocation(checkInCheckOutDetails.getClockOutLocation());
        CheckInCheckOut updatedCheckInCheckOut = checkInCheckOutRepository.save(checkInCheckOut);
        return ResponseEntity.ok(updatedCheckInCheckOut);
    }

    @DeleteMapping("/checkInCheckOuts/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCheckInCheckOut(@PathVariable String id) {
         CheckInCheckOut checkInCheckOut = checkInCheckOutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CheckInCheckOut not exist with id :" + id));
        checkInCheckOutRepository.delete(checkInCheckOut);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
