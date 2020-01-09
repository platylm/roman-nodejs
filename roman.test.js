const GetNumberRoman = require('./roman')

describe('Roman',() => {
    it ('Input 1 Should be I',()=>{
        const expected = "I"
        const number = 1
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 2 Should be II',()=>{
        const expected = "II"
        const number = 2
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 3 Should be III',()=>{
        const expected = "III"
        const number = 3
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 4 Should be IV',()=>{
        const expected = "IV"
        const number = 4
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 5 Should be V',()=>{
        const expected = "V"
        const number = 5
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 9 Should be IX',()=>{
        const expected = "IX"
        const number = 9
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 10 Should be X',()=>{
        const expected = "X"
        const number = 10
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })

    it ('Input 11 Should be XI',()=>{
        const expected = "XI"
        const number = 11
        
        const actual = GetNumberRoman(number)
        
        expect(actual).toBe(expected)
    })
})