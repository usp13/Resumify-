// // import React, { useState } from 'react';
// // import '../pages/style/interview.scss';
// // import { useInterview } from '../hooks/useinterview';

// // const Interview = () => {
// //   const [selectedCategory, setSelectedCategory] = useState('technical');
// //   const [selectedDay, setSelectedDay] = useState(1);
// //   const [completedDays, setCompletedDays] = useState([]);

// //   const { report } = useInterview() 

// //   // Sample data if not provided
// //   // const data = reportData || {
// //   //   matchScore: 72,
// //   //   technicalQuestions: [
// //   //     {
// //   //       question: "Node.js is single-threaded. How does it handle concurrent requests in a high-traffic environment?",
// //   //       intention: "To test understanding of the Node.js Event Loop",
// //   //       answer: "Node.js uses an Event Loop and non-blocking I/O...",
// //   //       difficulty: "Hard",
// //   //       duration: "10 min"
// //   //     },
// //   //     {
// //   //       question: "Explain the difference between a shallow copy and a deep copy in JavaScript.",
// //   //       intention: "To verify fundamental JavaScript knowledge",
// //   //       answer: "A shallow copy copies the top-level properties...",
// //   //       difficulty: "Medium",
// //   //       duration: "8 min"
// //   //     },
// //   //     {
// //   //       question: "How would you implement JWT-based authentication in a Node/Express app?",
// //   //       intention: "To assess security knowledge",
// //   //       answer: "I would use 'jsonwebtoken' library...",
// //   //       difficulty: "Hard",
// //   //       duration: "12 min"
// //   //     }
// //   //   ],
// //   //   behavioralQuestions: [
// //   //     {
// //   //       question: "Describe a time you had to make a quick decision under pressure.",
// //   //       intention: "To evaluate leadership and decision-making",
// //   //       answer: "During a speaker session, a primary camera failed...",
// //   //       difficulty: "Medium",
// //   //       duration: "5 min"
// //   //     },
// //   //     {
// //   //       question: "How do you handle academic challenges?",
// //   //       intention: "To address growth mindset",
// //   //       answer: "While my GPA reflects early adjustments...",
// //   //       difficulty: "Medium",
// //   //       duration: "6 min"
// //   //     }
// //   //   ],
// //   //   skillGaps: [
// //   //     { skill: "TypeScript", severity: "high" },
// //   //     { skill: "Express.js Production Patterns", severity: "medium" },
// //   //     { skill: "CI/CD Pipeline implementation", severity: "low" }
// //   //   ],
// //   //   prepPlan: [
// //   //     {
// //   //       day: 1,
// //   //       focus: "JavaScript to TypeScript Transition",
// //   //       tasks: [
// //   //         "Learn TypeScript basics: Interfaces, Types, Enums",
// //   //         "Refactor a small JS project to TS",
// //   //         "Understand 'tsconfig.json' configurations"
// //   //       ]
// //   //     },
// //   //     {
// //   //       day: 2,
// //   //       focus: "React Advanced Concepts",
// //   //       tasks: [
// //   //         "Deep dive into React Hooks",
// //   //         "Practice State Management using Context API",
// //   //         "Implement a custom hook for data fetching"
// //   //       ]
// //   //     },
// //   //     {
// //   //       day: 3,
// //   //       focus: "Backend with Node.js & Express",
// //   //       tasks: [
// //   //         "Build a REST API with Express using TypeScript",
// //   //         "Implement global error handling",
// //   //         "Study the Node.js Event Loop in-depth"
// //   //       ]
// //   //     },
// //   //     {
// //   //       day: 4,
// //   //       focus: "Database Design & MongoDB",
// //   //       tasks: [
// //   //         "Practice MongoDB CRUD operations",
// //   //         "Model a M-N relationship in NoSQL",
// //   //         "Compare SQL vs NoSQL performance"
// //   //       ]
// //   //     }
// //   //   ]
// //   // };

// //   const currentQuestions = selectedCategory === 'technical' ? report.technicalQuestions : report.behavioralQuestions;
// //   const currentDay = report.prepPlan.find(p => p.day === selectedDay);

  


// //   const toggleDayCompletion = (day) => {
// //     setCompletedDays(prev => 
// //       prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
// //     );
// //   };

// //   const getDifficultyColor = (difficulty) => {
// //     switch(difficulty?.toLowerCase()) {
// //       case 'hard': return '#ff0073';
// //       case 'medium': return '#ffa500';
// //       case 'easy': return '#4caf50';
// //       default: return '#fff';
// //     }
// //   };

