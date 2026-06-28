const mongoose = require("mongoose");

/**
 * Technical Question Schema
 */
const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  }
);

/**
 * Behavioral Question Schema
 */
const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  }
);

/**
 * Skill Gap Schema
 */
const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  }
);

/**
 * Preparation Plan Schema
 */
const prepPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day is required"],
      min: 1,
    },

    focus: {
      type: String,
      required: [true, "Focus is required"],
    },

    tasks: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    _id: false,
  }
);

/**
 * Main Interview Report Schema
 */
const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },

    resume: {
      type: String,
      default: "",
    },

    selfDescription: {
      type: String,
      default: "",
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    technicalQuestions: {
      type: [technicalQuestionSchema]
   
    },

    behavioralQuestions: {
      type: [behavioralQuestionSchema]
    },

    skillGaps: {
      type: [skillGapSchema]
    },

    prepPlan: {
      type: [prepPlanSchema]
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    title:{
      type: String,
      required: [true, "Job title is required"] 
    }



  },
  {
    timestamps: true,
  }
);

const InterviewReport = mongoose.model( "InterviewReport", interviewReportSchema );

module.exports = InterviewReport ;







// const mongoose = require('mongoose')

// /**
//  * - Job description Schema : string 
//  * - resume text analyse : string 
//  * - self description  : string 
//  * 
//  * - matchScrore : number  
//  * 
//  * > Technical questions : 
//  *     [{
//  *          question : "",
//  *          intention: "",
//  *          ans : ""
//  *      }]
//  * 
//  * > skill gaps  : 
//  *     [{
//  *          skill : "",
//  *          severity : {
//  *          type : string , enum : [ low , medium, high ]
//  *       }
//  *         
//  *      }]
//  * 
//  * > prep plan: 
//  *     [{
//  *          day : number , 
//  *          focus : string 
//  *          tasks : [string]
//  *      }]
//  */

// const technicalQuestionSchema = new mongoose.Schema({

//     question: {
//         type: String,
//         required: [true , "Technical question is required ! "]
//     },
//     intention:{
//         type: String,
//         required: [true , "Intention is required ! "]
//     },
//     answer:{
//         type: String,
//         required: [true , "Answer is required ! "]
//     }
   
    
//  } , 
//     {
//     _id : false 
// })

// const BehavioralQuestionSchema = new mongoose.Schema({

//     question: {
//         type: String,
//         required: [true , "Technical question is required ! "]
//     },
//     intention:{
//         type: String,
//         required: [true , "Intention is required ! "]
//     },
//     answer:{
//         type: String,
//         required: [true , "Answer is required ! "]
//     }
//  } , 
//     {
//     _id : false 
// })

// const SkillGapSchema = new mongoose.Schema({

//     skill: {
//         type: String,
//         required: [true , "Skill is required ! "]
//     },
   

//     Severity:{
//         type: String,
//         enum: [ 'low' , 'medium' , 'high'],
//         required: [true , "Severity is required ! "]
//     },
//  } , 
//     {
//     _id : false 
// })

// const PrepPlanschema = new mongoose.Schema({

//     day:{
//         type: Number,
//         required: [true , "Day is required ! "]

        
//     },
//     focus:{
//         type: String,
//         required: [true , "focus is required ! "]

//     },
//     tasks:{
//         type: String,
//         required: [true , "task is required ! "]
//     } 
// }, 
//     {
//     _id : false 
// })



// const interviewReportSchema = new mongoose.Schema({

//     jobdescription: {
//         type: String,
//         required: [true , 'Job description is required !']
//     },
//     resume: {
//         type: String
//     },
//     selfdescription: {
//         type: String
//     } , 
//     matchscore: {
//         type: Number,
//         min:0,
//         max:100
//     },

//     technicalQuestions : [technicalQuestionSchema],
//     behavioralquestions : [ BehavioralQuestionSchema] , 
//     skillsGaps : [SkillGapSchema],
//     PrepPlan:  [PrepPlanschema]
// } , 

// {   timestamps : true 


// })

// const interviewReportModel = mongoose.model('InterviewReport' , interviewReportSchema ) ;

// module.exports = interviewReportModel ; 

