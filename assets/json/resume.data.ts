import { IResume } from "src/app/models/resume.interface";

export const RESUMEDATA: IResume = {
    fullName: 'Brian Russel Santos',
    roleTitle: 'Software Engineer\u00A0\u00A0|\u00A0\u00A0UI/UX Designer',
    shortName: 'Brian Santos',
    emailAddress: 'ryrusselsantos@gmail.com',
    shortIntro: 'I am a Software Engineer based in the Philippines who specializes in web front-end development, UI/UX design, and big data.',
    longIntro: [
        'My work involves building and improving web applications through UI/UX prototyping and development. A big part of my training and experience also involves big data processing and reporting using Microsoft business intelligence (BI) technologies.',
        'Creativity and innovation drives my work, and I aspire to work with people from different backgrounds to open myself up to new or different experiences.'
    ],
    workExperience: [
        {
            companyName: 'Accenture, Inc.',
            companyNameLong: true,
            companyLogoURL: 'assets/svg/acn-logo.svg',
            companyLocation: 'Metro Manila, Philippines',
            companyElementID: 'acn',
            workDuration: 'January 2019 - Present',
            workPictureURL: 'assets/images/acn.jpg',
            workDetails: [
                {
                    workTitle: 'Software Engineer',
                    workBackground: 'background-color: hsl(0deg 0% 16%)',
                    workDuration: 'December 2020 - Present',
                    workDescription: 'Deployed in a project under a nonprofit private foundation in the USA State of Washington',
                    workAccomplishments: [
                        'Enhanced a web application that manages projects and investments which improved the use across 4 different browsers',
                        'Developed 4 Power BI reports used for tracking investments, managing projects, managing system integrations, and tracking COVID travel information which boosted the work efficiency by at least 60%',
                        'Facilitated data Extract-Transform-Load (ETL) using Python, Azure Runbooks, and Boomi which integrated multiple systems',
                        'Delivered 4 UI/UX prototypes for SharePoint sites and PowerApps applications'
                    ]
                },
                {
                    workTitle: 'Associate Software Engineer',
                    workDuration: 'January 2019 - December 2020',
                    workDescription: 'Deployed to the internal innovation and prototyping team',
                    workAccomplishments: [
                        'Produced a prototype Power BI report with data generated from machine learning used for determining the prevalence of data-driven investments',
                        'Prototyped and submitted a patent for a sentiment analysis web application which helped assess and improve customer service call quality; the solution was first utilized by an Australian company',
                        'Created a mobile application prototype in Adobe XD for a European heating technologies company',
                        'Managed and documented hundreds of data mappings that flow between systems using Collibra Data Governance which boosted the impact analysis of changes in the data'
                    ]
                }
            ]
        },
        {
            companyName: 'Freelance Work',
            companyNameLong: false,
            companyLogoURL: 'https://img.icons8.com/color/48/000000/working-with-a-laptop.png',
            companyLocation: 'Bulacan, Philippines',
            companyElementID: 'freelance',
            workDuration: 'August 2018 - November 2018',
            workPictureURL: 'assets/images/freelance.jpg',
            workDetails: [
                {
                    workTitle: 'Web Developer',
                    workDuration: 'August 2018 - November 2018',
                    workDescription: 'Worked as a freelancer for a private school in Bulacan',
                    workAccomplishments: [
                        'Created a web-based school management system for a private school in Bulacan that includes student enrollment, class management, and clinic data management which led to digitizing ~90% of their data'
                    ]
                }
            ]
        },
        {
            companyName: 'Philippine Long-Distance Telephone (PLDT, Inc.)',
            companyNameLong: true,
            companyLogoURL: 'assets/svg/pldt.svg',
            companyLocation: 'Metro Manila, Philippines',
            companyElementID: 'pldt',
            workDuration: 'February 2018 - May 2018',
            workPictureURL: 'assets/images/pldt.jpg',
            workDetails: [
                {
                    workTitle: 'Web Development Intern',
                    workDuration: 'February 2018 - May 2018',
                    workAccomplishments: [
                        `Generated multiple web templates for PLDT Small-to-Medium Enterprise division as a part of their internet service bundles, and enhanced PLDT Alpha's event website which was managed using October CMS`
                    ]
                }
            ]
        }
    ],
    skillSet: {
        technicalSkills: [
            {
                skillCategory: 'Software Engineering and Object-Oriented Programming (OOP)',
                skillCategoryDescription: 'Highly skilled in creating new features, modifying existing components, and optimizing functionalities',
                skills: [
                    {
                        skillName: 'API Integration',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/api-settings.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'C#',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/c-sharp-logo-2.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Java',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'JavaScript',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'PHP',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/php.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Python',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/python--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'TypeScript',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/typescript.png',
                        skillIconBig: false
                    }
                ]
            },
            {
                skillCategory: 'Web Development',
                skillCategoryDescription: 'Proficient in frontend web development, utilizing libraries and frameworks to speed up the development process',
                skills: [
                    {
                        skillName: 'Angular',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/angularjs.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'ASP.Net',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/asp.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Bootstrap',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/bootstrap.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'CSS 3/SCSS',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/css3.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'HTML 5',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/c-sharp-logo-2.png',
                        skillIconBig: false
                    }
                ]
            },
            {
                skillCategory: 'UI/UX Design',
                skillCategoryDescription: 'Alongside frontend development, I have experience in prototyping, design-thinking, and idea-pitching',
                skills: [
                    {
                        skillName: 'Adobe XD',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-xd--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Figma',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/figma--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Design Systems',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/color-palette.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'User Research',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/survey.png',
                        skillIconBig: false
                    }
                ]
            },
            {
                skillCategory: 'Cloud Computing Services (Azure)',
                skillCategoryDescription: 'As a Certified Azure Professional, I am experienced in using various Azure services',
                skills: [
                    {
                        skillName: 'Active Directory',
                        skillIconURL: '/assets/svg/Azure-Active-Directory.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Function Apps',
                        skillIconURL: '/assets/svg/function-apps.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Power Platform',
                        skillIconURL: 'https://img.icons8.com/fluency/48/000000/microsoft-power-apps.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Runbook',
                        skillIconURL: 'assets/svg/power-platform.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Storage Accounts',
                        skillIconURL: 'assets/svg/storage-accounts.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Virtual Machines',
                        skillIconURL: 'assets/svg/virtual-machine.svg',
                        skillIconBig: true
                    }
                ]
            },
            {
                skillCategory: 'Big Data and Business Intelligence',
                skillCategoryDescription: 'Rigorously trained in big data processing, management, visualization, and presentation',
                skills: [
                    {
                        skillName: 'Azure DataBricks',
                        skillIconURL: '/assets/svg/databricks.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Azure Data Factory',
                        skillIconURL: '/assets/svg/data-factory.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Azure Data Lake',
                        skillIconURL: 'assets/svg/data-lake.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Azure HDInsight',
                        skillIconURL: 'assets/svg/hd-insight.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Collibra',
                        skillIconURL: 'assets/images/collibra.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Power BI',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/power-bi.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'SQL',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/sql.png',
                        skillIconBig: false
                    }
                ]
            },
            {
                skillCategory: 'Multimedia Design',
                skillCategoryDescription: 'With experience as early as in university, I am highly skilled in producing multimedia assets',
                skills: [
                    {
                        skillName: 'Adobe After Effects',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-after-effects--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Adobe Audition',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-audition.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Adobe Illustrator',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Adobe Photoshop',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Adobe Premiere Pro',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/adobe-premiere-pro--v1.png',
                        skillIconBig: false
                    }
                ]
            },
            {
                skillCategory: 'Development and IT Operations (DevOps)',
                skillCategoryDescription: 'Being in large-scale projects have also allowed me to gain skills in DevOps tools',
                skills: [
                    {
                        skillName: 'Azure DevOps',
                        skillIconURL: 'assets/svg/azure-devops.svg',
                        skillIconBig: true
                    },
                    {
                        skillName: 'Git',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/git.png',
                        skillIconBig: false
                    },
                    {
                        skillName: 'Jira',
                        skillIconURL: 'https://img.icons8.com/color/48/000000/jira.png',
                        skillIconBig: false
                    }
                ]
            }
        ],
        softSkills: [
            {
                skillName: 'Accountability',
                skillIconURL: 'https://img.icons8.com/color/48/000000/man-raising-hand-icon.png'
            },
            {
                skillName: 'Communication',
                skillIconURL: 'https://img.icons8.com/color/48/000000/talk-male--v1.png'
            },
            {
                skillName: 'Creativity',
                skillIconURL: 'https://img.icons8.com/color/48/000000/paint-palette-with-brush.png'
            },
            {
                skillName: 'Critical Thinking',
                skillIconURL: 'https://img.icons8.com/color/48/000000/critical-thinking--v1.png'
            },
            {
                skillName: 'Eagerness to Learn',
                skillIconURL: 'https://img.icons8.com/color/48/000000/teaching.png'
            },
            {
                skillName: 'Empathy',
                skillIconURL: 'https://img.icons8.com/color/48/000000/dont-worry.png'
            },
            {
                skillName: 'Flexibility',
                skillIconURL: 'https://img.icons8.com/color/48/000000/exercise-skin-type-1.png'
            },
            {
                skillName: 'Initiative',
                skillIconURL: 'https://img.icons8.com/color/48/000000/one-finger--v1.png'
            },
            {
                skillName: 'Innovation',
                skillIconURL: 'https://img.icons8.com/color/48/000000/innovation.png'
            },
            {
                skillName: 'Teamwork',
                skillIconURL: 'https://img.icons8.com/color/48/000000/meeting-room.png'
            }
        ]
    },
    certifications: [
        {
            credentialID: 'NO CREDENTIAL ID',
            credentialTitle: 'UX Foundations: Prototyping',
            credentialIssuer: 'LinkedIn Learning',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/linkedin.png',
            credentialIssueDate: 'May 2021',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '23814877',
            credentialTitle: 'Data Storytelling for Business',
            credentialIssuer: 'StoryIQ',
            credentialIconURL: 'assets/images/storyiq-logo.png',
            credentialIssueDate: 'Sep 2020',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: true
        },
        {
            credentialID: 'H428-8076',
            credentialTitle: 'Microsoft Certified: Azure Fundamentals',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Jun 2020',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '3b47f7e7-8693-48be-84f8-b81a929d0323',
            credentialTitle: 'Microsoft Professional Program: Big Data',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Apr 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '7BE4ED94-8536-4F2D-BE1E-2D85F05CDDF1',
            credentialTitle: 'Delivering a Data Warehouse in the Cloud',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '5E4B21AB-5D85-4297-8F80-6D6E9834007D',
            credentialTitle: 'Implementing Predictive Analytics with Spark in Azure HDInsight',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: 'BAF01EF1-DE22-42E9-87BD-62866E21FE99',
            credentialTitle: 'Introduction to NoSQL Data Solutions',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: 'CAAAAC3B-4FB2-4474-9FAF-83192973BC01',
            credentialTitle: 'Orchestrating Big Data with Azure Data Factory',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '1483D5CC-D8FF-486E-8139-27E04131A9E9',
            credentialTitle: 'Processing Big Data with Azure Data Lake Analytics',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: 'B82B21A7-7DEC-4D1B-9C86-3CA12FCD83F2',
            credentialTitle: 'Processing Real-Time Data with Azure HDInsight',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: 'D20C62FB-9A77-4D50-878D-F8CC67DE3188',
            credentialTitle: 'Querying Data with Transact-SQL',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Mar 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '52B26E9F-886A-4D24-AA91-BA5BB6E32856',
            credentialTitle: 'Analyzing and Visualizing Data with Power BI',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Feb 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        },
        {
            credentialID: '40576C11-D1B9-48B7-8D19-9A1D63BFA1F5',
            credentialTitle: 'Introduction to Big Data',
            credentialIssuer: 'Microsoft',
            credentialIconURL: 'https://img.icons8.com/color/48/000000/microsoft.png',
            credentialIssueDate: 'Feb 2019',
            credentialExpiryDate: 'No Expiration Date',
            credentialIconBig: false
        }
    ]
};
