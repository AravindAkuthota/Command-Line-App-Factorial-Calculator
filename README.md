# Command-Line-App-Factorial-Calculator
This is a simple command line app that calculates the factorial of a given number. It uses Node.js to read input from the command line and output results to the console.

# Requirements

To run this program, you will need to have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

# Usage

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the directory where the program is saved.

3. Type node factorial.js and press Enter to run the program.

4. The program will prompt you to enter a number. Type in the desired number and press Enter.

5. The program will calculate the factorial of the number and print the result to the console.

# Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

# License
This program is licensed under the MIT License. See the LICENSE file for details.

# Explanation
This program uses Node.js to read input from the command line and output results to the console. It prompts the user to enter a number, calculates its factorial using a recursive function, and then prints the result to the console.

The readline module is used to create an interface for reading input from the command line. The question method prompts the user to enter a number and passes the input to a callback function that calls the calculateFactorial function and prints the result to the console.

The calculateFactorial function is a recursive function that calculates the factorial of a given number. If the number is zero, it returns 1. Otherwise, it multiplies the number by the factorial of the number minus one.

Overall, this program demonstrates how to create a simple command line app that performs a mathematical calculation based on user input.
