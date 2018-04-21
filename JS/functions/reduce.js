import fs from 'fs';

const output = fs.readFileSync('data.txt', 'utf8')
                .split('\r\n')
                .map(line => line.split('\t'))
                .reduce((customers, [name, product, price, quantity]) => {
                    customers[name] = customers[name] || [];
                    customers[name].push({
                        product,
                        price,
                        quantity,
                    });
                    return customers;
                }, {})

console.log(JSON.stringify(output, null, 2))