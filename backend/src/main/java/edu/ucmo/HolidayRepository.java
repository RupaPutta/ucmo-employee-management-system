package edu.ucmo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HolidayRepository extends MongoRepository<Holiday, String> {
}
