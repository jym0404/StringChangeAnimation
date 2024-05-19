function recursiveChange(callback, now, changeto, cduration, space, index){
    if(changeto[index] != undefined){
        var nres=now.substr(0, index) + changeto[index] + now.substr(index + 1, now.length)
    }
    else{
        var nres=now.substr(0, index) + space + now.substr(index + 1, now.length)
    }
    callback(nres)
    if (index < Math.max(now.length, changeto.length)-1){
        if(changeto[index] != undefined){
            setTimeout(()=>{recursiveChange(callback, nres, changeto, cduration, space, index+1)},cduration)
        }
        else{
            setTimeout(()=>{recursiveChange(callback, nres, changeto, cduration, space, index+space.length)},cduration)
        }
    }
}
function recursiveBackChange(callback, now, changeto, cduration, space, index){
    if(changeto[index] != undefined){
        var nres=now.substr(0, index) + changeto[index] + now.substr(index + 1, now.length)
    }
    else{
        var nres=now.substr(0, index) + space + now.substr(index + 1, now.length)
    }
    callback(nres)
    if (index > 0){
        setTimeout(()=>{recursiveBackChange(callback, nres, changeto, cduration, space, index-1)},cduration)
    }
}
/**
 * @callback printCallback
 * @param {string} text The raw text to print
*/
/**
 * @param {printCallback} callback The callback function to call when text is printed
 * @param {string} original The original text already existed before 
 * @param {string} changeto  The text to be printed
 * @param {boolean} [reverse=false] When it is true, the animation printed in reverse
 * @param {number} [cduration=30] The delay of one character to next as milliseconds
 * @param {string} [space="&nbsp;"] The space character printed when it needs
 */
function strAnimate(callback, original, changeto, reverse=false, cduration=30, space=" "){
                                        //Space above is a nbsp, do not change it to a normal space
    if(reverse){
        recursiveBackChange(callback, original+space.repeat(Math.max(changeto.length-original.length,0)), changeto, cduration, space, Math.max(original.length, changeto.length)-1)
    }
    else{
        recursiveChange(callback, original, changeto, cduration, space,0)
    }   
}