"use client";

import Layout from "@/components/Layout";

const college_projects = [
  {
    title: "TIMELY",
    description: "Monitoring events within an academic campus environment.",
    date: "05/2020",
  },
  {
    title: "SPEECH",
    description:
      "An AI model that interacts with humans to solve their problems. SPEECH is a chatbot with voice modules.",
  },
];

const projects = [
  {
    title: "Software Developer Engineer",
    company: "Pune, India",
    date: "05/2023 - 01/2024",
    description: [
      "Design and development of Admin Dashboard project using NextJS, NodeJS, ReactJs, JavaScript, Mongoose.",
      "Designed and implemented scalable APIs using NextJS and Mongoose Atlas cloud.",
    ],
  },
  {
    title: "Software QA & Automation Test Engineer",
    company: "Pune, MH, India",
    date: "05/2022 - 06/2023",
    description: [
      "CRM Domain application & cloud-based system that offers a wide range of feature & tools to help business effectively manage their customer relationships and improve overall operations efficiency.",
      "Involved in writing test cases, automation test scripts, and following agile scrum methodology using Maven, Jira, GitHub, Jenkins, TestNG.",
    ],
  },
  // Add other experiences similarly...
];

const Index = () => (
  <Layout>
    <section className="border-b border-gray-300 pb-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <p>
        JavaScript | Java | SQL | NoSQL | Node | Express | ReactJS | Git |
        GitHub | NextJS | CI/CD
      </p>
      <p>
        Unit Testing | Jenkins | Jira | Rest Assured | Postman | Cloud Computing
        | Frontend | Full-Stack
      </p>
      <p>
        Selenium | TestNG | Maven | Extent Reports | EGit | Backend | Scrum
        Automation & Manual Testing
      </p>
      <p>English, Hindi, Marathi – All professional proficiency or above</p>
    </section>
    <section className="border-b border-gray-300 pb-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      {projects.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="italic">{exp.company}</p>
          <p className="text-sm text-gray-600">{exp.date}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section className="border-b border-gray-300 pb-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">College Projects</h2>
      {college_projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.date}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  </Layout>
);

export default Index;
