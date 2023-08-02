package edu.ucmo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HolidayController {

    @Autowired
    HolidayRepository holidayRepository;

    @PostMapping("/holidays")
    public Holiday createHoliday(@RequestBody Holiday holiday) {
        return holidayRepository.save(holiday);
    }

    @GetMapping("/holidays/{id}")
    public ResponseEntity<Holiday> getHolidayById(@PathVariable String id) {
        Holiday holiday = holidayRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Holiday not exist with id :" + id));
        return ResponseEntity.ok(holiday);
    }

    @DeleteMapping("/holidays/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteHoliday(@PathVariable String id) {
        Holiday holiday = holidayRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Holiday not exist with id :" + id));
        holidayRepository.delete(holiday);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
