export interface Question {
  questionNo: number;
  subject: string;
  title: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
  source: string;
}

export const englishTest: Question[] = [
  {
    questionNo: 1,
    subject: "English",
    title: "Neither the teacher nor the students ___ present.",
    options: { A: "is", B: "are", C: "was", D: "has" },
    answer: "B",
    source: "NUMS 2020"
  },
  {
    questionNo: 2,
    subject: "English",
    title: "Each of the boys ___ given a prize.",
    options: { A: "have", B: "are", C: "is", D: "were" },
    answer: "C",
    source: "MDCAT 2021"
  },
  {
    questionNo: 3,
    subject: "English",
    title: "The quality of the mangoes ___ not good.",
    options: { A: "are", B: "were", C: "is", D: "have been" },
    answer: "C",
    source: "CSS 2019"
  },
  {
    questionNo: 4,
    subject: "English",
    title: "Neither of the books ___ interesting.",
    options: { A: "are", B: "were", C: "is", D: "have" },
    answer: "C",
    source: "FPSC 2018"
  },
  {
    questionNo: 5,
    subject: "English",
    title: "The jury ___ divided in their opinions.",
    options: { A: "was", B: "is", C: "are", D: "has" },
    answer: "C",
    source: "PPSC 2020"
  },
  {
    questionNo: 6,
    subject: "English",
    title: "Mathematics ___ a difficult subject for many.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "SPSC 2019"
  },
  {
    questionNo: 7,
    subject: "English",
    title: "Everyone ___ happy with the results.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "MDCAT 2019"
  },
  {
    questionNo: 8,
    subject: "English",
    title: "Ten thousand rupees ___ a big amount.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "NUMS 2021"
  },
  {
    questionNo: 9,
    subject: "English",
    title: "Neither she nor I ___ going.",
    options: { A: "is", B: "are", C: "am", D: "be" },
    answer: "C",
    source: "CSS 2018"
  },
  {
    questionNo: 10,
    subject: "English",
    title: "The data ___ being processed.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "FPSC 2021"
  },
  {
    questionNo: 11,
    subject: "English",
    title: "A bouquet of roses ___ on the table.",
    options: { A: "are", B: "were", C: "is", D: "have been" },
    answer: "C",
    source: "PPSC 2021"
  },
  {
    questionNo: 12,
    subject: "English",
    title: "Either my brother or my sisters ___ going to attend.",
    options: { A: "is", B: "are", C: "has", D: "was" },
    answer: "B",
    source: "SPSC 2021"
  },
  {
    questionNo: 13,
    subject: "English",
    title: "The number of students ___ increasing.",
    options: { A: "are", B: "is", C: "were", D: "have been" },
    answer: "B",
    source: "MDCAT 2022"
  },
  {
    questionNo: 14,
    subject: "English",
    title: "Each of the players ___ wearing a new jersey.",
    options: { A: "were", B: "is", C: "have", D: "are" },
    answer: "B",
    source: "NUMS 2022"
  },
  {
    questionNo: 15,
    subject: "English",
    title: "Either of the answers ___ acceptable.",
    options: { A: "are", B: "were", C: "is", D: "have been" },
    answer: "C",
    source: "CSS 2020"
  },
  {
    questionNo: 16,
    subject: "English",
    title: "The pair of trousers ___ in the cupboard.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "FPSC 2022"
  },
  {
    questionNo: 17,
    subject: "English",
    title: "None of the students ___ failed.",
    options: { A: "has", B: "is", C: "have", D: "was" },
    answer: "C",
    source: "PPSC 2022"
  },
  {
    questionNo: 18,
    subject: "English",
    title: "Either of the books ___ fine.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "SPSC 2022"
  },
  {
    questionNo: 19,
    subject: "English",
    title: "Neither the plates nor the glass ___ clean.",
    options: { A: "is", B: "are", C: "has been", D: "have" },
    answer: "A",
    source: "MDCAT 2016"
  },
  {
    questionNo: 20,
    subject: "English",
    title: "The team ___ winning the match.",
    options: { A: "is", B: "are", C: "were", D: "have" },
    answer: "A",
    source: "MDCAT 2015"
  },
  {
    questionNo: 21,
    subject: "English",
    title: "Either Ali or his friends ___ going to present.",
    options: { A: "is", B: "are", C: "was", D: "has" },
    answer: "B",
    source: "NUMS 2018"
  },
  {
    questionNo: 22,
    subject: "English",
    title: "The group of students ___ waiting outside.",
    options: { A: "are", B: "were", C: "is", D: "be" },
    answer: "C",
    source: "NUMS 2017"
  },
  {
    questionNo: 23,
    subject: "English",
    title: "Politics ___ a tricky subject.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "CSS 2014"
  },
  {
    questionNo: 24,
    subject: "English",
    title: "The news ___ surprising.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "CSS 2013"
  },
  {
    questionNo: 25,
    subject: "English",
    title: "There ___ a number of issues to discuss.",
    options: { A: "is", B: "are", C: "has", D: "was" },
    answer: "B",
    source: "FPSC 2020"
  },
  {
    questionNo: 26,
    subject: "English",
    title: "Each student and each teacher ___",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "FPSC 2017"
  },
  {
    questionNo: 27,
    subject: "English",
    title: "The data ___ accurate.",
    options: { A: "are", B: "is", C: "have been", D: "were" },
    answer: "B",
    source: "PPSC 2019"
  },
  {
    questionNo: 28,
    subject: "English",
    title: "Neither of them ___ responsible.",
    options: { A: "are", B: "is", C: "have been", D: "were" },
    answer: "B",
    source: "PPSC 2018"
  },
  {
    questionNo: 29,
    subject: "English",
    title: "Twenty dollars ___ a high price.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "SPSC 2020"
  },
  {
    questionNo: 30,
    subject: "English",
    title: "None of the books ___ interesting.",
    options: { A: "was", B: "were", C: "has", D: "is" },
    answer: "B",
    source: "SPSC 2018"
  },
  {
    questionNo: 31,
    subject: "English",
    title: "The committee ___ agreed on the issue.",
    options: { A: "have", B: "has", C: "are", D: "is" },
    answer: "B",
    source: "CSS 2012"
  },
  {
    questionNo: 32,
    subject: "English",
    title: "The team members ___ arguing.",
    options: { A: "was", B: "is", C: "are", D: "have" },
    answer: "C",
    source: "MDCAT 2014"
  },
  {
    questionNo: 33,
    subject: "English",
    title: "Either of the books ___ fine with me.",
    options: { A: "are", B: "were", C: "is", D: "have" },
    answer: "C",
    source: "NUMS 2016"
  },
  {
    questionNo: 34,
    subject: "English",
    title: "Each of the players ___ trying their best.",
    options: { A: "were", B: "are", C: "is", D: "have been" },
    answer: "C",
    source: "FPSC 2016"
  },
  {
    questionNo: 35,
    subject: "English",
    title: "The list of names ___ on the desk.",
    options: { A: "is", B: "are", C: "have", D: "were" },
    answer: "A",
    source: "PPSC 2016"
  },
  {
    questionNo: 36,
    subject: "English",
    title: "A number of students ___ absent.",
    options: { A: "was", B: "is", C: "are", D: "has been" },
    answer: "C",
    source: "SPSC 2017"
  },
  {
    questionNo: 37,
    subject: "English",
    title: "Ten miles ___ a long distance.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "CSS 2011"
  },
  {
    questionNo: 38,
    subject: "English",
    title: "Everyone ___ gone home.",
    options: { A: "have", B: "is", C: "has", D: "are" },
    answer: "C",
    source: "MDCAT 2013"
  },
  {
    questionNo: 39,
    subject: "English",
    title: "Each of the animals ___ fed.",
    options: { A: "have been", B: "were", C: "is", D: "has been" },
    answer: "D",
    source: "MDCAT 2012"
  },
  {
    questionNo: 40,
    subject: "English",
    title: "The number of books ___ increasing.",
    options: { A: "are", B: "were", C: "is", D: "have" },
    answer: "C",
    source: "MDCAT 2011"
  },
  {
    questionNo: 41,
    subject: "English",
    title: "The police ___ investigating the matter.",
    options: { A: "is", B: "are", C: "has", D: "was" },
    answer: "B",
    source: "NUMS 2015"
  },
  {
    questionNo: 42,
    subject: "English",
    title: "The information ___ classified.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "FPSC 2015"
  },
  {
    questionNo: 43,
    subject: "English",
    title: "Neither the manager nor the assistants ___ willing to go.",
    options: { A: "is", B: "are", C: "has", D: "have" },
    answer: "B",
    source: "PPSC 2015"
  },
  {
    questionNo: 44,
    subject: "English",
    title: "The furniture ___ new.",
    options: { A: "are", B: "were", C: "is", D: "have been" },
    answer: "C",
    source: "SPSC 2016"
  },
  {
    questionNo: 45,
    subject: "English",
    title: "The majority of the people ___ happy.",
    options: { A: "is", B: "are", C: "was", D: "has" },
    answer: "B",
    source: "CSS 2010"
  },
  {
    questionNo: 46,
    subject: "English",
    title: "Five years ___ a long time to wait.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "B",
    source: "MDCAT 2010"
  },
  {
    questionNo: 47,
    subject: "English",
    title: "The staff ___ working late today.",
    options: { A: "is", B: "are", C: "has", D: "was" },
    answer: "B",
    source: "NUMS 2014"
  },
  {
    questionNo: 48,
    subject: "English",
    title: "Mathematics ___ my favorite subject.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "B",
    source: "FPSC 2014"
  }
];