class PublishSubscribe {
    constructor() {
        this.eventMap = {}
    }

    on(name, callback) {
        this.eventMap[name] = this.eventMap[name] || [] //初始化
        this.eventMap[name].push(callback)
    }

    off(name, callback) {
        if (this.eventMap[name]) {
            this.eventMap[name] = this.eventMap[name].filter(fn => {
                return fn !== callback
            })
        }
    }

    emit(name, ...args) {
        this.eventMap[name] = this.eventMap[name] || [] //初始化
        this.eventMap[name].forEach(fn => fn.call(undefined,...args))
    }

    once(name, callback) {
        const onceCallback = (...args) => {
            this.off(name, onceCallback)
            callback.call(undefined,...args)
        }
        this.on(name, onceCallback)
    }
    clear(name){
        if (this.eventMap[name]){
            delete this.eventMap[name]
        }
    }
}

//使用
const p = new PublishSubscribe()
p.once('click',console.log)
setTimeout(() => {
    p.emit('click','蔡徐坤')
},3000)
setTimeout(() => {
    p.emit('click','蔡徐坤22')
},1000)