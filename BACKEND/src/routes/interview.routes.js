// const express = require('express')
// const authMiddleware = require('../middlewares/auth.middleware')
// const interviewController = require('../controllers/interview.controller')
// const upload = require('../middlewares/file.middleware')

// const interviewRouter = express.Router()


// /**
//  * @route POST /api/interview/
//  * @description generate a interview report on basis of user's resume upload
//  * @access Private
//  *

// interviewRouter.post('/' , authMiddleware.authuser, upload.single('resume') , interviewController.generatInterviewReportController  )


// /**
//  * @route GET /api/interview/report/:interviewId
//  * @description get a interview report by interviewid
//  * @access Private
//  */

// interviewRouter.get('/report/:interviewId' , authMiddleware.authuser, interviewController.getInterviewReportByIdController  )


// /**
//  * @route GET /api/interview/re
//  * @description get all interview reports of a logged in user 
//  * @access Private
//  */

// interviewRouter.get('/' , authMiddleware.authuser, interviewController.getAllinterviewReportController )



// module.exports = interviewRouter

const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const interviewController = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description Generate an interview report based on uploaded resume
 * @access Private
 */
interviewRouter.post(
    '/',
    authMiddleware.authuser,
    upload.single('resume'),
    interviewController.generatInterviewReportController
);

/**
 * @route GET /api/interview/report/:interviewId
 * @description Get a particular interview report
 * @access Private
 */
interviewRouter.get(
    '/report/:interviewId',
    authMiddleware.authuser,
    interviewController.getInterviewReportByIdController
);

/**
 * @route GET /api/interview/
 * @description Get all interview reports of logged-in user
 * @access Private
 */
interviewRouter.get(
    '/',
    authMiddleware.authuser,
    interviewController.getAllinterviewReportController
);

// /**
//  * PUPPETEER -> Not Scalable on Vercel
//  * @route GET /api/interview/report/pdf/:interviewId
//  * @description Generate and download resume PDF
//  * @access Private
//  */
// interviewRouter.get(
//     '/report/pdf/:interviewId', 
//     authMiddleware.authuser,
//     interviewController.generateResumePDFController
// );

/**
 * @route GET /api/interview/resume/:interviewId
 * @description Generate AI Resume
 * @access Private
 */
interviewRouter.get(
  '/resume/:interviewId',
  authMiddleware.authuser,
  interviewController.generateResumeController
);

module.exports = interviewRouter;