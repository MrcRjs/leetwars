fn main() {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        }
        x.to_string() == x.to_string().chars().rev().collect::<String>()
    }

    println!("Is {} a palindrome? {}", 333, is_palindrome(333));
    println!("Is {} a palindrome? {}", -42, is_palindrome(-42));
}
