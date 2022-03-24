import {Transition, Social, Header, Exp, ViewportExp, Projects, ViewportProjects, Education, ViewportEducation, About, ViewportAbout, ContactArea, Footer} from './misty';

//////////Layout mounter//////////
function Site(props) {
    const backToTopContext = useContext(BackToTopContext);

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
            <ViewportExp />
            <Projects />
            <ViewportProjects />
            <Education />
            <ViewportEducation />
            <About />
            <ViewportAbout />
            <ContactArea />
            <Footer />
        </>
    )
}
export default Site;