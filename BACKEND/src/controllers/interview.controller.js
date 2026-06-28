const pdfparse = require( 'pdf-parse' )
const { generateInterviewReport , generateResume } = require('../services/ai.service')
const interviewReportModel = require('../models/interviewreport.model')


/**
 * @description Controller used to create report
 */

async function generatInterviewReportController(req,res) {

    //const resumeFile = req.file 

    const resumeContent = await (new pdfparse.PDFParse( Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    if (!req.file) {
    return res.status(400).json({
        message: "Resume PDF is required"
    });
}

    const interviewReportbyAi = await generateInterviewReport({

        resume: resumeContent.text ,
        selfDescription,
        jobDescription 
    })

    const interviewReport = await interviewReportModel.create({
        
        user: req.user.id ,
        resume: resumeContent.text,
        selfDescription , 
        jobDescription,
        ...interviewReportbyAi

    })

    res.status(201).json({
    message: "Interview report generated successfully",
    interviewReport
})
}

/**
 * @description Controller used to get the Interview report by Id
 */

async function getInterviewReportByIdController( req, res ) {
   
    const { interviewId } = req.params
    
    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if( !interviewReport ){
        return res.status(400).json({
            message: "Interview Report not found"
        }) 
    }

    res.status(200).json({
    message: "Interview Report found",
    interviewReport
});

}

/**
 * @description Controller used to create report
 */

async function getAllinterviewReportController(req,res){

    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({createdAt : -1 }).select('-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps ')

     
        res.status(200).json({
            message: "Interview Report found",
            interviewReports
        }) 
}

// /**
//  * @description Controller to generate and download Resume PDF via PUPPETEER 
//  */

// async function generateResumePDFController(req, res) {
//     try {
//         const { interviewId } = req.params;

//         const interviewReport =
//             await interviewReportModel.findOne({
//                 _id: interviewId,
//                 user: req.user.id
//             });

//         if (!interviewReport) {
//             return res.status(404).json({
//                 message: "Interview Report not found"
//             });
//         }

//         const pdfBuffer =
//             await generateResumePDF({
//                 resume: interviewReport.resume,
//                 selfDescription:
//                     interviewReport.selfDescription,
//                 jobDescription:
//                     interviewReport.jobDescription
//             });

//         res.set({
//             "Content-Type": "application/pdf",
//             "Content-Disposition":
//                 `attachment; filename="${interviewReport.title || "resume"}.pdf"`,
//             "Content-Length": pdfBuffer.length
//         });

//         return res.send(pdfBuffer);
//     }
//     catch (error) {
//         console.error(
//             "Resume PDF Generation Error:",
//             error
//         );

//         return res.status(500).json({
//             message: "Failed to generate PDF",
//             error: error.message
//         });
//     }
// }

/**
 * 
 * @description : Controller to get the AI Resume PDf using html2canvas and jsPDF
 * 
 */

async function generateResumeController( req , res ) {
  try {
    const { interviewId } = req.params;

    const interview =
      await interviewReportModel.findOne({
        _id: interviewId,
        user: req.user.id
      });

    if (!interview) {
      return res.status(404).json({
        message:
          "Interview report not found"
      });
    }

    const aiResume =
      await generateResume({
        resume:
          interview.resume,
        selfDescription:
          interview.selfDescription,
        jobDescription:
          interview.jobDescription
      });

    res.status(200).json({
      message:
        "Resume generated successfully",
      resume: aiResume
    });
  } catch (err) {
      console.error("Resume Generation Error:");
      console.error(err);

      res.status(500).json({
        message: err.message
      });
    }
}

module.exports = { generatInterviewReportController , getInterviewReportByIdController, getAllinterviewReportController , generateResumeController  }