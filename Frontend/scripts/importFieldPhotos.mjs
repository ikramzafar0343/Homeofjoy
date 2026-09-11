/**
 * One-shot importer: originals → kebab-case WebP under public/images/field,
 * plus curated copies into sections/ and gallery/. Does not touch founder.png.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const assetsDir =
  "C:\\Users\\HP\\.cursor\\projects\\c-Users-HP-Desktop-HomeOfJoyWelfareFoundation\\assets";
const publicImages = path.resolve("public/images");
const fieldRoot = path.join(publicImages, "field");

/** @type {Array<{basename: string, category: string, name: string, alt: string}>} */
const catalog = [
  // Batch 1 — school / recent
  { basename: "IMG_20250112_161615", category: "education", name: "girls-harmonium-music-lesson", alt: "Male instructor teaches young women harmonium in an alphabet-decorated classroom." },
  { basename: "IMG_20250112_161616", category: "education", name: "harmonium-music-class-circle", alt: "Girls sit in a circle learning harmonium with an instructor in a colorful classroom." },
  { basename: "IMG_20250112_161622", category: "education", name: "boys-tabla-music-lesson", alt: "Boys gather around an instructor during a tabla music lesson in a decorated classroom." },
  { basename: "IMG_20250903_161258", category: "disaster", name: "carrying-relief-supplies-through-flood", alt: "People wade through floodwater carrying large white relief sacks on their heads." },
  { basename: "IMG_20250904_125929", category: "disaster", name: "flood-relief-aid-distribution", alt: "Group receives food sacks and envelopes beside a flooded field during disaster relief." },
  { basename: "IMG_20250312_074606", category: "celebration", name: "annual-result-day-schoolboys", alt: "Schoolboys with head boy and prefect sashes stand beside an Annual Result Day display board." },
  { basename: "IMG_20250312_074608", category: "celebration", name: "annual-result-day-uniform-students", alt: "Uniformed schoolboys pose with an Annual Result Day trophy poster outdoors." },
  { basename: "IMG_20250312_074612", category: "celebration", name: "annual-result-day-student-leaders", alt: "Students in uniform with head boy and prefect sashes at an Annual Result Day board." },
  { basename: "IMG-20250328-WA0024", category: "education", name: "children-learning-yellow-table", alt: "Young students read workbooks around a yellow table in a decorated classroom." },
  { basename: "IMG-20250328-WA0025", category: "education", name: "boys-displaying-classroom-artwork", alt: "Four boys in uniform show colored star and fruit drawings at a red table." },
  { basename: "IMG-20250328-WA0027", category: "education", name: "children-showing-textbooks-circle-table", alt: "Children at a blue table proudly display English and pear workbook pages." },
  { basename: "IMG-20250328-WA0029", category: "education", name: "preschoolers-classroom-red-table", alt: "Young children with school supplies sit at a red classroom table with calendar wall decals." },
  { basename: "IMG-20250328-WA0030", category: "education", name: "students-showing-star-artwork", alt: "Three students display colored star and fruit work beside an English Primer textbook." },
  { basename: "IMG-20250328-WA0031", category: "education", name: "girls-showing-cotton-painting-work", alt: "Three girls hold cotton-painting pear worksheets and star sheets at a blue table." },
  { basename: "IMG-20250227-WA0020", category: "education", name: "children-ring-toss-school-courtyard", alt: "Children play ring toss in a school courtyard with a Pakistani flag and back-to-school posters." },
  { basename: "IMG-20250227-WA0022", category: "celebration", name: "balloon-cup-game-courtyard", alt: "Two boys compete blowing balloons into cups at an outdoor school celebration watched by a crowd." },
  { basename: "IMG-20250227-WA0023", category: "education", name: "girl-ball-toss-back-to-school", alt: "Girl throws a ball into a basket during a back-to-school play activity in a courtyard." },
  { basename: "IMG-20250410-WA0061", category: "education", name: "children-at-apple-shaped-table", alt: "Uniformed children gather at an apple-shaped table viewing an educational fruit booklet." },
  { basename: "IMG-20250411-WA0036", category: "care", name: "school-children-communal-lunch", alt: "A large group of uniformed children eat a communal lunch on a red carpet in a school courtyard." },
  { basename: "IMG-20250411-WA0037", category: "care", name: "school-children-communal-meal", alt: "Dozens of uniformed children eat a shared meal on a red carpet in a school courtyard." },
  { basename: "IMG-20250418-WA0011", category: "education", name: "classroom-children-alphabet-posters", alt: "Young students work at colorful desks in an alphabet-decorated classroom." },
  { basename: "IMG-20250418-WA0015", category: "education", name: "children-workbooks-red-table", alt: "Children in uniforms work on worksheets around a red classroom table." },
  { basename: "IMG-20250418-WA0019", category: "education", name: "coloring-at-apple-table", alt: "Eight children color flower worksheets at an apple-shaped red classroom table." },
  { basename: "IMG-20250419-WA0083", category: "education", name: "home-of-joy-school-exterior", alt: "Home of Joy School building with arched entrance sign and security gate under a blue sky." },
  { basename: "IMG-20250419-WA0086", category: "education", name: "home-of-joy-school-building-front", alt: "Exterior view of Home of Joy School with foundation flag and gated entrance." },
  { basename: "IMG-20250228-WA0030", category: "education", name: "children-writing-clipboards-classroom", alt: "Students in uniforms write on clipboards at a yellow table with a teacher nearby." },
  { basename: "IMG-20250329-WA0001", category: "celebration", name: "student-third-qasid-trophy-medals", alt: "Boy in uniform holds a third-place Qasid trophy, medals, and a star certificate." },
  { basename: "IMG-20250329-WA0003", category: "celebration", name: "student-mathew-trophy-certificate", alt: "Boy Mathew displays a gold trophy and star-decorated achievement certificate." },
  { basename: "IMG-20241008-WA0018", category: "education", name: "children-yellow-table-classroom", alt: "Group of children sit around a yellow table in a classroom with Urdu alphabet charts." },
  { basename: "IMG-20250120-WA0016", category: "education", name: "orange-themed-learning-activity", alt: "Children wear orange headbands and hold orange drawings during an O is for Orange activity." },
  // Batch 2 — outreach / rural / workshops
  { basename: "IMG-20210708-WA0211", category: "education", name: "youth-literacy-workshop-swat-kalam", alt: "Group attends a Discipleship and Literacy Youth Workshop in a pine forest beneath a Swat Kalam banner." },
  { basename: "IMG-20210706-WA0043", category: "education", name: "workshop-pastors-presenting-banner", alt: "Two men stand before a literacy youth workshop banner while one gestures and speaks." },
  { basename: "IMG-20210708-WA0183", category: "education", name: "outdoor-workshop-forest-camp", alt: "Young adults take notes during an outdoor workshop seated on rugs in a pine forest campsite." },
  { basename: "FB_IMG_1744802723190", category: "outreach", name: "brick-kiln-community-gathering", alt: "A speaker addresses women and children seated on rugs at a brick kiln outreach site." },
  { basename: "8e85b937-75d8-46f5-a28c-d56e631cfee9", category: "outreach", name: "toy-distribution-under-canopy", alt: "A volunteer distributes toys to children and women gathered under a red patterned canopy." },
  { basename: "IMG-20210710-WA0010", category: "community", name: "youth-activity-pine-forest-camp", alt: "Young men gather for an outdoor activity near a camping tent in a sunlit pine forest." },
  { basename: "FB_IMG_1626441685557", category: "outreach", name: "man-holding-child-aid-shelter", alt: "A smiling man holds a young child during aid distribution inside a rustic community shelter." },
  { basename: "IMG-20210713-WA0028", category: "community", name: "men-circle-meeting-floor", alt: "Seven men sit in a circle on the floor for a community meeting and discussion." },
  { basename: "FB_IMG_1692525048122", category: "outreach", name: "carrying-food-aid-sacks", alt: "People carry large white food-aid sacks during an outdoor relief distribution." },
  { basename: "IMG-20210710-WA0003", category: "education", name: "forest-educational-gathering", alt: "A group listens to a man holding a blue book in a sunny pine forest clearing." },
  { basename: "IMG-20210706-WA0124", category: "education", name: "discipleship-literacy-workshop-whiteboard", alt: "An instructor leads a Discipleship and Literacy Youth Workshop using a whiteboard outdoors." },
  { basename: "ecd5ac36-5077-4372-ad3b-0e73fc081423", category: "celebration", name: "children-toy-distribution-canopy", alt: "Children joyfully hold new toys and blue balls during a gift event under a red canopy." },
  { basename: "FB_IMG_1744802720749", category: "community", name: "outdoor-community-meeting-rugs", alt: "A large group of women and children participate in an outdoor community meeting on patterned rugs." },
  { basename: "IMG-20210708-WA0210", category: "education", name: "forest-workshop-presenter-board", alt: "An instructor leads an educational workshop for seated participants in a pine forest camp." },
  { basename: "IMG-20221023-WA0081", category: "care", name: "two-children-holding-hands-portrait", alt: "A young boy and girl stand together holding hands in an indoor portrait on a red carpet." },
  { basename: "IMG-20230822-WA0071", category: "disaster", name: "burned-electrical-meter-fire", alt: "A man stands beside a melted electrical meter hanging by charred wires after a fire." },
  { basename: "IMG-20230822-WA0052", category: "disaster", name: "man-in-fire-damaged-room", alt: "A man stands in a soot-blackened room with burnt belongings following a house fire." },
  { basename: "IMG-20230822-WA0099", category: "disaster", name: "fire-damage-building-debris", alt: "A man stands before a fire-scorched building and twisted metal debris while others look on." },
  { basename: "IMG-20210713-WA0029", category: "community", name: "community-meeting-note-taking", alt: "Men sit in a circle during a community meeting while one participant takes notes." },
  { basename: "IMG-20230822-WA0072", category: "disaster", name: "charred-electrical-box-doorway", alt: "A man inspects a severely burned electrical box hanging by charred wires in a scorched doorway." },
  { basename: "20180727_114505", category: "outreach", name: "children-eating-outdoor-meal", alt: "Children and women eat a shared meal outdoors on dusty ground in a rural area." },
  { basename: "20180727_114507", category: "outreach", name: "children-sharing-meal-plate", alt: "Children sit together sharing food from a metal plate during a foundation outreach meal." },
  { basename: "DSCN0408", category: "outreach", name: "man-visiting-children-rural-village", alt: "A man crouches smiling with children before thatched-roof huts in a rural village." },
  { basename: "DSCN0497", category: "outreach", name: "grain-aid-distribution-sindhi-women", alt: "A volunteer hands a bag of grain to a woman in traditional Sindhi dress during outreach." },
  { basename: "DSCN0401", category: "community", name: "volunteers-rural-village-huts", alt: "Children and volunteers stand before traditional thatched-roof huts in a rural village." },
  { basename: "20180727_112453", category: "community", name: "gathering-under-tree-speakers", alt: "A large group of men, women, and children gather under a tree listening to two speakers." },
  { basename: "DSCN0403", category: "outreach", name: "volunteer-with-boys-thatched-hut", alt: "A man in a Sindhi cap stands with boys and seated families outside a thatched hut." },
  { basename: "20180727_114357", category: "care", name: "man-serving-rice-to-children", alt: "A man serves rice from a bucket to children seated in a circle outdoors." },
  { basename: "DSCN0500", category: "outreach", name: "handing-aid-package-woman", alt: "A volunteer hands a wrapped relief package to a woman during an outreach distribution." },
  { basename: "DSCN0499", category: "outreach", name: "embroidered-cloth-distribution", alt: "A man hands an embroidered garment to a woman wearing traditional blue clothing and white bangles." },
  { basename: "20180725_123715", category: "care", name: "woman-caring-for-child-food", alt: "A woman in blue traditional dress smiles at a toddler in her lap while they share food." },
  { basename: "20180725_123722", category: "outreach", name: "community-gathering-veiled-woman-child", alt: "A woman in a red veil with silver bangles sits with a toddler and others on a mat during outreach." },
  { basename: "20180727_112536", category: "outreach", name: "village-meeting-under-tree", alt: "A foundation member speaks to villagers gathered under a tree beside a thatched hut." },
  { basename: "20180727_114132", category: "outreach", name: "children-sharing-meal-rural-village", alt: "Children and women share a meal from communal plates in a rural village setting." },
  { basename: "20180727_114138", category: "outreach", name: "communal-meal-rural-gathering", alt: "A large group of women and children eat together outdoors during a rural outreach meal." },
  { basename: "20180727_114415", category: "care", name: "serving-food-children-circle", alt: "A man ladles food from a bucket to children seated in a circle on sandy ground." },
  { basename: "20180727_114456", category: "community", name: "children-sharing-communal-meal", alt: "Four children share a meal from a large metal platter on a village courtyard floor." },
  { basename: "20180727_114457", category: "outreach", name: "four-children-communal-meal", alt: "Four children eat together from a communal silver platter during an outdoor outreach meal." },
  { basename: "20180727_114502", category: "care", name: "children-sharing-rice-platter", alt: "Children sit on the ground sharing rice from a large communal metal plate in a rural setting." },
  { basename: "DSCN0498", category: "outreach", name: "relief-package-thatched-hut", alt: "A man hands a large wrapped relief package to a woman outside a traditional thatched hut." },
  { basename: "DSCN0505", category: "outreach", name: "rural-outreach-thatched-hut-group", alt: "A man and women in traditional dress gather outside a thatched hut during a rural outreach visit." },
  { basename: "DSCN0506", category: "outreach", name: "man-women-traditional-sindhi-hut", alt: "A man poses with three veiled women in colorful Sindhi dress before a thatched dwelling." },
  { basename: "DSCN0512", category: "outreach", name: "man-women-bangles-thatched-hut", alt: "A man and three women in traditional Sindhi attire with white bangles stand before a straw hut." },
  { basename: "IMG-20220426-WA0020", category: "care", name: "two-girls-brick-courtyard", alt: "Two barefoot girls stand in a sunlit brick courtyard with laundry drying on a line." },
  // Screenshot lockscreen skipped — not a field photo for the site
  { basename: "signal-2022-08-23-06-35-28-898", category: "education", name: "girls-school-uniform-backpacks", alt: "Two smiling girls in navy school uniforms with orange backpacks stand by a wooden door." },
  { basename: "signal-2022-08-30-19-03-58-596", category: "outreach", name: "ration-distribution-mud-wall", alt: "Volunteers distribute white supply bags to community members beside a mud-brick wall." },
  { basename: "signal-2022-08-31-18-07-42-533-1", category: "disaster", name: "relief-distribution-truck-crowd", alt: "Volunteers distribute relief supplies from a truck to a large waiting crowd." },
  { basename: "signal-2023-08-30-18-23-48-083", category: "outreach", name: "yellow-sack-distribution-truck", alt: "A man in a truck bed hands a large yellow aid sack to recipients during a distribution." },
  { basename: "signal-2023-08-30-18-23-59-409", category: "outreach", name: "aid-distribution-van-crowd", alt: "A coordinator records names as aid is distributed from a vehicle to a waiting crowd." },
  { basename: "signal-2023-08-30-18-24-06-120-1", category: "outreach", name: "bedding-distribution-truck", alt: "A truck loaded with quilts and charpai frames distributes household supplies to families." },
  { basename: "signal-2023-08-30-18-24-06-120-3", category: "outreach", name: "flour-sack-distribution-truck", alt: "A man hands a large flour sack labeled Pakistan from a truck during food aid outreach." },
  { basename: "signal-2023-09-22-19-50-29-047-1", category: "education", name: "teacher-whiteboard-children-carpet", alt: "A female teacher instructs children seated on a red carpet beside a classroom whiteboard." },
];

