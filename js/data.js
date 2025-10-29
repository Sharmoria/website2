// All service data
const MINIMUM_BOOKING_AMOUNT = 500;

const services = {
    packages: [
        {
            id: 'quick-refresh',
            name: 'Quick Refresh',
            price: 500,
            duration: '60 mins',
            description: 'Head, Neck & Shoulder Massage (30 mins) + Hand & Arm Massage (30 mins)',
            image: 'images/head-neck.jpeg' 
        },
        {
            id: 'feet-glow',
            name: 'Feet & Glow',
            price: 850,
            duration: '1 hr 45 mins',
            description: 'Foot Scrub & Massage (45 mins) + Deep Cleanse Facial + Facial Massage (60 mins)',
            image: 'images/foot-massage.jpg'
        },
        {
            id: 'stress-melt',
            name: 'Stress Melt',
            price: 850,
            duration: '90 mins',
            description: 'Full-Body Relaxation Massage (60 mins) + Head, Neck & Shoulder (30 mins)',
            image: 'images/full-body-massage.jpg'
        },
        {
            id: 'total-indulgence',
            name: 'Total Indulgence',
            price: 2100,
            duration: '3 hrs 15 mins',
            description: 'Full-Body Relaxation Massage (90 mins) + Deep Cleanse Facial (60 mins) + Foot Scrub & Massage (45 mins)',
            image: 'images/facial-treatment.jpg'
        },
        {
            id: 'deep-healing',
            name: 'Deep Healing',
            price: 1700,
            duration: '2 hrs 30 mins',
            description: 'Deep Tissue Massage (90 mins) + Cupping Therapy (60 mins)',
            image: 'images/deep-tissue.jpg'
        },
        {
            id: 'hot-stone-bliss',
            name: 'Hot Stone Bliss',
            price: 1250,
            duration: '1 hr 50 mins',
            description: 'Hot Stone Massage (90 mins) + Aromatherapy / Scalp Add-on (20 mins)',
            image: 'images/hot-stone.jpg'
        },
        {
            id: 'couples-escape',
            name: "Couple's Escape",
            price: 1500,
            duration: '2 hrs',
            description: '2 × Full-Body Relaxation Massages (60 mins) + 2 × Aromatherapy / Scalp Add-ons (60 mins)',
            image: 'images/couples-massage.jpg'
        },
        {
            id: 'signature-sharmoria',
            name: 'Signature Sharmoria',
            price: 1850,
            duration: '2 hrs 45 mins',
            description: 'Deep Tissue (60 mins) + Deep Cleanse Facial (60 mins) + Foot Scrub & Massage (45 mins)',
            image: 'images/full-body-massage2.jpeg'
        }
    ],

    waxing: [
        {
            id: 'facial-glow',
            name: 'Facial Glow',
            price: 250,
            duration: '~30 mins',
            description: 'Lip + Chin + Brow Wax (all small facial areas). Full face option upgrade available.',
            image: 'images/face-wax.png'
        },
        {
            id: 'underarm-bikini',
            name: 'Underarm & Bikini Essentials',
            price: 400,
            duration: '~40-45 mins',
            description: 'Underarms Wax + Bikini Wax (classic line).',
            image: 'images/armpit-wax.jpeg'
        },
        {
            id: 'brazilian-bliss',
            name: 'Brazilian Bliss',
            price: 550,
            duration: '~55-60 mins',
            description: 'Brazilian Wax + Underarms Wax.',
            image: 'images/brazillian-wax.jpeg'
        },
        {
            id: 'hollywood-experience',
            name: 'Hollywood Experience',
            price: 650,
            duration: '~1 hr',
            description: 'Hollywood Wax (front + back intimate) + Underarms Wax.',
            image: 'images/hollywood-wax.jpeg'
        },
        {
            id: 'legs-glow',
            name: 'Legs & Glow',
            price: 450,
            priceRange: 'R450 - R700',
            duration: '~55 mins - 1 hr 30 mins',
            description: 'Half Leg + Bikini (R450) or Full Leg + Underarms + Bikini (R700)',
            image: 'images/leg-wax.jpeg'
        },
        {
            id: 'arms-torso',
            name: 'Arms & Torso',
            price: 450,
            priceRange: 'R450 - R500',
            duration: '~40-50 mins',
            description: 'Full Arm + Shoulders (R450) or Chest + Abdomen (R500)',
            image: 'images/arm-wax.jpeg'
        },
        {
            id: 'back-booty',
            name: 'Back & Booty Package',
            price: 700,
            duration: '~1 hr 10 mins',
            description: 'Full Back Wax + Buttocks Wax / Butt-Crack Area.',
            image: 'images/back-wax.webp'
        },
        {
            id: 'ultimate-wax',
            name: 'Ultimate Full-Body Wax',
            price: 2300,
            duration: '~3 hrs',
            description: 'Full legs, arms, underarms, bikini/brazilian, full back, buttocks, chest, abdomen — complete hair removal.',
            image: 'images/full-body-wax.jpeg'
        }
    ],

    massage: [
        {
            id: 'head-neck-shoulder',
            name: 'Head, Neck & Shoulder Massage',
            price: 300,
            duration: '30 mins',
            description: 'Targeted relief for upper body tension and stress.',
            image: 'images/neck-shoulder.jpg'
        },
        {
            id: 'hand-arm',
            name: 'Hand & Arm Massage',
            price: 250,
            duration: '30 mins',
            description: 'Soothing massage for tired hands and arms.',
            image: 'images/hand-arm.jpg'
        },
        {
            id: 'foot-scrub',
            name: 'Foot Scrub & Massage',
            price: 400,
            duration: '45 mins',
            description: 'Exfoliating scrub followed by relaxing foot massage.',
            image: 'images/foot-massage.jpg'
        },
        {
            id: 'full-body-60',
            name: 'Full-Body Relaxation (60 mins)',
            price: 650,
            duration: '60 mins',
            description: 'Complete relaxation massage for your entire body.',
            image: 'images/full-body-massage3.jpeg'
        },
        {
            id: 'full-body-90',
            name: 'Full-Body Relaxation (90 mins)',
            price: 900,
            duration: '90 mins',
            description: 'Extended full-body massage for deeper relaxation.',
            image: 'images/relaxation-body.jpeg'
        },
        {
            id: 'deep-tissue-60',
            name: 'Deep Tissue (60 mins)',
            price: 750,
            duration: '60 mins',
            description: 'Therapeutic deep tissue work for muscle tension.',
            image: 'images/deep.jpeg'
        },
        {
            id: 'deep-tissue-90',
            name: 'Deep Tissue (90 mins)',
            price: 1100,
            duration: '90 mins',
            description: 'Extended deep tissue therapy for chronic tension.',
            image: 'images/deep-tissue.jpg'
        },
        {
            id: 'hot-stone-60',
            name: 'Hot Stone (60 mins)',
            price: 800,
            duration: '60 mins',
            description: 'Heated stones for deep muscle relaxation.',
            image: 'images/hot-stone.jpg'
        },
        {
            id: 'hot-stone-90',
            name: 'Hot Stone (90 mins)',
            price: 1150,
            duration: '90 mins',
            description: 'Extended hot stone treatment for ultimate relaxation.',
            image: 'images/stones-massage.jpeg'
        },
        {
            id: 'cupping-therapy',
            name: 'Cupping Therapy',
            price: 800,
            duration: '60 mins',
            description: 'Traditional cupping therapy for circulation and healing.',
            image: 'images/deep-tissue.jpg'
        }
    ],

    facial: [
        {
            id: 'deep-cleanse-facial',
            name: 'Deep Cleanse Facial',
            price: 550,
            duration: '60 mins',
            description: 'Professional facial with cleansing and massage.',
            image: 'images/facial-cleanse.jpeg'
        },
        {
            id: 'specialty-addon',
            name: 'Specialty Massage Add-on',
            price: 150,
            duration: '15-20 mins',
            description: 'Aromatherapy or scalp massage enhancement.',
            image: 'images/facial-treatment.jpg'
        }
    ],

    waxingSingle: [
        { id: 'lip-chin-brow', name: 'Lip / Chin / Brow Wax', price: 100, duration: '~15 mins' },
        { id: 'full-face-wax', name: 'Full Face Wax', price: 300, duration: '~30 mins' },
        { id: 'underarms-wax', name: 'Underarms Wax', price: 200, duration: '~15-20 mins' },
        { id: 'bikini-wax', name: 'Bikini Wax', price: 250, duration: '~25 mins' },
        { id: 'brazilian-wax', name: 'Brazilian Wax', price: 400, duration: '~35-40 mins' },
        { id: 'hollywood-wax', name: 'Hollywood Wax', price: 500, duration: '~45 mins' },
        { id: 'half-leg-wax', name: 'Half Leg Wax', price: 250, duration: '~30 mins' },
        { id: 'full-leg-wax', name: 'Full Leg Wax', price: 500, duration: '~50-60 mins' },
        { id: 'full-arm-wax', name: 'Full Arm Wax', price: 300, duration: '~30 mins' },
        { id: 'chest-wax', name: 'Chest Wax', price: 300, duration: '~20-30 mins' },
        { id: 'abdomen-wax', name: 'Abdomen Wax', price: 250, duration: '~20-30 mins' },
        { id: 'back-wax', name: 'Full Back Wax', price: 450, duration: '~45 mins' },
        { id: 'shoulders-wax', name: 'Shoulders Wax', price: 200, duration: '~15-20 mins' },
        { id: 'buttocks-wax', name: 'Buttocks Wax', price: 300, duration: '~25-30 mins' }
    ]
};

