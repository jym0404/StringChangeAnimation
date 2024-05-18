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
function strAnimate(callback, original, changeto, cduration=30, space=" "){
                                    //Space above is a nbsp, do not change it to a normal space
    recursiveChange(callback, original, changeto, cduration, space,0)
}