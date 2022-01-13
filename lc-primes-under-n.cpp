#include <math.h>

class Solution {
public:
    int countPrimes(int n) {

         std::vector<bool> nPrimes = sieveErathostenes(n);
         int count = 0;
         for(int i=2; i < n; i++){
             if(nPrimes[i]){
                 count++;
             }
        }
        return n < 2 ? 0 : count;
    }
    
    std::vector<bool> sieveErathostenes(int n) {
        std::vector<bool> primes(n, true);

        for (auto p = 2; p * p <= n; p++)
        {
            // If prime[p] is not changed, 
            // then it is a prime
            if (primes[p] == true) 
            {
                // Update all multiples 
                // of p greater than or
                // numbers which are multiple 
                // of p and are less than p^2 
                // are already been marked.
                for (auto i = p * p; i <= n; i += p) {
                    primes[i] = false;
                }
            }
        }
        return primes;
    }
};
