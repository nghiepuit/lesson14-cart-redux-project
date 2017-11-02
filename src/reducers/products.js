var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy S7',
        image : 'https://s7d2.scene7.com/is/image/SamsungUS/SMG930_gs7_102416?$product-details-jpg$',
        description : 'Sản phẩm do samsung sản phẩm',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
        description : 'Sản phẩm do china sản phẩm',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;