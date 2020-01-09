function GetNumberRoman(number) {
    var numberString = ""
    while (number >= 10) {
        numberString += "X"
        number -= 10
    }
    numberString += MapNumberRoman(number)
    return numberString
}
module.exports = GetNumberRoman //จะประกาศ module ข้างล่าง function นั้น

function MapNumberRoman(number) {
    switch (number) {
        case 0:
            return ""
        case 1:
            return "I"
        case 2:
            return "II"
        case 3:
            return "III"
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        case 7:
            return "VII"
        case 8:
            return "VIII"
        case 9:
            return "IX"
    }
}