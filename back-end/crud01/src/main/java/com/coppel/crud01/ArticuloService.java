package com.coppel.crud01;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface ArticuloService {
	List<Articulo>show();
	
	Articulo showId_articulo(int id_articulo);
	Articulo add(Articulo q);
	Articulo edit(Articulo q);
	Articulo delete(int id_articulo);
}
