let key;
let words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", 
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yellow", 
    "zucchini", "ant", "bee", "cat", "dog", "elephant", "frog", "goat", "horse", 
    "iguana", "jaguar", "kangaroo", "lion", "monkey", "newt", "owl", "penguin", 
    "quail", "rabbit", "snake", "tiger", "urchin", "vulture", "whale", "xenops", 
    "yak", "zebra", "adventure", "brave", "curious", "dream", "exciting", "fun", 
    "giggle", "happy", "imagine", "joyful", "kind", "laugh", "magical", "novel", 
    "optimistic", "playful", "quirky", "radiant", "smile", "thrill", "unique", 
    "vivid", "wonder", "xenial", "youthful", "zeal", "azure", "beige", "crimson", 
    "denim", "emerald", "fuchsia", "gold", "hazel", "indigo", "jade", "khaki", 
    "lavender", "maroon", "navy", "olive", "peach", "quartz", "ruby", "sapphire", 
    "teal", "umber", "violet", "wheat", "xanadu", "yellowgreen", "zinnia",
    "abacination", "abscission", "abstemiously", "acquiesce", "acrimonious", "adumbrate", "aegis", 
    "allegiance", "ambidextrous", "ameliorate", "amorphous", "anachronistic", "anathema", "antediluvian", 
    "anthropocentric", "antidisestablishmentarianism", "apocryphal", "apoplectic", "apostasy", 
    "aristocratic", "ascetic", "asphyxiation", "assiduous", "asterisk", "asymptote", "atrophy", 
    "audacious", "auspicious", "autochthonous", "avuncular", "bacchanalian", "bellicose", "benefactor", 
    "benevolent", "bibliophile", "bijouterie", "blasphemous", "boondoggle", "bourgeoisie", "braggadocio", 
    "brobdingnagian", "cacophony", "camaraderie", "candelabrum", "capitulate", "cataclysm", "cataract", 
    "catharsis", "caustic", "celerity", "cerebellum", "circumlocution", "circumvent", "clairvoyant", 
    "claustrophobia", "cognizance", "colloquial", "concatenation", "conflagration", "conglomerate", 
    "conscientious", "conundrum", "convivial", "copacetic", "corroborate", "cryptography", "culpability", 
    "curmudgeon", "cynosure", "deleterious", "demagogue", "denouement", "desultory", "dichotomy", 
    "didactic", "dilapidated", "dilettante", "discombobulate", "disenfranchise", "disingenuous", 
    "disparate", "disseminate", "dissonant", "distinguish", "divisive", "docile", "doctrinaire", 
    "dogmatic", "doppelganger", "ebullient", "eclectic", "effervescent", "efficacious", "effulgent", 
    "egregious", "elucidate", "emaciated", "embellish", "emollient", "empirical", "empyrean", "enervate", 
    "enfranchise", "ennui", "ephemeral", "epistolary", "equanimity", "equivocate", "erudite", "esoteric", 
    "ethereal", "euphemism", "evanescent", "evocative", "exacerbate", "exculpate", "exigent", "exonerate", 
    "expedient", "expunge", "extrapolate", "facetious", "fallacious", "farrago", "fastidious", "fatuous", 
    "feckless", "fecund", "felicitous", "feral", "fetter", "flippant", "florid", "forbearance", 
    "fortuitous", "frivolous", "furtive", "garrulous", "gasconade", "genuflect", "gossamer", 
    "grandiloquent", "gregarious", "grotesque", "guile", "guttural", "harangue", "harbinger", 
    "harlequin", "hedonistic", "hegemonic", "hegemony", "heterogeneous", "histrionic", "holistic", 
    "hubristic", "iconoclast", "idiosyncratic", "ignominious", "illustrious", "imbroglio", "immaculate", 
    "impecunious", "impervious", "impetuous", "implacable", "importune", "imprecation", "improvident", 
    "inchoate", "incognito", "incontrovertible", "indefatigable", "indelible", "indigenous", 
    "indispensable", "indomitable", "ineffable", "inexorable", "infallible", "infinitesimal", 
    "infrastructure", "ingenuous", "inimical", "iniquity", "inscrutable", "insidious", "insouciant", 
    "interlocutor", "internecine", "interstitial", "intrepid", "inure", "inveterate", "invidious", 
    "irrefragable", "irreparable", "irreproachable", "irreverent", "jargon", "jejune", "juxtaposition", 
    "labyrinthine", "lachrymose", "lackadaisical", "lagniappe", "languid", "lapidary", "largesse", 
    "lassitude", "latent", "laudable", "laureate", "legerdemain", "lethargy", "litigious", "loquacious", 
    "lugubrious", "luminous", "magnanimous", "malevolent", "malfeasance", "malinger", "malleable", 
    "manifold", "mellifluous", "mendacious", "mercurial", "meritorious", "metamorphosis", "metaphysical", 
    "meticulous", "milieu", "minutiae", "misanthrope", "misogynist", "mnemonic", "modicum", "mollify", 
    "monolithic", "mordant", "multifarious", "munificent", "nadir", "nascent", "nebulous", "nefarious", 
    "neologism", "neophyte", "noisome", "nonchalant", "nostalgia", "notoriety", "obdurate", "obfuscate", 
    "obsequious", "obstreperous", "obtrusive", "obviate", "omniscient", "onerous", "opprobrium", 
    "ostensible", "ostentatious", "ostracize", "palliative", "palpable", "paradigm", "paragon", 
    "pariah", "parochial", "parsimonious", "patrician", "patronize", "pedagogue", "pedantic", 
    "pellucid", "penurious", "perfidious", "perfunctory", "pernicious", "perspicacious", "perspicuous", 
    "pertinacious", "petulant", "phlegmatic", "picaresque", "piety", "pinnacle", "piquant", "placate", 
    "plaintive", "plenitude", "plethora", "portentous", "precipitate", "preclude", "predilection", 
    "preeminent", "prevaricate", "proclivity", "prognosticate", "prolix", "prosaic", "proselytize", 
    "protean", "provenance", "providential", "proviso", "pugnacious", "pulchritude", "punctilious", 
    "quandary", "quiescent", "quintessential", "quixotic", "quotidian", "raconteur", "rarefied", 
    "recalcitrant", "recapitulate", "recondite", "redolent", "redoubtable", "refractory", "refulgent", 
    "regale", "relegate", "remonstrate", "renegade", "repartee", "reprobate", "resilient", "resplendent", 
    "reticent", "reverberate", "reverie", "rhapsodize", "ribald", "risible", "robust", "rueful", 
    "sacrosanct", "sagacious", "salient", "salubrious", "sanctimonious", "sanguine", "sartorial", 
    "satiate", "saturnine", "scintillate", "scrupulous", "sedentary", "sedition", "seditious", 
    "segregate", "seminal", "sententious", "sequester", "serendipity", "servile", "simulacrum", 
    "skeptical", "slapdash", "solicitous", "soliloquy", "somnolent", "sophistry", "spartan", 
    "specious", "splenetic", "spurious", "stalwart", "stentorian", "stoic", "stratagem", "strident", 
    "stringent", "stultify", "subjugate", "sublime", "subordinate", "subsume", "subterfuge", 
    "succinct", "supercilious", "superfluous", "surreptitious"]
    
