import React from 'react'

export default function ThirdExercise() {

    const quadraticEquation = (a, b, c) => {
        if(a == 0)
            console.log("false");
        // let res = {};
        let D = b * b - 4 * a * c;
        console.log('Дискриминант - ' + D);
        if(D < 0) {
            console.log("Дискриминант - " + D);
        } else if(D == 0) {
            let resolve = (-b + Math.sqrt(D)) / (2 * a)
            console.log("Корень - " + resolve);
        } else if(D > 0){
            let resolve1 = ((-b + Math.sqrt(D)) / (2 * a));
            let resolve2 = ((-b - Math.sqrt(D)) / (2 * a));
            console.log(`Первый - ${resolve1}, Второй - ${resolve2}`);
        }
    }
    quadraticEquation(1, 12, 36);

    return (
        <div>
            
        </div>
    )
}
