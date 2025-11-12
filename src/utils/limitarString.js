function limitarString(texto, limite = 50) {
  if (texto.length <= limite) {
    return texto;
  }
  
  return texto.substring(0, limite) + "...";
}

export default limitarString;