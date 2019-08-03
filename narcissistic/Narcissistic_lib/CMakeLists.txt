
project(Narcissistic_lib)

set(HEADER_FILES
        Narcissistic.h
        )

set(SOURCE_FILES
        Narcissistic.cpp
        )

add_library(Narcissistic_lib STATIC ${SOURCE_FILES} ${HEADER_FILES})