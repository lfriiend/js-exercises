function maskify(str) {
  // Converte qualquer valor para string
  str = String(str);
  
  // Se o comprimento da string for menor ou igual a 4, retorna a string original
  if (str.length <= 4) return str;
  
  // Cria a máscara e retorna
  return "#".repeat(str.length - 4) + str.slice(-4);
}

console.log(maskify(4556364607935616)); // ############5616
console.log(maskify(1234));             // 1234
console.log(maskify("Skippy"));         // ##ippy
console.log(maskify(true));             // t### 