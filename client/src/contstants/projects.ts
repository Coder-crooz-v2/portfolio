import spotichat from "/projects/spotichat.png";
import gemai from "/projects/gemai.png";
import movieRecommender from "/projects/movie-recommender.png";
import safedrive from "/projects/safedrive.png";
import bigInteger from "/projects/bigInt.png";
import pdftoxml from "/projects/pdftoxml.png";

export const projects = [
    {
        title: "SafeDrive",
        description: "An AI-based web application that helps users to drive safely by detecting speed and drowsiness and helps validate insurance claims in case of accidents.",
        image: safedrive,
        url: "https://safedrive-1.onrender.com",
        githubUrl: "https://www.github.com/Coder-crooz-v2/SafeDrive",
        tags: [
            "MERN",
            "Mediapipe",
            "Gemini"
        ]
    },
    {
        title: "PDF to XML",
        description: "A SaaS web application that converts PDF files to XML files using PDF.js and fast-xml-parser and stores the converted files on the server.",
        image: pdftoxml,
        url: "https://awesome-pdf-to-xml.vercel.app",
        githubUrl: "https://www.github.com/Coder-crooz-v2/Awesome-pdf-to-xml",
        tags: [
            "MERN",
            "PDF.js",
            "Express.js"
        ]
    },
    {
        title: "Spotichat",
        description: "A realtime chat application with the benefits of music streaming, where users can interact with other users and track their activity on the app.",
        image: spotichat,
        url: "https://spotichat.onrender.com",
        githubUrl: "https://www.github.com/Coder-crooz-v2/Spotichat",
        tags: [
            "MERN",
            "Zustand",
            "Socket.io"
        ]
    },
    {
        title: "GemAI",
        description: "An AI image generation web application where you can generate images for free and share it with the community for others to see.",
        image: gemai,
        url: "https://gem-ai-seven.vercel.app/",
        githubUrl: "https://www.github.com/Coder-crooz-v2/gem-ai",
        tags: [
            "React",
            "Express.js",
            "MonogDB"
        ]
    },
    {
        title: "Movie recommendation system",
        description: "A movie recommendation system that uses NLP to suggest movies to the user based on the user's preferences.",
        image: movieRecommender,
        url: "#",
        githubUrl: "https://www.github.com/Coder-crooz-v2/movie-recommender",
        tags: [
            "Python",
            "NLP",
            "Flask"
        ]
    },
    {
        title: "Big Integer",
        description: "A big integer library in C++ that can handle integers of any size, with the ability to perform arithmetic and logical operations on them.",
        image: bigInteger,
        url: "#",
        githubUrl: "https://www.github.com/Coder-crooz-v2/Big-integer",
        tags: [
            "C++",
            "OOP"
        ]
    },
]