function shout(string) {

    const stringCapitalized = string.toUpperCase()
    return stringCapitalized
}

function whisper(string) {
   return string.toLowerCase()

}

function logShout(string) {

    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {

    //if string is uppercase
    //return "YES INDEED"
    //else if string is lowercase
    // return "i cant hear you"
    //else if string is equal " i love you grandma"
    // return "i love you too"

        if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
        else if (string === string.toUpperCase()) {
        return "YES INDEED!"
     
    } 


        else if (string === "I love you, Grandma.") {
        return "I love you, too."

    }

}


