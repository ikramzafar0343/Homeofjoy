import {
  getWorkAreaBySlug,
  ourWorkAreas,
  type OurWorkArea,
} from "@/features/ourWork/ourWorkAreas";

export type WorkStorySection = {
  readonly heading: string;
  readonly body: string;
};

export type WorkAreaStory = {
  readonly slug: string;
  readonly kicker: string;
  readonly headline: string;
  readonly lead: string;
  readonly sections: readonly WorkStorySection[];
  readonly practiceTitle: string;
  readonly practices: readonly string[];
  readonly closing: string;
  readonly area: OurWorkArea;
};

const storyCopy: Record<
  string,
  Omit<WorkAreaStory, "slug" | "area">
> = {
  education: {
    kicker: "Education",
    headline: "Opening doors through learning",
    lead:
      "We walk with children and families so learning can replace barriers—through classroom support, school encouragement, and steady pathways into opportunity.",
    sections: [
      {
        heading: "Learning where access is limited",
        body:
          "Across Pakistan, many children grow up with limited access to quality education. Home of Joy provides classroom support and school encouragement so girls and boys can grow in knowledge, confidence, and hope—not as a privilege for a few, but as a pathway for those most often left behind.",
      },
      {
        heading: "Classrooms that build confidence",
        body:
          "From workbooks shared around a table to lessons guided at the whiteboard, our education work is practical and relational. Teachers, caregivers, and partners help children show up ready to learn—building habits of curiosity, dignity, and belonging that last beyond a single school day.",
      },
      {
        heading: "A foundation for safer futures",
        body:
          "Education is one of the clearest ways to break cycles of poverty and child labour. When a child can learn and imagine a different tomorrow, families gain a stronger foothold—and communities gain hope that is rooted in real opportunity.",
      },
    ],
    practiceTitle: "How education takes shape",
    practices: [
      "Classroom learning for children with limited access",
      "School encouragement that helps children stay present and motivated",
      "Steady pathways that connect education to protection and hope",
    ],
    closing:
      "When learning becomes possible, hope becomes tangible. Education remains central to our mission: practical support that opens doors for vulnerable children across Pakistan.",
  },
  literacy: {
    kicker: "Literacy Program",
    headline: "Reading and writing that open futures",
    lead:
      "Our literacy program helps children and youth build reading and writing skills through workshops, classroom practice, and encouragement that makes learning feel possible.",
    sections: [
      {
        heading: "Foundational skills that change a life",
        body:
          "Literacy is more than letters on a page. When a child can read and write, doors open to schooling, safer choices, and the confidence to participate in community life. Home of Joy runs literacy work so foundational learning is not left to chance.",
      },
      {
        heading: "Workshops and classroom practice",
        body:
          "From outdoor literacy workshops to whiteboard lessons and clipboard practice in the classroom, our program meets learners where they are. We create space for repetition, encouragement, and the quiet victories that turn unfamiliar letters into usable skill.",
      },
      {
        heading: "Confidence that carries forward",
        body:
          "Literacy strengthens every other part of our mission. Children who can read are better prepared for school, protection pathways, and hope that is grounded in real ability—not only in good intention.",
      },
    ],
    practiceTitle: "How the literacy program works",
    practices: [
      "Reading and writing support for children and youth",
      "Literacy workshops and classroom practice",
      "Encouragement that builds confidence alongside skill",
    ],
    closing:
      "Every learner deserves the chance to read their own future. Our literacy program keeps that promise practical, patient, and close to the communities we serve.",
  },
  orphanage: {
    kicker: "Orphanage",
    headline: "A safe home for every child",
    lead:
      "Children in our orphanage receive shelter, nourishment, clothing, education, medical attention, and the dignity of belonging in a protective home.",
    sections: [
      {
        heading: "Care that feels like family",
        body:
          "Vulnerable children need more than temporary relief. Home of Joy’s orphanage provides safe accommodation and daily care so each child can rest, eat, learn, and grow in a loving environment—where belonging is not conditional, and dignity is never optional.",
      },
      {
        heading: "Daily needs, met with respect",
        body:
          "Food shared in community, clothing that fits the season, and medical attention when it matters: orphanage care is attentive to the whole child. Caregivers walk closely with girls and boys so practical needs are met without stripping away warmth or identity.",
      },
      {
        heading: "Room to grow",
        body:
          "A protective home creates space for education, play, and healing. In courtyard meals and quiet moments of care alike, children experience consistency—the kind of steady presence that helps fear loosen its grip and confidence begin to return.",
      },
    ],
    practiceTitle: "What orphanage care includes",
    practices: [
      "Safe accommodation in a protective, loving environment",
      "Nourishment, clothing, and medical attention",
      "Education and daily belonging for vulnerable children",
    ],
    closing:
      "Every child deserves a place to belong. Through our orphanage, we uphold that promise—one meal, one school day, and one act of compassion at a time.",
  },
  "women-empowerment": {
    kicker: "Women Empowerment & Skills",
    headline: "Skills that strengthen women and families",
    lead:
      "Through skill programs and community presence, we walk with women so they can learn practical abilities, strengthen their households, and step into greater opportunity.",
    sections: [
      {
        heading: "Empowerment rooted in practical skill",
        body:
          "Women carry much of the weight of household survival. Home of Joy’s women empowerment and skill program focuses on practical abilities—creative work, livelihood pathways, and confidence—so women can grow dignity alongside capability.",
      },
      {
        heading: "Learning that supports the household",
        body:
          "Skill sessions and community gatherings create room for women to practice, share, and be seen. Whether through craft-based learning or supportive outreach, the goal is steady: help women gain tools that strengthen both their own futures and the children in their care.",
      },
      {
        heading: "Dignity in every step",
        body:
          "Empowerment is never spectacle. It is respectful presence, useful training, and pathways that honor women’s strength. When women are equipped, families and communities gain resilience that lasts beyond a single distribution day.",
      },
    ],
    practiceTitle: "How the skill program takes shape",
    practices: [
      "Skills training that builds practical ability and confidence",
      "Community support that upholds women’s dignity",
      "Pathways that strengthen households and children’s futures",
    ],
    closing:
      "When women grow in skill and confidence, hope multiplies through the household. Our women empowerment program keeps that work practical, respectful, and lasting.",
  },
  "child-labour": {
    kicker: "Child Labour Prevention",
    headline: "From labour risk toward learning",
    lead:
      "Poverty can push children toward labour. We accompany families and communities toward education, protection, and a safer future.",
    sections: [
      {
        heading: "Walking with families under pressure",
        body:
          "In brick-kiln communities and other high-risk settings, economic pressure can place children in harm’s path. Home of Joy does not lecture from a distance—we walk with families and communities, listening first, then accompanying them toward choices that protect childhood.",
      },
      {
        heading: "Education as a way out",
        body:
          "Prevention means more than rescue language. It means practical pathways into learning, community gatherings that restore dignity, and relationships that help parents see education as possible—even when survival feels urgent.",
      },
      {
        heading: "Safer futures, built together",
        body:
          "When children move from labour risk into classrooms and protective care, hope becomes shared work. Our outreach under trees, in villages, and beside families is slow, relational, and grounded in the conviction that every child deserves a different story.",
      },
    ],
    practiceTitle: "How prevention looks in practice",
    practices: [
      "Presence with families and brick-kiln communities facing labour risk",
      "Encouragement toward education and protective alternatives",
      "Community engagement that upholds dignity while opening safer paths",
    ],
    closing:
      "Breaking the cycle of child labour begins with accompaniment. We stay present so children can leave risk behind and step into learning, protection, and hope.",
  },
  "child-protection": {
    kicker: "Child Protection",
    headline: "Protecting dignity and safety",
    lead:
      "Every child deserves a safe place to grow. Protection means secure care, attentive supervision, and respect for each child’s dignity.",
    sections: [
      {
        heading: "Safety as the first promise",
        body:
          "Protection is the first word in our story arc—and it shapes everything that follows. Girls and boys under foundation care deserve environments where they can play, learn, and rest without fear, with adults who watch carefully and respond with respect.",
      },
      {
        heading: "Supervision with compassion",
        body:
          "Attentive supervision is not control for its own sake. It is presence that notices need, guards dignity, and creates room for childhood: courtyard games, shared joy, and the quiet confidence that comes from knowing someone is looking out for you.",
      },
      {
        heading: "Dignity in every detail",
        body:
          "True protection honors the whole child. From secure care settings to everyday moments of kindness, we treat each girl and boy as worthy of safety—not as a project, but as a person made for hope.",
      },
    ],
    practiceTitle: "What protection looks like",
    practices: [
      "Safe environments for girls and boys under foundation care",
      "Attentive supervision that prioritizes wellbeing",
      "Everyday respect that upholds each child’s dignity",
    ],
    closing:
      "When children are protected, education and hope can take root. Protection remains the ground beneath every other area of our work.",
  },
  evangelism: {
    kicker: "Evangelism & Discipleship",
    headline: "Hope shared through relationship",
    lead:
      "Hope is shared through respectful relationships—supporting missionaries, small groups, and discipleship with compassion at the center.",
    sections: [
      {
        heading: "Faith that serves first",
        body:
          "Home of Joy’s Christian identity is thoughtful and organization-focused. We do not turn care into pressure. Faith shapes the posture of the work—compassion first, presence that listens, and hope offered through relationship rather than force.",
      },
      {
        heading: "Discipleship in community",
        body:
          "We support missionaries, small groups, and church-planting teams as they walk with people across Pakistan. Workshops, literacy gatherings, and outdoor learning spaces become places where encouragement, teaching, and mutual care can grow.",
      },
      {
        heading: "Compassion at the center",
        body:
          "Whether through a whiteboard lesson or a circle gathered for music and prayerful community, discipleship here stays human. The message of Christ is held with humility—always alongside practical love for vulnerable children and families.",
      },
    ],
    practiceTitle: "How this work is carried",
    practices: [
      "Support for missionaries and church-planting teams",
      "Small groups and discipleship rooted in respectful presence",
      "Compassionate relationships that keep service at the center",
    ],
    closing:
      "Hope travels farthest when it travels with dignity. Evangelism and discipleship at Home of Joy remain inseparable from compassionate service.",
  },
  outreach: {
    kicker: "Community & Disaster Outreach",
    headline: "Standing with communities in need",
    lead:
      "When communities face disaster, displacement, or sudden crisis, we respond with practical care that upholds dignity.",
    sections: [
      {
        heading: "Present when crisis arrives",
        body:
          "Floods, displacement, poverty, and sudden emergencies can overwhelm families overnight. Home of Joy responds with practical outreach—relief that meets urgent need while protecting the dignity of every person who receives help.",
      },
      {
        heading: "Aid that honors people",
        body:
          "From carrying supplies through floodwater to distributing food and packages in gathered communities, our outreach is hands-on and relational. We show up where need is greatest, working with partners and local presence across Pakistan.",
      },
      {
        heading: "Care beyond the emergency",
        body:
          "Disaster response is one expression of a wider commitment: standing with marginalized communities when systems fail them. Practical support, protection, and hope remain the measure of whether our presence has mattered.",
      },
    ],
    practiceTitle: "How outreach responds",
    practices: [
      "Practical relief in disasters, displacement, and emergencies",
      "Community support that upholds dignity under pressure",
      "Ongoing presence with families facing critical need",
    ],
    closing:
      "In crisis and in quiet need alike, we choose presence. Community and disaster outreach keeps compassion close to the ground—where hope is most urgently required.",
  },
};

export function getWorkAreaStory(slug: string): WorkAreaStory | undefined {
  const area = getWorkAreaBySlug(slug);
  const copy = storyCopy[slug];
  if (!area || !copy) {
    return undefined;
  }

  return {
    slug,
    area,
    ...copy,
  };
}

export function getAllWorkAreaStories(): readonly WorkAreaStory[] {
  return ourWorkAreas
    .map((area) => getWorkAreaStory(area.slug))
    .filter((story): story is WorkAreaStory => Boolean(story));
}

export const workAreaSlugs = ourWorkAreas.map((area) => area.slug);
