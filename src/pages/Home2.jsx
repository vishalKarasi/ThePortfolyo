import { useData } from "../context/dataContext";
import data from "../Data.json";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero2 from "../components/Hero/Hero2";

const Home2 = () => {
  const { userData } = useData();
  const aboutData = userData?.user?.about;
  const serviceData = userData?.user?.services;
  const skillData = userData?.user?.skills;
  const portfolioData = userData?.user?.projects;
  const socialData = userData?.user?.social_handles;

  const {
    heroData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData2,
  } = data;
  return (
    <>
      <Hero2 data={heroData.homeTwoHero} socialData={socialData2} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home2;