package com.coppel.crud01;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticuloServiceImp implements ArticuloService{

	@Autowired
	private ArticuloRepository repository;
	
	
	@Override
	public List<Articulo> show() {
		return repository.findAll();
	}

	@Override
	public Articulo showId_articulo(int id_articulo) {
		throw new UnsupportedOperationException("Not supported yet...");
	}

	@Override
	public Articulo add(Articulo q) {
		throw new UnsupportedOperationException("Not supported yet...");
	}

	@Override
	public Articulo edit(Articulo q) {
		throw new UnsupportedOperationException("Not supported yet...");
	}

	@Override
	public Articulo delete(int id_articulo) {
		throw new UnsupportedOperationException("Not supported yet...");
	}

}
