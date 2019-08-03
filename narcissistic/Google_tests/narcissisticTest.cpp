//
// Created by mrcrjs on 8/2/19.
//


#include "gtest/gtest.h"
#include "Narcissistic.h"


TEST(AbsoluteDateTestSuite, ExampleDate){
    Narcissistic narci;
    EXPECT_EQ(true,narci.run(153));
}
