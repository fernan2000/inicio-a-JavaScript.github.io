new Promise((resolve, reject) => {
    resolve("De vuelta")
})
//es esto....
prompt.then((res) => {
    console.log(res)
})

//es equivalnete a esto....
const fn = async () => {
    let res = await prompt
    console.log(res)
}
