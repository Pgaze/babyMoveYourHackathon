/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
exports.testNodeDv = function testNodeDv(){
    var dv = require('dv');
    var fs = require('fs');
    var image = new dv.Image('png', fs.readFileSync('testResources/etiquette-blues-.png'));
    var tesseract = new dv.Tesseract('eng', image);
    console.log(tesseract.findText('plain'));
};
