import  Sum  from "./function code/sum";
import Count from "./function code/count";
import Min from "./function code/min";
import Max from "./function code/max";
import Average from "./function code/average";
import {newList2 as  newList2Count}  from  "../functions/function code/count";
import {newList3 as  newList3Sum}  from  "../functions/function code/sum";
import {newList2 as  newList2Min}  from  "../functions/function code/min";
import {newList2 as  newList2Max}  from  "../functions/function code/max";
import {metricArray} from "../metrics/NewMetricForm";
import { historyArr, historyArr2 } from "../metrics/NewMetricForm";
import { isSubmitted } from "../metrics/NewMetricForm";

export var newList1 = [];
export var firstVar;
export let isCount = false;


var  secondVar;
var thirdVar;
var fourthVar;

let firstSelect = "";
let secondSelect = "";
export let thirdSelect = "";
export let output2;



function aggregate(e, events) {
 //console.log(historyArr);
 

    let output = "";

    if (e.label === "User ID"){
      firstVar = e.label;
      for (let i = 0; i < events.length; i++){
        newList1.push({ID: events[i].ID, duration: events[i].duration, clicks: events[i].clicks, time_stamp: events[i].time_stamp, closes: events[i].closes});
      }
      //console.log(metricArray);
    }
    

    if (e.label === "Country"){
      firstVar = e.label;
      for (let i = 0; i < events.length; i++){
        newList1.push({country: events[i].country, duration: events[i].duration, clicks: events[i].clicks, time_stamp: events[i].time_stamp, closes: events[i].closes});
      }
    }

    if (e.label === "Event Name"){
      firstVar = e.label;
      for (let i = 0; i < events.length; i++){
        newList1.push({name: events[i].name, duration: events[i].duration, clicks: events[i].clicks, time_stamp: events[i].time_stamp, closes: events[i].closes});
      }
    }

    if (e.label === "All"){
      firstVar = e.label;
      for (let i = 0; i < events.length; i++){
        newList1.push(events[i]);
      }
    }

    if (e.label === "User ID" || e.label === "Country" || e.label === "Event Name" || e.label === "All"){
      firstSelect =  e.label;
    }
    else if(e.label === "Count" || e.label === "Sum" || e.label === "Min" || e.label === "Max" || e.label === "Average"){
      secondSelect = e.label;
      if (e.label === "Count"){
        thirdSelect = "count";
        isCount = true;
      }
    }
    else if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
      thirdSelect = e.label;
    }

    if (e.label === "Count"){
      secondVar = "Count";
    }
    if (e.label === "Sum"){
      thirdVar = "Sum";
    }
    if (e.label === "Min"){
      thirdVar = "Min";
    }
    if (e.label === "Max"){
      thirdVar = "Max";
    }
    if (e.label === "Average"){
      fourthVar = "Average";
    }
     
    /* Insert Here */
    if (secondVar === "Count"){
      //console.log(metricArray);
      output = Count(e, events, firstVar);
      metricArray.push(newList2Count);
      if (secondSelect && isSubmitted){
      historyArr.push({type: "Aggregation", first: firstSelect, second: secondSelect, third: ""});
      output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      historyArr2.push(output2);
      
      firstSelect = "";
      secondSelect = "";
      thirdSelect = "";
      secondVar = "";
      thirdVar = "";
      
      }
      //thirdSelect = "";
    }
    if (thirdVar === "Sum"){
      
      output = Sum(e, events, firstVar);

      if( firstSelect && secondSelect && thirdSelect){
        metricArray.push(newList3Sum);
      }
      
      if ( (thirdSelect || (secondSelect && isCount) ) && isSubmitted){
      historyArr.push({type: "Aggregation", first: firstSelect, second: secondSelect, third: thirdSelect});
      //console.log(isSubmitted);
      
      output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      historyArr2.push(output2);
      
      
      firstSelect = "";
      secondSelect = "";
      thirdSelect = "";
      secondVar = "";
      thirdVar = "";
      
      
      }
      
    }
    if (thirdVar === "Min"){
       output = Min(e, events, firstVar);

       if( firstSelect && secondSelect && thirdSelect){
       metricArray.push(newList2Min);
       }

       if (thirdSelect && isSubmitted){
       historyArr.push({type: "Aggregation", first: firstSelect, second: secondSelect, third: thirdSelect});

       output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      historyArr2.push(output2);

      firstSelect = "";
      secondSelect = "";
      thirdSelect = "";
      secondVar = "";
      thirdVar = "";
       }
      // thirdSelect = "";
    }
    if (thirdVar === "Max"){
       output = Max(e, events, firstVar);

       if( firstSelect && secondSelect && thirdSelect){
        metricArray.push(newList2Max);
       }

       if (thirdSelect && isSubmitted){
       historyArr.push({type: "Aggregation", first: firstSelect, second: secondSelect, third: thirdSelect});

       output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      historyArr2.push(output2);

      firstSelect = "";
      secondSelect = "";
      thirdSelect = "";
      secondVar = "";
      thirdVar = "";
       }
       //thirdSelect = "";
    }
    if (fourthVar === "Average"){
      output = Average(e, events, firstVar);
      //metricArray.push(newList2Max);
      if (thirdSelect && isSubmitted){
      historyArr.push({type: "Aggregation", first: firstSelect, second: secondSelect, third: thirdSelect});
      //Aggregation: firstSelect + "-" + secondSelect + "-" + thirdSelect

      output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      historyArr2.push(output2);

      firstSelect = "";
      secondSelect = "";
      thirdSelect = "";
      secondVar = "";
      thirdVar = "";
      }
      //thirdSelect = "";
   }
    
  
	return output;
}


export default aggregate;