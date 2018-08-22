
   var CryptoJS = require("crypto-js");
    var keyStr = 'bbbbbbbbbbbbbbbb';var iv = 'ccccccccccccccc';
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var iv = CryptoJS.enc.Utf8.parse(keyStr); 

var myCryptoJS={
    
     aesEncrypt:function(message){
       var  encrypted = CryptoJS.AES.encrypt(message, key, {   
          iv:iv,
          mode: CryptoJS.mode.CBC,
          padding:CryptoJS.pad.Pkcs7 
        });
      return encrypted.toString();  //返回的是base64格式的密文
    },
//需要读取encryptedData上的ciphertext.toString()才能拿到跟Java一样的密文
//var encryptedStr = encryptedData.ciphertext.toString(); 
//如果加密后的密文为128位的字符串，那么解密时，需要将其转为Base64编码的格式。
//var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedStr);
//var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
//那么就需要先使用方法CryptoJS.enc.Hex.parse转为十六进制，再使用CryptoJS.enc.Base64.stringify将其变为Base64编码的字符串，此时才可以传入CryptoJS.AES.decrypt方法中对其进行解密。
    aesDecrypt:function(ciphertext){
      var decrypted = CryptoJS.AES.decrypt(ciphertext,key,{ 
         iv:iv,
         mode: CryptoJS.mode.CBC,
         padding:CryptoJS.pad.Pkcs7 
        });
        return decrypted.toString(CryptoJS.enc.Utf8);//将其变成明文就需要按照Utf8格式转为字符串。
    }

}
module.exports = myCryptoJS;