function capitalizeString(texto) {
    if (typeof texto !== 'string') {
      throw new Error('El argumento debe ser una cadena de texto');
    }
  
    return texto.split(' ').map(word => {
      if (word.length === 0) {
        return '';
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  }
  
  module.exports = capitalizeString;
  