//
// Created by mrcrjs on 8/2/19.
//


#include "gtest/gtest.h"
#include "Narcissistic.h"

Narcissistic narci;

TEST(NarcissisticTestSuite, TrueNarci153){

    EXPECT_EQ(true,narci.run(153));
}

TEST(NarcissisticTestSuite, TrueNarci371){

    EXPECT_EQ(true,narci.run(371));
}

TEST(NarcissisticTestSuite, TrueNarci7){

    EXPECT_EQ(true,narci.run(7));
}

TEST(NarcissisticTestSuite, FalseNarci122){

    EXPECT_EQ(false,narci.run(122));
}

TEST(NarcissisticTestSuite, FalseNarci4887){

    EXPECT_EQ(false,narci.run(4887));
}
