import axios from 'axios';

const CLOCK_API_BASE_URL = "http://localhost:8080/api/v1/checkInCheckOuts";

class ClockService {

    getCheckInCheckOuts(){
        return axios.get(CLOCK_API_BASE_URL);
    }

    createCheckInCheckOut(checkInCheckOut){
        return axios.post(CLOCK_API_BASE_URL, checkInCheckOut);
    }

    getCheckInCheckOutById(checkInCheckOutId){
        return axios.get(CLOCK_API_BASE_URL + '/' + checkInCheckOutId);
    }

    updateCheckInCheckOut(checkInCheckOut, checkInCheckOutId){
        return axios.put(CLOCK_API_BASE_URL + '/' + checkInCheckOutId, checkInCheckOut);
    }

    deleteCheckInCheckOut(checkInCheckOutId){
        return axios.delete(CLOCK_API_BASE_URL + '/' + checkInCheckOutId);
    }
}

export default new ClockService()