#include <iostream>
#include "Narcissistic.h"

int main() {
    Narcissistic narci;
    int num = 531;
    std::cout << "Is " << num << " a narcissistic number?" << (narci.run(num) ? " ✔️ Yes it is " : " ❌ No it is not") << std::endl;
    return 0;
}