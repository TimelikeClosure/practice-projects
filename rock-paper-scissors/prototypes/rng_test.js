const rng = (function (){
    const cache = [[1]];

    const pascal = function pascal(n){
        if (!cache.hasOwnProperty(n) || !Array.isArray(cache[0])){
            cache[n] = [];
        }
        const nCache = cache[n];
        return function nPascal(k){
            if (!nCache.hasOwnProperty(k) || !nCache[k]){
                if (k >= n){
                    nCache[k] = pascal(n - 1)(k - 1);
                } else if (k === 0){
                    nCache[k] = pascal(n - 1)(k);
                } else {
                    nCache[k] = pascal(n - 1)(k) + pascal(n - 1)(k - 1);
                }
            }
            return nCache[k];
        };
    }

    const distribution = function distribution(n){
        const nPascal = pascal(n);
        const array = (new Array(n+1)).fill(0).map(function(value, index){
            return nPascal(index);
        });
        return array;
    }

    const modDistribution = function modDistribution(mod){
        return function(n){
            return distribution(n).reduce(function(modDist, combinations, k){
                modDist[k % mod] += combinations;
                return modDist;
            }, (new Array(mod)).fill(0));
        };
    };

    const modDistributions = function modDistributions(mod){
        const getDist = modDistribution(mod);
        return function(nMin, nMax){
            return (new Array(nMax - nMin + 1)).fill(null).map(function(value, index){
                const countDist = getDist(nMin + index);
                const countTotal = countDist.reduce(function(acc, count){
                    return acc + count;
                }, 0);
                return countDist.map(function(count){
                    return count / countTotal;
                });
            }).reduce(function(map, dist, index){
                return map.set(nMin + index, dist);
            }, (new Map()));
        }
    }

    return {
        pascal: pascal,
        dist: distribution,
        modDist: modDistribution,
        modDists: modDistributions
    };
})()

// console.log(rng.pascal(0)(0));
// console.log(rng.pascal(1)(1));
// console.log(rng.pascal(1)(0));
// console.log(rng.pascal(2)(1));
// console.log(rng.pascal(32)(16));

// console.log(rng.dist(2));
// console.log(rng.dist(31));

// console.log(rng.modDist(3)(2));
// console.log(rng.modDist(3)(31));

console.log(rng.modDists(3)(3, 31));
debugger;