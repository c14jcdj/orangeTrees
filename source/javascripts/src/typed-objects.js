function createTree() {
    return new Tree
}

function Tree() {
    this.age = 0;
    this.height = 0;
    this.orangeCount = 0;
    this.orangeCountTotal = 0;
    FRUIT_BEARING_AGE = 2;
    MAX_AGE = 8;
    this.isAlive = true

}

function Orange() {
    this.diameter = Math.floor(Math.random() * 2 + 1);
}

function pickOrange() {
    return new Orange;
}
Tree.prototype = {
    grow: function() {
        this.age += 1;
        this.height += 10;
        if (this.age >= FRUIT_BEARING_AGE) {
            this.orangeCount = Math.floor(Math.random() * 3 + 1);
            this.orangeCountTotal += this.orangeCount
        };
        if (this.age > MAX_AGE) {
            this.isAlive = false;
        };
    },

    dropOrange: function() {
        return new Orange;
    }




}