// //   const getSeverityColor = (severity) => {
// //     switch(severity?.toLowerCase()) {
// //       case 'high': return '#ff0073';
// //       case 'medium': return '#ffa500';
// //       case 'low': return '#4caf50';
// //       default: return '#fff';
// //     }
// //   };

// //   return (
// //     <main className="interview">
// //       <div className="interview-header">
// //         <div className="breadcrumb">Dashboard / Interview Engine</div>
// //         <h1>Interview Generation</h1>
// //         <p>Generated {report.technicalQuestions?.length + report.behavioralQuestions?.length} questions based on your profile</p>
// //       </div>

// //       <div className="interview-container">
// //         {/* LEFT SIDEBAR */}
// //         <div className="left-sidebar">
// //           <div className="score-section">
// //             <div className="match-score">
// //               <div className="score-circle">{report.matchScore}%</div>
// //               <p>Match Score</p>
// //             </div>
// //           </div>

// //           <div className="question-categories">
// //             <button 
// //               className={`category-btn ${selectedCategory === 'technical' ? 'active' : ''}`}
// //               onClick={() => setSelectedCategory('technical')}
// //             >
// //               <span className="icon">📋</span>
// //               <span>Technical</span>
// //               <span className="count">{report.technicalQuestions?.length}</span>
// //             </button>
// //             <button 
// //               className={`category-btn ${selectedCategory === 'behavioral' ? 'active' : ''}`}
// //               onClick={() => setSelectedCategory('behavioral')}
// //             >
// //               <span className="icon">💬</span>
// //               <span>Behavioral</span>
// //               <span className="count">{report.behavioralQuestions?.length}</span>
// //             </button>
// //           </div>

// //           <div className="focus-mode">
// //             <h3>FOCUS MODE</h3>
// //             <div className="toggle-group">
// //               <label>
// //                 <input type="checkbox" defaultChecked />
// //                 <span>Strict Timing</span>
// //               </label>
// //               <label>
// //                 <input type="checkbox" />
// //                 <span>AI Feedback</span>
// //               </label>
// //             </div>
// //           </div>

// //           <div className="skill-gaps">
// //             <h3>IDENTIFIED GAPS</h3>
// //             <div className="gaps-list">
// //               {report.skillGaps?.slice(0, 2).map((gap, idx) => (
// //                 <div key={idx} className="gap-item">
// //                   <span className="gap-name">{gap.skill}</span>
// //                   <div className="severity" style={{ backgroundColor: getSeverityColor(gap.severity) }}></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* CENTER CONTENT */}
// //         <div className="center-content">
// //           <div className="questions-section">
// //             {currentQuestions?.map((q, idx) => (
// //               <div key={idx} className="question-card">
// //                 <div className="card-header">
// //                   <span className="category-badge">
// //                     {selectedCategory === 'technical' ? 'DATA STRUCTURES' : 'LEADERSHIP'}
// //                   </span>
// //                   {q.duration && <span className="duration">⏱ {q.duration}</span>}
// //                   {q.difficulty && (
// //                     <span className="difficulty" style={{ color: getDifficultyColor(q.difficulty) }}>
// //                       🎯 {q.difficulty}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <h3>{q.question}</h3>
// //                 <div className="question-meta">
// //                   <p><strong>Intention:</strong> {q.intention}</p>
// //                 </div>
// //               </div>
// //             ))}
// //             {currentQuestions?.length > 3 && (
// //               <button className="view-more-btn">
// //                 View {currentQuestions.length - 3} more {selectedCategory} Questions
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         {/* RIGHT SIDEBAR */}
// //         <div className="right-sidebar">
// //           <h2>Preparation Plan</h2>
// //           <p className="subtitle">PLAN v1.4</p>

// //           <div className="prep-days">
// //             {report.prepPlan?.map((day) => (
// //               <div 
// //                 key={day.day}
// //                 className={`prep-day ${selectedDay === day.day ? 'active' : ''} ${completedDays.includes(day.day) ? 'completed' : ''}`}
// //                 onClick={() => setSelectedDay(day.day)}
// //               >
// //                 <div className="day-header">
// //                   <input 
// //                     type="checkbox" 
// //                     checked={completedDays.includes(day.day)}
// //                     onChange={(e) => {
// //                       e.stopPropagation();
// //                       toggleDayCompletion(day.day);
// //                     }}
// //                   />
// //                   <span className="day-label">Day {day.day}</span>
// //                 </div>
// //                 <p className="day-focus">{day.focus}</p>
// //                 <span className="task-count">{day.tasks?.length} Technical • 1 Behavioral</span>
// //               </div>
// //             ))}
// //           </div>

