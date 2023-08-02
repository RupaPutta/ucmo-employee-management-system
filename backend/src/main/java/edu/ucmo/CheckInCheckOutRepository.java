package edu.ucmo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CheckInCheckOutRepository extends MongoRepository<CheckInCheckOut, String>  {
}
