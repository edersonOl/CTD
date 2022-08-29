public class Serie implements ISerie{

    private String nome;
    private String link;

    //Constructors
    public Serie (){}
    public Serie(String nome) {
        this.nome = nome;
    }

    //Getters e Setters
    public String getNome() {
        return nome;
    }

    public String getLink() {
        return link;
    }

    //Método implementado na interface Iserie
    @Override
    public String getSerie(String nomeSerie) {
        this.link = "www." + nomeSerie + ".com";
        return this.link;
    }

    @Override
    public String toString() {
        return "Serie{" +
                "nome='" + nome + '\'' +
                ", link='" + link + '\'' +
                '}';
    }
}
