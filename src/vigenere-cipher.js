class VigenereCipheringMachine {
    constructor(direction) {
        this.tabulaRecta = [
            ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'],
            ['c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b'],
            ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'],
            ['e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d'],
            ['f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e'],
            ['g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f'],
            ['h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g'],
            ['i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h'],
            ['j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i'],
            ['k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j'],
            ['l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k'],
            ['m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l'],
            ['n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'],
            ['o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n'],
            ['p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'],
            ['q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
            ['r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'],
            ['s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'],
            ['t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s'],
            ['u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'],
            ['v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'],
            ['w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v'],
            ['x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w'],
            ['y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'],
            ['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']
          ]

        direction === false ? this.direction = 'reverse' : this.direction = 'direct'
    }

    encrypt(mess,key) {

      if(!mess || !key || !mess && !key) throw new Error
      let nbsp = [],
       symbols = [],
       mesTrim = [...mess].filter(el => el !== " ").join(''),
        regexp = /[^a-z]/i

      for(let i = 0; i < mess.length; i++) {
          mess[i] === ' ' ? nbsp.push(i) : i;
      }

      for(let i = 0; i < mesTrim.length; i++) {
        regexp.test(mesTrim[i]) ? symbols.push(mesTrim[i]) : symbols.push(' ')
      }

      let arrMes = mess.toLowerCase().match(/[a-z]/gi),
          arrKey = key.toLowerCase().split('')

          if(!arrMes) return mess

         let dif = arrMes.length - arrKey.length,
      cipherPosY = [],
      cipherPosX = [],
          cipher = []

             if(dif > 0) {
               for(let i = 0; i < dif; i++) {
                 arrKey.push(arrKey[i])
               }
             }

        for(let i = 0; i < arrMes.length; i++) {
          if(arrMes[i] == ' ') cipherPosY.push(arrMes[i])
          for(let j = 0; j < this.tabulaRecta[0].length; j++){
              if(arrMes[i] == this.tabulaRecta[0][j]) cipherPosY.push(this.tabulaRecta[0].indexOf(this.tabulaRecta[0][j]))
          }
        }

        for(let i = 0; i < arrKey.length; i++) {
          for(let j = 0; j < this.tabulaRecta.length; j++){
              if(arrKey[i] == this.tabulaRecta[j][0]) cipherPosX.push(j)
          }
        }

        for(let i = 0; i < cipherPosY.length; i++){
            cipher.push(this.tabulaRecta[cipherPosX[i]][cipherPosY[i]])
        }

        let counter = 0;

        for(let i = 0; i < symbols.length; i++) {
          if(symbols[i] === ' ' && cipher[counter]) {
            symbols.splice(i,1, cipher[counter]);
            counter++
          }
        }

        cipher = symbols

        for(let i = 0; i < cipher.length; i++) {
          nbsp.indexOf(i) != -1 ? cipher.splice(i,0,' ') : cipher
        }

        return this.direction === 'direct' ? cipher.join('').toUpperCase() : cipher.reverse('').join('').toUpperCase()
    }

    decrypt(code, key) {
      
      if(!code || !key) throw new Error

      let nbsp = [],
       symbols = [],
      codeTrim = [...code].filter(el => el !== " ").join(''),
        regexp = /[^a-z]/i

      for(let i = 0; i < code.length; i++) {
          code[i] === ' ' ? nbsp.push(i) : i
      }

      for(let i = 0; i < codeTrim.length; i++) {
        regexp.test(codeTrim[i]) ? symbols.push(codeTrim[i]) : symbols.push(' ')
      }

     let arrCode = code.toLowerCase().match(/[a-z]/gi),
          arrKey = key.toLowerCase().split('')
          if(!arrCode) return code
         let dif = arrCode.length - arrKey.length,
         mesPosY = [],
         message = []

             if(dif > 0) {
               for(let i = 0; i < dif; i++) {
                 arrKey.push(arrKey[i])
               }
             }

        for(let i = 0; i < arrKey.length; i++) {
          for(let j = 0; j < this.tabulaRecta[0].length; j++){
              if(arrKey[i] == this.tabulaRecta[j][0]) mesPosY.push(this.tabulaRecta[0].indexOf(this.tabulaRecta[0][j]))
          }
        }

        for(let i = 0; i < arrCode.length; i++) {
          for(let j = 0; j < this.tabulaRecta.length; j++){
              if(arrCode[i] == this.tabulaRecta[mesPosY[i]][j]) message.push(this.tabulaRecta[0][j])
          }
        }

        let counter = 0;

        for(let i = 0; i < symbols.length; i++) {
          if(symbols[i] === ' ') {
            symbols.splice(i,1, message[counter]);
            counter++
          }
        }

        message = symbols

        for(let i = 0; i < message.length; i++) {
          nbsp.indexOf(i) != -1 ? message.splice(i,0,' ') : message
        }

        return this.direction === 'direct' ? message.join('').toUpperCase() : message.reverse().join('').toUpperCase()
    }
}

module.exports = VigenereCipheringMachine;
