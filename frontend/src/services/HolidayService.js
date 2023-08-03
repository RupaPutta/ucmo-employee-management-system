import axios from 'axios';

const HOLIDAY_API_BASE_URL = "http://localhost:8080/api/v1/holidays";

class HolidayService {

    getHolidays(){
        return axios.get(HOLIDAY_API_BASE_URL);
    }

    createHoliday(holiday){
        return axios.post(HOLIDAY_API_BASE_URL, holiday);
    }

    getHolidayById(holidayId){
        return axios.get(HOLIDAY_API_BASE_URL + '/' + holidayId);
    }

    deleteHoliday(holidayId){
        return axios.delete(HOLIDAY_API_BASE_URL + '/' + holidayId);
    }
}

export default new HolidayService()