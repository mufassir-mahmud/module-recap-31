const data = [{id:1, name: 'Mufassir', address: 'kochu khet'}, {id: 2, name: 'Omar', address: 'poushuram',}];

// console.log(data[0].address);
// console.log(data[1].name);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo', price: 65000},
        {id: 2, name: 'mackbook', price: 165000}
    ]
}

// console.log(products.data[0].name);

const user = {
    id: 5001,
    name: 'Shariful Raj',
    address: {
        street:{
            first: '54/1 uttora side',
            second: 'poribager goli',
            third: 'no dorai',
        },
        city: 'Dhaka',
    }
}

console.log(user.address.street.second);