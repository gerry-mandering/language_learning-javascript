let object = {
    name: 'banana',
    price: 1200,
    print: function() {
        console.log(`${this.name}'s price is ${this.price}`);
    },
    setPrice: (price) => {
        this.price = price;
    }
}

object.print();
object.setPrice(1500);
object.print();