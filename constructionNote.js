function constructionNote(letter, message) {
    let ltrCounter = {};
    let msgCounter = {};

    for (let ltr of letter) {
        ltrCounter[ltr] = (ltrCounter[ltr] || 0) + 1;
    }

    for (let msg of message) {
        msgCounter[msg] = (msgCounter[msg] || 0) + 1;
    }

    for (let key in msgCounter) {
        if (!ltrCounter[key] || ltrCounter[key] < msgCounter[key]) {
            return false;
        }
    }

    return true;
}

console.log(constructionNote("aabbcc", "bcabcaddff")); // false
