import {
  getDepartments,
  getCommunes,
  getPostalCode,
  getAllData,
  validatePhoneNumber,
  formatPhoneNumber,
} from './src/index';

console.log('--- Test de haiti-utils ---');

console.log('\n1. Obtenir tous les départements:');
const departments = getDepartments();
console.log(departments);

console.log('\n2. Obtenir les communes pour "Ouest":');
const communes = getCommunes('ouest'); // Insensible à la casse
console.log(communes);

console.log('\n3. Obtenir le code postal pour "Pétion-Ville" dans "Ouest":');
const postalCode = getPostalCode('Ouest', 'pétion-ville'); // Insensible à la casse
console.log(`Code Postal: ${postalCode}`);

console.log('\n4. Valider des numéros de téléphone:');
console.log(`Le numéro '+509 34 56 78 90' est valide ? ${validatePhoneNumber('+509 34 56 78 90')}`);
console.log(`Le numéro '12345' est valide ? ${validatePhoneNumber('12345')}`);

console.log('\n5. Formater des numéros de téléphone:');
console.log(`'34567890' formaté (international): ${formatPhoneNumber('34567890')}`);
console.log(`'34567890' formaté (national): ${formatPhoneNumber('34567890', { format: 'national' })}`);
console.log(`'34567890' formaté (compact): ${formatPhoneNumber('34567890', { format: 'compact' })}`);

console.log('\n6. Obtenir toutes les données (exemple du premier département):');
const allData = getAllData();
console.log(allData[0]);

console.log('\n--- Test terminé ---');
