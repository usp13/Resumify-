// // import './style/home.scss'

// // export const Home = () => {
// //   return (
// //       <main className='home'>
// //         <div className='left'>

// //           <textarea name='jobDescription' id='jobDescription' placeholder='Enter ob description here'>

// //           </textarea>

// //         </div>
// //         <div className='right'>
// //           <div className='input-group'>
            
// //             <label htmlFor='resume' >
// //               Upload Resume
// //             </label>
// //             <input name='resume' id='resume' accept='.pdf' />

// //           </div>
// //           <div className='input-group'>
            
// //             <label htmlFor='selfDescription' >
// //               Upload Self Description
// //             </label>
// //             <input name='selfDescription' id='selfDescription' placeholder='Describe yourself' />

// //           </div>

// //           <button className='generate-btn'>
// //               Generate Interview Report
// //           </button>

// //         </div>
         
         
// //       </main>
// //   )
// // }

// // export default Home 


// // import React, { useState , useRef } from "react";
// // import "../pages/style/home.scss";
// // import { useInterview } from '../hooks/useinterview.js'
// // import { useNavigate } from 'react-router'



// // const Home = () => {

// //   const [jobDescription, setJobDescription] = useState("");
// //   const [selfDescription, setSelfDescription] = useState("");
// //   const { loading , generateReport , reports } = useInterview();
// //   const [resume, setResume] = useState(null);
// //   const resumeInputRef = useRef()

 
// //   const navigate = useNavigate()


// // //   const handleGenerateReport = async () => {

// // //     const resumeFile = resumeInputRef.current.files[0];

// // //     const report = await generateReport({
// // //         jobDescription,
// // //         selfDescription,
// // //         resumeFile
// // //     });

// // //     navigate(`/interview/${report._id}`);
// // // };

// // const handleGenerateReport = async () => {
// //   const resumeFile = resumeInputRef.current.files[0];

// //   if (!jobDescription.trim()) {
// //     alert("Please enter a Job Description");
// //     return;
// //   }

// //   if (!selfDescription.trim()) {
// //     alert("Please enter a Self Description");
// //     return;
// //   }

// //   if (!resumeFile) {
// //     alert("Please upload your Resume");
// //     return;
// //   }

// //   try {
// //     const report = await generateReport({
// //       jobDescription,
// //       selfDescription,
// //       resumeFile,
// //     });

// //     navigate(`/interview/${report._id}`);
// //   } catch (error) {
// //     console.error(error);
// //     alert("Failed to generate interview report");
// //   }
// // };

// //   if (loading) {
// //   return (
// //     <main className="loading-screen">
// //       <div className="spinner"></div>
// //       <h2>Generating Your Interview Report...</h2>
// //       <p>This may take a few moments.</p>
// //     </main>
// //   );
// // }



// //   return (
// //     <main className="home">
// //       <div className="home-container">
// //         <div className="left">
// //           <h2>Job Description</h2>
// //           {/* <div className="badge">Senior Software Engineer</div> */}

// //           <textarea
// //             //onChange={{e} => {selfDescription(e.target.value)} }
// //             name="jobDescription"
// //             id="jobDescription"
// //             value={jobDescription}
// //             onChange={(e) => setJobDescription(e.target.value)}
// //             placeholder="Paste the job description here..."
// //             className="description-textarea"
// //           />
// //         </div>

// //         <div className="right">
// //           <h2>Resume Upload</h2>

// //           <div className="input-group">
// //             <label htmlFor="resume" className="resume-label">
// //               <div className="upload-icon">☁</div>
// //               <p>Drop your resume here or <span>click to browse</span></p>
// //               <span className="file-hint">PDF, DOCX (Max 5MB)</span>
// //             </label>
// //             <input
// //               ref={resumeInputRef}
// //               type="file"
// //               id="resume" 
// //               name="resume"
// //               accept=".pdf,.docx"
// //               onChange={(e) => setResume(e.target.files[0])}
// //               //onChange={ handleGenerateReport }
// //               className="file-input"
// //             />
// //             {resume && <p className="file-name">✓ {resume.name}</p>}
// //           </div>

// //           <div className="input-group">
// //             <label htmlFor="selfDescription">Self Description</label>
// //             <p className="label-hint">How would you describe your impact?</p>

// //             <textarea
// //               id="selfDescription"
// //               name="selfDescription"
// //               value={selfDescription}
// //               onChange={(e) => setSelfDescription(e.target.value)}
// //               placeholder="I am a solution-oriented engineer with a focus on..."
// //               className="description-textarea"
// //             />
// //           </div>

// //           <div className="pro-tip-box">
// //             <div className="pro-tip-icon">💡</div>
// //             <div className="pro-tip-content">
// //               <h4>Pro Tip</h4>
// //               <p>The more specific your job description and resume, the better InterReview can simulate realistic interview scenarios.</p>
// //             </div>
// //           </div>

