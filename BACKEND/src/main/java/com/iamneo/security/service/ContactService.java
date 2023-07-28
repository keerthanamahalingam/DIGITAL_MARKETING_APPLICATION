package com.iamneo.security.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.ContactModel;
import com.iamneo.security.repository.ContactRepo;
@Service
public class ContactService {
	@Autowired //extends another class
	ContactRepo cRepo; //reference variable
	
	public ContactModel saveDetails(ContactModel c) {
		return cRepo.save(c);
	}
	public List <ContactModel>getDetails()

{
		return cRepo.findAll();
		
}
	public ContactModel UpdateDetails(ContactModel st1)
	{
		return cRepo.saveAndFlush(st1);
	}
	
	public void deleteContact (int id)
	{		
	
	    cRepo.deleteById(id);	
	
	}
}


