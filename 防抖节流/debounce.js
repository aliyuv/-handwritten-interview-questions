const debounce = (fn,time) => {
    let timer = null
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer =setTimeout(() => {
            fn.call(undefined,...args)
            timer = null
        },time)
    }
}

//使用方法
const a = debounce(() => {console.log(`防抖`)},3000)