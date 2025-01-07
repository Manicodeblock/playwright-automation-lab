compname = 'manikandan';
function reverse()
{
    
    let chars = compname.split("");
    //console.log(chars);
    let reversed = "";
    for (let index=chars.length-1;index>=0;index--)
    {
        reversed = reversed+chars[index]
    }
    console.log(`the reversed string is, ${reversed}`)
    return reversed;


}
reverse();

