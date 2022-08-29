
import java.io.PrintStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import org.apache.log4j.Logger;
import org.h2.jdbc.JdbcSQLIntegrityConstraintViolationException;

public class Main {
    private static final String sqlCreateTable = "DROP TABLE IF EXISTS Funcionários; CREATE TABLE Funcionários ( ID INT PRIMARY KEY, Nome VARCHAR(100) NOT NULL,  Sobrenome VARCHAR(100) NOT NULL,  Idade INT NOT NULL,  Cargo VARCHAR(100) NOT NULL)";
    private static final String sqlUpdate = "UPDATE Funcionários SET Idade = 24, Cargo = 'Engenheira de Software Pl.' WHERE ID = 2";
    private static final String sqlDelete = "DELETE FROM Funcionários WHERE ID=1";
    private static final String sqlDelete2 = "DELETE FROM Funcionários WHERE Nome LIKE 'André%'";
    private static final Logger logger = Logger.getLogger(Main.class);

    public Main() {
    }

    public static void main(String[] args) throws Exception {
        String sqlInsert1 = "INSERT INTO Funcionários (ID, Nome, Sobrenome, Idade, Cargo) VALUES (1, 'João', 'Marcos', 30, 'Engenheiro de Automação')";
        String sqlInsert2 = "INSERT INTO Funcionários (ID, Nome, Sobrenome, Idade, Cargo) VALUES (2, 'Rafaela', 'Leite', 23, 'Engenheira de Software Jr.')";
        String sqlInsert3 = "INSERT INTO Funcionários (ID, Nome, Sobrenome, Idade, Cargo) VALUES (3, 'Maria', 'Eduarda', 25, 'Project manager')";
        String sqlInsert4 = "INSERT INTO Funcionários (ID, Nome, Sobrenome, Idade, Cargo) VALUES (4, 'André', 'Mazzaropi', 45, 'Gerente de P&D')";
        ArrayList<String> lista = new ArrayList();
        lista.add(sqlInsert1);
        lista.add(sqlInsert2);
        lista.add(sqlInsert3);
        lista.add(sqlInsert4);
        Connection connection = null;

        try {
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute("DROP TABLE IF EXISTS Funcionários; CREATE TABLE Funcionários ( ID INT PRIMARY KEY, Nome VARCHAR(100) NOT NULL,  Sobrenome VARCHAR(100) NOT NULL,  Idade INT NOT NULL,  Cargo VARCHAR(100) NOT NULL)");
            logger.info("Tabela criada");
            inserindoDados(lista);
            selectAll(connection);
            logger.info("Tabela Atualizada");
            statement.execute("UPDATE Funcionários SET Idade = 24, Cargo = 'Engenheira de Software Pl.' WHERE ID = 2");
            logger.info("Update de Idade e Cargo do Funcionário 3:UPDATE Funcionários SET Idade = 24, Cargo = 'Engenheira de Software Pl.' WHERE ID = 2");
            statement.execute("DELETE FROM Funcionários WHERE ID=1");
            logger.info("Funcionario 1 deletado");
            statement.execute("DELETE FROM Funcionários WHERE Nome LIKE 'André%'");
            logger.info("Funcionario 2 deletado");
            selectAll(connection);
        } catch (Exception var11) {
            logger.error("Erro gerado no sistema");
            var11.printStackTrace();
        } finally {
            if (connection != null) {
                connection.close();
            }

        }

    }

    public static void inserindoDados(ArrayList<String> lista) throws Exception {
        Connection connection1 = getConnection();
        Statement statement1 = connection1.createStatement();
        lista.forEach((str) -> {
            try {
                statement1.execute(str);
            } catch (JdbcSQLIntegrityConstraintViolationException var3) {
                logger.error("Primary key repetida");
            } catch (Exception var4) {
                logger.error("Erro gerado no sistema");
            }

        });
    }

    public static void selectAll(Connection connection) throws SQLException {
        String sqlQuery = "SELECT * FROM Funcionários";
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery(sqlQuery);
        logger.info("Acessando tabela: " + sqlQuery);

        while(resultSet.next()) {
            PrintStream var10000 = System.out;
            int var10001 = resultSet.getInt(1);
            var10000.println("" + var10001 + " - " + resultSet.getString(2) + " - " + resultSet.getString(3) + " - " + resultSet.getInt(4) + " - " + resultSet.getString(5));
        }

        System.out.println("------------Execução Finalizada--------------");
    }

    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
    }
}
