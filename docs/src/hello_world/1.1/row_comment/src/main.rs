fn main() {
    let n : i32 = 0;
    println!("The {}th Fibonacci number is {}", n, fibonacci_sequence(n))
}

fn fibonacci_sequence(index: i32) -> i32 {
    // 计算斐波那契数列第index项，n=0或1时直接返回index
    if index == 0 {
        index
    } else if index == 1 {
        index
    } else {
        fibonacci_sequence(index - 1) + fibonacci_sequence(index - 2)
    }
}