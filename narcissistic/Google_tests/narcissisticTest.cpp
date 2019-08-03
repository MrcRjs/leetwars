//
// Created by mrcrjs on 8/2/19.
//


#include "gtest/gtest.h"
#include "Narcissistic.h"

Narcissistic narci;

TEST(NarcissisticTestSuite, TRUENARCISSIST153){

    EXPECT_EQ(true,narci.run(153));
}

TEST(NarcissisticTestSuite, TRUENARCISSIST371){

    EXPECT_EQ(true,narci.run(371));
}

TEST(NarcissisticTestSuite, TRUENARCISSIST7){

    EXPECT_EQ(true,narci.run(7));
}

TEST(NarcissisticTestSuite, TRUENARCISSIST122){

    EXPECT_EQ(false,narci.run(122));
}

TEST(NarcissisticTestSuite, TRUENARCISSIST4887){

    EXPECT_EQ(false,narci.run(4887));
}
