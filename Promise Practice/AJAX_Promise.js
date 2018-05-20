var promise = new Promise(function(resolve, reject) {
    var handler = function () {

        if (this.readyState !== 4) {
            return 100;
        }
        console.log(this.status)
        if (this.status === 200) {
            resolve(this.responseText);
        } else {
            reject(new Error());
        }
    };
    var client = new XMLHttpRequest();
    client.open('GET', 'https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/shi-san-3001-promise.html');
    client.onreadystatechange = handler;
    client.send();
})

promise.then((js) => console.log(js));