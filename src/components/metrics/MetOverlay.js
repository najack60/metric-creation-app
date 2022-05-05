import React, { useState, useEffect } from "react";
import Overlay from "react-overlay-component";
import MeetupList from "../meetups/MeetupList";
import { db } from "../../firebase-config";
import { collection, getDocs, updateDoc, addDoc, doc } from "firebase/firestore";
import DisplayMets from "../functions/function code/oldMetrics";



let outFromOldMet;
function ShowOldMet() {
	 const eventsCollectionRef2 = collection(db, "history");
	 const [oldHist, setOldHist] = useState([]);
	 const [oldMetFunc, setOldMetFunc] = useState([]);



	useEffect(() => {
		const getOldHist = async () => {
		  const data = await getDocs(eventsCollectionRef2);
		  setOldHist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
	    
		getOldHist();
	    
	}, []);

  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

   outFromOldMet = DisplayMets(oldHist);
   //setOldMetFunc(outFromOldMet);
    //console.log(outFromOldMet);

  return (
    <div>
      <button
        className="primary"
        onClick={() => {
          setOverlay(true);
        }}
      >
        Display Past Metrics
      </button>


        
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2>Old Metrics</h2>
	      <MeetupList meetups={outFromOldMet}/>

        <button
          className="danger"
          onClick={() => {
            setOverlay(false);
          }}
        >
          Close
        </button>
      </Overlay>
    </div>
  );
}

export default ShowOldMet;
