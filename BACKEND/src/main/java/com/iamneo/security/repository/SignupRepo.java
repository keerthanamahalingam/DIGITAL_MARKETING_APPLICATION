package com.iamneo.security.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.SignupModel;
public interface SignupRepo extends JpaRepository<SignupModel,Integer>{

}

