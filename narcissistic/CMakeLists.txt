cmake_minimum_required(VERSION 3.14)
project(narcissistic)

include_directories(${gtest_SOURCE_DIR}/include ${gtest_SOURCE_DIR})

set(CMAKE_CXX_STANDARD 14)

set(SOURCE_FILES main.cpp)
add_executable(Narcissistic_run ${SOURCE_FILES})

include_directories(Narcissistic_lib)
add_subdirectory(Narcissistic_lib)

target_link_libraries(Narcissistic_run Narcissistic_lib)

add_subdirectory(Google_tests)
