import { LessonSchedule } from "@/components/ui/ScheduleModal";

export const COUNTDOWN_DATES = {
    earlyBird: new Date('2025-07-15T23:59:00'), // Adjust as needed
    applicationDeadline: new Date('2025-08-01T23:59:00'), // Adjust as needed
  };
  
  export const TRACKS = [
    {
      id: 'beginner-a',
      name: 'Beginner A',
      time: '09:00 – 11:15 Sarajevo time on Saturdays',
      spots: 12,
      level: 'beginner',
    },
    {
      id: 'apprentice-a',
      name: 'Apprentice A',
      time: '09:00 – 11:15 Sarajevo time on Sundays',
      spots: 13,
      level: 'apprentice',
    },
    {
      id: 'machine-a',
      name: 'Machine A',
      time: '11:30 – 13:45 Sarajevo time on Saturdays',
      spots: 12,
      level: 'machine',
    },
    {
      id: 'shef-a',
      name: 'Shef A',
      time: '11:30 – 13:45 Sarajevo time on Sundays',
      spots: 13,
      level: 'shef',
    },
    {
      id: 'beginner-b',
      name: 'Beginner B',
      time: '17:00 – 19:15 Sarajevo time on Saturdays',
      spots: 14,
      level: 'beginner',
    },
    {
      id: 'apprentice-b',
      name: 'Apprentice B',
      time: '17:00 – 19:15 Sarajevo time on Sundays',
      spots: 15,
      level: 'apprentice',
    },
    {
      id: 'machine-b',
      name: 'Machine B',
      time: '19:30 – 21:45 Sarajevo time on Saturdays',
      spots: 14,
      level: 'machine',
    },
    {
      id: 'shef-b',
      name: 'Shef B',
      time: '19:30 – 21:45 Sarajevo time on Sundays',
      spots: 14,
      level: 'shef',
    },
  ];
  
  export const PRICING_PLANS = [
    {
      id: 'regular',
      name: 'Regular',
      originalPrice: 700,
      discountedPrice: 480,
      spots: '',
      features: [
        'Single-track access + recordings',
        'Monthly proctored test',
        '54 live classes + recordings',
        '54 problem sets',
        'Feedback on 3 problem sets',
        '30-min parent consult (before Nov 1 2025)',
        'Bonus university-level lectures*',
        'Bonus "Life after contest math" talks*',
        'Bonus "The Math Mindset" talks*',
      ],
      cta: 'Get Started',
      badge: null,
    },
    {
      id: 'accountability',
      name: 'Accountability',
      originalPrice: 2700,
      discountedPrice: 2100,
      spots: '7 spots remaining',
      features: [
        'Single-track access + recordings',
        'Monthly proctored test',
        '54 live classes + recordings',
        '54 problem sets',
        'Feedback on every problem set',
        '30-min parent consult (before Nov 1 2025)',
        'Weekly 50-min 1-on-1 with a former mathlete',
        'Bonus university-level lectures*',
        'Bonus "Life after contest math" talks*',
        'Bonus "The Math Mindset" talks*',
      ],
      cta: 'Reserve Your Spot',
      badge: 'POPULAR',
    },
    {
      id: 'premium',
      name: 'Premium',
      originalPrice: 6000,
      discountedPrice: 5000,
      spots: '3 spots remaining',
      features: [
        'Access to all tracks + recordings',
        'Monthly proctored test',
        '432 live classes + replays',
        '216 problem sets',
        'Feedback on every problem set',
        '30-min parent consult (before Nov 1 2025)',
        '2 × 50 min weekly 1-on-1s with the Shef',
        'Monthly 80 min custom lecture',
        'Bonus university-level lectures*',
        'Bonus "Life after contest math" talks*',
        'Bonus "The Math Mindset" talks*',
      ],
      cta: 'Enroll Now',
      badge: 'BEST VALUE',
    },
  ];
  
  export const INSTRUCTORS = [
    {
      id: 'zlatko',
      name: 'Zlatko-Salko Lagumdzija (the Shef)',
      credentials: 'Triple IMO Bronze Medalist, Founder of Shef Scholars',
      bio: 'Brown University Computer Science graduate. Former graduate fellow at the Cancer Data Science Lab at NIH. Currently a Schwarzman Scholar at Tsinghua University.',
    },
    {
      id: 'aldin',
      name: 'Aldin Adilovic',
      credentials: 'Balkan Math Olympiad 2017 Bronze Medalist',
      bio: 'Holding competitive math classes since 2017. Currently a student at the University of Sarajevo.',
    },
    {
      id: 'adisa',
      name: 'Adisa Bolić',
      credentials: 'IMO Team Leader, Double IMO Bronze Medalist',
      bio: 'Led Bosnia and Herzegovina\'s IMO team to 13th place. EGMO Gold and Silver Medalist. Master\'s in Mathematics and Computer Science from University of Sarajevo.',
    },
    {
      id: 'benjamin',
      name: 'Benjamin Mujkic',
      credentials: 'IMO Gold Medalist',
      bio: 'First gold medal for the country at IMO. Gold Medalist at Junior Balkan Mathematical Olympiad. Will study Computer Science and Applied Mathematics at Harvard.',
    },
    {
      id: 'ajla',
      name: 'Ajla Sehovic',
      credentials: 'PhD Candidate in Mathematics and Cryptography',
      bio: 'Former math competitor currently researching Mathematics and Cryptography at UP FAMNIT in Slovenia.',
    },
    {
      id: 'ervin',
      name: 'Ervin Macić',
      credentials: 'Double IMO Bronze Medalist',
      bio: 'Graduated top of his class at University of Sarajevo. Pursuing master\'s in Mathematics and Computer Science at University of Oxford.',
    },
    {
      id: 'admir',
      name: 'Admir Besirevic',
      credentials: 'IMO Bronze Medalist',
      bio: 'Coach of Zlatko-Salko Lagumdzija and major coach of Bosnia and Herzegovina\'s IMO team.',
    },
    {
      id: 'neira',
      name: 'Neira Kurtovic',
      credentials: 'Triple IMO Contestant, Bronze Medalist, EGMO Silver Medalist',
      bio: 'Master\'s degree in Mathematics from University of Oxford.',
    },
    {
      id: 'boris',
      name: 'Boris Velasevic',
      credentials: 'Double IMO Contestant, Bronze Medalist',
      bio: 'Master of Engineering in Computer Science from MIT. Bachelor\'s in Mathematics and Computer Science from MIT.',
    },
    {
      id: 'emin',
      name: 'Emin Mulaimovic',
      credentials: 'Junior AI Engineer',
      bio: 'Competitive math educator since 2020. Bachelor\'s in Computer Science from University of Sarajevo, pursuing Master\'s.',
    },
  ];
  
  export const TESTIMONIALS = [
    {
      id: 1,
      name: 'Ismayil Ismayilzade',
      country: 'Azerbaijan',
      achievement: 'Selected for IMO Summer Camp',
      quote: 'I learned a lot of tricks and tips in combinatorics. Taking lessons from an IMO champion is just different. We learned from each other\'s mistakes in a group of IMO-level students.',
      avatar: '/images/testimonials/ismayil.jpg',
    },
    {
      id: 2,
      name: 'Arleth Karolina',
      country: 'El Salvador',
      achievement: 'Iberoamerican Math Olympiad competitor',
      quote: 'Shef Scholars gave me the chance to connect with people on the same path. Thanks to the program, I qualified for IMO and obtained an Honorable Mention on APMO 2024.',
      avatar: '/images/testimonials/arleth.jpg',
    },
    {
      id: 3,
      name: 'Mingdao Zou Zhong',
      country: 'Sweden',
      achievement: 'IMO Honorable Mention',
      quote: 'The program helped me prepare intensely in just two weeks after failing the Team Selection Test. The focused training made all the difference.',
      avatar: '/images/testimonials/mingdao.jpg',
    },
    {
      id: 4,
      name: 'Besnik Haziri',
      country: 'Kosovo',
      achievement: 'IMO 2025 Team Member',
      quote: 'Shef Scholars provided the structured training I needed to make the national team. The personalized feedback was invaluable.',
      avatar: '/images/testimonials/besnik.jpg',
    },
    {
      id: 5,
      name: 'Luka Sebbag',
      country: 'Belgium',
      achievement: 'IMO Honorable Mention',
      quote: 'Shef is a fantastic teacher who gives just the right amount of help. What I improved most was endurance - wanting to solve problems rather than solving them quickly.',
      avatar: '/images/testimonials/luka.jpg',
    },
  ];
  
  export const FAQS = [
    {
      question: 'What is the age range for the Shef Scholars Competitive Math Academy?',
      answer: 'The Shef Scholars Competitive Math Academy is designed exclusively for students aged 14-19 who have a good foundation in mathematics and are looking to develop their skills further.'
    },
    {
      question: 'Am I qualified for the Shef Scholars Competitive Math Academy?',
      answer: 'To be a Shef Scholar and join our Competitive Math Academy you need to have a decent foundation in mathematics. If you are able to solve at least 50% of the problems from the beginner reference problems, you are qualified to be a Shef Scholar and join the Shef Scholars Competitive Math Academy. Anything less than that and you are not ready for the program yet.'
    },
    {
      question: 'How are students placed into tracks?',
      answer: 'Students are placed into tracks based on their preferences, test evaluations, and in some cases interviews. We suggest you look at the reference problems and apply to the track in which you can solve 50% of the reference problems. Do not worry too much about picking the right track. If we believe you\'ve misplaced yourself, we can suggest a move to another track in which you will find the most growth in.'
    },
    {
      question: 'Is there a limit to the number of students per group?',
      answer: 'To help make sure everyone gets the attention they need in the lecture, is called out at least once a month (unless the studet is very averse to being called out), and has a chance to ask questions, we limit the number of students per group to 15.'
    },
    {
      question: 'Is it possible to pay in installments?',
      answer: 'Yes it is, make sure you submit the application form and the paying in installments form at roughly the same time. Also please make sure your name, email match exactly on both forms. You can find the paying in installments form by copy pasting this link https://forms.gle/HocHKTgteXfENjD3A'
    },
    {
      question: 'How to figure out what level I should apply for?',
      answer: 'If you\'re unsure which level to pick, there are reference problems for each level that you can find at www.shefscholars.com/reference_problems.pdf'
    },
    {
      question: 'Do you offer financial aid?',
      answer: 'Not at this time. However, if you\'re very motivated, we encourage you to fill out the application to the best of your ability and then fill out the paying in installments form. Fill out the custom plan option and explain your situation. Make sure you submit the application form and the paying in installments form at roughly the same time. Also please make sure your name, email match exactly on both forms. You can find the paying in installments form by copy pasting this link https://forms.gle/HocHKTgteXfENjD3A . Note that we would love to be able to offer financial aid to the most motivated students that have a need for it, but we are a small organization and we are not able to do so at this time.'
    },
  ];

