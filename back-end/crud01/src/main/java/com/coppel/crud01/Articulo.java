package com.coppel.crud01;

import jakarta.persistence.*;

@Entity
@Table(name = "articulo")
public class Articulo {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_articulo;
	@Column
	private int sku;
	@Column
	private String nombre;
	@Column
	private String marca;
	@Column
	private String modelo;
	@Column
	private int departamento;
	@Column
	private int clase;
	@Column
	private int familia;
	@Column
	private String fecha_alta;
	@Column
	private int stock;
	@Column
	private int cantidad;
	@Column
	private int descontinuado;
	@Column
	private String fecha_baja;
	
	
	public int getId_articulo() {
		return id_articulo;
	}
	
	public void setId_articulo(int id_articulo) {
		this.id_articulo = id_articulo;
	}
	
	public int getSku() {
		return sku;
	}
	
	public void setSku(int sku) {
		this.sku = sku;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getMarca() {
		return marca;
	}
	
	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public String getModelo() {
		return modelo;
	}
	
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public int getDepartamento() {
		return departamento;
	}
	
	public void setDepartamento(int departamento) {
		this.departamento = departamento;
	}
	
	public int getClase() {
		return clase;
	}
	
	public void setClase(int clase) {
		this.clase = clase;
	}
	
	public int getFamilia() {
		return familia;
	}
	
	public void setFamilia(int familia) {
		this.familia = familia;
	}
	
	public String getFecha_alta() {
		return fecha_alta;
	}
	
	public void setFecha_alta(String fecha_alta) {
		this.fecha_alta = fecha_alta;
	}
	
	public int getStock() {
		return stock;
	}
	
	public void setStock(int stock) {
		this.stock = stock;
	}
	
	public int getCantidad() {
		return cantidad;
	}
	
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	public int getDescontinuado() {
		return descontinuado;
	}
	
	public void setDescontinuado(int descontinuado) {
		this.descontinuado = descontinuado;
	}
	
	public String getFecha_baja() {
		return fecha_baja;
	}
	
	public void setFecha_baja(String fecha_baja) {
		this.fecha_baja = fecha_baja;
	}
}
