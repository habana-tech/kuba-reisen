export function setCookie(value, name='products_cart' , days=3) {
    let date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    let expires = "; expires="+date.toGMTString ();
    document.cookie = name + "=" + value +
        expires + "; path=/";
}

export function getCookie(name) {
    let cArr = document.cookie.split(';');
    for(let i=0;i < cArr.length;i++) {
        let cookie = cArr[i].split("=",2);
        cookie[0] = cookie[0].replace(/^\s+/,"");
        if (cookie[0] === name)
            return cookie;
    }
    return false;
}

export function getBoundingBox(lats, logs){
    lats.sort((a,b) => { return a <= b ? -1 : 1 } );
    logs.sort((a,b) => { return a <= b ? -1 : 1 } );

    return [[lats[0],logs[0]],
        [lats[lats.length-1], logs[logs.length-1] ]];
}