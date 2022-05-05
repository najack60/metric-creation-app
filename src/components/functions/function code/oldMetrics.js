import MeetupList from "../../meetups/MeetupList";
import { getDatabase, query, orderByChild, where } from "firebase/database";
import { orderBy, collection, onSnapshot } from "firebase/firestore";
import { ref as sRef } from 'firebase/storage';
import { db } from "../../../firebase-config";

//import { useState } from "react";
let outsideHist = [];
function DisplayMets(history) {
  //const [oldHist, setOldHist] = useState([]);
  let oldEventsArr = [];
  let newEventsArr = [];
  let history2 = [];

 

  let output = "";
  //const history2 = query(sRef(db, 'history'), orderByChild('TimeStamp'));
  const colRef = collection(db, 'history');
  const q = query(colRef, orderBy('TimeStamp', 'desc')); //asc or desc

  onSnapshot(q, (snapshot) => {
    //let arr = [];
    snapshot.docs.forEach((doc) => {
      history2.push({...doc.data(), id: doc.id});
    });


    for (let i = 0; i < history2.length; i++) {    
      //if (history2[i].history[0] !== "empty"){
        newEventsArr.push({time: history2[i].timeStamp});
      //}
  
      for (let j = 0; j < history2[i].history.length; j++){
  


       // if (history2[i].history2[j] !== "empty"){
            newEventsArr.push(history2[i].history[j]);            
       // }
        
  
      }
      outsideHist = newEventsArr;
      //output = output + JSON.stringify(history[i], null, 0) + "\n\n";
    }


  });

   
  

  // for (let i = 0; i < history2.length; i++) {    
  //   oldEventsArr.push(history2[i]);
  //   if (history2[i].history2[0] !== "empty"){
  //     newEventsArr.push({time: history2[i].timeStamp});
  //    // console.log(history[i].timeStamp);
  //   }

  //   for (let j = 0; j < history2[i].history.length; j++){

  //     if (history2[i].history2[j] !== "empty"){
  //         newEventsArr.push(history2[i].history2[j]);
          
  //         //console.log(history[i].history[j]);
  //     }
      

  //   }

  //   //output = output + JSON.stringify(history[i], null, 0) + "\n\n";
  // }

/////////////////////////////////////////////////////////////////////////////////////////////

  //setOldHist(oldEventsArr);

  // let i = 0;
  // oldEventsArr.forEach(function (obj, index) {
  //   for (var key in obj) {
  //     if (key === "time_stamp") {
  //       const date = oldEventsArr[i].time_stamp.toDate().toDateString();
  //       obj[key] = date;
  //       i++;
  //     }

  //     output = output + key + ": " + obj[key] + "\n";
  //   }
  //   output = output + "\n";
  // });

  // oldEventsArr.forEach(function (obj, index) {
	// for (var key in obj) {
	//   if (key === "history") {
	//     //newEventsArr.push(obj[key]);
	//     i++;
	//   }
  //   	}
  //     });

  //return output;
  //console.log(outsideHist);
  return outsideHist;
}

export default DisplayMets;
