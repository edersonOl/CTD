public class SerieProxy implements ISerie {

    private int qtdViews = 0;

    private Serie serie;

    //Constructors
    public SerieProxy() {}

    //Getters e Setters
    public int getQtdViews() {
        return qtdViews;
    }

    public void setQtdViews(int qtdViews) {
        this.qtdViews = qtdViews;
    }

    //Método implementado na interface Iserie
    @Override
    public String getSerie(String nome) throws SerieNaoHabilitadaException {
        Serie serie = new Serie();
        setQtdViews(getQtdViews() + 1);
        if (getQtdViews() <= 5) {
            return serie.getSerie(nome) + " Quantidade de exibição desta série: " + getQtdViews();
        } else {
            throw new SerieNaoHabilitadaException("Série não disponível! Excedeu a quantidade de vezes!");
        }
    }

    @Override
    public String toString() {
        return "SerieProxy{" +
                "qtdViews=" + qtdViews +
                ", serie=" + serie +
                '}';
    }
}