// FAQ Data
const faqData = [
    {
        question: 'What areas do you service?',
        answer: 'We provide mobile massage and spa services throughout Johannesburg and Pretoria. Travel charges apply for clients more than 5km from the city center. For areas outside these regions, please contact us to discuss availability.'
    },
    {
        question: 'What is the minimum booking amount?',
        answer: 'For clients located more than 5km from the city center, we require a minimum booking of R500. You can combine multiple services to meet this minimum. For clients within 5km, there is no minimum booking requirement.'
    },
    {
        question: 'What do I need to prepare for a mobile massage?',
        answer: "Please provide a quiet, private space (preferably a private room) where you won't be disturbed. Our therapist will bring everything else including a professional massage table, fresh linens, premium oils, and warm towels. Please ensure there's enough space to set up the massage table (approximately 2m x 1m)."
    },
    {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 24-48 hours in advance to ensure availability for your preferred time slot. However, we do our best to accommodate same-day bookings when possible. Contact us to check availability.'
    },
    {
        question: 'What are your operating hours?',
        answer: 'Everyday: 9:00 AM - 18:00 PM. We offer flexible appointment times including evening and weekend visits for your convenience.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept both cash and card payments on arrival. Payment is due upon completion of your service.'
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We kindly ask for at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another client. Last-minute cancellations (less than 24 hours) may incur a cancellation fee.'
    },
    {
        question: 'Can I request a specific therapist?',
        answer: "Yes, if you've had a session with one of our therapists and would like to book with them again, please mention this in the notes section when booking or contact us directly. We'll do our best to accommodate your preference subject to availability."
    },
    {
        question: "Do you offer couple's massages?",
        answer: "Yes! We offer a Couple's Escape package that includes simultaneous massages for two people. We'll bring two massage tables and two therapists to your location for the ultimate relaxation experience together."
    },
    {
        question: 'What should I wear during the massage?',
        answer: 'For massages, you can undress to your comfort level. Most clients undress completely and are covered with fresh linens throughout the session, with only the area being worked on exposed. For waxing services, please wear comfortable, loose-fitting clothing.'
    },
    {
        question: 'How long does waxing last?',
        answer: 'Waxing results typically last 3-6 weeks, depending on your hair growth cycle. With regular waxing, many clients find that their hair grows back finer and sparser over time.'
    },
    {
        question: 'Is waxing painful?',
        answer: 'While waxing can cause some discomfort, our experienced therapists use high-quality wax and professional techniques to minimize pain. First-time clients may experience more sensitivity, but most find it becomes easier with regular treatments.'
    },
    {
        question: 'Can I book multiple services in one appointment?',
        answer: "Absolutely! We encourage combining services for a complete spa experience. Our package bundles offer great value for multiple services. You can also create your own custom combination by selecting individual services."
    },
    {
        question: 'Do you offer gift certificates?',
        answer: 'Yes, gift certificates are available for any amount or specific service package. They make perfect gifts for birthdays, anniversaries, or special occasions. Contact us to purchase a gift certificate.'
    }
];
