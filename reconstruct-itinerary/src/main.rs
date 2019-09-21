use std::fmt;
use std::fmt::Display;

mod solution;

#[derive(Debug)]
struct Matrix(f32, f32, f32, f32);

// Tuples can be used as function arguments and as return values
fn _reverse(pair: (i32, bool)) -> (bool, i32) {
    // `let` can be used to bind the members of a tuple to variables
    let (integer, boolean) = pair;

    (boolean, integer)
}

fn transpose(matrix: Matrix) -> Matrix {
    Matrix(matrix.0, matrix.2, matrix.1, matrix.3)
}
fn main() {
    println!("Hello, world!");
    // Create a structure named `Structure` which contains an `i32`.
    let pi = 3.141592;
    println!("Let's debug this variable {:.*}", 3, pi);

    #[allow(dead_code)]
    struct Structure(i32);

    // However, custom types such as this structure require more complicated
    // handling. This will not work.
    // println!("This struct `{}` won't print...", Structure(3));



    impl Display for Matrix {
        fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
            write!(f, "({}, {})\n({}, {})", self.0, self.1, self.2, self.3)
        }
    }

    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{}", matrix);
    println!("Matrix:\n{}", matrix);
    println!("Transpose:\n{}", transpose(matrix));

    let itin : Vec<Vec<String>> = vec![vec![String::from("JFK"),String::from("MUC")],vec![String::from("MUC"),String::from("LHR")]];
    solution::find_itinerary(itin);
}
