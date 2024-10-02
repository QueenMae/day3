function findHousing(housingToFind,hounsingList) {
let i = 0  
            
 while(i < housingList.length ) {
if ( housingList [i] === housingToFind ){
 return [i,housingList[i]];
}
i++;
}
   return;null

}
//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")
