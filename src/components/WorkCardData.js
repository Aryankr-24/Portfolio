import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Real Time Chat App",
    text: "Build a project that can do real time chat between two or more persons. It uses the concept of socket programming that enable us to set the connection between two person in an efficient manner. I have used ExpressJS for doing the backend coding and HTML, CSS and JavaScript for frontend.",
    view:"https://github.com/Aryankr-24/RealTime_ChatApp",
    source:"https://github.com/Aryankr-24/RealTime_ChatApp"
  },
  {
    imgsrc: pro2,
    title: "JOBS Api",
    text: "Build an API that have authentication feature. With the help of this API we can add new jobs in the database and can delete it also. We can update the currently listed jobs also. It is completely a backend project for designing the back end code I have used ExpressJS.",
    view:"https://github.com/Aryankr-24/Jobs_Api",
    source:"https://github.com/Aryankr-24/Jobs_Api"
  },
  {
    imgsrc: pro3,
    title: "STORE Api",
    text: "Build an API that can help us to keep the record of the items. We can fetch the products details as per our request. It is completely a backend project. I have used MONGO DB Cloud database for storing the data. And ExpressJS for backend code designing. For API testing I have used POSTMAN.",
    view:"https://github.com/Aryankr-24/Store-Api",
    source:"https://github.com/Aryankr-24/Store-Api"
  }
];

export default ProjectCardData;
