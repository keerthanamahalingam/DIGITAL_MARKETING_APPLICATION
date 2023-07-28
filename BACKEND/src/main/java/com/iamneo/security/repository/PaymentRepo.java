package com.iamneo.security.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.PaymentModel;
public interface PaymentRepo extends JpaRepository<PaymentModel,Integer>{

}


