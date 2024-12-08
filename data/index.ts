interface projects {
    id: number;
    title: string;
    des: string;
    img: string;
    link: string;
}

export const gridItems = [
    {title: 'Project Description', 
    description: 'Developed & designed', 
    id: 1, 
    className: "grid grid-cols-4 gap-4 "
    },

    {title: 'the tech stack',
     description: '', 
     id: 2,
    className: "grid grid-cols-4 gap-4"
    },
     
    {title: 'What I learned', 
    description: 'Desc1', 
    id: 3,
    className: "grid grid-cols-4 gap-4"
    }
]

export const projects = [
    {
      id: 1,
      title: "Ohana: Student Subleasing Website",
      des: "Performed web design & feature analysis, user interview testing, and developed a leasing market outreach strategy for client’s beta version, which secured a $125K investment at $10M valuation from Neo VC accelerator program.",
      img: '/ohana.jpeg',
      link: "https://liveohana.ai",
      techStack: ["React", "TailwindCSS", "Firebase"],
      learnings: "Gained experience in web design, user research, and how to align technical solutions with business goals to attract investors."
    },
    {
      id: 2,
      title: "CLAWS: Collaborative Lab for Advancing Work in Space",
      des: "Designed & developed an augmented reality interface using Unity & C# to enable astronauts to store, map, and visualize Geosample data in real time. The design proposal ranked in the top 10 nationwide in the NASA Suits Challenge, advancing to the final product pitch round presented to a panel of NASA astronauts and engineers.",
      img: '/claws.jpg',
      link: "https://claws.engin.umich.edu",
      techStack: ["Unity", "C#", "ARCore"],
      learnings: "Developed expertise in AR interface design and integration with real-world data. Enhanced skills in collaborative problem-solving and pitching technical solutions."
    },
    {
      id: 3,
      title: "Budgy - Mhacks Hackathon",
      des: "Trained a binary model to classify purchases into spending categories for providing monthly budgets and spending recommendations. Developed a Chrome extension that deploys a Streamlit webpage when an online purchase is detected.",
      img: '/mhacks.png',
      link: 'https://www.mhacks.org',
      techStack: ["Python", "Streamlit", "Chrome Extensions", "Scikit-learn"],
      learnings: "Strengthened my ability to quickly prototype and deploy solutions during hackathons. Learned how to implement models in real-time through browser extensions."
    },
    {
      id: 4,
      title: "Consensus-Based Robot Formation",
      des: "Simulated consensus dynamics for multi-robot systems to form circular formations while avoiding obstacles and scaling dynamically based on environmental constraints.",
      img: '/complete_graph.png', // Replace with the actual image URL
      link: '#', // Replace with a valid link if available
      techStack: ["Python", "Matplotlib", "NumPy"],
      learnings: "Gained deeper insights into distributed algorithms and their real-world applications in robotics."
    },
    {
      id: 5,
      title: "Image-to-Image Translation with Pix2Pix",
      des: "Implemented an image-to-image translation program based on the Pix2Pix model, training it on the edges2shoes dataset to generate realistic shoe images from sketches.",
      img: '/eecs442.png', // Replace with the actual image URL
      link: '#', // Replace with a valid link if available
      techStack: ["PyTorch", "GANs", "Python"],
      learnings: "Enhanced my understanding of generative adversarial networks and their practical application in computer vision."
    },
    {
      id: 6,
      title: "NASA Tech Trek Presentation",
      des: "Presented autonomous snow-plowing vehicle designs and AI assistant innovations at the annual Ann Arbor Tech Trek, inspiring others to explore technology-driven solutions.",
      img: '/tech-trek.jpg', // Replace with the actual image URL
      link: '#', // Replace with a valid link if available
      techStack: ["Public Speaking", "Prototyping", "AI Concepts"],
      learnings: "Refined presentation skills and learned how to communicate complex ideas to a non-technical audience."
    }
  ];

export const workExps = [
  {
    id: 1,
    name: 'Vanguard',
    pos: 'Software Developer Intern',
    start: 'May 2024',
    end: 'Aug 2024',
    des: 'Malvern, PA',
    pic: '/exp1.svg'
  },
  {
    id: 2,
    name: 'Comerica Bank',
    pos: 'Software Engineer Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    des: 'Auburn Hills, MI',
    pic: '/exp4.svg'
  },
  {
    id: 3,
    name: 'LSA Technology Services BlueCorps Technology Consulting',
    pos: 'Computer Consultant',
    start: 'Sept 2023',
    end: 'Present',
    des: 'Ann Arbor, MI',
    pic: '/exp2.svg'
  },
  {
    id: 4,
    name: 'Reach Consulting Group',
    pos: 'Vice President of Consulting',
    start: 'Jan 2023',
    end: 'Present',
    des: 'Ann Arbor, MI',
    pic: '/exp2.svg'
  }
]

export const prog_lang = [
    {
      "name": "C/C++"
    },
    {
      "name": "Python"
    },
    {
      "name": "C#"
    },
    {
      "name": "GoLang"
    },
    {
      "name": "JavaScript"
    },
    {
      "name": "Node.js"
    },
    {
      "name": "HTML"
    },
    {
      "name": "CSS"
    },
    {
      "name": "MATLAB"
    },
    {
      "name": "Julia"
    },
    {
      "name": "R"
    }
  
]

export const frameworks = [
    {
      "name": "Jinja2"
    },
    {
      "name": "Flask"
    },
    {
      "name": "Boto3"
    },
    {
      "name": "NumPy"
    },
    {
      "name": "OpenCV"
    },
    {
      "name": "Pandas"
    },
    {
      "name": "SQLite Database"
    }
  
]

export const Technologies = [
    {
      "name": "SQLite"
    },
    {
      "name": "AWS S3"
    },
    {
      "name": "DynamoDB"
    },
    {
      "name": "Lambda"
    },
    {
      "name": "GitHub"
    },
    {
      "name": "Visual Studio Code"
    },
    {
      "name": "Unity Hub"
    },
    {
      "name": "Bitbucket"
    },
    {
      "name": "JIRA"
    },
    {
      "name": "Figma"
    },
    {
      "name": "Tableau"
    }
]

