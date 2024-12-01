//storage for questions
let questions = [
        //strongly agree, agree: S (default)
        //strongly disagree, disagree: C
    {
        id: 1, 
        scenario: "False Business Trip ",
        description : `As a student, you discover that some of your lab colleagues are claiming 
        travel allowances for business trips they didn't take. They encourage you to do the same, assuring you 
        it's a common practice and an easy way to earn extra money. Refusing might isolate you from your peers 
        and affect your collaborations within the lab.`, 
        question: `You would refuse to participate in business trips and take steps to report any observed misconduct.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 2, 
        scenario: "Unfair Grading Assessment",
        description : `As a student, you receive your grade for a recent assignment and strongly believe it was assessed 
        unfairly by your professor. You have valid reasons and evidence to support your viewpoint. Addressing the issue 
        could lead to a better grade. However, confronting the professor might strain your relationship, potentially impacting 
        future recommendations and mentorship opportunities.`, 
        question: `You would raise your concerns to advocate for yourself and seek a grade reassessment.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 3, 
        scenario: "Research Topic Dilemma",
        description : `You are working on a paper about your favorite topic. Your professor suggests switching to a more popular subject 
        thats easier to get accepted into a conference or journal. Following his advice could enhance your publication prospects but means 
        abandoning your initial passion.`, 
        question: `You would stick to your original research topic despite the potential challenges..`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
    //strongly agree, agree: P
    //strongly disagree, disagree: U
        id: 4, 
        scenario: "Power Harassment",
        description : `In your lab, professors frequently assign personal tasks to graduate students and create a stressful environment. 
        Confronting this behavior could jeopardize your relationships and limit your opportunities for advancement and leadership within the lab. 
        However, staying silent allows the unethical practices to continue, negatively impacting the entire research community.`, 
        question: `You would accept the situation to gain favor and advance my career.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 5, 
        scenario: "University Event Leadership",
        description : `As president of your university's Community Service Club, you have developed a comprehensive plan for the annual outreach event, 
        including specific timelines, roles, and promotional strategies to ensure its success. However, several club members suggest adopting a more 
        inclusive and collaborative planning process to gather everyone's input and foster a sense of ownership. 
        While their approach could enhance team morale and ensure diverse ideas, it might also delay key preparations and complicate decision-making.`, 
        question: `You would assert my vision to ensure the event's efficiency and success.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 6, 
        scenario: "Student Fund Allocation",
        description : ` As president of your university's Student Government Association (SGA), you receive a significant budget increase. 
        You can either allocate the funds to host exclusive networking events with influential alumni and industry leaders, enhancing your 
        leadership and the SGAs status, or distribute the money to expand support services like mental health programs and academic tutoring, 
        benefiting the entire student body.`, 
        question: `You would allocate the funds to host exclusive networking events to boost my leadership and the SGA’s status.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    //strongly agree, agree: A
    //strongly disagree, disagree: B
    {
        id: 7, 
        scenario: "Allocation of Meeting Expenses",
        description : `As a student, you have access to meeting funds allocated for your research team. You notice that reallocating some of these funds 
        to cover personal meals would allow you to dedicate more time to your research projects. Alternatively, maintaining the original allocation 
        would ensure that all team members have the resources they need for group activities and collaborations.`, 
        question: `You would reallocate the meeting funds to support my personal research efforts.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 8, 
        scenario: "Scholarship Competition Dilemma",
        description : `You are applying for a highly competitive scholarship that could significantly support your education.
        Your close friend is also a contender and needs the scholarship to afford the next semester. 
        Sharing study resources or tips could improve their chances but reduce your own.`, 
        question: `You would focus on my own preparation to maximize my chances of winning the scholarship.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    {
        id: 9, 
        scenario: "Supporting a Teammate in Crisis",
        description : `You are working on a group project when a teammate faces a personal crisis, slowing their contributions. 
        Offering them flexibility could provide the support they need but might impact the projects timeline and quality.`, 
        question: `You would encourage my teammate to catch up to ensure the project's success.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    //strongly agree, agree: T
    //strongly disagree, disagree: E
    {
        id: 10, 
        scenario: "Illegal Laboratory Fund",
        description : `As a new graduate student in a prestigious lab, senior members ask you to contribute to an informal fund for organizing events. 
        Contributing could help you build strong relationships and gain recognition, advancing your academic career. 
        However, declining supports may limit your networking opportunities.`, 
        question: `You would contribute to the informal lab fund to build strong relationships and advance my academic career.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },  
    {
        id: 11, 
        scenario: "Campus Protest Participation",
        description : `You have earned a scholarship that requires maintaining good academic standing. 
        A protest on campus supporting a cause you deeply believe in is taking place. 
        Joining the protest would allow you to stand up for your beliefs but might lead to disciplinary action or strain your relationship with your scholarship sponsor. 
        Choosing not to participate would protect your scholarship and academic standing but may leave you feeling that you are not supporting the cause you care about.`, 
        question: `You would join the protest to stand up for what I believe in, even if it might lead to disciplinary action or strain my relationship with my scholarship sponsor.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    }, 
    {
        id: 12, 
        scenario: "Research Assistantship Decision",
        description : `A professor offers you a research assistant position on a groundbreaking, high-risk project that promises significant findings but demands extensive time and effort, 
        potentially disrupting your GPA. Alternatively, there is a safer assistantship available in a more stable area of study that offers a balanced workload and helps maintain your academic performance`, 
        question: `You would take the riskier research assistant role for the potential experience and breakthroughs, even if it might disrupt my GPA.`, 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    }, 
];

module.exports = {questions};