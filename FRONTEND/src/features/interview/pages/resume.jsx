import React, {
  useEffect,
  useState,
  useRef
} from "react";

import { useParams } from "react-router";

import {
  useInterview,
} from "../hooks/useinterview";

import "./style/resume.scss";

const Resume = () => {
  const { interviewId } =
    useParams();

  const {
    loading,
    getResumeById,
    downloadPDF,
  } = useInterview();

  const [
    resumeHtml,
    setResumeHtml,
  ] = useState("");

  const resumeRef =
    useRef(null);

  useEffect(() => {
    const fetchResume =
      async () => {
        try {
          const cachedResume =
            sessionStorage.getItem(
              `resume-${interviewId}`
            );

          if (cachedResume) {
            setResumeHtml(
              cachedResume
            );
            return;
          }

          const aiResume =
            await getResumeById(
              interviewId
            );

          setResumeHtml(
            aiResume
          );

          sessionStorage.setItem(
            `resume-${interviewId}`,
            aiResume
          );
        } catch (err) {
          console.log(err);
        }
      };

    fetchResume();
  }, [interviewId]);

  if (
    loading &&
    !resumeHtml
  ) {
    return (
      <div className="resume-loading">
        <h1> Loading Resume... </h1>
      </div>
    );
  }

  return (
 
  <main className="resume-page">
  <div
    id="resume-pdf"
    ref={resumeRef}
    className="resume-container"
    dangerouslySetInnerHTML={{
      __html: resumeHtml,
    }}
  />

  <aside className="resume-actions">
    <div className="ai-disclaimer">
      <h4>⚠️ AI Generated Resume</h4>

      <p>
        This resume was generated using AI and may contain inaccuracies,
        formatting issues, or missing information.
      </p>

      <p>
        Please carefully review, edit, and verify all details before
        applying for jobs. Ensure that your information accurately
        represents your qualifications and experience.
      </p>
    </div>

    <button
      className="download-btn"
      onClick={downloadPDF}
    >
      Download PDF
    </button>
  </aside>
</main>
);

  // return (
  //   <main className="resume-page">
  //       <div className="resume-actions">
  //         <div className="ai-disclaimer">
  //           <h4>⚠️ AI Generated Resume</h4>
  //           <p>
  //             This resume was generated using AI and may contain inaccuracies,
  //             missing information, or formatting issues.
  //           </p>
  //           <p>
  //             Please carefully review, edit, and verify all details before using
  //             this resume for job applications. Ensure that your personal
  //             information, work experience, skills, and achievements are correct
  //             and accurately represent you.
  //           </p>
  //         </div>

  //         <button
  //           className="download-btn"
  //           onClick={downloadPDF}
  //         >
  //           Download PDF
  //         </button>
  //       </div>

  //     <div
  //       id="resume-pdf"
  //       ref={resumeRef}
  //       className="resume-container"
  //       dangerouslySetInnerHTML={{
  //         __html:
  //           resumeHtml,
  //       }}
  //     />
  //   </main>
  // );
};

export default Resume;