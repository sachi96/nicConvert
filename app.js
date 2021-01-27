function convertID(id){
    if ((id.length<11) && (id.length>8)){
        String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        function convert() {
            var add1 = "19";
            var result1 = add1.concat(id);
            var result2 = result1.splice(7, 0, "0");
            result3 = result2.slice(0, 12);
        }
        convert();
        return result3;
    }
    else{
        return ("The NIC number you entered is wrong. Please try again!!");
    }
}

module.exports.convertID = convertID;