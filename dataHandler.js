import fs from 'fs';

//ler o data.json
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

//atualizar o data.json
function updateData(newData) {
    const convertedData = JSON.stringify(newData, null, 2);
    
    fs.writeFileSync('./data.json', convertedData, 'utf-8');
} 

export { data, updateData }