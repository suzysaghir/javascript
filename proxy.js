const handler = {
    get: function (target, prop) {
        return (target[prop] ? target[prop] : 'Not found !!' );
    },
    set: function (target, prop, value) {
        if (prop === "password" ) {
            if ( value.length < 6)
               console.log('password should be 6 characters or more');
        }
        target[prop] = value;
    }
};

const login = {
    username: "somename",
    password: '123456'
};

const proxy = new Proxy(login, handler);
console.log(proxy.username); // somename 
console.log(proxy.password); // 123456
console.log(proxy.email); // Not found !!

proxy.password = "1234";  //password should be 6 characters or more
console.log(proxy.password); // 1234
