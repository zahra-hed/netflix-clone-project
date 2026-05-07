import { useRef, useState } from "react";
import validator from "validator";
import "./mainPage.css";

const vidSrc1 = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v";
const vidSrc2 = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v";

function MainPage(){
    const faqs = [
        {
            "question": "What is Netflix?",
            "answer": [
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
                "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
            ]
        },
        {
            "question": "How much does Netflix cost?",
            "answer": [
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD9.99 a month. No extra costs, no contracts."            ]        },
        {
            "question": "Where can I watch?",
            "answer": [
                "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
                "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            ]        
        },
        {
            "question": "How do I cancel?",
            "answer": [
                "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            ]        
        },
        {
            "question": "What can I watch on Netflix?",
            "answer": [
                "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            ]        
        },
        {
            "question": "Is Netflix good for kids?",
            "answer": [
                "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
                "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            ]        
        }
    ];

    const [openedID, setOpenedID] = useState(-1);
    const [emailValid, setEmailValid] = useState(-2);
    const [emailValid2, setEmailValid2] = useState(-2);
    // emailValid states:
    // -2 : initial state
    // -1 : the email input hes less than 5 characters (or is empty)
    // 0 : the input is more than 4 characters but is invalid
    // 1: the input is valid

    const emailInputRef = useRef(null);
    const emailInputRef2 = useRef(null);
    const bluredFor1stTime = useRef(false);
    const bluredFor1stTime2 = useRef(false);


    const handleClickFAQS = (index) => {
        if(openedID === index)
            setOpenedID(-1);
        else
            setOpenedID(index);
    }

    const validateEmail = (e, index) => {
        let emailInput = e.target.value.trim();
        if(emailInput.length > 4){
            if(validator.isEmail(emailInput)){
                if(index === 1)
                    setEmailValid(1);
                else if(index === 2)
                    setEmailValid2(1);
            }
            else {
                if(index === 1)
                    setEmailValid(0);
                else if(index === 2)
                    setEmailValid2(0);
            }
        }
        else {
            if(index === 1)
                setEmailValid(-1);
            else if(index === 2)
                setEmailValid2(-1);
        }
    }

    const handleGSBtnClick = (e, index) => {
        if(index === 1){
            if(emailValid !== 1)
                emailInputRef.current.focus();
        }
        else if(index === 2){
            if(emailValid2 !== 1)
                emailInputRef2.current.focus();
        }
    }

    const onBlurHandler = (e, index) => {
        if(index === 1){
            if(!bluredFor1stTime.current){
                validateEmail(e, index);
                bluredFor1stTime.current = true;
            }
        }            
        else if(index === 2)
            if(!bluredFor1stTime2.current){
                validateEmail(e, index);
                bluredFor1stTime2.current = true;
            }
    }

    const onChangeHandler = (e, index) => {
        if(index === 1){
            if(bluredFor1stTime.current)
                validateEmail(e, index);
        }        
        else if(index === 2)
            if(bluredFor1stTime2.current)
                validateEmail(e, index);
    }

    return (
    <div className="text-white">
        <div className="plan-offer d-none bg-white d-flex justify-content-center align-items-center w-100 px-4 py-3 text-black">
            <span className="new-plan  fw-bold bg-secondary text-center text-white">NEW!</span>
            <span className="mx-4">Plans now start at <span className="fs-5 fw-bolder">$6.99</span>.</span>
            <a className="learn-more-plan fw-semibold">Learn More
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path></svg>
            </a>
        </div>
       <header className="header-container position-absolute w-100 start-50" style={{"z-index": "1"}}>
            <div className="mp-header d-flex align-items-center mt-4 mx-4">
                <div className="icon-wrapper">
                    <svg className="svg-default" fill="#e50914" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                        <g>
                            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="lang-dd-wrapper dropdown ms-auto me-2 me-lg-4">                
                    <a className="lang-dd px-2 d-flex align-items-center btn text-white py-1 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="lang-icon-wrapper me-0 me-sm-2">
                            <svg className="svg-default" width="16" height="16" viewBox="0 0 16 16" fill="#000" xmlns="http://www.w3.org/2000/svg" data-name="Globe"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" fill="currentColor"></path></svg>
                        </div>
                        <span className="d-none d-sm-block">English</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Español</a></li>
                    </ul>
                </div>
                <button className="si-btn px-3 btn btn-secondary fw-bold d-flex justify-content-center align-items-center">Sign In</button>
            </div>
       </header>
       <main className="w-100">
            <div className="first-card position-relative overflow-hidden w-100">
                <div className="bg-img-wrapper bg-black position-absolute h-100">
                    <img className="bg-img w-100 " src="./images/background_pic.jpg"/>
                </div>
                <div className="first-card-content h-100 w-100 d-flex flex-column align-items-center text-center px-4">
                    <h1 className="mp-title fw-bolder">Unlimited movies, TV shows, and more.</h1>
                    <p className="mp-title-desc mt-2">Watch anywhere. Cancel anytime.</p>
                    <div className="mt-2 px-4">
                        <form>
                            <h3 className="mp-form-h3 fw-normal lh-base">
                            Ready to watch? Enter your email to create or restart your membership.
                            </h3>
                            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-center mt-3 mx-md-4">
                                <div className="email-input-wrapper w-100">
                                    <div className="form-floating">
                                        <input type="email" className={`mp-email-input form-control text-white ${(emailValid === 0 || emailValid === -1)? "invalid-input": emailValid === 1? "valid-input": "" } `} style={{"height": "50px"}} id="emailInput" placeholder="Email address"
                                            onBlur={(e)=>onBlurHandler(e,1)}
                                            onChange={(e)=>onChangeHandler(e,1)}
                                            ref={emailInputRef}
                                            required                                            
                                        />
                                        <label for="emailInput" className="d-flex align-items-center fw-semibold" style={{"color": "#ffffffb3", "opacity": "1"}}>Email address</label>
                                    </div>
                                    <div className={`email-required d-flex align-items-center mt-1 ${ emailValid === 0 || emailValid === -1 ? "d-flex" : "d-none" }`}>
                                        <svg style={{"marginRight": "7px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-0 e19utwz71" data-name="Failure" role="img" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.96967 6.03033L6.93934 8L4.96967 9.96967L6.03033 11.0303L8 9.06066L9.96967 11.0303L11.0303 9.96967L9.06066 8L11.0303 6.03033L9.96967 4.96967L8 6.93934L6.03033 4.96967L4.96967 6.03033Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        {emailValid === -1 ? "Email is required!": emailValid === 0 ? "Please enter a valid email address": ""}
                                    </div>
                                </div>  
                                <button className="gs-btn btn btn-secondary d-block fw-bolder mt-3 mt-sm-0 ms-sm-2 d-flex justify-content-center align-items-center"
                                    onClick={(e)=>handleGSBtnClick(e, 1)}
                                    >
                                    <span>Get Started</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
            <div className="mp-card bg-black w-100 py-5">
                <div className="container px-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xs-12 text-center text-lg-start">
                            <h2 className="mp-h2 fw-bold">Enjoy on your TV.</h2>
                            <p className="mp-h2-decs fw-semibold mt-3">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="col-lg-6 col-xs-12 position-relative">
                            <img src="./images/tv.png" className="img-fluid" style={{"z-index": "1", "position": "relative"}}/>
                            <div className="vid-wrapper-1 position-absolute">
                                <video width="100%" height="100%" muted autoPlay loop>
                                    <source src={vidSrc1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
            <div className="mp-card bg-black w-100 py-5">                
                <div className="container px-4">
                    <div className="row align-items-center flex-row-reverse">      
                        <div className="col-lg-6 col-xs-12 text-center text-lg-start">
                            <h2 className="mp-h2 fw-bold">Watch everywhere.</h2>
                            <p className="mp-h2-decs fw-semibold mt-3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                        </div>                  
                        <div className="col-lg-6 col-xs-12 position-relative">
                            <img src="./images/device-pile.png" className="img-fluid" style={{"z-index": "1", "position": "relative"}}/>
                            <div className="vid-wrapper-2 position-absolute">
                                <video width="100%" height="100%" muted autoPlay loop>
                                    <source src={vidSrc2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
            <div className="mp-card bg-black w-100 py-5">
                <div className="container px-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xs-12 text-center text-lg-start">
                            <h2 className="mp-h2 fw-bold">Create profiles for kids.</h2>
                            <p className="mp-h2-decs fw-semibold mt-3">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                        <div className="col-lg-6 col-xs-12 position-relative">
                            <img src="./images/netflix-kids.png" className="img-fluid"/>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
            <div className="mp-card bg-black w-100 py-5">
                <div className="container px-4">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6 col-xs-12 text-center text-lg-start">
                            <h2 className="mp-h2 fw-bold">Download your shows to watch offline.</h2>
                            <p className="mp-h2-decs fw-semibold mt-3">Only available on ad-free plans.</p>
                        </div>
                        <div className="col-lg-6 col-xs-12 position-relative d-flex justify-content-center">
                            <img src="./images/mobile-0819.jpg" className="img-fluid" style={{"z-index": "1", "position": "relative"}}/>                            
                            <div className="on-img-div start-50 position-absolute bg-black pt-1 pb-2 px-sm-3 d-flex align-items-center">
                                <div className="boxshot-img-cont">
                                    <img src="./images/boxshot.png" className="img-fluid"/>
                                </div>
                                <div className="ms-3">
                                    <div className="mp-film-title fw-bold">Stranger Things</div>
                                    <div className="mp-download-word lh-1">Downloading...</div>
                                </div>
                                <div className="mp-gif-wrapper ms-auto">
                                    <img src="./images/download-icon.gif" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
            <div className="mp-card bg-black w-100 py-5">
                <div className="last-card-wrapper w-100 d-flex flex-column align-items-center mx-auto">
                    <h2 className="mp-h2 fw-bold text-center">Frequently Asked Questions</h2>
                    <div className="faqs-wrapper mt-4">
                        <ul className="faqs-list ps-0">
                            {
                                faqs.map((item,index)=>{
                                    return(
                                        <li className="faqs-list-item mb-2">
                                            <div role="button" className="faqs-q-box d-flex align-items-center" onClick={()=>handleClickFAQS(index)}>
                                                <h3 className="faqs-h3 fw-normal mb-0">{item.question}</h3>
                                                <svg className={`faqs-plus-sign ms-auto ${openedID === index && " rotate-45"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Add" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                            </div>
                                            <div className={`faqs-a-box ${openedID === index ? " faqs-a-box-opened": ""}`}>
                                                    {item.answer.map((answerItem,index2)=>{     
                                                        if(index2 !== item.answer.length-1){
                                                            return(
                                                            <>
                                                                <span>{answerItem}</span>
                                                                <br/><br/>
                                                            </>
                                                            )
                                                        }                                                
                                                        else{
                                                            return(
                                                            <>
                                                                <span>{answerItem}</span>
                                                            </>
                                                            )
                                                        }
                                                    })}
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="mt-5 px-4 text-center" style={{"maxWidth": "700px"}}>
                        <form>
                            <h3 className="mp-form-h3 fw-normal lh-base">
                            Ready to watch? Enter your email to create or restart your membership.
                            </h3>
                            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-center mt-3 mx-md-4">
                                <div className="email-input-wrapper w-100">
                                    <div className="form-floating">
                                        <input type="email" className={`mp-email-input form-control text-white ${(emailValid2 === 0 || emailValid2 === -1)? "invalid-input": emailValid2 === 1? "valid-input": "" } `}
                                        style={{"height": "50px"}} id="emailInput" placeholder="Email address"
                                        onBlur={(e)=>onBlurHandler(e,2)}
                                        onChange={(e)=>onChangeHandler(e,2)}
                                        ref={emailInputRef2}
                                        required
                                        />
                                        <label for="emailInput" className="d-flex align-items-center fw-semibold"  style={{"color": "#ffffffb3", "opacity": "1"}}>Email address</label>
                                    </div> 
                                    <div className={`email-required d-flex align-items-center mt-1 ${ emailValid2 === 0 || emailValid2 === -1 ? "d-flex" : "d-none" }`}>
                                        <svg style={{"marginRight": "7px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-0 e19utwz71" data-name="Failure" role="img" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.96967 6.03033L6.93934 8L4.96967 9.96967L6.03033 11.0303L8 9.06066L9.96967 11.0303L11.0303 9.96967L9.06066 8L11.0303 6.03033L9.96967 4.96967L8 6.93934L6.03033 4.96967L4.96967 6.03033Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        {emailValid2 === -1 ? "Email is required!": emailValid2 === 0 ? "Please enter a valid email address": ""}
                                    </div>
                                </div> 
                                <button className="gs-btn btn btn-secondary d-block fw-bolder mt-3 mt-sm-0 ms-sm-2 d-flex justify-content-center align-items-center"
                                    onClick={(e)=>handleGSBtnClick(e, 2)}
                                >
                                    <span>Get Started</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card-separator w-100 bg-primary"></div>
       </main>
       <footer className="bg-black">
            <div className="footer-container mx-auto">
                <div>Questions? Call &nbsp;
                    <a href="tel:1-844-505-2993" className="footer-link">1-844-505-2993</a>
                </div>
                <div className="footer-links-container">
                    <ul className="footer-list d-grid ps-0">
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                FAQ
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Help Center
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Account
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Media Center
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Investor Relations
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Jobs
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Netflix Shop
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Redeem Gift Cards
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Buy Gift Cards
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Ways to Watch
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Terms of Use
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Privacy
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Cookie Preferences
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Corporate Information
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Contact Us
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Speed Test
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Legal Notices
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Only on Netflix
                            </a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-link">
                                Do Not Sell or Share My Personal Information
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lang-dd-wrapper dropdown mt-5" style={{"width": "fit-content"}}>                
                    <a className="lang-dd px-2 d-flex align-items-center btn text-white py-1 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="lang-icon-wrapper me-2">
                            <svg className="svg-default" width="16" height="16" viewBox="0 0 16 16" fill="#000" xmlns="http://www.w3.org/2000/svg" data-name="Globe"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" fill="currentColor"></path></svg>
                        </div>
                        <span>English</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Español</a></li>
                    </ul>
                </div>
            </div>
       </footer>
    </div>
    );
}
export default MainPage;