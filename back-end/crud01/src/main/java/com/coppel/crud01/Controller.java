package com.coppel.crud01;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/querys"})
public class Controller {
	
	@Autowired
	ArticuloService service;
	
	@GetMapping
	public List<Articulo>show(){
		return service.show();
	}
}
