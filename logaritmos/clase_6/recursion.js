function fn(n) {  // n = 1
    if (n > 5) {
    return n
    } else {
    return fn(n + 1)
    }
}

fn(0)
