package com.iamneo.security.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.LoginModel;
public interface LoginRepo extends JpaRepository<LoginModel,Integer>{

}

