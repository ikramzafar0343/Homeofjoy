export type StudentStory = {
  readonly id: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly attribution: string;
  readonly body: string;
  readonly videoSrc: string;
  readonly posterSrc: string;
  readonly posterAlt: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly playLabel: string;
};

export const matthewStudentStory: StudentStory = {
  id: "matthew-story",
  eyebrow: "A student story",
  heading: "From the Workshop to the Classroom.",
  attribution: "Matthew · Home of Joy School, Islamabad",
  body: "My name is Matthew. I once worked at a motorcycle mechanic shop where I was treated harshly and often beaten. My life changed when I came to Home of Joy School in Islamabad. I was given the opportunity to study in a safe and caring environment. I worked hard, stayed focused, and proudly finished second in my class. I am deeply grateful to Home of Joy for giving me hope, education, and a brighter future. My journey proves that with love, support, and education, a child can rise from child labor to become a successful student.",
  videoSrc: "/videos/video1.mp4",
  posterSrc: "/images/field/celebration/student-mathew-trophy-certificate.webp",
  posterAlt: "Matthew displaying a trophy and achievement certificate",
  ctaLabel: "Explore Education",
  ctaHref: "/our-work/education",
  playLabel: "Play Matthew’s story",
};

export const qasidStudentStory: StudentStory = {
  id: "qasid-story",
  eyebrow: "A student story",
  heading: "From Child Labour to Classroom Champion.",
  attribution: "Qasid · Home of Joy School",
  body: "My name is Qasid. I used to work in a slipper manufacturing factory and had never been to school. Today, I am studying at Home of Joy School, where I have the opportunity to learn and dream of a better future. Through hard work and God's grace, I stood third in my class. I am deeply grateful to the Lord and to Home of Joy for changing my life through education.",
  videoSrc: "/videos/video2.mp4",
  posterSrc: "/images/field/celebration/student-third-qasid-trophy-medals.webp",
  posterAlt: "Qasid holding a trophy, medals, and a certificate",
  ctaLabel: "Explore Child Labour Prevention",
  ctaHref: "/our-work/child-labour",
  playLabel: "Play Qasid’s story",
};
