import React from 'react';
let Random = () => {
    let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let generated:number[] = [];
            for (let i = 0; i < original.length; i++) {
                let current = Math.floor(Math.random() * 12);
                if (generated.includes(original[current]) === false) {
                    generated.push(original[current]);
                } else {
                    i--;
                }
           
        }
        return (<h1>{generated[1]} first,{generated[2]},{generated[3]},{generated[4]},{generated[5]},{generated[6]},{generated[7]},{generated[8]},{generated[9]},{generated[10]},{generated[11]},{generated[0]}</h1>);
}

export default Random