// //           <button 
// //             className="generate-btn" 
// //             onClick={handleGenerateReport}
// //           >
// //             Submit
// //             <span className="arrow">→</span>
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Home;

// import React, { useState, useRef, useEffect, } from "react";

// import "../pages/style/home.scss";
// import { useInterview } from "../hooks/useinterview.js";
// import { useNavigate } from "react-router";

// const Home = () => {
//   const [jobDescription, setJobDescription] = useState("");
//   const [selfDescription, setSelfDescription] = useState("");
//   const [resume, setResume] = useState(null);

//     const {
//       loading,
//       generateReport,
//       reports,
//       getReports
//     } = useInterview();

//     useEffect(() => {
//       getReports();
//     }, [getReports]);

//   const resumeInputRef = useRef();
//   const navigate = useNavigate();

//   const handleGenerateReport = async () => {
//     const resumeFile = resumeInputRef.current.files[0];

//     if (!jobDescription.trim()) {
//       alert("Please enter a Job Description");
//       return;
//     }

//     if (!selfDescription.trim()) {
//       alert("Please enter a Self Description");
//       return;
//     }

//     if (!resumeFile) {
//       alert("Please upload your Resume");
//       return;
//     }

//     try {
//       const report = await generateReport({
//         jobDescription,
//         selfDescription,
//         resumeFile,
//       });

//       navigate(`/interview/${report._id}`);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to generate interview report");
//     }
//   };

//   if (loading) {
//     return (
//       <main className="loading-screen">
//         <div className="spinner"></div>
//         <h2>Generating Your Interview Report...</h2>
//         <p>This may take a few moments.</p>
//       </main>
//     );
//   }

//   return (
//     <main className="home">
//       <div className="home-container">
//         {/* LEFT PANEL */}
//         <div className="left">
//           <h2>Job Description</h2>

//           <textarea
//             name="jobDescription"
//             id="jobDescription"
//             value={jobDescription}
//             onChange={(e) => setJobDescription(e.target.value)}
//             placeholder="Paste the job description here..."
//             className="description-textarea"
//           />
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="right">
//           <h2>Resume Upload</h2>

//           <div className="input-group">
//             <label htmlFor="resume" className="resume-label">
//               <div className="upload-icon">☁</div>

//               <p>
//                 Drop your resume here or <span>click to browse</span>
//               </p>

//               <span className="file-hint">
//                 PDF, DOCX (Max 5MB)
//               </span>
//             </label>

//             <input
//               ref={resumeInputRef}
//               type="file"
//               id="resume"
//               name="resume"
//               accept=".pdf,.docx"
//               onChange={(e) =>
//                 setResume(e.target.files[0])
//               }
//               className="file-input"
//             />

//             {resume && (
//               <p className="file-name">
//                 ✓ {resume.name}
//               </p>
//             )}
//           </div>

//           <div className="input-group">
//             <label htmlFor="selfDescription">
//               Self Description
//             </label>

//             <p className="label-hint">
//               How would you describe your impact?
//             </p>

//             <textarea
//               id="selfDescription"
//               name="selfDescription"
//               value={selfDescription}
//               onChange={(e) =>
//                 setSelfDescription(e.target.value)
//               }
//               placeholder="I am a solution-oriented engineer with a focus on..."
//               className="description-textarea"
//             />
//           </div>

//           <div className="pro-tip-box">
//             <div className="pro-tip-icon">💡</div>

//             <div className="pro-tip-content">
//               <h4>Pro Tip</h4>

//               <p>
//                 The more specific your job description and
//                 resume, the better InterReview can simulate
//                 realistic interview scenarios.
//               </p>
//             </div>
//           </div>

//           <button
//             className="generate-btn"
//             onClick={handleGenerateReport}
//           >
//             Submit
//             <span className="arrow">→</span>
//           </button>
//         </div>
//       </div>

//       {/* RECENT REPORTS SECTION */}
//       <section className="recent-reports">
//   <div className="recent-header">
//     <h2>Recent Reports</h2>
//     <p>Your previously generated interview reports.</p>
//   </div>

//   {reports?.length > 0 ? (
//     <div className="reports-grid">
//       {reports.map((report) => (
//         <div
//           key={report._id}
//           className="report-card"
//           onClick={() =>
//             navigate(`/interview/${report._id}`)
//           }
//         >
//           <div className="report-top">
//             <h3>
//               {report.jobRole ||
//                 report.jobTitle ||
//                 "Interview Report"}
//             </h3>

//             {report.matchScore && (
//               <span className="report-score">
//                 {report.matchScore}%
//               </span>
//             )}
//           </div>

