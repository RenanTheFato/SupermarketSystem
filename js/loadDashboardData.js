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

    const dashboardRole = document.getElementById('dashboardRole');
    const roleHtml = `<h1>Bem-vindo(a), ${cargo}!</h1> `;
    
    dashboardRole.innerHTML = roleHtml;

    const dashboardCPF = document.getElementById('dashboardCPF');
    const CPFHtml = `<p>CPF: ${userInfo.cpf}</p> `;
    
    dashboardCPF.innerHTML = CPFHtml;

    const dashboardRole2 = document.getElementById('dashboardRole2');
    const dashboardRole2Html = `<p>Cargo: ${userInfo.cargo}</p>`;
    
    dashboardRole2.innerHTML = dashboardRole2Html;

    const dashboardCode = document.getElementById('dashboardCode');
    const CodeHtml = `<p>Código de Acesso: ${userInfo.codigoAcesso}</p> `;
    
    dashboardCode.innerHTML = CodeHtml;


//Styles
const dashboardTab = document.getElementsByClassName("dashboardTab")[0];
if (cargoUsuario == "Gerente") {
    dashboardTab.style.backgroundColor = "#21222A";
} else if (cargoUsuario == "Fornecedor") {
    dashboardTab.style.backgroundColor = "#306569";
} else if (cargoUsuario == "Func-Admin") {
    dashboardTab.style.backgroundColor = "#3b7db3";
} else if (cargoUsuario == "Func-Caixa") {
    dashboardTab.style.backgroundColor = "#8ed2ec";
}


};