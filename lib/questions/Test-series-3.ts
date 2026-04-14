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
  // PHYSICS (MDCAT 2010)
  // ==========================================
  {
    questionNo: 1,
    subject: "Physics",
    title: "Which one is the highest power multiple?",
    options: { A: "Giga", B: "Tera", C: "Mega", D: "Deca" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 2,
    subject: "Physics",
    title: "SI unit of charge is",
    options: { A: "Ampere", B: "Volt", C: "Coulomb", D: "Calorie" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 3,
    subject: "Physics",
    title: "The electrical analog of mass in electricity is",
    options: { A: "Capacitance", B: "Inductance", C: "Charge", D: "Resistance" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 4,
    subject: "Physics",
    title: "Which one of the following relations is correct?",
    options: { A: "1 wb m^-2 = Nm^-1A^-1", B: "1 Tesla = 10^4 Gausses", C: "1 wb m^-2 = 1 Tesla", D: "All of these" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 5,
    subject: "Physics",
    title: "Lifetime of electron in metastable state is about",
    options: { A: "10^-5 sec", B: "10^-3 sec", C: "10^-8 sec", D: "10^-2 sec" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 6,
    subject: "Physics",
    title: "The torque acting on the current carrying coil is given by",
    options: { A: "τ = NIAB cos α", B: "τ = BIL sin α", C: "τ = NIAB sin α", D: "τ = BIL cos α" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 7,
    subject: "Physics",
    title: "The grid in the cathode ray oscilloscope",
    options: { A: "Controls number of waves", B: "Controls the brightness of spot formed", C: "Accelerates electrons", D: "Has positive potential with respect to cathode" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 8,
    subject: "Physics",
    title: "The horizontal range of a projectile, at a certain place, is completely determined by",
    options: { A: "The angle of projection", B: "The initial velocity of projection", C: "The mass of the projectile", D: "Speed and mass of the projectile" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 9,
    subject: "Physics",
    title: "If velocity is double, then",
    options: { A: "Momentum increase 4 times and K.E. increase 2 times", B: "Momentum and K.E remain same", C: "Momentum increases 2 times and K.E. increase constant", D: "Momentum increases 2 times and K.E. increases 4 times." },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 10,
    subject: "Physics",
    title: "The consumption of energy by 60-watt bulb in 2 seconds is",
    options: { A: "20 J", B: "120 J", C: "30 J", D: "0.02J" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 11,
    subject: "Physics",
    title: "In transistors, the base region is very thin, of the order of",
    options: { A: "10^-5 cm", B: "10^-6 m", C: "10^-6 mm", D: "10^-6 μm" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 12,
    subject: "Physics",
    title: "The closed loop gain of OP-AMP depends on",
    options: { A: "Internal structure of OP-AMP", B: "External connected resistances", C: "Voltage of power supplies", D: "Input resistance" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 13,
    subject: "Physics",
    title: "The net charge on an N-type substance is",
    options: { A: "0.7 volts", B: "0.3 volts", C: "0.25 volts", D: "0.07 volts" },
    answer: "A", 
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 14,
    subject: "Physics",
    title: "The value of Wien's constant is",
    options: { A: "2.90 x 10^-3 mK", B: "3.34 x 10^-4 mK", C: "4.22 x 10^-7 m", D: "3.42 x 10^-8 mK" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 15,
    subject: "Physics",
    title: "The minimum frequency below which no electron is emitted from the metal surface is called",
    options: { A: "High frequency", B: "Low frequency", C: "Threshold frequency", D: "Resonance frequency" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 16,
    subject: "Physics",
    title: "In pair production, the type of photon used is",
    options: { A: "a - particle", B: "β - particle", C: "X-rays", D: "y - radiations" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 17,
    subject: "Physics",
    title: "The lifetime of an electron in an excited state is about 10^-8 s. what is its uncertainty in energy during this time?",
    options: { A: "0.05 x 10^-41 J", B: "1.05 x 10^-26 J", C: "1.15 x 10^10 J", D: "2.19 x 10^-40 J" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 18,
    subject: "Physics",
    title: "Velocity of electron moving in first orbit of hydrogen is",
    options: { A: "2.19 x 10^7 m/sec", B: "2.18 x 10^7 m/sec", C: "2.2 x 10^8 m/sec", D: "2.19 x 10^6 m/sec" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 19,
    subject: "Physics",
    title: "LASER is a potential energy source for inducing which type of reaction?",
    options: { A: "Radioactive", B: "Fission", C: "Ionization", D: "Fusion" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 20,
    subject: "Physics",
    title: "In the half-life of an element, the equation for the number of decaying atoms is given by",
    options: { A: "Δ ∝ NΔt", B: "ΔN = KNΔt", C: "ΔN ∝ -nΔt", D: "ΔN = -ΔNΔt" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 21,
    subject: "Physics",
    title: "Decay constant 'λ' is given as",
    options: { A: "-(ΔN/N)/Δt", B: "-ΔN/Δt", C: "-N/ΔN", D: "-(ΔN/N)Δt" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 22,
    subject: "Physics",
    title: "The SI unit of absorbed dose 'D' i.e. radiation effect is Gray and one Gray is equal to",
    options: { A: "Kj/mol", B: "F/mol", C: "Kg/J", D: "J/kg" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 23,
    subject: "Physics",
    title: "The principle of homogeneity of dimensions determines",
    options: { A: "Only variable in the equation", B: "Only constant in the equation", C: "Correctness of an equation", D: "Constant and variable in the equation" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 24,
    subject: "Physics",
    title: "For a body to be in complete equilibrium",
    options: { A: "Linear acceleration is zero", B: "Angular acceleration is zero", C: "Linear acceleration is zero but angular acceleration is not zero", D: "Linear acceleration and angular acceleration both should be zero" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 25,
    subject: "Physics",
    title: "If length of a spanner is 'l' and a force 'F' is applied on it to tighten a nut such that it passes through the pivot point, then torque is",
    options: { A: "Zero", B: "Fl", C: "Fl sin θ", D: "Fl Cos θ" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 26,
    subject: "Physics",
    title: "If a force of magnitude 8 N acts on a body in direction making an angle 30°, its x and y components will be",
    options: { A: "Fx = 4√3 and Fy = 8", B: "Fx = 8 and Fy = 4√3", C: "Fx = 4√3 and Fy = 4", D: "Fx = 8√3 and Fy = 4" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 27,
    subject: "Physics",
    title: "The difference of a vector B and its negative vector -B is",
    options: { A: "A null vector", B: "Equal to magnitude of vector B", C: "Twice the magnitude of vector B", D: "Smaller than magnitude of vector B" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 28,
    subject: "Physics",
    title: "Time of projectile's flight is",
    options: { A: "(vi^2 sin^2 θ) / g", B: "(2vi sin θ) / g", C: "(vi^2 sin θ) / g", D: "(vi^2 / g) sin θ" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 29,
    subject: "Physics",
    title: "If the velocity of the body changes by equal amount in equal intervals of time, the body is said to have:",
    options: { A: "Variable acceleration", B: "Uniform acceleration", C: "Uniform velocity", D: "Negative acceleration" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 30,
    subject: "Physics",
    title: "In order to determine the maximum height of the projectile, the equation of motion used is",
    options: { A: "aS = Vf^2 - Vi^2", B: "2aS = Vf^2 - Vi^2", C: "2S = a(Vf^2 - Vi^2)", D: "aS = (Vf^2 - Vi^2)" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 31,
    subject: "Physics",
    title: "If a force of 12 N acts on a car and changes its momentum from 36 kgm/sec to 60 kgm/sec, the time during which this change occurs will be",
    options: { A: "24 sec", B: "2 sec", C: "12 sec", D: "8 sec" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 32,
    subject: "Physics",
    title: "Which one of the following is a non-conservation force?",
    options: { A: "Electric force", B: "Elastic spring force", C: "Gravitation force", D: "Frictional force" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 33,
    subject: "Physics",
    title: "Value of escape velocity for the surface of the earth is 11 km/sec. Its value for surface of the moon is",
    options: { A: "11 km/sec", B: "10.4 km/sec", C: "2.4 km/sec", D: "4.3 km/sec" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 34,
    subject: "Physics",
    title: "On a clear day at noon, the intensity of solar energy reaching the earth's surface is about",
    options: { A: "1.0 kWm^-2", B: "1.0 Jm^-2", C: "1.0 Wm^-2", D: "1.0 MWm^-2" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 35,
    subject: "Physics",
    title: "When a lift is accelerated upward, the apparent weight of an object in it will be",
    options: { A: "Equal to its real weight", B: "Less than its real weight", C: "Zero", D: "Greater than its real weight" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 36,
    subject: "Physics",
    title: "The moment of inertia of a thin rod is",
    options: { A: "1/2 mL^2", B: "1/4 m^3L", C: "1/12 mL", D: "1/12 mL^2" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 37,
    subject: "Physics",
    title: "A wheel of radius 1 m covers an angular displacement of 180°. Its linear displacement is",
    options: { A: "3.14 m", B: "π rad", C: "6.25 m", D: "0.157 m" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 38,
    subject: "Physics",
    title: "Conservation of mass of fluid leads to",
    options: { A: "Bernoulli's equation", B: "Venture meter", C: "Equation of motion", D: "Equation of continuity" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 39,
    subject: "Physics",
    title: "The blood vessels collapse when",
    options: { A: "External pressure applied becomes greater than the systolic pressure", B: "External pressure applied is equal to systolic pressure", C: "External pressure applied is less than the systolic pressure", D: "External pressure applied is zero" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 40,
    subject: "Physics",
    title: "An oscillating body is at mean position at t=0. At t=T/4 it will be at",
    options: { A: "Extreme position", B: "Means position", C: "Between extreme and mean position", D: "Beyond extreme position" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 41,
    subject: "Physics",
    title: "In a simple pendulum, the tension of the string is",
    options: { A: "G cos θ", B: "Mg sin θ", C: "Mg cos θ", D: "Mg" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 42,
    subject: "Physics",
    title: "Two sound waves having the same amplitudes are moving in the same direction are out of phase. The amplitude of the resultant wave is",
    options: { A: "Zero amplitude", B: "The sum of amplitude of the two waves", C: "Difference of the amplitudes of the two waves", D: "Double the amplitude of either waves" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 43,
    subject: "Physics",
    title: "A source 'Y' of unknown frequency produces 4 beats with a source of 240 Hz and 8 beats with a sound of 252 Hz. Frequency of the source 'Y' is",
    options: { A: "244 Hz", B: "236 Hz", C: "248 Hz", D: "246 Hz" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 44,
    subject: "Physics",
    title: "An organ pipe closed at one end has a length of 25 cm. Wavelength of the fundamental note is",
    options: { A: "25 cm", B: "50 cm", C: "100 cm", D: "75 cm" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 45,
    subject: "Physics",
    title: "In newton ring apparatus, at the point of contact of the lens and glass plate, the additional path difference introduced is",
    options: { A: "λ/4", B: "λ/2", C: "λ", D: "λ/3" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 46,
    subject: "Physics",
    title: "The path difference 'BD' for destructive interference is",
    options: { A: "(m+1/2)λ", B: "Mλ", C: "D sin θ", D: "3λ" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 47,
    subject: "Physics",
    title: "In the case of grating spectrometer, the resolving power 'R' of the grating is defined as",
    options: { A: "λ/Δλ", B: "λ/D", C: "λ/λ1", D: "N x m" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 48,
    subject: "Physics",
    title: "Which one of the following lights travels fastest in optical fibers?",
    options: { A: "Visible light", B: "Ultraviolet light", C: "Ordinary light", D: "Invisible infrared light" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 49,
    subject: "Physics",
    title: "The value of universal gas constant is",
    options: { A: "8.314 Jmol^-1 K^-1", B: "8.234 Jmol^-1 K^-1", C: "7.23 Jmol^-1 K^-1", D: "1.00 Jmol^-1 K^-1" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 50,
    subject: "Physics",
    title: "The turbine in a steam power plant takes steam from a boiler at 427 °C and exhausts into a low temperature reservoir at 77 °C. What is the maximum possible efficiency?",
    options: { A: "50%", B: "40%", C: "60%", D: "70%" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },

  // ==========================================
  // CHEMISTRY (MDCAT 2010)
  // ==========================================
  {
    questionNo: 51,
    subject: "Chemistry",
    title: "In an electrochemical series, standard electrode potential are arranged on the basis of:",
    options: { A: "pH scale", B: "pOH scale", C: "hydrogen scale", D: "pKa scale" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 52,
    subject: "Chemistry",
    title: "The reaction which is responsible for the production of electricity in the voltaic cell is",
    options: { A: "hydrolysis reaction", B: "oxidation reaction", C: "redox reaction", D: "reduction reaction" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 53,
    subject: "Chemistry",
    title: "Glucose is converted into ethanol by the enzyme present in yeast:",
    options: { A: "urease", B: "invertase", C: "sucrase", D: "zymase" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 54,
    subject: "Chemistry",
    title: "The rate of reaction involving ions can be studied by",
    options: { A: "dilatometric method", B: "refractiometric", C: "optical rotation", D: "electrical conductivity" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 55,
    subject: "Chemistry",
    title: "When one mole of gaseous hydrogen ions are dissolved in water to form infinitely dilute solution, the amount of heat liberated is",
    options: { A: "-1891 kJmol^-1", B: "-1075 kJmol^-1", C: "-499 kJmol^-1", D: "-1562 kJmol^-1" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 56,
    subject: "Chemistry",
    title: "Energy required to remove an electron from the outermost shell of its isolated gaseous atom in the ground state is",
    options: { A: "Electron affinity", B: "Lattice energy", C: "Ionization energy", D: "Crystal energy" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 57,
    subject: "Chemistry",
    title: "Which of the following carbonates of alkali metals is not stable towards heat and is decomposed on heating to its oxide along with liberation of CO2?",
    options: { A: "Li2CO3", B: "Mg2CO3", C: "K2CO3", D: "Na2CO3" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 58,
    subject: "Chemistry",
    title: "The presence of calcium is essential for the normal development of plants. An adequate supply of calcium appears to stimulate the development of which part of the plants?",
    options: { A: "Leaves", B: "Fruits", C: "Root hairs", D: "Branches" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 59,
    subject: "Chemistry",
    title: "Which of the following sulphates is not soluble in water?",
    options: { A: "Sodium sulphate", B: "Barium sulphate", C: "Potassium sulphate", D: "Zinc sulphate" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 60,
    subject: "Chemistry",
    title: "The trend in the densities of elements of Group III-A of the Periodic Table is",
    options: { A: "A gradual increase", B: "A gradual decrease", C: "First decrease then increase", D: "First increase then decrease" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 61,
    subject: "Chemistry",
    title: "White lead has one of the following properties",
    options: { A: "Acidic", B: "Crystalline", C: "Amorphous", D: "Neutral" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 62,
    subject: "Chemistry",
    title: "The strongest acid among the following is",
    options: { A: "HF", B: "HI", C: "HCI", D: "HBr" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 63,
    subject: "Chemistry",
    title: "The noble gas which is used in radiotherapy of cancer is",
    options: { A: "Radon", B: "Xenon", C: "Krypton", D: "Argon" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 64,
    subject: "Chemistry",
    title: "Paramagnetic behavior of an atom, ion or molecule is due to presence of",
    options: { A: "Unpaired electrons", B: "Paired electrons", C: "Protons", D: "Neutrons" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 65,
    subject: "Chemistry",
    title: "The geometry of the complexes depends upon the type of taking place in the valence shell of the central metal atom",
    options: { A: "Hybridization", B: "Protonation", C: "Deprotonation", D: "Dissociation" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 66,
    subject: "Chemistry",
    title: "KMnO4 acts as a",
    options: { A: "Reducing agent", B: "Excellent precipitating reagent", C: "Germicide", D: "Oxidizing agent" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 67,
    subject: "Chemistry",
    title: "A gasoline of higher octane number can be obtained by",
    options: { A: "Oxidative cleavage", B: "Thermal cracking", C: "Catalystic cracking", D: "Steam cracking" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 68,
    subject: "Chemistry",
    title: "Ethyne molecule is formed when two carbon atoms joined together to form a sigma bond by",
    options: { A: "Sp-s overlap", B: "Sp3-sp3 overlap", C: "2py-2py overlap", D: "Sp-sp overlap" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 69,
    subject: "Chemistry",
    title: "Symmetrical alkanes can be produced by",
    options: { A: "Sabatier sender's reaction", B: "Hydrogenolysis reaction", C: "Reduction reaction", D: "Kolbe's electrolytic reaction" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 70,
    subject: "Chemistry",
    title: "The catalyst used for the preparation of acrylonitrile is",
    options: { A: "Cu2Cl2 and NH4Cl", B: "Al2O3 and NH4Cl", C: "Cu2Cl2; NH4OH", D: "Cu2Cl2 and Al2O3" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },

  // ==========================================
  // ENGLISH (MDCAT 2010)
  // ==========================================
  {
    questionNo: 71,
    subject: "English",
    title: "My advice had no ______ on him.",
    options: { A: "Effect", B: "Affect", C: "Influence", D: "Impression" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 72,
    subject: "English",
    title: "Do not lose heart, it is just a ______ in the tea cup.",
    options: { A: "Wind", B: "Cyclone", C: "Blast", D: "Storm" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 73,
    subject: "English",
    title: "Pakistan ______ from voting against Iran in the United Nations.",
    options: { A: "Prevented", B: "Detained", C: "Abstained", D: "Refused" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 74,
    subject: "English",
    title: "Please ______ the door after you.",
    options: { A: "Close", B: "Shut", C: "Leave", D: "Knock" },
    answer: "B", // In keys "Shut" or "Close" can be valid, using the context given B is typically MDCAT correct
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 75,
    subject: "English",
    title: "Choose the NEAREST CORRECT MEANING: WALLOW",
    options: { A: "Roll about", B: "Mock", C: "Protest", D: "Borrow" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 76,
    subject: "English",
    title: "Choose the NEAREST CORRECT MEANING: CONNOISSEUR",
    options: { A: "Guide artist", B: "Artist", C: "Expert critic of art", D: "Teacher" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 77,
    subject: "English",
    title: "Choose the NEAREST CORRECT MEANING: ECCENTRIC",
    options: { A: "Lunatic", B: "Stern", C: "Upset", D: "Odd" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 78,
    subject: "English",
    title: "Choose the NEAREST CORRECT MEANING: BOULDER",
    options: { A: "Rounded stone / hill", B: "Builder", C: "Magnanimity", D: "Magnitude" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 79,
    subject: "English",
    title: "Choose the NEAREST CORRECT MEANING: SLUMBER",
    options: { A: "Heap", B: "Humble", C: "Knee", D: "Sleep" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },

  // ==========================================
  // BIOLOGY (MDCAT 2010)
  // ==========================================
  {
    questionNo: 80,
    subject: "Biology",
    title: "Book lungs are present in arthropods for exchange of gases in class.",
    options: { A: "Crustacea", B: "Insect", C: "Myriapoda", D: "Arachinida" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 81,
    subject: "Biology",
    title: "Larvae of which group are similar to chordates?",
    options: { A: "Echinodermata", B: "Annelida", C: "Arthropoda", D: "Nematode" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 82,
    subject: "Biology",
    title: "Type of respiration which involves step by step breakdown of carbon chain molecules in the cell is called?",
    options: { A: "External respiration", B: "Cellular respiration", C: "Pulmonary respiration", D: "Cutaneous respiration" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 83,
    subject: "Biology",
    title: "Instrument which is used to measure relative abilities of different pigments to absorb different wavelength of light is called:",
    options: { A: "Spectrometer", B: "Photometer", C: "Barometer", D: "Spectrophotometer" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 84,
    subject: "Biology",
    title: "End products of yeast fermentation, bacterial fermentation and anaerobic respiration are",
    options: { A: "Citric acid, lactice acid, carbon dioxide and water", B: "Ethyl alcohol, citric acid and carbon dioxide", C: "Ethyl alcohol, lactic acid, carbon dioxide and water", D: "Methanol, lactice acid, and citric acid" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 85,
    subject: "Biology",
    title: "Which one of the following acts as functional unit of lungs in man?",
    options: { A: "Air sac", B: "Larynx", C: "Trachea", D: "Bronchioles" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 86,
    subject: "Biology",
    title: "Which one of the following factors is directly proportional to oxygen carrying capacity of haemoglobin?",
    options: { A: "Carbon dioxide", B: "Temperature", C: "pH", D: "light" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 87,
    subject: "Biology",
    title: "Which one of the following is a precursor of steroid hormones?",
    options: { A: "Glycerol", B: "Steol", C: "Amino acid", D: "Cholesterol" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 88,
    subject: "Biology",
    title: "Granulocytes or white blood cells are produced in",
    options: { A: "lymph nodes", B: "red bone marrow", C: "tonsils", D: "spleen" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 89,
    subject: "Biology",
    title: "Metabolic waste from metabolism of nucleic acid is",
    options: { A: "Uric acid", B: "Creatine", C: "Urea", D: "Creatinine" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 90,
    subject: "Biology",
    title: "The central metabolic station and clearing house of a body is",
    options: { A: "Liver", B: "Kidney", C: "Nephron", D: "Glomerulus" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 91,
    subject: "Biology",
    title: "The muscles that control urine in bladder are known as",
    options: { A: "Striated muscles", B: "Smooth muscles", C: "Sphincter muscles", D: "Circular muscles" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 92,
    subject: "Biology",
    title: "The living cells of cartilage are called",
    options: { A: "Chrondrocytes", B: "Osteoblasts", C: "Osteocytes", D: "Osteoclasts" },
    answer: "A",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 93,
    subject: "Biology",
    title: "Cloning is a form of",
    options: { A: "sexual reproduction", B: "asexual reproduction", C: "vegetative propagation", D: "genetic recombination" },
    answer: "B",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 94,
    subject: "Biology",
    title: "In prokaryotic cell, wall strengthening material is",
    options: { A: "Cellulose", B: "Silica", C: "Chitin", D: "Peptidoglycan" },
    answer: "D",
    source: "MDCAT Entrance Test 2010"
  },
  {
    questionNo: 95,
    subject: "Biology",
    title: "The ecological role of fungi as decomposers is paralleled only by",
    options: { A: "Prions", B: "Algae", C: "Bacteria", D: "Viruses" },
    answer: "C",
    source: "MDCAT Entrance Test 2010"
  },
  
  // ==========================================
  // MDCAT 2011 (MIXED)\n
  // ==========================================
  {
    questionNo: 96, // 2011 Physics
    subject: "Physics",
    title: "When the dimensions of both sides of an equation are equal, then the equation is side to be",
    options: { A: "Simultaneous", B: "Homologous", C: "Instantaneous", D: "Quadratic" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 97, // 2011 Physics
    subject: "Physics",
    title: "Radian is a unit of angular displacement which can also be measure in degrees. How many radians are equal to one degree?",
    options: { A: "180/π", B: "2π/180", C: "π/180", D: "57.3" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 98, // 2011 Physics
    subject: "Physics",
    title: "An elevator is moving upwards with constant velocity of 'v'. what is a weight of a person of mass 'm' inside the elevator during upwards motion?",
    options: { A: "Mg + mv", B: "Mg", C: "Mg - mv", D: "Zero" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 99, // 2011 Physics
    subject: "Physics",
    title: "An object having spherical shape of radius 'r' experiences a retarding force F from a fluid of co-efficient of viscosity 'n' when moving through the fluid with speed 'v'. what is the ratio of retarding force to speed?",
    options: { A: "6πη r^2", B: "6πη r", C: "6πη/r", D: "6πη v" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 100, // 2011 Chemistry
    subject: "Chemistry",
    title: "Number of neutrons in Kr (86/36) will be:",
    options: { A: "30", B: "35", C: "38", D: "50" }, // Actual is 50, but let's check options given: A: 30, B: 35, C: 38, D: 36 (Error in options in text, usually D is taken or closest if typo in text, let's represent text literally)
    answer: "D", // (According to the PDF key 2016 snippet where 36 is D but math says 50, I will use D as per source keys)
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 101, // 2011 Chemistry
    subject: "Chemistry",
    title: "The maximum number of electrons in electronic configuration can be calculated by using formula:",
    options: { A: "2l + 1", B: "2n^2 + 2", C: "2n^2", D: "2n^2 + 1" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 102, // 2011 Chemistry
    subject: "Chemistry",
    title: "Freezing point wil also be defined as that temperature at which its solid and liquid phases have the same:",
    options: { A: "Concentration", B: "Ratio between the particles", C: "Vapour pressure", D: "Attraction between the phase" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 103, // 2011 Chemistry
    subject: "Chemistry",
    title: "What mass of NaOH is present in 0.5 mol of sodium hydroxide?",
    options: { A: "40 gm", B: "2.5 gm", C: "15 gm", D: "20 gm" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 104, // 2011 Chemistry
    subject: "Chemistry",
    title: "Human blood maintains its pH between:",
    options: { A: "6.50 – 7.00", B: "7.20 – 7.25", C: "7.50 – 7.55", D: "7.35 – 7.40" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 105, // 2011 Chemistry
    subject: "Chemistry",
    title: "The rate constant 'k' is 0.693 min^-1. The half life for the 1st order reaction will be:",
    options: { A: "1 min", B: "2 min", C: "0.693 min", D: "4 min" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 106, // 2011 Chemistry
    subject: "Chemistry",
    title: "Which halogen molecule 'X2' has lowest dissociation energy?",
    options: { A: "CI2", B: "Br2", C: "I2", D: "F2" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 107, // 2011 Chemistry
    subject: "Chemistry",
    title: "Which element of 3d series of periodic table shows the electronic configuration of 3d8, 4s2?",
    options: { A: "Copper", B: "Cobalt", C: "Zinc", D: "Nickel" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 108, // 2011 Chemistry
    subject: "Chemistry",
    title: "The %age of nitrogen in ammonium nitrate is",
    options: { A: "46%", B: "82%", C: "33%", D: "13%" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 109, // 2011 Chemistry
    subject: "Chemistry",
    title: "Synthesis of ammonia by Haber's process is a reversible reaction. What should be done to increase the yield of ammonia in the following reaction? N2(g) + 3H2(g) ⇌ 2NH3(g) H = -92 kJmol^-1",
    options: { A: "Pressure should be decreased", B: "Ammonia should remain in reaction mixture", C: "Pressure should be incresed", D: "Concentration of nitrogen should be decreased" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 110, // 2011 English
    subject: "English",
    title: "His theories have been _______ by recent research.",
    options: { A: "Pronounced", B: "Rearmed", C: "Dammed", D: "Debunked" },
    answer: "D", // Example
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 111, // 2011 English
    subject: "English",
    title: "International rules __________ the number of foreign entrants.",
    options: { A: "Hoodwink", B: "Stipulate", C: "Fabricate", D: "Traverse" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 112, // 2011 English
    subject: "English",
    title: "The assassination of the presedent __________ the country into war.",
    options: { A: "Articulated", B: "Boomed", C: "Hobbled", D: "Precipitated" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 113, // 2011 English
    subject: "English",
    title: "She might be forgiven for _________ beneath the pressure.",
    options: { A: "Undertaking", B: "Extricating", C: "Buckling", D: "Resounding" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 114, // 2011 English
    subject: "English",
    title: "NEAREST CORRECT MEANING: STALWART",
    options: { A: "Loyal", B: "Lazy", C: "Lacking strength", D: "High" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 115, // 2011 English
    subject: "English",
    title: "NEAREST CORRECT MEANING: CHIVALRY",
    options: { A: "Coward", B: "Non-cooperative", C: "Imitating", D: "Gallant" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 116, // 2011 Biology
    subject: "Biology",
    title: "Random, uncontrolled activity of some cells in the brain leading to chaotic activity in both sensory and motor nerves causes patients of to see and heat different strange things.",
    options: { A: "Epilepsy", B: "Parkinson’s Disease", C: "Alzheimer’s Disease", D: "Huntington’s Disease" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 117, // 2011 Biology
    subject: "Biology",
    title: "Part of hind brain responsible for the balance and equilibrium of body is called",
    options: { A: "Medulla", B: "Cerebellum", C: "Pons", D: "Thalamus" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 118, // 2011 Biology
    subject: "Biology",
    title: "Transmission of Neisseria gonorrhea is best described by which one of the following?",
    options: { A: "Oro-feal route", B: "Unsafe sex", C: "Vector brone", D: "Droplet infection" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 119, // 2011 Biology
    subject: "Biology",
    title: "Syphilis is caused by",
    options: { A: "Spirochete", B: "Nostoc", C: "Water blooms", D: "Cyanobacteria" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 120, // 2011 Biology
    subject: "Biology",
    title: "AIDS is caused by",
    options: { A: "Bacteria", B: "Virus", C: "Fungi", D: "Alga" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 121, // 2011 Biology
    subject: "Biology",
    title: "Brain is protected and enclosed in",
    options: { A: "Lumbar vertebrae", B: "Coccyx", C: "Vertebral column", D: "Caranium" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 122, // 2011 Biology
    subject: "Biology",
    title: "Longest bone in the human skeleton is",
    options: { A: "Ulna", B: "Fibula", C: "Tibia", D: "Femur" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 123, // 2011 Biology
    subject: "Biology",
    title: "Hips and shoulder joints are examples of",
    options: { A: "Hinge joints", B: "Ball and socket joints", C: "Synovial joints", D: "Cartilaginous joints" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 124, // 2011 Biology
    subject: "Biology",
    title: "In pelvic region of human bosy, sacrum is formed by the fusion of:",
    options: { A: "4 vertebrae", B: "5 vertebrae", C: "6 vertebrae", D: "3 vertebrae" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 125, // 2011 Biology
    subject: "Biology",
    title: "Each muscle fibre is surrounded by a modified cell membrance called:",
    options: { A: "Sarcolemma", B: "Sarcomere", C: "Myosin filament", D: "Myofilament" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 126, // 2011 Biology
    subject: "Biology",
    title: "___________ hormone is antagonistic to insulin and causes increase in blood glucose level.",
    options: { A: "Glucagon", B: "Nor-epinephrine", C: "Calcitonin", D: "Thyroxine" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 127, // 2011 Biology
    subject: "Biology",
    title: "Beta cells of islets of Langerhans produce ______________ hormone.",
    options: { A: "Glucagon", B: "Insulin", C: "Pancreatic juice", D: "Parathormone" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 128, // 2011 Biology
    subject: "Biology",
    title: "The central portion of adrenal gland (adrenal medulla) produces hormone.",
    options: { A: "Aldosterone", B: "Epinephrine", C: "Androgen", D: "Corticosterone" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 129, // 2011 Biology
    subject: "Biology",
    title: "____________ hormones are called fight and flight hormones as they prepare an organism to face stressful situation.",
    options: { A: "Adrenaline, aldosterone", B: "Epinephrine, nor-epinephrine", C: "Cortisone, oxytocin", D: "Thyroxine, nor-epinephrine" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 130, // 2011 Biology
    subject: "Biology",
    title: "B-cells release antibodies in blood plasma, tissue fluid and lymph. This kind of immune response is called:",
    options: { A: "Cell mediated response", B: "Humoral response", C: "Active response", D: "Compound response" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 131, // 2011 Biology
    subject: "Biology",
    title: "The type of immunity which antibodies are passed from one individual to another is called:",
    options: { A: "Passive immunity", B: "Artificial active immunity", C: "Natural active immunity", D: "Humoral immunity" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 132, // 2011 Biology
    subject: "Biology",
    title: "To combat the active infections of tetanus, rabies and snakes the _________ method of immunization is used:",
    options: { A: "Active", B: "Humoral", C: "Active artificial", D: "Passive" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 133, // 2011 Biology
    subject: "Biology",
    title: "In antibodies molecule, two heavy and two light chains are bonded by",
    options: { A: "disulphide bond", B: "monosulphide bond", C: "hydrogen bond", D: "ionic bond" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 134, // 2011 Biology
    subject: "Biology",
    title: "Each ____________ consists of a light gathering antenna complex and reaction center.",
    options: { A: "Chlorophyll", B: "Photosystem", C: "Photon", D: "Electron" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 135, // 2011 Biology
    subject: "Biology",
    title: "Photosystem I has chlorophyll a molecules which absorb maximum light of",
    options: { A: "680 nm", B: "780 nm", C: "700 nm", D: "580 nm" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 136, // 2011 Biology
    subject: "Biology",
    title: "Cyclic flow or C4 photosynthesis produces:",
    options: { A: "ATP and CO2", B: "ATP", C: "Only CO2", D: "Only oxygen" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 137, // 2011 Biology
    subject: "Biology",
    title: "Immediate product formed after CO2 fixation in Calvin cycle is",
    options: { A: "Unstable 6 carbon compound", B: "Unstable 5-carbon compound", C: "Unstable 4-carbon compound", D: "Unstable 3-carbon compound" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 138, // 2011 Biology
    subject: "Biology",
    title: "The rapid exchange of materials through carrier proteins across the plasma membrane is called:",
    options: { A: "passive diffusion", B: "active transport", C: "endocytosis", D: "facilitated diffusion" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 139, // 2011 Biology
    subject: "Biology",
    title: "The inner membrane of mitochondria form extensive infoldings called:",
    options: { A: "cristae", B: "cisternae", C: "lamella", D: "bifidae" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 140, // 2011 Biology
    subject: "Biology",
    title: "Which one of the following organelle is found in both prokaryotic and eukaryotic cells?",
    options: { A: "Centriole", B: "Endoplasmic reticulum", C: "Nucleus", D: "Ribosome" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 141, // 2011 Biology
    subject: "Biology",
    title: "The compounds which on hydrolysis yield polyhydroxy aldehyde or ketone subunits are",
    options: { A: "Lipids", B: "Proteins", C: "Polynucleotides", D: "Carbohydrates" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 142, // 2011 Biology
    subject: "Biology",
    title: "Secondary structure of protein is found in",
    options: { A: "Trypsin", B: "Keratin", C: "Insulin", D: "Glucagon" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 143, // 2011 Biology
    subject: "Biology",
    title: "Waxes are formed by combination of fatty acids with",
    options: { A: "Alcohol", B: "Glycerol", C: "Serine", D: "Cysteine" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 144, // 2011 Biology
    subject: "Biology",
    title: "All viruses can reproduce within living organisms only, so they are known as:",
    options: { A: "Ectoparasites", B: "Endoparasites", C: "Obligative intracellular parasites", D: "Faculatative intracellular parasites" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 145, // 2011 Biology
    subject: "Biology",
    title: "Many bacteria are motile due to presence of",
    options: { A: "Flagella", B: "Pilli", C: "Cilia", D: "Microtubles" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 146, // 2011 Biology
    subject: "Biology",
    title: "___________ is an invagination of cell membrane which helps in cell division.",
    options: { A: "Fimbriae", B: "Nucleoid", C: "Mesosome", D: "Endospore" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 147, // 2011 Biology
    subject: "Biology",
    title: "____________ is the yeast that grows in the mucous membrane of mouth or vagina.",
    options: { A: "Candida albicans", B: "Saccharomyces cervisiae", C: "Aspergillus fumigatus", D: "Aspergillus flavus" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 148, // 2011 Biology
    subject: "Biology",
    title: "Taenia is an endoparasite of human, pig and cattle which belongs to phylum.",
    options: { A: "Cnidaria", B: "Aschelminthes", C: "Annelida", D: "Platyhelminthes" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 149, // 2011 Biology
    subject: "Biology",
    title: "Body of ________ consists of segments called proglottis which contains mainly sex organs.",
    options: { A: "Planaria", B: "Ascaris", C: "Fasciola", D: "Tapeworm" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 150, // 2011 Biology
    subject: "Biology",
    title: "__________ is a common parasite of the intestine of human and pig which belongs to phylum nematode.",
    options: { A: "Taenia solanum", B: "Schistosoma", C: "Ascaris lumbriocoides", D: "Fasciola hepatica" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 151, // 2011 Biology
    subject: "Biology",
    title: "In radial symmetry all body parts are arranged around the central axis. radial symmetry represents _________ mode of life.",
    options: { A: "Sessile", B: "Streamlined", C: "Active", D: "Parasitic" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 152, // 2011 Biology
    subject: "Biology",
    title: "Pseudo-coelomates have a body cavity but it is not true coelom. Which one of the following is included in the group.",
    options: { A: "Planaria", B: "Tapeworm", C: "Earthworm", D: "Ascaris" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 153, // 2011 Biology
    subject: "Biology",
    title: "Digestion of _________ starts in oral cavity due to the action of enzyme present in salvia.",
    options: { A: "Starch", B: "Cellulose", C: "Fatty acids", D: "Polypeptides" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 154, // 2011 Biology
    subject: "Biology",
    title: "Food enters from stomach into small intestine through",
    options: { A: "Pyloric sphincter", B: "Cardiac sphincter", C: "Semilunar valve", D: "Diaphragm" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 155, // 2011 Biology
    subject: "Biology",
    title: "_________ are the part of a gastric gland which produce hydrochloric acid.",
    options: { A: "Parietal cells", B: "Goblet cells", C: "Chief cells", D: "Zymogen cells" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 156, // 2011 Biology
    subject: "Biology",
    title: "Protein components of food are digested by the enzymatic secretion of",
    options: { A: "Goblet cells", B: "Parietal cells", C: "Zymogen cells", D: "Oxyntic cells" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 157, // 2011 Biology
    subject: "Biology",
    title: "In human the closed sac which surrounded the heart is",
    options: { A: "Endocardium", B: "Myocardium", C: "Pericardium", D: "Epicardium" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 158, // 2011 Biology
    subject: "Biology",
    title: "Bicuspid valve controls the flow of blood from",
    options: { A: "Right atrium to right ventricle", B: "Right ventricle to pulmonary artery", C: "Left ventricle to aorta", D: "Left atrium to left ventricle" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 159, // 2011 Biology
    subject: "Biology",
    title: "Carboxyhaemoglobin (10-20%) is formed when CO2 combines with",
    options: { A: "Amino group of haemoglobin", B: "Iron part of haemoglobin", C: "Haem portion of haemoglobin", D: "Plasma proteins" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 160, // 2011 Biology
    subject: "Biology",
    title: "Breathing consists of",
    options: { A: "Four phases", B: "Three phases", C: "One phase", D: "Two phases" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 161, // 2011 Biology
    subject: "Biology",
    title: "The organisms of third trophic level are",
    options: { A: "Primary consumer", B: "Primary producer", C: "Tertiary consumer", D: "Secondary consumer" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 162, // 2011 Biology
    subject: "Biology",
    title: "The ultimate source of energy in an ecosystem is",
    options: { A: "Photosynthesis", B: "Sun", C: "Plants", D: "Water" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 163, // 2011 Biology
    subject: "Biology",
    title: "All the food chains and food webs begin with",
    options: { A: "Detritus", B: "Herbivores", C: "Green plants", D: "Omnivores" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 164, // 2011 Biology
    subject: "Biology",
    title: "The change from back rock or open are is rapid, especially in the initial stages and follows a series of recognizable and hence predictable stages. This process is called:",
    options: { A: "Pioneers", B: "Xerosere", C: "Succession", D: "Secondary succession" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 165, // 2011 Biology
    subject: "Biology",
    title: "The decline in the thickness of ozone layer is caused by",
    options: { A: "Increasing level of nitrogen oxide", B: "Decreasing level of O2", C: "Decreasing leve of CFCs", D: "Increasing level of CFCs" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 166, // 2011 Biology
    subject: "Biology",
    title: "Which one of the following is considered as strong evidence of evolution?",
    options: { A: "Embroylogy record", B: "Molecular record", C: "Biochemical record", D: "Fossil record" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 167, // 2011 Biology
    subject: "Biology",
    title: "Structures found in different species which are belived to have a common evolutionary origin are called",
    options: { A: "Homologous", B: "Analogous", C: "Vestigial", D: "Fossilized" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 168, // 2011 Biology
    subject: "Biology",
    title: "Which one of the following is X-linked trait?",
    options: { A: "Male pattern baldness", B: "Diabetes mellitus", C: "Haemophilia", D: "Erythroblastosis eietalis" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 169, // 2011 Biology
    subject: "Biology",
    title: "A character determined by three alleles is",
    options: { A: "Human skin colour", B: "Human blood group", C: "Human eye colour", D: "Human RH factor" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 170, // 2011 Biology
    subject: "Biology",
    title: "The total number of genes in a population is called",
    options: { A: "Gene pool", B: "Allele pool", C: "Genome", D: "Genomic library" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 171, // 2011 Biology
    subject: "Biology",
    title: "___________ is the branch of biology used for the identification and interpretation of fossils.",
    options: { A: "Evalution", B: "Paleontology", C: "Zoogeography", D: "Biodiversity" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 172, // 2011 Biology
    subject: "Biology",
    title: "Out of the given options, choose the one which show sthe structures found only in plants.",
    options: { A: "Vocuole, chloroplast, ribosomes", B: "Chloroplast, microtubules, peroxisomes", C: "Chloroplast, cell wall, vacuole", D: "Chloroplast, cell wall, mitochondria" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 173, // 2011 Biology
    subject: "Biology",
    title: "Presence of large central vacuole is the characteristic of",
    options: { A: "Prokaryotes", B: "Protists", C: "Fungi", D: "Plants" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 174, // 2011 Biology
    subject: "Biology",
    title: "The basic structure of plasma membrane is provided by",
    options: { A: "Proteins", B: "Chloesterols", C: "Cytoskeleton", D: "Phospholipids" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 175, // 2011 Biology
    subject: "Biology",
    title: "The organelle involved in detoxification of drugs and poins in the liver cells is",
    options: { A: "Smooth endoplasmic reticulum", B: "Rough endouplasmic reticulum", C: "Golgi apparatus", D: "Lysosomes" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 176, // 2011 Biology
    subject: "Biology",
    title: "Down’s syndrome is characterized by _________ at chromosome 21.",
    options: { A: "Trisomy", B: "Monosomy", C: "Polysomy", D: "Disomy" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 177, // 2011 Biology
    subject: "Biology",
    title: "Which of the following is an example of autosomal non-disjunction?",
    options: { A: "Turner’s syndrome", B: "Jacob’s syndrome", C: "Metastasis", D: "Down’s syndrome" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 178, // 2011 Biology
    subject: "Biology",
    title: "Infertility, short height, webbed neck and low hairline at lack are symptoms of ________ symdrome.",
    options: { A: "Turner’s", B: "Down’s", C: "Endwards", D: "Patau’s" },
    answer: "A",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 179, // 2011 Biology
    subject: "Biology",
    title: "The concentration of sodium ions in body fluids to controlled by the hormone",
    options: { A: "Renine", B: "Aldosterone", C: "Angiotensin", D: "CPK" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 180, // 2011 Biology
    subject: "Biology",
    title: "A hormone released from posterior pituitary lobe acts to be actively transport water from filtrate is collecting tubules back to kidney is shown as",
    options: { A: "Renine", B: "Antidiuretic hormone", C: "Angiotensin", D: "Growth factor" },
    answer: "B",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 181, // 2011 Biology
    subject: "Biology",
    title: "The removal metabolic waste from the blood is called",
    options: { A: "Thermoregulation", B: "Osmoregulation", C: "Kidney failure", D: "Excretion" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 182, // 2011 Biology
    subject: "Biology",
    title: "High toxic nitrogenous excretory product is",
    options: { A: "CO2", B: "Uric acid", C: "Urea", D: "Ammonia" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 183, // 2011 Biology
    subject: "Biology",
    title: "Humans have homeostatic thermostat present in a specified portion of the brain that is",
    options: { A: "Lateral ventricle", B: "Thalamus", C: "Spinal cord", D: "Hypothalamus" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 184, // 2011 Biology
    subject: "Biology",
    title: "The disease in which death of small number of cells in the basal ganglia leads to inability to select and initiate patterns of movement is known as:",
    options: { A: "Fever", B: "Alzheimer’s disease", C: "Epilepsy", D: "Parkinson’s disease" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 185, // 2011 Biology
    subject: "Biology",
    title: "A neurological disorder characterized by the decline in brain function is __________. Its symptoms are similar to those disease that cause dementia.",
    options: { A: "Parkinson’s disease", B: "Epilepsy", C: "Alzheimer’s disease", D: "Diabetes" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 186, // 2011 Biology
    subject: "Biology",
    title: "A discharge by brain which cause choatic activity in motor and sensory areas is",
    options: { A: "Meningitis", B: "Alzheimer’s disease", C: "Epilepsy", D: "Parkinson’s disease" },
    answer: "C",
    source: "MDCAT Entrance Test 2011"
  },
  {
    questionNo: 187, // 2011 Biology
    subject: "Biology",
    title: "Which hormonal pairs shares a common hypothalamic releasing factor?",
    options: { A: "STH and LH", B: "ACTH and LH", C: "FSH and STH", D: "FSH and LH" },
    answer: "D",
    source: "MDCAT Entrance Test 2011"
  }
];