import { firstSelect, thirdSelect } from "../metrics/NewMetricForm";


export var aggLevelList = [];
export var optionsAvgList = [];
export var aggFieldList = [];
export var optionsOppList = [];
export var optionsValList = [];
export var aggLevelList2 = [];

function reRender() {
  //console.log("I'm here NOT null");

  aggLevelList = [
    {
      value: 4,
      label: "All",
    },
  ];
   


optionsAvgList = [
//export var aggFuncList = [
  {
    label: "For: All Options",
    options: [
      {
        value: 1,
        label: "Count",
      },
      {
        value: 2,
        label: "Sum",
      },
      {
        value: 3,
        label: "Min",
      },
      {
        value: 3,
        label: "Max",
      },
    ],
  },
  {
    label: "For: Aggregation-All",
    options: [
      {
        value: 4,
        label: "Average",
      },
    ],
  },
  


];


aggFieldList = [
  {
    value: 1,
    label: thirdSelect,
  },
];

optionsOppList = [
  //oppList
  {
    label: "For: All Options",
    options: [
      {
        value: 1,
        label: "==",
      },
    ],
  },
  {
    label: "For: User ID, Timestamp",
    options: [
      {
        value: 2,
        label: ">",
      },
    ],
  },

  {
    label: "For: User ID, Timestamp",
    options: [
      {
        value: 3,
        label: "<",
      },
    ],
  },
];

optionsValList = [
  //valList
  {
    label: "For: Event Name",
    options: [
      {
        value: 1,
        label: "launch",
      },
    ],
  },
  {
    label: "For: User ID",
    options: [
      {
        value: 2,
        label: 5,
      },
    ],
  },
  {
    label: "For: Country",
    options: [
      {
        value: 3,
        label: "USA",
      },
      {
        value: 4,
        label: "MEX",
      },
      {
        value: 5,
        label: "CAN",
      },
    ],
  },
  {
    label: "For: Timestamp",
    options: [
      {
        value: 5,
        label: "Jan 28th, 2022",
        //time: 1643488500
      },
    ],
  },
];

aggLevelList2 = [
  {
    value: 1,
    label: "User ID",
  },
  {
    value: 2,
    label: "Country",
  },
  {
    value: 3,
    label: "Event Name",
  },
  {
    value: 4,
    label: "Timestamp",
  },
];

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (firstSelect == null){
 // console.log("I'm here (==null)");
var aggLevelList = [
  {
    value: 1,
    label: "User ID",
  },
  {
    value: 2,
    label: "Country",
  },
  {
    value: 3,
    label: "Event Name",
  },
  {
    value: 4,
    label: "All",
  },
];


optionsAvgList = [
//export var aggFuncList = [
{
  label: "For: All Options",
  options: [
    {
      value: 1,
      label: "Count",
    },
    {
      value: 2,
      label: "Sum",
    },
    {
      value: 3,
      label: "Min",
    },
    {
      value: 3,
      label: "Max",
    },
  ],
},
{
  label: "For: Aggregation-All",
  options: [
    {
      value: 4,
      label: "Average",
    },
  ],
},



];


aggFieldList = [
{
  value: 1,
  label: "Duration",
},
{
  value: 2,
  label: "Clicks",
},
{
  value: 3,
  label: "Closes",
},
];

optionsOppList = [
//oppList
{
  label: "For: All Options",
  options: [
    {
      value: 1,
      label: "==",
    },
  ],
},
{
  label: "For: User ID, Timestamp",
  options: [
    {
      value: 2,
      label: ">",
    },
  ],
},

{
  label: "For: User ID, Timestamp",
  options: [
    {
      value: 3,
      label: "<",
    },
  ],
},
];

optionsValList = [
//valList
{
  label: "For: Event Name",
  options: [
    {
      value: 1,
      label: "launch",
    },
  ],
},
{
  label: "For: User ID",
  options: [
    {
      value: 2,
      label: 5,
    },
  ],
},
{
  label: "For: Country",
  options: [
    {
      value: 3,
      label: "USA",
    },
    {
      value: 4,
      label: "MEX",
    },
    {
      value: 5,
      label: "CAN",
    },
  ],
},
{
  label: "For: Timestamp",
  options: [
    {
      value: 5,
      label: "Jan 28th, 2022",
      //time: 1643488500
    },
  ],
},
];

aggLevelList2 = [
{
  value: 1,
  label: "User ID",
},
{
  value: 2,
  label: "Country",
},
{
  value: 3,
  label: "Event Name",
},
{
  value: 4,
  label: "Timestamp",
},
];

}

export default reRender;