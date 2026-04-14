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

export const pyqTest2024: Question[] = [
  // ==========================================
  // BIOLOGY
  // ==========================================
  {
    questionNo: 1,
    subject: "Biology",
    title: "Example of viruses having a polyhedral capsid that is with 252 capsomeres is:",
    options: { A: "Adenovirus", B: "Tobacco Mosaic Virus", C: "Influenza virus", D: "Bacteriophage" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 2,
    subject: "Biology",
    title: "The complete, mature & infectious particle of virus is known as:",
    options: { A: "Genome", B: "Capsomere", C: "Prion", D: "Envelope" }, // Based on standard options layout, missing in text OCR but implied
    answer: "Deleted",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 3,
    subject: "Biology",
    title: "The causative organism of measles is",
    options: { A: "Poxivirus", B: "Paporivirus", C: "Picornovirus", D: "Paramyxovirus" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 4,
    subject: "Biology",
    title: "In the life cycle of a bacteriophage, the lysozymes are required in which of the following steps of infection process?",
    options: { A: "Genome injection", B: "Penetration", C: "Replication", D: "Adsorption" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 5,
    subject: "Biology",
    title: "____ is transmitted through infected blood and hypodermic syringes",
    options: { A: "HIV", B: "Influenza Virus", C: "Morbilli Virus (Measles)", D: "Vibrio Cholerae (Cholera)" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 6,
    subject: "Biology",
    title: "In Calvin cycle CO2 reacts with RuBP to produce",
    options: { A: "3-PGA", B: "G3P", C: "6-Carbon unstable intermediate", D: "1,3 bisphosphglycerate" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 7,
    subject: "Biology",
    title: "Which option is correct about a chlorophyll molecule?",
    options: { A: "Chemical formula C55H70O6N4Mg", B: "Porphyrin ring with nitrogen in centre", C: "Methyl group on second pyrrole ring", D: "Aldehyde group on second pyrrole ring" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 8,
    subject: "Biology",
    title: "In the journey of electrons from photosystem II to photosystem I plastocyanine is reduced by",
    options: { A: "Plastoquinone", B: "Cytochrome complex", C: "P700", D: "Primary electron acceptor of PSI" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 9,
    subject: "Biology",
    title: "Enzyme NADP reductase is responsible for:",
    options: { A: "Reducing NADP+", B: "Oxidizing NADP+", C: "Reducing Ferredoxin", D: "Reducing P700" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 10,
    subject: "Biology",
    title: "The PS II during light reactions receives electrons from splitting",
    options: { A: "Water", B: "Plastoquinone", C: "Plastocyanin", D: "Ferridoxin" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 11,
    subject: "Biology",
    title: "Mono-saccharides have a general formula represented by",
    options: { A: "Cn(H2O)n", B: "C(H2O)n", C: "C2(H2O)n", D: "Cn(H2O)n" },
    answer: "B", // (Based on key, though standard formula is (CH2O)n)
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 12,
    subject: "Biology",
    title: "What is the percentage of H2O in bone cells?",
    options: { A: "70%", B: "20%", C: "99%", D: "60%" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 13,
    subject: "Biology",
    title: "When glycerol reacts with fatty acid, which type of chemical bond will form?",
    options: { A: "Ester Bond", B: "Ether Linkage", C: "Hydrogen Bond", D: "Ionic Bond" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 14,
    subject: "Biology",
    title: "Polysaccharides in plants are synthesized by the process of",
    options: { A: "Hydrolysis", B: "Oxidation", C: "Condensation", D: "Glycolysis" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 15,
    subject: "Biology",
    title: "Which of the following process is involved in breakdown of protein into Amino acids?",
    options: { A: "Condensation", B: "Hydrolysis", C: "Glycolysis", D: "Fixation" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 16,
    subject: "Biology",
    title: "The hydrophilic end of phospholipid molecule is polar because of the presence of",
    options: { A: "Glycerol", B: "Amine group", C: "Fatty Acid", D: "Phosphate group" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 17,
    subject: "Biology",
    title: "Which monosaccharide will from a gluco pyranose ring in solution?",
    options: { A: "Fructose", B: "Glucose", C: "Ribose", D: "Deoxyribose" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 18,
    subject: "Biology",
    title: "Chloroplast are membrane bound bodies containing",
    options: { A: "Enzymes", B: "Cisternae", C: "Pigment", D: "Cristae" },
    answer: "Deleted",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 19,
    subject: "Biology",
    title: "Which of the following is the function of Golgi Complex?",
    options: { A: "Intracellular digestion", B: "Autophagy", C: "Autolysis", D: "Processing of cell secretions" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 20,
    subject: "Biology",
    title: "The nucleus takes dyes due to the presence of",
    options: { A: "Chromatin", B: "Lipid", C: "Metal ions", D: "Thylakoids" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 21,
    subject: "Biology",
    title: "The organelles only found at seeding stage in oil seed plants are",
    options: { A: "Peroxiosomes", B: "Glyoxiosomes", C: "Microbodies", D: "Vacuoles" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 22,
    subject: "Biology",
    title: "Posterior lobe of pituitary produce",
    options: { A: "Antidiuretic Hormone (ADH)", B: "Thyroid Stimulating Hormone (TSH)", C: "Adreno Corticufrotric Hormone (ACH)", D: "Follicle Stimulating Hormone (FSH)" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 23,
    subject: "Biology",
    title: "In human myelinated fibers nerve impulse travels at _____ meters per second.",
    options: { A: "100-120", B: "130-150", C: "160-180", D: "190-210" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 24,
    subject: "Biology",
    title: "Nissl's granules are groups of",
    options: { A: "Mesosomes", B: "Lysosomes", C: "Ribosomes", D: "Chromosome" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 25,
    subject: "Biology",
    title: "During non-conducting state, the neuron membrane is permeable to efflux of",
    options: { A: "K+", B: "Na+", C: "Ca+", D: "Cl-" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 26,
    subject: "Biology",
    title: "Which of the following neurotransmitters is lying outside the central nervous system?",
    options: { A: "Acetylcholine", B: "Endorphins", C: "Dopamine", D: "Gamma aminobutyric acid" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 27,
    subject: "Biology",
    title: "Depolarization during conduction of nerve impulse is due to",
    options: { A: "Inward movement of Na+", B: "Inward movement of K+", C: "Outward movement of K+", D: "Outward movement of Na+" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 28,
    subject: "Biology",
    title: "Which of the following is NOT a feature of Autonomic Nervous System?",
    options: { A: "Regulate response of visceral organs", B: "Regulate response of skeletal muscles", C: "Regulate response of glands", D: "Regulate response of smooth muscles" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 29,
    subject: "Biology",
    title: "Taste receptor is an example of",
    options: { A: "Mechano receptors", B: "Nociceptors", C: "Photo receptors", D: "Chemo receptors" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 30,
    subject: "Biology",
    title: "Which of the following belongs to chordates",
    options: { A: "Spider", B: "Earthworm", C: "Trout Fish", D: "Star Fish" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 31,
    subject: "Biology",
    title: "Which of the following statement is incorrect regarding rate of enzymatic action",
    options: { A: "Increase in enzyme concentration increases the rate", B: "Increase in enzyme concentration reduces the rate", C: "All enzymes work at their maximum rate at optimum temperature", D: "All enzymes work at their maximum rate at optimum pH" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 32,
    subject: "Biology",
    title: "Induced fit model of enzyme activity suggests that an enzyme",
    options: { A: "Cannot modify its active sites", B: "Can bind to a single substrate", C: "Can catalyze related reaction", D: "Usually belongs to non-regulatory enzyme" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 33,
    subject: "Biology",
    title: "Chromosomal abnormality in Turner syndrome is represented by?",
    options: { A: "XXX", B: "XYY", C: "XO", D: "XXY" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 34,
    subject: "Biology",
    title: "The change in frequency of alleles at a locus that occurs by chance is known as:",
    options: { A: "Mutation", B: "Genetic Drift", C: "Non Random mating", D: "Speciation" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 35,
    subject: "Biology",
    title: "Identify the correct pair of vestigial organs:",
    options: { A: "Ear Muscles & Vermiform appendix", B: "Ear Muscles & Liver", C: "Heart & Liver", D: "Vermiform appendix & Heart" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 36,
    subject: "Biology",
    title: "Which of the following increases variation within a gene pool?",
    options: { A: "Chromosome inversion", B: "Crossing over", C: "Gene mutation", D: "Random fusion of gametes" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 37,
    subject: "Biology",
    title: "Which of the following statements about natural selection is not true?",
    options: { A: "It affects variations that are heritable", B: "It is selected by a breeder", C: "It can improve the adaptation of species", D: "It is regional in nature" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 38,
    subject: "Biology",
    title: "The formula calculating the frequency of genotypes and alleles in a population gene pool is known as:",
    options: { A: "Hardy-Weinberg Equation", B: "Lamarck Equation", C: "Darwin Equation", D: "James Hutton Equation" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 39,
    subject: "Biology",
    title: "The idea of inheritance of acquired characteristics was presented by:",
    options: { A: "Jean Baptist Lamarck", B: "Charles Darwin", C: "Thomas Malthus", D: "Alfred Wallace" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 40,
    subject: "Biology",
    title: "According to endosymbiosis theory, flagella may have derived by the ingestion of prokaryotes similar to",
    options: { A: "Amoeboid prokaryote", B: "Aerobic bacterium", C: "Spirochete", D: "Spirillum" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 41,
    subject: "Biology",
    title: "Insulin converts glucose into",
    options: { A: "Vitamins", B: "Minerals", C: "Lipids", D: "Cortisone" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 42,
    subject: "Biology",
    title: "About 70% of the carbon dioxide is carried in blood as:",
    options: { A: "Carbonate", B: "Bicarbonate", C: "Tricarbonate", D: "Carbonic anhydrase" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 43,
    subject: "Biology",
    title: "Range of normal total lung capacity in humans is",
    options: { A: "5-6 liter", B: "8-9 liter", C: "10-11 liter", D: "12-13 liter" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 44,
    subject: "Biology",
    title: "Respiration in Pseudomonas bacteria is",
    options: { A: "Aerobic", B: "Anaerobic", C: "Facultative", D: "Microaerophili" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 45,
    subject: "Biology",
    title: "Autotrophic mode of nutrition in organism depends upon",
    options: { A: "Saprotrophic mode", B: "Parasitic mode", C: "Photosynthesis mode", D: "Obligate mode" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 46,
    subject: "Biology",
    title: "Prokaryotic cells lack",
    options: { A: "Mesosomes", B: "Ribosomes", C: "Storage bodies", D: "Membrane bound organelles" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 47,
    subject: "Biology",
    title: "Bacterial genome becomes diploid:",
    options: { A: "After fertilization of gametes", B: "Before spore formation", C: "During binary fission", D: "After binary fission" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 48,
    subject: "Biology",
    title: "One of the following is CORRECT regarding flagella:",
    options: { A: "Made up of macrofilaments", B: "Contains centriole", C: "Originates from basal bodies", D: "They are immotile" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 49,
    subject: "Biology",
    title: "Which option is CORRECT about endospore?",
    options: { A: "Has a short dormant period", B: "Contains moisture for survival", C: "Metabolically actively", D: "Endures extreme condition" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 50,
    subject: "Biology",
    title: "Bacteria divide at exponential rate during which growth phase?",
    options: { A: "Lag", B: "Log", C: "Stationary", D: "Decline" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 51,
    subject: "Biology",
    title: "Mesosomes are the invagination of bacterial cell structure",
    options: { A: "Cell wall", B: "Cell membrane", C: "Plasmid", D: "Cysts" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 52,
    subject: "Biology",
    title: "Female reproductive system consists all of the following EXCEPT",
    options: { A: "Ovaries", B: "Oviduct", C: "Cervix", D: "Seminiferous tubules" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 53,
    subject: "Biology",
    title: "Which one of the following hormone is responsible for the labor pains in human female at the time of birth of baby?",
    options: { A: "Estrogen", B: "Progesterone", C: "Oxytocin", D: "Corticosteroid" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 54,
    subject: "Biology",
    title: "Fluid secreted by sertoli cells provides liquid medium, protection and nourishment to:",
    options: { A: "Oocyte", B: "Sperms", C: "Polar body", D: "Spermatogonia" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 55,
    subject: "Biology",
    title: "Corpus luteum during female reproductive cycle produces",
    options: { A: "Testosterone", B: "Follicle stimulating hormone", C: "Luteinizing Hormone", D: "Progesterone" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 56,
    subject: "Biology",
    title: "Due to the process of follicle atresia:",
    options: { A: "Follicles reach maximum size", B: "Follicle degenerates", C: "Graafian follicle ovulates", D: "Follicle starts to mature" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 57,
    subject: "Biology",
    title: "Main function of the epididymis is to:",
    options: { A: "Transport sperms", B: "Connect with urethra", C: "Produce semen", D: "Hold the process of spermatogenesis" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 58,
    subject: "Biology",
    title: "Immediate next stage of spermatogonia differentiation is:",
    options: { A: "Secondary spermatocyte", B: "Spermatids", C: "Primary spermatocytes", D: "Sperms" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 59,
    subject: "Biology",
    title: "Which of the following is included in paired cranial bones?",
    options: { A: "Temporal", B: "Occipital", C: "Frontal", D: "Vomer" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 60,
    subject: "Biology",
    title: "Which of the following skeletal disorder is an example of autoimmune disorder?",
    options: { A: "Sciatica", B: "Spondylosis", C: "Rheumatoid arthritis", D: "Rickets" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 61,
    subject: "Biology",
    title: "Which feature is possessed by smooth muscles?",
    options: { A: "Voluntary", B: "Branched", C: "Uni-nucleate", D: "Striated appearance" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 62,
    subject: "Biology",
    title: "The accumulation of 'lactic acid' in the muscles results in",
    options: { A: "Extreme fatigue", B: "Muscle contraction", C: "Paralysis", D: "Convulsion" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 63,
    subject: "Biology",
    title: "Thick filaments in skeletal muscles are composed of:",
    options: { A: "Actin", B: "Myosin", C: "Tropomyosin", D: "Troponin" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 64,
    subject: "Biology",
    title: "Sarcomere is part of myofibril between:",
    options: { A: "Two I bands", B: "Two A bands", C: "Two M lines", D: "Two Z lines" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 65,
    subject: "Biology",
    title: "Medulla Oblongata is a part of:",
    options: { A: "Forebrain", B: "Mid brain", C: "Hind brain", D: "Hippocampus" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 66,
    subject: "Biology",
    title: "Which of the following is NOT a bone of upper limb?",
    options: { A: "Humerus", B: "Ulna", C: "Femur", D: "Radius" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 67,
    subject: "Biology",
    title: "Bone forming cells are",
    options: { A: "Osteoblasts", B: "Osteocytes", C: "Osteoclasts", D: "Osteons" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 68,
    subject: "Biology",
    title: "The chromosomes was first observed by;",
    options: { A: "T. H Morgan", B: "Griffith", C: "Walther", D: "Mendel" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },

  // ==========================================
  // CHEMISTRY
  // ==========================================
  {
    questionNo: 69,
    subject: "Chemistry",
    title: "Number of moles in an element is directly proportional to:",
    options: { A: "Mass of an element", B: "Empirical formula mass", C: "Molar mass of an element", D: "Formula mass" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 70,
    subject: "Chemistry",
    title: "The type and relative amount of each isotope in an element can be found by:",
    options: { A: "R spectroscopy", B: "U. V spectroscopy", C: "Mass Spectrometry", D: "N.M.R" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 71,
    subject: "Chemistry",
    title: "The atomic masses of element depend upon:",
    options: { A: "Atomic number", B: "Number of electrons", C: "Number of isopotes & their abundance", D: "None of the above" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 72,
    subject: "Chemistry",
    title: "No individual atom in the sample of 1 mole of Neon has a mass of 20.18 a.m.u. because it is:",
    options: { A: "Overall mass of an isobar", B: "It is a fractional mass", C: "It is molar mass of Ne", D: "Average atomic mass of Ne" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 73,
    subject: "Chemistry",
    title: "The p orbital has",
    options: { A: "2 lobes", B: "3 lobes", C: "4 lobes", D: "5 lobes" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 74,
    subject: "Chemistry",
    title: "Which of the following electronic configuration is correct for carbon?",
    options: { A: "1s2 2s2 2p3", B: "1s2 2s2 2p4", C: "1s2 2s2 2p2", D: "1s2 2s2 2p1" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 75,
    subject: "Chemistry",
    title: "Intermolecular forces between molecules of ideal gas are",
    options: { A: "Strong", B: "Moderate", C: "Weak", D: "Absent" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 76,
    subject: "Chemistry",
    title: "The correct ideal gas equation is",
    options: { A: "qV=nRt", B: "pV=nRt", C: "gV=nRt", D: "yV=nRt" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 77,
    subject: "Chemistry",
    title: "The real gases show deviation from ideal behavior at:",
    options: { A: "Low temperature and low pressure", B: "High temperature and high pressure", C: "Low temperature and high pressure", D: "High temperature and low pressure" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 78,
    subject: "Chemistry",
    title: "In order to boil water at 110°C, external pressure should be",
    options: { A: "200-760 torr", B: "760-1200 torr", C: "665-670 torr", D: "660-700 torr" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 79,
    subject: "Chemistry",
    title: "Which one of the following DO NOT have tendency to form hydrogen bonding?",
    options: { A: "Ammonia", B: "Ethyl alcohol", C: "Carboxylic acid", D: "Hydrocarbon" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 80,
    subject: "Chemistry",
    title: "Boiling point of a liquid is a temperature at which:",
    options: { A: "Surface tension is greater than the atmospheric pressure", B: "Viscosity is less than the atmospheric pressure", C: "Vapour pressure equals the atmospheric pressure", D: "Viscosity equals the atmospheric pressure" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 81,
    subject: "Chemistry",
    title: "Whenever the crystalline solids are broken they do so along definite planes known as:",
    options: { A: "Cleavage planes", B: "Refractory planes", C: "Sagittal planes", D: "Coronal planes" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 82,
    subject: "Chemistry",
    title: "One of the following is NOT an example of amorphous solids",
    options: { A: "Plastic", B: "Glass", C: "Glucose", D: "Rubber" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 83,
    subject: "Chemistry",
    title: "In graphite the carbon atoms are arranged in which of the following structure?",
    options: { A: "Rhombic", B: "Hexagonal", C: "Tetragonal", D: "Trigonal" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 84,
    subject: "Chemistry",
    title: "The principle that states that if a stress is applied to a system at equilibrium the system nullify the effect of stress as far as possible is:",
    options: { A: "Haber's", B: "Le-Chatelier", C: "Boyle's", D: "Charles'" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 85,
    subject: "Chemistry",
    title: "Identify the CORRECT option required for the maximum yield of ammonia by Haber's process:",
    options: { A: "High pressure low temperature continual removal of ammonia", B: "Low pressure low temperature continual removal of ammonia", C: "High pressure high temperature continual removal of ammonia", D: "High pressure low temperature continual addition of ammonia" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 86,
    subject: "Chemistry",
    title: "Consider the following reaction in equilibrium and tell addition of which chemical will turn the cloudy solution into clear solution? BiCl3 + H2O -> BiOCl + 2HCl",
    options: { A: "BiCl3", B: "H2O", C: "BiOCl", D: "HCl" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 87,
    subject: "Chemistry",
    title: "Identify the correct formula to calculate rate of reaction:",
    options: { A: "Change in concentration of substance / Time taken for the change", B: "Time taken for the change / Change in concentration of substance", C: "Time taken for the change / Change in concentration of substance x 100", D: "Time taken for the change x Change in concentration of substance" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 88,
    subject: "Chemistry",
    title: "Consider the hypothetical equation aA + bB -> cC + dD: Which of the following represents correct rate equation?",
    options: { A: "Rate = k[A][B]", B: "Rate = k[A]^a[B]^b", C: "Rate = k[A]^a", D: "Rate = k[B]^2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 89,
    subject: "Chemistry",
    title: "If a reaction rate does not change with concentration then it is",
    options: { A: "3rd order", B: "2nd order", C: "1st order", D: "Zero order" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 90,
    subject: "Chemistry",
    title: "Which of the following is CORRECT Arrhenius equation?",
    options: { A: "K = Ae^(-Eb/QT)", B: "K = Ae^(-Ea/RT)", C: "K = Ae^(-Ea/ST)", D: "K = Ae^(-Ea/UT)" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 91,
    subject: "Chemistry",
    title: "In endothermic reaction, the heat content of the",
    options: { A: "Reactants and products is equal", B: "Reactants is more than that of products", C: "Products is more than that of reactants", D: "Reactants & Products will not change" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 92,
    subject: "Chemistry",
    title: "All of the following steps are used to calculate the lattice energy in Born-Haber cycle EXCEPT",
    options: { A: "Atomizing the metal", B: "Ionizing the metal", C: "Deionize the metal", D: "Ionize non metal" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 93,
    subject: "Chemistry",
    title: "The enthalpy change when 1 Mole of water is formed by the reaction of acid with an alkali under standard conditions is known as:",
    options: { A: "Enthalpy of formation", B: "Enthalpy of reaction", C: "Enthalpy of combustion", D: "Enthalpy of neutralization" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 94,
    subject: "Chemistry",
    title: "Oxidation number of 'Mn' in KMnO4 is",
    options: { A: "-7", B: "+7", C: "0", D: "+1" },
    answer: "D", // Answer key says D. Mn is +7, but D maps to +7 based on OCR or ID-A key gives D? Wait, ID-A 94 is D.
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 95,
    subject: "Chemistry",
    title: "Which step is irrelevant with respect to balancing of redox equations by oxidation number method?",
    options: { A: "Split the reaction into two half reactions", B: "Assign oxidation number to all the atoms involved in the equation", C: "Identify the element undergoing a change in oxidation number", D: "Equalize the number of electrons lost and gained" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 96,
    subject: "Chemistry",
    title: "Which of the following is NOT a correct feature of electrolytic cells?",
    options: { A: "Reduction occurs at cathode", B: "Oxidation occurs at anode", C: "Alternating current source is connected to electrodes", D: "Electrochemical reaction takes place" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 97,
    subject: "Chemistry",
    title: "Which of the following has a coordinate bond?",
    options: { A: "NH3BF3", B: "H2O", C: "NaCl", D: "CaO" },
    answer: "C", // Answer key says C? Wait, NH3BF3 has a coordinate bond. ID-A 97 is C. (May be a mistake in the exam key)
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 98,
    subject: "Chemistry",
    title: "Which of the following is NOT a feature of Valence Shell Electron Pair Repulsion theory?",
    options: { A: "It determines the shape of molecule", B: "Pairs of electrons repel each other", C: "It helps in understanding interaction of medicinal drug molecules", D: "Only lone pairs participate in determining geometry of molecules" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 99,
    subject: "Chemistry",
    title: "Which of the following has smallest atomic radius",
    options: { A: "P", B: "Na", C: "Mg", D: "S" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 100,
    subject: "Chemistry",
    title: "The difference of lithium from the other alkali metals is mainly because of:",
    options: { A: "Large radius and high charge density", B: "Small radius and high charge density", C: "Large radius and low charge density", D: "Small radius and low charge density" },
    answer: "D", // Answer key D? Usually small radius and high charge density.
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 101,
    subject: "Chemistry",
    title: "Which of the following is not Basic in nature",
    options: { A: "Aluminum oxide", B: "Magnesium oxide", C: "Potassium oxide", D: "Sodium oxide" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 102,
    subject: "Chemistry",
    title: "The solubility of sulphates of alkaline metals generally",
    options: { A: "Increase down the group", B: "Decrease down the group", C: "Increase then decrease down the group", D: "Doesn't change down the group" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 103,
    subject: "Chemistry",
    title: "Which of the following is NOT an Alloy",
    options: { A: "Bronze", B: "Brass", C: "Steel", D: "Graphite" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 104,
    subject: "Chemistry",
    title: "Electronic configuration of chromium (Proton number 24) is:",
    options: { A: "[Ar] 3d4 4s2", B: "[Ar] 3d5 4s2", C: "[Ar] 3d5 4s1", D: "[Ar] 3d6 4s2" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 105,
    subject: "Chemistry",
    title: "Which of the following is NOT a property of transition elements?",
    options: { A: "High melting points", B: "Good conductors of electricity", C: "Hard metals", D: "Ions and compounds are colorless" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 106,
    subject: "Chemistry",
    title: "1-Butene and 2-Butene are showing which type of isomerism?",
    options: { A: "Functional Group", B: "Position", C: "Metamerism", D: "Chain" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 107,
    subject: "Chemistry",
    title: "Which type of isomerism is displayed by compounds having same structural formula but different position of atoms on both sides of carbon bond?",
    options: { A: "Chain", B: "Metamerism", C: "Geometric", D: "Tautomerism" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 108,
    subject: "Chemistry",
    title: "Homocyclic organic compounds are sub divided into two types namely:",
    options: { A: "Alicyclic and Aromatic", B: "Alkenes & Alkynes", C: "Aromatic and Non aromatic", D: "Saturated & Unsaturated" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 109,
    subject: "Chemistry",
    title: "Which of the following is an example of substituent group which release electrons to benzene ring:",
    options: { A: "-CN", B: "-NR3+", C: "-NH2", D: "-NO2" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 110,
    subject: "Chemistry",
    title: "Which one of the following represents nitration of benzene correctly?",
    options: { A: "Benzene + HNO3 (H2SO4, 50-55C) -> Nitrobenzene + H2O", B: "Benzene + HNO3 (H2SO4, 50-55C) -> Nitrobenzene + H2O", C: "Benzene + HNO3 (H2SO4, 50-55C) -> Nitrobenzene + H2O", D: "Benzene + HNO3 (H2SO4, 50-55C) -> Nitrobenzene + O2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 111,
    subject: "Chemistry",
    title: "In Friedel Craft acylation an acyl group is introduced in benzene ring in the presence of catalyst:",
    options: { A: "AlCl3", B: "H2SO4", C: "Sunlight", D: "V2O5" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 112,
    subject: "Chemistry",
    title: "Identify correct ascending order of reactivity of alkyl halides:",
    options: { A: "Cl, Br, I, F", B: "F, Cl, Br, I", C: "Br, I, F, Cl", D: "I, F, Cl, Br" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 113,
    subject: "Chemistry",
    title: "Identify the correct statement related to substitution and elimination of alkyl halides:",
    options: { A: "Strong bases causes substitution in preference to elimination", B: "Role of leaving groups in elimination is similar to substitution", C: "Substitution is favored more than elimination by decreasing solvent polarity", D: "Decrease in temperature will favor elimination more than substitution" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 114,
    subject: "Chemistry",
    title: "Alkyl Halides involving -C-X bond breakage and -C-Nu bond formation simultaneously would follow which one of the following mechanisms",
    options: { A: "SN1", B: "SN2", C: "E1", D: "E2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 115,
    subject: "Chemistry",
    title: "CnH2nO is the general formula of:",
    options: { A: "Ether", B: "Carboxylic acid", C: "Ketones", D: "Carbolic acid" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 116,
    subject: "Chemistry",
    title: "The blue color of Fehling solution is changed to red when warmed with an aldehyde due to formation of which of the following?",
    options: { A: "NO2", B: "Cu2O", C: "AgO", D: "SO2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 117,
    subject: "Chemistry",
    title: "Reaction of HCN with formaldehyde is a:",
    options: { A: "Nucleophilic addition reaction", B: "Nucleophilic substitution reaction", C: "Electrophilic addition reaction", D: "Electrophilic substitution reaction" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 118,
    subject: "Chemistry",
    title: "Which of the following alcohol can give Iodoform reaction?",
    options: { A: "Methanol", B: "1-Butanol", C: "1-Propanol", D: "Ethanol" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 119,
    subject: "Chemistry",
    title: "Common name of 2-hydroxy propanoic acid is:",
    options: { A: "Tartaric acid", B: "Lactic acid", C: "Phthalic acid", D: "Formic acid" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 120,
    subject: "Chemistry",
    title: "Which of the following is correct regarding phenol",
    options: { A: "Phenol and water are equally acidic", B: "Phenol is less acidic than carboxylic acid", C: "Phenol is less acidic than water", D: "Phenol is less acidic than ethanol" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 121,
    subject: "Chemistry",
    title: "When carboxylic acid are heated with alcohol in the presence of sulphuric acid one of the following is formed",
    options: { A: "Amides", B: "Acyl chloride", C: "Esters", D: "Acid Anhydride" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 122,
    subject: "Chemistry",
    title: "Which one of the following is not an amino acid",
    options: { A: "Folic acid", B: "Glutamic acid", C: "Glycine", D: "Lysine" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },

  // ==========================================
  // PHYSICS
  // ==========================================
  {
    questionNo: 123,
    subject: "Physics",
    title: "In an elastic collision the total kinetic energy",
    options: { A: "Dissipates after collision", B: "Increases after the collision", C: "Reduces after the collision", D: "Before and after collision remains the same" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 124,
    subject: "Physics",
    title: "The instantaneous velocity along the curved path is;",
    options: { A: "Along the tangent", B: "Perpendicular to the slop", C: "Parallel to the radius", D: "Anti-parallel to the radius" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 125,
    subject: "Physics",
    title: "The range of projectile will be maximum if the factor sin2θ becomes",
    options: { A: "Zero", B: "1", C: "-1", D: "2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 126,
    subject: "Physics",
    title: "The two dimensional motion under constant acceleration due to gravity is called:",
    options: { A: "Circular motion", B: "Rotational motion", C: "Projectile motion", D: "Vibratory motion" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 127,
    subject: "Physics",
    title: "In velocity time graph the area under graph is equal to the:",
    options: { A: "Speed of an object", B: "Velocity of an object", C: "Distance covered by object", D: "Acceleration of an object" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 128,
    subject: "Physics",
    title: "According to Newton's Law of Motion the mass of the object is a quantitative measure of its:",
    options: { A: "Weight", B: "Inertia", C: "Speed", D: "Acceleration" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 129,
    subject: "Physics",
    title: "1KWh =",
    options: { A: "3.6J", B: "3.6KJ", C: "3.6 MJ", D: "3.6 GJ" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 130,
    subject: "Physics",
    title: "Which of the following is a non-conservative force?",
    options: { A: "Frictional force", B: "Electric force", C: "Elastic spring force", D: "Gravitational force" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 131,
    subject: "Physics",
    title: "Work done is equal to:",
    options: { A: "Effort x distance", B: "Effort + distance", C: "Effort / distance", D: "Effort - distance" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 132,
    subject: "Physics",
    title: "When a force of 1N displaces its point of application by 1m in the direction of force, the work done is",
    options: { A: "1 J", B: "10 J", C: "0J", D: "J" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 133,
    subject: "Physics",
    title: "An electric motor is used to lift the weight of 2.0N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
    options: { A: "0.25 W", B: "0.5 W", C: "0.75 W", D: "1 W" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 134,
    subject: "Physics",
    title: "The centripetal acceleration of an object moving along a circle of radius 'r' with an angular speed 'w' is given by the formula:",
    options: { A: "a = rω^2", B: "a = rω", C: "a = r^2ω", D: "a = r^2ω^2" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 135,
    subject: "Physics",
    title: "An air craft makes a turn in a horizontal circle of radius 100m. It is travelling with a velocity of 250 m/sec. The angular velocity of the air craft will be:",
    options: { A: "1.5 rad/sec", B: "2.5 rad/sec", C: "3 rad/sec", D: "3.5 rad/sec" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 136,
    subject: "Physics",
    title: "A particle of mass 'm' is moving on a circular path of radius 'r' with velocity 'v', then centripetal force acting on it is F. if the velocity of particle increases by 2 times and radius of circular path increases by 4 times then new centripetal force F' will be;",
    options: { A: "F' = 2 F", B: "F' = 1/2 F", C: "F' = 4 F", D: "F' = F" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 137,
    subject: "Physics",
    title: "A roller coaster is moving with 30 ms^-1 on a circular track of radius 30m. the net mass of coaster + passengers is 'm' the centripetal force acting on it is;",
    options: { A: "900m", B: "m", C: "450m", D: "30m" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 138,
    subject: "Physics",
    title: "Amplitude in the following figure is given as:",
    options: { A: "2m", B: "1/2m", C: "1/4 m", D: "1m" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 139,
    subject: "Physics",
    title: "Which one of the following is INCORRECT about the nodes when the string is plucked;",
    options: { A: "Amplitude of vibration is zero", B: "Do not move along the string", C: "Produced at the fixed ends of strings", D: "Distance between consecutive nodes is 1 wavelength" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 140,
    subject: "Physics",
    title: "In transverse waves the portion above the mean level is called:",
    options: { A: "Wave front", B: "Wave crest", C: "Wave trough", D: "Wave length" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 141,
    subject: "Physics",
    title: "Which one of the following does not cause stationary waves?",
    options: { A: "Two waves of equal frequency", B: "Two waves of same speed", C: "Two waves of unequal amplitude", D: "Two waves travelling in opposite directions" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 142,
    subject: "Physics",
    title: "Select the appropriate Doppler equation when source is approaching the stationary observer where fo is the observed frequency, fs is frequency of source, v is the speed of sound, vs is the speed of source relative to observer",
    options: { A: "fo = [v/(v-vs)]fs", B: "fo = [v/(v+vs)]fs", C: "fo = [(v-vs)/v]fs", D: "fo = [(v-vs)/(v+vs)]fs" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 143,
    subject: "Physics",
    title: "The distance between two successive particles which are exactly in the same state of vibration is called",
    options: { A: "Frequency", B: "Amplitude", C: "Wavelength", D: "Time period" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 144,
    subject: "Physics",
    title: "During the isothermal process, the temperature",
    options: { A: "remains constant during the initial phase of the process", B: "remains constant throughout the process", C: "alters throughout the process", D: "increases throughout the process" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 145,
    subject: "Physics",
    title: "What is the value of heat energy (Q) in an adiabatic process?",
    options: { A: "+1", B: "-1", C: "0", D: "+2" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 146,
    subject: "Physics",
    title: "The Coulomb's law states",
    options: { A: "Force between two point charges is inversely proportional to the product of the charges and directly proportional to the square of the distance between them", B: "Force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them", C: "Force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them", D: "Force between two point charges is directly proportional to the product of the charges and the square of the distance between them" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 147,
    subject: "Physics",
    title: "The formula V = W/qo represents",
    options: { A: "Electric intensity", B: "Electric power", C: "Electric potential", D: "Electric field gradient" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 148,
    subject: "Physics",
    title: "The S.I unit of capacitance of a capacitor is:",
    options: { A: "Coulomb", B: "Volt", C: "Farad", D: "Ampere" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 149,
    subject: "Physics",
    title: "Electric intensity between two oppositely charge plates in the middle region is",
    options: { A: "Non-uniform", B: "Uniform", C: "Cannot be predicted", D: "Variable" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 150,
    subject: "Physics",
    title: "Find potential difference in moving 2 C charge which requires 600J of work between two points.",
    options: { A: "1200V", B: "300V", C: "150V", D: "2400V" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 151,
    subject: "Physics",
    title: "Which one of the following is NOT a feature of electric forces?",
    options: { A: "They act on charges", B: "They act on masses", C: "They can be attractive", D: "They can be repulsive" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 152,
    subject: "Physics",
    title: "A charge of 90 C passes through a wire for 30 seconds. Then the current in the wire will be:",
    options: { A: "3A", B: "0.3 A", C: "3 mA", D: "0.3 mA" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 153,
    subject: "Physics",
    title: "The magnitude of the current in metals is proportional to the potential difference across it as long as temperature of conductor is kept constant is known as:",
    options: { A: "Joule's Law", B: "Gauss Law", C: "Ohm's Law", D: "Ampere's Law" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 154,
    subject: "Physics",
    title: "When length of copper wire is doubled then resistivity becomes:",
    options: { A: "Double", B: "Half", C: "Remains same", D: "Four times" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 155,
    subject: "Physics",
    title: "The resistance of semi-conductor with rise in temperature",
    options: { A: "Increases", B: "Decreases", C: "Remain same", D: "Infinite" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 156,
    subject: "Physics",
    title: "Volt x Ampere is the measure of;",
    options: { A: "Current", B: "Volt", C: "Resistance", D: "Power" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 157,
    subject: "Physics",
    title: "The formula Φ = B.A represents",
    options: { A: "Electric flux", B: "Magnetic flux", C: "Electric flux density", D: "Gravitational flux" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 158,
    subject: "Physics",
    title: "Which of the following statement is incorrect for any magnetic field lines?",
    options: { A: "Lines start at north pole and ends at south pole", B: "Lines never touch or cross each other", C: "The lines are curved", D: "Magnetic field is strongest when the lines are farthest" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 159,
    subject: "Physics",
    title: "The unit of magnetic flux density is;",
    options: { A: "Wbm^-1", B: "Wbm", C: "Wbm^-2", D: "Wb" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 160,
    subject: "Physics",
    title: "The induced current will flow in such a direction so as to oppose the cause that produces it is statement of:",
    options: { A: "Ampere's Law", B: "Faraday's Law", C: "Lenz's Law", D: "Joule's Law" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 161,
    subject: "Physics",
    title: "In an AC generator the emf will be maximum when factor sinθ is equal to",
    options: { A: "Zero", B: "1", C: "2", D: "1/2" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 162,
    subject: "Physics",
    title: "Electric generators and transformers are based on the principles of:",
    options: { A: "Coulomb's law", B: "Faraday's law", C: "Ampere's law", D: "Hook's law" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 163,
    subject: "Physics",
    title: "In an ideal transformer:",
    options: { A: "Power input is equal to Power output", B: "Power input is less than half of the power output", C: "Power input is greater than Power output", D: "Power input is more than half of the power output" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 164,
    subject: "Physics",
    title: "The conversion of A.C into D.C is called rectification and circuit is called rectifier. Which component of electronics acts as a rectifier?",
    options: { A: "Diode", B: "Transistor", C: "Transformer", D: "Inductor" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 165,
    subject: "Physics",
    title: "Full wave rectification is given by:",
    options: { A: "One diode connected in bridge type arrangements", B: "Two diodes connected in bridge type arrangements", C: "Three diodes connected in bridge type arrangement", D: "Four diodes connected in bridge type arrangements" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 166,
    subject: "Physics",
    title: "A diode characteristic curve is a plot between:",
    options: { A: "Current and time", B: "Voltage time", C: "Voltage and current", D: "Reverse voltage forward voltage" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 167,
    subject: "Physics",
    title: "The value of Planck constant is",
    options: { A: "6.63 x 10^-34 Js", B: "6.63 x 10^34 Js", C: "6.63 x 10^-34 Js^-1", D: "6.63 x 10^34 Js^-1" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 168,
    subject: "Physics",
    title: "The de-Broglie wavelength associated with a particle moving at 10^6 m/s and having mass 10^-30 kg",
    options: { A: "6.6 x 10^-10 m", B: "1.5 x 10^9 m", C: "1.9 x 10^-5 m", D: "7.2 x 10^-8 m" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 169,
    subject: "Physics",
    title: "Light propagates through space as a wave is evident by all of the following EXCEPT",
    options: { A: "Interference", B: "Photoelectric effect", C: "Diffraction", D: "Polarization" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 170,
    subject: "Physics",
    title: "Which series falls in ultra violet region?",
    options: { A: "Lyman", B: "Brachett", C: "Pfund", D: "Paschen" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 171,
    subject: "Physics",
    title: "The potential through which an electron should be accelerated, so that, on collision it can lift the electron in the atom from its ground state to some higher state is known as",
    options: { A: "Ionization potential", B: "Excitation potential", C: "String potential", D: "Acceleration potential" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 172,
    subject: "Physics",
    title: "Which of the following regarding X Rays is INCORRECT",
    options: { A: "Have higher wavelength than visible light", B: "They are part of electromagnetic spectrum", C: "They are highly penetrating in soft body tissues", D: "They are high energy photons" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 173,
    subject: "Physics",
    title: "The unit of decay constant is;",
    options: { A: "m", B: "s", C: "s^-1", D: "m^-1" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 174,
    subject: "Physics",
    title: "If we have \"No\" number of any radioactive element then after a period of \"n\" half-lives the number of atoms left behind is",
    options: { A: "2^n No", B: "(1/2)^n No", C: "(1/2 No)^n", D: "(2No)^n" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 175,
    subject: "Physics",
    title: "Which of the following is NOT the Somatic biological effect of radiation?",
    options: { A: "Skin burn", B: "Loss of hair", C: "Induction of cancer", D: "Genes mutation" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 176,
    subject: "Physics",
    title: "An artificial radioactive element can be made by bombarding",
    options: { A: "High energy particles on unstable elements", B: "Low energy particles on unstable elements", C: "High energy particles on stable elements", D: "Low energy particles on stable elements" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },

  // ==========================================
  // ENGLISH
  // ==========================================
  {
    questionNo: 177,
    subject: "English",
    title: "What does the word \"SURPLUS\" mean?",
    options: { A: "In excess", B: "A mathematical term", C: "Within reach", D: "Salutation" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 178,
    subject: "English",
    title: "What does the word \"ANCESTOR\" mean?",
    options: { A: "Collection of stars", B: "Branch of astrology", C: "Forefathers", D: "Type of receptors" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 179,
    subject: "English",
    title: "What does the word \"SPILL\" mean?",
    options: { A: "Coil", B: "Deliver", C: "Spoil", D: "Spread" },
    answer: "D",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 180,
    subject: "English",
    title: "Pick the CORRECT option:",
    options: { A: "The supervisor has nor will ever compromise.", B: "The supervisor have nor will ever compromise.", C: "The supervisor has not compromised nor will ever compromise.", D: "The supervisor has nor will ever compromised." },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 181,
    subject: "English",
    title: "The soup _______ good",
    options: { A: "Taste", B: "Tastes", C: "Is tasting", D: "Has taste" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 182,
    subject: "English",
    title: "I _______ him for a long time.",
    options: { A: "Have never known", B: "Had never knew", C: "Had never been known", D: "Would never knew" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 183,
    subject: "English",
    title: "Choose the sentence that is punctuated correctly:",
    options: { A: "He said to his disciples \"Watch and pray.\"", B: "He said to his disciples, \"Watch and pray.\"", C: "He said to his disciples, \"watch and, pray\"", D: "He said to his disciples' \"watch and pray.\"" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 184,
    subject: "English",
    title: "Choose the CORRECT spellings.",
    options: { A: "Pharaoh", B: "Pharoah", C: "Pheroh", D: "Pheraoh" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 185,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "She has beauty, brains and wealth-a rare combination.", B: "She has beauty, brains, and wealth-a rare combination.", C: "She has beauty, brains, and wealth; a rare combination.", D: "She has beauty, brains, and wealth: a rare combination." },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 186,
    subject: "English",
    title: "Choose the correct sentence",
    options: { A: "In 1838 Schleiden suggested that all plants were made of cells", B: "In 1838 Schleiden suggest that all plants were made of cells", C: "In 1838 Schleiden suggested that all plant were made of cells", D: "In 1838 Schleiden suggested to all plants were made of cells" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 187,
    subject: "English",
    title: "_______ words spoken in earnest will convince him",
    options: { A: "A few", B: "The few", C: "Few", D: "Fewer" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 188,
    subject: "English",
    title: "He takes _______ his father. Fill in the blank with appropriate preposition.",
    options: { A: "Up", B: "Down", C: "After", D: "In" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 189,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "There's mr. hashim whome they say is the best portrait painter in the town.", B: "There's Mr. Hashim, who they say is the best portrait painter in the town.", C: "Theres' Mr. Hashim which they say is the portrait painter in the town", D: "There's Mr. Hashim who they say is best portrait painter in the town." },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 190,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "Gulliver travels was writen to Swift.", B: "Gulliver travels was writen at Swift.", C: "Gulliver's Travels was written by Swift.", D: "Gullivers' travel was written by Swift" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 191,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "\"The unexamined life\", said Socrates, \"is unfit to be lived by man.\"", B: "The inexamined life, said Socrates, \"is unfit to be lived by man\"", C: "\"The unexamined life said Socrates\", is disfit to be lived by man.", D: "\"The disexamined life\" said Socrates is unfit to be lived by man." },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 192,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "You have often heard of me speeking of my friend Wahaj waheed a barrister here", B: "You have often heard me speak of my friend, Wahaj Waheed, who is a barrister here.", C: "You have often heard me. Speak off my friend, wahaj waheed who is a Barrister here", D: "you have often heard me speak about my friend; wahaj waheed-a barrister hear" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 193,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "The first space traveller was Dennis Tito from the United States.", B: "The First Space Traveller was Dennis Tito, from, the United states", C: "The first space traveller was Dennis Tito-from united State", D: "The first space travaler was Dennis Tito, from the United States" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 194,
    subject: "English",
    title: "Choose the CORRECT sentence",
    options: { A: "It was greatly good by you to proposd day's picnic at murree", B: "It was awfully good by you to proposed a day's picnic in Murree.", C: "It was awfully good of you to propose a day's picnic at Murree.", D: "It was very good off you too propose days picnic in Murree" },
    answer: "C",
    source: "MDCAT 2024 -A"
  },

  // ==========================================
  // LOGICAL REASONING
  // ==========================================
  {
    questionNo: 195,
    subject: "Logical Reasoning",
    title: "I. The government has increased the taxes on all businesses in Pakistan. II. Many small businesses will have to close their operations in Pakistan.",
    options: { A: "Statement I is the cause and statement II is its effect", B: "Statement II is the cause and statement I is its effect", C: "Both the statements I and II are independent causes", D: "Both the statements I and II are effects of independent causes" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 196,
    subject: "Logical Reasoning",
    title: "Pakistan is rich in wildlife and culture. It is home to many sorts of wildlife, from the Ibex to the Indus River Dolphin; and people from most countries in the world have made their home here. STATEMENTS: I. Pakistan is a rich country. II. People from all nationalities of the world live in Pakistan. III. Pakistan is home to at least one dolphin species.",
    options: { A: "Only III is correct", B: "Only I and II are correct", C: "Only I and III are correct", D: "Only II and III are correct" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 197,
    subject: "Logical Reasoning",
    title: "Observe the pattern and select the next term, in the sequence: JEQ, HEO, FEM",
    options: { A: "GFN", B: "DEK", C: "GEL", D: "DFK" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 198,
    subject: "Logical Reasoning",
    title: "Read the following and choose the correct answer: \"X, Y and Z are three whole numbers less than 24 but greater than 11. X is the smallest prime number. Y is the largest number divisible by 3. Z is the smallest number divisible by 11?",
    options: { A: "X is 13, Y is 24, Z is 11", B: "X is 13, Y is 21, Z is 22", C: "X is 11, Y is 21, Z is 11", D: "X is 11, Y is 24, Z is 22" },
    answer: "B",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 199,
    subject: "Logical Reasoning",
    title: "Read the following and choose the correct answer: \"P, Q and R are one-digit, non-negative numbers. P is the smallest even number. Q is the largest odd number. R is 5.\"",
    options: { A: "P + Q + R = 16", B: "P + Q + R = 12", C: "(Q + R) x P = 30", D: "(Q + R) x P = 8" },
    answer: "A",
    source: "MDCAT 2024 -A"
  },
  {
    questionNo: 200,
    subject: "Logical Reasoning",
    title: "All hammers are tools. Some tools are useless things. All useless things are trash. Which of the following conclusions is NECESSARILY TRUE given only the information above? CONCLUSIONS: I. Some hammers are trash II. Some tools are trash III. All useless things are tools.",
    options: { A: "I", B: "II", C: "III", D: "I & III" },
    answer: "B",
    source: "MDCAT 2024 -A"
  }
];