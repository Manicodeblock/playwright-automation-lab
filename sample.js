
function honest(g,p)
{

    let r=g+p;
    console.log("the value of r",r);
}
honest(3,5);

function operationsnum(a, b) {
    let sum = a + b;
    console.log("The sum is:", sum);
    let sub = a-b;
    let mul = a*b;
    let div = a/b;
    console.log("The sub is:", sub);
    console.log("The mul is:", mul);
    console.log("The div is:", div);
}


function strworkout()
{
    let fname = "manikandan";
    let lname = "vinayagam";
    //let fullname = fname+lname;
    let count = 0;
    
    console.log("Full name is "+ fname +" "+lname)
    //iterations

    for (let i=0;i<fname.length;i++)
    {
        if (fname[i]=='a')
        {
            count+=1;
        }
        console.log(fname[i]);
    }
    console.log("Total number of a is in a name",count)
}
operationsnum(5, 10); // Passes 5 and 10 as arguments
strworkout();