export const SCHEDULES: LessonSchedule[] = [
    {
        "Lesson Title": "Divisibility Rules for First 11 Positive Integers 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 02, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Build number sense by learning quick tricks to check if numbers are divisible. Develop analytical approach to a problem: what information is given in a problem, what do we know generally about this topic, how to maximally use any fact we determine, and most importantly develop a sense of how crucial it is to not underestimate any “trivial” conclusion we can make.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Algebraic Manipulations",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 02, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learn to add fractions correctly, manipulate exponents and solve complex problems without errors.\nExamples:\n$a^ba^c = a^{b+c} \\\\\n3ab^2 + 2ab + ab^2 = 4ab^2 + 2ab$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fundamental Theorem of Arithmetic",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 02, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over divisors of a number, the prime factorization, the number of prime factors, thinking in terms of prime powers (introductory)",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___MN01_PSET__Fundamental_Theorem_of_Arithmetic.pdf"
    },
    {
        "Lesson Title": "Polynomials 01",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 02, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Review the basics of polynomials, including Vieta’s Rules, Interpolation, Divisibility of Polynomials, and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility Rules for First 11 Positive Integers 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 02, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Build number sense by learning quick tricks to check if numbers are divisible. Develop analytical approach to a problem: what information is given in a problem, what do we know generally about this topic, how to maximally use any fact we determine, and most importantly develop a sense of how crucial it is to not underestimate any “trivial” conclusion we can make.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Algebraic Manipulations",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 02, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learn to add fractions correctly, manipulate exponents and solve complex problems without errors.\nExamples:\n$a^ba^c = a^{b+c} \\\\\n3ab^2 + 2ab + ab^2 = 4ab^2 + 2ab$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fundamental Theorem of Arithmetic",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 02, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over divisors of a number, the prime factorization, the number of prime factors, thinking in terms of prime powers (introductory)",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___MN01_PSET__Fundamental_Theorem_of_Arithmetic.pdf"
    },
    {
        "Lesson Title": "Polynomials 01",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 02, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Review the basics of polynomials, including Vieta’s Rules, Interpolation, Divisibility of Polynomials, and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Overview of Counting and Permutations",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 03, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Go over counting, permutations, principle of Inclusion/Exclusion, and making simple bijections (like how many numbers are there in the set {5, 11, 17, 23, 29, 35, …, 137})",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Modular Arithmetic",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 03, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learn about the fundamentals of modular arithmetic. Start by understanding what it is, go over the rules of modular arithmetic and prove them. Solve problems to develop an intuition behind using some of these rules.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___AP01_PSET__Modular_Arithmetic.pdf"
    },
    {
        "Lesson Title": "Quick Overview of the Circle",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 03, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Quickly introduce the theory behind power of point and the radical axis theorem and solve problems that involve these ideas. Cover topics:\n- Concyclic Quads \n- Power of Point\n- Radical Axis Theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 01",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 03, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Review the basics of polynomials, including Vieta’s Rules, Interpolation, Lagrange’s formula, Roots of unity and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___SA01_PSET__Polynomials.pdf"
    },
    {
        "Lesson Title": "Overview of Counting and Permutations",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 03, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Go over counting, permutations, principle of Inclusion/Exclusion, and making simple bijections (like how many numbers are there in the set {5, 11, 17, 23, 29, 35, …, 137})",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Modular Arithmetic",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 03, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learn about the fundamentals of modular arithmetic. Start by understanding what it is, go over the rules of modular arithmetic and prove them. Solve problems to develop an intuition behind using some of these rules.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___AP01_PSET__Modular_Arithmetic.pdf"
    },
    {
        "Lesson Title": "Quick Overview of the Circle",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 03, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Quickly introduce the theory behind power of point and the radical axis theorem and solve problems that involve these ideas. Cover topics:\n- Concyclic Quads \n- Power of Point\n- Radical Axis Theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 01",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 03, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Review the basics of polynomials, including Vieta’s Rules, Interpolation, Lagrange’s formula, Roots of unity and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___SA01_PSET__Polynomials.pdf"
    },
    {
        "Lesson Title": "Combinatorial Games",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 09, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Encourage students in trying developing some strategy to win fun but logical games by making them think in a way that is used generally in math competitions. Show students how everything we are teaching them is actually just a tool for our main goal -improving ways of thinking and problem solving skills.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___BC01_PSET__Combinatorial_Games.pdf"
    },
    {
        "Lesson Title": "Fundamentals of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 09, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learn about the plane, what a Triangle is, Parallel Lines, Angles. Build the intuitive feeling of geometric objects and their relations: what angles are equal, why, encourage them to provide some intuitive arguments. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Concylic Quadrilaterals, Adding points, and Ptolemy’s Theorem",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 09, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over some intermediate problems with concylic quads, learn about the Simson line, do problems where you add a single point to finish the problem, and learn about Ptolemy’s theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 01",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 09, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Go over the basics of graph theory, definitions, and some introductory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Combinatorial Games",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 09, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Encourage students in trying developing some strategy to win fun but logical games by making them think in a way that is used generally in math competitions. Show students how everything we are teaching them is actually just a tool for our main goal -improving ways of thinking and problem solving skills.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture",
        "PDF Link": "./problems/2025_SCMA___BC01_PSET__Combinatorial_Games.pdf"
    },
    {
        "Lesson Title": "Fundamentals of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 09, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learn about the plane, what a Triangle is, Parallel Lines, Angles. Build the intuitive feeling of geometric objects and their relations: what angles are equal, why, encourage them to provide some intuitive arguments. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Concylic Quadrilaterals, Adding points, and Ptolemy’s Theorem",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 09, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over some intermediate problems with concylic quads, learn about the Simson line, do problems where you add a single point to finish the problem, and learn about Ptolemy’s theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 01",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 09, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Go over the basics of graph theory, definitions, and some introductory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Am-Gm Inequality",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 10, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Solve a lot of problems here in order to present importance of practice with these kind of problems. Do a few harder inequalities where algebraic identities presented in previous lectures are used. Solve a problem or two that is a bit complex to solve via am-gm but that will easy once we learn the CBS inequality.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Different Types of Quadrilaterals",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 10, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learn about the Square, Rectangle, Rhombus, Parallelogram, Trapezoid (and its Mid-line), Kite/Deltoid. \nLearn about the areas of these quads, perimeter, diagonals.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 10, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Quickly going over the definitions and solving a couple of intermediate problems and proving introductory theorems like Turan, Euler, Bipartite, Mantel",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 10, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Review Prime Factorization, Complete System of Residues, Euler, and Wilson through solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Am-Gm Inequality",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 10, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Solve a lot of problems here in order to present importance of practice with these kind of problems. Do a few harder inequalities where algebraic identities presented in previous lectures are used. Solve a problem or two that is a bit complex to solve via am-gm but that will easy once we learn the CBS inequality.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Different Types of Quadrilaterals",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 10, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learn about the Square, Rectangle, Rhombus, Parallelogram, Trapezoid (and its Mid-line), Kite/Deltoid. \nLearn about the areas of these quads, perimeter, diagonals.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 10, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Quickly going over the definitions and solving a couple of intermediate problems and proving introductory theorems like Turan, Euler, Bipartite, Mantel",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 10, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Review Prime Factorization, Complete System of Residues, Euler, and Wilson through solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Factorization and Expansion",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 16, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Learn the basic exponential rules to expand multiplication:\n$(a+b)^2 = (a+b)(a+b) = a^2 + 2ab + b^2$\n$a^2 - b^2 = (a-b)(a+b)$\n$a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$\nLearn how to factorize expressions:\n$n(n+1)(n+2)(n+3) + 1= (n^2 + 3n)(n^2 + 3n + 2) + 1 = (n^2 + 3n+1)^2$ ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility rules for first 11 positive integers 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 16, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Develop the sense of persistence/trial and error when solving a harder problems, through making observations with specific, small cases, and playing with numbers. \nBreak the common habit of “freezing” and just looking at the problem statement, without making any observations. Run experiments on specific numbers when you’re not able to see which direction to go. \nUnderstand the importance of blind experimentation in problem solving.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Induction and Recursion",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 16, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Solving recursions in combinatorics and applying induction to various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Complete Residue System, Fermat, Wilson",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 16, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about the complete residue system, Multiplicative Inverse, Fermat’s Little Theorem, and Wilson’s Theorem and apply them in problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Factorization and Expansion",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 16, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Learn the basic exponential rules to expand multiplication:\n$(a+b)^2 = (a+b)(a+b) = a^2 + 2ab + b^2$\n$a^2 - b^2 = (a-b)(a+b)$\n$a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$\nLearn how to factorize expressions:\n$n(n+1)(n+2)(n+3) + 1= (n^2 + 3n)(n^2 + 3n + 2) + 1 = (n^2 + 3n+1)^2$ ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility rules for first 11 positive integers 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 16, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Develop the sense of persistence/trial and error when solving a harder problems, through making observations with specific, small cases, and playing with numbers. \nBreak the common habit of “freezing” and just looking at the problem statement, without making any observations. Run experiments on specific numbers when you’re not able to see which direction to go. \nUnderstand the importance of blind experimentation in problem solving.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Induction and Recursion",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 16, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Solving recursions in combinatorics and applying induction to various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Complete Residue System, Fermat, Wilson",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 16, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about the complete residue system, Multiplicative Inverse, Fermat’s Little Theorem, and Wilson’s Theorem and apply them in problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Quadratic polynomials and expressions of higher degree",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 17, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Derive formula for quadratic equation in a way to show some new tricks in algebraic manipulations with expressions of higher than one degrees. Teach graphic of quadratic equation, Vieta’s formulas, again through lenses of algebraic manipulations. Solve hard problems from quadratic equation. Present a few new algebraic identities such as:\na^3+b^3+c^3=(a+b+c)(a^2+b^2+c^2-ab-ac-bc)\na^n+-b^n=(a+-b)(a^n+a^(n-1)b+…+b^n)\n(a1+a2+…+an)^2=ai^2+2aiaj.\n(a+-b)^n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Defining and Using the Circle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 17, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Define what a circle is and go over some major theorems we have for circles and terminology; Mention the tangent quadrilateral and the concyclic quadrilateral ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Recurrence Relations",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 17, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Solve problems involving recurrence relations in algebra. Learn how to find general formulas to recurrence relations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Constructions 01: CRT and Algebraic Manipulation",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 17, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learning some tools that help construct number theory solutions including the Chinese Remainder Theorem, Algebraic Manipulations, and Proving the existence of primes of the form 4k-1",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Quadratic polynomials and expressions of higher degree",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 17, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Derive formula for quadratic equation in a way to show some new tricks in algebraic manipulations with expressions of higher than one degrees. Teach graphic of quadratic equation, Vieta’s formulas, again through lenses of algebraic manipulations. Solve hard problems from quadratic equation. Present a few new algebraic identities such as:\na^3+b^3+c^3=(a+b+c)(a^2+b^2+c^2-ab-ac-bc)\na^n+-b^n=(a+-b)(a^n+a^(n-1)b+…+b^n)\n(a1+a2+…+an)^2=ai^2+2aiaj.\n(a+-b)^n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Defining and Using the Circle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 17, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Define what a circle is and go over some major theorems we have for circles and terminology; Mention the tangent quadrilateral and the concyclic quadrilateral ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Recurrence Relations",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 17, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Solve problems involving recurrence relations in algebra. Learn how to find general formulas to recurrence relations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Constructions 01: CRT and Algebraic Manipulation",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 17, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learning some tools that help construct number theory solutions including the Chinese Remainder Theorem, Algebraic Manipulations, and Proving the existence of primes of the form 4k-1",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fundamentals of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 23, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Learn about the Perimeter, Area, Perpendicular lines, the sum of angles in a triangle, and the triangle inequality.  Use conclusions and semi-built basic geometry intuition from previous \nlesson to discover new elementary laws and prove some of them in a \nmathematically correct way. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Word Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 23, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Go over various word problems and transform them into mathematical equations we can solve",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Counting in Two Ways",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 23, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn Counting in Two ways and applying it to classic problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Euler Theorem and Ord",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 23, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about Euler’s Theorem and the Order of an Element. Solve more difficult problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fundamentals of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 23, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Learn about the Perimeter, Area, Perpendicular lines, the sum of angles in a triangle, and the triangle inequality.  Use conclusions and semi-built basic geometry intuition from previous \nlesson to discover new elementary laws and prove some of them in a \nmathematically correct way. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Word Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 23, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Go over various word problems and transform them into mathematical equations we can solve",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Counting in Two Ways",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 23, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn Counting in Two ways and applying it to classic problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Euler Theorem and Ord",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 23, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about Euler’s Theorem and the Order of an Element. Solve more difficult problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Invariance",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 24, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Learning about the principle of invariance and applying to many problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility and the Fundamental Theorem of Arithmetric",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 24, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "This lecture should improve way of thinking in number theory. Start looking at primes as atoms for numbers. Provide combinatorial proofs and problems involving prime factorization of n (not specific number).\nExamples include: \n- proof of Euler’s totient function formula \n- number of divisors of n formula \n- sum of divisors of n formula\nImprove the understanding of Greatest Common Divisor (GCD) and Least Common Multiple (LCM). Namely:\n- GCD(n,m) = common prime factors of m and n to the power of minimum degree it occurs in them.\n- LCM(n,m)=all prime factors that occur together in n and m to the power of maximal degree that occurs in both of them. \nSolve easy and medium problems on mentioned topics.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Two Interesting Points in Geometry",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 24, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about the Salko and Zlatko points in Geometry",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Algebraic Transformations",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 24, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Solve problems that require algebraic transformations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Invariance",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 24, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Learning about the principle of invariance and applying to many problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility and the Fundamental Theorem of Arithmetric",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 24, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "This lecture should improve way of thinking in number theory. Start looking at primes as atoms for numbers. Provide combinatorial proofs and problems involving prime factorization of n (not specific number).\nExamples include: \n- proof of Euler’s totient function formula \n- number of divisors of n formula \n- sum of divisors of n formula\nImprove the understanding of Greatest Common Divisor (GCD) and Least Common Multiple (LCM). Namely:\n- GCD(n,m) = common prime factors of m and n to the power of minimum degree it occurs in them.\n- LCM(n,m)=all prime factors that occur together in n and m to the power of maximal degree that occurs in both of them. \nSolve easy and medium problems on mentioned topics.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Two Interesting Points in Geometry",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 24, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about the Salko and Zlatko points in Geometry",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Algebraic Transformations",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 24, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Solve problems that require algebraic transformations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 30, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Go over the major ideas behind the problems and do a bit of drilling of concepts. Talk about how to have a rough idea of a solution even when you don’t fully know what the solution is. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "August 30, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Practice everything taught up until now. Give problems the need some level of imagination. We will combine ideas from different fields and lectures students have encountered so far. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 30, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over the some of the major problems in the test and discuss the major ideas involved in solving the problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Menelaus and Ceva Theorems",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "August 30, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about Ceva and Menelaus Theorem, prove them, and apply to some intro problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 30, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Go over the major ideas behind the problems and do a bit of drilling of concepts. Talk about how to have a rough idea of a solution even when you don’t fully know what the solution is. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "August 30, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Practice everything taught up until now. Give problems the need some level of imagination. We will combine ideas from different fields and lectures students have encountered so far. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 30, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over the some of the major problems in the test and discuss the major ideas involved in solving the problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Menelaus and Ceva Theorems",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "August 30, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about Ceva and Menelaus Theorem, prove them, and apply to some intro problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 31, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Go over the problems and solutions on Test 01 and the motivations behind them.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Concyclic Quadrilaterals",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "August 31, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learn to notice concyclic quadrilaterals and use angle chasing to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Problems with Binomial Coefficients",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 31, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about Lucas’ Theorem and use it to solve different problems in number theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "August 31, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Go over the major ideas in the problems and use it as an excuse to explain some basic theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 31, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Go over the problems and solutions on Test 01 and the motivations behind them.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Concyclic Quadrilaterals",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "August 31, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learn to notice concyclic quadrilaterals and use angle chasing to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Problems with Binomial Coefficients",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 31, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about Lucas’ Theorem and use it to solve different problems in number theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 01",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "August 31, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Go over the major ideas in the problems and use it as an excuse to explain some basic theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Problems with rates and percentages",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 06, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Learn how to solve problems that involve rates and percentages. A% of B is the same as B% of A, if person 1 takes X days to complete Y jobs and person 2 takes A days to complete B jobs, how many jobs will they solve in Z days.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility and residues",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 06, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Understand division more deeply: not just \"how\", but \"why\" it works. Visualize remainders using real-world metaphors (like filling a board with dominoes). Learn what makes a number prime and why primes are the \"atoms\" of numbers.\nStart developing critical thinking and pattern recognition. Learn how to mathematically generalize and prove things we intuitively see by observing and experimenting with numbers. Practice thinking in general while playing with concrete small examples.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 06, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Explore some different ideas like the ones that came up in the first test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional Equations 01",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 06, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Review what a function is, learn about injectivity, surjectivity, range, domain, bijectivity, how you solve functions and solve some problems that use these ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Problems with rates and percentages",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 06, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Learn how to solve problems that involve rates and percentages. A% of B is the same as B% of A, if person 1 takes X days to complete Y jobs and person 2 takes A days to complete B jobs, how many jobs will they solve in Z days.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility and residues",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 06, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Understand division more deeply: not just \"how\", but \"why\" it works. Visualize remainders using real-world metaphors (like filling a board with dominoes). Learn what makes a number prime and why primes are the \"atoms\" of numbers.\nStart developing critical thinking and pattern recognition. Learn how to mathematically generalize and prove things we intuitively see by observing and experimenting with numbers. Practice thinking in general while playing with concrete small examples.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 06, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Explore some different ideas like the ones that came up in the first test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional Equations 01",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 06, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Review what a function is, learn about injectivity, surjectivity, range, domain, bijectivity, how you solve functions and solve some problems that use these ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Mathematical Induction 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 07, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Teach steps of mathematical induction (base case, assumption, what to prove) and inductive way of thinking (transforming problem from n to something smaller than n). Explain strong induction. \nMake sure students understand intuitively the logical validity of mathematical induction. \nDo a lot of examples where the focus is on understanding how induction works.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 07, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Go over problems that involve ideas we’ve covered.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 07, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Review all the basics of inequalities that the Shef competitors are expected to know and solve general problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Functional Equations",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 07, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Reviewing the basics and then attacking some intermediate functional equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Mathematical Induction 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 07, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Teach steps of mathematical induction (base case, assumption, what to prove) and inductive way of thinking (transforming problem from n to something smaller than n). Explain strong induction. \nMake sure students understand intuitively the logical validity of mathematical induction. \nDo a lot of examples where the focus is on understanding how induction works.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 07, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Go over problems that involve ideas we’ve covered.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 07, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Review all the basics of inequalities that the Shef competitors are expected to know and solve general problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Functional Equations",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 07, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Reviewing the basics and then attacking some intermediate functional equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Triangles ",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 13, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Get comfortable with calculating triangle angles and learn about the different types of triangles including equilateral, isosceles, right, 30-60-90, 45-45-90, and the Pythagorean Theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pigeonhole Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 13, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Teach students of precision of mathematical term “there exists at least one object with certain property”. Show why we can’t assume where this object is, nor that there is a specific number of objects with said property - we just know there must be at least one somewhere. Show them how that “trivial” conclusion is sufficient to help you solve many pretty difficult problems. \nReiterate that they need to think in small, trivial steps when trying to solve a problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 13, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Going over some techniques that the Machine Level should know through problems in coloring, invariants, and games",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 13, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Solve various types of problems using exponents, prime factors, some ideas not covered in theoretical lectures, and polynomial number theory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to Triangles ",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 13, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Get comfortable with calculating triangle angles and learn about the different types of triangles including equilateral, isosceles, right, 30-60-90, 45-45-90, and the Pythagorean Theorem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pigeonhole Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 13, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Teach students of precision of mathematical term “there exists at least one object with certain property”. Show why we can’t assume where this object is, nor that there is a specific number of objects with said property - we just know there must be at least one somewhere. Show them how that “trivial” conclusion is sufficient to help you solve many pretty difficult problems. \nReiterate that they need to think in small, trivial steps when trying to solve a problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 13, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Going over some techniques that the Machine Level should know through problems in coloring, invariants, and games",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 13, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Solve various types of problems using exponents, prime factors, some ideas not covered in theoretical lectures, and polynomial number theory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Binomial Coefficients and Their Applications",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 14, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Defining n choose k, learning the counting trick of counting what’s not in the set, and solving more complex counting problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Bezout’s Identity and Diophantine Equations",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 14, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Prove Bezout’s identity, use it to solve problems, and solve some Diophantine Equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Vieta Jumping ",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 14, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about Vieta Jumping and its applications in Number Theory Problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Projective Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 14, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about the basics of the cross ratio, the Ceva Menelaus theorem applied to cross ratios, and the simple lemma with harmonic bundles and a midpoint",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Binomial Coefficients and Their Applications",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 14, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Defining n choose k, learning the counting trick of counting what’s not in the set, and solving more complex counting problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Bezout’s Identity and Diophantine Equations",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 14, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Prove Bezout’s identity, use it to solve problems, and solve some Diophantine Equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Vieta Jumping ",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 14, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about Vieta Jumping and its applications in Number Theory Problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Projective Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 14, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about the basics of the cross ratio, the Ceva Menelaus theorem applied to cross ratios, and the simple lemma with harmonic bundles and a midpoint",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 20, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Doing a lot of algebra problems in order to develop our skill of handling algebraic expressions.\n\nImproving way of thinking when dealing with algebraic expression by asking questions: \n- What does this part remind you of?\n- What would be nice to appear here?\n- What do we know about this form?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 20, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Deepen understanding of divisibility property among numbers. What does a|b mean and what conclusions can we draw from that?\n\nLearn how to algebraically manipulate divisibility problems to get the dividend to be smaller.\n\nLearn the how to formalize introductory divisibility proofs.\n\nExamples of things we will cover:\nx | y means there exists an integer k such that x*k = y\na | b and a | c → a | b + c\n7 | 72a+10b+c → 7 | 2a + 3b + c\n8 | 6n^2 + 2n + 4 and 8 | 3n^2 + n - 1 → 8 | 6",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Power of Point",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 20, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about the power of point theorem and apply it to a bunch of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 02",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 20, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn more in depth about polynomials, including Lagrange’s formula, Roots of unity and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 20, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Doing a lot of algebra problems in order to develop our skill of handling algebraic expressions.\n\nImproving way of thinking when dealing with algebraic expression by asking questions: \n- What does this part remind you of?\n- What would be nice to appear here?\n- What do we know about this form?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Divisibility 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 20, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Deepen understanding of divisibility property among numbers. What does a|b mean and what conclusions can we draw from that?\n\nLearn how to algebraically manipulate divisibility problems to get the dividend to be smaller.\n\nLearn the how to formalize introductory divisibility proofs.\n\nExamples of things we will cover:\nx | y means there exists an integer k such that x*k = y\na | b and a | c → a | b + c\n7 | 72a+10b+c → 7 | 2a + 3b + c\n8 | 6n^2 + 2n + 4 and 8 | 3n^2 + n - 1 → 8 | 6",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Power of Point",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 20, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about the power of point theorem and apply it to a bunch of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 02",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 20, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn more in depth about polynomials, including Lagrange’s formula, Roots of unity and apply these to solve problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 21, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Go over general problems from all the areas where you don’t know what technique is being used. Also take this opportunity to introduce problems which use ideas that won’t be covered in depth in the theoretical lectures",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 21, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Review of the answers in Test 02. We go over the reasoning behind each problem and the motivations behind the solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algorithmic Techniques 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 21, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Introduction to making algorithmic solutions in combinatorics problems and proving those algorithms actually finish; using the greedy algorithm",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 21, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Review the problems and motivate the more computational thinking that’s involved in the problems. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 21, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Go over general problems from all the areas where you don’t know what technique is being used. Also take this opportunity to introduce problems which use ideas that won’t be covered in depth in the theoretical lectures",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 21, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Review of the answers in Test 02. We go over the reasoning behind each problem and the motivations behind the solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algorithmic Techniques 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 21, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Introduction to making algorithmic solutions in combinatorics problems and proving those algorithms actually finish; using the greedy algorithm",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 21, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Review the problems and motivate the more computational thinking that’s involved in the problems. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 27, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Solving problems that needs combining topics already covered in the theoretical combinatorics lectures. \n\nDiscuss problems where there exist an unfathomable number of possible “moves” to make. Learn to recognize some laws/patterns in places that look “chaotic”/”messy”.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "September 27, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Go over geometry problems. Discuss with students geometry problems, give them hints, and help them navigate how to generally think when solving them. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 27, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Make sure students can angle chase concyclic quads on a G1 level, Make sure they see power of point, and apply basic Ceva or Menelaus theorems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Trigonometry 01",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "September 27, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about the fundamentals of trigonometry\nWhat does sin, cos, tan mean\nWhat is the Unit Circle\nWhat elements of the triangle can we get with the trigonometric tools\nProve the Law of sines and cosines",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 27, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Solving problems that needs combining topics already covered in the theoretical combinatorics lectures. \n\nDiscuss problems where there exist an unfathomable number of possible “moves” to make. Learn to recognize some laws/patterns in places that look “chaotic”/”messy”.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "September 27, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Go over geometry problems. Discuss with students geometry problems, give them hints, and help them navigate how to generally think when solving them. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 27, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Make sure students can angle chase concyclic quads on a G1 level, Make sure they see power of point, and apply basic Ceva or Menelaus theorems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Trigonometry 01",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "September 27, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about the fundamentals of trigonometry\nWhat does sin, cos, tan mean\nWhat is the Unit Circle\nWhat elements of the triangle can we get with the trigonometric tools\nProve the Law of sines and cosines",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 28, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Go over various first/second contest combinatorics problems and cover a couple of ideas we haven’t seen before",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "September 28, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Solve problems that combine algebraic manipulations together with induction. Do problems that require deep understanding of quadratic equation and its graph. Solve some inequalities using min-max of quadratic equation.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 28, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over various different types of problems and with each problem introduce a concept that won’t be covered in the theoretical lectures. Mix those up with a creative problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Construction and Existence Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "September 28, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Difficult combinatorial construction problems and proving something exists",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 28, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Go over various first/second contest combinatorics problems and cover a couple of ideas we haven’t seen before",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "September 28, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Solve problems that combine algebraic manipulations together with induction. Do problems that require deep understanding of quadratic equation and its graph. Solve some inequalities using min-max of quadratic equation.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 01",
        "Subject": "General Problems",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 28, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over various different types of problems and with each problem introduce a concept that won’t be covered in the theoretical lectures. Mix those up with a creative problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Construction and Existence Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "September 28, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Difficult combinatorial construction problems and proving something exists",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 04, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Start with the review of the proof based question to make sure that students understand proof writing very well. Then focus on the numerical answers and common pitfalls that happened during the test.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 04, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Learning how to deal with complex problems through common problem solving strategy of breaking our solution journey into small, trivial, easy solvable problems. Convince students that any idea that leads us to solution is not something just geniuses could came up with, but is actually culmination of keen observation, practice, and courage to fail in many attempts of solving a problem. \n\nDeveloping skills to apply everything we know, any theory we have learned in solving difficult problems, and building intuition for what to look for in divisibility problems. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 04, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over the main ideas in each of the problems of the test. Talk about the motivation and point out ways to write the proof succinctly",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Combinatorial Geometry ",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 04, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learning about the convex hull and applying a wide range of principles to combinatorial geometry",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 04, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Start with the review of the proof based question to make sure that students understand proof writing very well. Then focus on the numerical answers and common pitfalls that happened during the test.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 04, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Learning how to deal with complex problems through common problem solving strategy of breaking our solution journey into small, trivial, easy solvable problems. Convince students that any idea that leads us to solution is not something just geniuses could came up with, but is actually culmination of keen observation, practice, and courage to fail in many attempts of solving a problem. \n\nDeveloping skills to apply everything we know, any theory we have learned in solving difficult problems, and building intuition for what to look for in divisibility problems. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 02",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 04, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over the main ideas in each of the problems of the test. Talk about the motivation and point out ways to write the proof succinctly",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Combinatorial Geometry ",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 04, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learning about the convex hull and applying a wide range of principles to combinatorial geometry",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pigeonhole principle",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 05, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Learning about the different applications of the pigeonhole principle, including the infinite pigeons principle, and applying it on different problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 05, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Do junior olympiad level of medium problems on this lecture that are using everything covered so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Inequalities 01",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 05, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Solve some inequalities that use the weighted Am-Gm, looking at the functions of variables, and algebraic transformations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 05, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Go over problems which have themes similar to the things we covered but do not reveal those themes. Add a problem that is heavily computational",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pigeonhole principle",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 05, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Learning about the different applications of the pigeonhole principle, including the infinite pigeons principle, and applying it on different problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number theory 01",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 05, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Do junior olympiad level of medium problems on this lecture that are using everything covered so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Inequalities 01",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 05, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Solve some inequalities that use the weighted Am-Gm, looking at the functions of variables, and algebraic transformations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 01",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 05, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Go over problems which have themes similar to the things we covered but do not reveal those themes. Add a problem that is heavily computational",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Absolute value problems",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 11, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Solve problems involving absolute values.\nIntroduce the notion of length in math. \n\nShow difference between \nintuitively understanding |x| (the distance between x and 0 on the number line), and its mathematical formal definition.\n\nSolve a lot of problems with absolute value in order to motivate \nstudents to discover, on their own, general rules and techniques in absolute values.\nLearn what to focus on when solving these kind of problems.\n\nFocus attention on explaining that once you intuitively understand a mathematical term, law, or processes, you are not going to be overwhelmed when trying to grasp/memorize formal technical definitions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Set Theory",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 11, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Introduce term of cardinality. Teach students how to real life problems translate into mathematical language. Show how to visualize sets by Venn’s diagram, and using that observation to set mathematical equations. Derive general rules of principle of inclusion and exclusion after doing some problems by which they developed some sense of laws hiding in background. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 11, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Go over general algebra problems and at times touch upon the ideas covered previously",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Chinese Remainder Theorem",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 11, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about the Chinese Remainder Theorem and use it to solve constructive problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Absolute value problems",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 11, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Solve problems involving absolute values.\nIntroduce the notion of length in math. \n\nShow difference between \nintuitively understanding |x| (the distance between x and 0 on the number line), and its mathematical formal definition.\n\nSolve a lot of problems with absolute value in order to motivate \nstudents to discover, on their own, general rules and techniques in absolute values.\nLearn what to focus on when solving these kind of problems.\n\nFocus attention on explaining that once you intuitively understand a mathematical term, law, or processes, you are not going to be overwhelmed when trying to grasp/memorize formal technical definitions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Set Theory",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 11, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Introduce term of cardinality. Teach students how to real life problems translate into mathematical language. Show how to visualize sets by Venn’s diagram, and using that observation to set mathematical equations. Derive general rules of principle of inclusion and exclusion after doing some problems by which they developed some sense of laws hiding in background. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 01",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 11, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Go over general algebra problems and at times touch upon the ideas covered previously",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Chinese Remainder Theorem",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 11, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about the Chinese Remainder Theorem and use it to solve constructive problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fermat’s Little Theorem & The Complete Residue System",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 12, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Introduce complete residue system, and show some examples of it:\n1a,2a,3a,…,(p-1)a, a\na+1,a+2,…,a+(p-1)\na, a^2, a^3,…,a^(p-1).\nUse this theory to prove Fermat’s Little Theorem. Solve easy and medium problems involving complete residue system and Fermat’s Little theorem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Complex Numbers",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 12, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Teach elementary things for complex numbers. Show intuition why they were invented, and why we need them. \n\nWe will present properties that will show you how to discover something new by yourself, what to look for, what to recognize, what questions to ask yourself. \n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 02",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 12, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn more in depth about polynomials to be able to solve more advanced problems. Ideas include Fundamental theorem of elementary symmetric polynomials, Factoring multivariate polynomials, and Newton sums among others.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials with integer coefficients 01",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 12, 2025 11:45 (GMT+2) → 12:45",
        "Objectives": "Learn about and apply Bezout’s theorem; Vieta’s Rules; Using complex roots to find out when polinomials are divisible by another polynomial",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Fermat’s Little Theorem & The Complete Residue System",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 12, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Introduce complete residue system, and show some examples of it:\n1a,2a,3a,…,(p-1)a, a\na+1,a+2,…,a+(p-1)\na, a^2, a^3,…,a^(p-1).\nUse this theory to prove Fermat’s Little Theorem. Solve easy and medium problems involving complete residue system and Fermat’s Little theorem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Complex Numbers",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 12, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Teach elementary things for complex numbers. Show intuition why they were invented, and why we need them. \n\nWe will present properties that will show you how to discover something new by yourself, what to look for, what to recognize, what questions to ask yourself. \n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials 02",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 12, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn more in depth about polynomials to be able to solve more advanced problems. Ideas include Fundamental theorem of elementary symmetric polynomials, Factoring multivariate polynomials, and Newton sums among others.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials with integer coefficients 01",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 12, 2025 19:45 (GMT+2) → 20:45",
        "Objectives": "Learn about and apply Bezout’s theorem; Vieta’s Rules; Using complex roots to find out when polinomials are divisible by another polynomial",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 18, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Teach the basics of congruency, but make the lecture a discovery process. Develop hypotheses and determine what we can and cannot do and why.\n\nMotivate the development of this theory that’s based on seemingly “trivial” facts.\n\nSolve easy and medium problems using congruency.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Angle Chasing",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 18, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Review of everything learned thus far and actually solving problem with angle chasing. Emphasize the importance of the practice of immediately finding angles. Learn what angles we usually can’t and can express via some other \nangles.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Counting identities and advanced counting",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 18, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about different counting identities and have the technique to finish every counting problem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Cauchy, Power Mean and Rearrangement Inequality",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 18, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn some inequality theory and apply it in problems. Learn the Cauchy–Bunyakovsky–Schwarz inequality, the Power mean, and the Rearrangement inequality. Try to get a sense of when these are used and how they can be applied.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency 01",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 18, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Teach the basics of congruency, but make the lecture a discovery process. Develop hypotheses and determine what we can and cannot do and why.\n\nMotivate the development of this theory that’s based on seemingly “trivial” facts.\n\nSolve easy and medium problems using congruency.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Angle Chasing",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 18, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Review of everything learned thus far and actually solving problem with angle chasing. Emphasize the importance of the practice of immediately finding angles. Learn what angles we usually can’t and can express via some other \nangles.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Counting identities and advanced counting",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 18, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about different counting identities and have the technique to finish every counting problem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Cauchy, Power Mean and Rearrangement Inequality",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 18, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn some inequality theory and apply it in problems. Learn the Cauchy–Bunyakovsky–Schwarz inequality, the Power mean, and the Rearrangement inequality. Try to get a sense of when these are used and how they can be applied.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Mathematical Induction 02",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 19, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Solve intermediate and hard problems using induction. \n\nSolve problems for which induction is only one part of solving a problem. \n\nGo over problems where the inductive step is not from n to n+1. \nFor example jumping from n to 2n. \n\nDo problems for which is not trivial on what variable to apply induction (or you need to add a variable to induct on).\n\nFinally, cover problems where casework gets more constrained because of induction, thereby presenting the full power of this way of proving and thinking.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Triangle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 19, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Mention the orthocenter, circumcenter, centroid, incenter and prove their existence. \nShow what we are able to calculate about these special points",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 19, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Solve a wide variety of combinatorics problems and develop breadth in your combinatorial thinking",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Processes",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 19, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Analyzing processes in combinatorics and how to solve problems with them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Mathematical Induction 02",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 19, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Solve intermediate and hard problems using induction. \n\nSolve problems for which induction is only one part of solving a problem. \n\nGo over problems where the inductive step is not from n to n+1. \nFor example jumping from n to 2n. \n\nDo problems for which is not trivial on what variable to apply induction (or you need to add a variable to induct on).\n\nFinally, cover problems where casework gets more constrained because of induction, thereby presenting the full power of this way of proving and thinking.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Triangle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 19, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Mention the orthocenter, circumcenter, centroid, incenter and prove their existence. \nShow what we are able to calculate about these special points",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 19, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Solve a wide variety of combinatorics problems and develop breadth in your combinatorial thinking",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Processes",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 19, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Analyzing processes in combinatorics and how to solve problems with them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 25, 2025 09:00 (GMT+2) → 10:00",
        "Objectives": "Solving harder problems using congruencies. \n\nDiscussing problematic situations with congruencies (when can we divide the sides of the congruency or take square root of both sides). \n\nRecognizing patterns in raising congruency to a power of some numbers, and making simple observations of quadratic residues.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Finding one-to-one correspondance",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "October 25, 2025 10:15 (GMT+2) → 11:15",
        "Objectives": "Present how to discover relations between objects mentioned in problems. Make discussion how existence of one kind of term with certain property conditions existence of other term with another or same property. Show how that helps us in counting.\nUse combinatorial way of thinking, and pattern recognition in solving problems from other fields.\nExample:\nCount how many numbers is there in sequence:\n$4, 7, 10, …, 103\n\\\\ \\downarrow \\\\\n3, 6, 9, …, 102 \n\\\\ \\downarrow \\\\\n1, 2, 3, …, 34$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Trigonometry 02",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 25, 2025 11:30 (GMT+2) → 12:30",
        "Objectives": "Learn about the sum/difference of sines/cosines rules, Prove Stewart’s Theorem and solve computational problems. Develop an intuition for what is “calculable”",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pell’s Equation",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "October 25, 2025 12:45 (GMT+2) → 13:45",
        "Objectives": "Learn about Pell’s equation, apply it to problems. Learn about the fundamental solutions, continued fractions, and the motivation behind solutions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 25, 2025 17:00 (GMT+2) → 18:00",
        "Objectives": "Solving harder problems using congruencies. \n\nDiscussing problematic situations with congruencies (when can we divide the sides of the congruency or take square root of both sides). \n\nRecognizing patterns in raising congruency to a power of some numbers, and making simple observations of quadratic residues.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Finding one-to-one correspondance",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "October 25, 2025 18:15 (GMT+2) → 19:15",
        "Objectives": "Present how to discover relations between objects mentioned in problems. Make discussion how existence of one kind of term with certain property conditions existence of other term with another or same property. Show how that helps us in counting.\nUse combinatorial way of thinking, and pattern recognition in solving problems from other fields.\nExample:\nCount how many numbers is there in sequence:\n$4, 7, 10, …, 103\n\\\\ \\downarrow \\\\\n3, 6, 9, …, 102 \n\\\\ \\downarrow \\\\\n1, 2, 3, …, 34$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Trigonometry 02",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 25, 2025 19:30 (GMT+2) → 20:30",
        "Objectives": "Learn about the sum/difference of sines/cosines rules, Prove Stewart’s Theorem and solve computational problems. Develop an intuition for what is “calculable”",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Pell’s Equation",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "October 25, 2025 20:45 (GMT+2) → 21:45",
        "Objectives": "Learn about Pell’s equation, apply it to problems. Learn about the fundamental solutions, continued fractions, and the motivation behind solutions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 26, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Go over the main ideas that came in the test, the solutions, motivations, and class discussion on good approaches",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Angle Bisector Theorem and some simple geometry lemmas",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "October 26, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Define the Internal and External Angle bisector theorem, what it means that a point is on the angle bisector, and show the Angle Bisector - Side bisector Lemma.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 26, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Go over the different solutions and motivate them. Connect it to what we’ve seen in lectures thus far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Homothety",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "October 26, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about homothety and develop the “homothetic thinking” in problems. What is the center of homothety? Solve a supposedly difficult IMO problem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 26, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Go over the main ideas that came in the test, the solutions, motivations, and class discussion on good approaches",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Angle Bisector Theorem and some simple geometry lemmas",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "October 26, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Define the Internal and External Angle bisector theorem, what it means that a point is on the angle bisector, and show the Angle Bisector - Side bisector Lemma.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 26, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Go over the different solutions and motivate them. Connect it to what we’ve seen in lectures thus far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Homothety",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "October 26, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about homothety and develop the “homothetic thinking” in problems. What is the center of homothety? Solve a supposedly difficult IMO problem",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 01, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Go over the major problems and review how to write down a proof of a problem. Use examples from the instructor’s solutions or even a student solution.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 01, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Start solving easiest problems from junior olympiads. More and more involve students in discussion and observation.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 01, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Reviewing all the ideas in the test and the motivations behind the problems. Also going over the background of new ideas if they’re introduced.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 01, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Do a wide variety of problems where you’re trying to recognize patterns from the techniques we’ve learned thus far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 01, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Go over the major problems and review how to write down a proof of a problem. Use examples from the instructor’s solutions or even a student solution.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 01, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Start solving easiest problems from junior olympiads. More and more involve students in discussion and observation.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 03",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 01, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Reviewing all the ideas in the test and the motivations behind the problems. Also going over the background of new ideas if they’re introduced.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 01, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Do a wide variety of problems where you’re trying to recognize patterns from the techniques we’ve learned thus far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 02, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Doing a variety of geometry problems that touch upon ideas we’ve already covered",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "CBS Inequality 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 02, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Prove CSB inequality using algebraic transformation and common trick of using fact that determinant of quadratic equation which have at most one solution is nonpositive. Simple application of CBS on harder problems from am-gm inequality to show power of this ineqaulity.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Generating functions",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 02, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Learn what generating functions are and how they solve combinatorics problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 02, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Review of everything we’ve covered thus far and solving different algebra problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 02, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Doing a variety of geometry problems that touch upon ideas we’ve already covered",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "CBS Inequality 01",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 02, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Prove CSB inequality using algebraic transformation and common trick of using fact that determinant of quadratic equation which have at most one solution is nonpositive. Simple application of CBS on harder problems from am-gm inequality to show power of this ineqaulity.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Generating functions",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 02, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Learn what generating functions are and how they solve combinatorics problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 02, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Review of everything we’ve covered thus far and solving different algebra problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Angles in a Circle",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 08, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learning about the chord angle and solving problems with concyclic quads",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 08, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Using combinatorial way of thinking to conclude new properties about numbers, and residues they can give when divided by some number. Define GCD and LCM through prime factorizations of numbers:\n$n=p_1^{a_1}p_2^{a_2}...p_k^{a_k} \\\\\nm=q_1^{b_1}q_2^{b_2}...q_t^{b_t} \\\\\n$GCD(n,m)=common prime factors of m and n to the power of minimum degree it occurs in them\nLCM(n,m)=all prime factors that occur together in n and m to the power of maximal degree that occurs in both of them  \nShow usage of GCD and LCM when dealing with problems. Solve simple congruency linear equations. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "(Non)standard Inequalities  General Ideas",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 08, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Solve some non-standard inequalities to get a wide range of ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Prime exponents in Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 08, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about v_p(x) and develop a clearer thinking solving problems that involve looking at prime exponents in problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Angles in a Circle",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 08, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learning about the chord angle and solving problems with concyclic quads",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 08, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Using combinatorial way of thinking to conclude new properties about numbers, and residues they can give when divided by some number. Define GCD and LCM through prime factorizations of numbers:\n$n=p_1^{a_1}p_2^{a_2}...p_k^{a_k} \\\\\nm=q_1^{b_1}q_2^{b_2}...q_t^{b_t} \\\\\n$GCD(n,m)=common prime factors of m and n to the power of minimum degree it occurs in them\nLCM(n,m)=all prime factors that occur together in n and m to the power of maximal degree that occurs in both of them  \nShow usage of GCD and LCM when dealing with problems. Solve simple congruency linear equations. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "(Non)standard Inequalities  General Ideas",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 08, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Solve some non-standard inequalities to get a wide range of ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Prime exponents in Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 08, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about v_p(x) and develop a clearer thinking solving problems that involve looking at prime exponents in problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Wilson’s Theorem & The Complete Residue System",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 09, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Explain multiplicative inverse mod n. Prove wilsons theorem via multiplicative inverse and complete residue system. Prove Euler’s theorem. Explain multiplicative order mod n and prove statements on that. Solve harder problems using wilsons, fermats, and euler’s theorem and ord mod n.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Stars and bars and more applications of counting",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 09, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Learning about the stars and bars idea and doing more complex counting problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Functional Equations",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 09, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Solving different advanced functional equations involving fixed points, extensions to other fields, and that might involve a lot of casework or ingenuity",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 09, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Review everything we’ve done thus far and introduce some other more ideas in number theory we haven’t seen before",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Wilson’s Theorem & The Complete Residue System",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 09, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Explain multiplicative inverse mod n. Prove wilsons theorem via multiplicative inverse and complete residue system. Prove Euler’s theorem. Explain multiplicative order mod n and prove statements on that. Solve harder problems using wilsons, fermats, and euler’s theorem and ord mod n.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Stars and bars and more applications of counting",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 09, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Learning about the stars and bars idea and doing more complex counting problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Functional Equations",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 09, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Solving different advanced functional equations involving fixed points, extensions to other fields, and that might involve a lot of casework or ingenuity",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 09, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Review everything we’ve done thus far and introduce some other more ideas in number theory we haven’t seen before",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algebraic Transformations",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 15, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learning how to solve problems where you need to apply algebraic operations to get what you want.\nExample:\n$\\text{If $a+b+c = 0$ and $a^2+b^2 + c^2 = 1$}\\\\\n\\text{What is $a^4 + b^4 + c^4$?}$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 15, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Solve problems that require a lot of  angle chasing and expressing them via some other angles, establishing which of them are mutually equal in order to show students on what level of practice they should come so they can efficiently solve these problems.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Extremal Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 15, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Going over a small number of simple problems and learning about the killer advanced applications of the extremal principles like the “best case” idea \n(Example Problem: The Shef has $100 in pennies, nickels, dimes, and quarters. Prove the Shef can split their coins into two piles such that each pile has exactly $50)",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 15, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Go over the ideas we’ve covered through solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algebraic Transformations",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 15, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learning how to solve problems where you need to apply algebraic operations to get what you want.\nExample:\n$\\text{If $a+b+c = 0$ and $a^2+b^2 + c^2 = 1$}\\\\\n\\text{What is $a^4 + b^4 + c^4$?}$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 15, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Solve problems that require a lot of  angle chasing and expressing them via some other angles, establishing which of them are mutually equal in order to show students on what level of practice they should come so they can efficiently solve these problems.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Extremal Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 15, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Going over a small number of simple problems and learning about the killer advanced applications of the extremal principles like the “best case” idea \n(Example Problem: The Shef has $100 in pennies, nickels, dimes, and quarters. Prove the Shef can split their coins into two piles such that each pile has exactly $50)",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 15, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Go over the ideas we’ve covered through solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 16, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 16, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Going over cool problems we haven’t explored that have ideas from a variety of sources",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 16, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Review of the major ideas in the test and the motivation behind them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Appolonius Circle, Miquel, and different Configurations",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 16, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about Appolonius Circle, Miquel Theorem, and other configurations. Mention isogonal conjugates as well. Introduce spiral similarity and a couple of lemmas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 16, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 16, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Going over cool problems we haven’t explored that have ideas from a variety of sources",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 16, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Review of the major ideas in the test and the motivation behind them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Appolonius Circle, Miquel, and different Configurations",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 16, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about Appolonius Circle, Miquel Theorem, and other configurations. Mention isogonal conjugates as well. Introduce spiral similarity and a couple of lemmas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 22, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Solve harder problems in counting by combining one-to-one correspondance, addition and multiplication principles.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Prime Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 22, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Learn more deeply about prime numbers and solve basic problems with them making most of properties of prime numbers.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional Equations 02",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 22, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Learn about fixed points in functional equations and get more practice solving functional equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 22, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over general combinatorics problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 22, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Solve harder problems in counting by combining one-to-one correspondance, addition and multiplication principles.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Prime Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 22, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Learn more deeply about prime numbers and solve basic problems with them making most of properties of prime numbers.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional Equations 02",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 22, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Learn about fixed points in functional equations and get more practice solving functional equations",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 22, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over general combinatorics problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problem 02",
        "Subject": "General Problems",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 23, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Solving a variety of problems with creative ideas that are meant to prepare you for the computational problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 23, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "This lecture is inequality based. Do a lot of problems in order to present various ideas and tricks when proving inequalities. Also solve advanced problems from inequalities where CBS and Am-Gm is just part of solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 23, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Going over various ideas and problems we expect the Shef level to know",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Inversion 01 ",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 23, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn the basics of which element goes where under which conditions; solve basic problems that give students an understanding of how the picture changes under inversion",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problem 02",
        "Subject": "General Problems",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 23, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Solving a variety of problems with creative ideas that are meant to prepare you for the computational problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 23, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "This lecture is inequality based. Do a lot of problems in order to present various ideas and tricks when proving inequalities. Also solve advanced problems from inequalities where CBS and Am-Gm is just part of solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 02",
        "Subject": "General Problems",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 23, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Going over various ideas and problems we expect the Shef level to know",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Inversion 01 ",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 23, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn the basics of which element goes where under which conditions; solve basic problems that give students an understanding of how the picture changes under inversion",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 29, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Dealing with algebraic manipulation of arbitrary number of terms. Proving some properties of magical square and filling it. Discussing problems with filling board with certain conditions, recognizing Gauss sum in some of them. Solving difficult problems from algebraic transformation. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Addition and Multiplication Principles in Counting Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "November 29, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Solve a lot of problems with counting. Visualize branching of possibilities, and introduce breaking problem in smaller cases we can count. Develop deep understanding of essence of difference between additional and multiplication principle.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Solutions to quadratic equation mod p",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 29, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Learn about quadratic reciprocity, Gauss Lemma, and how to think about quadratic residues mod p",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coordinate Geometry in the Cartesian Plane 01",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "November 29, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about the fundamentals of coordinate geometry in the cartesian plane\n- Do the equation of lines\n- Area of the triangle in the cartesian plane\nWhen can you use coordinate geometry?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 29, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Dealing with algebraic manipulation of arbitrary number of terms. Proving some properties of magical square and filling it. Discussing problems with filling board with certain conditions, recognizing Gauss sum in some of them. Solving difficult problems from algebraic transformation. ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Addition and Multiplication Principles in Counting Problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "November 29, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Solve a lot of problems with counting. Visualize branching of possibilities, and introduce breaking problem in smaller cases we can count. Develop deep understanding of essence of difference between additional and multiplication principle.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Solutions to quadratic equation mod p",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 29, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Learn about quadratic reciprocity, Gauss Lemma, and how to think about quadratic residues mod p",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coordinate Geometry in the Cartesian Plane 01",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "November 29, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about the fundamentals of coordinate geometry in the cartesian plane\n- Do the equation of lines\n- Area of the triangle in the cartesian plane\nWhen can you use coordinate geometry?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Exponential Equations with Integers ",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 30, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learn the ideas of finding the right mod to look at, looking at distribution of primes when you have the equation of the form AB=C, and other ideas when dealing with exponential equations with integers",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Homogenization and scaling",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "November 30, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Teach criterion of homogenity in order to know immidieately can inequality be proved by am-gm. Show how to non-homogenious equation transform in homogenious one using condition in problem. Show trick of setting system of equations in order to find how much of each expression to take in am-gm in order to prove inequality.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 30, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Solve different types of problems in geometry. Make sure to test them not just what they learned but also different creative problems as well",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "November 30, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Time to solve any problems that are left unsolved and add a couple of new ones with wild ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Exponential Equations with Integers ",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 30, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learn the ideas of finding the right mod to look at, looking at distribution of primes when you have the equation of the form AB=C, and other ideas when dealing with exponential equations with integers",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Homogenization and scaling",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "November 30, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Teach criterion of homogenity in order to know immidieately can inequality be proved by am-gm. Show how to non-homogenious equation transform in homogenious one using condition in problem. Show trick of setting system of equations in order to find how much of each expression to take in am-gm in order to prove inequality.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 30, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Solve different types of problems in geometry. Make sure to test them not just what they learned but also different creative problems as well",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "November 30, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Time to solve any problems that are left unsolved and add a couple of new ones with wild ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 06, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 06, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Most of the problems in this lecture are easiest problems from junior olympiads, and few of them are middle level from known junior competitions that involve combination of everything we have encountered so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 06, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Solve general algebra problems that draw from a variety of sources",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 06, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over all the ideas in the test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 06, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 06, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Most of the problems in this lecture are easiest problems from junior olympiads, and few of them are middle level from known junior competitions that involve combination of everything we have encountered so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 02",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 06, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Solve general algebra problems that draw from a variety of sources",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 04",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 06, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over all the ideas in the test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Applied Geometric Calculations",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 07, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learn how to make geometric calculations using elementary methods including Thales, similarity, congruency, and adding smart points",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 07, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Solve cool number theory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 07, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Going over more advanced problems in graph theory and applying ideas we’ve learned throughout the school",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Primitive Roots and Their Applications",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 07, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Prove the existence of primitive roots for prime numbers, apply the ideas in a couple of problems to get comfortable with them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Applied Geometric Calculations",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 07, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learn how to make geometric calculations using elementary methods including Thales, similarity, congruency, and adding smart points",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number theory 02",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 07, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Solve cool number theory problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 07, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Going over more advanced problems in graph theory and applying ideas we’ve learned throughout the school",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Primitive Roots and Their Applications",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 07, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Prove the existence of primitive roots for prime numbers, apply the ideas in a couple of problems to get comfortable with them",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency of Triangles",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 13, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learning about and recognizing congruency. Introduce notion of well-definedness. Triangle is well defined by rules: SSS, SAS, ASA, SSA (angle against larger side). From there conclude when two triangles are congruent. Solve problems that include angle chasing in order to recognize congruency.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Gauss Sum Trick ",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 13, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Learn about the Gauss Sum Trick which is $1+2+3+…+n = \\frac{n(n+1)}{2}$\n\nNotice it in problems.\nExamples:\n$2 + 4 + … + 2n=?$\n$1 + 3 + … + (2n-1)=?$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Recurrence Relations and Sequences",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 13, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Go over sequences, how to find general formulas for sequences as well as guessing the solution",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 13, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Review coordinate geometry in the cartesian plane problems, trigonometry problems, and some hidden ideas problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Congruency of Triangles",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 13, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learning about and recognizing congruency. Introduce notion of well-definedness. Triangle is well defined by rules: SSS, SAS, ASA, SSA (angle against larger side). From there conclude when two triangles are congruent. Solve problems that include angle chasing in order to recognize congruency.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Gauss Sum Trick ",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 13, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Learn about the Gauss Sum Trick which is $1+2+3+…+n = \\frac{n(n+1)}{2}$\n\nNotice it in problems.\nExamples:\n$2 + 4 + … + 2n=?$\n$1 + 3 + … + (2n-1)=?$",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Recurrence Relations and Sequences",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 13, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Go over sequences, how to find general formulas for sequences as well as guessing the solution",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 13, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Review coordinate geometry in the cartesian plane problems, trigonometry problems, and some hidden ideas problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "More Geometry Lemmas",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 14, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learn about the AH = 2OM, Reflections of the ortocenter, MH, and the hidden angle bisector lemmas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Game Theory",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 14, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Doing the introduction to game theory, learning about winning and losing positions, and solving a lot of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 14, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "A general lecture to get you to see if you can notice the ideas we’ve learned in the problems and figure out some ideas we haven’t mentioned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Constructions 02: Various Ideas",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 14, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "This is the lecture where we show creative ideas in number theory constructions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "More Geometry Lemmas",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 14, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learn about the AH = 2OM, Reflections of the ortocenter, MH, and the hidden angle bisector lemmas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Game Theory",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 14, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Doing the introduction to game theory, learning about winning and losing positions, and solving a lot of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 14, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "A general lecture to get you to see if you can notice the ideas we’ve learned in the problems and figure out some ideas we haven’t mentioned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Number Theory Constructions 02: Various Ideas",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 14, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "This is the lecture where we show creative ideas in number theory constructions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Permutations, Combinations, Variations 01",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 20, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Develop theory of permutations, combinations and variations by solving specific problems using counting techniques we have developed so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Similarity and Thales Theorem",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 20, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Learning about and recognizing Thales theorem and similarity. Prove Thales theorem using areas, angle chasing and congruency. Solve problems that combine angle chasing, congruency and idea of connecting some points that were not connected before.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Lifting the Exponent Lemma",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 20, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Learn the famous Lifting the Exponent (LTE) Lemma and apply it to a bunch of problems. We will begin the lecture by actually proving the lemma",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 20, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Solving cool problems we didn’t metion",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Permutations, Combinations, Variations 01",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 20, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Develop theory of permutations, combinations and variations by solving specific problems using counting techniques we have developed so far.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Similarity and Thales Theorem",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 20, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Learning about and recognizing Thales theorem and similarity. Prove Thales theorem using areas, angle chasing and congruency. Solve problems that combine angle chasing, congruency and idea of connecting some points that were not connected before.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Lifting the Exponent Lemma",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 20, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Learn the famous Lifting the Exponent (LTE) Lemma and apply it to a bunch of problems. We will begin the lecture by actually proving the lemma",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 20, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Solving cool problems we didn’t metion",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Primes and perfect powers",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 21, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Go over different techniques to prove a number is a perfect power and learn about the shift-by-1 idea in number theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Test 05 Review",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 21, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Test 05 Review",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 21, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Go over the problems from the test in depth. Talk about the approaches people took.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Projective Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 21, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Practice projecting onto lines and circles, learn about the harmonic bundle and 90 degree angle lemma, see one advanced projection",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Primes and perfect powers",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 21, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Go over different techniques to prove a number is a perfect power and learn about the shift-by-1 idea in number theory",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Test 05 Review",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 21, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Test 05 Review",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 21, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Go over the problems from the test in depth. Talk about the approaches people took.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Projective Geometry 02",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 21, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Practice projecting onto lines and circles, learn about the harmonic bundle and 90 degree angle lemma, see one advanced projection",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 05",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 27, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Common techniques in solving chessboard problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "December 27, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Involve students more then usual in discussion about ideas and playing with possible options and moves. Navigate them into observing specific properties of the board, and freedom in thinking and using imagination when dealing with these problems. Combine columns and rows, black and white fields, maybe color it in a way we would like it  to be colored. Make the most of visual property of these problems. Use topics from previous lectures to solve a problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coordinate Geometry in the Cartesian Plane 02",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 27, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "Solve more problems using coordinate geometry ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 05",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "December 27, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over the main ideas of the problems in the test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 05",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 27, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Common techniques in solving chessboard problems",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "December 27, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Involve students more then usual in discussion about ideas and playing with possible options and moves. Navigate them into observing specific properties of the board, and freedom in thinking and using imagination when dealing with these problems. Combine columns and rows, black and white fields, maybe color it in a way we would like it  to be colored. Make the most of visual property of these problems. Use topics from previous lectures to solve a problem.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coordinate Geometry in the Cartesian Plane 02",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 27, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "Solve more problems using coordinate geometry ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 05",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "December 27, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over the main ideas of the problems in the test",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Extremal Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 28, 2025 09:00 (GMT+1) → 10:00",
        "Objectives": "Learning about the basics of the extremal principle and its use in problems. Learning how to formalize solutions that make intuitive sense",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "December 28, 2025 10:15 (GMT+1) → 11:15",
        "Objectives": "Solving a variety of proof based problems that have some creative ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Inequalities 02",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 28, 2025 11:30 (GMT+1) → 12:30",
        "Objectives": "More advanced inequalities looking at the growth rate of functions, looking at discriminants",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Inversion 02",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "December 28, 2025 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about different types of inversion for the triangle and where it sends points, ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Extremal Principle",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 28, 2025 17:00 (GMT+1) → 18:00",
        "Objectives": "Learning about the basics of the extremal principle and its use in problems. Learning how to formalize solutions that make intuitive sense",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 03",
        "Subject": "General Problems",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "December 28, 2025 18:15 (GMT+1) → 19:15",
        "Objectives": "Solving a variety of proof based problems that have some creative ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Advanced Inequalities 02",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 28, 2025 19:30 (GMT+1) → 20:30",
        "Objectives": "More advanced inequalities looking at the growth rate of functions, looking at discriminants",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Inversion 02",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "December 28, 2025 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about different types of inversion for the triangle and where it sends points, ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Basics of Inequaltiies",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 03, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Learn about the inequalities that involve additions and multiplications of given inequalities, that a square is always positive, and learn to think about size in math",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Diophantine Equations",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 03, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Use algebraic manipulations in order to factorize expressions and make number theory conclusions about expressions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Schur’s Inequality and Hölder's inequality",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 03, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Learn about Schur’s Inequality and Hölder's inequality, apply them to problems, and notice solve other inequalities as well",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 03, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Go over problems that cover a wide range of ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Basics of Inequaltiies",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 03, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Learn about the inequalities that involve additions and multiplications of given inequalities, that a square is always positive, and learn to think about size in math",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Diophantine Equations",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 03, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Use algebraic manipulations in order to factorize expressions and make number theory conclusions about expressions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Schur’s Inequality and Hölder's inequality",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 03, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Learn about Schur’s Inequality and Hölder's inequality, apply them to problems, and notice solve other inequalities as well",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 03, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Go over problems that cover a wide range of ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "GCD and Relatively Prime Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 04, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Learn about the GCD and relatively prime number and see their applications in number theory problems. When dealing with AB = C^n with (A,B) = 1 this means…?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Arithmetic and Geometric Sequences",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 04, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Teach and prove basic properties of both sequneces. Solve problems from other fields as well which use said properties in their solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 04, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "We’ll solve some algebra problems with interesting ideas.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional equations in Number Theory",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 04, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "We are going over a bunch of functional equations that are number theory based and get you comfortable with different ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "GCD and Relatively Prime Numbers",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 04, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Learn about the GCD and relatively prime number and see their applications in number theory problems. When dealing with AB = C^n with (A,B) = 1 this means…?",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Arithmetic and Geometric Sequences",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 04, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Teach and prove basic properties of both sequneces. Solve problems from other fields as well which use said properties in their solutions.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 04, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "We’ll solve some algebra problems with interesting ideas.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Functional equations in Number Theory",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 04, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "We are going over a bunch of functional equations that are number theory based and get you comfortable with different ideas",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 10, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Solve hard problems from congruencies and divisibility, while including students in all of discussions and observations. Show some solutions to junior olympiad level problems using combinatorial thinking, and essence of understanding integers while implementing skills developed in algebra field.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Special Points and lines in a Triangle: Centroid, Orthocenter, Circumcenter, Incenter",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 10, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Learn about special lines, and different ways of understanding them, and equivalence of their definitions:\n◦Height: Segment through vertex of triangle, perpendicular to opposite side || Projection of vertex on opposite side\n◦Angle bisector: Line that halves an angle || Set of all points equally distanced from angle legs\n◦Side Bisector: Line through side midpoint, perpendicular to it || Set of all points equally distanced from both ends of side\n◦Median: Segment that connects vertex with midpoint of opposite side\n\n\nUsing these prove existence of some of:\n◦ Centroid\n◦ Orthocenter\n◦ Circumcenter\n◦ Incenter\n\nTogether with students discover all properties of special points and prove them.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 10, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Go over problems that cover everything covered in algebra",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Radical Axis Theorem",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 10, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Learn about the radical axis theorem and apply it to a couple of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 10, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Solve hard problems from congruencies and divisibility, while including students in all of discussions and observations. Show some solutions to junior olympiad level problems using combinatorial thinking, and essence of understanding integers while implementing skills developed in algebra field.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Special Points and lines in a Triangle: Centroid, Orthocenter, Circumcenter, Incenter",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 10, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Learn about special lines, and different ways of understanding them, and equivalence of their definitions:\n◦Height: Segment through vertex of triangle, perpendicular to opposite side || Projection of vertex on opposite side\n◦Angle bisector: Line that halves an angle || Set of all points equally distanced from angle legs\n◦Side Bisector: Line through side midpoint, perpendicular to it || Set of all points equally distanced from both ends of side\n◦Median: Segment that connects vertex with midpoint of opposite side\n\n\nUsing these prove existence of some of:\n◦ Centroid\n◦ Orthocenter\n◦ Circumcenter\n◦ Incenter\n\nTogether with students discover all properties of special points and prove them.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 10, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Go over problems that cover everything covered in algebra",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Radical Axis Theorem",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 10, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Learn about the radical axis theorem and apply it to a couple of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 11, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Go over problems from algebra that use techniques we’ve covered in the camp",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The 9 point Circle and the Excircle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 11, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Learn about all the introductory theory about the 9-point Circle, The Euler Line, and the Excircle",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials with integer coefficients 02",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 11, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Proving the fundamental theorem of algebra and Perron’s criterion. Learning about Gauss’s lemma, Eisenstein’s lemma, and other ideas from polynomials",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 11, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over a couple of difficult problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 11, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Go over problems from algebra that use techniques we’ve covered in the camp",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The 9 point Circle and the Excircle",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 11, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Learn about all the introductory theory about the 9-point Circle, The Euler Line, and the Excircle",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Polynomials with integer coefficients 02",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 11, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Proving the fundamental theorem of algebra and Perron’s criterion. Learning about Gauss’s lemma, Eisenstein’s lemma, and other ideas from polynomials",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 11, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over a couple of difficult problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 17, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "This lecture is culmination of everything we have learned in field of geometry through this course. Focus on solving problems involving triangle and its special lines and points.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Gaussian Substitution/Elimination Problems",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 17, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Learn how to solve problems that use Gaussian elimination, learn how to solve a system of linear equations. Learn how many linear equations are necessary to have a unique solution\n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to algorithmic problem solving",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 17, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Solving problems making algorithms that reach an end point; learning about monovariants to prove the end of an algorithm",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 17, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Review everything learned thus far by solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 17, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "This lecture is culmination of everything we have learned in field of geometry through this course. Focus on solving problems involving triangle and its special lines and points.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Gaussian Substitution/Elimination Problems",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 17, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Learn how to solve problems that use Gaussian elimination, learn how to solve a system of linear equations. Learn how many linear equations are necessary to have a unique solution\n",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Introduction to algorithmic problem solving",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 17, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Solving problems making algorithms that reach an end point; learning about monovariants to prove the end of an algorithm",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 17, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Review everything learned thus far by solving various problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coloring Proofs",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 18, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Learning about the basic coloring techniques and solving problems that use it ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 18, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Going over a wide variety of problems to show you what ideas come beyond what we’ve learned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Probabilistic Method 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 18, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Learning about the basics of probability, the probabilistic method and a few of its applications",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algorithmic Techniques 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 18, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over more in depth algorithmic solutions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Coloring Proofs",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 18, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Learning about the basic coloring techniques and solving problems that use it ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 18, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Going over a wide variety of problems to show you what ideas come beyond what we’ve learned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "The Probabilistic Method 01",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 18, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Learning about the basics of probability, the probabilistic method and a few of its applications",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Algorithmic Techniques 02",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 18, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over more in depth algorithmic solutions",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 24, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 24, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Solving system of equations using Gaussian/Elimination with combination of using inequalities and algebraic transformations. Problems that use some observations of quadratic equation to solve.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 02",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 24, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Go over more advanced graph theory and get more comfortable with coloring graphs and counting graphs",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 24, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Going over the major ideas and reflecting how far you’ve come",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 24, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Algebra 03",
        "Subject": "Algebra",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 24, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Solving system of equations using Gaussian/Elimination with combination of using inequalities and algebraic transformations. Problems that use some observations of quadratic equation to solve.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Graph Theory 02",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 24, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Go over more advanced graph theory and get more comfortable with coloring graphs and counting graphs",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 24, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Going over the major ideas and reflecting how far you’ve come",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 25, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Solving problems which employ a bunch of ideas from what we’ve learned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "January 25, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 25, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Going over the problem solutions and what the ideas are",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "January 25, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Solve various problems that cover everything we learned and hint at a couple of ideas we haven’t covered that will be covered in the next iteration of the competitive math school",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 25, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Solving problems which employ a bunch of ideas from what we’ve learned",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "January 25, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Review the major ideas of the tests and go over the solutions and their motivations.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Test 06",
        "Subject": "Test Review",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 25, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Going over the problem solutions and what the ideas are",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Geometry 03",
        "Subject": "Geometry",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "January 25, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Solve various problems that cover everything we learned and hint at a couple of ideas we haven’t covered that will be covered in the next iteration of the competitive math school",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 31, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Make quick summary of everything we have covered on the field of combinatorics. Show general patterns in approaching a combinatorial problems that repeat through all problems we have done. Combine and use exactly the solutions we have seen on this course as bricks to build solutions to problems on this lecture.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Beginner A",
        "Session": "Morning",
        "Date and Time": "January 31, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Solve hardest problems from junior olympiads.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 31, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Going over all the major ideas we’ve learned by noticing them in a variety of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Machine A",
        "Session": "Morning",
        "Date and Time": "January 31, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Wrapping it up with a couple of beautiful problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 31, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Make quick summary of everything we have covered on the field of combinatorics. Show general patterns in approaching a combinatorial problems that repeat through all problems we have done. Combine and use exactly the solutions we have seen on this course as bricks to build solutions to problems on this lecture.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Beginner B",
        "Session": "Evening",
        "Date and Time": "January 31, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Solve hardest problems from junior olympiads.",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 31, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Going over all the major ideas we’ve learned by noticing them in a variety of problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "General Problems 04",
        "Subject": "General Problems",
        "Grade Level": "Machine B",
        "Session": "Evening",
        "Date and Time": "January 31, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Wrapping it up with a couple of beautiful problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "February 01, 2026 09:00 (GMT+1) → 10:00",
        "Objectives": "Solving the most beautiful problems we didn’t get to solve",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice A",
        "Session": "Morning",
        "Date and Time": "February 01, 2026 10:15 (GMT+1) → 11:15",
        "Objectives": "Discovering ideas that are next in our competitive math journey through solving creative problems ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "February 01, 2026 11:30 (GMT+1) → 12:30",
        "Objectives": "Review of all of Number Theory we covered through solving problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Shef A",
        "Session": "Morning",
        "Date and Time": "February 01, 2026 12:45 (GMT+1) → 13:45",
        "Objectives": "Review of all of Combinatorics we covered through solving problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "February 01, 2026 17:00 (GMT+1) → 18:00",
        "Objectives": "Solving the most beautiful problems we didn’t get to solve",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Apprentice B",
        "Session": "Evening",
        "Date and Time": "February 01, 2026 18:15 (GMT+1) → 19:15",
        "Objectives": "Discovering ideas that are next in our competitive math journey through solving creative problems ",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Number Theory 03",
        "Subject": "Number Theory",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "February 01, 2026 19:30 (GMT+1) → 20:30",
        "Objectives": "Review of all of Number Theory we covered through solving problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    },
    {
        "Lesson Title": "Review of Combinatorics 03",
        "Subject": "Combinatorics",
        "Grade Level": "Shef B",
        "Session": "Evening",
        "Date and Time": "February 01, 2026 20:45 (GMT+1) → 21:45",
        "Objectives": "Review of all of Combinatorics we covered through solving problems",
        "Lesson Status": "Scheduled",
        "Teaching Method": "Lecture"
    }
];