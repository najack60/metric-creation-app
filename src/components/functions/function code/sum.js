import { newList1 } from "../aggFunctions";
import { anotherMet, metricArray } from "../../metrics/NewMetricForm";
import { thirdSelect, isCount } from "../aggFunctions";
import { outputArr } from "../../metrics/NewMetricForm";
import { isSubmitted } from "../../metrics/NewMetricForm";
import { setOutput } from "../../metrics/NewMetricForm";


var newList2 = [];
let newArray1 = [];
var  secondVar;
export var newList3 = [];
let lastThirdVar = "";
let finalOutput = {};

let sum = 0;


function Sum(e, events, firstVar) {
    if (!anotherMet){
	var index;
	let output = "";

	
	

	if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
		secondVar = e.label;
		if (secondVar === "Duration"){
			secondVar = "duration";
			lastThirdVar = "duration";
		}
		else if (secondVar === "Clicks"){
			secondVar = "clicks";
			lastThirdVar = "clicks";
		}
		else if (secondVar === "Closes"){
			secondVar = "closes";
			lastThirdVar = "closes";
		}
	}

	//(newList1[0].hasOwnProperty('ID')
	if ( (e.label === "Sum") && (newList1[0].hasOwnProperty('ID')) && (firstVar === "User ID") ){
		for (let i = 0; i < newList1.length; i++){
		  if ( newList2.some(v => v.ID === newList1[i].ID) ){
		    index = newList2.findIndex(function(value) {
		      return value.ID === newList1[i].ID;
		    });
	  
		    newList2[index].duration = newList2[index].duration + newList1[i].duration;
		    newList2[index].clicks = newList2[index].clicks + newList1[i].clicks;
		    newList2[index].closes = newList2[index].closes + newList1[i].closes;
		  }
		  else{
		  newList2.push({ID: events[i].ID, country: events[i].country, name: events[i].name, duration: events[i].duration, clicks: events[i].clicks, closes: events[i].closes, timestamp: events[i].time_stamp});
		  
		  }
		}
	  
	      }
	      else if ( (e.label === "Sum") && (newList1[0].hasOwnProperty('country')) && (firstVar === "Country") ){
		for (let i = 0; i < newList1.length; i++){
		  if ( newList2.some(v => v.country === newList1[i].country) ){
		    index = newList2.findIndex(function(value) {
		      return value.country === newList1[i].country;
		    });
	  
		    newList2[index].duration = newList2[index].duration + newList1[i].duration;
		    newList2[index].clicks = newList2[index].clicks + newList1[i].clicks;
		    newList2[index].closes = newList2[index].closes + newList1[i].closes;
		  }
		  else{
		  newList2.push({ID: events[i].ID, country: events[i].country, name: events[i].name, duration: events[i].duration, clicks: events[i].clicks, closes: events[i].closes, timestamp: events[i].time_stamp});
		  
		  }
		}
	  
	      }
	      else if ( (e.label === "Sum") && (newList1[0].hasOwnProperty('name')) && (firstVar === "Event Name") ){
		for (let i = 0; i < newList1.length; i++){
		  if ( newList2.some(v => v.name === newList1[i].name) ){
		    index = newList2.findIndex(function(value) {
		      return value.name === newList1[i].name;
		    });
	  
		    newList2[index].duration = newList2[index].duration + newList1[i].duration;
		    newList2[index].clicks = newList2[index].clicks + newList1[i].clicks;
		    newList2[index].closes = newList2[index].closes + newList1[i].closes;
		  }
		  else{
		  newList2.push({ID: events[i].ID, country: events[i].country, name: events[i].name, duration: events[i].duration, clicks: events[i].clicks, closes: events[i].closes, timestamp: events[i].time_stamp});
		  
		  }
		}
	  
	      }
	      else if ( (e.label === "Sum") && (firstVar === "All") ){
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
	      //console.log(newList2[0]);
	  
	      if ( e.label === "Duration" && (firstVar != "All") ){
		for (let i = 0; i < newList2.length; i++){
		  if (firstVar === "User ID"){
		  newList3.push({ID: newList2[i].ID, duration: newList2[i].duration});
		  }
		  else if (firstVar === "Country"){
		    newList3.push({country: newList2[i].country, duration: newList2[i].duration});
		  }
		  else if (firstVar === "Event Name"){
		    newList3.push({name: newList2[i].name, duration: newList2[i].duration});
		  }
		}
		//console.log(newList3);
		if (firstVar === "User ID"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "User: " + newList3[i].ID + "\n" + "Duration: " + newList3[i].duration + "\n\n";

		    outputArr.push({ID: newList3[i].ID, duration: newList3[i].duration});
		  }
		}
		else if (firstVar === "Country"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "Country: " + newList3[i].country + "\n" + "Duration: " + newList3[i].duration + "\n\n";

		    outputArr.push({country: newList3[i].country, duration: newList3[i].duration});

		  }
		}
		else if (firstVar === "Event Name"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "Event Name: " + newList3[i].name + "\n" + "Duration: " + newList3[i].duration + "\n\n";

		    outputArr.push({ID: newList3[i].name, duration: newList3[i].duration});

		  }
		}
	  
	      }
	      else if ( e.label === "Clicks" && (firstVar != "All") ){
		for (let i = 0; i < newList2.length; i++){
		    if (firstVar === "User ID"){
		    newList3.push({ID: newList2[i].ID, clicks: newList2[i].clicks});
		    }
		    else if (firstVar === "Country"){
		      newList3.push({country: newList2[i].country, clicks: newList2[i].clicks});
		    }
		    else if (firstVar === "Event Name"){
		      newList3.push({name: newList2[i].name, clicks: newList2[i].clicks});
		    }
		}
	  
		if (firstVar === "User ID"){
			setOutput([]);

			for (let i = 0; i < newList3.length; i++){
			  output = output + "User: " + newList2[i].ID + "\n" + "Clicks: " + newList3[i].clicks + "\n\n";

			  outputArr.push({ID: newList2[i].ID, clicks: newList3[i].clicks});

			}
		      }
		      else if (firstVar === "Country"){
			setOutput([]);

			for (let i = 0; i < newList3.length; i++){
			  output = output + "Country: " + newList2[i].country + "\n" + "Clicks: " + newList3[i].clicks + "\n\n";

			  outputArr.push({country: newList2[i].country, clicks: newList3[i].clicks});

			}
		      }
		      else if (firstVar === "Event Name"){
			setOutput([]);

			for (let i = 0; i < newList3.length; i++){
			  output = output + "Event Name: " + newList2[i].name + "\n" + "Clicks: " + newList3[i].clicks + "\n\n";

			  outputArr.push({name: newList2[i].name, clicks: newList3[i].clicks});

			}
		      }
	      }
	      else if ( e.label === "Closes" && (firstVar != "All") ){
		for (let i = 0; i < newList2.length; i++){
		    if (firstVar === "User ID"){
		    newList3.push({ID: newList2[i].ID, closes: newList2[i].closes});
		    }
		    else if (firstVar === "Country"){
		      newList3.push({country: newList2[i].country, closes: newList2[i].closes});
		    }
		    else if (firstVar === "Event Name"){
		      newList3.push({name: newList2[i].name, closes: newList2[i].closes});
		    }
		}
	  
	  
		if (firstVar === "User ID"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "User: " + newList2[i].ID + "\n" + "Closes: " + newList3[i].closes + "\n\n";

		    outputArr.push({ID: newList2[i].ID, closes: newList3[i].closes});

		  }
		}
		else if (firstVar === "Country"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "Country: " + newList2[i].country + "\n" + "Closes: " + newList3[i].closes + "\n\n";

		    outputArr.push({country: newList2[i].country, closes: newList3[i].closes});

		  }
		}
		else if (firstVar === "Event Name"){
			setOutput([]);

		  for (let i = 0; i < newList3.length; i++){
		    output = output + "Event Name: " + newList2[i].name + "\n" + "Closes: " + newList3[i].closes + "\n\n";

		    outputArr.push({name: newList2[i].name, closes: newList3[i].closes});

		  }
		}
		

	      }
	      else if (firstVar === "All" && secondVar && isSubmitted){
		setOutput([]);

		for (let i = 0; i < newList2.length; i++){
			output = output + "All Summation \n" + secondVar + ": " + newList2[0][secondVar];

			outputArr.push({ID: "All Summation", [secondVar]: newList2[0][secondVar]});

		}
		
		}
	      

	return output;
    } ///////////////////////start here!!!!!!!!!!!!///////////////////////////////////////////////////////////////////////////////////
    else{
	var index;
	let output = "";
	let isAll = false;


	if (firstVar === "User ID" || firstVar === "Country" || firstVar === "Event Name" || firstVar === "All"){
		//firstVar = e.label;
		if (firstVar === "User ID"){
			firstVar = "ID";
		}
		else if (firstVar === "Country"){
			firstVar = "country";
		}
		else if (firstVar === "Event Name"){
			firstVar = "name";
		}
		else if (firstVar === "All"){
			secondVar = lastThirdVar;
			isAll = true;
			
		}
	}
	if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
		secondVar = e.label;
		if (secondVar === "Duration"){
			secondVar = "duration";
			//console.log("I'm here");
		}
		else if (secondVar === "Clicks"){
			secondVar = "clicks";
		}
		else if (secondVar === "Closes"){
			secondVar = "closes";
		}
	}

	if (thirdSelect || isCount){
	//(newList1[0].hasOwnProperty('ID')
	
	if ( isAll ){
		if (!lastThirdVar){
			lastThirdVar = secondVar;
		}

//		let sum = 0;

		if (isCount){
			//console.log("I'm here");
			for (let i = 0; i < metricArray[metricArray.length-1].length; i++){
				sum = sum + metricArray[metricArray.length-1][i].count;
			}

			output = output + "count" + "\n" + "Sum: " + sum;

			if (isSubmitted){
				setOutput([]);
				outputArr.push({ID: "Count Sum", count: sum});
			//console.log(outputArr);
			}
		}
		else{
		for (let i = 0; i < metricArray[metricArray.length-1].length; i++){
			sum = sum + metricArray[metricArray.length-1][i][lastThirdVar];

			
		}

		output = output + lastThirdVar + "\n" + "Sum: " + sum;

		if (isSubmitted){
			setOutput([]);
			outputArr.push({ID: lastThirdVar + " Sum", [lastThirdVar]: sum});
		}

		//console.log(outputArr);

	}

	}
	else{
	if ( /*(e.label === "Sum")*/ firstVar ){

		for (let i = 0; i < metricArray[metricArray.length-1].length; i++){

		  if ( newList2.some(v => v[firstVar] === metricArray[metricArray.length-1][i][firstVar]) ){
		    index = newList2.findIndex(function(value) {
		      return value[firstVar] === metricArray[metricArray.length-1][i][firstVar];
		    });
	  
		    newList2[index].duration = newList2[index].duration + metricArray[metricArray.length-1][i].duration;
		    newList2[index].clicks = newList2[index].clicks + metricArray[metricArray.length-1][i].clicks;
		    newList2[index].closes = newList2[index].closes + metricArray[metricArray.length-1][i].closes;
		  }
		  else{
		    newList2.push(metricArray[metricArray.length-1][i]);
		  }
		}
   	}

	   if ( e.label === "Duration" || e.label === "Clicks" || e.label === "Closes" ){
		   
		for (let i = 0; i < newList2.length; i++){
			newList3.push({[firstVar]: newList2[i][firstVar], [secondVar]: newList2[i][secondVar]});
			
		}
	     }	
	     if (firstVar && secondVar && isSubmitted){
		finalOutput = {};
		let i = 0;

		setOutput([]);
		newList3.forEach(function(obj, index){
			for (var key in obj){
				output = output + key + ": " + obj[key] + "\n";

				newArray1.push({[key]: obj[key]});

				finalOutput = Object.assign(finalOutput, newArray1[i]);
				//console.log(key);

			    if (key === secondVar){
				outputArr.push(finalOutput);
				finalOutput = {};
			    }
			    i++;
				//console.log(key, ": ", obj[key]);
			}
			output = output + "\n";

			
		    });

		//     for (let i = 0; i < newArray1.length; i++){
		// 	finalOutput = Object.assign(finalOutput, newArray1[i]);

		// 	    if (newArray1[i][] === secondVar){
		// 		outputArr.push(finalOutput);
		// 		finalOutput = {};
		// 	    }
		// 	console.log(finalOutput);
		// 	}
			

			//outputArr.push({[firstVar]: newArray1[firstVar]});
			//console.log(newArray1[0]);

		    
		}
    }
}

	return output;
    }
    

}

export default Sum;