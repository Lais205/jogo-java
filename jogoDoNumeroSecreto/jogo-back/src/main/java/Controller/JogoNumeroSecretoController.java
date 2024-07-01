package Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Service.JogoNumeroSecretoService;
import dto.ChuteRequest;
import dto.ChuteResponse;

@RestController
@RequestMapping("/api")
public class JogoNumeroSecretoController {

    @Autowired
    private JogoNumeroSecretoService jogoNumeroSecretoService;

    @GetMapping("/inicio")
    public String iniciar() {
        jogoNumeroSecretoService.iniciarJogo();
        return "Jogo do Número Secreto iniciado. Escolha um número entre 1 e " + 10;
    }

    @PostMapping("/chutar")
    public ChuteResponse chutar(@RequestBody ChuteRequest chuteRequest) {
        ChuteResponse response = new ChuteResponse();
        int chute = chuteRequest.getChute();
        jogoNumeroSecretoService.incrementarTentativas();

        if (chute == jogoNumeroSecretoService.getNumeroSecreto()) {
            response.setMensagem("Você acertou!");
            response.setAcertou(true);
            response.setTentativas(jogoNumeroSecretoService.getTentativas());
            jogoNumeroSecretoService.iniciarJogo(); // Reinicia o jogo após acertar
        } else if (chute > jogoNumeroSecretoService.getNumeroSecreto()) {
            response.setMensagem("O número secreto é menor");
            response.setAcertou(false);
        } else {
            response.setMensagem("O número secreto é maior");
            response.setAcertou(false);
        }
        return response;
    }
}