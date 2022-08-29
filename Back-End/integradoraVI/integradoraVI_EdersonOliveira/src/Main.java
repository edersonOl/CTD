import java.awt.*;
import java.io.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Funcionario> funcionarios = new ArrayList<>();

        Funcionario funcionario_1 = new Funcionario("João","Leopoldo", "78091090-1",1000);
        Funcionario funcionario_2 = new Funcionario("Maria","Laura", "77056090-1",7000);
        Funcionario funcionario_3 = new Funcionario("Alexandre","Silva", "35056090-1",2000);
        Funcionario funcionario_4 = new Funcionario("Alan","Oliveira", "95756090-1",10000);

        funcionarios.add(funcionario_1);
        funcionarios.add(funcionario_2);
        funcionarios.add(funcionario_3);
        funcionarios.add(funcionario_4);

        try {
            FileOutputStream fileOutputStream = new FileOutputStream("OutputIntegradoraVI.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);

            objectOutputStream.writeObject(funcionarios);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        ArrayList <Funcionario> listaFuncionarios = null;
        try {
            FileInputStream fileInputStream = new FileInputStream("OutputIntegradoraVI.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);

            listaFuncionarios = (ArrayList<Funcionario>) objectInputStream.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Funcionario e: listaFuncionarios) {
            System.out.println("NOME: "+ e.getNome()+"; SOBRENOME: "+ e.getSobreNome()+"; RG: "+e.getDocumento()+"; CPF: "+e.getSalario()+"; SALÁRIO: "+e.getSalario());
        }
    }
}
