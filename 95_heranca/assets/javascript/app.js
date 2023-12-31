/*************************************************************/
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.increase = function (amount) { this.price += amount };
Product.prototype.decrease = function (amount) { this.price -= amount };

/*************************************************************/
function Tshirt(name, price, color) {
    Product.call(this, name, price); // heritage
    this.color = color;
}
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;
Tshirt.prototype.increase = function (amount) { this.price = this.price + (this.price * (amount / 100)) }; // overwrite

function Mug(name, price, material, stock) {
    Product.call(this, name, price); // heritage
    this.material = material;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function () { return stock; },
        set: function (value) {
            if (typeof value !== 'number') return;
            stock = value;
        },
    });
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

/*************************************************************/
const instanceateTshirt = (name, price, color) => {
    return new Tshirt(name, price, color);
};

const instanceateProduct = (name, price) => {
    return new Product(name, price);
};

const instanceateMug = (name, price, material, stock) => {
    return new Mug(name, price, material, stock);
};

/*************************************************************/
const product = instanceateProduct('Chinelo', 111.0);
const tshirt = instanceateTshirt('Regata', 7.5, 'Preta');

const mug = instanceateMug('Nerd', 13.0, 'plástico', 5);
mug.stock = 100;

console.log(mug.stock);
console.log(tshirt);
console.log(product);