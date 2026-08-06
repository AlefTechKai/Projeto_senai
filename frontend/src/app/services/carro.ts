import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Marca {
    id?: number;
    nome: string;
}

export interface Modelo {
    id?: number;
    nome: string;
    marca?: Marca;
}

@Injectable({
    providedIn: 'root'
})
export class CarroService {
    private apiMarcas = 'http://localhost:8080/api/marcas';
    private apiModelos = 'http://localhost:8080/api/modelos';

    constructor(private http: HttpClient) {}

    // CRUD Marcas
    getMarcas(): Observable<Marca[]> {
        return this.http.get<Marca[]>(this.apiMarcas);
    }

    adicionarMarca(marca: Marca): Observable<Marca> {
        return this.http.post<Marca>(this.apiMarcas, marca);
    }

    atualizarMarca(id: number, marca: Marca): Observable<Marca> {
        return this.http.put<Marca>(`${this.apiMarcas}/${id}`, marca);
    }

    deletarMarca(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiMarcas}/${id}`);
    }

    // CRUD Modelos
    getModelos(): Observable<Modelo[]> {
        return this.http.get<Modelo[]>(this.apiModelos);
    }

    adicionarModelo(modelo: Modelo): Observable<Modelo> {
        return this.http.post<Modelo>(this.apiModelos, modelo);
    }

    atualizarModelo(id: number, modelo: Modelo): Observable<Modelo> {
        return this.http.put<Modelo>(`${this.apiModelos}/${id}`, modelo);
    }

    deletarModelo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiModelos}/${id}`);
    }
}
