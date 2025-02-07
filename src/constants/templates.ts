export const templates = [
  {
    id: 'blank-document', label: 'Blank Document', imageUrl: '/blank-document.svg', initialContent: ""
  },
  {
    id: 'business-letter', label: 'Business Letter', imageUrl: '/business-letter.svg', initialContent: `<div>
      <p>[Your Name]<br>[Your Address]<br>[City, State ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient Name]<br>[Company Name]<br>[Address]<br>[City, State ZIP]</p>
      <p>Dear [Recipient Name],</p>
      <p>I am writing to [state the purpose of your letter].</p>
      <p>[Body paragraph 1: Introduce your main point]</p>
      <p>[Body paragraph 2: Provide supporting details]</p>
      <p>[Body paragraph 3: Call to action or conclusion]</p>
      <p>Sincerely,</p>
      <p>[Your Name]<br>[Your Title]</p>
    </div>`
  },
  {
    id: 'cover-letter', label: 'Cover Letter', imageUrl: '/cover-letter.svg', initialContent: `<div>
      <p>[Your Name]<br>[Your Address]<br>[City, State ZIP]<br>[Your Email]<br>[Your Phone]</p>
      <p>[Date]</p>
      <p>[Hiring Manager's Name]<br>[Company Name]<br>[Company Address]<br>[City, State ZIP]</p>
      <p>Dear [Hiring Manager's Name],</p>
      <p>I am writing to express my strong interest in the [Position] role at [Company Name], as advertised on [where you found the job posting].</p>
      <p>With my background in [relevant field] and experience in [relevant skills], I am confident in my ability to contribute effectively to your team. [Add a specific achievement or qualification that makes you stand out].</p>
      <p>I am particularly drawn to [Company Name] because [specific reason why you want to work for this company]. Your company's [mention something specific about the company's work, culture, or values] aligns perfectly with my professional goals.</p>
      <p>Thank you for considering my application. I look forward to discussing how I can contribute to [Company Name].</p>
      <p>Sincerely,<br>[Your Name]</p>
    </div>`
  },
  {
    id: 'letter', label: 'Letter', imageUrl: '/letter.svg', initialContent: `<div>
      <p>[Your Name]<br>[Your Address]<br>[City, State ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient's Name]<br>[Recipient's Address]<br>[City, State ZIP]</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Opening paragraph: Introduction and purpose of writing]</p>
      <p>[Main content paragraph]</p>
      <p>[Closing paragraph]</p>
      <p>Best regards,</p>
      <p>[Your Name]</p>
    </div>`
  },
  {
    id: 'project-proposal', label: 'Project Proposal', imageUrl: '/project-proposal.svg', initialContent: `<div>
      <h1>Project Proposal</h1>
      <h2>Project Overview</h2>
      <p>[Brief description of the project]</p>
      
      <h2>Objectives</h2>
      <ul>
        <li>[Objective 1]</li>
        <li>[Objective 2]</li>
        <li>[Objective 3]</li>
      </ul>
      
      <h2>Scope</h2>
      <p>[Define what is included and excluded from the project]</p>
      
      <h2>Timeline</h2>
      <p>[Project timeline and major milestones]</p>
      
      <h2>Budget</h2>
      <p>[Budget breakdown and cost estimates]</p>
      
      <h2>Resources Required</h2>
      <p>[List of required resources, team members, and materials]</p>
      
      <h2>Expected Outcomes</h2>
      <p>[Description of deliverables and expected results]</p>
      
      <h2>Risk Assessment</h2>
      <p>[Potential risks and mitigation strategies]</p>
    </div>`
  },
  {
    id: 'resume', label: 'Resume', imageUrl: '/resume.svg', initialContent: `<div>
      <h1>[Your Name]</h1>
      <p>[Address] • [Phone] • [Email]</p>
      
      <h2>Professional Summary</h2>
      <p>[2-3 sentences about your professional background and key strengths]</p>
      
      <h2>Experience</h2>
      <h3>[Company Name] - [Location]</h3>
      <p>[Job Title] | [Start Date] - [End Date]</p>
      <ul>
        <li>[Key achievement or responsibility]</li>
        <li>[Key achievement or responsibility]</li>
        <li>[Key achievement or responsibility]</li>
      </ul>
      
      <h2>Education</h2>
      <p>[Degree] in [Field]<br>[University Name] - [Location]<br>[Graduation Year]</p>
      
      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
      </ul>
      
      <h2>Certifications</h2>
      <ul>
        <li>[Certification 1]</li>
        <li>[Certification 2]</li>
      </ul>
    </div>`
  },
  {
    id: 'software-proposal',
    label: 'Software Proposal',
    imageUrl: '/software-proposal.svg',
    initialContent: `<div>
      <h1>Software Development Proposal</h1>
      
      <h2>Executive Summary</h2>
      <p>[Brief overview of the software project and its goals]</p>
      
      <h2>Project Description</h2>
      <p>[Detailed description of the software solution]</p>
      
      <h2>Technical Requirements</h2>
      <ul>
        <li>[Requirement 1]</li>
        <li>[Requirement 2]</li>
        <li>[Requirement 3]</li>
      </ul>
      
      <h2>Technology Stack</h2>
      <p>[List of proposed technologies, frameworks, and tools]</p>
      
      <h2>Development Phases</h2>
      <ol>
        <li>Planning and Analysis</li>
        <li>Design</li>
        <li>Development</li>
        <li>Testing</li>
        <li>Deployment</li>
        <li>Maintenance</li>
      </ol>
      
      <h2>Timeline and Milestones</h2>
      <p>[Detailed project timeline with key deliverables]</p>
      
      <h2>Budget</h2>
      <p>[Cost breakdown including development, testing, and maintenance]</p>
      
      <h2>Team Structure</h2>
      <p>[Description of team members and their roles]</p>
      
      <h2>Maintenance and Support</h2>
      <p>[Post-deployment support and maintenance plans]</p>
    </div>`
  },
];