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
public class PayrollController {

    @Autowired
    private PayrollRepository payrollRepository;

    @GetMapping("/payrolls")
    public List<Payroll> getAllPayrolls(){
        return payrollRepository.findAll();
    }

    @PostMapping("/payrolls")
    public Payroll createPayroll(@RequestBody Payroll payroll) {
        return payrollRepository.save(payroll);
    }

    @GetMapping("/payrolls/{id}")
    public ResponseEntity<Payroll> getPayrollById(@PathVariable String id) {
        Payroll payroll = payrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payroll not exist with id :" + id));
        return ResponseEntity.ok(payroll);
    }

    @PutMapping("/payrolls/{id}")
    public ResponseEntity<Payroll> updatePayroll(@PathVariable String id, @RequestBody Payroll payrollDetails){
        Payroll payroll = payrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payroll not exist with id :" + id));
        payroll.setEmployeeId(payrollDetails.getEmployeeId());
        payroll.setMonth(payrollDetails.getMonth());
        payroll.setYear(payrollDetails.getYear());
        payroll.setBaseSalary(payrollDetails.getBaseSalary());
        payroll.setOvertimeSalary(payrollDetails.getOvertimeSalary());
        payroll.setTotalSalary(payrollDetails.getTotalSalary());
        Payroll updatedPayroll = payrollRepository.save(payroll);
        return ResponseEntity.ok(updatedPayroll);
    }

    @DeleteMapping("/payrolls/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePayroll(@PathVariable String id){
        Payroll payroll = payrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payroll not exist with id :" + id));
        payrollRepository.delete(payroll);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
