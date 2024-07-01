package Service;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

@Service
public class JogoNumeroSecretoService {

    private static final int NUMERO_LIMITE = 10;
    private final Set<Integer> numerosSorteados = new HashSet<>();
    private int numeroSecreto;
    private int tentativas;

    public JogoNumeroSecretoService() {
        iniciarJogo();
    }

    public void iniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
    }

    public int getNumeroSecreto() {
        return numeroSecreto;
    }

    public int getTentativas() {
        return tentativas;
    }

    public void incrementarTentativas() {
        this.tentativas++;
    }

    private int gerarNumeroAleatorio() {
        Random random = new Random();
        int numeroEscolhido;

        do {
            numeroEscolhido = random.nextInt(NUMERO_LIMITE) + 1;
        } while (numerosSorteados.contains(numeroEscolhido));

        numerosSorteados.add(numeroEscolhido);

        if (numerosSorteados.size() == NUMERO_LIMITE) {
            numerosSorteados.clear();
        }

        return numeroEscolhido;
    }
}

