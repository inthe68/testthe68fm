// Factory Function 
function createGradientSquare(c1, c2, c3, c4){
    return {c1, c2, c3, c4,
        writeCorner(){
            console.log("write corner function,factoryfucntion called")
        }
    }
}


function createCircle(radius){
    return { radius,
        draw(){
            console.log("Drawing")
        }
    }
}