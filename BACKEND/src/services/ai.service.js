require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
//const  zodToJsonSchema  = require("zod-to-json-schema").default;


//Puppeteer will not work on VERCEL 
//const puppeteer = require( 'puppeteer' )
// Puppeteer is package to convert html to PDF 

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({

    matchScore: z
        .number()
        .min(0)
        .max(100)
        .describe(
            "A score from 0 to 100 indicating how well the candidate's resume and self-description match the job description."
        ),

    technicalQuestions: z
        .array(
            z.object({

                question: z
                    .string()
                    .describe(
                        "A technical interview question that is highly likely to be asked based on the candidate profile and job description."
                    ),

                intention: z
                    .string()
                    .describe(
                        "What the interviewer is trying to evaluate by asking this question, such as problem-solving ability, framework knowledge, system design skills, coding proficiency, or practical experience."
                    ),

                answer: z
                    .string()
                    .describe(
                        "A detailed guideline for answering the question, including key concepts, examples, best practices, and important points the candidate should mention."
                    )
            })
        )
        .describe(
            "A list of technical interview questions tailored to the target role and candidate profile."
        ),

    behavioralQuestions: z
        .array(
            z.object({

                question: z
                    .string()
                    .describe(
                        "A behavioral or situational interview question that may be asked during the interview."
                    ),

                intention: z
                    .string()
                    .describe(
                        "The personality traits, communication skills, leadership qualities, teamwork abilities, or problem-solving capabilities that the interviewer is assessing."
                    ),

                answer: z
                    .string()
                    .describe(
                        "A suggested answer strategy using practical examples and preferably the STAR (Situation, Task, Action, Result) framework."
                    )
            })
        )
        .describe(
            "A list of behavioral interview questions relevant to the candidate and role."
        ),

    skillGaps: z
        .array(
            z.object({

                skill: z
                    .string()
                    .describe(
                        "A skill, technology, tool, concept, or area of knowledge that the candidate should improve before the interview."
                    ),

                severity: z
                    .enum(["low", "medium", "high"])
                    .describe(
                        "The importance of addressing this skill gap. High means critical for the role, medium means beneficial, and low means optional."
                    )
            })
        )
        .describe(
            "A list of missing or weak skills identified by comparing the candidate profile against the job requirements."
        ),

    prepPlan: z
        .array(
            z.object({

                day: z
                    .number()
                    .describe(
                        "The day number in the interview preparation schedule."
                    ),

                focus: z
                    .string()
                    .describe(
                        "The primary topic, technology, or area of preparation that the candidate should focus on during this day."
                    ),

                tasks: z
                    .array(
                        z.string().describe(
                            "A specific actionable task that the candidate should complete."
                        )
                    )
                    .describe(
                        "A list of practical tasks, exercises, revision activities, mock interviews, or learning objectives for the day."
                    )
            })
        )
        .describe(
            "Please provide a structured day-by-day interview preparation roadmap designed to help the candidate improve interview performance."
        ) ,

        title:z.string().describe("The title of the job for which the interview report id generated ! ")

});


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

        // const prompt = `
        // Analyze the candidate profile and generate ONLY JSON.

        // The response MUST strictly follow this schema:

        // {
        // "matchScore": number,
        // "technicalQuestions": [
        //     {
        //     "question": string,
        //     "intention": string,
        //     "answer": string
        //     }
        // ],
        // "behavioralQuestions": [
        //     {
        //     "question": string,
        //     "intention": string,
        //     "answer": string
        //     }
        // ],
        // "skillGaps": [
        //     {
        //     "skill": string,
        //     "severity": "low" | "medium" | "high"
        //     }
        // ],
        // "prepPlan": [
        //     {
        //     "day": number,
        //     "focus": string,
        //     "tasks": [string]
        //     }
        // ]
        // }

        // Generate:
        // - 5 technical questions
        // - 5 behavioral questions
        // - at least 3 skill gaps
        // - a 7 day preparation plan

        // Resume:
        // ${resume}

        // Self Description:
        // ${selfDescription}

        // Job Description:
        // ${jobDescription}
        // `;

        try {

                const prompt = `

                You are an expert technical interviewer and career coach.

                Analyze the candidate profile and return ONLY valid JSON.

                The JSON MUST EXACTLY follow this structure:

                {
                "title": "",
                "matchScore": 0,
                "technicalQuestions": [
                    {
                    "question": "",
                    "intention": "",
                    "answer": ""
                    }
                ],
                "behavioralQuestions": [
                    {
                    "question": "",
                    "intention": "",
                    "answer": ""
                    }
                ],
                "skillGaps": [
                    {
                    "skill": "",
                    "severity": "low"
                    }
                ],
                "prepPlan": [
                    {
                    "day": 1,
                    "focus": "",
                    "tasks": [
                        "A short one liner description of the task to perform in order to master the skill. "
                    ]
                    }
                ]
                }

                Requirements:
                - The title should be the target job role from the job description.
                - Generate exactly 5 technical questions.
                - Generate exactly 5 behavioral questions.
                - Generate at least 3 skill gaps.
                - Generate a 7-day preparation plan.
                - Return ONLY JSON.
                - Do not include markdown.
                - Do not include explanations.

                RESUME:
                ${resume}

                SELF DESCRIPTION:
                ${selfDescription}

                JOB DESCRIPTION:
                ${jobDescription}
                `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            //responseSchema: zodToJsonSchema(interviewReportSchema)
            
        }
    });


     if (!response.text) {
            throw new Error("Empty response from Gemini");
        }

        const parsedReport = JSON.parse(response.text);

        console.log(parsedReport);

        const validatedReport =
            interviewReportSchema.parse(parsedReport);

        console.log( validatedReport) ;
        return validatedReport;

    } catch (error) {

        console.error(
            "Interview Report Generation Failed:",
            error
        );

        throw error;
    }


        //console.log(JSON.parse(response.text));
         
        // const report = JSON.parse(response.text);
        
        // console.log(report);

        //return report;

    //console.log( response.text ) ; // only text



}