// //           {currentDay && (
// //             <div className="current-day-details">
// //               <h4>Day {currentDay.day} Details</h4>
// //               <div className="tasks-list">
// //                 {currentDay.tasks?.map((task, idx) => (
// //                   <div key={idx} className="task-item">
// //                     <input type="checkbox" />
// //                     <span>{task}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           <button className="start-btn">
// //             Start Day {selectedDay}
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Interview;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import "../pages/style/interview.scss";
// import { useInterview } from "../hooks/useinterview";



// const Interview = () => {
//   const { interviewId } = useParams();

//   const {
//     report,
//     loading,
//     getReportById
//   } = useInterview();

//   const [selectedCategory, setSelectedCategory] = useState("technical");
//   //const [selectedCategory, setSelectedCategory] = useState("technical");
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   useEffect(() => {
//     if (interviewId) {
//       getReportById(interviewId);
//     }
//   }, [interviewId]);

//   if (loading || !report) {
//     return (
//       <main className="interview-loading">
//         <h1> Loading Interview Report...</h1>
//       </main>
//     );
//   }

//  const questions =
//   selectedCategory === "technical"
//     ? report.technicalQuestions
//     : report.behavioralQuestions;

//   const currentQuestion =
//   questions?.[currentQuestionIndex];

//    return (
//   <main className="interview">
//     <div className="interview-container">

//       {/* LEFT SIDEBAR */}
//       <div className="left-sidebar">

//         <h2>Questions</h2>

//         <button
//           className={`category-btn ${
//             selectedCategory === "technical" ? "active" : ""
//           }`}
//           onClick={() => {
//             setSelectedCategory("technical");
//             setCurrentQuestionIndex(0);
//           }}
//         >
//           <span>Technical</span>
//           <span>{report.technicalQuestions?.length}</span>
//         </button>

//         <button
//           className={`category-btn ${
//             selectedCategory === "behavioral" ? "active" : ""
//           }`}
//           onClick={() => {
//             setSelectedCategory("behavioral");
//             setCurrentQuestionIndex(0);
//           }}
//         >
//           <span>Behavioral</span>
//           <span>{report.behavioralQuestions?.length}</span>
//         </button>

//         <div className="question-list">

//           {questions?.map((_, index) => (
//             <button
//               key={index}
//               className={
//                 currentQuestionIndex === index
//                   ? "question-number active"
//                   : "question-number"
//               }
//               onClick={() =>
//                 setCurrentQuestionIndex(index)
//               }
//             >
//               {index + 1}
//             </button>
//           ))}

//         </div>

//       </div>

//       {/* CENTER CONTENT */}

//       <div className="center-content">

//         <div className="question-progress">
//           Question {currentQuestionIndex + 1} of {questions?.length}
//         </div>

//         <div className="question-card">

//           <div className="question-type">
//             {selectedCategory === "technical"
//               ? "Technical Question"
//               : "Behavioral Question"}
//           </div>

//           <h2>
//             {currentQuestion?.question}
//           </h2>

//           <div className="info-box">

//             <h4>Interviewer's Intention</h4>

//             <p>
//               {currentQuestion?.intention}
//             </p>

//           </div>

//           <div className="answer-box">

//             <h4>Suggested Answer</h4>

//             <p>
//               {currentQuestion?.answer}
//             </p>

//           </div>

//         </div>

//         <div className="question-navigation">

//           <button
//             disabled={currentQuestionIndex === 0}
//             onClick={() =>
//               setCurrentQuestionIndex(prev => prev - 1)
//             }
//           >
//             ← Previous
//           </button>

//           <span>
//             {currentQuestionIndex + 1} / {questions?.length}
//           </span>

//           <button
//             disabled={
//               currentQuestionIndex === questions?.length - 1
//             }
//             onClick={() =>
//               setCurrentQuestionIndex(prev => prev + 1)
//             }
//           >
//             Next →
//           </button>

//         </div>

//       </div>

//       {/* RIGHT SIDEBAR */}

//       <div className="right-sidebar">

//         <div className="score-card">

//           <h2>Match Score</h2>

//           <div className="score-circle">
//             {report.matchScore}%
//           </div>

//         </div>

//         <div className="skill-card">

//           <h2>Skill Gaps</h2>

//           {report.skillGaps?.map((gap, index) => (

//             <div key={index} className="gap-row">

//               <span>{gap.skill}</span>

//               <span
//                 className={`severity ${gap.severity}`}
//               >
//                 {gap.severity}
//               </span>

//             </div>

//           ))}

//         </div>

//         <div className="prep-card">

//           <h2>7 Day Plan</h2>

//           {report.prepPlan?.map((day) => (

//             <div
//               key={day.day}
//               className="prep-day"
//             >

//               <h4>
//                 Day {day.day}
//               </h4>

//               <p>{day.focus}</p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </div>
//   </main>
// );

// };

// export default Interview;


import React, {
  useEffect,
  useState,
} from "react";
import { useParams , useNavigate } from "react-router";
import "../pages/style/interview.scss";
import { useInterview } from "../hooks/useinterview";


const Interview = () => {
  const { interviewId } = useParams();

const navigate = useNavigate() ; 


  const {
    report,
    loading,
    getReportById,
   
    
  } = useInterview();

  const [selectedCategory,
    setSelectedCategory] =
    useState("technical");

  const [currentQuestionIndex,
    setCurrentQuestionIndex] =
    useState(0);

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interviewId]);

  if (loading || !report) {
    return (
      <main className="interview-loading">
        <h1>
          Loading Interview Report...
        </h1>
      </main>
    );
  }

  const questions =
    selectedCategory === "technical"
      ? report?.technicalQuestions || []
      : report?.behavioralQuestions || [];

  const currentQuestion =
    questions[currentQuestionIndex] || null;

  return (
    <main className="interview">
      <div className="interview-container">

        {/* LEFT */}
        <div className="left-sidebar">
          <h2>Interview Report</h2>

          <button
            className={`category-btn ${
              selectedCategory ===
              "technical"
                ? "active"
                : ""
            }`}
            onClick={() => {
              setSelectedCategory(
                "technical"
              );
              setCurrentQuestionIndex(0);
            }}
          >
            <span>Technical Questions</span>

            <span>
              {
                report
                  ?.technicalQuestions
                  ?.length
              }
            </span>
          </button>

          <button
            className={`category-btn ${
              selectedCategory ===
              "behavioral"
                ? "active"
                : ""
            }`}
            onClick={() => {
              setSelectedCategory(
                "behavioral"
              );
              setCurrentQuestionIndex(0);
            }}
          >
            <span>Behavioral Questions</span>

            <span>
              {
                report
                  ?.behavioralQuestions
                  ?.length
              }
            </span>
          </button>

          <div className="question-list">
            {questions.map(
              (_, index) => (
                <button
                  key={index}
                  className={`question-number ${
                    currentQuestionIndex ===
                    index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentQuestionIndex(
                      index
                    )
                  }
                >
                  {index + 1}
                </button>
              )
            )}
          </div>

          <button
            className="resume-download-btn"
            onClick={() => navigate(`/resume/${interviewId}`)}
          >
            📄 Show AI Generated Resume
          </button>

        </div>

        {/* CENTER */}

        <div className="center-content">
          <div className="question-progress">
            Question{" "}
            {currentQuestionIndex + 1} of{" "}
            {questions.length}
          </div>

          <div className="question-card">
            <div className="question-type">
              {selectedCategory ===
              "technical"
                ? "Technical Question"
                : "Behavioral Question"}
            </div>

            <h2>
              {currentQuestion?.question}
            </h2>

            <div className="info-box">
              <h4>
                Interviewer's Intention
              </h4>

              <p>
                {
                  currentQuestion?.intention
                }
              </p>
            </div>

            <div className="answer-box">
              <h4>
                Suggested Answer
              </h4>

              <p>
                {currentQuestion?.answer}
              </p>
            </div>
          </div>

          <div className="question-navigation">
            <button
              disabled={
                currentQuestionIndex ===
                0
              }
              onClick={() =>
                setCurrentQuestionIndex(
                  (prev) => prev - 1
                )
              }
            >
              ← Previous
            </button>

            <span>
              {currentQuestionIndex + 1}
              {" / "}
              {questions.length}
            </span>

            <button
              disabled={
                currentQuestionIndex ===
                questions.length - 1
              }
              onClick={() =>
                setCurrentQuestionIndex(
                  (prev) => prev + 1
                )
              }
            >
              Next →
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="right-sidebar">
          <div className="score-card">
            <h2>Match Score</h2>

            <div className="score-circle">
              {report?.matchScore || 0}%
            </div>
          </div>

          <div className="skill-card">
            <h2>Skill Gaps</h2>

            {report?.skillGaps?.map(
              (gap, index) => (
                <div
                  key={index}
                  className="gap-row"
                >
                  <span>
                    {gap.skill}
                  </span>

                  <span
                    className={`severity ${gap.severity}`}
                  >
                    {gap.severity}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="prep-card">
            <h2>7 Day Plan</h2>

            {report?.prepPlan?.map(
              (day) => (
                <div
                  key={day.day}
                  className="prep-day"
                >
                  <h4>
                    Day {day.day}
                  </h4>

                  <p>
                    {day.focus}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interview;