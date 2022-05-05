import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { db } from "../../firebase-config";
import { collection, getDocs, updateDoc, addDoc, doc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import $ from "jquery";
import classes from "./NewMetricForm.module.css";
import aggregate from "../functions/aggFunctions";
import {output2} from "../functions/aggFunctions";
import Filter from "../functions/filterFunctions";
import { aggLevelList, aggFuncList, aggFieldList, aggLevelList2, optionsOppList, optionsValList, optionsAvgList } from "../functions/variable";
import MeetupList from "../meetups/MeetupList";
import reRender from "../functions/variable";
//import classes2 from "../../../public/ColorBox.module.css";
//import DisplayMets from "../functions/function code/oldMetrics";
import DisplayMets from "../functions/function code/oldMetrics";
import ShowOldMet from "./MetOverlay";
import * as ReactBootStrap from "react-bootstrap";

//import { DUMMY_DATA } from "./data";
//import { type } from "@testing-library/user-event/dist/type";
window.jQuery = $;
require("jquery-colorbox");



export let metricArray = [];
export let anotherMet = false;
export let historyArr = [];
export let historyArr2 = [];
export let isSubmitted = false;
export var firstSelect = "";
export var thirdSelect = "";
export let outputArr = [];
let loaded = false;
let aggOutput;
let outFromOldMet;
let currDocID;

export function setOutput(value) {
  outputArr = value;
}

function NewMetricForm() {
  const [events, setEvents] = useState([]);
  const [oldHist, setOldHist] = useState([]);
  const [oldMetFunc, setOldMetFunc] = useState([]);
  const [disp, setDisp] = useState([]);
  const [loadedHistory, setLoadedHistory] = useState([]);
  const textInput = useRef();
  const [history, setHistory] = useState(["empty"]);
  const [history2, setHistory2] = useState([]);
 // const [disp2, setDisp2] = useState([]);
 
  
  
  const eventsCollectionRef = collection(db, "events");
  const eventsCollectionRef2 = collection(db, "history");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();

    const getOldHist = async () => {
      const data = await getDocs(eventsCollectionRef2);
      setOldHist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOldHist();
///////////////////////////////////////////////
    // addDoc(eventsCollectionRef2, {
    //   history: history,
    //   timeStamp: Date()
    // });

    // const getHistory = async () => {
    //   const data = await getDocs(eventsCollectionRef2);
    //   setHistory2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    // getHistory();

  }, []);

  //console.log(oldHist);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(eventsCollectionRef2);
  //     setHistory2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);


  
  const selectHandler = (e, val) => {
    
    let documentID;
    let output;
    //let output2 = "";
    //historyArr.push({test: 1}, {test2: 2});
    
      output = aggregate(e, events);
    
    
    if (val !== "third"){
      aggOutput = output;
    }

    // output2 = JSON.stringify(historyArr, null, 0);
    // historyArr2.push(output2);
    if(output2 && (val === "third")){
   // output2 = output2.replace(/[{}]/g, '');
  
   //setLoadedHistory(historyArr2);
   setLoadedHistory(historyArr);
   
   
     // console.log("I'm here");
   }

    //console.log(historyArr);
    //setDisp( "History: " + output2 + "\n\n" + output);

    if (!loaded){
      
      //setHistory(JSON.stringify(historyArr, null, 0));
      addDoc(eventsCollectionRef2, {
        history: history,
        timeStamp: Date(),
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()

      }).then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        currDocID = docRef.id;
        });

      const getHistory = async () => {
        const data = await getDocs(eventsCollectionRef2);
        setHistory2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getHistory();
      
      


      loaded = true;
    }
    else{
      setHistory(historyArr);//JSON.stringify(historyArr, null, 0));
      //console.log(JSON.stringify(historyArr, null, 0));
      // documentID = history2.map((hist)=>{
      //   return hist.id;
      // });

      const newField = {history: historyArr};//JSON.stringify(historyArr, null, 0)};
      
      //console.log(documentID[0]);
        const userDoc = doc(db, "history", currDocID);

        updateDoc(userDoc, newField);
      
    }

    if (val === "third"){
      setDisp(aggOutput);
      //setDisp(output);
      //console.log("Then Me");
      isSubmitted = false;
      
      
    }

    //console.log(isSubmitted);
    //console.log(JSON.stringify(historyArr, null, 0));
  
  };

  const selectHandler2 = (e, val) => {
    let documentID;
    
    
    if (val === "third"){
      const enteredText = textInput.current.value;
      e.preventDefault();
      //console.log(enteredText, val);
      if (!isNaN(parseInt(enteredText))){
        e.label = parseInt(enteredText);
      }
      else{
        e.label = enteredText;
      }
    }
      //console.log(e.label);

    let output;
    let output2 = "";

    if(!anotherMet){
      
    output = Filter(e).then(data => {
      // data will be an array of promise responses
      output2 = JSON.stringify(historyArr, null, 0);
      //historyArr2.push(output2);
      
      if(output2){
        //output2 = output2.replace(/[{}]/g, '');
        //setLoadedHistory(historyArr2);
        setLoadedHistory(historyArr);
      }
      //console.log(metricArray);
      //setDisp("History: " + output2 + "\n\n" + data[0][data[0].length-1]);
      setDisp(data[0][data[0].length-1]);

      metricArray.push(data[0].slice(0, data[0].length-1));
      //console.log(metricArray[0]);
    })

    if (!loaded){
      
      setHistory(historyArr);//JSON.stringify(historyArr, null, 0));
      addDoc(eventsCollectionRef2, {
        history: history,
        timeStamp: Date(),
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()

      }).then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        currDocID = docRef.id;
        });

      const getHistory = async () => {
        const data = await getDocs(eventsCollectionRef2);
        setHistory2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      
      getHistory();

      loaded = true;
    }
    else{
      setHistory(historyArr);//JSON.stringify(historyArr, null, 0));
      //console.log(JSON.stringify(historyArr, null, 0));
      // documentID = history2.map((hist)=>{
      //   return hist.id;
      // });
      // console.log(documentID);
      // console.log(type(documentID));
      const newField = {history: historyArr};//JSON.stringify(historyArr, null, 0)};
      //console.log(history[0]);
      const userDoc = doc(db, "history", currDocID);
      
      updateDoc(userDoc, newField);
    }
  }
  else{
    
    output = Filter(e);

    output2 = JSON.stringify(historyArr, null, 0);
    //historyArr2.push(output2);

      if(output2){
       // output2 = output2.replace(/[{}]/g, '');
       //setLoadedHistory(historyArr2);
       setLoadedHistory(historyArr);
      }
      //console.log(metricArray);
      //setDisp("History: " + output2 + "\n\n" + output);
      if (val === "third"){
        setDisp(output);

      }

    if (!loaded){
      
      setHistory(historyArr)//JSON.stringify(historyArr, null, 0));
      addDoc(eventsCollectionRef2, {
        history: history,
        timeStamp: Date(),
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()

      }).then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        currDocID = docRef.id;
        });

      const getHistory = async () => {
        const data = await getDocs(eventsCollectionRef2);
        setHistory2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getHistory();

      loaded = true;
    }
    else{
      setHistory(historyArr);//JSON.stringify(historyArr, null, 0));
      //console.log(JSON.stringify(historyArr, null, 0));
      // documentID = history2.map((hist)=>{
      //   return hist.id;
      // });
      // console.log(documentID);
      // console.log(type(documentID));
      const newField = {history: historyArr};//JSON.stringify(historyArr, null, 0)};
      //console.log(history[0]);
      const userDoc = doc(db, "history", currDocID);
      
      updateDoc(userDoc, newField);
    }
  }
 
  };

  const  refreshPage = ()=> {
    window.location.reload(true);
  }

  const  addMet = ()=> {
   //let testArr = [1,2,3];
    anotherMet = true;
    //setLoadedHistory(testArr);
  }
  
  const submitHand = ()=>{
    isSubmitted = true;
    //console.log("I'm here");
  }

  

  // const oldMet = ()=> {

  //   outFromOldMet = DisplayMets(oldHist);
  //   setOldMetFunc(outFromOldMet);

  // }
