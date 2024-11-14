const exibeMensagemVar = () => {
    var msgForaIf = 'Brasil';

    if (true) {
        var msgDentroIf = 'Argentina';
        console.log(msgDentroIf);
    }

    console.log(msgForaIf + ' - ' + msgDentroIf);
}

exibeMensagemVar();

const exibeMensagemLet = () => {
    let msgForaIf = 'Brasil';

    if (true) {
        let msgDentroIf = 'Argentina';
        console.log(msgDentroIf);
    }

    console.log(msgForaIf + ' - ' + msgDentroIf);
}

exibeMensagemLet();