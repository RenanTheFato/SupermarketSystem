const cpfInput = document.getElementById("cpfValidateInput")

// Função para formatar o CPF para melhor visualização do usuário
function formatarCPF() {
    const cpf = cpfInput.value.replace(/\D/g, '');
    
    if (cpf.length === 11) {
        cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
    cpfInput.value = cpf;
}
}

// Função para retirar a formatação do CPF para realizar verificações e permissões de acesso
function obterNumerosCPF() {
    const cpf = cpfInput.value.replace(/\D/g, '');
    return cpf;
}



const roleSelected = document.getElementById("roleValidateInput")
var roleValidate = ''


roleSelected.addEventListener('change', function () {
    if (roleSelected.value == "tree1") {
      roleValidate = 'Gerente'
    }
		else if (roleSelected.value == "tree2") {
			roleValidate = 'Fornecedor'
		}
		else if (roleSelected.value == "tree3") {
			roleValidate = 'FuncAdmin'
		}
		else if(roleSelected.value == "tree4"){
			roleValidate = 'FuncCaixa'	
		}
})

const acessCode = document.getElementById("codeValidateInput")


const gerentes = {
  gerente1: {
    cpf: '11111111111',
		cargo: 'Gerente',
    codigoAcesso: '0101'
  },
  gerente2: {
    cpf: '98765432109',
		cargo: 'Gerente',
    codigoAcesso: '0202'
  }
};

const fornecedores = {
	fornecedor1:{
		cpf: '33333333333',
		cargo: 'Fornecedor',
		codigoAcesso: '0303'
	}
};

const funcAdmin = {
	funcAdmin1:{
		cpf: '44444444444',
		cargo: 'Func-Admin',
		codigoAcesso: '0404'
	}
};

const funcCaixa = {
	funcCaixa1:{
		cpf: '55555555555',
		cargo: 'Func-Caixa',
		codigoAcesso: '0505'
	}
};

function sendForm() {
	const cpfNumeros = obterNumerosCPF();
	var authenticator = false;
	var userData = []

	// Verificação Gerentes
	if (roleValidate == "Gerente") {
		if ((cpfNumeros == gerentes.gerente1.cpf && acessCode.value == gerentes.gerente1.codigoAcesso)) {
				authenticator = true;
				userData = gerentes.gerente1;
		} else if ((cpfNumeros == gerentes.gerente2.cpf && acessCode.value == gerentes.gerente2.codigoAcesso)) {
				authenticator = true;
				userData = gerentes.gerente2;
		}
}

	// Verificação Fornecedores
	else if (roleValidate == "Fornecedor") {
			if (cpfNumeros == fornecedores.fornecedor1.cpf && acessCode.value == fornecedores.fornecedor1.codigoAcesso) {
					authenticator = true;
					userData = fornecedores.fornecedor1
			}
	}

	// Verificação Funcionários Administração
	else if (roleValidate == "FuncAdmin") {
			if (cpfNumeros == funcAdmin.funcAdmin1.cpf && acessCode.value == funcAdmin.funcAdmin1.codigoAcesso) {
					authenticator = true;
					userData = funcAdmin.funcAdmin1
			}
	}

	// Verificação Funcionários Caixa
	else if (roleValidate == "FuncCaixa") {
			if (cpfNumeros == funcCaixa.funcCaixa1.cpf && acessCode.value == funcCaixa.funcCaixa1.codigoAcesso) {
					authenticator = true;
					userData = funcCaixa.funcCaixa1
			}
	}

	// Redirecionamento com base na autenticação
	if (authenticator) {
			if (roleValidate == "Gerente") {
					 window.location.href = 'dashboard.html?cargo=' + roleValidate + '&cpf=' + userData.cpf + '&cargoUsuario=' + userData.cargo + '&codigoAcesso=' + userData.codigoAcesso; 
			} else if (roleValidate == "Fornecedor") {
					 window.location.href = 'dashboard.html?cargo=' + roleValidate + '&cpf=' + userData.cpf + '&cargoUsuario=' + userData.cargo + '&codigoAcesso=' + userData.codigoAcesso;
			} else if (roleValidate == "FuncAdmin") {
					 window.location.href = 'dashboard.html?cargo=' + roleValidate + '&cpf=' + userData.cpf + '&cargoUsuario=' + userData.cargo + '&codigoAcesso=' + userData.codigoAcesso;
			} else if (roleValidate == "FuncCaixa") {
					 window.location.href = 'dashboard.html?cargo=' + roleValidate + '&cpf=' + userData.cpf + '&cargoUsuario=' + userData.cargo + '&codigoAcesso=' + userData.codigoAcesso;
			}
	} else {
			alert("Login Inválido!");
			window.location.href = 'loginAdmin.html';
	}
}

