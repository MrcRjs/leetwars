# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.14

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /snap/clion/81/bin/cmake/linux/bin/cmake

# The command to remove a file.
RM = /snap/clion/81/bin/cmake/linux/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/mrcrjs/PycharmProjects/codewars/narcissistic

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/Narcissistic_run.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/Narcissistic_run.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/Narcissistic_run.dir/flags.make

CMakeFiles/Narcissistic_run.dir/main.cpp.o: CMakeFiles/Narcissistic_run.dir/flags.make
CMakeFiles/Narcissistic_run.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/Narcissistic_run.dir/main.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/Narcissistic_run.dir/main.cpp.o -c /home/mrcrjs/PycharmProjects/codewars/narcissistic/main.cpp

CMakeFiles/Narcissistic_run.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/Narcissistic_run.dir/main.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/mrcrjs/PycharmProjects/codewars/narcissistic/main.cpp > CMakeFiles/Narcissistic_run.dir/main.cpp.i

CMakeFiles/Narcissistic_run.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/Narcissistic_run.dir/main.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/mrcrjs/PycharmProjects/codewars/narcissistic/main.cpp -o CMakeFiles/Narcissistic_run.dir/main.cpp.s

# Object files for target Narcissistic_run
Narcissistic_run_OBJECTS = \
"CMakeFiles/Narcissistic_run.dir/main.cpp.o"

# External object files for target Narcissistic_run
Narcissistic_run_EXTERNAL_OBJECTS =

Narcissistic_run: CMakeFiles/Narcissistic_run.dir/main.cpp.o
Narcissistic_run: CMakeFiles/Narcissistic_run.dir/build.make
Narcissistic_run: Narcissistic_lib/libNarcissistic_lib.a
Narcissistic_run: CMakeFiles/Narcissistic_run.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable Narcissistic_run"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/Narcissistic_run.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/Narcissistic_run.dir/build: Narcissistic_run

.PHONY : CMakeFiles/Narcissistic_run.dir/build

CMakeFiles/Narcissistic_run.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/Narcissistic_run.dir/cmake_clean.cmake
.PHONY : CMakeFiles/Narcissistic_run.dir/clean

CMakeFiles/Narcissistic_run.dir/depend:
	cd /home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/mrcrjs/PycharmProjects/codewars/narcissistic /home/mrcrjs/PycharmProjects/codewars/narcissistic /home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug /home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug /home/mrcrjs/PycharmProjects/codewars/narcissistic/cmake-build-debug/CMakeFiles/Narcissistic_run.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/Narcissistic_run.dir/depend
