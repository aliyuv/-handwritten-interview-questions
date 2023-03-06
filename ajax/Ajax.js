function Ajax({method, url, data, success, fail}) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                success(xhr)
            } else {
                fail(xhr)
            }
        }
    }
    xhr.send(data)
}