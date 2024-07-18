import { faBook, faGlobe, faGraduationCap, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { agricBoothImg, alumniDonateImg, distanceImg, grad23Img, highlightVideo1Main, highlightVideo2Main, highlightVideo3Main, highlightVideo4Main, postgradImg, slideshow1IImg, slideshow2Img, slideshow4Img, slideshow5Img, slideshow6Img, undergradImg, unilife1Img, unilife2Img, unilife3Img, vcInstallImg } from "../lib"

export const admissionData = [
    {
        id: 1,
        number: "42",
        text: "Courses Offered"
    },
    {
        id: 2,
        number: "4500",
        text: "Students Enrolled"
    },
    {
        id: 3,
        number: "20",
        text: "Different Countries"
    },
    {
        id: 4,
        number: "3000",
        text: "Alumni"
    },
]

export const academicData = [
    {
        id: 1,
        text: "Rusangu University offers high-quality undergraduate education rooted in Christian values, preparing students for successful careers and meaningful lives of service.",
        subText: "UNDERGRADUATE EDUCATION",
        image: undergradImg,
        alt: "undergraduate Image",
    },
    {
        id: 2,
        text: "Rusangu University provides top-tier postgraduate education centered on Christian principles, equipping students for thriving careers and purposeful contributions to society.",
        subText: "POSTGRADUATE EDUCATION",
        image: postgradImg,
        alt: "postgraduate Image",
    },
    {
        id: 3,
        text: "Rusangu University boasts a proficient faculty delivering distance learning across all schools. These globally accredited programs aim to cultivate visionary leaders and foster innovative thinking among students.",
        subText: "DISTANCE EDUCATION",
        image: distanceImg,
        alt: "distance learning Image"
    },
]

export const eventData = [
    {
        id: 1,
        event: "Graduation Ceremony for August 23 Semester",
        date: "23rd Sept 2024",
    },
    {
        id: 2,
        event: "October Campus Bonfire",
        date: "28th Oct 2024",
    },
    {
        id: 3,
        event: "End of Year RU Awards Ceremony",
        date: "15th Dec 2024",
    },
    {
        id: 4,
        event: "February Intake Open Day",
        date: "7th Jan 2025",
    },
]

export const footerLinks = [
    {
        id: 1,
        name: "Search",
        link: "",
    },
    {
        id: 2,
        name: "Campus Map",
        link: "",
    },
    {
        id: 3,
        name: "Events",
        link: "",
    },
    {
        id: 4,
        name: "Learning",
        link: "",
    },
    {
        id: 5,
        name: "Privacy & Terms",
        link: "",
    },
    {
        id: 6,
        name: "Careers",
        link: "",
    },
    {
        id: 7,
        name: "Contact Us",
        link: "",
    },
]

export const footerUsefulLinks = [
    {
        id: 1,
        name: "How to Apply",
        link: "",
    },
    {
        id: 2,
        name: "Dates & Deadlines",
        link: "",
    },
    {
        id: 3,
        name: "Students & Guidance",
        link: "",
    },
    {
        id: 4,
        name: "Schedule a Campus Tour",
        link: "",
    },
    {
        id: 5,
        name: "Workshops & Seminars",
        link: "",
    },
    {
        id: 6,
        name: "Published Research",
        link: "",
    },
    {
        id: 7,
        name: "Alumni Association",
        link: "",
    },
]

export const highlightSlides = [
    {
        id: 1,
        video: highlightVideo1Main,
        videoDuration: 5,
    },
    {
        id: 2,
        video: highlightVideo2Main,
        videoDuration: 15,
    },
    {
        id: 3,
        video: highlightVideo3Main,
        videoDuration: 14,
    },
    {
        id: 4,
        video: highlightVideo4Main,
        videoDuration: 4,
    },
]

export const latestNews = [
    {
        id: 4,
        news: "VC Installation Service",
        image: vcInstallImg,
        alt: "Gathered at a ceremony",
        date: "5th September, 2022"
    },
    {
        id: 2,
        news: "2023 Graduation Ceremony",
        image: grad23Img,
        alt: "Graduation Hall",
        date: "4th September, 2022"
    },
    {
        id: 1,
        news: "RU Alumni donate food to flood victims",
        image: alumniDonateImg,
        alt: "people at donation center",
        date: "17th March, 2023"
    },
    {
        id: 3,
        news: "Rusangu University Commemorates farmers day by exhibiting at Lusaka Agricultural Commercial Show",
        image: agricBoothImg,
        alt: "Booth at Lusaka Agricultural Commercial Show",
        date: "7th August, 2023"
    },
    {
        id: 5,
        news: "Rusangu University Commemorates farmers day by exhibiting at Lusaka Agricultural Commercial Show",
        image: agricBoothImg,
        alt: "Booth at Lusaka Agricultural Commercial Show",
        date: "7th August, 2023"
    },
]

export const navInfoLinks = [
    {
        id: 1,
        name: "Students",
        link: "",
    },
    {
        id: 2,
        name: "Faculty",
        link: "",
    },
    {
        id: 3,
        name: "Alumni",
        link: "",
    },
    {
        id: 4,
        name: "Employees",
        link: "",
    },
    {
        id: 5,
        name: "Community",
        link: "",
    },
]

export const navMainLinks = [
    {
        id: 1,
        name: "About Us",
        link: "",
        preview: [
            {
                id: 1,
                name: "University Administration",
                link: "",
            },
            {
                id: 2,
                name: "Careers at Rusangu University",
                link: "",
            },
        ]
    },
    {
        id: 2,
        name: "Admissions",
        link: "",
        preview: [
            {
                id: 1,
                name: "Undergraduate Admissions",
                link: "",
            },
            {
                id: 2,
                name: "Graduate Admissions",
                link: "",
            },
            {
                id: 3,
                name: "Schools",
                link: "",
            },
        ]
    },
    {
        id: 3,
        name: "Academics",
        link: "",
        preview: [
            {
                id: 1,
                name: "Academic Programs",
                link: "",
            },
            {
                id: 2,
                name: "RU Online",
                link: "",
            },
            {
                id: 3,
                name: "Library",
                link: "",
            },
        ]
    },
    {
        id: 4,
        name: "University Life",
        link: "",
        preview: [
            {
                id: 1,
                name: "Events",
                link: "",
            },
            {
                id: 2,
                name: "Graduation Week",
                link: "",
            },
        ]
    },
    {
        id: 5,
        name: "Research",
        link: "",
        preview: [
            {
                id: 1,
                name: "Research News",
                link: "",
            },
            {
                id: 2,
                name: "Policies",
                link: "",
            },
        ]
    },
]

export const navOptions = [
    {
        id: 1,
        icon: faBook,
        name: "STUDY",
        text: "RU provides career-focused and life shaping education to its graduates.",
        image: slideshow6Img,
    },
    {
        id: 2,
        icon: faGlobe,
        name: "EXPERIENCE",
        text: "Many call our university home, creating a diverse alumni of all ages.",
        image: slideshow4Img,
    },
    {
        id: 3,
        icon: faHeartPulse,
        name: "IMPACT",
        text: "We provide a student experience preparing graduates for a career and eternity.",
        image: slideshow2Img,
    },
    {
        id: 4,
        icon: faGraduationCap,
        name: "ALUMNI",
        text: "Our graduates serve in ministry, medicine and many organizations across the world.",
        image: slideshow1IImg,
    },
]

export const uniLifeData = [
    {
        id: 1,
        image: unilife1Img,
    },
    {
        id: 2,
        image: unilife2Img,
    },
    {
        id: 3,
        image: unilife3Img,
    },
]

export const schools = [
    {
        id: 4,
        name: "School of Humanities and Social Sciences",
        link: "",
    },
    {
        id: 6,
        name: "School of Theology and Religious Studies",
        link: "",
    },
    {
        id: 5,
        name: "School of Science and Technology",
        link: "",
    },
    {
        id: 7,
        name: "School of Postgraduate Studies",
        link: "",
    },
    {
        id: 3,
        name: "School of Health Sciences",
        link: "",
    },
    {
        id: 2,
        name: "School of Education",
        link: "",
    },
    {
        id: 1,
        name: "School of Business",
        link: "",
    },
]