/** Curated aliases → field relative path (category/name.webp) */
const sectionAliases = {
  "sections/hero.webp": "education/home-of-joy-school-exterior.webp",
  "sections/education.webp": "education/children-learning-yellow-table.webp",
  "sections/orphanage.webp": "care/school-children-communal-meal.webp",
  "sections/child-protection.webp": "care/two-children-holding-hands-portrait.webp",
  "sections/evangelism.webp": "education/discipleship-literacy-workshop-whiteboard.webp",
  "sections/community.webp": "disaster/carrying-relief-supplies-through-flood.webp",
  "sections/faith.webp": "education/outdoor-workshop-forest-camp.webp",
  "gallery/children-smiling.webp": "community/children-sharing-communal-meal.webp",
  "gallery/community-event.webp": "community/outdoor-community-meeting-rugs.webp",
  "gallery/school-building.webp": "education/home-of-joy-school-building-front.webp",
};

function toLongPath(p) {
  const resolved = path.resolve(p);
  if (process.platform === "win32" && !resolved.startsWith("\\\\?\\")) {
    return `\\\\?\\${resolved}`;
  }
  return resolved;
}

function findSource(basename) {
  const files = fs.readdirSync(assetsDir);
  const match = files.find(
    (f) =>
      f.includes(`_${basename}-`) ||
      f.includes(`_${basename}.`) ||
      f.includes(`_${basename}__`) ||
      f.startsWith(`${basename}-`) ||
      f.includes(`images_${basename}-`),
  );
  if (!match) return null;
  const full = toLongPath(path.join(assetsDir, match));
  try {
    fs.accessSync(full);
    return full;
  } catch {
    return null;
  }
}

