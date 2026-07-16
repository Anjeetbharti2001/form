let num = [2, 3, 4, 5, 6, 7, 11, 2, 9 ];
let max = arr.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});