//USED FOR PUPPETEER -> But it Will Not support on VERCEL ( SERVERLESS PLATFORM )

// async function generatePDFFromHtml(htmlContent) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.setContent(htmlContent, {
//         waitUntil: "networkidle0"
//     });

//     const pdfBuffer = await page.pdf({
//         format: "A4",
//         printBackground: true
//     });

//     await browser.close();

//     return pdfBuffer;
// }


// async function generateResumePDF({ resume, selfDescription, jobDescription }) {

//                 const resumepdfSchema = z.object({
//                         html: z.string()
//                     });

//                 const prompt = `
//                 Generate a professional resume in HTML format with the following details: 


//                 Resume:
//                 ${resume}

//                 Self Description:
//                 ${selfDescription}

//                 Job Description:
//                 ${jobDescription}

//                 The resume should be tailored for the given Job Description, it should match and highlight candidate's strength and relevent knowledge and skills.
//                 make sure that does not look like AI generated , make is as close as human-like. Keep it ATS-friendly. The overall design should be simple and Professional.
               
//                 Return ONLY JSON:

//                 {
//                 "html": "<complete HTML document>"
//                 }
//                 `;

//     const response =
//         await ai.models.generateContent({
//             model: "gemini-2.5-flash",
//             contents: prompt,
//             config: {
//                 responseMimeType:
//                     "application/json"
//             }
//         });

//     if (!response.text) {
//         throw new Error(
//             "Empty response from Gemini"
//         );
//     }

//     const jsonContent =
//         JSON.parse(response.text);

//     const validated =
//         resumepdfSchema.parse(
//             jsonContent
//         );

//     const pdfBuffer =
//         await generatePDFFromHtml(
//             validated.html
//         );

//     return pdfBuffer;
// }


    async function generateResume({
  resume,
  selfDescription,
  jobDescription
}) {
  const prompt = `
    Generate a professional resume.

    IMPORTANT:
    1. Return ONLY the HTML that goes INSIDE the body tag.
    2. Do NOT include:
    - <!DOCTYPE html>
    - <html>
    - <head>
    - <body>
    - markdown code blocks.
    3. Put all CSS inline using style="" attributes.
    4. Use only div, h1, h2, h3, p, ul, li, span.
    5. Make the resume ATS-friendly and professional.
    6. The resume should be tailored for the given Job Description, it should match and highlight candidate's strength and relevent knowledge and skills.
    7. Please make sure that does not look like AI generated , make is as close as human-like. Keep it ATS-friendly. The overall design should be simple and Professional.
    
               

        Resume:
        ${resume}

        Self Description:
        ${selfDescription}

        Job Description:
        ${jobDescription}  
        
        `;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

  const html =
    response.candidates?.[0]
      ?.content?.parts?.[0]?.text;

  if (!html) {
    throw new Error(
      "Gemini did not return resume HTML."
    );
  }

  return html
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .trim();
}


module.exports = { generateInterviewReport , generateResume };