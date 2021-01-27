function convertID(id){
    if ((id.constructor === String) && (11>id.length>0)){
        String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        function convert() {
            var add1 = "19";
            var result1 = add1.concat(id);
            var result2 = result1.splice(7, 0, "0");
            result3 = result2.slice(0, 12);
            //document.write(result3); 
            //console.log(result3);
            //return result3;
        }
        convert();
    }
    return result3;
}

module.exports.convertID = convertID;