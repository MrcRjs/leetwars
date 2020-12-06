var catInstances = [];

var Cat = (
    function () {
        return function (name, weight) {
            
            if (!name || !weight) {
                throw new Error('Missing name or weight')
            }

            var w = 0;
            Object.defineProperty(this, 'weight', {
                get() { return w; },
                set(newW) {
                    w = newW;
                }
            });

            this.name =  name;
            this.weight = weight;
            catInstances.push(this);
            
        }
    }()
);

Cat.averageWeight = function () {
    return  (catInstances.map(c => c.weight).reduce((ac, w) => ac + w)) / catInstances.length;
}


module.exports = { Cat };

