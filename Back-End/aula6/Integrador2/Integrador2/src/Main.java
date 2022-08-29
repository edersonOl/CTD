public class Main {

    public static void main(String[] args) throws SerieNaoHabilitadaException {

        ISerie serie1_supernatural = new SerieProxy();
        ISerie serie2_friends = new SerieProxy ();
        ISerie serie3_peakyBlinders = new SerieProxy ();
        ISerie serie4_gameOfThrones = new SerieProxy ();
        ISerie serie5_sherlock = new SerieProxy ();

        try {
            for (int i = 0; i <= 1; i++) {
                System.out.println(serie1_supernatural.getSerie("Supernatural"));
            }
            for (int i = 0; i <= 2; i++) {
                System.out.println(serie2_friends.getSerie("Friends"));
            }
            for (int i = 0; i <= 3; i++) {
                System.out.println(serie3_peakyBlinders.getSerie("Peaky Blinders"));
            }
            for (int i = 0; i <= 4; i++) {
                System.out.println(serie4_gameOfThrones.getSerie("Game Of Thrones"));
            }
            for (int i = 0; i <= 5; i++) {
                System.out.println(serie5_sherlock.getSerie("Sherlock"));
            }
        }catch (SerieNaoHabilitadaException exception){
            System.out.println(exception);
        }
}}