//           <p className="report-description">
//             {report.jobDescription
//               ? report.jobDescription.length > 120
//                 ? report.jobDescription.slice(0, 120) +
//                   "..."
//                 : report.jobDescription
//               : "Generated interview report"}
//           </p>

//           <div className="report-footer">
//             <span>
//               {new Date(
//                 report.createdAt
//               ).toLocaleDateString()}
//             </span>

//             <span>View Report →</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <div className="empty-reports">
//       <h3>No Reports Yet</h3>
//       <p>
//         Generate your first interview report to see it here.
//       </p>
//     </div>
//   )}
// </section>
//     </main>
//   );
// };

// export default Home;





import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import "../pages/style/home.scss";
import { useInterview } from "../hooks/useinterview.js";
import { useNavigate } from "react-router";

const Home = () => {
  const [jobDescription, setJobDescription] =
    useState("");
  const [selfDescription, setSelfDescription] =
    useState("");
  const [resume, setResume] = useState(null);

  const {
    loading,
    generateReport,
    reports,
    getReports,
  } = useInterview();

  const resumeInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getReports();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerateReport = async () => {
    const resumeFile =
      resumeInputRef.current?.files?.[0];

    if (!jobDescription.trim()) {
      alert("Please enter a Job Description");
      return;
    }

    if (!selfDescription.trim()) {
      alert("Please enter a Self Description");
      return;
    }

    if (!resumeFile) {
      alert("Please upload your Resume");
      return;
    }

    try {
      const report = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });

      navigate(`/interview/${report._id}`);
    } catch (err) {
      console.log(err);
      alert("Failed to generate report");
    }
  };

  if (loading) {
    return (
      <main className="loading-screen">
        <div className="spinner"></div>
        <h2>
          Generating Your Interview Report...
        </h2>
      </main>
    );
  }

  return (
    <main className="home">
      <div className="home-container">
        {/* LEFT */}
        <div className="left">
          <h2>Job Description</h2>

          <textarea
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            placeholder="Paste the job description here..."
            className="description-textarea"
          />
        </div>

        {/* RIGHT */}
        <div className="right">
          <h2>Resume Upload</h2>

          <div className="input-group">
            <label
              htmlFor="resume"
              className="resume-label"
            >
              <div className="upload-icon">☁</div>

              <p>
                Drop your resume here or{" "}
                <span>click to browse</span>
              </p>

              <span className="file-hint">
                PDF, DOCX (Max 5MB)
              </span>
            </label>

            <input
              ref={resumeInputRef}
              type="file"
              id="resume"
              accept=".pdf,.docx"
              className="file-input"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
            />

            {resume && (
              <p className="file-name">
                ✓ {resume.name}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>
              Self Description
            </label>

            <textarea
              value={selfDescription}
              onChange={(e) =>
                setSelfDescription(
                  e.target.value
                )
              }
              placeholder="Tell us about yourself..."
              className="description-textarea"
            />
          </div>


           <div className="pro-tip-box">
              <div className="pro-tip-icon">💡</div>
                <div className="pro-tip-content">
                  <h4>Pro Tip</h4>
                  <p>
                    The more specific your job description and
                    resume, the better InterReview can simulate
                    realistic interview scenarios.
                  </p>
              </div>
          </div>

          <button
            className="generate-btn"
            onClick={handleGenerateReport}
          >
            Generate Report
          </button>
        </div>
      </div>


          {/* <div className="pro-tip-box">
              <div className="pro-tip-icon">💡</div>
                <div className="pro-tip-content">
                  <h4>Pro Tip</h4>
                  <p>
                    The more specific your job description and
                    resume, the better InterReview can simulate
                    realistic interview scenarios.
                  </p>
              </div>
          </div> */}



      {/* RECENT REPORTS */}

      <section className="recent-reports">
        <div className="recent-header">
          <h2>Recent Reports</h2>
          <p>
            Continue from your previous
            interview reports.
          </p>
        </div>

        {reports?.length > 0 ? (
          <div className="reports-grid">
            {reports.map((report) => (
              <div
                key={report._id}
                className="report-card"
                onClick={() =>
                  navigate(
                    `/interview/${report._id}`
                  )
                }
              >
                <div className="report-top">
                  <h3>
                    {report.jobRole ||
                      report.title ||
                      "Interview Report"}
                  </h3>

                  {report.matchScore && (
                    <span className="report-score">
                      {report.matchScore}%
                    </span>
                  )}
                </div>

                <p className="report-description">
                  {report.jobDescription
                    ? report.jobDescription.slice(
                        0,
                        120
                      ) + "..."
                    : "Generated Interview Report"}
                </p>

                <div className="report-footer">
                  <span>
                    {report.createdAt
                      ? new Date(
                          report.createdAt
                        ).toLocaleDateString()
                      : "Recently"}
                  </span>

                  <span>View Report →</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-reports">
            No reports generated yet.
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;