var Cat = (
    function () {
        let averageTracker = {
            catCount: 0,
            avgWeight: 0,
            totalWeight: 0
        }
        function constructor(name, weight) {
            
            if (!name || !weight) {
                throw new Error('Missing name or weight')
            }
            averageTracker.catCount++;

            Object.defineProperty(this, 'weight', {
                get() { return this._weight || 0; },
                set(newW) {
                    averageTracker.totalWeight = averageTracker.totalWeight - this.weight + newW,
                    averageTracker.avgWeight = averageTracker.totalWeight / averageTracker.catCount
                    return this._weight = newW; 
                }
            });
            this.name =  name;
            this.weight = weight;            
        }
        
        constructor.averageWeight = function () {
            return averageTracker.avgWeight;
        }
        
        return constructor;
    }()
);

module.exports = { Cat };

