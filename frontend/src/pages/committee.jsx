import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../App.css";

const heroimage = "/images/KIET1.jpg";

// Committee Data Structure - REVERTED to original
const committeesData = [
  {
    title: "Chief Patron(s)",
    members: [
      "Shri Sarish Agarwal, Chairman, KIET Group of Institutions, Delhi-NCR, Ghaziabad, UP, India.",
      "Shri Atul Garg, Vice Chairman, KIET Group of Institutions, Delhi-NCR, Ghaziabad, UP, India.",
      "Shri Sunil P. Gupta, General Secretary, KIET Group of Institutions, Delhi-NCR, Ghaziabad, UP, India.",
    ],
  },
  {
    title: "Patron(s)",
    members: [
      "Dr. Manoj Goel, Executive Director, KIET Group of Institutions, Delhi-NCR, Ghaziabad, UP, India",
      "Prof.(Dr.) Adesh K. Pandey, Director (Academics), KIET Group of Institutions, Delhi-NCR, Ghaziabad, UP, India",
    ],
  },
  {
    title: "Honorary Chair(s)",
    members: [
      "Pal Nikhil R., India (Fellow, IEEE and President-Elect 2017, IEEE CIS)",
      "Balas Valentina E., Romania (Emergent Technologies Technical Committee Member, IEEE CIS)",
      "Cengiz Korhan, Turkey",
    ],
  },
  {
    title: "International Co-Chair(s)",
    members: [
      "Bernadette Bouchon-Meunier, France (President, IEEE CIS (2020-2022))",
      "Srinivasan Dipti, Singapore (Member, SP Subcommittee Chair, IEEE CIS)",
      "Folly Komla, South Africa (Vice Chair, TF9, Intelligent Systems Applications Technical Committee, IEEE CIS)",
    ],
  },
  {
    title: "Conference General Co-Chair(s)",
    members: [
      "Panigrahi B. K., India (Chairperson, IEEE CIS Delhi Chapter)",
      "Ghosh Ashish, India (Emergent Technologies Technical Committee Member, IEEE CIS)",
      "Ansari Abdul Quaiyum (Secretary, IEEE CIS Delhi Chapter)",
      "Kashyap Rekha, India (Member, IEEE CIS)",
      "Khatter Harsh, India (Member, IEEE CIS)",
    ],
  },
  {
    title: "Conference Organizing Co-Chair(s)",
    members: [
      "Garg Puneet, India",
      "Bhardwaj Manish, India",
    ],
  },
  {
    title: "EDI Committee Chair(s)",
    members: [
      "Juneja Sapna, India",
      "Jaglan Vivek, Canada",
    ],
  },
  {
    title: "Finance Committee/ Treasurer",
    members: [
      "Shivam Sundaram Satyam, India (Chair)",
      "Saxena Shrankhla, India (Co-Chair)",
      "Lomror Mukesh, India (Member)",
      "Patel Rachit, India (Member)",
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      "Garg Ankur, India (Chair)",
      "Gupta Shelly, India (Co-Chair)",
      "Singh Pratibha, India (Co-Chair)",
      "Chaudhary Meeta, India (Member)",
      "Gupta Prince, India (Member)",
      "Singh Nidhi, India (Member)",
      "Dubey Supriya, India (Member)",
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      "Vashisht Rohit, India (Chair)",
      "Deshmukh Sonia, India (Co-Chair)",
      "Garg Puneet, India",
      "Bhardwaj Manish, India",
      "Tripathi Mukesh, India",
      "Kumar Devesh, India",
      "Srivastav Gaurav, India",
      "Singh Richa, India",
      "Singh Laxman, India",
      "Gupta Prince, India",
      "Dubey Supriya, India",
      "Saxena Shrankhla, India",
      "Ahuja Bindiya, India",
      "Alam Rizwan, India",
      "Anjum Sana, India",
      "Balodi Arun, India",
      "Bhabendu Kumar Mohanta, India",
      "Bhardwaj Rajat, India",
      "Danish Athar, Uzbekistan",
      "Bharti Veena, India",
      "Chaitanya Krishna N, India",
      "Chawla Paras, India",
      "Chawla Sachin, India",
      "Chawla Tanvi, India",
      "Chergui Yahia, Algeria",
      "Dahri Nisar Ahmed, Malaysia",
      "DegadwalaSheshang, India",
      "Dixit Ashish, India",
      "Dudeja Deepak, India",
      "G Rajesh, India",
      "Goel Parul, India",
      "Gollagi S G, India",
      "Gupta AmarDeep, India",
      "Hooda Susheela, India",
      "Jaidka Preeti, India",
      "Karthikeyan P, Taiwan",
      "Kaushik Keshav, India",
      "Khan Shakir, Riyadh (Saudi Arab)",
      "Khan Zabiha, India",
      "Krishnan M B Mukesh, India",
      "Kumar Ajay, India",
      "Kumar Mukesh, India",
      "Kumar Pankaj, India",
      "Kumar Praveen Mannepalli, India",
      "Kumari Chetna, India",
      "Lai Wen-Cheng, Taiwan",
      "Mahajan Shubham, India",
      "Malik Varun, India",
      "Mishra Kumar Santosh, India",
      "Monga Himanshu, India",
      "Murugan Nagarajan Senthil, Luxembourg",
      "Murugan Thangavel, United Arab Emirates",
      "Nema Kumar Rajesh, India",
      "Nigam Akhil, India",
      "Panneerselvam Karthick, India",
      "Pathak Nilotpal, India",
      "Patra Manoj Kumar, India",
      "Ranjan Rajiva Dwivedi, India",
      "Sahu Shashank, India",
      "Selvaraju Rajasekaran, Oman",
      "Sharma Chirag, India",
      "Sharma Vaibhav, India",
      "Sille Roohi, India",
      "Singh Kuljeet, India",
      "Singh Pranav Kumar, India",
      "Singh Pushpendra, India",
      "Singh Shweta, India",
      "Sivabalan S., India",
      "Sivakumar P., India",
      "Sundaram Jawahar, India",
      "Tripathi Sudhanshu, India",
      "Upadhyaya Vivek, India",
      "Varshney Neha, India",
      "Vashisht Swati, India",
      "Yadav Ganesh, India",
      "Gupta Kumar Amit, India",
    ],
  },
  {
    title: "Technical Management Committee",
    members: [
      "Garg Puneet, India (Chair)",
      "Garg Ankur, India, India (Co-Chair)",
      "Singh Pratibha, India (Member)",
      "Gupta Shelly, India (Member)",
      "Nath Dubey Nagendra, India (Member)",
      "Gupta Kavya, India (Member)",
    ],
  },
  {
    title: "Publication Committee",
    members: [
      "Bhardwaj Manish, India (Chair)",
      "Singh Richa, India (Co-Chair)",
      "Kaur Deepneder, India (Member)",
      "Kumar Deep, India (Member)",
      "Arya Ashima, India (Member)",
      "Singh Priya, India (Member)",
      "Verma Surbhi, India (Member)",
    ],
  },
  {
    title: "Publicity Committee",
    members: [
      "Juneja Sapna, India (Chair)",
      "Vashisht Rohit, India (Co-Chair)",
      "Singh Laxman, India (Co-Chair)",
      "Singh Pratibha, India (Member)",
      "Gupta Shelly, India (Member)",
      "Arya Ashima, India (Member)",
    ],
  },
  {
    title: "Institutional Advisory Board",
    members: [
      "Gupta Neeraj, India (Member, IEEE CIS)",
      "Juneja Abhinav, India (Member, IEEE CIS)",
      "Kanwal Ashish, India",
      "Kumar Shrivastava Ajay, India",
      "Sachan Vibhav, India",
      "Sharma Vineet, India",
      "Singh Brijesh, India",
      "Goswami Puneet",
      "Sharma Arvind, India",
    ],
  },
  {
    title: "Technical Advisory Board",
    members: [
      "Mathur Deepak, India",
      "Das Debabrata, India",
      "Desai UB, India",
      "Kumar Amit, India",
      "Abdullah Al-Sadhan Abeer, Saudi Arabia",
      "Abidin Shafiq ul, India",
      "Bali Vikram, India",
      "BatabyalSuvadip, India",
      "Dixit Ashutosh, India",
      "Eol Lee Han, South Korea",
      "Gupta Dharmendra, India",
      "Hu Yu-Chen, Taiwan",
      "Illes Zoltan, Hungary",
      "Jaglan Vivek, Canada",
      "Kumar Bhatia Komal, India",
      "Kumar Mahesh, India",
      "Kumar Naresh, India",
      "Kumar Singh Deepak, India",
      "Kumar Verma Shailender, India",
      "Lobiyal D.K., India",
      "Mishra Atul, India",
      "Mittal Harish, India",
      "Nagpal C. K., India",
      "Noeiaghdam Samad, Russia",
      "Panchal V. K., India",
      "Rahul Rishi, India",
      "Sabate Juan, USA",
      "Sangwan Sukhdeep, India",
      "Sasaki Minoru, Japan",
      "Sharma Kapil, India",
      "Singh A. P., India",
      "Singh Manjeet, India",
      "Singh Mayank, India",
      "Singh Narinderjit, Malaysia",
      "Singh Yudhvir, India",
      "Solanki Monika, United Kingdom",
      "Suri Bharti, India",
      "Swaroop Abhishek, India",
      "Zetterlund Per, Australia",
    ],
  },
  {
    title: "Hospitality & Registration Committee",
    members: [
      "Singhal Swasti, India (Chair)",
      "Chaudhary Akanksha, India (Co-Chair)",
      "Gupta Astha, India (Member)",
      "Priyanka, India (Member)",
      "Singh Garima, India (Member)",
      "Narang Kiran, India (Member)",
      "Tyagi Shivani, India (Member)",
      "Tyagi Shivangi, India (Member)",
      "Mavis Daniel Ruchika, India (Member)",
      "Lakhotia Mayank, India (Member)",
      "Sinha Nikita, India (Member)",
      "Singh Shobha, India (Member)",
      "Haider Yusuf, India (Member)",
    ],
  },
  {
    title: "Local Arrangements Committee",
    members: [
      "Kumar Vinay, India (Chair)",
      "Kumar Singh Gagan, India (Co-Chair)",
      "Kumar Bikki, India (Member)",
      "Madhukar, India (Member)",
      "Malik Bhuvnesh, India (Member)",
      "Lomror Mukesh, India (Member)",
    ],
  },
  {
    title: "Media Management & Website Committee",
    members: [
      "Bhawna, India (Chair)",
      "Sharma Latika, India (Co-Chair)",
      "Khatri Manvi, India (Member)",
      "Shivansh, India (Member)",
      "Chauhan Anjali, India (Member)",
      "Pandey Arti, India (Member)",
    ],
  },
  {
    title: "Discipline Committee",
    members: [
      "Kumar Bhoopendra, India (Chair)",
      "Malik Bhuvnesh, India (Co-Chair)",
      "Naresh Prashant, India (Member)",
      "Tyagi Abhishek, India (Member)",
      "Kumar Bikki, India (Member)",
      "Das Tanmoy, India (Member)",
      "Sachan Rishabh, India (Member)",
      "Kumar Abhishek, India (Member)",
      "Lomror Mukesh, India (Member)",
      "Kumar Chandan, India (Member)",
      "Rai Sachin, India (Member)",
    ],
  },
];

