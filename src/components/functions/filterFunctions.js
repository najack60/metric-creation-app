
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { anotherMet, metricArray } from "../metrics/NewMetricForm";
import { historyArr, historyArr2 } from "../metrics/NewMetricForm";
import { outputArr } from "../metrics/NewMetricForm";
import { isSubmitted } from "../metrics/NewMetricForm";
import {setOutput} from "../metrics/NewMetricForm";


let newArray1 = [];
let newArray2 = [];
let anotherArr1 = [];
let firstVar;
let secondVar;
let thirdVar;
let output = "";
let finalOutput = {};
export let output2;

//firstVar1, secondVar1, thirdVar1
function filterAnother(metricArray1){
	      
	      
	//console.log(metricArray1.country);
	//for (let i = 0; i < metricArray1.length; i++){
		if (secondVar === '=='){
			//console.log(firstVar);
			//console.log(metricArray1[firstVar]);
			return metricArray1[firstVar] === thirdVar;
			
		}
		else if(secondVar === '>'){
			return metricArray1[firstVar] > thirdVar;
		}
		else if(secondVar === '<'){
			return metricArray1[firstVar] < thirdVar;
		}
	//}	
}

function Filter(e) {
	if (!anotherMet){
	var promiseArray = [];
	

	if (e.label === "User ID" || e.label === "Country" || e.label === "Event Name" || e.label === "Timestamp"){
		firstVar = e.label;
		if (firstVar === "User ID"){
			firstVar = "ID";
		}
		else if (firstVar === "Country"){
			firstVar = "country";
		}
		else if (firstVar === "Event Name"){
			firstVar = "name";
		}
		else if (firstVar === "Timestamp"){
			firstVar = "time_stamp";
		}
	}
	else if (e.label === "==" || e.label === ">" || e.label === "<"){
		secondVar = e.label;
	}
	else if (e.label === "launch" || e.label === "Jan 28th, 2022" || e.label === 5 || e.label === "USA" || e.label === "MEX" || e.label === "CAN" ){
		//1643488500
		thirdVar = e.label;
		if (thirdVar === "Jan 28th, 2022"){
			let timestamp = new Date('2022-01-28 12:00:00 AM');
			thirdVar = timestamp;
		}
		else{
			//do nothing
		}
	}
	
	if (firstVar && secondVar && thirdVar ){
		historyArr.push({type: "Filter", first: firstVar, second: secondVar, third: thirdVar});
		output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
      		historyArr2.push(output2);
		
		
		const q = query(collection(db, "events"), where(firstVar, secondVar, thirdVar));
		
		
		
		const querySnapshot = promiseArray.push( getDocs(q).then(snapshot => {

		
		snapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			//console.log(doc.id, " => ", doc.data());
			newArray1.push(doc.data());
		});
		
		setOutput([]);
		for (let i = 0; i < newArray1.length; i++){
			const date = newArray1[i].time_stamp.toDate().toDateString();
			output = output + "ID: " + newArray1[i].ID + "\n" +"Clicks: " + newArray1[i].clicks + "\n" + "Closes: " + newArray1[i].closes + "\n" + "Country: " + newArray1[i].country + "\n" + "Duration: " + newArray1[i].duration + "\n" + "Event Name: " + newArray1[i].name + "\n" + "Timestamp: " + date + "\n\n";

			outputArr.push({ID: newArray1[i].ID, clicks: newArray1[i].clicks, closes: newArray1[i].closes, country: newArray1[i].country, duration: newArray1[i].duration, name: newArray1[i].name, time_stamp: date});
		}
		newArray1.push(output);

		
		
		return Promise.all(newArray1);
		})
	)
		
		
	}
	}
	else{
		//console.log("I'm here")
		if (firstVar && secondVar && thirdVar){
		firstVar = "";
		secondVar = "";
		thirdVar = "";
		anotherArr1 = [];
		var promiseArray = [];
		output = "";
		
		}
	

	if (e.label === "User ID" || e.label === "Country" || e.label === "Event Name" || e.label === "Timestamp"){
		//console.log("I'm here")
		firstVar = e.label;
		
		if (firstVar === "User ID"){
			firstVar = "ID";
		}
		else if (firstVar === "Country"){
			firstVar = "country";
		}
		else if (firstVar === "Event Name"){
			firstVar = "name";
		}
		else if (firstVar === "Timestamp"){
			firstVar = "time_stamp";
		}
	}
	else if (e.label === "==" || e.label === ">" || e.label === "<"){
		secondVar = e.label;
		//console.log(firstVar);
	}
	else if (e.label === "launch" || e.label === "Jan 28th, 2022" || e.label === 5 || e.label === "USA" || e.label === "MEX" || e.label === "CAN" ){
		//1643488500
		thirdVar = e.label;
		if (thirdVar === "Jan 28th, 2022"){
			let timestamp = new Date('2022-01-28 12:00:00 AM');
			thirdVar = timestamp;
		}
		else{
			//do nothing
		}
	}
	if (firstVar && secondVar && thirdVar ){
		anotherArr1 = metricArray[metricArray.length-1].filter(filterAnother);
		let i = 0;
		let j = 0;
		let k = 0;
		let date;
		let last = "";
		//console.log(secondVar);
		//console.log(anotherArr1[0][firstVar]);
		setOutput([]);
		finalOutput = {};

		anotherArr1.forEach(function(obj, index){
			for (var key in obj){
				if (j === Object.keys(anotherArr1[0]).length-1){

					outputArr.push(finalOutput);
					finalOutput = {}
				    last = key;
				   // console.log("I'm here");

				}
				j++;
			}
		});
		
		anotherArr1.forEach(function(obj, index){
			//output = output + index + ": ";
			for (var key in obj){
				// if ( (i === Object.keys(anotherArr1[0]).length-1)){

				// 	outputArr.push(finalOutput);
				// 	//console.log()
				// 	finalOutput = {}
				//     last = key;
				// }
				

			    if (key === "time_stamp"){
				    
				    date = anotherArr1[k].time_stamp.toDate().toDateString();
				    obj[key] = date;
			    	}
			    newArray2.push({[key]: obj[key]});
			    	


			    finalOutput = Object.assign(finalOutput, newArray2[i]);
			    
			    //console.log(finalOutput, i);


			    if ( key === last){
				
				    outputArr.push(finalOutput);

				finalOutput = {};
			    }

			    output = output + key + ": " + obj[key] + "\n";

			    i++;

			}
			output = output + "\n";

			//console.log(finalOutput);

			k++;
		    });
		    
		//     for (let i = 0; i < newArray2.length; i++){
		// 	finalOutput = Object.assign(finalOutput, newArray2[i]);
		// 	}
		//     //outputArr.push({ID: newArray2.ID, clicks: newArray2.clicks, closes: newArray2.closes, country: newArray2.country, duration: newArray2.duration, name: newArray2.name, time_stamp: date});
		// outputArr.push(finalOutput);

		//output = firstVar + ": " + anotherArr1[0][firstVar] + "\n" + ;
		//console.log(output);
		historyArr.push({type: "Filter", first: firstVar, second: secondVar, third: thirdVar});
		output2 = JSON.stringify(historyArr[historyArr.length-1], null, 0);
		historyArr2.push(output2);
		//metricArray.push(anotherArr1[anotherArr1.length-1]);
		//console.log(anotherArr1);


		return output;
	}




	}
	//console.log(promiseArray);
	//console.log(anotherArr1);

	
	return Promise.all(promiseArray);
	
}

export default Filter;