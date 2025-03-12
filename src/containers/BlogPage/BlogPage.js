
import React, { useState, useEffect } from 'react';
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import axios from "axios";

export const BlogData = [
  {
    id: 1,
    category: "Study Abroad Guide",
    image: "/static/5-country.jpg",
    title: "Top 5 Countries for Indian Students to Study Abroad in 2025",
    description: "Discover essential steps to kickstart your educational adventure abroad.",
    content: `Studying abroad is a dream for many Indian students, offering a chance to gain world-class education, global exposure, and invaluable life experiences. Choosing the right destination is crucial to making the most of this journey. Here are the top 5 countries for Indian students to consider in 2025, along with insights into what makes each country a fantastic choice:\n\n

 **1. United States: The Land of Opportunities**\n\n
**Why Choose the USA?**\n\n

World-Class Universities: Home to top institutions like MIT, Stanford, and Harvard.
Diverse Courses: From STEM to liberal arts, there's something for everyone.
Post-Study Opportunities: The OPT (Optional Practical Training) program offers work experience post-graduation.
Popular Courses: Computer Science, Engineering, Business Management, Data Science.

**Pro Tip:** Engage in campus activities to build networks and gain cultural exposure.\n\n

**2. Canada: Affordable Quality Education**\n\n
**Why Choose Canada?**\n\n

Affordable Tuition Fees: Compared to the US and UK, education is reasonably priced.
Welcoming Environment: A multicultural society with a large Indian diaspora.
Work While You Study: Students can work part-time during studies and benefit from the Post-Graduation Work Permit (PGWP).
Popular Courses: Information Technology, Healthcare, Hospitality Management, Finance.

**Pro Tip:** Apply early, as Canadian universities have limited intake and competitive admissions.\n\n

**3. United Kingdom: Blending Tradition with Innovation**\n\n
**Why Choose the UK?**\n\n

Prestigious Universities: Oxford, Cambridge, Imperial College, and more.
One-Year Master’s Programs: Fast-track education saves time and money.
Graduate Route Visa: Allows students to stay and work for up to 2 years post-study.
Popular Courses: Business, Law, Arts and Humanities, Science.

**Pro Tip:** Explore scholarships like the Chevening and Commonwealth scholarships to ease financial burden.\n\n

**4. Australia: High Quality of Life and Education**\n\n
**Why Choose Australia?**\n\n

Globally Recognized Institutions: University of Melbourne, ANU, University of Sydney.
Student-Friendly Policies: Part-time work opportunities and Temporary Graduate Visa (subclass 485).
Vibrant Student Life: A perfect balance of academics and leisure.
Popular Courses: Engineering, Business, Medicine, Environmental Sciences.

**Pro Tip:** Take advantage of Australia's picturesque landscapes and travel during semester breaks!\n\n



**5. Germany: Education with a Technological Edge**\n\n
**Why Choose Germany?**\n\n

Low or No Tuition Fees: Many public universities offer free education to international students.
Strong Focus on Research and Development: Ideal for engineering and technology students.
Job Market: High demand for skilled professionals, especially in engineering and IT.
Popular Courses: Mechanical Engineering, Automotive, Computer Science, Natural Sciences.

**Pro Tip:** Learning basic German can significantly enhance your everyday experiences and job prospects.`,
    images: ["/assets/static/image2-1.jpg", "/assets/static/image2-2.jpg"]
  },
  {
    id: 2,
    category: "Study Abroad Guide",
    image: "/static/accom.jpg",
    title: "5 Things to Consider When Choosing Accommodation Abroad",
    description: "Learn how to adapt and make friends in a new country.",
    content: `When moving to a new country for studies or work, choosing the right accommodation is a critical decision that can significantly influence your overall experience. Your living environment affects not only your comfort and convenience but also how quickly you adapt to your new surroundings. Here are five essential factors to consider when selecting accommodation abroad:\n\n

**1. Location, Location, Location! 🌍**\n
The location of your accommodation plays a significant role in your daily life. Consider proximity to your university, workplace, public transportation, grocery stores, and other essential services. A centrally located accommodation might be more expensive, but it can save you time and transportation costs. Additionally, living in a safe and vibrant neighborhood can help you feel more at home.

**2. Budget and Affordability 💰**\n
Setting a budget before searching for accommodation is crucial. Apart from rent, account for additional costs such as utilities, internet, and maintenance fees. Make sure to balance affordability with comfort and safety. If you're on a tight budget, shared housing or student dormitories could be more economical options.

**3. Facilities and Amenities 🛋️**\n
Check if the accommodation offers amenities like Wi-Fi, laundry facilities, a fully equipped kitchen, and furnished rooms. Access to common areas, study rooms, or gyms can enhance your living experience. If you are studying, having a quiet space to work can make a big difference.

**4. House Rules and Contracts 📜**\n
Before signing any contract, thoroughly read the terms and conditions. Understand the house rules, deposit requirements, and the process for lease termination. Some accommodations have restrictions on guests, pets, or noise levels. Clarifying these details upfront will help avoid potential conflicts later.

**5. Opportunities for Socializing 🤝**\n
Moving to a new country can feel isolating at first. Choosing accommodation with community events or shared spaces can provide opportunities to meet new people and build friendships. Engaging in community activities can help you adapt to your new environment faster and make your stay more enjoyable.`,
    images: ["/assets/static/image2-2.jpg", "/assets/static/image2-3.jpg"]
  },
  {
    id: 3,
    category: "Study Abroad Guide",
    image: "/static/study-ab.jpg",
    title: "How to Make the Most of Your Study Abroad Experience",
    description: "Maximize your time studying abroad with practical tips and insights.",
    content: `🌏 How to Make the Most of Your Study Abroad Experience
Studying abroad is a life-changing adventure filled with opportunities to learn, grow, and explore. Whether you're pursuing academics or diving into a new culture, making the most of your time abroad can shape your future in remarkable ways. Here are some practical tips to help you maximize your study abroad experience:\n\n

**📚 1. Embrace the Academic Challenge**\n
Studying abroad often means adjusting to a different education system. Attend classes regularly, engage with professors, and participate in group discussions. Take advantage of academic resources such as libraries, study groups, and workshops. Balancing studies with exploration will help you gain both knowledge and unforgettable experiences.

**🌐 2. Immerse Yourself in the Local Culture**\n
One of the best aspects of studying abroad is experiencing a new culture firsthand. Try local cuisines, celebrate cultural festivals, and learn the language. Engaging with locals can provide deeper insights into traditions and customs, making you feel more connected to your new environment.

**🤝 3. Build a Global Network**\n
Make friends from different backgrounds. Join clubs, attend events, and participate in social activities. Not only will this help you make lifelong friendships, but it will also broaden your perspective and enhance your adaptability to diverse environments.

**✈️ 4. Travel and Explore**\n
Make time to explore your host country (and neighboring countries if possible!). Traveling on weekends or during holidays is a great way to discover new places and unwind from academic pressures. Remember to plan your trips wisely to balance studies and adventures.

**💪 5. Step Out of Your Comfort Zone**\n
Push yourself to try new things. Whether it’s taking up a new hobby, tasting unfamiliar foods, or engaging in volunteer work, stepping out of your comfort zone can lead to personal growth and unforgettable memories.`,
    images: ["/assets/static/image2-3.jpg", "/assets/static/image2-4.jpg"]
  },

  // Category: Visa Information
  {
    id: 4,
    category: "Visa Information",
    image: "/static/uk-visa.jpg",
    title: "How to Apply for a UK Student Visa: A Step-by-Step Guide",
    description: "Navigate the UK student visa process with ease using our step-by-step guide.",
    content: `Planning to study in the UK? One of the crucial steps in your journey is securing a UK Student Visa. The process might seem daunting, but with this detailed guide, you'll be ready to navigate the application smoothly.

**🎯 Step 1: Determine the Right Visa Type**\n\n
For full-time courses in the UK, most international students need a Student Visa (formerly Tier 4). This visa is suitable if:\n\n

-Your course duration is more than 6 months.\n\n
-You are 16 years or older.\n\n
-For short courses (6 months or less), a Standard Visitor Visa might be sufficient.\n\n

**📑 Step 2: Secure Your Confirmation of Acceptance for Studies (CAS)**\n\n
Before applying for a visa, you must receive a CAS letter from your university.\n\n

-What is a CAS? An electronic document with a unique reference number provided by your university.\n\n
-What It Includes: Your personal details, course information, and sponsor license number of the institution.\n\n
**Pro Tip:** Double-check all the details on your CAS to avoid visa application delays.\n\n

**💳 Step 3: Prepare Financial Proof**\n\n
The UK government requires you to prove you have enough funds to support yourself during your studies.\n\n

-Tuition Fees: The amount needed depends on your course fees (deduct any already paid fees).\n\n
-Living Costs: Inside London: £1,334 per month (up to 9 months).\n\n
-Outside London: £1,023 per month (up to 9 months).\n\n
-Financial Documents: Bank statements, scholarship letters, or proof of student loans.\n\n

**📄 Step 4: Gather Required Documents**\n\n
Prepare the following documents for your application:\n\n

-Valid Passport: With at least one blank page.\n\n
-CAS Letter: Provided by your university.\n\n
-Financial Proof: As mentioned above.\n\n
-Academic Certificates: To meet the course requirements.\n\n
-Proof of English Proficiency: IELTS, TOEFL, or equivalent, if applicable.\n\n
**💻 Step 5: Complete the Online Visa Application**\n\n
-Visit the Official Website: UK Government Visas and Immigration.\n\n
-Fill in Details: Provide your personal information, course details, and CAS number.\n\n
-Pay the Application Fee\n\n
-Student Visa Fee\n\n
-Healthcare Surcharge: Approximately £470 per year of study.\n\n
**📅 Step 6: Book and Attend Your Biometrics Appointment**\n\n
-Where: At a visa application center in your country.\n\n
-What to Expect: Fingerprints, a photograph, and submission of supporting documents.\n\n
**Pro Tip:** Carry both original and photocopies of all documents to avoid issues.\n\n

**🕒 Step 7: Wait for Your Visa Decision**\n\n
-Processing Time: Generally 3 weeks, but it may vary by country.\n\n
-Track Your Application: Using the reference number provided during submission.\n\n
**✈️ Step 8: Prepare for Your Arrival in the UK**\n\n
-Carry Important Documents: CAS, passport, accommodation details, and any correspondence with your university.\n\n
-At Immigration: Answer questions clearly and present documents if requested.
\n\n
**🏠 Finding Accommodation Made Easy with StudyNest!**\n\n
**At StudyNest, we make your transition to the UK seamless by helping you find the perfect accommodation. Whether you prefer university housing or private rentals, we’ve got options to suit your needs and budget.**\n\n

**💡 Bonus Tips:**\n\n
Apply Early: To avoid last-minute stress.\n\n
Keep Copies of All Documents: Digital and physical.\n\n
Join Student Communities: To gain insights and support before you arrive.`,
    images: ["/assets/static/image3-1.jpg", "/assets/static/image3-2.jpg"]
  },
  {
    id: 5,
    category: "Visa Information",
    image: "/static/interview-ques.jpg",
    title: "Top 5 Visa Interview Questions and How to Answer Them",
    description: "Ace your visa interview with confidence by preparing for these common questions.",
    content: `Visa interviews can be nerve-wracking, but with the right preparation, you can breeze through them with confidence. Whether you're applying for a student visa, work visa, or tourist visa, certain questions are almost universally asked. Here are the top 5 visa interview questions and tips on how to answer them effectively!\n\n

**1. 🧑‍🎓 "Why do you want to travel to [Destination Country]?"**\n\n
**Purpose of the Question:**
Visa officers want to ensure your intentions align with your visa category (e.g., study, work, tourism).

**How to Answer:** Be Specific: Clearly state your purpose, whether it’s for education, work, tourism, or visiting family.
Avoid Vague Statements: Instead of saying "I want to explore," say, "I am visiting [Country] to pursue my Master’s in Computer Science at [University]."\n\n
**Example Answer:** "I have been accepted into the Master’s program at [University] in [Country]. My aim is to gain advanced knowledge in computer science, particularly in artificial intelligence, which will significantly contribute to my career goals back in my home country."\n\n

**2. 🎓 "Why did you choose this university/company/country?"**\n\n
**Purpose of the Question:** To assess whether you've done thorough research and have legitimate reasons for your choice.
\n\n
**How to Answer:** Highlight Specific Reasons: Mention unique features of the university, company, or country.
Connect It to Your Goals: Explain how this choice aligns with your career or academic aspirations.\n\n
**Example Answer:** "I chose [University] because of its strong curriculum in data science and its partnerships with leading tech companies. Additionally, [Country] offers exposure to a diverse culture and opportunities to participate in tech conferences and internships, which will enrich my learning experience."\n\n

**3. 💰 "How will you fund your stay?"**\n\n
**Purpose of the Question:** The visa officer needs to know you have sufficient financial support and won’t face hardships abroad.\n\n

**How to Answer:** Provide Clear Financial Proof: Mention scholarships, savings, or sponsorships. 
Show Financial Stability: Avoid appearing as if you might need to work illegally to support yourself.\n\n
**Example Answer:** "I have secured a scholarship that covers 50% of my tuition fees. Additionally, my parents are sponsoring me, and I have provided bank statements showing sufficient funds to cover my living expenses for the duration of my studies."\n\n

**4. 🏠 "Do you plan to return to your home country after your visa expires?"**\n\n
**Purpose of the Question:** To verify that you do not intend to overstay your visa or immigrate illegally.\n\n

**How to Answer:** Emphasize Ties to Your Home Country: Such as family, job prospects, or property.
State Your Future Plans: Whether it’s continuing studies, a job, or a family commitment.\n\n
**Example Answer:** "Yes, I plan to return to my home country after completing my studies. I have strong family ties and a job offer from [Company] where I can apply my new skills and contribute to local projects."\n\n

**5. 🛫 "Have you traveled abroad before?"**\n\n
**Purpose of the Question:** To assess your travel history and likelihood of complying with visa regulations.\n\n

**How to Answer:** Be Honest: Whether your answer is yes or no.
Show Responsibility: Highlight positive experiences and adherence to visa rules in the past.\n\n
**Example Answer:** "Yes, I traveled to [Country] in 2022 for a summer school program. I returned before my visa expired and thoroughly enjoyed the learning experience. This positive exposure to international education has motivated me to pursue a full degree abroad."\n\n

**🚀 Bonus Tips for a Successful Visa Interview:**\n\n
-Dress Professionally: First impressions matter.\n\n
-Stay Calm and Confident: Maintain eye contact and speak clearly.\n\n
-Bring Supporting Documents: Financial proof, acceptance letters, travel itineraries, etc.\n\n
-Be Honest: If you don’t know an answer, it’s okay to admit it—avoid making up information.\n\n
**🏠 How StudyNest Can Help You:**
**When you’re preparing to study or work abroad, finding the right accommodation is crucial. At StudyNest, we simplify this process by offering tailored housing options in popular destinations like the UK, US, Canada, and more. Let us make your transition smooth and stress-free!**`,
    images: ["/assets/static/image3-2.jpg", "/assets/static/image3-3.jpg"]
  },

  // Category: Accommodation Tips
  {
    id: 6,
    category: "Accommodation Tips",
    image: "/static/right-acc.jpg",
    title: "Finding the Right Accommodation: A Student's Guide",
    description: "Tips and tricks for securing a comfortable and affordable place to stay.",
    content: `When embarking on your study abroad journey, finding the right accommodation is a top priority. Your living situation plays a significant role in shaping your overall experience, affecting everything from your academic focus to your social life. With so many options available, it’s essential to approach this decision strategically. Here's a comprehensive guide to help you secure a comfortable and affordable place to stay!\n\n

**1. 🕵️ Start Your Search Early**\n\n
**Why It Matters:**
The best accommodations often get booked quickly, especially in popular student cities. Starting your search early increases your chances of finding a place that meets your budget and preferences.

**Pro Tip:**

-University Housing Portals: Many universities offer on-campus housing or partnerships with nearby residences.\n\n
-Online Platforms: Websites like StudyNest, UniAcco, and HousingAnywhere provide verified listings tailored for students.\n\n
-Local Connections: Join student groups on social media to find leads on available rooms or shared apartments.\n\n
**2. 💰 Budget Wisely**\n\n
**Why It Matters:** Rent is often the biggest expense for students. A clear budget helps prevent financial stress and ensures you have funds for other essentials.\n\n

**Consider These Costs:**\n\n
-Rent: Aim for a balance between affordability and comfort.\n\n
-Utilities: Check if bills for water, electricity, and Wi-Fi are included in the rent.\n\n
-Transportation: Living farther from campus may lower rent but increase commuting costs.\n\n
-Security Deposit: Be prepared for an upfront deposit, usually equivalent to 1-2 months' rent.\n\n
**3. 📍 Location, Location, Location!**\n\n
**Why It Matters:** A good location enhances convenience, safety, and social opportunities.\n\n

**What to Look For:**

-Proximity to Campus: Ideally, within walking distance or a short commute.\n\n
-Transport Links: Check for nearby bus stops, metro stations, or bike lanes.\n\n
-Amenities: Grocery stores, pharmacies, cafes, and libraries should be easily accessible.\n\n
-Safety: Research the neighborhood’s safety record and visit at different times of the day if possible.\n\n
**4. 🛏️ Know Your Accommodation Options**\n\n
**University Halls:**\n\n

-Pros: Close to campus, inclusive of bills, good for meeting other students.\n\n
-Cons: May have stricter rules and less privacy.\n\n
**Private Rentals:**\n\n

-Pros: More independence and often more space.\n\n
-Cons: Bills and maintenance may not be included, adding complexity.\n\n
**Homestays:**\n\n

-Pros: Experience local culture and possibly included meals.\n\n
-Cons: Less freedom compared to renting a private space.\n\n
**Shared Apartments:**

-Pros: Splitting costs with roommates makes this option more affordable.\n\n
-Cons: Requires adaptability and good communication skills.\n\n
**5. 🔍 Inspect Before You Commit**\n\n
**Why It Matters:** An in-person or virtual tour can reveal potential issues not visible in photos.

**Check For:**\n\n
-Condition of Furniture and Appliances: Ensure they are in good working order.\n\n
-Security Measures: Functioning locks, smoke detectors, and secure entryways.\n\n
-Internet Connectivity: Essential for studying and staying connected.\n\n
**6. 📑 Understand the Lease Agreement**\n\n
**Why It Matters:** A lease is a legally binding document. Make sure you understand all the terms before signing.\n\n

**Key Points to Clarify:**\n\n

-Rent Payment Schedule: Monthly or quarterly, and accepted payment methods.\n\n
-Maintenance Responsibilities: Who handles repairs and maintenance costs?\n\n
-Termination Policies: Understand the process and penalties for ending the lease early.\n\n
**7. 🌟 Use StudyNest for a Hassle-Free Experience**\n\n
**At StudyNest, we specialize in helping international students find safe, affordable, and convenient accommodations. Our platform offers a wide range of verified listings and personalized support to make your transition smooth and stress-free.**\n\n

**🎯 Final Tips for Success:**\n\n
-Read Reviews: Previous tenants' experiences can provide valuable insights.\n\n
-Ask Questions: Don’t hesitate to ask the landlord or agent about any uncertainties.\n\n
-Stay Organized: Keep all documents, receipts, and communication for reference.\n\n
**Finding the right accommodation doesn’t have to be overwhelming. By following these steps and using trusted resources like StudyNest, you’ll set yourself up for a comfortable and enjoyable stay while studying abroad. Ready to find your new home? Start your search with us today!** 😊`,
    images: ["/assets/static/image4-1.jpg", "/assets/static/image4-2.jpg"]
  },
//   {
//     id: 7,
//     category: "Accommodation Tips",
//     image: "/assets/static/image4-2.jpg",
//     title: "How to Save Money on Student Accommodation Abroad",
//     description: "Learn smart strategies to reduce accommodation costs while studying abroad.",
//     content: `*Introduction:*
// Studying abroad can be expensive, but with *smart planning, you can **cut accommodation costs*.

// *Content:*
// - *Share with Roommates:* Split rent and utility bills.
// - *Look for Discounts:* Many student housing options offer discounts for early bookings.
// - *Choose Student Halls:* Often cheaper than private rentals.
// - *Stay Flexible:* Short-term rentals can save money if your plans change.
// - *Negotiate:* It never hurts to ask for a better deal.`,
//     images: ["/assets/static/image4-2.jpg", "/assets/static/image4-3.jpg"]
//   }
];

export const categories = ["All", "Study Abroad Guide", "Visa Information", "Accommodation Tips"];

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/blogs`);
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => 
    (selectedCategory === "All" || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return <div className="p-8 text-center">Loading blogs...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Input 
        placeholder="Search articles/topics" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="bg-yellow-100 p-6 rounded-lg mb-6">
        <p className="text-gray-700">
          <b>"The journey of a thousand miles begins with a single step." - Lao Tzu</b>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Filter by Category</h3>
        <div>
          {categories.map((category) => (
            <Button
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              selected={selectedCategory === category}
            />
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">{selectedCategory}</h3>
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog._id}
              id={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;