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

export const pyqTest: Question[] = [
  // ==========================================
  // BIOLOGY
  // ==========================================
  {
    questionNo: 1,
    subject: "Biology",
    title: "The protein coat of a virus is called?",
    options: { A: "Capsid", B: "Envelope", C: "Nucleoid", D: "Core" },
    answer: "",
    source: "KIPS Basic Module"
  },
  {
    questionNo: 2,
    subject: "Biology",
    title: "HIV primarily attacks which cells?",
    options: { A: "B-cells", B: "T-helper cells", C: "Platelets", D: "Macrophages" },
    answer: "",
    source: "STAR Module 2021"
  },
  {
    questionNo: 3,
    subject: "Biology",
    title: "AIDS stands for?",
    options: { A: "Acute Immune Deficiency Syndrome", B: "Acquired Immune Deficiency Syndrome", C: "Acquired Immunity Defect System", D: "Auto Immune Disease Syndrome" },
    answer: "",
    source: "KIPS Past Paper 2019"
  },
  {
    questionNo: 4,
    subject: "Biology",
    title: "Which of the following is an RNA virus?",
    options: { A: "Adenovirus", B: "Retrovirus", C: "Poxvirus", D: "Herpesvirus" },
    answer: "",
    source: "PMC Sample 2020"
  },
  {
    questionNo: 5,
    subject: "Biology",
    title: "Virus without capsid is known as?",
    options: { A: "Viroid", B: "Prion", C: "Bacteriophage", D: "Mycovirus" },
    answer: "",
    source: "KIPS Notes"
  },
  {
    questionNo: 6,
    subject: "Biology",
    title: "The genetic material of most bacteriophages is?",
    options: { A: "Single-stranded DNA", B: "Double-stranded DNA", C: "RNA", D: "Protein" },
    answer: "",
    source: "KIPS Easy Test"
  },
  {
    questionNo: 7,
    subject: "Biology",
    title: "AIDS is caused by?",
    options: { A: "HBV", B: "HIV", C: "HCV", D: "HPV" },
    answer: "",
    source: "STAR Basic Questions"
  },
  {
    questionNo: 8,
    subject: "Biology",
    title: "Which of the following is not living?",
    options: { A: "Virus", B: "Bacteria", C: "Fungi", D: "Protozoa" },
    answer: "",
    source: "KIPS Conceptual MCQS"
  },
  {
    questionNo: 9,
    subject: "Biology",
    title: "A capsomere is?",
    options: { A: "Unit of capsid", B: "Viral genome", C: "Viral envelope", D: "Viral enzyme" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 10,
    subject: "Biology",
    title: "Which organelle do viruses lack?",
    options: { A: "Mitochondria", B: "Nucleus", C: "Ribosome", D: "All of these" },
    answer: "",
    source: "KIPS MDCAT Basics"
  },
  {
    questionNo: 11,
    subject: "Biology",
    title: "Reverse transcriptase is present in?",
    options: { A: "Retrovirus", B: "Poxvirus", C: "Adenovirus", D: "Herpesvirus" },
    answer: "",
    source: "KIPS 2018"
  },
  {
    questionNo: 12,
    subject: "Biology",
    title: "Host specificity of a virus is determined by?",
    options: { A: "Nucleic acid", B: "Capsid proteins", C: "Host genome", D: "Viral enzymes" },
    answer: "",
    source: "STAR Basic"
  },
  {
    questionNo: 13,
    subject: "Biology",
    title: "Which virus causes polio?",
    options: { A: "Adenovirus", B: "Poliovirus", C: "Poxvirus", D: "Retrovirus" },
    answer: "",
    source: "KIPS 2020"
  },
  {
    questionNo: 14,
    subject: "Biology",
    title: "Which one is an acellular agent?",
    options: { A: "Virus", B: "Bacteria", C: "Algae", D: "Protozoa" },
    answer: "",
    source: "KIPS Fundamentals"
  },
  {
    questionNo: 15,
    subject: "Biology",
    title: "HIV genome is?",
    options: { A: "dsDNA", B: "SSDNA", C: "SSRNA", D: "dsRNA" },
    answer: "",
    source: "STAR Past Test"
  },
  {
    questionNo: 16,
    subject: "Biology",
    title: "Name of the viral DNA integrated into host genome?",
    options: { A: "Prophage", B: "Capsomere", C: "Viroid", D: "Oncogene" },
    answer: "",
    source: "KIPS Module"
  },
  {
    questionNo: 17,
    subject: "Biology",
    title: "Influenza is caused by?",
    options: { A: "Retrovirus", B: "Orthomyxovirus", C: "Herpesvirus", D: "Paramyxovirus" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 18,
    subject: "Biology",
    title: "What is the shape of tobacco mosaic virus?",
    options: { A: "Icosahedral", B: "Helical", C: "Complex", D: "Spherical" },
    answer: "",
    source: "KIPS Old Test"
  },
  {
    questionNo: 19,
    subject: "Biology",
    title: "Viruses are inert outside?",
    options: { A: "Host cell", B: "Nucleus", C: "Ribosome", D: "Cytoplasm" },
    answer: "",
    source: "KIPS Basics"
  },
  {
    questionNo: 20,
    subject: "Biology",
    title: "Which protein binds to host cell receptors?",
    options: { A: "gp41", B: "gp120", C: "Integrase", D: "Protease" },
    answer: "",
    source: "STAR 2017"
  },
  {
    questionNo: 21,
    subject: "Biology",
    title: "In the lysogenic cycle, viral DNA?",
    options: { A: "Replicates freely in cytoplasm", B: "Integrates into host DNA", C: "Is degraded by enzymes", D: "Forms capsomeres" },
    answer: "",
    source: "KIPS Conceptual Test"
  },
  {
    questionNo: 22,
    subject: "Biology",
    title: "Enveloped viruses get their envelope from?",
    options: { A: "Host plasma membrane", B: "Viral genome", C: "Ribosomes", D: "Capsomeres" },
    answer: "",
    source: "STAR 2020"
  },
  {
    questionNo: 23,
    subject: "Biology",
    title: "Mode of HIV transmission includes?",
    options: { A: "Airborne droplets", B: "Contaminated needles", C: "Vector bite", D: "Casual contact" },
    answer: "",
    source: "KIPS Past Paper"
  },
  {
    questionNo: 24,
    subject: "Biology",
    title: "What is a prion?",
    options: { A: "Infectious protein", B: "Infectious DNA", C: "Infectious RNA", D: "Bacteriophage" },
    answer: "",
    source: "KIPS MCQ Bank"
  },
  {
    questionNo: 25,
    subject: "Biology",
    title: "What is the role of integrase in HIV?",
    options: { A: "Entry into cell", B: "Integration of viral DNA", C: "Assembly of capsid", D: "Release of virions" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 26,
    subject: "Biology",
    title: "Antigenic variation in viruses occurs due to?",
    options: { A: "Mutation and reassortment", B: "Capsid disassembly", C: "Loss of envelope", D: "Host immunity" },
    answer: "",
    source: "KIPS High Yield"
  },
  {
    questionNo: 27,
    subject: "Biology",
    title: "A lytic cycle leads to?",
    options: { A: "Integration of genome", B: "Rapid cell lysis", C: "Dormancy", D: "Latency" },
    answer: "",
    source: "KIPS Module"
  },
  {
    questionNo: 28,
    subject: "Biology",
    title: "Which viral component helps in attachment?",
    options: { A: "Peplomers", B: "Nucleoid", C: "Integrase", D: "Reverse transcriptase" },
    answer: "",
    source: "STAR Test 2021"
  },
  {
    questionNo: 29,
    subject: "Biology",
    title: "Which enzyme synthesizes DNA from RNA?",
    options: { A: "DNA polymerase", B: "Reverse transcriptase", C: "Ligase", D: "Helicase" },
    answer: "",
    source: "KIPS Practice"
  },
  {
    questionNo: 30,
    subject: "Biology",
    title: "HIV primarily affects which system?",
    options: { A: "Nervous", B: "Immune", C: "Endocrine", D: "Digestive" },
    answer: "",
    source: "KIPS 2019"
  },
  {
    questionNo: 31,
    subject: "Biology",
    title: "Which virus has segmented genome?",
    options: { A: "Influenza virus", B: "Adenovirus", C: "Poxvirus", D: "Retrovirus" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 32,
    subject: "Biology",
    title: "Prophage induction leads to?",
    options: { A: "Lysis of host", B: "Integration of DNA", C: "Inhibition of replication", D: "Capsid formation only" },
    answer: "",
    source: "STAR Tough MCQs"
  },
  {
    questionNo: 33,
    subject: "Biology",
    title: "Viral latency is seen in?",
    options: { A: "Rabies", B: "Herpes", C: "Poliovirus", D: "Influenza" },
    answer: "",
    source: "KIPS Module"
  },
  {
    questionNo: 34,
    subject: "Biology",
    title: "Oncogenic viruses can?",
    options: { A: "Cause tumors", B: "Cause lysis only", C: "Only integrate genome", D: "Remain inactive always" },
    answer: "",
    source: "KIPS High Yield"
  },
  {
    questionNo: 35,
    subject: "Biology",
    title: "Which is true for negative sense RNA virus?",
    options: { A: "Genome acts as mRNA", B: "Needs RNA polymerase", C: "Directly translated", D: "Has no envelope" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 36,
    subject: "Biology",
    title: "Lysogenic cycle ends when?",
    options: { A: "Prophage excises", B: "Cell divides", C: "Envelope forms", D: "Peplomers attach" },
    answer: "",
    source: "KIPS 2021"
  },
  {
    questionNo: 37,
    subject: "Biology",
    title: "Which viral genome integrates into germline?",
    options: { A: "Retroviral", B: "Adenoviral", C: "Polioviral", D: "Rabies viral" },
    answer: "",
    source: "STAR MCQS"
  },
  {
    questionNo: 38,
    subject: "Biology",
    title: "Viroids infect?",
    options: { A: "Plants", B: "Animals", C: "Bacteria", D: "Fungi" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 39,
    subject: "Biology",
    title: "Prions cause?",
    options: { A: "Creutzfeldt-Jakob disease", B: "Influenza", C: "AIDS", D: "Polio" },
    answer: "",
    source: "KIPS Past Papers"
  },
  {
    questionNo: 40,
    subject: "Biology",
    title: "Hemagglutinin is present in?",
    options: { A: "Influenza virus", B: "Herpes virus", C: "Poliovirus", D: "Rabies virus" },
    answer: "",
    source: "STAR 2020"
  },
  {
    questionNo: 41,
    subject: "Biology",
    title: "Viral envelope mainly consists of?",
    options: { A: "Lipids", B: "DNA", C: "Protein only", D: "RNA" },
    answer: "",
    source: "KIPS Fundamental"
  },
  {
    questionNo: 42,
    subject: "Biology",
    title: "Which enzyme in retrovirus converts RNA to DNA?",
    options: { A: "Reverse transcriptase", B: "DNA polymerase", C: "RNA ligase", D: "Primase" },
    answer: "",
    source: "STAR 2021"
  },
  {
    questionNo: 43,
    subject: "Biology",
    title: "Latency in virus means?",
    options: { A: "Active replication", B: "Dormant state", C: "Immediate lysis", D: "Antigenic shift" },
    answer: "",
    source: "KIPS High Yield"
  },
  {
    questionNo: 44,
    subject: "Biology",
    title: "Bacteriophage T4 attaches to?",
    options: { A: "Cell wall of bacteria", B: "Mitochondria", C: "Ribosome", D: "Cytoplasm" },
    answer: "",
    source: "STAR MCQS"
  },
  {
    questionNo: 45,
    subject: "Biology",
    title: "Which virus uses reverse transcription?",
    options: { A: "Retrovirus", B: "Adenovirus", C: "Poliovirus", D: "Rabies" },
    answer: "",
    source: "KIPS Test"
  },
  {
    questionNo: 46,
    subject: "Biology",
    title: "Virus classification is based on?",
    options: { A: "Genome type and symmetry", B: "Host only", C: "Size only", D: "Color" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 47,
    subject: "Biology",
    title: "Which cycle immediately kills host cell?",
    options: { A: "Lytic", B: "Lysogenic", C: "Latent", D: "Persistent" },
    answer: "",
    source: "KIPS Module"
  },
  {
    questionNo: 48,
    subject: "Biology",
    title: "Which is true about capsomeres?",
    options: { A: "Protein subunits", B: "RNA subunits", C: "DNA fragments", D: "Lipid bilayer" },
    answer: "",
    source: "STAR MCQS"
  },
  {
    questionNo: 49,
    subject: "Biology",
    title: "Bacteriophages are viruses that infect?",
    options: { A: "Bacteria", B: "Plants", C: "Animals", D: "Fungi" },
    answer: "",
    source: "KIPS Basics"
  },
  {
    questionNo: 50,
    subject: "Biology",
    title: "Viral spikes are used for?",
    options: { A: "Attachment", B: "Genome replication", C: "Capsid formation", D: "Translation" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 51,
    subject: "Biology",
    title: "Which structure of virus determines host range?",
    options: { A: "Capsid shape", B: "Surface glycoproteins", C: "Genome length", D: "Tail fiber only" },
    answer: "",
    source: "KIPS Conceptual Test"
  },
  {
    questionNo: 52,
    subject: "Biology",
    title: "DNA viruses generally replicate in:",
    options: { A: "Cytoplasm", B: "Nucleus", C: "Mitochondria", D: "Ribosomes" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 53,
    subject: "Biology",
    title: "The term \"virion\" refers to:",
    options: { A: "Incomplete viral particle", B: "Infective viral particle outside host", C: "Host receptor protein", D: "Only genome without capsid" },
    answer: "",
    source: "KIPS Past Paper 2020"
  },
  {
    questionNo: 54,
    subject: "Biology",
    title: "Viral budding results in:",
    options: { A: "Naked viruses", B: "Enveloped viruses", C: "Bacteriophages", D: "Viroids" },
    answer: "",
    source: "STAR Practice Test"
  },
  {
    questionNo: 55,
    subject: "Biology",
    title: "Which stage immediately follows viral adsorption?",
    options: { A: "Uncoating", B: "Penetration", C: "Replication", D: "Release" },
    answer: "",
    source: "KIPS Basic Notes"
  },
  {
    questionNo: 56,
    subject: "Biology",
    title: "Which virus carries reverse transcriptase in its virion?",
    options: { A: "Retrovirus", B: "Adenovirus", C: "Poxvirus", D: "Paramyxovirus" },
    answer: "",
    source: "STAR 2021 Tough MCQs"
  },
  {
    questionNo: 57,
    subject: "Biology",
    title: "Lysogenic conversion results in:",
    options: { A: "Acquisition of new traits by bacteria", B: "Killing of host cell", C: "Immediate genome replication", D: "Formation of viroids" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 58,
    subject: "Biology",
    title: "Which structure allows bacteriophage DNA injection?",
    options: { A: "Tail sheath contraction", B: "Capsid disassembly", C: "Reverse transcriptase", D: "Spike proteins" },
    answer: "",
    source: "STAR 2020 Tough"
  },
  {
    questionNo: 59,
    subject: "Biology",
    title: "Influenza's antigenic drift occurs due to:",
    options: { A: "Minor mutations in HA and NA", B: "Genome segmentation", C: "Integration into host genome", D: "Presence of capsomeres" },
    answer: "",
    source: "KIPS Conceptual Bank"
  },
  {
    questionNo: 60,
    subject: "Biology",
    title: "The eclipse phase of viral replication is when:",
    options: { A: "Virions are assembled", B: "Infective particles are not detectable", C: "Virus is released", D: "Envelope is acquired" },
    answer: "",
    source: "STAR High Yield"
  },
  {
    questionNo: 61,
    subject: "Biology",
    title: "Which viral genome can act directly as mRNA?",
    options: { A: "Positive-sense RNA", B: "Negative-sense RNA", C: "dsDNA", D: "SSDNA" },
    answer: "",
    source: "KIPS Tough Test"
  },
  {
    questionNo: 62,
    subject: "Biology",
    title: "HIV latent reservoirs are found in?",
    options: { A: "Resting memory T cells", B: "Plasma cells", C: "Neutrophils", D: "Macrophages only" },
    answer: "",
    source: "STAR Advanced 2020"
  },
  {
    questionNo: 63,
    subject: "Biology",
    title: "Which step in viral replication is targeted by protease inhibitors?",
    options: { A: "Assembly", B: "Maturation", C: "Entry", D: "Adsorption" },
    answer: "",
    source: "KIPS Advanced Bank"
  },
  {
    questionNo: 64,
    subject: "Biology",
    title: "Segmented genomes allow viruses to?",
    options: { A: "Reassort and evolve rapidly", B: "Avoid host immunity", C: "Produce toxins", D: "Avoid transcription" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 65,
    subject: "Biology",
    title: "A DNA virus replicates in cytoplasm except?",
    options: { A: "Poxvirus", B: "Herpesvirus", C: "Adenovirus", D: "Papillomavirus" },
    answer: "",
    source: "KIPS Tough"
  },
  {
    questionNo: 66,
    subject: "Biology",
    title: "Antigenic shift leads to?",
    options: { A: "Pandemics", B: "Chronic infection", C: "Mutation", D: "No change" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 67,
    subject: "Biology",
    title: "Which virus encodes its own polymerase?",
    options: { A: "RNA viruses", B: "DNA viruses only", C: "Viroids", D: "Prions" },
    answer: "",
    source: "STAR 2021"
  },
  {
    questionNo: 68,
    subject: "Biology",
    title: "Integration of retroviral genome is by?",
    options: { A: "Integrase", B: "Ligase", C: "Helicase", D: "Primase" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 69,
    subject: "Biology",
    title: "Slow virus diseases include?",
    options: { A: "Kuru", B: "Influenza", C: "Polio", D: "Adenovirus" },
    answer: "",
    source: "STAR Past Paper"
  },
  {
    questionNo: 70,
    subject: "Biology",
    title: "Temperate phage genome called?",
    options: { A: "Prophage", B: "Plasmid", C: "Episome", D: "Lytic gene" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 71,
    subject: "Biology",
    title: "Which virus carries oncogenes?",
    options: { A: "Retrovirus", B: "Poliovirus", C: "Orthomyxovirus", D: "Rhabdovirus" },
    answer: "",
    source: "STAR Tough"
  },
  {
    questionNo: 72,
    subject: "Biology",
    title: "Which virus buds from nuclear membrane?",
    options: { A: "Herpesvirus", B: "Poxvirus", C: "Adenovirus", D: "Poliovirus" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 73,
    subject: "Biology",
    title: "Syncytia formation is characteristic of?",
    options: { A: "Paramyxovirus", B: "Retrovirus", C: "Adenovirus", D: "Papillomavirus" },
    answer: "",
    source: "STAR Test"
  },
  {
    questionNo: 74,
    subject: "Biology",
    title: "Zoonotic viruses are?",
    options: { A: "Rabies", B: "Poliovirus", C: "Smallpox", D: "HIV" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 75,
    subject: "Biology",
    title: "Complex symmetry seen in?",
    options: { A: "Poxvirus", B: "Adenovirus", C: "Picornavirus", D: "Orthomyxovirus" },
    answer: "",
    source: "STAR Tough"
  },
  {
    questionNo: 76,
    subject: "Biology",
    title: "Baltimore classification is based on?",
    options: { A: "Genome and replication", B: "Host range", C: "Size", D: "Antigens" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 77,
    subject: "Biology",
    title: "Defective interfering particles are?",
    options: { A: "Mutated viruses", B: "Non-enveloped viruses", C: "Bacteriophages", D: "Oncogenes" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 78,
    subject: "Biology",
    title: "Viral oncogenesis occurs by?",
    options: { A: "Insertional mutagenesis", B: "Spore formation", C: "Antigenic shift", D: "Lysis" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 79,
    subject: "Biology",
    title: "Transducing phages help in?",
    options: { A: "Gene transfer", B: "Translation", C: "Protein folding", D: "DNA repair" },
    answer: "",
    source: "STAR Tough"
  },
  {
    questionNo: 80,
    subject: "Biology",
    title: "Viral uncoating is?",
    options: { A: "Removal of capsid", B: "Genome replication", C: "Release of virions", D: "Integration into host DNA" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 81,
    subject: "Biology",
    title: "Interferons are?",
    options: { A: "Host proteins against viruses", B: "Viral proteins", C: "Bacterial enzymes", D: "Ribosomal factors" },
    answer: "",
    source: "STAR Advanced"
  },

  // ==========================================
  // CHEMISTRY
  // ==========================================
  {
    questionNo: 82,
    subject: "Chemistry",
    title: "Which of the following is an empirical formula?",
    options: { A: "C2H6", B: "C6H6", C: "CH2O", D: "C4H10" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 83,
    subject: "Chemistry",
    title: "Molarity is defined as:",
    options: { A: "Moles of solute / liters of solution", B: "Moles of solute / kg of solvent", C: "Moles of solvent / liters of solution", D: "Moles of solvent / kg of solute" },
    answer: "",
    source: "KIPS Handout"
  },
  {
    questionNo: 84,
    subject: "Chemistry",
    title: "Which gas is collected over water using downward displacement?",
    options: { A: "CO2", B: "SO2", C: "Cl2", D: "H2" },
    answer: "",
    source: "STAR Notes"
  },
  {
    questionNo: 85,
    subject: "Chemistry",
    title: "Avogadro's number is:",
    options: { A: "6.02 x 10^23", B: "3.01 x 10^25", C: "1.60 x 10^-19", D: "8.31 J K-1 mol-1" },
    answer: "",
    source: "KIPS Past Paper 2021"
  },
  {
    questionNo: 86,
    subject: "Chemistry",
    title: "Which of the following is an amphoteric oxide?",
    options: { A: "Na2O", B: "Al2O3", C: "CO2", D: "CaO" },
    answer: "",
    source: "STAR Key MCQS"
  },
  {
    questionNo: 87,
    subject: "Chemistry",
    title: "In a redox reaction, the substance oxidized is the one that:",
    options: { A: "Gains electrons", B: "Loses electrons", C: "Gains protons", D: "Loses protons" },
    answer: "",
    source: "KIPS Basic Notes"
  },
  {
    questionNo: 88,
    subject: "Chemistry",
    title: "The pH of pure water at 25°C is:",
    options: { A: "0", B: "7", C: "14", D: "1" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 89,
    subject: "Chemistry",
    title: "Which element shows variable valency?",
    options: { A: "Sodium", B: "Magnesium", C: "Iron", D: "Helium" },
    answer: "",
    source: "KIPS Conceptual Bank"
  },
  {
    questionNo: 90,
    subject: "Chemistry",
    title: "What is the oxidation state of sulfur in H2SO4?",
    options: { A: "+2", B: "+4", C: "+6", D: "-2" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 91,
    subject: "Chemistry",
    title: "Which law states that volumes of gases at same T and P are in simple ratios?",
    options: { A: "Boyle's Law", B: "Charles' Law", C: "Avogadro's Law", D: "Gay-Lussac's Law of Combining Volumes" },
    answer: "",
    source: "STAR 2022"
  },
  {
    questionNo: 92,
    subject: "Chemistry",
    title: "When HCl gas is dissolved in water it forms:",
    options: { A: "H+ ions only", B: "H3O+ and Cl-", C: "OH- and Cl-", D: "H2 and Cl2" },
    answer: "",
    source: "KIPS Handout"
  },
  {
    questionNo: 93,
    subject: "Chemistry",
    title: "Which is the lightest element?",
    options: { A: "Helium", B: "Hydrogen", C: "Lithium", D: "Beryllium" },
    answer: "",
    source: "STAR Basic"
  },
  {
    questionNo: 94,
    subject: "Chemistry",
    title: "The number of moles in 22 g of CO2 is:",
    options: { A: "0.25 mol", B: "0.50 mol", C: "1.0 mol", D: "2.0 mol" },
    answer: "",
    source: "KIPS Unit Test"
  },
  {
    questionNo: 95,
    subject: "Chemistry",
    title: "Which is not a state function?",
    options: { A: "Internal energy", B: "Enthalpy", C: "Work", D: "Entropy" },
    answer: "",
    source: "STAR MDCAT Tough"
  },
  {
    questionNo: 96,
    subject: "Chemistry",
    title: "In Haber's process, iron acts as:",
    options: { A: "Reactant", B: "Catalyst", C: "Product", D: "Inhibitor" },
    answer: "",
    source: "KIPS Notes"
  },
  {
    questionNo: 97,
    subject: "Chemistry",
    title: "The shape of SF6 molecule is:",
    options: { A: "Octahedral", B: "Tetrahedral", C: "Linear", D: "Trigonal planar" },
    answer: "",
    source: "STAR Advanced"
  },
  {
    questionNo: 98,
    subject: "Chemistry",
    title: "A buffer solution resists change in:",
    options: { A: "Temperature", B: "Pressure", C: "pH", D: "Volume" },
    answer: "",
    source: "KIPS Past Paper"
  },
  {
    questionNo: 99,
    subject: "Chemistry",
    title: "For an exothermic reaction, increasing temperature will:",
    options: { A: "Increase Kc", B: "Decrease Kc", C: "Not affect Kc", D: "Reverse the reaction" },
    answer: "",
    source: "STAR MDCAT 2020"
  },
  {
    questionNo: 100,
    subject: "Chemistry",
    title: "The conjugate base of H2SO4 is:",
    options: { A: "HSO4-", B: "SO4 2-", C: "OH-", D: "H3O+" },
    answer: "",
    source: "KIPS High Yield"
  },
  {
    questionNo: 101,
    subject: "Chemistry",
    title: "Which gas is least soluble in water?",
    options: { A: "HCl", B: "NH3", C: "CO2", D: "O2" },
    answer: "",
    source: "STAR Past Paper"
  },
  {
    questionNo: 102,
    subject: "Chemistry",
    title: "Which of the following is used in nuclear reactors as a moderator?",
    options: { A: "Heavy water", B: "Liquid ammonia", C: "Graphite", D: "Both A and C" },
    answer: "",
    source: "KIPS Test Series"
  },
  {
    questionNo: 103,
    subject: "Chemistry",
    title: "The hybridization of carbon in ethyne (C2H2) is:",
    options: { A: "sp3", B: "sp2", C: "sp", D: "dsp2" },
    answer: "",
    source: "STAR Notes"
  },
  {
    questionNo: 104,
    subject: "Chemistry",
    title: "Which of the following oxides is neutral?",
    options: { A: "CO", B: "SO2", C: "Al2O3", D: "Na2O" },
    answer: "",
    source: "KIPS Conceptual MCQS"
  },
  {
    questionNo: 105,
    subject: "Chemistry",
    title: "Which quantity remains same for isotopes?",
    options: { A: "Mass number", B: "Atomic number", C: "Neutron number", D: "Nucleon number" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 106,
    subject: "Chemistry",
    title: "In van der Waals equation, 'a' accounts for:",
    options: { A: "Molecular volume", B: "Intermolecular attractions", C: "Temperature effect", D: "Pressure effect" },
    answer: "",
    source: "KIPS Advanced Test"
  },
  {
    questionNo: 107,
    subject: "Chemistry",
    title: "Which of the following is not a strong electrolyte?",
    options: { A: "HCl", B: "KNO3", C: "CH3COOH", D: "NaOH" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 108,
    subject: "Chemistry",
    title: "A solution that resists pH change when acid or base is added is:",
    options: { A: "Buffer", B: "Neutral solution", C: "Salt solution", D: "Saturated solution" },
    answer: "",
    source: "KIPS 2021"
  },
  {
    questionNo: 109,
    subject: "Chemistry",
    title: "The oxidation number of oxygen in OF2 is:",
    options: { A: "-2", B: "0", C: "+2", D: "-1" },
    answer: "",
    source: "STAR Test Tough"
  },
  {
    questionNo: 110,
    subject: "Chemistry",
    title: "Which is used to prevent rusting?",
    options: { A: "Galvanization", B: "Melting", C: "Crystallization", D: "Alloying only" },
    answer: "",
    source: "KIPS MDCAT Bank"
  },
  {
    questionNo: 111,
    subject: "Chemistry",
    title: "The unit of rate constant for second order reaction is:",
    options: { A: "mol L-1 s-1", B: "L mol-1 s-1", C: "s-1", D: "L2 mol-2 s-1" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 112,
    subject: "Chemistry",
    title: "Which block of periodic table contains transition elements?",
    options: { A: "s-block", B: "p-block", C: "d-block", D: "f-block" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 113,
    subject: "Chemistry",
    title: "The main component of natural gas is:",
    options: { A: "Methane", B: "Ethane", C: "Butane", D: "Propane" },
    answer: "",
    source: "STAR Notes"
  },
  {
    questionNo: 114,
    subject: "Chemistry",
    title: "When Zn reacts with HCl, the gas evolved is:",
    options: { A: "H2", B: "Cl2", C: "O2", D: "CO2" },
    answer: "",
    source: "KIPS Practice"
  },
  {
    questionNo: 115,
    subject: "Chemistry",
    title: "In ionic bond formation, metals generally:",
    options: { A: "Gain electrons", B: "Share electrons", C: "Lose electrons", D: "None" },
    answer: "",
    source: "STAR Basic"
  },
  {
    questionNo: 116,
    subject: "Chemistry",
    title: "What is the percentage of oxygen in H2O by mass?",
    options: { A: "80%", B: "88.8%", C: "11.2%", D: "50%" },
    answer: "",
    source: "KIPS Past Paper"
  },
  {
    questionNo: 117,
    subject: "Chemistry",
    title: "The energy gap between bonding and antibonding orbitals in O2 leads to:",
    options: { A: "Diamagnetism", B: "Paramagnetism", C: "Non-reactivity", D: "Ionic bonding" },
    answer: "",
    source: "STAR Tough Test"
  },
  {
    questionNo: 118,
    subject: "Chemistry",
    title: "Which of the following is most acidic?",
    options: { A: "H2O", B: "HF", C: "HCl", D: "HBr" },
    answer: "",
    source: "KIPS High Yield Tough"
  },
  {
    questionNo: 119,
    subject: "Chemistry",
    title: "The rate-determining step in a multi-step reaction is:",
    options: { A: "Fastest step", B: "Slowest step", C: "Any step", D: "Equilibrium step" },
    answer: "",
    source: "STAR MDCAT 2021"
  },
  {
    questionNo: 120,
    subject: "Chemistry",
    title: "When Na2O2 reacts with water it forms:",
    options: { A: "NaOH and H2", B: "NaOH and H2O2", C: "Na2O and O2", D: "Na2O and H2" },
    answer: "",
    source: "KIPS Advanced Module"
  },
  {
    questionNo: 121,
    subject: "Chemistry",
    title: "In chromatography, Rf value depends on:",
    options: { A: "Size of column", B: "Solvent and solute interaction", C: "Temperature only", D: "Mass of solute" },
    answer: "",
    source: "STAR MDCAT Past"
  },
  {
    questionNo: 122,
    subject: "Chemistry",
    title: "The bond order of N2- is:",
    options: { A: "3", B: "2.5", C: "2", D: "1.5" },
    answer: "",
    source: "KIPS Advanced Tough"
  },
  {
    questionNo: 123,
    subject: "Chemistry",
    title: "Which halogen has the highest electron affinity?",
    options: { A: "F", B: "Cl", C: "Br", D: "I" },
    answer: "",
    source: "STAR MDCAT 2020"
  },
  {
    questionNo: 124,
    subject: "Chemistry",
    title: "Which acid is used in lead storage batteries?",
    options: { A: "HCl", B: "H2SO4", C: "HNO3", D: "H3PO4" },
    answer: "",
    source: "KIPS Conceptual Tough"
  },
  {
    questionNo: 125,
    subject: "Chemistry",
    title: "The efficiency of a catalyst is expressed by:",
    options: { A: "Activation energy", B: "Selectivity", C: "Turnover number", D: "Half-life" },
    answer: "",
    source: "STAR Advanced MCQS"
  },
  {
    questionNo: 126,
    subject: "Chemistry",
    title: "For a zero-order reaction, half-life is:",
    options: { A: "Proportional to initial concentration", B: "Independent of concentration", C: "Proportional to square of concentration", D: "Inversely proportional to concentration" },
    answer: "",
    source: "KIPS Star Tough"
  },

  // ==========================================
  // PHYSICS
  // ==========================================
  {
    questionNo: 127,
    subject: "Physics",
    title: "The S.I unit of force is:",
    options: { A: "Joule", B: "Pascal", C: "Newton", D: "Watt" },
    answer: "",
    source: "KIPS Basic Notes"
  },
  {
    questionNo: 128,
    subject: "Physics",
    title: "In uniform circular motion, the acceleration is:",
    options: { A: "Tangential", B: "Zero", C: "Centripetal", D: "Random" },
    answer: "",
    source: "STAR Basic MCQs"
  },
  {
    questionNo: 129,
    subject: "Physics",
    title: "A body at rest has:",
    options: { A: "Kinetic energy only", B: "Potential energy only", C: "Both energies", D: "No energy at all" },
    answer: "",
    source: "KIPS Past Paper"
  },
  {
    questionNo: 130,
    subject: "Physics",
    title: "The slope of distance-time graph gives:",
    options: { A: "Velocity", B: "Acceleration", C: "Force", D: "Momentum" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 131,
    subject: "Physics",
    title: "Which quantity is scalar?",
    options: { A: "Velocity", B: "Force", C: "Displacement", D: "Work" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 132,
    subject: "Physics",
    title: "The work done on a body is equal to:",
    options: { A: "Change in potential energy", B: "Change in kinetic energy", C: "Change in mass", D: "Change in velocity only" },
    answer: "",
    source: "STAR 2020"
  },
  {
    questionNo: 133,
    subject: "Physics",
    title: "Acceleration due to gravity at Earth's surface is approximately:",
    options: { A: "9.8 m/s²", B: "8.9 m/s²", C: "10.8 m/s²", D: "6.8 m/s²" },
    answer: "",
    source: "KIPS Unit Test"
  },
  {
    questionNo: 134,
    subject: "Physics",
    title: "SI unit of power is:",
    options: { A: "Joule", B: "Newton", C: "Watt", D: "Coulomb" },
    answer: "",
    source: "STAR Basic"
  },
  {
    questionNo: 135,
    subject: "Physics",
    title: "Which law states F=ma?",
    options: { A: "Newton's First Law", B: "Newton's Second Law", C: "Newton's Third Law", D: "Law of Gravitation" },
    answer: "",
    source: "KIPS Notes"
  },
  {
    questionNo: 136,
    subject: "Physics",
    title: "The momentum of a body is doubled, its kinetic energy becomes:",
    options: { A: "Doubled", B: "Halved", C: "Four times", D: "Same" },
    answer: "",
    source: "STAR MDCAT Past Paper"
  },
  {
    questionNo: 137,
    subject: "Physics",
    title: "A projectile has maximum range when angle of projection is:",
    options: { A: "30°", B: "45°", C: "60°", D: "90°" },
    answer: "",
    source: "KIPS Practice"
  },
  {
    questionNo: 138,
    subject: "Physics",
    title: "Dimension of impulse is same as:",
    options: { A: "Force", B: "Momentum", C: "Velocity", D: "Power" },
    answer: "",
    source: "STAR Module Tough"
  },
  {
    questionNo: 139,
    subject: "Physics",
    title: "The unit of work is equivalent to:",
    options: { A: "N/m", B: "N-m", C: "N/m²", D: "N2-m" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 140,
    subject: "Physics",
    title: "If g is acceleration due to gravity, time of flight of a projectile is:",
    options: { A: "(No equation provided in source)", B: "(No equation provided in source)", C: "(No equation provided in source)", D: "(No equation provided in source)" },
    answer: "",
    source: "STAR Past Test"
  },
  {
    questionNo: 141,
    subject: "Physics",
    title: "Rotational analogue of mass is:",
    options: { A: "Force", B: "Torque", C: "Moment of inertia", D: "Angular momentum" },
    answer: "",
    source: "KIPS Conceptual"
  },
  {
    questionNo: 142,
    subject: "Physics",
    title: "In simple harmonic motion, acceleration is proportional to:",
    options: { A: "Velocity", B: "Displacement", C: "Time", D: "Frequency" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 143,
    subject: "Physics",
    title: "The slope of a velocity-time graph gives:",
    options: { A: "Velocity", B: "Acceleration", C: "Distance", D: "Force" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 144,
    subject: "Physics",
    title: "Power of a lens is measured in:",
    options: { A: "Watts", B: "Joules", C: "Diopters", D: "Newtons" },
    answer: "",
    source: "STAR Optics"
  },
  {
    questionNo: 145,
    subject: "Physics",
    title: "In elastic collisions, which of the following is conserved?",
    options: { A: "Kinetic energy only", B: "Momentum only", C: "Both kinetic energy and momentum", D: "Neither" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 146,
    subject: "Physics",
    title: "In series combination of resistors, the equivalent resistance is:",
    options: { A: "Sum of reciprocals", B: "Sum of individual resistances", C: "Product over sum", D: "Zero" },
    answer: "",
    source: "STAR Circuits"
  },
  {
    questionNo: 147,
    subject: "Physics",
    title: "The magnetic field inside a long solenoid is:",
    options: { A: "Zero", B: "Non-uniform", C: "Uniform", D: "Decreasing" },
    answer: "",
    source: "KIPS Electromagnetism"
  },
  {
    questionNo: 148,
    subject: "Physics",
    title: "Coulomb's law constant k has units:",
    options: { A: "N-m²/C2", B: "N/C", C: "N/m²", D: "C²/m²" },
    answer: "",
    source: "STAR 2021 Tough"
  },
  {
    questionNo: 149,
    subject: "Physics",
    title: "When a body is lifted through height h, work done is:",
    options: { A: "mgh", B: "mg/h", C: "mh/g", D: "qh/m" },
    answer: "",
    source: "KIPS Basic"
  },
  {
    questionNo: 150,
    subject: "Physics",
    title: "A transformer works on the principle of:",
    options: { A: "Coulomb's law", B: "Mutual induction", C: "Photoelectric effect", D: "Lenz's law only" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 151,
    subject: "Physics",
    title: "In a concave mirror, image of object beyond center of curvature is:",
    options: { A: "Virtual and erect", B: "Real, inverted, diminished", C: "Real, inverted, magnified", D: "Virtual, magnified" },
    answer: "",
    source: "KIPS Optics"
  },
  {
    questionNo: 152,
    subject: "Physics",
    title: "The resistance of a wire is inversely proportional to:",
    options: { A: "Length", B: "Cross-sectional area", C: "Resistivity", D: "Temperature" },
    answer: "",
    source: "STAR Module"
  },
  {
    questionNo: 153,
    subject: "Physics",
    title: "Which quantity remains same in series circuit?",
    options: { A: "Current", B: "Voltage", C: "Resistance", D: "Power" },
    answer: "",
    source: "KIPS Past Test"
  },
  {
    questionNo: 154,
    subject: "Physics",
    title: "A body moving in a circle with uniform speed has:",
    options: { A: "Constant velocity", B: "Constant acceleration", C: "Changing velocity but constant speed", D: "Zero acceleration" },
    answer: "",
    source: "STAR Tough"
  },
  {
    questionNo: 155,
    subject: "Physics",
    title: "Time period of a simple pendulum depends on:",
    options: { A: "Mass of bob", B: "Amplitude", C: "Length and g", D: "Both mass and length" },
    answer: "",
    source: "KIPS Conceptual Tough"
  },
  {
    questionNo: 156,
    subject: "Physics",
    title: "In photoelectric effect, stopping potential depends on:",
    options: { A: "Intensity of light", B: "Frequency of light", C: "Distance of source", D: "Work function only" },
    answer: "",
    source: "STAR MDCAT"
  },
  {
    questionNo: 157,
    subject: "Physics",
    title: "If two waves interfere destructively, the resultant amplitude is:",
    options: { A: "Sum of amplitudes", B: "Difference of amplitudes", C: "Product of amplitudes", D: "Zero always" },
    answer: "",
    source: "KIPS Wave Motion"
  },
  {
    questionNo: 158,
    subject: "Physics",
    title: "Efficiency of a Carnot engine depends on:",
    options: { A: "Specific heat of gas", B: "Temperatures of source and sink", C: "Mass of working substance", D: "Pressure of source" },
    answer: "",
    source: "STAR Thermodynamics"
  },
  {
    questionNo: 159,
    subject: "Physics",
    title: "In Lenz's law, the induced current produces:",
    options: { A: "A field supporting the change", B: "A field opposing the change", C: "A constant field", D: "A zero field" },
    answer: "",
    source: "KIPS Tough Test"
  },
  {
    questionNo: 160,
    subject: "Physics",
    title: "Work done in adiabatic process depends on:",
    options: { A: "Heat supplied", B: "Initial and final states", C: "Time taken", D: "Pressure only" },
    answer: "",
    source: "STAR Past Paper"
  },
  {
    questionNo: 161,
    subject: "Physics",
    title: "In a parallel plate capacitor, capacitance is directly proportional to:",
    options: { A: "Distance between plates", B: "Area of plates", C: "Dielectric constant only", D: "Temperature" },
    answer: "",
    source: "KIPS Advanced"
  },
  {
    questionNo: 162,
    subject: "Physics",
    title: "The half-life of a first-order reaction is:",
    options: { A: "Directly proportional to concentration", B: "Inversely proportional to concentration", C: "Independent of concentration", D: "Proportional to square of concentration" },
    answer: "",
    source: "STAR MDCAT Tough"
  },

  // ==========================================
  // ENGLISH
  // ==========================================
  {
    questionNo: 163,
    subject: "English",
    title: "One of the students _____ late today.",
    options: { A: "were", B: "are", C: "is", D: "have" },
    answer: "",
    source: "KIPS English Basic"
  },
  {
    questionNo: 164,
    subject: "English",
    title: "Each of the boys _____ given a prize.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "",
    source: "STAR Grammar Book"
  },
  {
    questionNo: 165,
    subject: "English",
    title: "Neither the manager nor his assistants _____ willing to attend.",
    options: { A: "was", B: "were", C: "have", D: "is" },
    answer: "",
    source: "KIPS English Module"
  },
  {
    questionNo: 166,
    subject: "English",
    title: "The list of items _____ on the table.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "",
    source: "STAR Practice Set"
  },
  {
    questionNo: 167,
    subject: "English",
    title: "Mathematics _____ my favorite subject.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "",
    source: "KIPS Grammar Past Paper"
  },
  {
    questionNo: 168,
    subject: "English",
    title: "The quality of the apples _____ not good.",
    options: { A: "are", B: "is", C: "have", D: "were" },
    answer: "",
    source: "STAR MDCAT English"
  },
  {
    questionNo: 169,
    subject: "English",
    title: "The committee, along with its members, decided to postpone the meeting.",
    options: { A: "have", B: "is", C: "are", D: "were" },
    answer: "",
    source: "KIPS Tough Set"
  },
  {
    questionNo: 170,
    subject: "English",
    title: "The team of experts _____ arriving tomorrow.",
    options: { A: "are", B: "is", C: "were", D: "have" },
    answer: "",
    source: "STAR Advanced English"
  },

  // ==========================================
  // LOGICAL REASONING
  // ==========================================
  {
    questionNo: 179,
    subject: "Logical Reasoning",
    title: "Find the missing letter in the series: A, C, E, G, ?",
    options: { A: "H", B: "I", C: "J", D: "K" },
    answer: "",
    source: "KIPS Reasoning Basic"
  },
  {
    questionNo: 180,
    subject: "Logical Reasoning",
    title: "Complete the series: Z, X, V, T, ?",
    options: { A: "S", B: "R", C: "Q", D: "P" },
    answer: "",
    source: "STAR Reasoning Basics"
  }
];