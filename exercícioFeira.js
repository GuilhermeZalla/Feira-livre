/*
    Exercício de uma barraca de feira utilizando o switch case

    by Guilherme Zalla

*/
(function() {

    function feiraLivre(fruta = "") {
        switch (fruta.toLowerCase()) {
            case 'maçã':
                console.log("Não vendemos esta fruta aqui.");
                break;
            case 'kiwi':
                console.log("Estamos com escassez de Kiwis.");
                break;
            case 'melancia':
                console.log("Aqui está, são 3 reais o quilo.");
                break;
            default:
                console.log("ERRO");
        }
    }

    feiraLivre('Maçã');
    feiraLivre('Kiwi');
    feiraLivre('MeLaNcIa');
    feiraLivre('Banana');
    feiraLivre('gOiAbA');
})()