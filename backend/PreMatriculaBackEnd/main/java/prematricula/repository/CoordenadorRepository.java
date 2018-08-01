package prematricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import prematricula.entity.Coordenador;

@Repository
public interface CoordenadorRepository extends JpaRepository<Coordenador, String>{

}
