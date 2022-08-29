package entities;

import java.sql.SQLOutput;
import java.util.ArrayList;

public class Cliente {

    private String nome;
    private Endereco endereco;
    private String cpf;

    //Construtor

    public Cliente(String nome, Endereco endereco, String cpf) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    //Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    //public String gerarPedido (ArrayList item, ArrayList qtdItem) {

//        ArrayList item = ["Cataflan", "Dipirona"];
//        ArrayList qtdItem = [5, 2];
//        for(int i; i <= item.length; i++){
//        System.out.println("Item: " + item[0] + "Quantidade: " + qtdItem[0]);
//      }
//    }

    @Override
    public String toString() {
        return "Cliente{" +
                "nome='" + nome + '\'' +
                ", endereco=" + endereco +
                ", cpf='" + cpf + '\'' +
                '}';
    }
}
