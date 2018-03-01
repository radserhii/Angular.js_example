var app = angular.module('app', []);


app.controller('ProductsController', function ($scope) {
    this.products = [
        {
            name: 'Lenovo K6 Note',
            category: 'smartphone',
            description: 'Lenovo K6 Note 4GB Smartphone was launched in October 2016, comes with a 5.5-inch Full HD IPS LCD',
            price: 4594,
            image: 'img/LenovoK6Note.jpg',
            available: true,
            specs: []
        },
        {
            name: 'Samsung Galaxy J3',
            category: 'smartphone',
            description: 'Samsung Galaxy J3 has a comfortable 2600 mAh battery, 8 GB Internal memory which is ' +
            'expandable upto 128GB via SD card',
            price: 2999,
            image: 'img/SamsungGalaxyJ3.jpg',
            available: false,
            specs: []
        },
        {
            name: 'Huawei Y3',
            category: 'smartphone',
            description: 'Huawei Y3 II smartphone with 4.50-inch 480x854 display powered by 1.3GHz quad-core processor ',
            price: 2099,
            image: 'img/HuaweiY3.jpg',
            available: true,
            specs: []
        }
    ];
});

app.controller('PageController', function ($scope) {
    this.sort = "product-th";
});

app.controller('SpecificationsController', function ($scope) {
    this.spec = {};

    this.addSpec= function(product){
        product.specs.push(this.spec);
        this.spec = {};
    };
});

app.controller("ShopCartController", function ($rootScope) {

    this.items = 0;

    this.addItems = function () {
        this.items++;
    };

    this.cleanItems = function () {
        this.items = 0;
    };

    this.showItems = function () {
        return this.items;
    }
});

app.controller("PromoController", function ($scope) {

    const truePromocode = 1234;

    this.checkPromo = function () {
        if (+this.code === truePromocode) {
            console.log(this.code);
        }
    };
});

