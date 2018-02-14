var app = angular.module('app', []);

app.controller('ProductsController', function ($scope) {
    this.products = [
        {
            name: 'Lenovo K6 Note',
            category: 'smartphone',
            description: 'Lenovo K6 Note 4GB Smartphone was launched in October 2016, comes with a 5.5-inch Full HD IPS LCD',
            price: 4594,
            image: 'img/LenovoK6Note.jpg',
            available: true
        },
        {
            name: 'Samsung Galaxy J3',
            category: 'smartphone',
            description: 'Samsung Galaxy J3 has a comfortable 2600 mAh battery, 8 GB Internal memory which is ' +
            'expandable upto 128GB via SD card',
            price: 2999,
            image: 'img/SamsungGalaxyJ3.jpg',
            available: false
        },
        {
            name: 'Huawei Y3',
            category: 'smartphone',
            description: 'Huawei Y3 II smartphone with 4.50-inch 480x854 display powered by 1.3GHz quad-core processor ',
            price: 2099,
            image: 'img/HuaweiY3.jpg',
            available: true
        }
    ];
});

app.controller('PageController', function ($scope) {
    this.sorting = {

    }
});