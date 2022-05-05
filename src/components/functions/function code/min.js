import { newList1 } from "../aggFunctions";
import { anotherMet, metricArray } from "../../metrics/NewMetricForm";
import { outputArr } from "../../metrics/NewMetricForm";
import { isSubmitted } from "../../metrics/NewMetricForm";
import { setOutput } from "../../metrics/NewMetricForm";


export var newList2 = [];
var  secondVar;
var newList3 = [];
let minDuration;
let minClicks;
let minCloses;

let minUserDurr;
let minUserCli = 0;
let minUserClo = 0;

let minCountryDurr;
let minCountryCli;
let minCountryClo;

let minEventDurr;
let minEventCli;
let minEventClo;

let minBlankEvent;
let minBlank;
let minBlankCli;
let minBlankClo;


function Min(e, events, firstVar){
	if (!anotherMet){
	var index;
	let output = "";
	

	//(newList1[0].hasOwnProperty('ID')
	if ( e.label === "Min" ){
		minDuration = events[3].duration;
		minClicks = events[3].clicks;
		minCloses = events[3].closes;

		for (let i = 0; i < newList1.length; i++){
		  if ( events[i].duration < minDuration ){
		    minDuration = events[i].duration;
		    minUserDurr = events[i].ID;
		    minCountryDurr = events[i].country;
		    minEventDurr = events[i].name;
		  }
		  if ( events[i].clicks < minClicks ){
			minClicks = events[i].clicks;
			minUserCli = events[i].ID;
			minCountryCli = events[i].country;
			minEventCli = events[i].name;
		      }
		  if ( events[i].closes < minCloses ){
			minCloses = events[i].closes;
			minUserClo = events[i].ID;
			minCountryClo = events[i].country;
			minEventClo = events[i].name;
		      }		  
		}
	      }
	      
	      if (firstVar === "User ID"){
		if ( e.label === "Duration" ){
			output = "Minimum Duration \n\n" + "User: " + minUserDurr + "\n" + "Duration: " + minDuration + "\n\n";
			newList2.push({ID: minUserDurr, duration: minDuration});

			setOutput([]);
			outputArr.push({ID: minUserDurr, duration: minDuration});
		}
		else if ( e.label === "Clicks" ){
			output = "Minimum Clicks \n\n" + "User: " + minUserCli + "\n" + "Clicks: " + minClicks + "\n\n";
			newList2.push({ID: minUserCli, clicks: minClicks});

			setOutput([]);
			outputArr.push({ID: minUserCli, clicks: minClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Minimum Closes \n\n" + "User: " + minUserClo + "\n" + "Closes: " + minCloses + "\n\n";
			newList2.push({ID: minUserClo, closes: minCloses});

			setOutput([]);
			outputArr.push({ID: minUserClo, closes: minCloses});

		}
	     }
	     else if (firstVar === "Country"){
		if ( e.label === "Duration" ){
			output = "Minimum Duration \n\n" + "Country: " + minCountryDurr + "\n" + "Duration: " + minDuration + "\n\n";
			newList2.push({country: minCountryDurr, duration: minDuration});

			setOutput([]);
			outputArr.push({country: minCountryDurr, duration: minDuration});
		}
		else if ( e.label === "Clicks" ){
			output = "Minimum Clicks \n\n" + "Country: " + minCountryCli + "\n" + "Clicks: " + minClicks + "\n\n";
			newList2.push({country: minCountryCli, clicks: minClicks});

			setOutput([]);
			outputArr.push({country: minCountryCli, clicks: minClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Minimum Closes \n\n" + "Country: " + minCountryClo + "\n" + "Closes: " + minCloses + "\n\n";
			newList2.push({country: minCountryClo, closes: minCloses});

			setOutput([]);
			outputArr.push({country: minCountryClo, closes: minCloses});

		}
	     }
	     else if (firstVar === "Event Name"){
		if ( e.label === "Duration" ){
			output = "Minimum Duration \n\n" + "Event: " + minEventDurr + "\n" + "Duration: " + minDuration + "\n\n";
			newList2.push({name: minEventDurr, duration: minDuration});

			setOutput([]);
			outputArr.push({name: minEventDurr, duration: minDuration});

		}
		else if ( e.label === "Clicks" ){
			output = "Minimum Clicks \n\n" + "Event: " + minEventCli + "\n" + "Clicks: " + minClicks + "\n\n";
			newList2.push({name: minEventCli, duration: minClicks});

			setOutput([]);
			outputArr.push({name: minEventCli, duration: minClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Minimum Closes \n\n" + "Event: " + minEventClo + "\n" + "Closes: " + minCloses + "\n\n";
			newList2.push({name: minEventClo, duration: minCloses});

			setOutput([]);
			outputArr.push({name: minEventClo, duration: minCloses});

		}
	     }
	     else if (firstVar === "All"){
		if ( e.label === "Duration" ){
			output = "Minimum Duration All\n\n" + "Duration: " + minDuration + "\n\n";
			//newList2.push({name: minEventDurr, duration: minDuration});

			setOutput([]);
			outputArr.push({name: "Minimum Duration All", duration: minDuration});

		}
		else if ( e.label === "Clicks" ){
			output = "Minimum Clicks All\n\n" + "Clicks: " + minClicks + "\n\n";
			//newList2.push({name: minEventCli, duration: minClicks});

			setOutput([]);
			outputArr.push({name: "Minimum Clicks All", duration: minClicks});

			}
		else if ( e.label === "Closes" ){
			output = "Minimum Closes All\n\n" + "Closes: " + minCloses + "\n\n";
			//newList2.push({name: minEventClo, duration: minCloses});

			setOutput([]);
			outputArr.push({name: "Minimum Closes All", duration: minCloses});

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
			minBlank = metricArray[0][0][secondVar];
			minBlankEvent = metricArray[0][0][firstVar];
			
			//console.log(metricArray[0], " ");
			//console.log(firstVar);

			for (let i = 0; i < metricArray[0].length; i++){
			  if ( metricArray[0][i][secondVar] < minBlank ){
			    minBlank = metricArray[0][i][secondVar];
			    minBlankEvent = metricArray[0][i][firstVar];

			    console.log(metricArray[0][i][secondVar]);
			  }	  
			}
			
		}

		if (( firstVar === "All") && (firstVar && secondVar) && isSubmitted ){
			output = "Minimum " + secondVar +  "\n\n" + firstVar + "\n" + secondVar + ": " + minBlank + "\n\n";
			newList2.push({[firstVar]: minBlankEvent, [secondVar]: minBlank});

			setOutput([]);
			outputArr.push({[firstVar]: minBlankEvent, [secondVar]: minBlank});
		}
		else if (firstVar && secondVar && isSubmitted){
			output = "Minimum " + secondVar +  "\n\n" + firstVar + ": " + minBlankEvent + "\n" + secondVar + ": " + minBlank + "\n\n";
			newList2.push({[firstVar]: minBlankEvent, [secondVar]: minBlank});

			setOutput([]);
			outputArr.push({[firstVar]: minBlankEvent, [secondVar]: minBlank});
			
		}

		return output;

	}

}

export default Min;