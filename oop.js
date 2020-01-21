var RandomizedSet = function() {
    this.map = {}
    this.arr = []
};

RandomizedSet.prototype.insert = function(val) {
    if (val in this.map) {
        return false
    }
    this.map[val] = this.arr.length
    this.arr.push(val)
    return true
};

RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.map)) {
        return false
    }
    let end = this.arr[this.arr.length - 1]
    let original = this.map[val]
    this.map[end] = original
    this.arr[original] = end
    delete this.map[val]
    this.arr.pop()
    return true
};

RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};
