// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '../components/ui/card';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { useNavigate } from 'react-router-dom';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'How to Find the Best Student Accommodation in London',
//     category: 'Accommodation Tips',
//     description: 'A comprehensive guide to help international students find safe and budget-friendly housing in London.',
//     image: 'https://via.placeholder.com/400x200',
//   },
//   {
//     id: 2,
//     title: 'Top 10 Universities in London: Where to Stay Near Campus?',
//     category: 'Study Abroad Guides',
//     description: 'Explore the best accommodation options near Londons top universities.' ,
//     image: 'https://via.placeholder.com/400x200'
//   },
//   {
//     id: 3,
//     title: 'How to Budget Your Expenses While Studying Abroad',
//     category: 'Work & Study Balance',
//     description: 'Tips on managing your finances while living in a new country.',
//     image: 'https://via.placeholder.com/400x200',
//   },
// ];

// const BlogPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPosts, setFilteredPosts] = useState(blogPosts);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setFilteredPosts(
//       blogPosts.filter((post) =>
//         post.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">StudyNest Blog – Your Guide to Living Abroad</h1>
//       <p className="mb-6">Get tips on accommodation, student life, budgeting, and more while studying or working abroad.</p>

//       <Input
//         type="text"
//         placeholder="Search blog posts..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="mb-6 w-full"
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredPosts.map((post) => (
//           <Card key={post.id} className="rounded-2xl shadow-lg">
//             <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-2xl" />
//             <CardContent>
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               <p className="text-sm text-gray-600 mb-4">{post.description}</p>
//               <Button onClick={() => navigate(/blog/${post.id})}>
//                 Read More
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;







// import React, { useState } from "react";
// import Input from "../components/ui/Input";
// import Button from "../components/ui/Button";
// import Card from "../components/ui/Card";
// import {useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { blogData } from "../blogData";

// export const blogData = [
//   {
//     id: 1,
//     category: "Study Abroad Guide",
//     image: "https://example.com/image1.jpg",
//     title: "Getting Started with Your Study Abroad Journey",
//     description: "Discover essential steps to kickstart your educational adventure abroad.",
//     content: 'Studying abroad can be a life-changing experience. Here’s a detailed guide on how to get started with your journey...',
//     images: [
//       "https://example.com/image1.jpg",
//       "https://example.com/image1-detail.jpg"
//     ]
//   },
//   {
//     id: 2,
//     category: "Study Abroad Guide",
//     image: "https://example.com/image2.jpg",
//     title: "Finding the Right Accommodation",
//     description: "Tips and tricks for securing a comfortable and affordable place to stay.",
//     content: 'Finding accommodation is crucial. Here are some practical tips to make your stay comfortable and budget-friendly...',
//     images: [
//       "https://example.com/image2.jpg",
//       "https://example.com/image2-detail.jpg"
//     ]
//   },
//   {
//     id: 3,
//     category: "Study Abroad Guide",
//     image: "https://example.com/image3.jpg",
//     title: "Cultural Adjustments and Socializing",
//     description: "Learn how to adapt and make friends in a new country.",
//     content: "Adjusting to a new culture can be challenging. Here are some ways to socialize and make your stay enjoyable...",
//     images: [
//       "https://example.com/image3.jpg",
//       "https://example.com/image3-detail.jpg"
//     ]
//   },

//   {
//     id: 4,
//     category: "Study Abroad Guide",
//     image: "https://example.com/image4.jpg",
//     title: "Top Scholarships for International Students",
//     description: "A guide to scholarships and funding options for students studying abroad.",
//     content: "Finding the right scholarship can make studying abroad more affordable. Here are the best options available...",
//     images: [
//       "https://example.com/image4.jpg",
//       "https://example.com/image4-detail.jpg"
//     ]
//   },

      
//   {
//     id: 5,
//     category: "Study Abroad Guide",
//     image: "https://example.com/image5.jpg",
//     title: "Visa Application Process Simplified",
//     description: "Step-by-step guide on obtaining a student visa for different countries.",
//     content: "Applying for a student visa can be overwhelming. Follow these steps to ensure a smooth application process...",
//     images: [
//       "https://example.com/image5.jpg",
//       "https://example.com/image5-detail.jpg"
//     ]
//   }
// ];


// const categories = ["All", "Study Abroad Guide", "Visa Information", "Accommodation Tips"];

// const BlogPage = () => {
//   const navigate = useNavigate();
  
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBlogs = blogData.filter((blog) => 
//     (selectedCategory === "All" || blog.category === selectedCategory) &&
//     (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <Input 
//         placeholder="Search articles/topics" 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />

//       <div className="bg-yellow-100 p-6 rounded-lg mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Inspirational Thought</h2>
//         <p className="text-gray-700">
//           "The journey of a thousand miles begins with a single step." - Lao Tzu
//         </p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Filter by Category</h3>
//         <div>
//           {categories.map((category) => (
//             <Button
//               key={category}
//               label={category}
//               onClick={() => setSelectedCategory(category)}
//               selected={selectedCategory === category}
//             />
//           ))}
//         </div>
//       </div>

//       <h3 className="text-2xl font-semibold mb-4">{selectedCategory}</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredBlogs.map((blog, index) => (
//           <Card
//             key={index}
//             id={blog.id}
//             image={blog.image}
//             title={blog.title}
//             description={blog.description}
//             onClick={() => navigate(`/Blogs/${blog.id}`)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;



// import React, { useState } from "react";
// import Input from "../../components/ui/Input";
// import Button from "../../components/ui/Button";
// import Card from "../../components/ui/Card";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { blogData } from "./blogData";  // ✅ Import blogData, do not redefine it.

// const categories = ["All", "Study Abroad Guide", "Visa Information", "Accommodation Tips"];

// const BlogPage = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBlogs = blogData.filter((blog) => 
//     (selectedCategory === "All" || blog.category === selectedCategory) &&
//     (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* ✅ Search Input */}
//       <Input 
//         placeholder="Search articles/topics" 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />

//       {/* ✅ Inspirational Thought */}
//       <div className="bg-yellow-100 p-6 rounded-lg mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Inspirational Thought</h2>
//         <p className="text-gray-700">
//           "The journey of a thousand miles begins with a single step." - Lao Tzu
//         </p>
//       </div>

//       {/* ✅ Category Filter */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Filter by Category</h3>
//         <div>
//           {categories.map((category) => (
//             <Button
//               key={category}
//               label={category}
//               onClick={() => setSelectedCategory(category)}
//               selected={selectedCategory === category}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ✅ Blog Posts Grid */}
//       <h3 className="text-2xl font-semibold mb-4">{selectedCategory}</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredBlogs.map((blog) => (
//           <div key={blog.id} className="border rounded-lg p-4 shadow-md">
//             <Link to={`/blog/${blog.id}`} className="block">
//               {/* ✅ Correct Image Usage */}
//               <img 
//                 src={blog.image}  // ✅ Directly use blog.image (no process.env.PUBLIC_URL)
//                 alt={blog.title} 
//                 className="w-full h-48 object-cover rounded-lg" 
//               />
//               <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
//               <p className="text-gray-600">{blog.description}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export const blogData = [
  {
    id: 1,
    category: "Study Abroad Guide",
    //image: "/assets/static/image2-1.jpg",
    image:"/images/study-abroad-guide.jpeg",
    title: "Top 5 Countries for Indian Students to Study Abroad in 2025",
    description: "Discover essential steps to kickstart your educational adventure abroad.",
    content: `Studying abroad is a dream for many Indian students, offering a chance to gain world-class education, global exposure, and invaluable life experiences. Choosing the right destination is crucial to making the most of this journey. Here are the top 5 countries for Indian students to consider in 2025, along with insights into what makes each country a fantastic choice:\n\n

 *1. United States: The Land of Opportunities*\n\n
*Why Choose the USA?*

World-Class Universities: Home to top institutions like MIT, Stanford, and Harvard.
Diverse Courses: From STEM to liberal arts, there's something for everyone.
Post-Study Opportunities: The OPT (Optional Practical Training) program offers work experience post-graduation.
Popular Courses: Computer Science, Engineering, Business Management, Data Science.

*Pro Tip:* Engage in campus activities to build networks and gain cultural exposure.

*2. Canada: Affordable Quality Education*
*Why Choose Canada?*

Affordable Tuition Fees: Compared to the US and UK, education is reasonably priced.
Welcoming Environment: A multicultural society with a large Indian diaspora.
Work While You Study: Students can work part-time during studies and benefit from the Post-Graduation Work Permit (PGWP).
Popular Courses: Information Technology, Healthcare, Hospitality Management, Finance.

*Pro Tip:* Apply early, as Canadian universities have limited intake and competitive admissions.

*3. United Kingdom: Blending Tradition with Innovation*
*Why Choose the UK?*

Prestigious Universities: Oxford, Cambridge, Imperial College, and more.
One-Year Master’s Programs: Fast-track education saves time and money.
Graduate Route Visa: Allows students to stay and work for up to 2 years post-study.
Popular Courses: Business, Law, Arts and Humanities, Science.

*Pro Tip:* Explore scholarships like the Chevening and Commonwealth scholarships to ease financial burden.

*4. Australia: High Quality of Life and Education*
*Why Choose Australia?*

Globally Recognized Institutions: University of Melbourne, ANU, University of Sydney.
Student-Friendly Policies: Part-time work opportunities and Temporary Graduate Visa (subclass 485).
Vibrant Student Life: A perfect balance of academics and leisure.
Popular Courses: Engineering, Business, Medicine, Environmental Sciences.

*Pro Tip:* Take advantage of Australia's picturesque landscapes and travel during semester breaks!



*5. Germany: Education with a Technological Edge*
*Why Choose Germany?*

Low or No Tuition Fees: Many public universities offer free education to international students.
Strong Focus on Research and Development: Ideal for engineering and technology students.
Job Market: High demand for skilled professionals, especially in engineering and IT.
Popular Courses: Mechanical Engineering, Automotive, Computer Science, Natural Sciences.

**Pro Tip: **Learning basic German can significantly enhance your everyday experiences and job prospects.`,
    images: ["/assets/static/image2-1.jpg", "/assets/static/image2-2.jpg"]
  },
  {
    id: 2,
    category: "Study Abroad Guide",
    image:  "/images/accommodation.jpeg",
    title: "5 Things to Consider When Choosing Accommodation Abroad",
    description: "Learn how to adapt and make friends in a new country.",
    content: `When moving to a new country for studies or work, choosing the right accommodation is a critical decision that can significantly influence your overall experience. Your living environment affects not only your comfort and convenience but also how quickly you adapt to your new surroundings. Here are five essential factors to consider when selecting accommodation abroad:\n\n

*1. Location, Location, Location! 🌍*\n
The location of your accommodation plays a significant role in your daily life. Consider proximity to your university, workplace, public transportation, grocery stores, and other essential services. A centrally located accommodation might be more expensive, but it can save you time and transportation costs. Additionally, living in a safe and vibrant neighborhood can help you feel more at home.

*2. Budget and Affordability 💰*\n
Setting a budget before searching for accommodation is crucial. Apart from rent, account for additional costs such as utilities, internet, and maintenance fees. Make sure to balance affordability with comfort and safety. If you're on a tight budget, shared housing or student dormitories could be more economical options.

*3. Facilities and Amenities 🛋*\n
Check if the accommodation offers amenities like Wi-Fi, laundry facilities, a fully equipped kitchen, and furnished rooms. Access to common areas, study rooms, or gyms can enhance your living experience. If you are studying, having a quiet space to work can make a big difference.

*4. House Rules and Contracts 📜*\n
Before signing any contract, thoroughly read the terms and conditions. Understand the house rules, deposit requirements, and the process for lease termination. Some accommodations have restrictions on guests, pets, or noise levels. Clarifying these details upfront will help avoid potential conflicts later.

*5. Opportunities for Socializing 🤝*\n
Moving to a new country can feel isolating at first. Choosing accommodation with community events or shared spaces can provide opportunities to meet new people and build friendships. Engaging in community activities can help you adapt to your new environment faster and make your stay more enjoyable.`,
    images: ["/assets/static/image2-2.jpg", "/assets/static/image2-3.jpg"]
  },
  {
    id: 3,
    category: "Study Abroad Guide",
    //image: "/assets/static/image2-3.jpg",
    image: "images/mostexperience.jpeg",
    title: "How to Make the Most of Your Study Abroad Experience",
    description: "Maximize your time studying abroad with practical tips and insights.",
    content: `🌏 How to Make the Most of Your Study Abroad Experience
Studying abroad is a life-changing adventure filled with opportunities to learn, grow, and explore. Whether you're pursuing academics or diving into a new culture, making the most of your time abroad can shape your future in remarkable ways. Here are some practical tips to help you maximize your study abroad experience:\n\n

*📚 1. Embrace the Academic Challenge*\n
Studying abroad often means adjusting to a different education system. Attend classes regularly, engage with professors, and participate in group discussions. Take advantage of academic resources such as libraries, study groups, and workshops. Balancing studies with exploration will help you gain both knowledge and unforgettable experiences.

*🌐 2. Immerse Yourself in the Local Culture*\n
One of the best aspects of studying abroad is experiencing a new culture firsthand. Try local cuisines, celebrate cultural festivals, and learn the language. Engaging with locals can provide deeper insights into traditions and customs, making you feel more connected to your new environment.

*🤝 3. Build a Global Network*\n
Make friends from different backgrounds. Join clubs, attend events, and participate in social activities. Not only will this help you make lifelong friendships, but it will also broaden your perspective and enhance your adaptability to diverse environments.

*✈ 4. Travel and Explore*\n
Make time to explore your host country (and neighboring countries if possible!). Traveling on weekends or during holidays is a great way to discover new places and unwind from academic pressures. Remember to plan your trips wisely to balance studies and adventures.

*💪 5. Step Out of Your Comfort Zone*\n
Push yourself to try new things. Whether it’s taking up a new hobby, tasting unfamiliar foods, or engaging in volunteer work, stepping out of your comfort zone can lead to personal growth and unforgettable memories.`,
    images: ["/assets/static/image2-3.jpg", "/assets/static/image2-4.jpg"]
  },

  // Category: Visa Information
  {
    id: 4,
    category: "Visa Information",
    image: "images/uk_visa.jpeg",
    title: "How to Apply for a UK Student Visa: A Step-by-Step Guide",
    description: "Navigate the UK student visa process with ease using our step-by-step guide.",
    content: `Planning to study in the UK? One of the crucial steps in your journey is securing a UK Student Visa. The process might seem daunting, but with this detailed guide, you'll be ready to navigate the application smoothly.

*🎯 Step 1: Determine the Right Visa Type*
For full-time courses in the UK, most international students need a Student Visa (formerly Tier 4). This visa is suitable if:

Your course duration is more than 6 months.
You are 16 years or older.
For short courses (6 months or less), a Standard Visitor Visa might be sufficient.\n\n

*📑 Step 2: Secure Your Confirmation of Acceptance for Studies (CAS)*
Before applying for a visa, you must receive a CAS letter from your university.

What is a CAS? An electronic document with a unique reference number provided by your university.
What It Includes: Your personal details, course information, and sponsor license number of the institution.\n\n
*Pro Tip:* Double-check all the details on your CAS to avoid visa application delays.\n\n

*💳 Step 3: Prepare Financial Proof*
The UK government requires you to prove you have enough funds to support yourself during your studies.

Tuition Fees: The amount needed depends on your course fees (deduct any already paid fees).
Living Costs:
Inside London: £1,334 per month (up to 9 months).
Outside London: £1,023 per month (up to 9 months).
Financial Documents: Bank statements, scholarship letters, or proof of student loans.\n\n

*📄 Step 4: Gather Required Documents*
Prepare the following documents for your application:

Valid Passport: With at least one blank page.
CAS Letter: Provided by your university.
Financial Proof: As mentioned above.
Tuberculosis Test Results: If required for your country.
Academic Certificates: To meet the course requirements.
Proof of English Proficiency: IELTS, TOEFL, or equivalent, if applicable.\n\n
*💻 Step 5: Complete the Online Visa Application*
Visit the Official Website: UK Government Visas and Immigration.
Fill in Details: Provide your personal information, course details, and CAS number.
Pay the Application Fee:
Student Visa Fee: £490.
Healthcare Surcharge: Approximately £470 per year of study.\n\n
*📅 Step 6: Book and Attend Your Biometrics Appointment*
Where: At a visa application center in your country.
What to Expect: Fingerprints, a photograph, and submission of supporting documents.
Pro Tip: Carry both original and photocopies of all documents to avoid issues.\n\n

*🕒 Step 7: Wait for Your Visa Decision*
Processing Time: Generally 3 weeks, but it may vary by country.
Track Your Application: Using the reference number provided during submission.\n\n
*✈ Step 8: Prepare for Your Arrival in the UK*
Carry Important Documents: CAS, passport, accommodation details, and any correspondence with your university.
At Immigration: Answer questions clearly and present documents if requested.
\n\n
*🏠 Finding Accommodation Made Easy with StudyNest!*\n\n
*At StudyNest, we make your transition to the UK seamless by helping you find the perfect accommodation. Whether you prefer university housing or private rentals, we’ve got options to suit your needs and budget.*\n\n

*💡 Bonus Tips:*\n\n
Apply Early: To avoid last-minute stress.
Keep Copies of All Documents: Digital and physical.
Join Student Communities: To gain insights and support before you arrive.`,
    images: ["/assets/static/image3-1.jpg", "/assets/static/image3-2.jpg"]
  },
  {
    id: 5,
    category: "Visa Information",
    image: "images/visinterview.jpeg",
    title: "Top 5 Visa Interview Questions and How to Answer Them",
    description: "Ace your visa interview with confidence by preparing for these common questions.",
    content: `*Introduction:*
Visa interviews can be intimidating, but with the **right preparation, you can handle them with confidence.

Content:
- Why do you want to study in this country?
- How did you choose this university?
- What are your career plans after graduation?
- How will you fund your studies?
- *Do you plan to return to your home country?*`,
    images: ["/assets/static/image3-2.jpg", "/assets/static/image3-3.jpg"]
  },

  // Category: Accommodation Tips
  {
    id: 6,
    category: "Accommodation Tips",
    image: "images/rightcacco.jpeg",
    title: "Finding the Right Accommodation: A Student's Guide",
    description: "Tips and tricks for securing a comfortable and affordable place to stay.",
    content: `*Introduction:*
Finding accommodation is crucial. Here are some practical tips to make your stay comfortable and budget-friendly.

Content*:*
- Research Early: The best options get booked quickly.
- Set a Budget: Include rent, utilities, and other expenses.
- Visit the Property: If possible, visit or take a virtual tour.
- Consider Safety: Look for security features like CCTV, secure entrances, etc.
- Know Your Rights: Understand the tenancy agreement and local rental laws.`,
    images: ["/assets/static/image4-1.jpg", "/assets/static/image4-2.jpg"]
  },
  {
    id: 7,
    category: "Accommodation Tips",
    image: "images/savemoney.jpeg",
    title: "How to Save Money on Student Accommodation Abroad",
    description: "Learn smart strategies to reduce accommodation costs while studying abroad.",
    content: `*Introduction:*
Studying abroad can be expensive, but with smart planning, you can **cut accommodation costs.

Content:
- Share with Roommates: Split rent and utility bills.
- Look for Discounts: Many student housing options offer discounts for early bookings.
- Choose Student Halls: Often cheaper than private rentals.
- Stay Flexible: Short-term rentals can save money if your plans change.
- Negotiate: It never hurts to ask for a better deal.`,
    images: ["/assets/static/image4-2.jpg", "/assets/static/image4-3.jpg"]
  }
];

export const categories = ["All", "Study Abroad Guide", "Visa Information", "Accommodation Tips"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter((blog) => 
    (selectedCategory === "All" || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Input 
        placeholder="Search articles/topics" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="bg-yellow-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">Inspirational Thought</h2>
        <p className="text-gray-700">
          "The journey of a thousand miles begins with a single step." - Lao Tzu
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <Card
            key={index}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;