package edu.ucmo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payroll")
public class Payroll {

    @Id
    private String payrollId;

    private String employeeId;

    private String month;

    private String year;

    private String baseSalary;

    private String overtimeSalary;

    private String overtimeRate;

    private String totalSalary;

    public Payroll() {
    }

    public String getPayrollId() {
        return payrollId;
    }

    public void setPayrollId(String payrollId) {
        this.payrollId = payrollId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(String baseSalary) {
        this.baseSalary = baseSalary;
    }

    public String getOvertimeSalary() {
        return overtimeSalary;
    }

    public void setOvertimeSalary(String overtimeSalary) {
        this.overtimeSalary = overtimeSalary;
    }

    public String getOvertimeRate() {
        return overtimeRate;
    }

    public void setOvertimeRate(String overtimeRate) {
        this.overtimeRate = overtimeRate;
    }

    public String getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(String totalSalary) {
        this.totalSalary = totalSalary;
    }
}
