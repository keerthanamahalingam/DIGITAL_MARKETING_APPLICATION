package com.iamneo.security.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.LoginModel;
import com.iamneo.security.repository.LoginRepo;
@Service
public class LoginService {
	@Autowired 
	LoginRepo stRepo; 
	
	public LoginModel saveDetails(LoginModel st) {
		return stRepo.save(st);
	}
	public List <LoginModel>getDetails()    

{
		return stRepo.findAll();
		
}
	public LoginModel UpdateDetails(LoginModel e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteLogin (int id)
	{		
	
	    stRepo.deleteById(id);	
	
	}
}
