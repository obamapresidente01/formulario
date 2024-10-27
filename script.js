// Função para formatar o nome
function formatarNome(campo) {
    let nomeFormatado = campo.value
      .toLowerCase()
      .split(' ')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
    campo.value = nomeFormatado;
  }
  
  // Função para calcular idade com base na data de nascimento
  function calcularIdade() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    
    document.getElementById('idade').value = idade;
  }
  
  // Função para aplicar máscara ao CPF
  function mascaraCPF(campo) {
    campo.value = campo.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  
  // Função para aplicar máscara ao telefone
  function mascaraTelefone(campo) {
    campo.value = campo.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  }
  
  // Função para validar o formulário
  function validarFormulario(event) {
    event.preventDefault();
    
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    
    if (senha !== confirmacaoSenha) {
      alert('As senhas não correspondem.');
      return;
    }
    
    const cpf = document.getElementById('cpf').value;
    if (!validarCPF(cpf)) {
      alert('CPF inválido.');
      return;
    }
    
    alert('Formulário enviado com sucesso!');
    // Aqui pode ser adicionada a lógica para enviar o formulário
  }
  
  // Função para validar CPF
  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
  }
  