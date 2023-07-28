package com.iamneo.security.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.ContactModel;
public interface ContactRepo extends JpaRepository<ContactModel,Integer>{

}

