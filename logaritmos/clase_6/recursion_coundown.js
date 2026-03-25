function coundown (n) {
    console.log(n)
    if (n == 0) {
    } else {
        return coundown(n - 1)
    }
}

coundown(11)