import axios from 'axios';

const PAYROLL_API_BASE_URL = "http://localhost:8080/api/v1/payrolls";

class PayrollService {

    getPayrolls(){
        return axios.get(PAYROLL_API_BASE_URL);
    }

    createPayroll(payroll){
        return axios.post(PAYROLL_API_BASE_URL, payroll);
    }

    getPayrollById(payrollId){
        return axios.get(PAYROLL_API_BASE_URL + '/' + payrollId);
    }

    updatePayroll(payroll, payrollId){
        return axios.put(PAYROLL_API_BASE_URL + '/' + payrollId, payroll);
    }

    deletePayroll(payrollId){
        return axios.delete(PAYROLL_API_BASE_URL + '/' + payrollId);
    }
}

export default new PayrollService()