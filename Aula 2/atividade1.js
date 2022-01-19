class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string. If no matches is found, returns substring.
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const regex = new RegExp(subStr, "i")
        
        return this.string.match(regex)?.[0] ?? subStr
    }

    /**
     * Returns the last substring that matches the given string.  If no matches is found, returns substring.
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const regex = new RegExp("(" + subStr + /)(?!.*\1)/, "gims")

        return this.string.match(regex)?.[0] ?? subStr
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const firstMatch = new RegExp(subStr1, "i").exec(this.string)
        const secondMatch = new RegExp(subStr2, "i").exec(this.string)

        if (firstMatch && secondMatch) {
            return this.string.substring(firstMatch[0].length, secondMatch.index).trim()
        }
        return null
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length < 2) return ""

        return this.string.slice(0, 2).concat(this.string.slice(this.string.length - 2))
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        return str1.split("").map((char, index, arr) => index && char === arr[0] ? "*" : char).join("")
    }

}

module.exports = StringManipulations