let isCorrect = false;
let entered_word = "";
let curr_word = "";
let word1= "";
let score = -1;
$(document).keydown(function(e){
    key = e.key;
    if(key === " "){
        key = "Space"
    }
    if(key === "Backspace"){
       entered_word = entered_word.slice(0,entered_word.length-1);
    }
    if(key === "Enter"){
        word1 = entered_word;
        entered_word = "";
        CheckWord(curr_word);
        GenerateWord();  
    }else{
        if((key!=="Backspace")){
            entered_word = entered_word + key;
        } 
    }
    $(`#${key}`).addClass("pressed");
    $(`#${key}`).css("color" , "purple");
    let audio = new Audio("keysound.mp3");
    audio.play();
    setTimeout(()=>{
        $(`#${key}`).toggleClass("pressed");
        $(`#${key}`).css("color" , "black");
    },50);
})

function GenerateWord(){

    curr_word = words[Math.floor(words.length*Math.random())];
    $("h2").text(curr_word);
    GetDictionary(curr_word);
}

function CheckWord(curr_word){
    if(curr_word === word1){
        score++;
        $("h3").text(`SCORE ${score}`);

    }
}

async function GetDictionary(word){
    try{
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if(!response){
            console.log("Unable to Get the Data");
        }
        let data = await response.json();
        let meaning = data[0].meanings[0].definitions[0].definition;
        $("h4").text(`Definition: ${meaning}`);
    }catch(err){
        $("h4").text("Cannot find Definition");
    }
}

