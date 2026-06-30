import {
    getAllInterviewReports,
    generateInterviewReport,
    getInterviewReportById,
    getResume
} from '../../auth/services/interview.api.js';

import html2canvas from 'html2canvas' ;
import jsPDF from 'jspdf' ; 

import { useContext } from 'react';
import { InterviewContext } from '../interview.context.jsx';

export const useInterview = () => {
    const context = useContext(InterviewContext);

    if (!context) {
        throw new Error(
            'useInterview must be used within an InterviewProvider'
        );
    }

    const {
        loading,
        setLoading,
        report,
        setReport,
        reports,
        setReports
    } = context;

    const generateReport = async ({
        jobDescription,
        selfDescription,
        resumeFile
    }) => {
        setLoading(true);

        try {
            const response =
                await generateInterviewReport({
                    jobDescription,
                    selfDescription,
                    resumeFile
                });

            setReport(response.interviewReport);

            setReports(prev => [
                response.interviewReport,
                ...(prev || [])
            ]);

            return response.interviewReport;
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getReportById = async (interviewId) => {
        setLoading(true);

        try {
            const response =
                await getInterviewReportById(
                    interviewId
                );

            setReport(response.interviewReport);

            return response.interviewReport;
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getReports = async () => {
        setLoading(true);

        try {
            const response =
                await getAllInterviewReports();

            setReports(
                response.interviewReports
            );

            return response.interviewReports;
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // const downloadPDF = async ( interviewId ) => {
        
    //     setLoading(true);

    //     try {
    //         const response =
    //             await downloadResumePDF(
    //                 interviewId
    //             );

    //         const url =
    //             window.URL.createObjectURL(
    //                 response
    //             );

    //         const link =
    //             document.createElement('a');

    //         link.href = url;
    //         // link.download = 'resume.pdf';
    //         link.setAttribute(
    //             "download",
    //             `resume_${report.title}.pdf`
    //         );
    //         document.body.appendChild(link);

    //         // link.click();

    //         // link.remove();

    //         // window.URL.revokeObjectURL(
    //         //     url
    //         // );

    //         link.click();

    //         setTimeout(() => {
    //             window.URL.revokeObjectURL(url);
    //             link.remove();
    //         }, 100);

    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    //     finally{
    //         setLoading(false) ;
    //     }
    // };

    const getResumeById =

        async (interviewId) => {
        try {
            setLoading(true);

            const response =
            await getResume(interviewId);

            return response.resume;
        }
        finally {
            setLoading(false);
        }
    };

// DOWNLOAD PDF FUNCTION 

const downloadPDF = async () => {
  try {
    setLoading(true);

    const element =
      document.getElementById(
        "resume-pdf"
      );

    if (!element) {
      throw new Error(
        "Resume component not found"
      );
    }

    const canvas =
      await html2canvas(
        element,
        {
          scale: 2,
          useCORS: true,
          scrollY: -window.scrollY,
          windowWidth:
            element.scrollWidth,
          windowHeight:
            element.scrollHeight
        }
      );

    const imgData =
      canvas.toDataURL(
        "image/png"
      );

    const pdf =
      new jsPDF(
        "p",
        "mm",
        "a4"
      );

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth =
      pageWidth;

    const imgHeight =
      (canvas.height *
        imgWidth) /
      canvas.width;

    let heightLeft =
      imgHeight;

    let position = 0;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    while (
      heightLeft > 0
    ) {
      position =
        heightLeft -
        imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -=
        pageHeight;
    }

    pdf.save("resume.pdf");
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};


    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports,
        getResumeById,
        downloadPDF
    };
};