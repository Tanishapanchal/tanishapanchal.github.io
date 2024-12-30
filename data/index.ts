import { IoDocument } from "react-icons/io5";
import { FaReact, FaPython, FaUnity } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

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
      title: "CLAWS: Collaborative Lab for Advancing Work in Space",
      des: "Designed & developed an augmented reality interface using Unity & C# to enable astronauts to store, map, and visualize Geosample data in real time. The design proposal ranked in the top 10 nationwide in the NASA Suits Challenge, advancing to the final product pitch round presented to a panel of NASA astronauts and engineers.",
      img: "/claws.jpg",
      link: "https://claws.engin.umich.edu",
      techStack: ["Unity", "C#", "ARCore"],
      icons: [],
      learnings: [
        "Developed expertise in AR interface design and integration with real-world data.",
        "Enhanced skills in collaborative problem-solving.",
        "Gained experience pitching technical solutions to experts."
      ]
    },
    {
      id: 2,
      title: "Real-Time Queue Fullness Estimation at Ricks American Cafe",
      des: "Developed a real-time queue estimation system using Raspberry Pi and OpenCV to provide live updates on the cafe's line fullness. Implemented a lightweight, pixel-based image processing approach that outperformed complex models like YOLO in efficiency and accuracy under varying lighting and low-resolution conditions.",
      img: "/ricks.png",
      link: "https://drive.google.com/file/d/1Atz5orr_MqlsOeI9v59gznh_nPHCB1Mr/view?usp=sharing",
      techStack: ["OpenCV", "Python", "Image Processing"],
      icons: [IoDocument],
      learnings: [
        "Gained expertise in image processing and real-time data analysis on embedded systems.",
        "Enhanced skills in developing efficient algorithms for computer vision applications.",
        "Learned to integrate hardware with software solutions."
      ]
    },
    {
      id: 3,
      title: "Ohana: Student Subleasing Website",
      des: "Performed web design & feature analysis, user interview testing, and developed a leasing market outreach strategy for client’s beta version, which secured a $125K investment at $10M valuation from Neo VC accelerator program.",
      img: "/ohana.jpeg",
      link: "https://liveohana.ai",
      techStack: ["UI/UX", "Tableau", "Figma"],
      icons: [],
      learnings: [
        "Gained experience in web design and user research.",
        "Learned how to align technical solutions with business goals.",
        "Acquired skills in developing strategies to attract investors."
      ]
    },
    {
      id: 4,
      title: "Multi-robot Software Framework for Search & Rescue Missions",
      des: "Developed a multi-robot software framework for search-and-rescue missions, integrating advanced pathfinding (A*, Dijkstra’s), dynamic task allocation, and geometric formation control for efficient and adaptive operations. Validated scalability and adaptability through simulations and real-time visualizations, ensuring effective autonomous navigation and coordination in dynamic environments.",
      img: "/rob_final.png",
      link: "https://drive.google.com/file/d/1qQCFZAeHvTNC086tpSfzxo1lWW97dFXC/view?usp=sharing",
      techStack: ["Python", "Matplotlib", "NumPy"],
      icons: [IoDocument],
      learnings: [
        "Learned advanced pathfinding algorithms and optimized multi-robot navigation.",
        "Explored dynamic task allocation techniques.",
        "Gained proficiency in real-time simulation and visualization."
      ]
    },
    {
      id: 5,
      title: "Budgy - Mhacks Hackathon",
      des: "Trained a binary model to classify purchases into spending categories for providing monthly budgets and spending recommendations. Developed a Chrome extension that deploys a Streamlit webpage when an online purchase is detected.",
      img: "/mhacks.png",
      link: "#",
      techStack: ["Python", "Streamlit", "Chrome Extensions", "Scikit-learn"],
      icons: [],
      learnings: [
        "Strengthened ability to quickly prototype and deploy solutions.",
        "Learned to implement models in real-time via browser extensions.",
        "Enhanced skills in integrating Streamlit with Chrome extensions."
      ]
    },
    {
      id: 6,
      title: "Image-to-Image Translation with Pix2Pix",
      des: "Implemented an image-to-image translation program based on the Pix2Pix model, training it on the edges2shoes dataset to generate realistic shoe images from sketches.",
      img: "/eecs442.png",
      link: "#",
      techStack: ["PyTorch", "GANs", "Python"],
      icons: [],
      learnings: [
        "Enhanced understanding of generative adversarial networks.",
        "Applied GANs to practical computer vision tasks.",
        "Developed skills in model training and dataset preparation."
      ]
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