async function writeWebp(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
}

async function main() {
  const results = [];
  const missing = [];

  for (const entry of catalog) {
    const src = findSource(entry.basename);
    if (!src) {
      missing.push(entry.basename);
      continue;
    }
    const dest = path.join(fieldRoot, entry.category, `${entry.name}.webp`);
    if (fs.existsSync(dest)) {
      results.push({
        ...entry,
        src: path.basename(src),
        dest: `/images/field/${entry.category}/${entry.name}.webp`,
        skipped: true,
      });
      process.stdout.write(`skip ${entry.name}\n`);
      continue;
    }
    try {
      await writeWebp(src, dest);
      results.push({
        ...entry,
        src: path.basename(src),
        dest: `/images/field/${entry.category}/${entry.name}.webp`,
      });
      process.stdout.write(`ok ${entry.name}\n`);
    } catch (err) {
      missing.push(`${entry.basename} (${err.message})`);
      process.stdout.write(`fail ${entry.name}\n`);
    }
  }

  for (const [alias, fieldRel] of Object.entries(sectionAliases)) {
    const src = path.join(fieldRoot, fieldRel);
    const dest = path.join(publicImages, alias);
    if (!fs.existsSync(src)) {
      missing.push(`alias:${alias}`);
      continue;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    // Keep .jpg names working during transition: also write .jpg as webp bytes is wrong —
    // instead remove old stock jpgs after content update.
    process.stdout.write(`alias ${alias}\n`);
  }

  const catalogOut = path.resolve("public/images/field/catalog.json");
  fs.writeFileSync(
    catalogOut,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: results.length,
        photos: results,
        sectionAliases,
      },
      null,
      2,
    ),
  );

  // Remove obsolete stock JPEGs (founder.png kept)
  const obsoleteJpgs = [
    "sections/hero.jpg",
    "sections/education.jpg",
    "sections/orphanage.jpg",
    "sections/child-protection.jpg",
    "sections/evangelism.jpg",
    "sections/community.jpg",
    "sections/faith.jpg",
    "gallery/children-smiling.jpg",
    "gallery/community-event.jpg",
    "gallery/school-building.jpg",
  ];
  for (const rel of obsoleteJpgs) {
    const p = path.join(publicImages, rel);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  console.log(`\nImported ${results.length} photos. Missing: ${missing.length}`);
  if (missing.length) console.log(missing.join("\n"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
