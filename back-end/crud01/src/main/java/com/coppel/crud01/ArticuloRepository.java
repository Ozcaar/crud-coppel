package com.coppel.crud01;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface ArticuloRepository extends Repository<Articulo, Integer>{

	List<Articulo>findAll();
	List<Articulo>findById(int id_articulo);
	Articulo save(Articulo q);
	void delete(Articulo q);
}
