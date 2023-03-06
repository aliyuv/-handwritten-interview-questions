// 节流
function  throttle(fn,time){
    let timer = null
    return (...args) => {
        //TODO 判断如何 timer 为 null 直接返回
        if(timer) {return}
        fn.call(undefined,...args)
        timer = setTimeout(() => {
            timer = null
        },time)
    }
}