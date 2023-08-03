package edu.ucmo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.lang.Double.*;

@Service
public class PayrollService {
    @Autowired
    PayrollRepository payrollRepository;

    public Payroll calculateTotalSalary(Payroll payroll) {
        double totalSalary = parseDouble(payroll.getBaseSalary())
                + (parseDouble(payroll.getOvertimeSalary())
                * parseDouble(payroll.getOvertimeRate()));
        payroll.setTotalSalary(String.valueOf(totalSalary));
        return payrollRepository.save(payroll);
    }
}
