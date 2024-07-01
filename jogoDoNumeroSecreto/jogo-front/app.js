function resetGame() {
    fetch('/api/inicio')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data;
            document.getElementById('reset').disabled = true;
        });
}

function sendGuess() {
    const guess = document.getElementById('guess').value;
    const data = { chute: guess };

    fetch('/api/chutar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.mensagem;
        if (data.acertou) {
            document.getElementById('reset').disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', resetGame);