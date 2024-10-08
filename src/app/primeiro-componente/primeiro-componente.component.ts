import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

 //Objeto de formulario
 formulario = new FormGroup({
  nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
  idade : new FormControl(null, [Validators.required,Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('',[Validators.required,Validators.minLength(3)]),
  sexo : new FormControl('', [Validators.required]),
  filme: new FormControl('', [Validators.required,Validators.minLength(3)]),
  musica: new FormControl('', [Validators.required, Validators.minLength(3)]),
  academia: new FormControl('', [Validators.required])
 });

 //Visibilidade dos botões

 btnCadastrar: boolean= true;

 //Vetor

 vetor:Pessoa [] = [];

 //Armazenar índice da pessoa selecionada
 indice:number = -1;

 //Função Cadastrar

 cadastrar(){

  // Cadastro no vetor

  this.vetor.push(this.formulario.value as Pessoa);

  //Limpeza dos inputs

  this.formulario.reset();

  //Visualização no console
  //console.table(this.vetor);
 }

 selecionar(indice:number){

  //Atribuir o índice da pessoa.
  this.indice = indice;

  //Atribuir os dados da pessoa no formulario.
  this.formulario.setValue({
    nome: this.vetor[indice].nome,
    idade: this.vetor[indice].idade,
    cidade: this.vetor[indice].cidade,
    sexo: this.vetor[indice].sexo,
    filme: this.vetor[indice].filme,
    musica: this.vetor[indice].musica,
    academia: this.vetor[indice].academia
  });

//Visibilidade dos botões

this.btnCadastrar = false;
 }
 
 //Função de alteração

 alterar(){

  //alterar vetor

  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //Limpar os inputs

  this.formulario.reset();

  //Visibilidade dos botões

  this.btnCadastrar = true;
 }
 remover(){

  //removendo uma pessoa do vetor
  
  this.vetor.splice(this.indice, 1);

  // limpeza dos inputs

  this.formulario.reset();

  //visibilidade dos botão
  
  this.btnCadastrar = true;
 }

 cancelar(){

  // limpeza dos inputs

  this.formulario.reset();

  //visibilidade dos botões

  this.btnCadastrar = true;
 }

}
