const readline = require('readline/promises');
const yargs = require('yargs');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para pedir los datos
const pedirDatos = async () => {
    try {
        const product = await rl.question('Producto: ');
        const priceInput = await rl.question('Precio: ');
        const stockInput = await rl.question('Cantidad: ');

        const price = parseFloat(priceInput);
        const stock = parseFloat(stockInput);

        // Validaciones simples
        if (isNaN(price) || isNaN(stock)) {
            throw new Error('El precio y la cantidad no son validos');
        }

        return { nombre: product, precio: price, cantidad: stock };
    } catch (error) {
        console.error("HUbo un error:", error);
        throw error; 
    }
}

// Función para guardar los datos en el JSON
const guardarJson = async (fileName, newProduct) => {
    try {
        let products = [];
        if (fs.existsSync(fileName)) {
            const contenido = fs.readFileSync(fileName, 'utf-8');
            products = JSON.parse(contenido);
        }

        products.push(newProduct);

        
        fs.writeFileSync(fileName, JSON.stringify(products, null, 2), 'utf-8');
        console.log('Se guardaron los datos correctamente en', fileName);
    } catch (error) {
        console.error('Hubo un error:', error);
        throw error; 
    }
}

// Función para mostrar el contenido del archivo JSON
const mostrarContenido = async (fileName) => {
    try {
        const contenido = fs.readFileSync(fileName, 'utf-8');
        const products = JSON.parse(contenido);
        console.log('\nContenido del archivo JSON:');
        console.log(JSON.stringify(products, null, 2)); 
    } catch (error) {
        console.error('Hubo un error: ', error);
    }
}


const argv = yargs
    .command('nameJson', 'Nombre del archivo JSON', {
        file: {
            alias: 'f',
            describe: 'Nombre del archivo JSON para guardar los productos',
            type: 'string',
            default: 'productos.json'  
        }
    }, async (argv) => {
        try {
            const datos = await pedirDatos();
            await guardarJson(argv.file, datos);
            await mostrarContenido(argv.file); 
        } catch (error) {
            console.error("Ocurrió un error:", error);
        } finally {
            rl.close();  
        }
    })
    .help()
    .argv;






