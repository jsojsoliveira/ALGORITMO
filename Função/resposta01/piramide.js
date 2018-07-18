function piramide(numero) {
    let resposta = '';
    if (!isNaN(numero)) {
        for (let i = 1; i <= numero; i++) {
            for (let j = 1; j <= i; j++) {
                resposta += i + ' '; //(resposta *= i + ' ') => resposta = resposta + i + ' ';
            }
          //  resposta += '\n';
        }
        /*for (let linha = 1; linha <= numero; linha++) {
            for (let coluna = 1; coluna <= linha; coluna++) {
                resposta += linha + ' '; //resposta = resposta + i + ' ';
            }*/
            resposta += '\n';

        return resposta;
    }
    return -1;
}
