#include "Narcissistic.h"
#include <string>
#include "cmath"
//
// Created by mrcrjs on 8/2/19.
//
Narcissistic::Narcissistic() {

}
bool Narcissistic::run(int value) {
    int valueLength = std::to_string(value).length();

    int number = value;
    int result = 0;
    for (int i = valueLength-1; i >= 0; i--) {
        result += std::pow((number % 10), valueLength);
        number /= 10;
    }
    return result == value;
}