//setLoadedHistory(testArr);

// const players = [
//   {position: "ble", name: "sdoifh", team: "asdf"},
//   {position: "rr", name: "hr", team: "sdf"},
//   {position: "vbf", name: "dbth", team: "frrd"},
//   {position: "  bb", name: "rrgd", team: "rdg"},
// ];

const renderPlayer = (player, index) => {
  return (
    <tr key={index}>
      <td>{player.ID}</td>
      <td>{player.clicks}</td>
      <td>{player.closes}</td>
      <td>{player.country}</td>
      <td>{player.duration}</td>
      <td>{player.name}</td>
      <td>{player.count}</td>
      <td>{player.time_stamp}</td>
    </tr>
  )
}

//console.log(outputArr[0]) width: "190%";
  return (
    <div style={{display: "table", width: "190%"}} className={classes.actions}>



    <div style={{display: "table-row", height: "100px"}}>
      <div style={{ width: "50%", display: "table-cell"}} className={classes.dropDown1}>
        <h2>Aggregate Data</h2>
          <div style={{"fontWeight": "bold", padding: "3px"}}>Granularity</div>
          <Select options={aggLevelList} onChange={e => {firstSelect = e.label; selectHandler(e);  }} />
          <div style={{"fontWeight": "bold", padding: "3px"}}>Aggregation Function</div>
          <Select options={optionsAvgList} onChange={e => { selectHandler(e);  }} />
          <div style={{"fontWeight": "bold", padding: "3px"}}>Aggregation Field</div>
          <Select options={aggFieldList} onChange={e => {thirdSelect = e.label; selectHandler(e);  }} />
          <div className={classes.actions}>
                <button onClick={e => {submitHand(); selectHandler(e, "third");  reRender(); addMet();}}>Submit</button>
            </div>
      </div>

      <div style={{ width: "50%", display: "table-cell" }} /*className={classes.dropDown2}*/>
      <h2>Filter Data</h2>
          <div style={{"fontWeight": "bold", padding: "3px"}}>Select Column</div>
          <Select options={aggLevelList2} onChange={selectHandler2} />
          <div style={{"fontWeight": "bold", padding: "3px"}}>Select Operator</div>
          <Select options={optionsOppList} onChange={selectHandler2} />
          <div style={{"fontWeight": "bold", padding: "3px"}}>Select Value</div>
          <form onSubmit={e => {selectHandler2(e, "third"); addMet();}}>
            <div className={classes.control}>
              <input type="text" required ref={textInput}/>
            </div>
            <div className={classes.actions}>
                <button>Submit</button>
            </div>
          </form>
          {/* <Select options={optionsValList} onChange={selectHandler2} /> */}
      </div>
    </div>


    <div style={{display: "table-row", height: "100px"}}> 
    <div className={classes.addMetBut} style={{ width: "30px", display: "table-cell" }}>
        {/* <button className={classes.button} onClick={addMet}>Add Another Metric</button> */}
      </div>
      

      {/* <div className={classes.addMetBut} style={{ width: "30px", display: "table-cell" }}>
        <button className={classes.button} onClick={addMet}>Add Another Metric</button>
      </div> */}
    
    </div>

    <div style={{display: "table-row", height: "1px" , position: "relative", top: "-50px"}}> 
    <div style={{display: "table-cell"}}>
        <ShowOldMet />
      </div>

      
    </div>

    

    <hr className={classes.hr}/>

    
    <div style={{display: "table-row", height: "100px"}}> 

    
    <div style={{display: "table-cell"}} /*className={classes.dropDown1}*/>
        <h3>Metric</h3>
            <MeetupList meetups={loadedHistory}/>
      </div>

      
      <div style={{display: "table-cell", width: "30px"}}>
        <h3>Results</h3>
        {/* <textarea
          className={classes.textarea}
          rows="10" //original: 6
          cols="45" //original: 35
          disabled={true}
          value={disp}
        >
          {}
        </textarea> */}

        <ReactBootStrap.Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Clicks</th>
              <th>Closes</th>
              <th>Country</th>
              <th>Duration</th>
              <th>Event Name</th>
              <th>Count</th>
              <th>Time Stamp</th>

            </tr>
          </thead>
          <tbody>
            {outputArr.map(renderPlayer)}
          </tbody>
        </ReactBootStrap.Table>

        <button className={classes.addMetBut2} onClick={refreshPage}>Reset</button>
      </div>

      

      {/* <div style={{display: "table-cell", width: "30px"}}>
      <button className={classes.button} onClick={refreshPage}>Reset</button>
      </div> */}
    </div>

    </div>
  );
}

export default NewMetricForm;
