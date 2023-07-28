package com.iamneo.security.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.SignupModel;
import com.iamneo.security.repository.SignupRepo;
@Service
public class SignupService {
	@Autowired 
	SignupRepo siRepo; 
	
	public SignupModel saveDetails(SignupModel e) {
		return siRepo.save(e);
	}
	public List <SignupModel>getDetails()

{
		return siRepo.findAll();
		
}
	public SignupModel UpdateDetails(SignupModel e1)
	{
		return siRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails (int id)
	{		
	
	    siRepo.deleteById(id);	
	
	}
}


