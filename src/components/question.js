import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import educ from '../assets/educ.PNG'
import health from '../assets/health.PNG'
import travel from '../assets/travel.PNG'
import social from '../assets/social.PNG'
import other from '../assets/o.PNG'
import fintech from '../assets/fintech.PNG'
import ecomerce from '../assets/ecommerce.PNG'

const question = [
    {
        id: 0,
        title: "Your industry",
        options: [{ icon: <img src={educ} alt="education" height={70} width={70} />, titre: "Education" },
        { icon: <img src={health} alt="health" height={70} width={70}/>, titre: "Healthcare" },
        { icon: <img src={social} alt="social" height={70} width={70}/>, titre: "Social networking" },
        { icon: <img src={fintech} alt="social" height={70} width={70}/>, titre: "FinTech" },
        { icon: <img src={travel} alt="social" height={70} width={70}/>, titre: "Travel" },
        { icon: <img src={ecomerce} alt="social" height={70} width={70}/>, titre: "E-commerce" },
        { icon: <img src={other} alt="social" height={70} width={70}/>, titre: "Other" }],
        ans: 3,
    },
    {
        id: 1,
        title: "question 2",
        options: [{ icon: <FaBars />, titre: "Education" }, { icon: <FaBars />, titre: "Healthcare" }, { icon: <FaBars />, titre: "Social networking" }
            , { icon: <FaBars />, titre: "FinTech" },
        { icon: <FaBars />, titre: "Travel" },
        { icon: <FaBars />, titre: "E-commerce" },
        { icon: <FaBars />, titre: "Other" }],
        ans: 3,
    },
    {
        id: 2,
        title: "q3",
        options: [{ icon: <FaBars />, titre: "Education" }, { icon: <FaBars />, titre: "Healthcare" }, { icon: <FaBars />, titre: "Social networking" }
            , { icon: <FaBars />, titre: "FinTech" },
        { icon: <FaBars />, titre: "Travel" },
        { icon: <FaBars />, titre: "E-commerce" },
        { icon: <FaBars />, titre: "Other" }],
        ans: 3,
    },
    {
        id: 3,
        title: "q4",
        options: [{ icon: <FaBars />, titre: "Education" }, { icon: <FaBars />, titre: "Healthcare" }, { icon: <FaBars />, titre: "Social networking" }
            , { icon: <FaBars />, titre: "FinTech" },
        { icon: <FaBars />, titre: "Travel" },
        { icon: <FaBars />, titre: "E-commerce" },
        { icon: <FaBars />, titre: "Other" }],
        ans: 3,
    },
];

export default question;