export default function Committee() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [openSection, setOpenSection] = useState(null);

  const slides = [
    { id: 1, backgroundImage: heroimage },
    { id: 2, backgroundImage: heroimage },
    { id: 3, backgroundImage: heroimage },
    { id: 4, backgroundImage: heroimage },
  ];

  useEffect(() => {
    let progressInterval;
    let slideInterval;

    const startProgress = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
      }, 100);

      slideInterval = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        clearInterval(progressInterval);
      }, 5000);
    };

    startProgress();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideInterval);
    };
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section" style={{ width: "100%", height: "100vh", paddingTop: "90px" }}>
        {/* Top White Section */}
        <div
          style={{
            backgroundColor: "white",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
            position: "relative",
          }}
        >
          {/* Left Content */}
          <div style={{ flex: 1, maxWidth: "60%", textAlign: "left" }}>
            <p
              style={{
                color: "#05B8A8",
                fontSize: "1.2rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                margin: "0 0 1rem 0",
                letterSpacing: "1px",
              }}
            >
              IEEE ICICI 2026
            </p>
            <h1
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "3.8rem",
                fontWeight: "bold",
                lineHeight: "1.1",
                margin: "0",
                textAlign: "left",
              }}
            >
              Committee
            </h1>
            <p
              style={{
                color: "#666",
                fontSize: "1.2rem",
                fontFamily: "Poppins",
                fontWeight: "500",
                margin: "1rem 0 0 0",
                letterSpacing: "0.5px",
                textAlign: "left",
              }}
            >
              Our Guiding Lights
            </p>
          </div>

          {/* Right Content */}
          <div
            style={{
              position: "absolute",
              right: 0,
              flex: 1,
              maxWidth: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "4rem",
              paddingLeft: "2rem",
              paddingRight: "5rem",
            }}
          >
            <div
              style={{
                color: "#666",
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                lineHeight: "1.7",
                margin: "0",
                textAlign: "left",
              }}
            >
              <div>Meet the esteemed members</div>
              <div>who make our conference a success.</div>
            </div>
          </div>
        </div>

        {/* Bottom Blue Tech Section - Slider */}
        <div
          style={{
            position: "relative",
            height: "60%",
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            padding: "0 4rem",
            overflow: "hidden",
          }}
        >
          {/* Blue Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(0, 50, 150, 0.9), rgba(0, 100, 200,.8))",
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "white",
              width: "100%",
            }}
          >
            <div style={{ marginBottom: "5rem" }}>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.5rem",
                  fontWeight: "300",
                  margin: "0",
                  lineHeight: "1.3",
                  textAlign: "left",
                }}
              >
                Guiding The Future Of Computing
              </h2>
            </div>
          </div>
          {/* Progress Points/Indicators */}
          <div className="progress-indicators">
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                right: "2rem",
                height: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2rem",
                height: "3px",
                backgroundColor: "white",
                transform: "translateY(-50%)",
                zIndex: 2,
                width: `calc((100% - 4rem) * ${(currentSlide + progress / 100) / slides.length})`,
                transition: progress === 0 ? "none" : "width 0.1s linear",
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                borderRadius: "1px",
              }}
            />
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`progress-point ${isActive ? "active" : ""}`}
                  style={{
                    width: isActive ? "14px" : "10px",
                    height: isActive ? "14px" : "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                    position: "relative",
                    zIndex: 3,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Committee Content */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4rem 2rem",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "2rem",
          }}
          className="responsive-row"
        >
          {/* Left Sidebar */}
          <div
            className="sidebar"
            style={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Important Dates Card */}
            <div
              style={{
                backgroundColor: "#4a5568",
                borderRadius: "15px",
                padding: "1.5rem",
                color: "white",
              }}
            >
              <div
                style={{
                  backgroundColor: "#2d3748",
                  borderRadius: "20px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                IMPORTANT DATES
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  color: "#e2e8f0",
                }}
              >
                <p style={{ margin: "0.5rem 0" }}>Paper Submission: 31st January, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Notification: 15th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Camera Ready: 20th February, 2026</p>
                <p style={{ margin: "0.5rem 0" }}>Conference: 15th-18th February, 2026</p>
              </div>
            </div>
            {/* Conference Secretariat Card */}
            <div
              style={{
                backgroundColor: "#4a5568",
                borderRadius: "15px",
                padding: "1.5rem",
                color: "white",
              }}
            >
              <div
                style={{
                  backgroundColor: "#2d3748",
                  borderRadius: "20px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                CONFERENCE SECRETARIAT
              </div>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  color: "#e2e8f0",
                }}
              >
                <p style={{ margin: "0.5rem 0" }}>KIET Group of Institutions</p>
                <p style={{ margin: "0.5rem 0" }}>Delhi-NCR, Ghaziabad</p>
                <p style={{ margin: "0.5rem 0" }}>Email: icici2026@kiet.edu</p>
                <p style={{ margin: "0.5rem 0" }}>Phone: +91-120-2844000</p>
              </div>
            </div>
          </div>
          {/* Right Content Area */}
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "2rem",
              textAlign: "left",
            }}
          >
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              {committeesData.map((committee, index) => (
                <div key={index} style={{ borderBottom: index === committeesData.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                  <div
                    onClick={() => toggleSection(index)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "1rem 1.5rem",
                      backgroundColor: openSection === index ? "#f7fafc" : "white",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = openSection === index ? '#f7fafc' : 'white'}
                  >
                    <h2
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.2rem",
                        color: "#2d3748",
                        margin: "0",
                        fontWeight: "600",
                      }}
                    >
                      {committee.title}
                    </h2>
                    {openSection === index ? (
                      <FaAngleUp style={{ fontSize: "1.2rem", color: "#4a5568" }} />
                    ) : (
                      <FaAngleDown style={{ fontSize: "1.2rem", color: "#718096" }} />
                    )}
                  </div>
                  <div
                    style={{
                      maxHeight: openSection === index ? `${committee.members.length * 45 + 32}px` : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-in-out",
                      backgroundColor: "#fdfdff",
                    }}
                  >
                    <ul
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "0.95rem",
                        color: "#4a5568",
                        lineHeight: "1.8",
                        padding: "1.5rem 1.5rem 1.5rem 2.5rem",
                        margin: 0,
                      }}
                    >
                      {committee.members.map((member, memberIndex) => (
                        <li key={memberIndex} style={{ marginBottom: '0.25rem' }}>{member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}