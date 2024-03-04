window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cargo = urlParams.get('cargo');
    const cpf = urlParams.get('cpf');
    const cargoUsuario = urlParams.get('cargoUsuario');
    const codigoAcesso = urlParams.get('codigoAcesso');

    const userInfo = {
        cpf: cpf,
        cargo: cargoUsuario,
        codigoAcesso: codigoAcesso
    };

    const mainDashboard = document.getElementById('mainDashboard');
    const html = `
        <h1>Bem-vindo(a), ${cargo}!</h1>
        <p>CPF: ${userInfo.cpf}</p>
        <p>Cargo: ${userInfo.cargo}</p>
        <p>Código de Acesso: ${userInfo.codigoAcesso}</p>

    `;
    mainDashboard.innerHTML = html;
};