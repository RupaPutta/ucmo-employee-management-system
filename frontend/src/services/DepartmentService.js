import axios from 'axios';

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/api/v1/departments";

class DepartmentService {

    getDepartments(){
        return axios.get(DEPARTMENT_API_BASE_URL);
    }

    createDepartment(department){
        return axios.post(DEPARTMENT_API_BASE_URL, department);
    }

    getDepartmentById(departmentId){
        return axios.get(DEPARTMENT_API_BASE_URL + '/' + departmentId);
    }

    updateDepartment(department, departmentId){
        return axios.put(DEPARTMENT_API_BASE_URL + '/' + departmentId, department);
    }

    deleteDepartment(departmentId){
        return axios.delete(DEPARTMENT_API_BASE_URL + '/' + departmentId);
    }
}

export default new DepartmentService()