'use strict' //设置为严格模式 

 
  
 CryptoGraphy.prototype.parseXmlToJSON = function(xml){ 
    if (!xml || typeof xml != 'string') return {}; 
 		var re = {}; 
 		xml = xml.replace(/^<xml>|<\/xml>$/g, ''); 
 		var ms = xml.match(/<([a-z0-9]+)>([\s\S]*?)<\/\1>/ig); 
 		if (ms && ms.length > 0) 
 		{ 
 			ms.forEach( t => { 
 				let ms = t.match(/<([a-z0-9]+)>([\s\S]*?)<\/\1>/i); 
 				let tagName = ms[1]; 
 				let cdata = ms[2] || ''; 
 				cdata = cdata.replace(/^\s*<\!\[CDATA\[\s*|\s*\]\]>\s*$/g,''); 
 				re[tagName] = cdata; 
 			}); 
 		} 
 	return re; 
 } 
module.exports = CryptoGraphy;
 
    