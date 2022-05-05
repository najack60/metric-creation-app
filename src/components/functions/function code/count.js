import { newList1 } from "../aggFunctions";
import { anotherMet, metricArray } from "../../metrics/NewMetricForm";
import { thirdSelect } from "../aggFunctions";
import { outputArr } from "../../metrics/NewMetricForm";
import { isSubmitted } from "../../metrics/NewMetricForm";
import { setOutput } from "../../metrics/NewMetricForm";



export var newList2 = [];
var  secondVar;
var newList3 = [];
let lastFirstVar = "";



function Count(e, events, firstVar){
	if (!anotherMet){
	var index;
	let output = "";
	let count = 0;

	//(newList1[0].hasOwnProperty('ID')
	     if ( (e.label === "Count") && (newList1[0].hasOwnProperty('ID')) ){
		for (let i = 0; i < newList1.length; i++){
			for ( let j = 0; j < newList1.length; j++){
				if (events[j].ID === events[i].ID){
					count++;
				}
			}

			if ( !newList2.some(v => v.ID === newList1[i].ID) ){
			newList2.push({ID: events[i].ID, count: count});
			}

			count = 0;
		    
		}
		//console.log(newList2, "size: ", newList2.length);
		lastFirstVar = "ID";
		//lastThirdVar = "count";
	      }
	      else if ( (e.label === "Count") && (newList1[0].hasOwnProperty('country')) ){
		for (let i = 0; i < newList1.length; i++){
			for ( let j = 0; j < newList1.length; j++){
				if (events[j].country === events[i].country){
					count++;
				}
			}

			if ( !newList2.some(v => v.country === newList1[i].country) ){
			newList2.push({country: events[i].country, count: count});
			}

			count = 0;
		}

		lastFirstVar = "country";
		//lastThirdVar = "count";
	      }
	      else if ( (e.label === "Count") && (newList1[0].hasOwnProperty('name')) ){
		for (let i = 0; i < newList1.length; i++){
			for ( let j = 0; j < newList1.length; j++){
				if (events[j].name === events[i].name){
					count++;
				}
			}
			if ( !newList2.some(v => v.name === newList1[i].name) ){
			newList2.push({name: events[i].name, count: count});
			}

			count = 0;
		    }

		    lastFirstVar = "name";
		    //lastThirdVar = "count";
		}
		
	  
	      
		
		if (firstVar === "User ID" && isSubmitted){
			setOutput([]);

		  for (let i = 0; i < newList2.length; i++){
			//if ( !output.includes(events[i].ID) ){
				output = output + "User: " + newList2[i].ID + "\n" + "Count: " + newList2[i].count + "\n\n";
			//}
				outputArr.push({ID: newList2[i].ID, count: newList2[i].count});
			//console.log(events[i].ID);
		  }
		}
		else if (firstVar === "Country" && isSubmitted){
			setOutput([]);

			for (let i = 0; i < newList2.length; i++){
				//if ( !output.includes(events[i].country) ){
					output = output + "Country: " + newList2[i].country + "\n" + "Count: " + newList2[i].count + "\n\n";
				//}
				outputArr.push({country: newList2[i].country, count: newList2[i].count});

			  }
		}
		else if (firstVar === "Event Name" && isSubmitted){
			setOutput([]);

			for (let i = 0; i < newList2.length; i++){
				//if ( !output.includes(events[i].name) ){
					output = output + "Event Name: " + newList2[i].name + "\n" + "Count: " + newList2[i].count + "\n\n";
				//}
				outputArr.push({name: newList2[i].name, count: newList2[i].count});

			  }
		}
		else if (firstVar === "All" && isSubmitted){
			output = "All Entries " + "\n" + "Count: " + events.length;

			setOutput([]);
			outputArr.push({ID: "All", count: events.length});

		}


	return output;
	}
	else{
		var index;
		let output = "";
		let count = 0;
		let isAll = false;
		

		if (firstVar === "User ID" || firstVar === "Country" || firstVar === "Event Name" || firstVar === "All"){
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
			else if (firstVar === "All"){
				firstVar = lastFirstVar;
				isAll = true;
			}
		}
		if (e.label === "Count"){
			secondVar = e.label;
			if (secondVar === "Count"){
				secondVar = "count";
			}
		}


		if ( isAll && (e.label === "Count") ){
			if (firstVar === "ID"){
				firstVar = "User ID";
			}
			else if (firstVar === "country"){
				firstVar = "Country";
			}
			else if (firstVar === "name"){
				firstVar = "Event Name";
			}

			if (thirdSelect){
				output = output + thirdSelect + "\n" + "Count: " + metricArray[metricArray.length-1].count;
				//console.log(metricArray[metricArray.length-1].count);
				//console.log(lastFirstVar);
				setOutput([]);
				outputArr.push({[lastFirstVar]: "All", count: metricArray[metricArray.length-1].count});


			}
			else{
				//console.log("I'm here 1");

				output = output + firstVar + "\n" + "Count: " + metricArray[metricArray.length-1].length;

				setOutput([]);
				outputArr.push({[lastFirstVar]: "All", count: metricArray[metricArray.length-1].length});

			}

		}
		else{
			//console.log("I'm here 2");

		//console.log(metricArray[metricArray.length-1].length);
		if ( (e.label === "Count") ){
			for (let i = 0; i < metricArray[metricArray.length-1].length; i++){
				for ( let j = 0; j < metricArray[metricArray.length-1].length; j++){
					if (metricArray[metricArray.length-1][j][firstVar] === metricArray[metricArray.length-1][i][firstVar]){
						count++;
					}
				}
				
				if ( !newList2.some(v => v[firstVar] === metricArray[metricArray.length-1][i][firstVar]) ){
				newList2.push({[firstVar]: metricArray[metricArray.length-1][i][firstVar], count: count});
				}
	
				count = 0;
			    
			}
			
			
		}
		//console.log(newList2);
		if (firstVar && secondVar && isSubmitted){
			//console.log("I'm here 3");
			setOutput([]);

			for (let i = 0; i < newList2.length; i++){
			      if ( !output.includes(metricArray[metricArray.length-1][i][firstVar]) ){
				      output = output + firstVar + ": " + newList2[i][firstVar] + "\n" + "Count: " + newList2[i].count + "\n\n";

				      outputArr.push({[firstVar]: newList2[i][firstVar], count: newList2[i].count});

			       }
			}
		}
	}
		



		return output;

	}

}



export default Count;