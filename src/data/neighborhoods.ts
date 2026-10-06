export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "mottville",
    "name": "Mottville",
    "h1": "Hydro Jetting in Mottville, Skaneateles NY",
    "title": "Hydro Jetting in Mottville, Skaneateles | Skaneateles Hydro Jetting Pros",
    "description": "Hydro jetting in Mottville, Skaneateles NY: how a hamlet named in the town's Northern Hamlets Master Plan plans drain cleaning. Call (877) 761-0283.",
    "intro": "The town identifies Mottville as one of two communities in its Northern Hamlets Master Plan, adopted August 18, 2025. Describe the actual fixtures and drainage connection instead of inferring a pipe problem from the hamlet setting.",
    "heroPs": [
      "Homes in Mottville can develop slow drains from grease, scale or roots, and a hamlet setting does not tell you how a property is connected or what its line looks like. Hydro jetting can clear buildup from a sound sewer line when an inspection shows it is the right method. Describe the affected fixtures and how your property drains."
    ],
    "bodyH2": "Hydro Jetting for Mottville Properties",
    "bodyPs": [
      "The town identifies Mottville as one of the two communities covered by its Northern Hamlets Master Plan, adopted August 18, 2025. A master plan sets direction for a place. It does not describe the condition of any home's drain line.",
      "Hamlet properties can vary in how they handle wastewater. Some may use a public sewer connection and others may not, so the first question is a practical one: how does your property drain? The answer decides what kind of service fits.",
      "For properties on a sewer line, hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. An inspection comes first, and condition decides the method."
    ],
    "considerations": [
      "How the property handles wastewater, sewer or on-site system",
      "Which fixtures are slow and how long the problem has lasted",
      "Trees near the path of the lateral",
      "Where the cleanout or access point is",
      "Any records of past cleanings or repairs",
      "Whether the problem is in the private line or elsewhere"
    ],
    "svcH2": "Hydro Jetting Services in Mottville",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "A kitchen line used heavily can build a grease layer in any setting.",
      "tree-root-intrusions": "Hamlet lots often have mature trees close to buried lines.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing needs a diagnosis, and the connection type matters.",
      "mineral-and-scale-deposits": "Scale can narrow a line over time at bends and joints.",
      "preventative-maintenance": "A planned cleaning after an inspection can catch buildup early."
    },
    "appsH2": "Hydro Jetting Situations in a Small Hamlet",
    "apps": [
      {
        "h": "Knowing how your property drains",
        "ps": [
          "A request starts better when the property type is known. If the home is on an on-site system, jetting a sewer line is not the right tool."
        ]
      },
      {
        "h": "Kitchen lines that back up",
        "ps": [
          "Grease is the usual cause. Jetting strips it from the wall when the pipe can take the pressure."
        ]
      },
      {
        "h": "Roots near the lateral",
        "ps": [
          "Mature trees on a hamlet lot can reach a line. The camera shows whether they have, and jetting can clear them from a sound pipe."
        ]
      },
      {
        "h": "A drain that keeps returning",
        "ps": [
          "A line that has clogged more than once is worth a planned cleaning after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Mottville",
    "implPs": [
      "Small hamlets bring small variations in how properties are served. Sorting that out early keeps the visit simple.",
      "These are the points that shape the work in Mottville."
    ],
    "impl": [
      {
        "h": "Connection decides the method",
        "ps": [
          "Sewer lines and on-site systems are handled differently."
        ],
        "bullets": [
          "Check your records",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Master plan is not a pipe record",
        "ps": [
          "A planning document describes direction, not condition."
        ],
        "bullets": [
          "Rely on inspection for the line",
          "Share any repair records"
        ]
      },
      {
        "h": "Access",
        "ps": [
          "Cleanouts can be hard to find on older lots."
        ],
        "bullets": [
          "Locate yours before the visit",
          "Clear a path to it"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Mottville",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm how the property drains",
        "d": "Check whether the home is on a sewer line, and find the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Mottville, Skaneateles NY",
    "mapIntro": "Skaneateles Hydro Jetting Pros takes requests in Mottville and across Skaneateles. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Mottville, Skaneateles, NY",
    "mapTitle": "Map of Mottville, Skaneateles, NY",
    "nearbyH2": "Serving Mottville and Nearby Skaneateles Neighborhoods",
    "nearbyP": "Skaneateles Hydro Jetting Pros serves Mottville and the rest of Skaneateles, including Skaneateles Falls. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Mottville",
    "faqs": [
      {
        "q": "Does the Northern Hamlets Master Plan say anything about my pipes?",
        "a": "No. It is a planning document and not a record of any private line."
      },
      {
        "q": "How do I know whether jetting applies to my home?",
        "a": "It applies to sewer lines. If you are not sure how your property drains, check records or ask the town, and tell the crew."
      },
      {
        "q": "Why does my drain keep slowing?",
        "a": "Buildup may be returning, or roots may be growing back. A camera can tell which."
      },
      {
        "q": "Can hydro jetting clear roots?",
        "a": "On a sound pipe, yes. The entry point may still need repair."
      },
      {
        "q": "What should I tell the crew when I call?",
        "a": "List the affected fixtures, when it started, and how your property drains."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Mottville Hydro Jetting Project With Skaneateles Hydro Jetting Pros",
    "ctaPs": [
      "A hamlet setting tells you where you are and not what your line looks like. A clear account of the property and the symptoms gets the inspection started well.",
      "Use the request form on this page or call (877) 761-0283 to tell us about your property."
    ]
  },
  {
    "slug": "skaneateles-falls",
    "name": "Skaneateles Falls",
    "h1": "Hydro Jetting in Skaneateles Falls, Skaneateles NY",
    "title": "Hydro Jetting in Skaneateles Falls, Skaneateles | Skaneateles Hydro Jetting Pros",
    "description": "Hydro jetting in Skaneateles Falls, Skaneateles NY: planning drain cleaning in a hamlet named in the town's Northern Hamlets Master Plan. Call (877) 761-0283.",
    "intro": "The town identifies Skaneateles Falls alongside Mottville in its Northern Hamlets Master Plan. Planning for growth is not evidence that a private sewer is damaged, original or connected to a particular public system.",
    "heroPs": [
      "Homes in Skaneateles Falls can develop slow drains from grease, scale or roots, and a planned-growth area does not tell you what a private line looks like. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe the affected fixtures and confirm how your property is connected."
    ],
    "bodyH2": "Hydro Jetting for Skaneateles Falls Properties",
    "bodyPs": [
      "The town identifies Skaneateles Falls alongside Mottville in its Northern Hamlets Master Plan. A plan for the future of a place does not describe what is in the ground at any one address.",
      "Planning for growth can lead people to assume that an area's sewer is either new or stretched. Neither assumption is safe for a private lateral. The line from your home to the connection has its own age, material and condition, and those come from records and an inspection.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. It clears an obstruction and does not repair damage, so the inspection should tell you plainly which one you are dealing with."
    ],
    "considerations": [
      "Whether the property is connected to a public sewer",
      "Which fixtures are slow and how long the problem has lasted",
      "Any past cleanings, repairs or replaced sections",
      "Trees near the path of the lateral",
      "Where the cleanout or access point is",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Skaneateles Falls",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "Kitchen grease hardens in a line regardless of how an area is planned.",
      "tree-root-intrusions": "Roots can reach a lateral wherever trees stand near it.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing needs a diagnosis.",
      "mineral-and-scale-deposits": "Scale narrows a line slowly and builds at joints.",
      "preventative-maintenance": "A planned cleaning after an inspection can catch buildup early."
    },
    "appsH2": "Hydro Jetting Situations in a Planned-Growth Hamlet",
    "apps": [
      {
        "h": "Newer and older homes side by side",
        "ps": [
          "A hamlet that is growing can have homes of very different ages. Share your home's age and any known repairs."
        ]
      },
      {
        "h": "Confirming the connection",
        "ps": [
          "If a property is not on a public sewer, jetting a sewer line is not the right tool. Confirm first."
        ]
      },
      {
        "h": "Kitchen buildup",
        "ps": [
          "Grease is the usual cause of a kitchen backup. Jetting strips it from the wall when the pipe can take it."
        ]
      },
      {
        "h": "Planned upkeep",
        "ps": [
          "A line that has clogged before is worth a planned cleaning after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Skaneateles Falls",
    "implPs": [
      "Growth plans can make a place feel new while the pipes underneath keep their own timelines.",
      "These are the points that shape the work in Skaneateles Falls."
    ],
    "impl": [
      {
        "h": "Plans are not pipe records",
        "ps": [
          "A master plan describes direction, not condition."
        ],
        "bullets": [
          "Rely on inspection for the line",
          "Share any repair records"
        ]
      },
      {
        "h": "Know your connection",
        "ps": [
          "Public sewer and on-site systems are handled differently."
        ],
        "bullets": [
          "Check your records",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Jetting clears an obstruction and does not mend damage."
        ],
        "bullets": [
          "Ask what the camera shows",
          "Plan for a repair assessment if advised"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Skaneateles Falls",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm the connection",
        "d": "Check whether the home connects to a public sewer, and find the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Skaneateles Falls, Skaneateles NY",
    "mapIntro": "Skaneateles Hydro Jetting Pros takes requests in Skaneateles Falls and across Skaneateles. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Skaneateles Falls, Skaneateles, NY",
    "mapTitle": "Map of Skaneateles Falls, Skaneateles, NY",
    "nearbyH2": "Serving Skaneateles Falls and Nearby Skaneateles Neighborhoods",
    "nearbyP": "Skaneateles Hydro Jetting Pros serves Skaneateles Falls and the rest of Skaneateles, including Mottville. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Skaneateles Falls",
    "faqs": [
      {
        "q": "Does growth planning say anything about my line?",
        "a": "No. It describes direction for an area, not the condition of a private pipe."
      },
      {
        "q": "How do I know if my home is on a public sewer?",
        "a": "Check records or ask the town. A crew can help identify it during an inspection."
      },
      {
        "q": "Why does my drain keep slowing?",
        "a": "Buildup or roots may be returning. A camera inspection tells which."
      },
      {
        "q": "Can hydro jetting clear roots?",
        "a": "On a sound pipe, yes. The entry point may still need repair."
      },
      {
        "q": "Is hydro jetting right for every home?",
        "a": "No. The crew should check the line first and tell you whether the method fits."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Skaneateles Falls Hydro Jetting Project With Skaneateles Hydro Jetting Pros",
    "ctaPs": [
      "A growing hamlet can look new from the street and still have a lateral with its own history. A clear account of the symptoms gets the inspection pointed in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
