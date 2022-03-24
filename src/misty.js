import handleViewport from 'react-in-viewport';
import React from 'react'
// import ReactDOM from 'react-dom'
import { useEffect, useContext, useReducer, createContext } from 'react'
import { SiPostgresql, SiJquery } from 'react-icons/si'
import { FaLinkedin, FaUserGraduate, FaJava, FaHtml5, FaGithub, FaRobot, FaGithubSquare, FaGraduationCap } from "react-icons/fa";
import { IoCloseSharp, IoMenu, IoLogoJavascript, IoLogoChrome, IoLogoReact, IoLogoCodepen } from "react-icons/io5";
import Transition from 'react-transition-group/Transition'

///////Data///////
const clients = [
    { name: "Tractor Supply Company", text: "I started with TSC in December 2019 as a Robotic Process Automation Intern. I was able to complete the certification to be a certified UiPath developer and went on to create 3 different automations to save the company over 30 hours of manual work. When that concluded, my contract was extended to be an analyst/generalist for their contact tracing initiatives.", image: "https://farmvetco.org/wp-content/uploads/2018/05/TSC-LOgo-Use.jpg", url: "tractorsupply.com", tech: ["uipath", "javascript", "git", "chrome", "sql"] },
    { name: "Cook Systems Fast Trackd Program", text: "This program is an intense 8 week training program for up and coming web developer. We trained in Java, Spring Boot, Maven, Javascript, React and GitHub. This is to prepare us for entry level web developer positions using relevant technologies and real world scenarios.", image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.18169-9/1011405_154528164751313_1285575947_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=dtYZ-Syd6k4AX_CM7P-&_nc_ht=scontent-atl3-2.xx&oh=8c0801aae0d6e4140a32fb019275e9aa&oe=60E793B9", url: "https://cooksys.com/", tech: ["javascript", "git", "java", "css", "react"] }
]
const projects = [
    { name: "Excursion", text: "This project was a full stack project using HTML and CSS to create a website according to a given wireframe. This project introduced me to github pages and was the first published github page I created.", image: "https://mistycancode.github.io/excursion/resources/camp.jpg", url: "https://mistycancode.github.io/excursion", tech: ["git", "javascript", "html"] },
    { name: "Hair of the Dog", text: "This app was a passion project during my Nahville State education. I created this for my dog's groomer for her mobile grooming business. It was a labor of love that was very much loved. I tweaked it some and kept the name, because she had her own name, but this was the first complete project I created.", image: "./Users/misty/OneDrive/Pictures/Screenshots/hotdog.PNG", url: "https://mistycancode.github.io/hairOfTheDog/index.html", tech: ["html", "jquery", "git", "javascript"] },
    { name: "Dev-Duel", text: "This was a Cook Systems project using JavaScript and React to utilize GitHub's API to get information about different users and compare them in a 'duel'. This project had students fetch user informationa and create different 'titles' for users and compare stats pulled from the API. This was one of the most fun and satisfying projects to date.", image: "", url: "https://github.com/fasttrackd-student-work/js-assessment-dev-duel-MistyCanCode", tech: ["html", "react", "git", "javascript"] },
    { name: "Code-Pen", text: "This is where I create new content and try new things. I have made several fun pages here including 'Mr. Mystery', 'Magic 8 Ball', 'In the Stars', and much more! Check this one out for sure!", image: false, url: "https://www.codepen.io/mistycancode.com", tech: ["codepen"] }
]

const education = [
    { name: "FastTrackd", url: "https://cooksys.com/", inst: "cooksys" },
    { name: "Associate of Arts and Sciences in Computer Information Technology/Programming", url: "http://www.nscc.edu", inst: "nscc" },
    { name: "jQuery Essential Training", url: "http://www.linkedin.com/learning/jquery-for-web-designers?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "jquery" },
    { name: "jQuery for Web Designers", url: "http://www.linkedin.com/learning/jquery-essential-training-2?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "jquery" },
    { name: "Developing Microsoft SQL Server 2016 Databases", url: "http://www.linkedin.com/learning/developing-microsoft-sql-server-2016-databases?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "sql" },
    { name: "JavaScript Essential Training(2017)", url: "http://www.linkedin.com/learning/javascript-essential-training-3?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "javascript" },
    { name: "Learning SQL Server 2017", url: "http://www.linkedin.com/learning/learning-sql-server-2017?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "sql" },
    { name: "Learning Java 8", url: "https://www.linkedin.com/company/lynda-com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BAYFXXeX%2BQX2RCVWK852iCQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-background_details_certification", inst: "LinkedinLearning", tech: "java" },
    { name: "Git Essential Training: The Basics", url: "http://www.linkedin.com/learning/git-essential-training-the-basics?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "git" },
    { name: "Ethical Hacking with JavaScript", url: "http://www.linkedin.com/learning/ethical-hacking-with-javascript?trk=flagship-lil_details_certification&trk=lil_details_certification", inst: "LinkedinLearning", tech: "javascript" },
]


const about = {
    name: "Misty Tomlin", bio: "My name is Misty Tomlin. I live in Dickson TN with my husband of 15 years and our three pugs in a house that my grandfather built in 1953 on a 12-acre farm in the country. I grew up next-door to this house that my parents built in the field where their garden was when my grandfather got too sick to work it. We moved in when I was 8, and barring the 15 years I spent in Nashville, Smyrna, and Nolensville while I was “spreading my wings”, I have lived there my whole life." +
        "Growing up in the country didn’t provide access to lot of technology, so I grew up playing The Oregon Trail and Carmen San Diego off of those 5 ¼ floppies on school computers. But I also grew up during the golden age of information systems. Atari, Nintendo, Home PC’s. The first computer I owned I got for my high school graduation, and it had a dot-matrix printer. The first cell phones became available in my late teens, laptops got smaller, and now everyone has tablets and smart phones." +
        " I remember when the internet was nothing but AOL chat rooms and 56k modems. And I sit here today, pulling almost 500 Mbps a second." +
        " I didn’t go to college right away after high school, and instead went to beauty school so I could pursue my art, which included giving everyone bleach blond mohawks or tiger striped chunky highlights. And that career blossomed, I became an artistic director and an educator for Bumble and Bumble, then became my own boss." +
        " But after 20 years in the industry, I was tired, bored and I needed a new challenge. So, I went back to school part time. I took an intro to programming class and a networking class and fell in love again. Two and a half years later I had an associates degree, I graduated with honors and a semester long internship, that ended up being extended for over a year. All during a worldwide pandemic. And here we are." +
        " I get to do challenging work every day in an office in my house with my dogs on the couch, and beautiful views all around me. The only other thing I could ask for is to be able to do all these things from the RV and wake up somewhere new every few days, and drink my coffee from the laptop at the base of a mountain somewhere, or in the middle of a national park seeing all the things that we haven’t seen yet. ",
    skills: "Java 8, JavaScript (ES2015+), HTML5, CSS3, SQL, XML, AngularJS, Angular Material, SpringBoot, Spring MVC, JDBC, JAXB, Jackson, JPA, JQuery, NodeJS, Webpack, Babel, Maven, NPM, ASP.Net, C#, Bootstrap, Xamarin Forms "
}

///////End Data///////


///////HELPER FUNCTIONS//////
///////Styles for react-in-viewport//////
function getStyle(inViewport, enterCount) {
    if (inViewport && enterCount === 1) {
        return { WebkitTransition: "all 0.75s ease-in-out", opacity: '1', transform: "scale(1)" };
    } else if (!inViewport && enterCount < 1) {
        return { WebkitTransition: "none", opacity: "0", transform: "scale(.9)" };
    } else {
        return {};
    }
}

///////Icon selector//////
function iconSelector(icon) {
    switch (icon) {
        case "react":
            return < IoLogoReact className="icons" />
        case "jquery":
            return < SiJquery className="icons" />
        case "javascript":
            return < IoLogoJavascript className="icons" />
        case "html":
            return <FaHtml5 className="icons" />
        case "java":
            return <FaJava className="icons" />
        case "chrome":
            return < IoLogoChrome className="icons" />
        case "codepen":
            return <IoLogoCodepen className="icons" />
        case "cooksys":
            return < FaGraduationCap className="icons" />
        case "nscc":
            return < FaUserGraduate className="icons" />
        case "uipath":
            return <FaRobot className="icons" />
        case "git":
            return <FaGithub className="icons" />
        case "sql":
            return <SiPostgresql className="icons" />
        case "menu":
            return < IoMenu className="menu-hamburguer-icon" />
        case "close":
            return < IoCloseSharp className="menu-hamburguer-icon" />
        default:
            return null;
    }
}

//////////Types//////////
const BACK_TO_TOP = "BACK_TO_TOP";
const SEND_EMAIL = "SEND_EMAIL";
const WINDOW_WIDTH = "WINDOW_WIDTH";
const OPEN_MOBILE = "OPEN_MOBILE"

//////////Contexts//////////
const BackToTopContext = createContext();
//const SendContactFormContext = createContext();
// const WindowWidthContext = createContext();

//////////Reducer//////////
const AppReducer = (state, action) => {
    switch (action.type) {
        case BACK_TO_TOP:
            return {
                ...state,
                backToTop: action.payload,
            }
        case SEND_EMAIL:
            return {
                ...state,
                ...action.payload
            }
        case WINDOW_WIDTH:
            return {
                ...state,
                isMobile: action.payload,
            }
        case OPEN_MOBILE:
            return {
                ...state,
                openMobile: action.payload,
            }
        default:
            return state;
    }
}


//////////State Components//////////
// function WindowWidthState(props){
//     const initialState = { 
//       isMobile: "init",
//       openMobile: false,
//     };
//     const [state, dispatch] = useReducer(AppReducer, initialState);
    
//     const handleResize = (bool) => dispatch({type: WINDOW_WIDTH, payload: bool});
//     const openMobile = (bool) => dispatch({type: OPEN_MOBILE, payload: bool});
    
//   //attaching an event listener is an anti pattern in react, I know that.
//   //However, unfortunately, there is no other way around to get the width or scroll movement
//     const checkWindowWidth = () => {
//         window.addEventListener('resize', () => {
//            if (window.innerWidth < 615){
//              handleResize(true)
//            } else if (window.innerWidth > 615){
//              handleResize(false)
//            }
//         });
//     }
      
//     useEffect(()=>{
//         checkWindowWidth()
//     }, [state.isMobile])
    
//     return (
//     <WindowWidthContext.Provider value={{
//           state,
//           openMobile
//         }}>
//       {props.children}
//     </WindowWidthContext.Provider>
//     )
    
//   }

function BackToTopState(props) {
    const initialState = { backToTop: false };
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const backToTop = (bool) => bool !== state.backToTop ? dispatch({ type: BACK_TO_TOP, payload: bool }) : null;

    const checkScroll= () => {
        window.addEventListener('scroll', () => {
            if (!state.backToTop && window.pageYOffset > 60) {
                backToTop(true)
            } else if (state.backToTop && window.pageYOffset <= 60) {
                backToTop(false)
            }
        })
    }
    useEffect(() => {
        checkScroll()
    })
 

    return (
        <BackToTopContext.Provider value={{
            state
        }}>
            {props.children}
        </BackToTopContext.Provider>
    )
}

//////////Layout Components//////////
function Header() {
    return (
        <div id="top" className="header">

            <div className="header-photo-outline">
                <div className="header-photo"></div>
            </div>

            <div className="header-text">
                <h1> Misty Tomlin </h1>
                <p>Professional web developer, free spirit, and dog mom extraordinaire.</p>
            </div>
        </div>
    )
}

function Social() {
    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/misty-tomlin/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/MistyCanCode" tagert="_blank" rel="noreferrer"><FaGithubSquare /></a>
            <a href="https://codepen.io/mistycancode" tagert="_blank" rel="noreferrer"><IoLogoCodepen /></a>
        </div>
    )
}

function ArrowUp({ transitions }) {
    return (
        <a href="#top">
            <div className={transitions}>
                <span className="icon">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256,200l-199,199a15,15 0 01-19,0l-29-29a15,15 0 01 0-19l235-236a16,16 0 01 24,0l235,236a15,15 0 01 0,19l-29,29a15,15 0 01-19,0z" />
                    </svg>
                </span>
            </div>
        </a>
    )
}

function ContentContainer(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

function NavBar({ transitions }) {

    return (
        <div className={`navbar ${transitions}`}>
            <span class="navbar-logo">&#60; &#47;&#62;</span>
            <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
        </div>
    )

}

// function NavBar ({transitions, isMobile, openMobile, isMobileOpen}){
  
//     if(isMobile && isMobile !== "init"){
//       return (
//        <>
//           <div onClick={() => openMobile(!isMobileOpen)} className="menu-icon">
//            {!isMobileOpen && iconSelector("menu")}
//            {isMobileOpen && iconSelector("close")}
//           </div>
        
//         {isMobileOpen && (
//          <div className="mobile-menu" onClick={() => openMobile(!isMobileOpen)} >
//           <span className="mobile-menu"> &#60; &#47; &#62;</span>
//           <ul>
//             <li onClick={() => openMobile(!isMobileOpen)} ><a href="#contact">Contact</a></li>
//             <li onClick={() => openMobile(!isMobileOpen)} ><a href="#about">About</a></li>
//             <li onClick={() => openMobile(!isMobileOpen)} ><a href="#education">Education</a></li>
//             <li onClick={() => openMobile(!isMobileOpen)} ><a href="#projects">Projects</a></li>
//             <li onClick={() => openMobile(!isMobileOpen)} ><a href="#experience">Experience</a></li>
//           </ul>
            
//         </div>
//           )}
//        </>
//       )
//     }
//     if(!isMobile && isMobile !== "init"){
//       return (
//       <div className={`navbar ${transitions}`}>
//         <span class="navbar-logo">&#60; &#47;&#62;</span>
//         <ul>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#education">Education</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#experience">Experience</a></li>
//         </ul>
//       </div>
//       )
//     }
//    //this is necessary in order to avoid pre state assignment UI blink
//    if(isMobile === "init"){
//      return(
//      <>
//      </>
//      )
//    }
//   }


function Card({ name, text, image, url, tech }) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-text">
                    <h2 className="card-title">{name}</h2>
                    <p>{text}</p>
                    <hr />
                    <p>Access: <a href={url} target="_blank" rel="noreferrer">{url}</a></p>
                    <hr />
                    <p>{tech.map(item => iconSelector(item))}</p>
                </div>
                <div className="card-image-container">
                    <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
                </div>
            </div>
        </div>
    )
}


function Exp({ inViewport, enterCount, innerRef }) {
    return (
        <div id="experience" className="section-default" style={getStyle(inViewport, enterCount)} ref={innerRef}>
            <h1>Experience</h1>
            <p>Latest Experience</p>
            <div className="show-case">
                {clients.map((client, index) => {
                    return <Card key={index} {...client} />
                })}
            </div>
        </div>
    );
};
const ViewportExp = handleViewport(Exp);


function Projects({ inViewport, enterCount, innerRef }) {
    return (
        <div id="projects" className="section-default" style={getStyle(inViewport, enterCount)} ref={innerRef}>
            <h1>Projects</h1>
            <p>These are some of the projects I have done</p>
            <div className="show-case">
                {projects.map((client, index) => {
                    return <Card key={index} {...client} />
                })}
            </div>
        </div>
    )
}
const ViewportProjects = handleViewport(Projects);

function EduCard({ name, url, inst, tech }) {
    return (
        <div className="edu-card">
            <div className="edu-card-icon">
                <p>{iconSelector(tech)}</p>
            </div>
            <div className="edu-card-text">
                <h2>{name}</h2>
                <hr />
                <p>{inst} {url && (<> <br /> <a href={url} target="_blank" rel="noreferrer">check em out</a></>)}</p>
            </div>
        </div>
    )
}

function Education({ inViewport, enterCount, innerRef }) {

    return (
        <div id="education" className="section-default" style={getStyle(inViewport, enterCount)} ref={innerRef}>
            <div className="edu-wrap">
                <h1>Education</h1>
                <p>Education and Individual certifications</p>
                <div className="education-container">
                    {education.map(item => (
                        <EduCard {...item} />
                    ))}
                </div>
                <div className="cover-bar"></div>
            </div>
        </div>
    )
}
const ViewportEducation = handleViewport(Education);

function About({ inViewport, enterCount, innerRef }) {

    return (
        <div id="about" className="section-default" style={getStyle(inViewport, enterCount)} ref={innerRef}>
            <h1>About</h1>
            <div className="about">
                <h2>{about.name}</h2>
                <p><span>Bio:</span>{about.bio}</p>
                <hr />
                <p><span>Skills:</span>{about.skills}</p>
            </div>
        </div>
    )
}
const ViewportAbout = handleViewport(About);

function ContactArea(props) {
    const { inViewport, enterCount, innerRef } = props
//     this.state = { name: "", email: "", message: ""};
  
//     const encode = (data) => {
//         return Object.keys(data)
//             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//             .join("&");
//       }

//   const handleSubmit = (e) => {
//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...this.state })
//       })
//         .then(() => alert("Success!"))
//         .catch(error => alert(error));
//     e.preventDefault()
//     };
//      const handleChange = e => {
//          return this.setState({ [e.target.name]: e.target.value });
//      };
//        const {name, email, msg} = this.state;
    

    return (
        <div id="contact" className="section-default" style={getStyle(inViewport, enterCount)} ref={innerRef}>
            <h1>Contact</h1>
            <p></p>
            <div>
                <form name="contact" method='post' data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Name" required />
                    <label className="label" htmlFor="name">Name</label>
                    <input type="email" name="email" placeholder="Email" required />
                    <label className="label" htmlFor="email">Email</label>
                    <textarea name="msg" placeholder="Message" ></textarea>
                    <label className="label-textarea" htmlFor="msg">Message</label>
                    <input type="submit" name="send" value="Send" />
                </form> 
            </div>
        </div>
    )
}
const ViewportContact = handleViewport(ContactArea);

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-photo"></div>
            <h3>{year}</h3>
        </div>
    )
}
//////////End Layout//////////

//////////Layout mounter//////////
function Site(props) {
    const backToTopContext = useContext(BackToTopContext);
    // const windowWidthContext = useContext(WindowWidthContext);
    // const {openMobile} = windowWidthContext;

    return (
        <>
            <Transition in={backToTopContext.state.backToTop} timeout={300}>
                {state => (<ArrowUp transitions={`arrow-${state}`} />)}
            </Transition>
            <Transition in={backToTopContext.state.backToTop} timeout={200}>
                {state => (<NavBar transitions={`navbar-${state}`} />)}
            </Transition>
            <Social />
            <Header />
            <Exp />
            <Projects />
            <Education />
            <About />
            <ContactArea />
            <ContentContainer>
                <ViewportExp />
                <Exp />
                <ViewportProjects />
                <Projects />
                <ViewportEducation />
                <Education />
                <ViewportAbout />
                <About />
                <ViewportContact />
                <ContactArea />
            </ContentContainer>
            <ContentContainer>
                <ViewportExp />
                <ViewportProjects />
                <ViewportEducation />
                <ViewportAbout />
                <ViewportContact/>
            </ContentContainer>
            <Footer />
        </>
    )
}

////////App & Contexts//////////
function App() {
    return (
        <BackToTopState>
            <Site />
        </BackToTopState>
    )
}

// ReactDOM.render(<App />, document.getElementById("root"))

export default App;