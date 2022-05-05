import { newList1 } from "../aggFunctions";
import { anotherMet, metricArray } from "../../metrics/NewMetricForm";
import { outputArr } from "../../metrics/NewMetricForm";
import { isSubmitted } from "../../metrics/NewMetricForm";
import { setOutput } from "../../metrics/NewMetricForm";


export var newList2 = [];
var  secondVar;
var newList3 = [];
let maxDuration;
let maxClicks;
let maxCloses;

let maxUserDurr;
let maxUserCli = 0;
let maxUserClo = 0;

let maxCountryDurr;
let maxCountryCli;
let maxCountryClo;

let maxEventDurr;
let maxEventCli;
let maxEventClo;

let maxBlankEvent;
let maxBlank;
let maxBlankCli;
let maxBlankClo;


function Max(e, events, firstVar){
	if (!anotherMet){
	var index;
	let output = "";
	

	//(newList1[0].hasOwnProperty('ID')
	if ( e.label === "Max" ){
		maxDuration = events[3].duration;
		maxClicks = events[3].clicks;
		maxCloses = events[3].closes;

		for (let i = 0; i < newList1.length; i++){
		  if ( events[i].duration > maxDuration ){
		    maxDuration = events[i].duration;
		    maxUserDurr = events[i].ID;
		    maxCountryDurr = events[i].country;
		    maxEventDurr = events[i].name;
		  }
		  if ( events[i].clicks > maxClicks ){
			maxClicks = events[i].clicks;
			maxUserCli = events[i].ID;
			maxCountryCli = events[i].country;
			maxEventCli = events[i].name;
		      }
		  if ( events[i].closes > maxCloses ){
			maxCloses = events[i].closes;
			maxUserClo = events[i].ID;
			maxCountryClo = events[i].country;
			maxEventClo = events[i].name;
		      }		  
		}
	      }
	      
	      if (firstVar === "User ID"){
		if ( e.label === "Duration" ){
			output = "Maximum Duration \n\n" + "User: " + maxUserDurr + "\n" + "Duration: " + maxDuration + "\n\n";
			newList2.push({ID: maxUserDurr, duration: maxDuration});

			setOutput([]);
			outputArr.push({ID: maxUserDurr, duration: maxDuration});
		}
		else if ( e.label === "Clicks" ){
			output = "Maximum Clicks \n\n" + "User: " + maxUserCli + "\n" + "Clicks: " + maxClicks + "\n\n";
			newList2.push({ID: maxUserCli, clicks: maxClicks});

			setOutput([]);
			outputArr.push({ID: maxUserCli, clicks: maxClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Maximum Closes \n\n" + "User: " + maxUserClo + "\n" + "Closes: " + maxCloses + "\n\n";
			newList2.push({ID: maxUserClo, closes: maxCloses});

			setOutput([]);
			outputArr.push({ID: maxUserClo, closes: maxCloses});

		}
	     }
	     else if (firstVar === "Country"){
		if ( e.label === "Duration" ){
			output = "Maximum Duration \n\n" + "Country: " + maxCountryDurr + "\n" + "Duration: " + maxDuration + "\n\n";
			newList2.push({country: maxCountryDurr, duration: maxDuration});

			setOutput([]);
			outputArr.push({country: maxCountryDurr, duration: maxDuration});
		}
		else if ( e.label === "Clicks" ){
			output = "Maximum Clicks \n\n" + "Country: " + maxCountryCli + "\n" + "Clicks: " + maxClicks + "\n\n";
			newList2.push({country: maxCountryCli, clicks: maxClicks});

			setOutput([]);
			outputArr.push({country: maxCountryCli, clicks: maxClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Maximum Closes \n\n" + "Country: " + maxCountryClo + "\n" + "Closes: " + maxCloses + "\n\n";
			newList2.push({country: maxCountryClo, closes: maxCloses});

			setOutput([]);
			outputArr.push({country: maxCountryClo, closes: maxCloses});

		}
	     }
	     else if (firstVar === "Event Name"){
		if ( e.label === "Duration" ){
			output = "Maximum Duration \n\n" + "Event: " + maxEventDurr + "\n" + "Duration: " + maxDuration + "\n\n";
			newList2.push({name: maxEventDurr, duration: maxDuration});

			setOutput([]);
			outputArr.push({name: maxEventDurr, duration: maxDuration});

		}
		else if ( e.label === "Clicks" ){
			output = "Maximum Clicks \n\n" + "Event: " + maxEventCli + "\n" + "Clicks: " + maxClicks + "\n\n";
			newList2.push({name: maxEventCli, duration: maxClicks});

			setOutput([]);
			outputArr.push({name: maxEventCli, duration: maxClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Maximum Closes \n\n" + "Event: " + maxEventClo + "\n" + "Closes: " + maxCloses + "\n\n";
			newList2.push({name: maxEventClo, duration: maxCloses});

			setOutput([]);
			outputArr.push({name: maxEventClo, duration: maxCloses});

		}
	     }
	     else if (firstVar === "All"){
		if ( e.label === "Duration" ){
			output = "Maximum Duration All\n\n" + "Duration: " + maxDuration + "\n\n";
			//newList2.push({name: minEventDurr, duration: minDuration});

			setOutput([]);
			outputArr.push({name: "Maximum Duration All", duration: maxDuration});

		}
		else if ( e.label === "Clicks" ){
			output = "Maximum Clicks All\n\n" + "Clicks: " + maxClicks + "\n\n";
			//newList2.push({name: minEventCli, duration: minClicks});

			setOutput([]);
			outputArr.push({name: "Maximum Clicks All", duration: maxClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Maximum Closes All\n\n" + "Closes: " + maxCloses + "\n\n";
			//newList2.push({name: minEventClo, duration: minCloses});

			setOutput([]);
			outputArr.push({name: "Maximum Closes All", duration: maxCloses});

		}
	     }
	      

	return output;
	}
	else{
		var index;
		let output = "";

		if (firstVar === "User ID" || firstVar === "Country" || firstVar === "Event Name"){
			//firstVar = e.label;
			//console.log(metricArray);
			if (firstVar === "User ID"){
				firstVar = "ID";
			}
			else if (firstVar === "Country"){
				firstVar = "country";
			}
			else if (firstVar === "Event Name"){
				firstVar = "name";
			}
		}
		if (e.label === "Duration" || e.label === "Clicks" || e.label === "Closes"){
			secondVar = e.label;
			if (secondVar === "Duration"){
				secondVar = "duration";
				//console.log(secondVar);
			}
			else if (secondVar === "Clicks"){
				secondVar = "clicks";
			}
			else if (secondVar === "Closes"){
				secondVar = "closes";
			}
		}
		//console.log(secondVar);

		if ( firstVar && secondVar ){
			maxBlank = metricArray[0][0][secondVar];
			maxBlankEvent = metricArray[0][0][firstVar];
			
			//console.log(metricArray[0], " ");
			//console.log(firstVar);

			for (let i = 0; i < metricArray[0].length; i++){
			  if ( metricArray[0][i][secondVar] > maxBlank ){
			    maxBlank = metricArray[0][i][secondVar];
			    maxBlankEvent = metricArray[0][i][firstVar];
			  }	  
			}
			
		}

		if (( firstVar === "All") && (firstVar && secondVar) && isSubmitted){
			output = "Maximum " + secondVar +  "\n\n" + firstVar + "\n" + secondVar + ": " + maxBlank + "\n\n";
			newList2.push({[firstVar]: maxBlankEvent, [secondVar]: maxBlank});

			setOutput([]);
			outputArr.push({[firstVar]: maxBlankEvent, [secondVar]: maxBlank});
		}
		else if (firstVar && secondVar && isSubmitted){
			output = "Maximum " + secondVar +  "\n\n" + firstVar + ": " + maxBlankEvent + "\n" + secondVar + ": " + maxBlank + "\n\n";
			newList2.push({[firstVar]: maxBlankEvent, [secondVar]: maxBlank});

			setOutput([]);
			outputArr.push({[firstVar]: maxBlankEvent, [secondVar]: maxBlank});
			
		}

		return output;

	}

}

export default Max;