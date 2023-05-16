function isValidCpf(cpf) {
    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    let sum = 0;
    let mod;
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf[i - 1]) * (11 - i);
    }
  
    mod = (sum * 10) % 11;
    if (mod === 10 || mod === 11) {
      mod = 0;
    }
  
    if (mod !== parseInt(cpf[9])) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf[i - 1]) * (12 - i);
    }
  
    mod = (sum * 10) % 11;
    if (mod === 10 || mod === 11) {
      mod = 0;
    }
  
    if (mod !== parseInt(cpf[10])) {
      return false;
    }
  
    return true;
  }
  