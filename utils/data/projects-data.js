import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import GIF1 from '/public/GIFVideos/DemoVideo1.gif'
import GIF2 from '/public/GIFVideos/DemoVideo2.gif'
import GIF3 from '/public/GIFVideos/DemoVideo3.gif'

export const projectsData = [
    {
        id: 1,
        name: 'Journey Journals - Bus Ticket Booking WebApp',
        description: "Developed an interactive Bus Reservation System using React.js, Spring Boot, Spring Security, and MongoDB. Enabled users to book exact seats they need using an intuitive interface. Integrated Razorpay for secure payments. Utilized Redux for efficient state management. Implemented robust authentication and authorization mechanisms. Ensured seamless communication between frontend and backend, maintaining data integrity.",
        tools: ['React js', 'Spring Boot', 'Java', 'JavaScript', 'Mongo DB', 'Razorpay', 'Redux', 'Spring Security'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
        gif:GIF1
    },
    {
        id: 2,
        name: 'Doctor Appointment Booking',
        description: 'Doctor Appointment Booking application using React.js, Spring Boot, and MongoDB. Verified doctors can create and showcase their appointments, while patients can easily book appointments. After consultations, doctors can prescribe medicines, which patients can confirm. This ensures a seamless interaction between doctors and patients.',
        tools: ['React js', 'Spring Boot', 'Java', 'JavaScript', 'Mongo DB', 'Razorpay', 'Redux', 'Spring Security'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
        gif:GIF2
    },
    {
        id: 3,
        name: 'HappeiShop - Full stack E-commerce Website',
        description: 'Developed an e-commerce web app with Razorpay payment integration, hosted on Google Cloud. Utilized React.js with Redux for a responsive, user-friendly interface. Implemented the backend with Java Spring Boot, MongoDB, and JWT authentication using Spring Security 6.3. The system ensures secure transactions and efficient user management.',
        tools: ['React js', 'Spring Boot', 'Java', 'JavaScript', 'Mongo DB', 'Razorpay', 'Redux', 'Spring Security'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
        gif:GIF3
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },