import { newList1 } from "../aggFunctions";
import { anotherMet, metricArray } from "../../metrics/NewMetricForm";
import { outputArr } from "../../metrics/NewMetricForm";
import { isSubmitted } from "../../metrics/NewMetricForm";
import { setOutput } from "../../metrics/NewMetricForm";



let newList2 = [];
let secondVar = "";


function Average(e, events, firstVar) {
    if (!anotherMet){
	let output = "";
	if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
		secondVar = e.label;
		if (secondVar === "Duration"){
			secondVar = "duration";
		}
		else if (secondVar === "Clicks"){
			secondVar = "clicks";
		}
		else if (secondVar === "Closes"){
			secondVar = "closes";
		}
	}
  if (e.label === "Average") {

	
	if ( (e.label === "Average") && (firstVar === "All") ){
	let sumDurr = 0;
	let sumClick = 0;
	let sumClose = 0;

	for (let i = 0; i < newList1.length; i++){
	    sumDurr = sumDurr + events[i].duration;
	    sumClick = sumClick + events[i].clicks;
	    sumClose = sumClose + events[i].closes;
	}
	
	newList2.push({duration: sumDurr, clicks: sumClick, closes: sumClose});
	
}
  }

  if ( (firstVar === "All") && secondVar && isSubmitted){
	  
	for (let i = 0; i < newList2.length; i++){
		output = output + "All Average \n" + secondVar + ": " + newList2[0][secondVar]/events.length;

	}
	//console.log(output);
	setOutput([]);
	outputArr.push({ID: "Average: " + secondVar, [secondVar]: newList2[0][secondVar]/events.length});

   }
   	//console.log(outputArr);
	return output;
}
else{
	let output = "";
	if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
		secondVar = e.label;
		if (secondVar === "Duration"){
			secondVar = "duration";
		}
		else if (secondVar === "Clicks"){
			secondVar = "clicks";
		}
		else if (secondVar === "Closes"){
			secondVar = "closes";
		}
	}
  if (e.label === "Average") {

	
	if ( (e.label === "Average") && (firstVar === "All") ){
	let sumDurr = 0;
	let sumClick = 0;
	let sumClose = 0;

	for (let i = 0; i < metricArray[metricArray.length-1].length; i++){
	    sumDurr = sumDurr + metricArray[metricArray.length-1][i].duration;
	    sumClick = sumClick + metricArray[metricArray.length-1][i].clicks;
	    sumClose = sumClose + metricArray[metricArray.length-1][i].closes;
	}
	
	newList2.push({duration: sumDurr, clicks: sumClick, closes: sumClose});
	
}
  }

  if ( (firstVar === "All") && secondVar && isSubmitted){
	  
	for (let i = 0; i < newList2.length; i++){
		output = output + "All Average \n" + secondVar + ": " + newList2[0][secondVar]/events.length;

	}
	//console.log(output);
	setOutput([]);
	outputArr.push({ID: "Average: " + secondVar, [secondVar]: newList2[0][secondVar]/metricArray[metricArray.length-1].length});

   }
   	//console.log(outputArr);
	return output;



	
}

}
export default Average;
