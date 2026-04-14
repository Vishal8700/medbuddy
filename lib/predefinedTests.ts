export interface PredefinedTest {
  id: string
  title: string
  subject: string
  url: string
}

export const predefinedTests: PredefinedTest[] = [
  // Biology
  { id: 'bio_1', title: 'Biology Paper 1', subject: 'Biology', url: 'https://www.mdcatpk.com/mcq/sample/bio_sample1_js.php' },
  { id: 'bio_2', title: 'Biology Paper 2', subject: 'Biology', url: 'https://www.mdcatpk.com/mcq/sample/bio_sample2_js.php' },
  { id: 'bio_3', title: 'Biology Paper 3', subject: 'Biology', url: 'https://www.mdcatpk.com/mcq/sample/bio_sample3_js.php' },
  { id: 'bio_4', title: 'Biology Paper 4', subject: 'Biology', url: 'https://www.mdcatpk.com/mcq/sample/bio_sample4_js.php' },
  { id: 'bio_5', title: 'Biology Paper 5', subject: 'Biology', url: 'https://www.mdcatpk.com/mcq/sample/bio_sample5_js.php' },
  // Chemistry
  { id: 'chm_1', title: 'Chemistry Paper 1', subject: 'Chemistry', url: 'https://www.mdcatpk.com/mcq/sample/chm_sample1_js.php' },
  { id: 'chm_2', title: 'Chemistry Paper 2', subject: 'Chemistry', url: 'https://www.mdcatpk.com/mcq/sample/chm_sample2_js.php' },
  { id: 'chm_3', title: 'Chemistry Paper 3', subject: 'Chemistry', url: 'https://www.mdcatpk.com/mcq/sample/chm_sample3_js.php' },
  { id: 'chm_4', title: 'Chemistry Paper 4', subject: 'Chemistry', url: 'https://www.mdcatpk.com/mcq/sample/chm_sample4_js.php' },
  { id: 'chm_5', title: 'Chemistry Paper 5', subject: 'Chemistry', url: 'https://www.mdcatpk.com/mcq/sample/chm_sample5_js.php' },
  // Physics
  { id: 'phy_1', title: 'Physics Paper 1', subject: 'Physics', url: 'https://www.mdcatpk.com/mcq/sample/phy_sample1_js.php' },
  { id: 'phy_2', title: 'Physics Paper 2', subject: 'Physics', url: 'https://www.mdcatpk.com/mcq/sample/phy_sample2_js.php' },
  { id: 'phy_3', title: 'Physics Paper 3', subject: 'Physics', url: 'https://www.mdcatpk.com/mcq/sample/phy_sample3_js.php' },
  { id: 'phy_4', title: 'Physics Paper 4', subject: 'Physics', url: 'https://www.mdcatpk.com/mcq/sample/phy_sample4_js.php' },
  { id: 'phy_5', title: 'Physics Paper 5', subject: 'Physics', url: 'https://www.mdcatpk.com/mcq/sample/phy_sample5_js.php' },
  // English
  { id: 'eng_1', title: 'English Paper 1', subject: 'English', url: 'https://www.mdcatpk.com/mcq/sample/eng_sample1_js.php' },
  { id: 'eng_2', title: 'English Paper 2', subject: 'English', url: 'https://www.mdcatpk.com/mcq/sample/eng_sample2_js.php' },
  { id: 'eng_3', title: 'English Paper 3', subject: 'English', url: 'https://www.mdcatpk.com/mcq/sample/eng_sample3_js.php' },
  // Logical Reasoning
  { id: 'logic_1', title: 'Logical Reasoning Paper 1', subject: 'Logical Reasoning', url: 'https://www.mdcatpk.com/mcq/sample/logic_sample1_js.php' },
  { id: 'logic_2', title: 'Logical Reasoning Paper 2', subject: 'Logical Reasoning', url: 'https://www.mdcatpk.com/mcq/sample/logic_sample2_js.php' },
  
  // MCQ Universe Practice
  { id: 'mcu_phy', title: 'Physics Practice MCQs (MCQ Universe)', subject: 'Physics', url: 'https://www.mcquniverse.pk/mdcat-physics-practice-mcqs-online/' },
  { id: 'mcu_bio', title: 'Biology Practice MCQs (MCQ Universe)', subject: 'Biology', url: 'https://www.mcquniverse.pk/mdcat-biology-practice-mcqs/' },
  { id: 'mcu_eng', title: 'English Practice MCQs (MCQ Universe)', subject: 'English', url: 'https://www.mcquniverse.pk/mdcat-english-practice-mcqs/' },
  { id: 'mcu_chm', title: 'Chemistry Practice MCQs (MCQ Universe)', subject: 'Chemistry', url: 'https://www.mcquniverse.pk/mdcat-chemistry-mcqs-full-practice-tests/' },
]

export const testSubjects = ['All', 'Biology', 'Chemistry', 'Physics', 'English', 'Logical Reasoning']
