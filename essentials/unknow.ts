// function process(val: any){ // it is like javascript
//     val.log();
// }          

function process(val: unknown){
    if(
        typeof val === 'object' &&
         !!val &&
          'log' in val &&
           typeof val.log === 'function'
     ){
        val.log();
    } 
}