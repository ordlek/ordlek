this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
        "use strict";
        //FiXME: Translations
        var tr = {
            "WORDLE": "ORDLEG",
            "Wordle": "Ordleg",
            "": "",
            "@language": "da",
            "@title": "Ordleg - Gætte dagens ord",
            "@description": "Gæt dagens fem bogstavsord på seks forsøg",
            "@short_link": "bit.ly/ordleg",
            "@use_link_in_share": true,
            "": "",
            "@valid_letters": "abcdefghijklmnopqrstuvwxyzåæø",
            "@keyboard_top": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
            "@keyboard_mid": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "æ", "ø"],
            "@keyboard_bot": ["←", "z", "x", "c", "v", "b", "n", "m", "↵"],
            "": "",
            "": "",
            "gameState": "da-gameState",
            "statistics": "da-statistics",
            "fail": "fejl",
            "IN_PROGRESS": "IGANGVÆRENDE",
            "WIN": "VANDT",
            "FAIL": "IKKE VANDT",
            "Genius": "Geni!",
            "Magnificent": "Utrolig!",
            "Impressive": "Fantastisk!",
            "Splendid": "Imponerende!",
            "Great": "Godt!",
            "Phew": "Tæt på!",
            " letter must be ": " bogstaven skal være en ",
            "Guess must contain ": "Gæt ordet skal have: ",
            "Not valid in hard mode": "Ikke tilladt i den sværte variant",
            "Hard mode can only be enabled at the start of a round": "Den sværte variant kan kun aktiveres før første gæt",
            "No Data": "Ingen spillede runder endnu",
            "Not in word list": "Findes ikke i ordbogen",
            "Not enough letters": "Skal være fem bogstaver lange!",
            "Copied results to clipboard": "Resultatet går nu sæte ind i andre apps",
            "": "",
            "": "",
            "Settings": "Indstillinger",
            "Hard Mode": "Sværte variant",
            "Any revealed hints must be used in subsequent guesses": "Alle fundne bogstaver skal bruges i kommende gæt",
            "Dark Theme": "Mørkt tema",
            "Color Blind Mode": "Bedre farver til farveblind",
            "High contrast colors": "Farverne får højere tidlige",
            "Feedback": "Det oprindelige spil: ",
            "contact": '<a href="https://www.powerlanguage.co.uk/wordle/">Wordle in English</a>',
            "": "",
            "": "",
            "Statistics": "Statistikker",
            "Guess Distribution": "Gætte distribution:",
            "Next WORDLE": "Næste ord om: ",
            "Share": "Del",
            "Current Streak": "Antal passerede dage i træk",
            "Max Streak": "Max passerede dage i træk",
            "Win %": "Procentdelen vandt",
            "Played": "Spillede runder",
            "Won": "Vandt",
            "Av. Guesses": "Gætter i gennemsnit",
            "": "",
            "": "",
            "How to play": "Sådan spiller du",
            "Guess the <strong>WORDLE</strong> in 6 tries.": "Gæt dagens ord på seks forsøg!",
            "Each guess must be a valid 5 letter word. Hit the enter button to submit.": "Hvert gæt skal være fem bogstaver lang. Tryk på Enter for at kontrollere.",
            "After each guess, the color of the tiles will change to show how close your guess was to the word.": "Afhængigt af hvor tæt dit gæt var, så bliver de individuelle bogstaver i ordet farvede.",
            "": "",
            "Examples": "For eksempel:",
            "letter-a1": "g",
            "letter-a2": "æ",
            "letter-a3": "t",
            "letter-a4": "t",
            "letter-a5": "e",
            "The letter <strong>W</strong> is in the word and in the correct spot.": "Bogstavet <b>G</b> er på det rigtige sted.",
            "letter-b1": "o",
            "letter-b2": "r",
            "letter-b3": "d",
            "letter-b4": "e",
            "letter-b5": "t",
            "The letter <strong>I</strong> is in the word but in the wrong spot.": "Bogstavet <b>O</b> er inkluderet i ordet, men skal stå på et andet sted.",
            "letter-c1": "s",
            "letter-c2": "m",
            "letter-c3": "a",
            "letter-c4": "r",
            "letter-c5": "t",
            "The letter <strong>U</strong> is not in the word in any spot.": "Bogstavet <b>M</b> er ikke inkluderet i ordet.",
            "": "",
            "A new WORDLE will be available each day!": "Hver dag er der et nyt ord at gætte!",
            "": "",
            
        };

        //FIXME: Entire Word list
    var La = ['abbed', 'abort', 'acces', 'adept', 'adled', 'adræt', 'advis', 'aerob', 'afart', 'afasi',
'afbud', 'afdød', 'afgud', 'afhop', 'afise', 'afkog', 'afkom', 'aflad', 'aflyd', 'afløb',
'afsky', 'afslå', 'afstå', 'afsæt', 'aftag', 'aften', 'aftes', 'aftne', 'afvej', 'agape',
'agave', 'agens', 'agent', 'agere', 'agern', 'agnat', 'agoni', 'agora', 'agraf', 'agrar',
'agten', 'agter', 'agurk', 'ahorn', 'ajour', 'akryl', 'aksel', 'aksle', 'aktie', 'aktiv',
'aktor', 'aktør', 'alarm', 'albue', 'album', 'alder', 'alene', 'alert', 'algod', 'alhus',
'alias', 'alibi', 'alkyd', 'almen', 'almue', 'alpin', 'alrum', 'altan', 'alter', 'altid',
'altså', 'alvor', 'ambra', 'amorf', 'ampel', 'ampul', 'amøbe', 'andel', 'anden', 'andet',
'andre', 'angel', 'anger', 'angle', 'angre', 'angst', 'anion', 'anjon', 'ankel', 'anker',
'ankre', 'anlæg', 'anløb', 'annal', 'annua', 'anode', 'anråb', 'ansat', 'anset', 'anslå',
'anstå', 'antal', 'antik', 'anæmi', 'aorta', 'apati', 'apeks', 'appel', 'april', 'apsis',
'areal', 'arena', 'argon', 'argot', 'arier', 'arisk', 'arkiv', 'armod', 'aroma', 'arpet',
'arrak', 'array', 'arret', 'arrig', 'arsen', 'arsis', 'artig', 'asiat', 'asien', 'asiet',
'asket', 'aspic', 'astma', 'athen', 'atlas', 'atlet', 'atoni', 'attak', 'atten', 'atter',
'attrå', 'audit', 'augur', 'autor', 'avers', 'avind', 'avler', 'avnet', 'babel', 'bacon',
'badge', 'badut', 'bagel', 'bager', 'bagom', 'bagpå', 'bagud', 'bajer', 'bakke', 'bakse',
'balde', 'balje', 'balle', 'bamle', 'bamse', 'banal', 'banan', 'bande', 'bandt', 'bandy',
'bange', 'banjo', 'banke', 'banko', 'bantu', 'barak', 'barbe', 'barde', 'baret', 'barke',
'barok', 'baron', 'barre', 'barsk', 'baryl', 'baryt', 'basal', 'basar', 'basis', 'baske',
'basse', 'basta', 'baste', 'basun', 'batat', 'batch', 'batik', 'batte', 'batts', 'bavle',
'bebop', 'bedre', 'bedst', 'befor', 'befri', 'begav', 'beget', 'begge', 'begik', 'beglo',
'begær', 'behag', 'behov', 'beige', 'bejae', 'bejle', 'belæg', 'beløb', 'beløj', 'benet',
'benin', 'beret', 'beryl', 'besad', 'besat', 'beslå', 'bestå', 'besyv', 'besæt', 'besøg',
'betel', 'betle', 'betog', 'beton', 'betro', 'betød', 'bevis', 'beære', 'biavl', 'bibel',
'bidet', 'bidsk', 'bifag', 'bifil', 'bigot', 'bijob', 'bikse', 'bilag', 'bilde', 'biled',
'bille', 'bilyd', 'bimle', 'binde', 'bingo', 'binær', 'biord', 'bippe', 'birum', 'bisag',
'bisam', 'bisat', 'bisol', 'bison', 'bisse', 'bistå', 'bitte', 'bivej', 'bizar', 'bjerg',
'bjesk', 'bjørn', 'blade', 'blank', 'blase', 'blege', 'blegn', 'blide', 'blind', 'blini',
'blink', 'blist', 'blitz', 'blive', 'blond', 'blote', 'blues', 'bluff', 'blund', 'bluse',
'blære', 'blæse', 'blæst', 'bløde', 'blåne', 'bobbe', 'boble', 'bodil', 'bogie', 'bojan',
'bojar', 'bokse', 'bolig', 'bolle', 'bolte', 'bombe', 'bomme', 'bonde', 'bonus', 'booke',
'bopæl', 'borde', 'borge', 'borne', 'borst', 'borte', 'bosat', 'bosse', 'boule', 'bovne',
'bowle', 'boxer', 'brage', 'bragt', 'brand', 'brase', 'brask', 'brast', 'bravo', 'break',
'brede', 'brems', 'briks', 'brink', 'brint', 'brise', 'brist', 'brite', 'brudt', 'bruge',
'brugs', 'brune', 'bruse', 'brusk', 'bryde', 'brysk', 'bryst', 'bræge', 'brøde', 'brøle',
'brønd', 'brøst', 'buggy', 'bugne', 'bugte', 'buhko', 'buket', 'bukke', 'bukle', 'bulet',
'bulke', 'bulle', 'bulme', 'bulne', 'bumle', 'bumpe', 'bumse', 'bunde', 'bundt', 'bunke',
'burde', 'burma', 'burre', 'buske', 'buste', 'butan', 'butik', 'bybud', 'bybus', 'bydel',
'bygas', 'byget', 'bygge', 'bylte', 'bynke', 'bynær', 'byrde', 'byret', 'byråd', 'byste',
'bytte', "bz'er", 'bæger', 'bælge', 'bælle', 'bælte', 'bænke', 'bærer', 'bærme', 'bæven',
'bæver', 'bævre', 'bødle', 'bøffe', 'bøger', 'bøjle', 'bølge', 'bølle', 'bønne', 'børst',
'bøsse', 'bøtte', 'bøvet', 'bøvse', 'bånde', 'båret', 'båtte', 'cajun', 'ceder', 'celle',
'cello', 'cerut', 'charm', 'check', 'chile', 'chili', 'chips', 'cider', 'cigar', 'cirka',
'citar', 'citat', 'citer', 'civil', 'clips', 'coach', 'coate', 'conga', 'congo', 'corny',
'coupe', 'cover', 'crack', 'crawl', 'crazy', 'credo', 'creme', 'crepe', 'curie', 'cutte',
'cykel', 'cykle', 'cyste', 'cæsar', 'cæsur', 'dadel', 'dadle', 'dages', 'dalbo', 'daler',
'dalre', 'damet', 'dampe', 'danbo', 'dandy', 'daner', 'danne', 'danse', 'dansk', 'daske',
'datid', 'dativ', 'datja', 'david', 'davre', 'debat', 'debet', 'debil', 'debut', 'decca',
'decim', 'deger', 'deist', 'dejet', 'dejse', 'dekan', 'dekor', 'delle', 'delta', 'denar',
'denim', 'denne', 'dente', 'depot', 'deraf', 'derby', 'deres', 'derom', 'derop', 'derpå',
'derud', 'desto', 'dette', 'devon', 'devot', 'diare', 'dible', 'digel', 'diger', 'digte',
'dikke', 'dildo', 'dille', 'dinar', 'diner', 'dingo', 'diode', 'dipol', 'dirke', 'dirre',
'diset', 'diske', 'disse', 'ditto', 'divan', 'djærv', 'doble', 'dogme', 'dokke', 'dolce',
'dolke', 'dolme', 'domme', 'donna', 'donor', 'dorer', 'dorge', 'dorne', 'dorsk', 'dosis',
'douce', 'doven', 'dovne', 'doyen', 'dozer', 'drage', 'dragt', 'drama', 'drapa', 'dreje',
'drejl', 'drejø', 'dreng', 'dress', 'drift', 'drink', 'drive', 'droge', 'drone', 'drops',
'drost', 'drude', 'dræbe', 'dræne', 'dræve', 'drøje', 'drøne', 'dråbe', 'dubbe', 'duble',
'dufte', 'dugge', 'dukat', 'dukke', 'dulgt', 'dulle', 'dulme', 'dumme', 'dummy', 'dumpe',
'dunet', 'dunke', 'dunst', 'dunte', 'duppe', 'duren', 'dusin', 'dusør', 'dutte', 'dvale',
'dvask', 'dvæle', 'dværg', 'dybde', 'dybel', 'dybsø', 'dydig', 'dykke', 'dynge', 'dyppe',
'dyrke', 'dysse', 'dyste', 'dytte', 'dyvel', 'dægge', 'dække', 'dælen', 'dæmme', 'dæmon',
'dæmpe', 'dæmre', 'dænge', 'døber', 'dødis', 'dølge', 'dølle', 'dømme', 'dønne', 'døsig',
'døtre', 'dådyr', 'dålam', 'eclat', 'edder', 'eders', 'edikt', 'effen', 'efter', 'egern',
'egnet', 'ekkoe', 'eksem', 'eksil', 'elben', 'elbil', 'elegi', 'elgko', 'elite', 'eller',
'elske', 'elver', 'elvte', 'emmer', 'emsig', 'endda', 'endnu', 'endog', 'engel', 'enhed',
'enkel', 'enlig', 'enorm', 'enrum', 'ensom', 'ental', 'enten', 'entre', 'enzym', 'enøre',
'eolit', 'episk', 'epoke', 'epope', 'epoxy', 'erika', 'esrom', 'esrum', 'essay', 'essig',
'ester', 'etage', 'etape', 'etbær', 'etisk', 'etmål', 'ettal', 'etter', 'etude', 'etårs',
'eunuk', 'event', 'evert', 'exces', 'fabel', 'fable', 'facet', 'facil', 'facit', 'facon',
'facts', 'fader', 'fadøl', 'fager', 'fagot', 'fakir', 'fakse', 'fakta', 'falde', 'falle',
'falme', 'false', 'falsk', 'famle', 'famøs', 'fandt', 'fange', 'farad', 'farao', 'farce',
'faren', 'farin', 'farsi', 'farte', 'farum', 'farve', 'fasan', 'faste', 'fatal', 'fatte',
'fatwa', 'fauna', 'favne', 'favør', 'feber', 'fedme', 'fedte', 'fehår', 'fejde', 'fejle',
'fejre', 'femte', 'femti', 'femår', 'fenne', 'fenol', 'fenyl', 'ferie', 'ferle', 'fersk',
'feset', 'feste', 'fiber', 'fichu', 'ficus', 'fidel', 'fidus', 'fiffe', 'fifle', 'figen',
'fight', 'figur', 'fikse', 'filet', 'filme', 'filte', 'filur', 'fimre', 'fimse', 'final',
'finde', 'finer', 'finit', 'finke', 'finne', 'finsk', 'finte', 'firer', 'firma', 'firme',
'firti', 'fiset', 'fiske', 'fisse', 'fiste', 'fjant', 'fjase', 'fjeld', 'fjern', 'fjert',
'fjols', 'fjong', 'fjord', 'fjæle', 'fjært', 'flade', 'flage', 'flair', 'flakt', 'flane',
'flash', 'flere', 'flest', 'flink', 'flint', 'flire', 'flirt', 'flise', 'floks', 'flora',
'flove', 'fluat', 'flugt', 'fluid', 'fluks', 'fluor', 'flute', 'flyde', 'flyve', 'flæbe',
'flæng', 'flæse', 'flæsk', 'fløde', 'fløjl', 'fløjt', 'flåde', 'fnise', 'fnyse', 'foder',
'fodre', 'foged', 'fokus', 'folde', 'folie', 'folio', 'fonds', 'fonem', 'foran', 'forbi',
'force', 'fordi', 'forel', 'forgå', 'forke', 'forme', 'formå', 'forne', 'forny', 'forpå',
'forrå', 'forse', 'forså', 'forte', 'forud', 'forum', 'foråd', 'forår', 'fosse', 'foton',
'foyer', 'fragt', 'fragå', 'franc', 'frank', 'frase', 'freak', 'frede', 'frels', 'freon',
'frier', 'frise', 'frisk', 'frist', 'front', 'frost', 'frugt', 'fryde', 'frygt', 'fryse',
'fræse', 'fråde', 'fråds', 'fugte', 'fulde', 'fulgt', 'fumle', 'funke', 'fuppe', 'furet',
'furie', 'fusel', 'fuser', 'fuske', 'futil', 'futte', 'fylde', 'fylke', 'fynbo', 'fynsk',
'fyord', 'fyrig', 'fyrre', 'fyråb', 'fysik', 'fytin', 'fæces', 'fædre', 'fægte', 'fæhår',
'fæisk', 'fækal', 'fælde', 'fælle', 'fænge', 'færge', 'færre', 'fæste', 'føget', 'føjte',
'føler', 'følge', 'fører', 'først', 'fåret', 'fåtal', 'gabon', 'gaffe', 'gafle', 'gagat',
'galan', 'galar', 'galde', 'galej', 'galge', 'galla', 'galle', 'galon', 'galop', 'galpe',
'gambe', 'gamet', 'gamin', 'gamma', 'gange', 'garde', 'garve', 'gasse', 'gauge', 'gauss',
'gavne', 'geare', 'gebet', 'gebis', 'gebyr', 'gedde', 'gehør', 'gejle', 'gejst', 'gekko',
'geled', 'gemak', 'gemal', 'gemen', 'gemme', 'gemse', 'gemyt', 'genbo', 'genne', 'genom',
'genre', 'gense', 'genua', 'genus', 'gerne', 'gevir', 'gevær', 'ghana', 'gibbe', 'gifte',
'gigue', 'gilde', 'gimpe', 'gipse', 'giraf', 'gisne', 'gispe', 'gitov', 'gitre', 'given',
'giver', 'givet', 'gjald', 'gjord', 'gjort', 'glane', 'glans', 'glibe', 'glide', 'glime',
'glimt', 'gliom', 'globe', 'glose', 'glæde', 'gløde', 'gløgg', 'gnave', 'gnejs', 'gnide',
'gnier', 'gnist', 'gnome', 'godte', 'gokke', 'golde', 'gonge', 'gople', 'gorge', 'goter',
'gotik', 'gouda', 'grade', 'grams', 'grand', 'grant', 'grave', 'green', 'greje', 'grene',
'grenå', 'greve', 'gribe', 'grill', 'grime', 'grind', 'grine', 'grise', 'grisk', 'groft',
'grube', 'grums', 'grund', 'gruse', 'gryde', 'grynt', 'græde', 'græsk', 'grøde', 'grøft',
'grønt', 'gråne', 'guano', 'guava', 'gubbe', 'gubby', 'guffe', 'gufle', 'guide', 'gulne',
'gumle', 'gumme', 'gummi', 'gumpe', 'gunst', 'guppy', 'gylle', 'gylpe', 'gynge', 'gyser',
'gytje', 'gyvel', 'gække', 'gælde', 'gæler', 'gælle', 'gænge', 'gængs', 'gærde', 'gæste',
'gætte', 'gøgle', 'gønge', 'gåben', 'gålæg', 'gåset', 'gåtid', 'gåtur', 'habil', 'habit',
'hacke', 'hader', 'hadsk', 'hagle', 'haiku', 'haiti', 'hakke', 'hallo', 'halma', 'halon',
'halse', 'halte', 'halvø', 'hamit', 'hamle', 'hamre', 'handy', 'hanke', 'harem', 'harke',
'harme', 'harpe', 'harpy', 'harsk', 'harve', 'hasle', 'haspe', 'haste', 'hausa', 'havde',
'havne', 'havre', 'havål', 'heade', 'heale', 'heavy', 'hedde', 'heden', 'hefte', 'hegle',
'hegne', 'heile', 'hejre', 'hejsa', 'hejse', 'hekse', 'helle', 'helme', 'helse', 'helst',
'helår', 'heman', 'hende', 'hendø', 'hengå', 'henna', 'henne', 'henry', 'hense', 'hente',
'heppe', 'heraf', 'herme', 'herom', 'herop', 'heros', 'herpå', 'herre', 'herse', 'herte',
'hertz', 'herud', 'herut', 'hetze', 'hevet', "hf'er", "hh'er", 'hidse', 'hikke', 'hikst',
'hilde', 'hille', 'hilse', 'himle', 'hinde', 'hindi', 'hindu', 'hinke', 'hirse', 'hisse',
'hitte', 'hjald', 'hjalp', 'hjelm', 'hjord', 'hjort', 'hjælp', 'hobby', 'hoben', 'hobro',
'hofte', 'holde', 'holdt', 'hopla', 'hoppe', 'hopsa', 'horde', 'horst', 'hoste', 'hotel',
'house', 'hoved', 'hoven', 'hovne', 'hovsa', 'hudre', 'hugaf', 'hugge', 'hugst', 'hulke',
'hulle', 'human', 'humle', 'humme', 'humor', 'humpe', 'humus', 'humør', 'hurra', 'husar',
'huske', 'husly', 'hutle', 'hutre', 'hvalp', 'hvede', 'hvene', 'hveps', 'hverv', 'hvide',
'hvile', 'hvine', 'hvori', 'hvælv', 'hvæse', 'hybel', 'hyben', 'hydra', 'hygge', 'hykle',
'hylde', 'hyler', 'hylle', 'hymen', 'hymne', 'hynde', 'hyppe', 'hyrde', 'hysse', 'hytte',
'hyæne', 'hæder', 'hædre', 'hæfte', 'hægte', 'hækle', 'hælde', 'hæler', 'hælvt', 'hæmme',
'hænde', 'hænge', 'hærde', 'hærge', 'hætte', 'hævde', 'hævne', 'høfde', 'højde', 'højne',
'højre', 'højst', 'høker', 'høkre', 'hølæs', 'hønse', 'hører', 'hørig', 'hørme', 'høste',
'høtyv', 'høved', 'høvle', 'hånde', 'hånle', 'hånsk', 'håret', 'icing', 'ideal', 'ideel',
'idiom', 'idiot', 'idræt', 'ifald', 'iføre', 'ihjel', 'ikkun', 'iland', 'ilbud', 'ilder',
'ildhu', 'ildne', 'iling', 'ilsom', 'ilter', 'iltog', 'image', 'imens', 'immer', 'immun',
'indad', 'indbo', 'inden', 'inder', 'indgå', 'india', 'indre', 'indse', 'indsø', 'indvi',
'inert', 'infam', 'ingen', 'input', 'intet', 'intim', 'intro', 'inuit', 'irisk', 'ironi',
'irret', 'irøre', 'isbod', 'isbåd', 'isfri', 'ishav', 'ising', 'islag', 'islam', 'islom',
'islæg', 'islæt', 'issyl', 'istap', 'ister', 'istid', 'istme', 'ivrer', 'ivrig', 'jager',
'jagte', 'jaket', 'jakke', 'jambe', 'jamen', 'jamme', 'jamre', 'jante', 'japan', 'jappe',
'jaske', 'javel', 'jazze', 'jeans', 'jenka', 'jente', 'jeres', 'jeton', 'jobbe', 'jodle',
'jogge', 'joint', 'joker', 'jokke', 'jolle', 'jolre', 'joner', 'jorde', 'joule', 'jubel',
'juble', 'judas', 'judæa', 'juice', 'julsø', 'jumbe', 'jumbo', 'jumpe', 'junge', 'junke',
'junta', 'juvel', 'jæger', 'jærpe', 'jætte', 'jævne', 'jøkel', 'kabel', 'kable', 'kabys',
'kadet', 'kadre', 'kaffe', 'kagle', 'kahyt', 'kairo', 'kajak', 'kakao', 'kalas', 'kalde',
'kalif', 'kalke', 'kalla', 'kalot', 'kalve', 'kamel', 'kamik', 'kamin', 'kamme', 'kanal',
'kande', 'kanel', 'kanin', 'kanon', 'kante', 'kanut', 'kanån', 'kapel', 'kaper', 'kapok',
'kappe', 'kapre', 'kapun', 'kaput', 'karak', 'karat', 'karet', 'kargo', 'karma', 'karpe',
'karre', 'karry', 'karse', 'karsk', 'karte', 'karve', 'kasak', 'kasko', 'kasse', 'kaste',
'kasus', 'katar', 'katte', 'kavaj', 'kazoo', 'kebab', 'kedel', 'kefir', 'kegle', 'kejse',
'kejte', 'kelim', 'kende', 'kenya', 'kerne', 'kerte', 'kerub', 'ketch', 'ketle', 'keton',
'khmer', 'kigge', 'kikke', 'kikse', 'kilde', 'kilte', 'kimse', 'kinin', 'kinke', 'kiosk',
'kiper', 'kippa', 'kippe', 'kirke', 'kisel', 'kiste', 'kitin', 'kitte', 'kives', 'kjole',
'kjove', 'klage', 'klang', 'klaps', 'klare', 'klase', 'klask', 'klejn', 'klemt', 'klerk',
'klike', 'klima', 'kline', 'klink', 'klint', 'klips', 'klire', 'kloak', 'klode', 'klods',
'klone', 'klore', 'klovn', 'klump', 'kluns', 'klyde', 'klynk', 'klæbe', 'klæde', 'kløer',
'kløft', 'kløgt', 'kløve', 'knage', 'knald', 'knark', 'knarr', 'knase', 'knast', 'knibe',
'kniks', 'knips', 'knirk', 'knobe', 'knold', 'knort', 'knubs', 'knude', 'knuge', 'knuse',
'knyst', 'knæet', 'knægt', 'knæle', 'koala', 'koben', 'koble', 'kobra', 'koder', 'kofte',
'koger', 'kogeø', 'kogge', 'kogle', 'koket', 'kokon', 'kokos', 'kokse', 'kolbe', 'kolik',
'kolli', 'kolon', 'kolos', 'komet', 'komik', 'komma', 'komme', 'kondi', 'konet', 'konge',
'konti', 'konto', 'konus', 'kopar', 'kopek', 'kopra', 'koral', 'koran', 'korde', 'korea',
'korne', 'korps', 'korse', 'korso', 'korte', 'kosak', 'koste', 'koøje', 'kraal', 'krads',
'kraft', 'krage', 'krank', 'krans', 'krave', 'kravl', 'krebs', 'kreds', 'kremt', 'kreol',
'kreta', 'kreti', 'kridt', 'krimi', 'krise', 'kroat', 'kroge', 'kroki', 'krone', 'krudt',
'kruse', 'kruså', 'krybe', 'kryds', 'krypt', 'kræft', 'kræge', 'kræse', 'kræve', 'krøge',
'krøje', 'kråse', 'kubus', 'kugle', 'kujon', 'kukke', 'kukur', 'kulak', 'kulde', 'kulos',
'kulso', 'kulør', 'kumme', 'kumte', 'kunde', 'kunne', 'kunst', 'kuple', 'kupon', 'kuppe',
'kurer', 'kurie', 'kurre', 'kurve', 'kuske', 'kusse', 'kutte', 'kvaje', 'kvalm', 'kvalt',
'kvant', 'kvark', 'kvart', 'kvase', 'kvast', 'kvejl', 'kvide', 'kvint', 'kvist', 'kvota',
'kvote', 'kvæde', 'kvæge', 'kvæld', 'kvæle', 'kværk', 'kværn', 'kybel', 'kymre', 'kyper',
'kyras', 'kyrie', 'kysse', 'kæfte', 'kælen', 'kælke', 'kælve', 'kæmme', 'kæmpe', 'kæppe',
'kærne', 'kærre', 'kærte', 'kævle', 'køber', 'kødet', 'køler', 'kølig', 'kølle', 'kølne',
'kører', 'kørne', 'kørom', 'køter', 'kårde', 'laban', 'labbe', 'label', 'laber', 'labil',
'lader', 'lagde', 'lagen', 'lager', 'lagre', 'lakaj', 'lakke', 'lalle', 'lamel', 'lamme',
'lampe', 'lande', 'lange', 'langs', 'lanse', 'lapin', 'lapis', 'lappe', 'lapse', 'lapsk',
'large', 'largo', 'larme', 'larve', 'laser', 'laset', 'laske', 'lasso', 'laste', 'lasur',
'latex', 'latin', 'lavet', 'lease', 'leben', 'leder', 'ledes', 'ledet', 'ledig', 'lefle',
'legal', 'legat', 'legio', 'lejde', 'lejer', 'lejre', 'lemma', 'lempe', 'lemur', 'lento',
'leret', 'letal', 'lette', 'lever', 'levit', 'levne', 'levre', 'liden', 'lider', 'lidse',
'liere', 'lifte', 'ligge', 'light', 'ligne', 'likør', 'lilje', 'lilla', 'lille', 'limbo',
'limit', 'linde', 'liner', 'linie', 'linje', 'linke', 'linse', 'lirke', 'lisen', 'liste',
'liter', 'litra', 'livre', 'loade', 'lobbe', 'lobby', 'lodde', 'loden', 'lodse', 'logge',
'logik', 'logre', 'lokal', 'lokke', 'lokum', 'lomme', 'lomvi', 'longe', 'loope', 'loppe',
'loran', 'loren', 'losse', 'lotte', 'lotto', 'lotus', 'loyal', 'lubbe', 'luder', 'luffe',
'lufte', 'lugar', 'lugte', 'lukaf', 'lukke', 'lulle', 'lumen', 'lumpe', 'lumre', 'lumsk',
'lunch', 'lunde', 'lunge', 'lunke', 'lunte', 'lupin', 'luppe', 'lupus', 'lurer', 'luset',
'luske', 'lutre', 'lybsk', 'lybæk', 'lydig', 'lygte', 'lykke', 'lymfe', 'lynne', 'lyrik',
'lyske', 'lysne', 'lyste', 'lysår', 'lytte', 'læder', 'lægge', 'lægte', 'lækat', 'lække',
'læmme', 'længe', 'lænke', 'lænse', 'lærer', 'lærke', 'læser', 'læske', 'læspe', 'læsse',
'løber', 'løbsk', 'lødig', 'løfte', 'løjer', 'løjet', 'løjpe', 'løkke', 'lønne', 'løsen',
'løser', 'løsne', 'løves', 'løvet', 'låner', 'macho', 'macon', 'madam', 'mafia', 'mager',
'magma', 'magre', 'magte', 'major', 'makke', 'makro', 'malaj', 'maler', 'malke', 'malle',
'malmø', 'malta', 'malte', 'malør', 'mambo', 'mande', 'mandø', 'maner', 'mange', 'mango',
'mangt', 'manke', 'manko', 'manna', 'manne', 'manus', 'maori', 'mappe', 'march', 'marin',
'marsk', 'marts', 'marve', 'maser', 'maske', 'masse', 'masut', 'match', 'matte', 'medgå',
'media', 'medie', 'medio', 'megen', 'meget', 'mejer', 'mejse', 'mekka', 'melde', 'melet',
'melis', 'melon', 'mened', 'menig', 'mente', 'merit', 'merle', 'mesan', 'meson', 'messe',
'metal', 'metan', 'meter', 'metra', 'metro', 'metyl', 'mezzo', 'miave', 'midje', 'midte',
'midti', 'mikse', 'miljø', 'mille', 'mimer', 'mimik', 'mimre', 'minde', 'minus', 'minut',
'minør', 'misse', 'miste', 'mitra', 'mitte', 'mjave', 'mobbe', 'mobil', 'modal', 'model',
'modem', 'moden', 'moder', 'modgå', 'modig', 'modne', 'modul', 'modus', 'moire', 'mokka',
'mokke', 'molbo', 'moler', 'molok', 'molær', 'momse', 'monne', 'moppe', 'moral', 'morel',
'morse', 'moske', 'mosle', 'mossø', 'moste', 'motel', 'motet', 'motiv', 'motor', 'motto',
'mudre', 'muffe', 'mufle', 'mufti', 'mugge', 'mugne', 'muhko', 'mukke', 'mulat', 'mulig',
'mulkt', 'mulle', 'mumie', 'mumle', 'munde', 'murer', 'murre', 'musik', 'muzak', 'mynde',
'mynte', 'myose', 'myrde', 'myrra', 'myrte', 'mysli', 'mæcen', 'mægle', 'mægte', 'mælde',
'mælke', 'mænge', 'mærke', 'mæske', 'mætte', 'møbel', 'mødes', 'mødig', 'mødom', 'mødre',
'møffe', 'møgso', 'mølle', 'mønbo', 'mønje', 'mønne', 'mønsk', 'mønte', 'mørke', 'mørne',
'møver', 'måler', 'måned', 'månen', 'måske', 'måtte', 'nabob', 'nadir', 'nafta', 'nagle',
'nakke', 'nappa', 'nappe', 'narko', 'narre', 'narve', 'nasal', 'nasse', 'natte', 'natur',
'nauru', 'naver', 'navle', 'navne', 'nedad', 'neden', 'nedom', 'nedre', 'neger', 'negle',
'neksø', 'nemme', 'nepal', 'nerie', 'nertz', 'nerve', 'neste', 'netop', 'nette', 'netto',
'nevet', 'niche', 'nidsk', 'niece', 'niger', 'nikke', 'nilen', 'nippe', 'nipse', 'nisse',
'nital', 'nitid', 'nitte', 'niøje', 'niårs', 'nobel', 'nogen', 'noget', 'nogle', 'nokke',
'nomen', 'nonet', 'nonne', 'noppe', 'nopre', 'norge', 'norne', 'norsk', 'nosse', 'notar',
'notat', 'nubre', 'nudel', 'nulre', 'nulte', 'numse', 'nuppe', 'nurse', 'nusle', 'nusse',
'nutid', 'nuvel', 'nyder', 'nyhed', 'nykke', 'nylig', 'nylon', 'nymfe', 'nynne', 'nyrig',
'nysne', 'nysyn', 'nytid', 'nytte', 'nytår', 'næbes', 'næbet', 'nægte', 'nælde', 'nænne',
'næppe', 'nærig', 'nærme', 'nærpå', 'næste', 'næver', 'nævne', 'nævnt', 'nødig', 'nøfle',
'nøgen', 'nøgle', 'nøjes', 'nøkke', 'nøler', 'nørke', 'nådig', 'nådle', 'oblat', 'oblik',
'ocean', 'odder', 'odiøs', 'offer', 'okapi', 'okker', 'oktan', 'oktav', 'oktet', 'olden',
'oliet', 'olymp', 'ombud', 'ombuk', 'omega', 'omegn', 'omgås', 'omlyd', 'omløb', 'omvej',
'onani', 'onkel', 'onyks', 'opart', 'opbag', 'opbud', 'opera', 'opfej', 'opgør', 'ophav',
'ophug', 'ophør', 'opiat', 'opium', 'opkog', 'opkøb', 'oplag', 'oplæg', 'opløb', 'opret',
'oprik', 'oprør', 'opråb', 'opsat', 'opslå', 'opstå', 'opsyn', 'optag', 'optik', 'optil',
'optog', 'optur', 'opvej', 'opæde', 'opøve', 'orden', 'ordne', 'ordre', 'organ', 'orgel',
'orgie', 'orkan', 'orkis', 'orlon', 'orlov', 'ornat', 'oscar', 'osman', 'ostet', 'otium',
'otter', 'ounce', 'oveni', 'pacer', 'padde', 'padle', 'paffe', 'pagaj', 'paket', 'pakis',
'pakke', 'palet', 'palle', 'palme', 'palpe', 'pampa', 'panda', 'pande', 'panel', 'panik',
'pante', 'panty', 'papil', 'papir', 'pappe', 'parat', 'paria', 'paris', 'parka', 'parre',
'parti', 'party', 'paryk', 'pasha', 'passe', 'pasta', 'pater', 'patio', 'patos', 'patte',
'pauke', 'pause', 'peber', 'pebet', 'pebre', 'pedal', 'pedel', 'pejle', 'pelse', 'pence',
'penge', 'penis', 'penny', 'pensa', 'peppe', 'perle', 'perse', 'petit', 'pette', 'piano',
'piber', 'pibet', 'pible', 'piffe', 'pifte', 'piget', 'pikke', 'pilaf', 'pilke', 'pille',
'pilot', 'pimpe', 'pinde', 'pinje', 'pinol', 'pinse', 'pinup', 'pippe', 'pique', 'pirat',
'pirke', 'pirog', 'pirol', 'pirre', 'piske', 'pisse', 'pivot', 'pixel', 'pizza', 'pjalt',
'pjank', 'pjask', 'pjece', 'pjevs', 'pjusk', 'pjæve', 'plade', 'plads', 'plage', 'plaid',
'plane', 'plano', 'plask', 'plast', 'plebs', 'pleje', 'plejl', 'pleti', 'pligt', 'plint',
'plire', 'plump', 'plums', 'pluto', 'plæne', 'pløje', 'pløre', 'poche', 'poesi', 'point',
'poise', 'pokal', 'poker', 'polak', 'polar', 'polen', 'polet', 'polio', 'polka', 'polsk',
'polyp', 'polær', 'pomet', 'ponto', 'poppe', 'poret', 'porno', 'porre', 'porse', 'porto',
'porøs', 'poset', 'poste', 'posør', 'potte', 'power', 'pragt', 'praha', 'praje', 'prale',
'prate', 'prent', 'prima', 'prime', 'primo', 'prins', 'print', 'prior', 'prise', 'props',
'prosa', 'provo', 'prunk', 'prust', 'pryde', 'prygl', 'præge', 'præke', 'præst', 'prøve',
'psyke', 'pudre', 'pudse', 'puffe', 'puger', 'pukke', 'pukle', 'pulje', 'pulle', 'pulse',
'pumpe', 'punch', 'punge', 'punkt', 'pupil', 'puppe', 'purre', 'purse', 'pushe', 'pusle',
'puste', 'putte', 'putto', 'pygmæ', 'pylon', 'pylre', 'pynte', 'pyton', 'pægle', 'pøbel',
'pølle', 'pølse', 'pønse', 'påbud', 'påhit', 'påhør', 'pålæg', 'påløb', 'påske', 'påstå',
'påsyn', 'påtår', 'qatar', 'rabat', 'rabbi', 'rable', 'racer', 'radar', 'radio', 'radix',
'radon', 'radså', 'rafle', 'rafte', 'rager', 'rajah', 'raket', 'rakke', 'rakle', 'rakte',
'ralle', 'rally', 'ramle', 'ramme', 'rampe', 'ranch', 'rande', 'randt', 'range', 'ranke',
'rapid', 'rappe', 'rapse', 'rasle', 'raspe', 'raste', 'rasur', 'ratio', 'rayon', 'rebel',
'rebus', 'reces', 'redde', 'reder', 'redet', 'regal', 'regel', 'regne', 'rejfe', 'rejse',
'rekyl', 'remis', 'remse', 'rende', 'rense', 'rente', 'repos', 'retor', 'rette', 'retur',
'revet', 'revir', 'revle', 'revne', 'revse', 'ribbe', 'ridse', 'rigel', 'rigge', 'rigid',
'rigle', 'rille', 'rimpe', 'rimte', 'rinde', 'ringe', 'rinke', 'rippe', 'risle', 'rispe',
'riste', 'ritte', 'ritus', 'rival', 'river', 'robot', 'rocke', 'rodeo', 'rodet', 'rokke',
'rolig', 'rolle', 'roman', 'rombe', 'romer', 'rommy', 'rondo', 'rosen', 'roset', 'rosin',
'rotor', 'rotte', 'rouge', 'rough', 'rover', 'rovse', 'royal', 'rubbe', 'rubel', 'rubin',
'ruche', 'rudel', 'ruder', 'rudet', 'rufle', 'rugby', 'rulam', 'rulle', 'rumba', 'rumle',
'rumme', 'rumpe', 'runde', 'rundt', 'runge', 'rural', 'ruske', 'ruste', 'rutsj', 'rutte',
'rydde', 'ryger', 'rygte', 'rykke', 'rynke', 'ryste', 'rytme', 'række', 'rælig', 'rænke',
'ræson', 'rødby', 'rødme', 'rødne', 'røfle', 'røger', 'røget', 'røgte', 'rømme', 'rønde',
'rønne', 'rørig', 'røræg', 'røsti', 'røver', 'råber', 'råbuk', 'rådig', 'rådne', 'rådyr',
'råhed', 'råhus', 'råkid', 'rålam', 'rånok', 'råtræ', 'sabel', 'sable', 'sadel', 'sadhu',
'sadle', 'safir', 'safte', 'sagde', 'sagte', 'sakke', 'sakse', 'salat', 'saldo', 'salep',
'salig', 'salme', 'salon', 'salpe', 'salsa', 'salte', 'salto', 'salut', 'salve', 'salær',
'samba', 'sambo', 'samle', 'samme', 'samoa', 'samsk', 'samsø', 'sande', 'sanke', 'sankt',
'sanse', 'satan', 'satin', 'satse', 'satte', 'satyr', 'sauce', 'sauna', 'savle', 'savne',
'scene', 'scoop', 'score', 'sedan', 'sedes', 'seede', 'segne', 'sejle', 'sejre', 'sejse',
'sekel', 'sekst', 'selen', 'selve', 'semit', 'senat', 'sende', 'senet', 'senil', 'sepia',
'seraf', 'serge', 'serie', 'serum', 'serve', 'serøs', 'sesam', 'sexet', 'sfære', 'sheik',
'shiit', 'shine', 'shunt', 'siben', 'sidde', 'siden', 'sidse', 'sidst', 'sifon', 'sigel',
'sigma', 'signe', 'sigte', 'sikre', 'silde', 'silen', 'silke', 'silur', 'simle', 'simre',
'simse', 'sinde', 'sinke', 'sinus', 'sioux', 'sippe', 'sirat', 'sirts', 'sirup', 'sisal',
'sitar', 'sitre', 'sjask', 'sjavs', 'sjuft', 'sjusk', 'sjæle', 'skabe', 'skade', 'skaft',
'skage', 'skakt', 'skala', 'skalk', 'skalp', 'skank', 'skare', 'skarn', 'skarp', 'skarv',
'skave', 'skede', 'skeje', 'skejs', 'skele', 'skema', 'skibe', 'skide', 'skidt', 'skift',
'skilt', 'skind', 'skive', 'skjul', 'skole', 'skose', 'skove', 'skovl', 'skrab', 'skral',
'skrap', 'skrat', 'skred', 'skreg', 'skrev', 'skrig', 'skrin', 'skrog', 'skrot', 'skrub',
'skrud', 'skrue', 'skruk', 'skrut', 'skræk', 'skræl', 'skræv', 'skrød', 'skrål', 'skrås',
'skude', 'skudt', 'skule', 'skunk', 'skure', 'skurk', 'skurv', 'skvat', 'skvis', 'skvæt',
'skyde', 'skyet', 'skyld', 'skyts', 'skælm', 'skælv', 'skæmt', 'skænd', 'skæne', 'skænk',
'skære', 'skærf', 'skærm', 'skærv', 'skæve', 'skøde', 'skøge', 'skønt', 'skøre', 'skørt',
'skåle', 'skåne', 'slags', 'slang', 'slank', 'slant', 'slask', 'slave', 'slesk', 'slibe',
'slide', 'slids', 'slien', 'slime', 'slips', 'slisk', 'slude', 'sluge', 'slugt', 'slump',
'slurk', 'sluse', 'slyng', 'slæbe', 'slæde', 'slægt', 'slæng', 'sløjd', 'sløje', 'sløre',
'sløse', 'sløve', 'slåen', 'slåer', 'smage', 'small', 'smart', 'smash', 'smask', 'smede',
'smelt', 'smide', 'smile', 'smock', 'smovs', 'smuds', 'smuld', 'smule', 'smult', 'smurt',
'smyge', 'smæde', 'smæld', 'smøge', 'smøle', 'smøre', 'snack', 'snage', 'snaps', 'snare',
'snart', 'snask', 'snavs', 'snegl', 'snert', 'snige', 'snild', 'snipe', 'snive', 'snold',
'snork', 'snude', 'snuse', 'snusk', 'snyde', 'snære', 'snært', 'snøft', 'snøre', 'snøvl',
'snøvs', 'sober', 'sodet', 'soire', 'solde', 'solen', 'solet', 'solgt', 'solid', 'solur',
'solår', 'somme', 'sonar', 'sonde', 'sonet', 'sonor', 'soppe', 'sound', 'sovse', 'spade',
'spalt', 'spand', 'spang', 'spant', 'spare', 'spark', 'speed', 'spege', 'spejl', 'spelt',
'sperm', 'spids', 'spild', 'spile', 'spind', 'spion', 'spire', 'spise', 'spjæt', 'splid',
'split', 'spole', 'spore', 'sport', 'spove', 'sprak', 'spray', 'sprit', 'sprog', 'sprut',
'spryd', 'spræl', 'spræt', 'sprød', 'spule', 'spuns', 'spurt', 'spurv', 'spæde', 'spæge',
'spænd', 'spæne', 'spøge', 'spøjs', 'squaw', 'stade', 'stads', 'stage', 'stald', 'stamp',
'stand', 'stang', 'stank', 'start', 'stase', 'stave', 'stavn', 'steak', 'stede', 'stege',
'stejl', 'stele', 'stemt', 'stene', 'stift', 'stige', 'stile', 'stilk', 'still', 'stime',
'stind', 'sting', 'stive', 'stjal', 'stola', 'stole', 'stolt', 'stork', 'storm', 'story',
'storå', 'stose', 'stovt', 'straf', 'stram', 'stred', 'streg', 'strid', 'strik', 'strop',
'strut', 'stryg', 'stræb', 'stræk', 'strøg', 'strøm', 'studs', 'stump', 'stund', 'stunt',
'stuts', 'stuve', 'styne', 'styre', 'styrt', 'stænk', 'stærk', 'stæse', 'stævn', 'støbe',
'støde', 'stødt', 'støje', 'støve', 'ståbi', 'sudan', 'suder', 'sudle', 'suger', 'suite',
'sujet', 'sukat', 'sukke', 'sukre', 'sulfo', 'sulky', 'sulte', 'sumak', 'summe', 'sumpe',
'sunde', 'super', 'suppe', 'surfe', 'surre', 'sushi', 'sutte', 'sutur', 'svada', 'svaje',
'svale', 'svamp', 'svane', 'svang', 'svans', 'svare', 'svede', 'svedt', 'svejf', 'svejs',
'svend', 'svide', 'svige', 'svigt', 'svime', 'svind', 'svine', 'sving', 'svire', 'svirp',
'svovl', 'svælg', 'sværd', 'sværm', 'svæve', 'svøbe', 'swing', 'syden', 'sydom', 'sydpå',
'sygne', 'sylfe', 'sylte', 'synde', 'synes', 'synge', 'synke', 'synsk', 'synål', 'syren',
'syrer', 'syrne', 'sysle', 'sytøj', 'syver', 'syvti', 'sække', 'sælge', 'sænke', 'særbo',
'sæson', 'sæter', 'sætte', 'sødme', 'søger', 'søjle', 'sølet', 'sølje', 'sølle', 'sømil',
'sømme', 'søren', 'søret', 'sørge', 'søsyg', 'søulk', 'søvej', 'sådan', 'sågar', 'såpas',
'såsom', 'såvel', 'tabel', 'taber', 'tagge', 'tajga', 'takke', 'takle', 'taksi', 'takst',
'talar', 'taler', 'talje', 'talon', 'talte', 'tamil', 'tampe', 'tande', 'tanga', 'tange',
'tango', 'tanke', 'tante', 'tapet', 'tapir', 'tappe', 'tarif', 'tarok', 'tarse', 'taske',
'taste', 'tatar', 'tater', 'tavet', 'tavle', 'tavse', 'taxie', 'tazet', 'tchad', 'tegne',
'teint', 'teist', 'tejne', 'tejst', 'tekno', 'tekop', 'tekst', 'telex', 'telte', 'tempi',
'tempo', 'tenor', 'teori', 'terme', 'terne', 'terpe', 'terre', 'terts', 'tesis', 'teske',
'teste', 'thule', 'thurø', 'thybo', 'tiara', 'tibet', 'tiere', 'tiest', 'tiger', 'tigge',
'tikke', 'tilde', 'tilgå', 'tilse', 'tilså', 'tilte', 'timer', 'times', 'timid', 'tinde',
'tinge', 'tinte', 'tippe', 'tirre', 'tiske', 'tisse', 'tissø', 'tital', 'titan', 'titel',
'titte', 'tiøre', 'tiårs', 'tjald', 'tjalk', 'tjans', 'tjavs', 'tjene', 'tjept', 'tjære',
'tjørn', 'toast', 'tobak', 'tobis', 'toddy', 'tofte', 'tolde', 'tolke', 'tomat', 'tomle',
'tomme', 'tonal', 'toner', 'tonga', 'tonic', 'tonse', 'topas', 'toppe', 'topti', 'torsk',
'torso', 'tosse', 'total', 'totem', 'totne', 'totte', 'totur', 'touch', 'tough', 'toupe',
'toårs', 'trace', 'tragt', 'trake', 'tramp', 'trane', 'trang', 'trave', 'travl', 'trawl',
'treer', 'trema', 'trend', 'treti', 'trevl', 'trias', 'trick', 'trind', 'trine', 'triol',
'trist', 'trivi', 'triør', 'trods', 'trofæ', 'trokæ', 'trold', 'trone', 'trope', 'truck',
'trumf', 'trust', 'tryne', 'træde', 'træet', 'træls', 'træne', 'træsk', 'trævl', 'trøje',
'trøst', 'tråde', 'trådt', 'tudse', 'tugte', 'tukan', 'tulle', 'tulre', 'tumle', 'tumor',
'tumpe', 'tuner', 'tunge', 'turbo', 'turde', 'turne', 'tusch', 'tuske', 'tusse', 'tutor',
'tutte', 'tutti', 'tvang', 'tvebo', 'tvege', 'tvine', 'tvist', 'tvivl', 'tvære', 'tværs',
'tvært', 'tweed', 'twill', 'twist', 'tyfon', 'tyfus', 'tygge', 'tykke', 'tykne', 'tylle',
'tylvt', 'tynde', 'tynge', 'tyran', 'tyrol', 'tysse', 'tyver', 'tyvte', 'tække', 'tælle',
'tæmme', 'tænde', 'tænke', 'tæppe', 'tærte', 'tæske', 'tætne', 'tætte', 'tæven', 'tøffe',
'tøfle', 'tøjle', 'tøjre', 'tøjte', 'tømme', 'tømre', 'tønde', 'tøris', 'tørke', 'tørne',
'tørre', 'tørst', 'tøset', 'tøsne', 'tåget', 'tåled', 'tårne', 'uanet', 'ublid', 'udbud',
'uddød', 'udelt', 'udfri', 'udhus', 'udkig', 'udkik', 'udkog', 'udlyd', 'udlæg', 'udløb',
'udlån', 'udriv', 'udrøj', 'udråb', 'udsat', 'udspy', 'udstå', 'udsyn', 'udsæd', 'udtag',
'udtog', 'udtur', 'udvej', 'udøbt', 'udørk', 'udøse', 'udøve', 'uegal', 'uenig', 'ufiks',
'ufred', 'ufødt', 'uføre', 'ugift', 'ugræs', 'uheld', 'uhyre', 'uhørt', 'ujævn', 'uklar',
'uklog', 'uland', 'ulave', 'ulden', 'uldet', 'ulige', 'ulyst', 'ulærd', 'ulæst', 'uløst',
'umage', 'umbra', 'umild', 'under', 'undgå', 'undre', 'undse', 'undså', 'ungmø', 'unika',
'union', 'unode', 'unåde', 'urban', 'urede', 'uredt', 'ureel', 'urkok', 'urrem', 'urtid',
'urund', 'uræmi', 'urørt', 'usagt', 'usand', 'usket', 'uskik', 'uskøn', 'ussel', 'usund',
'utalt', 'utide', 'uting', 'utopi', 'utryg', 'utugt', 'uvane', 'uvant', 'uvejr', 'uvorn',
'uægte', 'uøvet', 'vabel', 'vable', 'vader', 'vager', 'vakle', 'vakte', 'valby', 'valen',
'valgt', 'valid', 'valke', 'valle', 'valme', 'valse', 'valsk', 'valte', 'valør', 'vande',
'vandt', 'vange', 'vanke', 'vanry', 'vante', 'varan', 'varde', 'varia', 'varig', 'varme',
'varpe', 'varte', 'varyl', 'vasal', 'vaske', 'vater', 'vatre', 'vedet', 'vedgå', 'vegar',
'veget', 'vegne', 'vejen', 'vejer', 'vejle', 'vejre', 'velan', 'velar', 'velin', 'velær',
'vemod', 'vende', 'vente', 'venus', 'venøs', 'verfe', 'verpe', 'verst', 'verve', 'vesir',
'vetoe', 'vidde', 'viden', 'video', 'vidje', 'vidne', 'vidst', 'vifte', 'vigte', 'vigør',
'vikar', 'vikke', 'vikle', 'vikse', 'vildt', 'vilje', 'villa', 'ville', 'vimre', 'vimse',
'vinca', 'vinde', 'vinge', 'vinke', 'vinyl', 'vinøs', 'viola', 'vippe', 'virak', 'viril',
'virke', 'virre', 'virus', 'viser', 'visir', 'visit', 'viske', 'visne', 'visse', 'visum',
'vital', 'vivat', 'vlies', 'vodka', 'vogte', 'voila', 'voile', 'vokal', 'vokse', 'volde',
'volfe', 'volte', 'volut', 'vorde', 'vores', 'vorte', 'votum', 'vovet', 'vovse', 'vrage',
'vrang', 'vrede', 'vride', 'vrist', 'vræle', 'vrøvl', 'vråle', 'vugge', 'vulst', 'vunde',
'vuppe', 'vupti', 'væbne', 'vædde', 'vædre', 'vægre', 'vægte', 'vægur', 'vække', 'vækst',
'vælde', 'vælge', 'vælig', 'vælsk', 'vælte', 'vænge', 'vænne', 'værdi', 'væren', 'værft',
'værge', 'værke', 'værne', 'værre', 'værst', 'væsel', 'væsen', 'væske', 'vætte', 'væver',
'vølve', 'våben', 'vådte', 'vågen', 'vågne', 'vånde', 'våset', 'wagon', 'wenge', 'whist',
'xenon', 'yacht', 'yatzy', 'yding', 'ydmyg', 'yemen', 'ynder', 'yndig', 'yngel', 'yngle',
'yngre', 'yngst', 'ypern', 'yppig', 'zaire', 'zambo', 'zappe', 'zebra', 'zefyr', 'zelot',
'zenit', 'zloty', 'zobel', 'zombi', 'zoome', 'zweck', 'ægide', 'ældre', 'ældst', 'ælter',
'æltet', 'ænder', 'ændre', 'ærbar', 'ærgre', 'ærlig', 'ærøbo', 'ærøsk', 'æstet', 'ævred',
'øboer', 'ødsel', 'ødsle', 'ølbas', 'øllet', 'ømhed', 'ønske', 'ørige', 'ørken', 'ørred',
'øsken', 'østat', 'østen', 'østom', 'østpå', 'østre', 'østud', 'øvrig', 'åbner', 'ådsel',
'åland', 'åndet', 'åndig', 'årbog', 'århus', 'åring', 'årlig', 'årsag', 'årsko', 'åsted']
,
Ta=['aarau', 'abild', 'acces', 'adept', 'adlen', 'adlet', 'adlyt', 'adula', 'affej', 'afhug',
'afkom', 'aflad', 'afpas', 'afret', 'afriv', 'afsat', 'afsis', 'aften', 'aftog', 'aftos',
'afvis', 'agami', 'agape', 'agent', 'agere', 'agger', 'agili', 'agner', 'agter', 'agtet',
'agurk', 'agyni', 'ahorn', 'aknen', 'aksen', 'akset', 'akten', 'akter', 'aktiv', 'alarm',
'alben', 'alder', 'alene', 'alfen', 'alias', 'alibi', 'alrum', 'altai', 'altaj', 'alter',
'altet', 'amaut', 'ambra', 'amour', 'andes', 'andet', 'andre', 'angik', 'angiv', 'angle',
'anima', 'anjou', 'anken', 'anker', 'ankes', 'anket', 'ankom', 'anmod', 'annal', 'annie',
'ansat', 'anser', 'anses', 'anset', 'antal', 'antik', 'antog', 'anual', 'appel', 'apsis',
'apter', 'arete', 'arien', 'aries', 'arken', 'arket', 'armen', 'armod', 'arner', 'arosa',
'arpen', 'arrak', 'arret', 'arrig', 'arten', 'arter', 'artet', 'artig', 'arvet', 'asede',
'asiat', 'asken', 'asnet', 'aspen', 'aspin', 'astat', 'aston', 'atero', 'atlas', 'atman',
'atoms', 'atrid', 'atter', 'attik', 'augur', 'auken', 'aulos', 'autor', 'avede', 'avery',
'avlen', 'avles', 'avnen', 'aaget', 'abbed', 'abbie', 'abede', 'abies', 'abild', 'aborg',
'aboud', 'acari', 'acton', 'adele', 'adine', 'adler', 'adolf', 'adour', 'afgav', 'afkog',
'afkom', 'afnan', 'afrim', 'afsat', 'afset', 'aftab', 'aftal', 'aften', 'aftne', 'aftog',
'afveg', 'agave', 'agede', 'agens', 'agent', 'agere', 'agern', 'agger', 'agile', 'agilt',
'agnen', 'agora', 'agter', 'agtet', 'agurk', 'ahjaz', 'ahler', 'ahorn', 'aieey', 'aisha',
'aisja', 'aisne', 'ajuga', 'akila', 'akita', 'aknen', 'aksel', 'akser', 'akset', 'akske',
'akten', 'akter', 'aktie', 'aktor', 'alarm', 'albue', 'album', 'albyl', 'alder', 'aldin',
'aldum', 'alene', 'alfer', 'alfii', 'algae', 'algen', 'alger', 'alias', 'alibi', 'alice',
'alien', 'aliya', 'alken', 'alkyd', 'allah', 'allen', 'allis', 'allon', 'almer', 'alnor',
'alnus', 'aloen', 'aloer', 'alpen', 'alper', 'alpha', 'alrum', 'altan', 'alten', 'alter',
'altet', 'altid', 'altre', 'alvar', 'alven', 'alvor', 'amaal', 'amana', 'amani', 'amati',
'amena', 'amjed', 'amman', 'ammar', 'ammer', 'ammet', 'ammon', 'amour', 'amter', 'andel',
'anden', 'andet', 'andre', 'andry', 'andst', 'anede', 'anett', 'angav', 'angie', 'angik',
'angle', 'angst', 'angul', 'angus', 'anhof', 'aniqa', 'anita', 'ankel', 'anken', 'anker',
'ankom', 'ankre', 'annee', 'annie', 'annik', 'anouk', 'ansat', 'anses', 'antal', 'antog',
'anton', 'anura', 'aorta', 'apati', 'april', 'araen', 'araer', 'arden', 'arder', 'areal',
'arena', 'arent', 'argon', 'argus', 'ariel', 'arien', 'arier', 'arjun', 'arken', 'arket',
'arkiv', 'arman', 'armas', 'armen', 'arndt', 'arnel', 'arnen', 'aroma', 'arrer', 'arret',
'arrig', 'arsen', 'arsin', 'arten', 'arter', 'artet', 'artig', 'artur', 'aruba', 'arven',
'arvet', 'asdal', 'asdod', 'asede', 'aseri', 'ashna', 'asiat', 'asien', 'asiet', 'asken',
'asket', 'askov', 'aslak', 'aslan', 'asner', 'asnet', 'aspen', 'assam', 'assur', 'aster',
'astma', 'athen', 'atlas', 'atlet', 'atten', 'augur', 'avant', 'avene', 'avlen', 'avler',
'avlet', 'avlum', 'avnen', 'ayaan', 'aydin', 'ayfer', 'ayhan', 'aykut', 'ayler', 'aylil',
'azeem', 'azeka', 'azhar', 'azime', 'azizi', 'aalen', 'aarup', 'abasi', 'abbas', 'abbed',
'abdal', 'abell', 'aberi', 'abild', 'abort', 'acces', 'acryl', 'adele', 'adeno', 'adept',
'adils', 'adine', 'adled', 'adlon', 'adour', 'adria', 'adsle', 'adula', 'advis', 'afart',
'afasi', 'afbar', 'afbud', 'affil', 'afgav', 'afgik', 'afgiv', 'afgud', 'afise', 'afkog',
'afkom', 'aflad', 'aflir', 'aflur', 'afmal', 'afmat', 'afmej', 'afpas', 'afpil', 'afret',
'afriv', 'afsat', 'afser', 'afset', 'afsig', 'afsky', 'aftag', 'aften', 'aftne', 'afveg',
'afvej', 'agape', 'agave', 'agens', 'agent', 'agere', 'agern', 'agger', 'agile', 'agnat',
'agoni', 'agora', 'agork', 'agraf', 'agrar', 'agten', 'agter', 'agtet', 'aguja', 'agurk',
'ahorn', 'aigis', 'aishi', 'aisne', 'ajour', 'akaba', 'akedi', 'akomi', 'akron', 'akryl',
'aksel', 'aksen', 'akser', 'akson', 'akten', 'akter', 'aktie', 'aktin', 'aktiv', 'aktor',
'alamo', 'alant', 'alarm', 'album', 'albyl', 'alder', 'aldre', 'alegi', 'alene', 'alert',
'alexa', 'alfer', 'algen', 'alger', 'alhed', 'alhus', 'alias', 'alibi', 'alice', 'alien',
'alkan', 'alken', 'alkyd', 'allah', 'aller', 'alles', 'almen', 'almue', 'aloer', 'alper',
'alpha', 'altan', 'alten', 'alter', 'altid', 'alvor', 'amati', 'amaut', 'ambra', 'ambre',
'amdam', 'amens', 'ammer', 'amoks', 'amorf', 'amour', 'ampas', 'ampel', 'ampul', 'amrum',
'amusi', 'anafi', 'andel', 'anden', 'andre', 'anede', 'angav', 'anger', 'angik', 'angiv',
'angre', 'angst', 'angus', 'anion', 'anitu', 'anjou', 'ankel', 'anker', 'ankom', 'ankre',
'annal', 'anode', 'anomi', 'anret', 'ansat', 'anser', 'anset', 'ansku', 'antal', 'antik',
'antog', 'anura', 'anvis', 'aolin', 'aorta', 'apate', 'apati', 'apeks', 'appel', 'apsis',
'araen', 'arden', 'areal', 'areca', 'arena', 'arete', 'argon', 'argos', 'argot', 'ariel',
'arien', 'arier', 'aries', 'arisk', 'arker', 'arket', 'arkiv', 'arles', 'armod', 'arnen',
'arner', 'aroma', 'arrak', 'array', 'arrer', 'arres', 'arret', 'arrig', 'arten', 'arter',
'artig', 'arven', 'arver', 'arvet', 'asang', 'asede', 'asiat', 'asiet', 'asine', 'asken',
'asker', 'asket', 'askim', 'asner', 'aspes', 'aspin', 'aspis', 'assad', 'asset', 'assyl',
'astma', 'astra', 'atage', 'athen', 'athos', 'atlas', 'atlet', 'atoni', 'attak', 'atten',
'atter', 'audio', 'augur', 'autor', 'avede', 'avers', 'avila', 'avind', 'avlen', 'avler',
'avlet', 'avner', 'avril', 'avtur', 'bacio', 'bades', 'bagen', 'bagno', 'bakke', 'balsa',
'bamse', 'banal', 'bande', 'banen', 'banet', 'bange', 'banje', 'banke', 'barde', 'barer',
'barns', 'barsk', 'basel', 'baser', 'basis', 'basra', 'basse', 'basta', 'basun', 'bavne',
'bearn', 'bebor', 'bedel', 'bedes', 'bedet', 'bedre', 'befal', 'beget', 'begik', 'beglo',
'behag', 'behov', 'bejle', 'belig', 'belys', 'bendz', 'bener', 'benet', 'berus', 'besat',
'beset', 'beskt', 'besov', 'betag', 'betel', 'betog', 'betro', 'bevar', 'bevis', 'biber',
'bidsk', 'biket', 'bikse', 'bilag', 'bilen', 'biler', 'bilet', 'bille', 'bilus', 'bilyd',
'binde', 'biord', 'bises', 'bitre', 'bitte', 'bivej', 'bjerg', 'blade', 'blafr', 'bland',
'blase', 'bleen', 'blege', 'blegn', 'blegt', 'blend', 'blidt', 'blind', 'blink', 'blist',
'blund', 'bluse', 'blyet', 'boble', 'boden', 'bogen', 'boise', 'boldt', 'bolig', 'bolle',
'bombe', 'bomme', 'bonen', 'bonus', 'borde', 'borte', 'bosar', 'bosat', 'brada', 'bragt',
'brand', 'brase', 'brast', 'bravt', 'breda', 'breds', 'brems', 'briks', 'bring', 'brink',
'brise', 'broen', 'brudt', 'bruge', 'brugt', 'bruml', 'brune', 'bruno', 'bruse', 'brust',
'bryde', 'bryne', 'bugen', 'buggy', 'bugne', 'bugte', 'buhet', 'bukke', 'bulen', 'buler',
'bulle', 'bulne', 'bumpe', 'bumse', 'bunde', 'burde', 'buret', 'butik', 'butte', 'bydel',
'byder', 'bygen', 'byges', 'byliv', 'bylte', 'byrde', 'bytes', 'bytte', 'babel', 'badet',
'badge', 'bagen', 'bager', 'bahjo', 'bahne', 'balal', 'balde', 'balle', 'bambi', 'banal',
'banan', 'bande', 'bands', 'baner', 'banin', 'banko', 'barak', 'barde', 'barer', 'baret',
'barok', 'barre', 'baryl', 'basar', 'basel', 'basen', 'baser', 'basic', 'basil', 'basim',
'basis', 'basra', 'basta', 'batik', 'batin', 'batol', 'batts', 'bearn', 'beate', 'bebop',
'bebor', 'becca', 'beder', 'bedet', 'bedre', 'bedri', 'bedst', 'befri', 'begik', 'beglo',
'behag', 'behov', 'beige', 'bejse', 'bekom', 'belau', 'bella', 'belli', 'benda', 'bende',
'bengt', 'benni', 'benno', 'benny', 'benta', 'bente', 'beoer', 'berat', 'beril', 'berin',
'berit', 'berno', 'bernt', 'berny', 'berta', 'beryl', 'beser', 'beset', 'beske', 'beten',
'betog', 'beton', 'betri', 'betro', 'bevis', 'beyza', 'biavl', 'bibel', 'bides', 'bijan',
'biker', 'bikse', 'bilag', 'biler', 'bille', 'bilos', 'binde', 'bindu', 'biord', 'birke',
'bisar', 'bisat', 'bison', 'bitre', 'biwar', 'bjert', 'blade', 'blank', 'blans', 'blase',
'blege', 'blegt', 'blend', 'blidt', 'blini', 'blink', 'blive', 'blond', 'bltag', 'blues',
'bluff', 'blunt', 'bluse', 'boaer', 'boden', 'boder', 'boede', 'bogey', 'bokse', 'bolig',
'bolle', 'bolte', 'bomme', 'bonen', 'boner', 'bonet', 'booke', 'borde', 'borge', 'borte',
'bouet', 'boven', 'boxer', 'bragt', 'brand', 'brang', 'brase', 'brast', 'bravo', 'brede',
'bredt', 'breth', 'breve', 'briks', 'brint', 'brita', 'brite', 'broen', 'broer', 'bronx',
'brudt', 'brugs', 'bruno', 'brunt', 'bruse', 'buede', 'bugsy', 'bulet', 'bunde', 'bundt',
'burak', 'buret', 'burma', 'buske', 'butan', 'butik', 'bybud', 'bybus', 'bydel', 'bygas',
'bymur', 'byrde', 'byron', 'bytes', 'bytte', 'bytur', 'baade', 'babel', 'bacon', 'bader',
'badge', 'badut', 'bager', 'bages', 'bagte', 'bagud', 'bajer', 'baker', 'bakke', 'bakse',
'balan', 'balde', 'balje', 'balle', 'balsa', 'bambi', 'bamle', 'bamse', 'banal', 'banan',
'bande', 'banen', 'baner', 'banet', 'bange', 'banje', 'banjo', 'banke', 'banko', 'bantu',
'barak', 'barbe', 'barde', 'bares', 'baret', 'barge', 'barke', 'barok', 'baron', 'barre',
'barsk', 'baryt', 'basal', 'basar', 'baser', 'basie', 'basis', 'baske', 'basse', 'basta',
'basun', 'batat', 'batch', 'batik', 'batte', 'bavle', 'bavne', 'bebor', 'bebyg', 'beder',
'bedre', 'bedst', 'bedyr', 'befri', 'beget', 'begge', 'beglo', 'behag', 'behov', 'beisa',
'bejae', 'belys', 'bemal', 'benyt', 'beoer', 'beram', 'beret', 'beror', 'beryl', 'besad',
'besat', 'beser', 'beset', 'beske', 'beskt', 'besyv', 'betel', 'beten', 'beter', 'betle',
'betog', 'beton', 'betro', 'beven', 'bevis', 'biavl', 'bider', 'bides', 'bidet', 'bidsk',
'biede', 'bifag', 'bifil', 'bigot', 'bijob', 'bikir', 'bikse', 'bikub', 'bilag', 'biled',
'biler', 'bille', 'bilos', 'bimle', 'bimse', 'binde', 'bingo', 'binom', 'biord', 'bippe',
'birer', 'biser', 'bisol', 'bisse', 'bitre', 'bitte', 'bivej', 'bizar', 'bjerg', 'bjesk',
'blade', 'blank', 'blase', 'bleen', 'bleer', 'blege', 'blegn', 'blegt', 'blide', 'blidt',
'blind', 'bling', 'blink', 'blist', 'blitz', 'blive', 'blogs', 'blond', 'blues', 'bluff',
'blund', 'bluse', 'bobbe', 'bobby', 'boble', 'boede', 'boere', 'bogen', 'boger', 'bogey',
'bogie', 'bojan', 'bokse', 'bolde', 'bolig', 'bolle', 'bolte', 'bombe', 'bomme', 'bonde',
'bonen', 'boner', 'bongo', 'bonus', 'booke', 'boote', 'borat', 'borde', 'borer', 'borge',
'borst', 'borup', 'bosat', 'botox', 'boule', 'boven', 'bowle', 'boxer', 'braga', 'brage',
'bragi', 'bragt', 'brand', 'brase', 'brass', 'brast', 'brave', 'bravt', 'break', 'brede',
'bredt', 'brems', 'breve', 'briks', 'brink', 'brint', 'brise', 'brist', 'brite', 'brors',
'bruds', 'brudt', 'bruge', 'brugs', 'brugt', 'bruse', 'brusk', 'bryde', 'bryne', 'brysk',
'bryst', 'buggy', 'bugne', 'bugte', 'bugts', 'buket', 'bukke', 'bukle', 'buler', 'bulet',
'bulne', 'bumle', 'bunde', 'bundt', 'bunke', 'burde', 'buret', 'burin', 'burka', 'buske',
'buste', 'butan', 'butch', 'butik', 'bvadr', 'bybil', 'bybod', 'bybud', 'bydel', 'byder',
'bygas', 'bygen', 'byger', 'bygge', 'byliv', 'bymur', 'byrde', 'byret', 'byrum', 'bytom',
'bytte', 'bytur', 'bytyr', 'campe', 'camus', 'canto', 'capen', 'capri', 'carpi', 'cdrom',
'celle', 'chile', 'chloe', 'cider', 'cirka', 'citat', 'citre', 'clogs', 'costa', 'cykel',
'cyste', 'cafer', 'cairo', 'cajsa', 'cajus', 'camil', 'canja', 'canna', 'capra', 'carex',
'caris', 'carit', 'carya', 'catty', 'catya', 'cauda', 'cazja', 'cebus', 'ceder', 'celia',
'cello', 'cendy', 'cenia', 'cetos', 'ceuta', 'chili', 'chini', 'chips', 'cider', 'cielo',
'cifre', 'cigar', 'cinne', 'citat', 'clain', 'clara', 'clare', 'clari', 'cliff', 'clint',
'clive', 'coach', 'colin', 'count', 'credo', 'crepe', 'cyril', 'cache', 'calyx', 'capri',
'cargo', 'cases', 'ceder', 'cella', 'celle', 'cello', 'cerut', 'charm', 'check', 'chess',
'chikt', 'chili', 'chips', 'cider', 'cifre', 'cigar', 'cirka', 'citar', 'citat', 'citer',
'civil', 'clean', 'clips', 'coach', 'codan', 'codis', 'codyl', 'conga', 'coupe', 'cover',
'crash', 'crawl', 'crazy', 'credo', 'creme', 'crepe', 'cross', 'cykel', 'cykle', 'cyste',
'dadle', 'dagen', 'dages', 'daler', 'dales', 'dalet', 'dampe', 'dania', 'danne', 'danse',
'dansk', 'daser', 'daset', 'daten', 'david', 'davos', 'debil', 'debut', 'decam', 'degas',
'dejen', 'dejet', 'delen', 'deles', 'delfi', 'delft', 'denne', 'depot', 'diana', 'diget',
'digre', 'digte', 'digts', 'dijon', 'dille', 'dirre', 'disen', 'diske', 'disks', 'disse',
'ditto', 'domen', 'domer', 'domes', 'domme', 'doner', 'donna', 'donor', 'dopen', 'doper',
'dopet', 'dorsk', 'dosen', 'doser', 'dovne', 'dovre', 'drage', 'dragt', 'drama', 'drejl',
'dreng', 'dress', 'drift', 'drink', 'drive', 'drude', 'druen', 'drugs', 'dubbe', 'duden',
'duede', 'dugen', 'dukke', 'dulgt', 'dumme', 'dumpe', 'dumpt', 'dunet', 'dunst', 'duoen',
'duret', 'durra', 'durum', 'dvask', 'dyden', 'dydig', 'dyret', 'dyrke', 'dyses', 'daffo',
'dagen', 'daimi', 'dakar', 'dalai', 'dalen', 'daler', 'dalet', 'damer', 'damet', 'damir',
'damme', 'danbo', 'dandy', 'daner', 'dania', 'danja', 'danka', 'danse', 'dansk', 'darja',
'darko', 'darth', 'darum', 'daser', 'daset', 'daske', 'daten', 'dates', 'datid', 'dativ',
'david', 'davie', 'debat', 'debet', 'debut', 'degne', 'dejen', 'dekan', 'delem', 'delen',
'deler', 'delhi', 'delle', 'delta', 'delte', 'demet', 'denar', 'denim', 'denis', 'deniz',
'denja', 'denne', 'depot', 'derby', 'deres', 'derop', 'derri', 'derry', 'derud', 'desto',
'dette', 'devid', 'devin', 'devot', 'dhaka', 'diana', 'diane', 'diara', 'diede', 'diego',
'diger', 'diget', 'digre', 'digte', 'dikke', 'dille', 'dilys', 'dinar', 'dingo', 'diode',
'dione', 'dirke', 'dirre', 'disel', 'disen', 'diser', 'diset', 'diske', 'disko', 'dispa',
'ditto', 'divan', 'diyar', 'docer', 'dolke', 'domme', 'donau', 'donia', 'donna', 'donor',
'donut', 'dorge', 'dorin', 'doris', 'dorsk', 'dosen', 'doser', 'dover', 'dovne', 'draco',
'drage', 'dragt', 'drama', 'dreng', 'dress', 'dries', 'drine', 'drink', 'drion', 'driss',
'drita', 'drive', 'drone', 'drops', 'druen', 'druer', 'dryas', 'dubai', 'duede', 'dufte',
'dugen', 'dugge', 'dukat', 'dukke', 'dulgt', 'dumme', 'dunet', 'dunja', 'dunke', 'duoen',
'duoer', 'durra', 'durum', 'dusan', 'dusin', 'duske', 'dvale', 'dvask', 'dvder', 'dwala',
'dybde', 'dybet', 'dylan', 'dyner', 'dynge', 'dyret', 'dyrup', 'dysse', 'dyste', 'dyvig',
'dadel', 'dadle', 'daffe', 'dafne', 'dages', 'dalbo', 'daler', 'dalet', 'dalit', 'dalre',
'damer', 'damet', 'damme', 'damno', 'dampe', 'danbo', 'dando', 'dandy', 'daner', 'danne',
'danse', 'dansk', 'dario', 'darre', 'daser', 'dases', 'daset', 'daske', 'dates', 'datid',
'dativ', 'datja', 'david', 'debat', 'debet', 'debil', 'debut', 'decca', 'decim', 'degne',
'dejse', 'dekor', 'delen', 'delle', 'delta', 'delte', 'demko', 'denar', 'denne', 'dente',
'depot', 'deraf', 'derby', 'derom', 'derud', 'desto', 'dette', 'devot', 'dible', 'diego',
'diele', 'diese', 'digel', 'diger', 'diget', 'digre', 'digte', 'dikke', 'dille', 'dinar',
'diode', 'dirre', 'diser', 'diset', 'diske', 'disko', 'disse', 'ditto', 'divan', 'doble',
'docil', 'doger', 'dogge', 'dogme', 'dokke', 'dolke', 'dolme', 'domer', 'donat', 'donau',
'doner', 'donna', 'donor', 'donst', 'dorer', 'dorry', 'dorsk', 'dosen', 'dosis', 'douce',
'doven', 'dovne', 'dovre', 'doyen', 'drage', 'drags', 'dragt', 'drama', 'drapa', 'drava',
'dreje', 'drejl', 'dreng', 'dress', 'drift', 'drink', 'drive', 'drone', 'drops', 'drost',
'dsass', 'duede', 'duena', 'dufte', 'dukke', 'dulgt', 'dulle', 'dulme', 'dumme', 'dummy',
'dumpe', 'dunke', 'dunst', 'duppe', 'durra', 'dusin', 'duske', 'dusse', 'dutte', 'duver',
'duvet', 'dvale', 'dvask', 'dybde', 'dydig', 'dyede', 'dykke', 'dynen', 'dyner', 'dynge',
'dyppe', 'dyret', 'dyrke', 'dysse', 'dyste', 'dytte', 'dyvel', 'edder', 'egnen', 'eifel',
'eilat', 'ekmer', 'eknel', 'eksem', 'elbas', 'eldey', 'elias', 'elite', 'elnet', 'eloge',
'elske', 'elven', 'emile', 'emmer', 'emner', 'emnet', 'emune', 'enagt', 'enden', 'ender',
'endes', 'endte', 'enere', 'enert', 'enfin', 'enhed', 'enige', 'enkle', 'enlig', 'ensom',
'entre', 'epoet', 'epoge', 'epoke', 'epoxy', 'erard', 'erato', 'erica', 'erika', 'ernst',
'esser', 'etage', 'etape', 'etter', 'etude', 'etzel', 'event', 'evers', 'evian', 'evnen',
'ewald', 'eagle', 'ebben', 'eddie', 'eders', 'edgar', 'edgon', 'edikt', 'edith', 'eduer',
'edvia', 'effen', 'effie', 'efter', 'egale', 'egalt', 'egede', 'egene', 'egent', 'egern',
'eggsy', 'egill', 'egnen', 'egnet', 'egoer', 'ehler', 'ehsan', 'eider', 'eigko', 'einar',
'einer', 'eisen', 'eivin', 'eivor', 'ejede', 'ejere', 'ejgil', 'ejler', 'ejolf', 'ekkoe',
'eksem', 'ekser', 'ekset', 'eksil', 'elaer', 'elahi', 'eland', 'elbas', 'elben', 'elbil',
'eldar', 'elegi', 'eleta', 'elgen', 'elgko', 'elias', 'eline', 'eliot', 'elisa', 'elise',
'elite', 'ellen', 'eller', 'ellie', 'ellis', 'elmen', 'elmer', 'elske', 'eltog', 'elton',
'elven', 'elver', 'elvir', 'elvis', 'elvte', 'elwin', 'embla', 'emily', 'emira', 'emmen',
'emmer', 'emmet', 'emmik', 'emner', 'emnet', 'emsig', 'emuen', 'emuer', 'enden', 'ender',
'endnu', 'endog', 'endte', 'enegi', 'enere', 'engel', 'engle', 'enhed', 'enige', 'enkel',
'enken', 'enker', 'enkle', 'enlig', 'enorm', 'enrum', 'ensom', 'ental', 'enten', 'entre',
'envar', 'epoke', 'erato', 'erhan', 'erica', 'erika', 'erjon', 'erkan', 'erkki', 'ermol',
'ernst', 'erwin', 'esben', 'espen', 'esrom', 'essay', 'essen', 'esser', 'esset', 'ester',
'estha', 'etaer', 'etage', 'etape', 'etena', 'ethan', 'ethel', 'ethyl', 'etisk', 'etlet',
'ettal', 'etter', 'etude', 'etyde', 'eunuk', 'evely', 'event', 'evert', 'evige', 'evigt',
'evita', 'evnen', 'evner', 'evnet', 'ewert', 'eyvin', 'eyyub', 'eagle', 'earls', 'ebben',
'ebber', 'ebola', 'ecart', 'ecuer', 'edder', 'eddie', 'eders', 'edgar', 'edikt', 'edith',
'effen', 'efgne', 'efter', 'egalt', 'egede', 'egent', 'egern', 'egnen', 'egnet', 'egoer',
'eifel', 'eiger', 'eilat', 'ejede', 'ejere', 'eksem', 'ekses', 'ekset', 'eksil', 'elbas',
'elbil', 'elegi', 'elemi', 'elgen', 'elite', 'eller', 'elnet', 'elovn', 'elske', 'eltog',
'elure', 'elver', 'emder', 'emloh', 'emmer', 'emmes', 'emmet', 'emner', 'emoji', 'emsig',
'emter', 'emune', 'enben', 'endda', 'enden', 'ender', 'endnu', 'endog', 'endte', 'enere',
'enfin', 'engel', 'engen', 'engle', 'enhed', 'enige', 'enkel', 'enker', 'enkle', 'enlig',
'ennui', 'enorm', 'enrum', 'enses', 'ensom', 'ensym', 'ental', 'enter', 'entre', 'enzym',
'eolit', 'eosin', 'epark', 'episk', 'epode', 'epoke', 'epope', 'erebo', 'ermol', 'espoo',
'esrer', 'esrum', 'essay', 'esser', 'essig', 'ester', 'etaer', 'etage', 'etang', 'etape',
'ethan', 'ethen', 'ethyn', 'ettal', 'etter', 'etude', 'euepi', 'euipi', 'eunuk', 'event',
'evers', 'evert', 'evian', 'evita', 'evner', 'evnes', 'fabel', 'fable', 'facon', 'fader',
'fadet', 'faget', 'fagot', 'faker', 'falde', 'faldt', 'falle', 'falme', 'false', 'falsk',
'fandt', 'fanen', 'fanes', 'fange', 'farao', 'faren', 'farer', 'fares', 'faret', 'farte',
'farve', 'faxen', 'faxer', 'fedel', 'feder', 'fedte', 'feito', 'fejde', 'fejer', 'fejes',
'fejet', 'fejle', 'fejls', 'fejre', 'felix', 'femur', 'feren', 'ferme', 'feset', 'fests',
'fezen', 'fidus', 'figur', 'filet', 'filur', 'finde', 'fines', 'finis', 'finsk', 'firer',
'firet', 'firma', 'fiser', 'fiset', 'fiske', 'fixet', 'fjeld', 'fjern', 'fjols', 'fklod',
'flabs', 'flade', 'flagr', 'flags', 'flair', 'flaks', 'flane', 'flere', 'flove', 'fluer',
'flyde', 'flydt', 'flyer', 'flyet', 'flyve', 'fobis', 'focus', 'foden', 'foder', 'fodre',
'folde', 'folds', 'folen', 'folio', 'fonde', 'forbi', 'forme', 'forsk', 'forte', 'fosse',
'frans', 'friet', 'frise', 'frisk', 'frist', 'frost', 'fruen', 'fruft', 'frugt', 'fryde',
'fryse', 'fuget', 'fugle', 'fulde', 'fuldt', 'fulgt', 'furen', 'furer', 'fures', 'fuset',
'futil', 'futon', 'fyger', 'fylde', 'fyord', 'fyren', 'fyrer', 'fyret', 'fabel', 'facon',
'facts', 'fader', 'fadet', 'faith', 'faiza', 'fajir', 'fakir', 'falco', 'faldt', 'falke',
'famle', 'farao', 'farce', 'farer', 'faret', 'farin', 'farte', 'farup', 'farve', 'faste',
'fateh', 'faten', 'fatha', 'faust', 'favne', 'fazal', 'fedaa', 'fejde', 'fejet', 'fejle',
'fejre', 'felen', 'feler', 'femte', 'fenyl', 'ferid', 'ferie', 'ferme', 'fermt', 'feset',
'feste', 'festo', 'fiber', 'ficus', 'fidan', 'fidde', 'fiddi', 'fidel', 'field', 'figen',
'figur', 'fikse', 'fikst', 'filme', 'finke', 'finne', 'finte', 'firma', 'firth', 'firti',
'fiset', 'fisse', 'fiste', 'fizan', 'fjand', 'fjant', 'fjeld', 'fjert', 'fjord', 'fladt',
'flair', 'flaps', 'fleks', 'flige', 'flirt', 'flise', 'flora', 'flour', 'flove', 'floyd',
'fluer', 'fluid', 'fluks', 'fluor', 'flute', 'flydt', 'flyer', 'flyve', 'fnise', 'fnist',
'foden', 'foged', 'foler', 'folie', 'fonde', 'fonte', 'fordi', 'forel', 'forke', 'forme',
'forny', 'forum', 'fosse', 'foton', 'fotos', 'foyer', 'foyle', 'fragt', 'fraja', 'freak',
'fredi', 'freja', 'freon', 'friia', 'frise', 'front', 'frost', 'fruer', 'frugt', 'fugle',
'fulda', 'fulde', 'fumle', 'fungi', 'furer', 'furie', 'fuser', 'fuset', 'fuske', 'futil',
'fyrig', 'fabel', 'fable', 'facet', 'facil', 'facit', 'facon', 'facts', 'fader', 'fager',
'fagot', 'fagre', 'fakir', 'fakta', 'falde', 'faldt', 'falle', 'falme', 'false', 'falsk',
'famle', 'fancy', 'faner', 'fange', 'fango', 'farao', 'farce', 'faren', 'farer', 'faret',
'farin', 'farne', 'farsi', 'farte', 'farve', 'fasan', 'faser', 'faste', 'fatal', 'fatas',
'fatte', 'fatwa', 'fauna', 'faute', 'feber', 'feder', 'fedme', 'fedor', 'fedte', 'feers',
'fejde', 'fejet', 'fejle', 'fejre', 'femti', 'fenne', 'fenol', 'ferie', 'ferme', 'fersk',
'feset', 'feste', 'fiale', 'fiber', 'fichu', 'fidel', 'fidus', 'figur', 'fikse', 'fikst',
'filet', 'filme', 'filur', 'fimre', 'final', 'finde', 'finer', 'finis', 'finit', 'finke',
'finne', 'finte', 'firer', 'firma', 'firme', 'firti', 'fiser', 'fiske', 'fisse', 'fiste',
'fitre', 'fjant', 'fjase', 'fjeld', 'fjern', 'fjols', 'fjong', 'flabe', 'flade', 'flage',
'flagr', 'flair', 'flash', 'flere', 'flers', 'flest', 'flier', 'flink', 'flint', 'flire',
'flirt', 'floks', 'flora', 'floss', 'flove', 'flovt', 'fluat', 'flugt', 'fluks', 'flute',
'flyde', 'flyer', 'flyet', 'flyve', 'fnise', 'fnist', 'fnyse', 'foder', 'fodre', 'foged',
'fokke', 'fokus', 'folde', 'folie', 'folio', 'fonds', 'fonem', 'foran', 'forbi', 'force',
'fordi', 'forel', 'foret', 'forme', 'forne', 'forny', 'forse', 'forte', 'forum', 'forza',
'foton', 'foyer', 'fragt', 'franc', 'frank', 'frase', 'frede', 'freds', 'frels', 'freon',
'freud', 'frier', 'frigg', 'frise', 'frisk', 'frist', 'frits', 'fromt', 'front', 'frost',
'fruer', 'frugt', 'fryde', 'frygt', 'fryns', 'fryse', 'fugle', 'fugte', 'fulde', 'fulgt',
'fulla', 'fulte', 'fumle', 'funke', 'funky', 'furen', 'fures', 'furet', 'furie', 'fursi',
'fusel', 'fuser', 'fuset', 'futil', 'futon', 'futte', 'fylde', 'fyldt', 'fylke', 'fynbo',
'fynsk', 'fyord', 'fyret', 'fyrig', 'fyrre', 'fyrst', 'fysik', 'gabor', 'gabte', 'gaden',
'gagen', 'gages', 'galar', 'galej', 'gales', 'galpe', 'gambl', 'gamin', 'gamle', 'ganga',
'gange', 'garde', 'gasen', 'gaten', 'gaven', 'gavne', 'gazen', 'gebet', 'geder', 'geilo',
'gejst', 'gekko', 'gelen', 'gemak', 'gemen', 'gemme', 'gemse', 'gemte', 'gemyt', 'genen',
'genes', 'geoid', 'geret', 'gerne', 'gevir', 'gibet', 'gider', 'gifte', 'gilde', 'gimli',
'ginen', 'gitov', 'given', 'giver', 'gives', 'givet', 'givne', 'gjort', 'glade', 'glemt',
'gloet', 'gnave', 'gnist', 'gnyen', 'gnyet', 'goden', 'godes', 'godet', 'godte', 'gomoa',
'gouda', 'grate', 'grats', 'grave', 'greco', 'greor', 'gribe', 'grime', 'grimt', 'grins',
'grise', 'groft', 'grove', 'grube', 'gruen', 'gruer', 'grums', 'grumt', 'grund', 'gryer',
'grynt', 'guden', 'guder', 'guide', 'gules', 'gulne', 'gumpe', 'gusen', 'gusla', 'gyden',
'gyder', 'gysen', 'gyser', 'gyset', 'gyser', 'gader', 'gagen', 'gager', 'galan', 'galen',
'galla', 'galop', 'galte', 'gamze', 'ganen', 'ganer', 'gange', 'gasen', 'gaser', 'gasse',
'gaten', 'gates', 'gauss', 'gaven', 'gaver', 'gavin', 'gavle', 'gbeng', 'geare', 'gebyr',
'gedde', 'geden', 'geder', 'geilo', 'gekko', 'geled', 'gelen', 'geler', 'gemak', 'gemal',
'gemme', 'gemte', 'genbo', 'genen', 'gener', 'genet', 'genne', 'genre', 'gerly', 'gerne',
'geske', 'gevir', 'gezer', 'ghana', 'ghazi', 'ghita', 'gibbe', 'gibea', 'gifte', 'gikan',
'gilda', 'gilde', 'gimle', 'ginen', 'giner', 'giraf', 'gisla', 'gisle', 'gispe', 'gitre',
'gjern', 'gjord', 'gjort', 'glade', 'glady', 'glane', 'glans', 'glean', 'glemt', 'glenn',
'glibe', 'globe', 'glory', 'glose', 'gnags', 'gnide', 'gnier', 'gnist', 'gnuen', 'gnuer',
'gnupa', 'goder', 'godet', 'godte', 'golan', 'gomme', 'gosen', 'gotik', 'gouda', 'gowri',
'gozan', 'grace', 'graum', 'grave', 'grebe', 'green', 'grelt', 'grene', 'greta', 'grete',
'greve', 'grill', 'grime', 'grimt', 'grine', 'grise', 'gritt', 'groft', 'grove', 'grube',
'gruen', 'gruet', 'grums', 'grumt', 'grund', 'gryde', 'gryet', 'grynt', 'guano', 'guava',
'guder', 'gufle', 'guide', 'gulne', 'gumle', 'gummi', 'gunde', 'gunst', 'gunta', 'gunva',
'guppy', 'gurre', 'gusen', 'gusla', 'gusti', 'gyden', 'gyede', 'gylle', 'gylte', 'gynge',
'gyris', 'gyros', 'gyser', 'gabet', 'gaden', 'gaffa', 'gafle', 'gagat', 'gagen', 'gager',
'galan', 'galar', 'galde', 'galej', 'galen', 'galer', 'galge', 'galla', 'galle', 'galon',
'galop', 'galpe', 'gambe', 'gamet', 'gamin', 'gamle', 'gamma', 'gange', 'ganja', 'gante',
'garde', 'garve', 'gasse', 'gavle', 'gavne', 'gavns', 'gayal', 'geare', 'gebet', 'gebis',
'gebyr', 'geder', 'geeks', 'gejst', 'geled', 'geles', 'gemal', 'gemen', 'gemme', 'gemse',
'gemyt', 'genbo', 'genen', 'gener', 'genne', 'genom', 'genre', 'gense', 'genua', 'genus',
'geret', 'gerne', 'geske', 'getty', 'gevir', 'gibbe', 'gider', 'gifte', 'gilde', 'gimpe',
'giraf', 'giret', 'gisel', 'gisne', 'gispe', 'gitov', 'gitre', 'given', 'giver', 'givet',
'givne', 'gjord', 'gjort', 'glade', 'glane', 'glans', 'gleba', 'gleje', 'glide', 'glids',
'glimt', 'globe', 'gloer', 'gloet', 'glose', 'gnave', 'gnide', 'gnier', 'gnist', 'gnome',
'godes', 'godte', 'godts', 'gogol', 'gokke', 'golde', 'goldt', 'gople', 'gorge', 'gorgo',
'gotik', 'gould', 'gramt', 'grand', 'grant', 'grape', 'grave', 'grebs', 'green', 'grege',
'greje', 'grene', 'greta', 'greve', 'gribe', 'grill', 'grime', 'grimt', 'grind', 'grine',
'grise', 'grisk', 'groft', 'grove', 'grovs', 'grube', 'gruen', 'grums', 'grund', 'gruse',
'gryde', 'guano', 'gubbe', 'guden', 'guder', 'gudst', 'guffe', 'gufle', 'guide', 'gulne',
'gulve', 'gumle', 'gumme', 'gummi', 'gunst', 'guppy', 'gutta', 'gyder', 'gydje', 'gydts',
'gynge', 'gysen', 'gytje', 'habil', 'hagen', 'hages', 'haifa', 'halen', 'haler', 'halet',
'halse', 'halvt', 'hamar', 'hanne', 'hapse', 'hasen', 'haser', 'haspe', 'haste', 'haves',
'havet', 'heden', 'hefte', 'hegel', 'heger', 'hegns', 'hejst', 'helet', 'helgs', 'helle',
'helme', 'henne', 'henon', 'hente', 'heros', 'herre', 'hersk', 'hetze', 'heven', 'hevet',
'higen', 'himle', 'hindr', 'hitch', 'hitra', 'hitte', 'hiver', 'hobby', 'hoben', 'holde',
'holdt', 'holer', 'hoorn', 'hoppy', 'horer', 'horus', 'hoste', 'hotel', 'hoved', 'hoven',
'hovne', 'hovsa', 'huden', 'hudre', 'hugin', 'hujes', 'huler', 'hules', 'hulle', 'humor',
'hunde', 'hunds', 'hurra', 'huser', 'huses', 'huset', 'huske', 'husly', 'hvide', 'hvidn',
'hvidt', 'hvile', 'hvilt', 'hvori', 'hybel', 'hygge', 'hylde', 'hyles', 'hylet', 'hyren',
'hyres', 'hyret', 'hysse', 'habil', 'hadet', 'hadsk', 'hagen', 'hahal', 'hahdi', 'haiti',
'hajer', 'hakke', 'hakki', 'hakon', 'halal', 'halil', 'halim', 'halin', 'halit', 'halne',
'halon', 'halse', 'hamad', 'hamat', 'hamdi', 'hamed', 'hamid', 'hamna', 'hampi', 'hamre',
'hanaa', 'hanen', 'haner', 'hanim', 'hanni', 'hanno', 'hanny', 'hanoi', 'hansa', 'haris',
'harke', 'harro', 'harry', 'harsk', 'harve', 'haser', 'hashi', 'hasib', 'hasor', 'haspe',
'hatte', 'haved', 'haven', 'haves', 'havet', 'havre', 'havva', 'hawra', 'hawre', 'heade',
'heats', 'heavy', 'heden', 'heidi', 'heino', 'heins', 'heinz', 'hejre', 'hejsa', 'hekan',
'hekla', 'hekse', 'heler', 'helet', 'helgi', 'helgo', 'helin', 'helst', 'helte', 'henna',
'henny', 'hente', 'heppe', 'herud', 'hesle', 'heste', 'hgfhh', 'higet', 'hiken', 'hiker',
'hikke', 'hilse', 'hilst', 'hinda', 'hinde', 'hints', 'hippe', 'hirse', 'hjeds', 'hjelm',
'hjerm', 'hjord', 'hobro', 'hoger', 'holdt', 'holme', 'holte', 'honda', 'honey', 'honum',
'hopla', 'hoppe', 'hopsa', 'horeb', 'horik', 'horne', 'hosen', 'hoser', 'hosna', 'hosva',
'hotel', 'hoved', 'hovne', 'hrafn', 'hroar', 'hrolf', 'hugan', 'hujer', 'hulen', 'humle',
'hunbi', 'hunde', 'hurup', 'husar', 'huske', 'huter', 'hvede', 'hvene', 'hveps', 'hverv',
'hvile', 'hvori', 'hybel', 'hyben', 'hydra', 'hylen', 'habil', 'habit', 'hacek', 'hader',
'hades', 'hadet', 'hadsk', 'hagen', 'hager', 'hages', 'hagle', 'haiku', 'haiti', 'hallo',
'halse', 'halte', 'hamar', 'hamle', 'hamme', 'hampi', 'hamre', 'handl', 'handy', 'hapse',
'harem', 'harer', 'harke', 'harme', 'harpe', 'harsk', 'harve', 'haspe', 'hassi', 'haste',
'hausa', 'havde', 'haven', 'haver', 'havet', 'havne', 'havre', 'heade', 'hedde', 'heden',
'heder', 'hedes', 'hedge', 'hefte', 'hegle', 'hegne', 'hejre', 'hejsa', 'hekse', 'helge',
'helle', 'helse', 'helst', 'helte', 'hente', 'heppe', 'heraf', 'herat', 'herme', 'herom',
'herop', 'heros', 'herre', 'herse', 'hertz', 'heste', 'hetze', 'hevet', 'higen', 'higet',
'hihat', 'hilse', 'hinde', 'hindi', 'hinke', 'hints', 'hirse', 'hisse', 'hitte', 'hiver',
'hives', 'hjald', 'hjelm', 'hjord', 'hjort', 'hobby', 'hoben', 'holde', 'holdt', 'hoppe',
'horde', 'horeb', 'horst', 'horus', 'hoser', 'hoste', 'hotel', 'house', 'hoved', 'hoven',
'hovsa', 'huden', 'hugaf', 'hugge', 'hugst', 'hulen', 'hulke', 'hulle', 'human', 'humle',
'humus', 'hurra', 'husar', 'huske', 'hutle', 'hvalp', 'hvast', 'hvede', 'hvene', 'hveps',
'hvert', 'hverv', 'hvide', 'hvidt', 'hvile', 'hvine', 'hybel', 'hydra', 'hygge', 'hykle',
'hylde', 'hyler', 'hylle', 'hymen', 'hymer', 'hymne', 'hynde', 'hyrde', 'hyrer', 'hysse',
'hytte', 'ibisa', 'ibiza', 'ideal', 'ideer', 'idiot', 'iglem', 'igler', 'ihjel', 'ikter',
'ilagt', 'ilden', 'ilder', 'ildhu', 'ildne', 'ilede', 'iltes', 'image', 'imens', 'immer',
'immun', 'indbo', 'inert', 'irene', 'irres', 'irret', 'isede', 'isfri', 'ising', 'isner',
'isnet', 'issen', 'isset', 'issko', 'istap', 'isyet', 'ibsen', 'idaho', 'ideal', 'ideel',
'ideen', 'ideer', 'idina', 'idiot', 'ifald', 'igang', 'iglen', 'igler', 'ihsan', 'ikast',
'iklwa', 'ilbro', 'ilbud', 'ilden', 'ilder', 'ilede', 'iling', 'iller', 'ilten', 'ilter',
'iltet', 'iltog', 'iltre', 'ilwad', 'image', 'imens', 'inaya', 'indad', 'indbo', 'inden',
'inder', 'indre', 'indse', 'indvi', 'infam', 'ingen', 'input', 'inter', 'intet', 'intim',
'intro', 'inuit', 'ionen', 'ioner', 'ipoet', 'irbit', 'irere', 'ironi', 'irons', 'irren',
'irrer', 'irret', 'irske', 'isbar', 'isbod', 'isede', 'isene', 'isere', 'isfri', 'ishav',
'ishus', 'islam', 'ismen', 'ismer', 'isner', 'isnet', 'isret', 'issen', 'isser', 'issey',
'isske', 'istap', 'istid', 'isyer', 'isyet', 'itsch', 'ivalu', 'ivrig', 'ibere', 'ibiza',
'ibrik', 'idaho', 'ideal', 'ideel', 'ideer', 'idiom', 'idiot', 'ifald', 'igler', 'ihjel',
'ikkun', 'ilagt', 'iland', 'ilbud', 'ildhu', 'ildne', 'ilede', 'ilsom', 'ilter', 'iltet',
'iltre', 'image', 'imens', 'immer', 'immun', 'indad', 'indbo', 'inden', 'inder', 'indre',
'indse', 'inert', 'infam', 'inful', 'ingen', 'ingot', 'input', 'intet', 'intro', 'inuit',
'invar', 'irere', 'irisk', 'ironi', 'irosi', 'irrer', 'irret', 'isbod', 'isede', 'isfod',
'isfri', 'ishus', 'ising', 'islag', 'islam', 'ismen', 'ismer', 'isoli', 'ister', 'istid',
'isyet', 'ivrer', 'ivrig', 'jadis', 'jaffa', 'jager', 'jaget', 'jagte', 'jakke', 'james',
'jante', 'japan', 'jeans', 'jeget', 'jesus', 'jihad', 'joint', 'jonen', 'joule', 'jubel',
'juble', 'juice', 'jules', 'junke', 'junor', 'juten', 'jaber', 'jabes', 'jabne', 'jaden',
'jaffa', 'jager', 'jaget', 'jahve', 'jakke', 'jakob', 'jamie', 'jamil', 'janie', 'janik',
'janne', 'janum', 'janus', 'japan', 'jarne', 'jason', 'javel', 'jeane', 'jeeps', 'jeffy',
'jegor', 'jenki', 'jenle', 'jente', 'jerry', 'jerup', 'jesus', 'jethe', 'jeton', 'jinki',
'jiven', 'jjjjj', 'joden', 'johni', 'joken', 'jokes', 'joket', 'jolle', 'jonis', 'jonne',
'jorie', 'jorim', 'jorry', 'josua', 'josue', 'josva', 'joule', 'jubel', 'juble', 'judah',
'juden', 'julen', 'julia', 'julie', 'junes', 'junge', 'juvel', 'jyden', 'jyder', 'jytta',
'jytte', 'jabot', 'jader', 'jaffa', 'jager', 'jaget', 'jagte', 'jaket', 'jakke', 'jaleo',
'jalon', 'jambe', 'jamen', 'james', 'jamme', 'jamre', 'janke', 'jante', 'jaord', 'japan',
'jaske', 'jason', 'javel', 'jeans', 'jeger', 'jeget', 'jeres', 'jerke', 'jerne', 'jesus',
'jinge', 'jobbe', 'jodle', 'jokke', 'jolie', 'jolle', 'jorde', 'joule', 'jubel', 'juble',
'judas', 'juice', 'jumbe', 'junke', 'junta', 'juvel', 'jyder', 'kagen', 'kager', 'kahyt',
'kairo', 'kajen', 'kajes', 'kakao', 'kalas', 'kalot', 'kamre', 'kanal', 'kande', 'kanen',
'kanin', 'kanon', 'kants', 'kanye', 'kappe', 'karle', 'karpe', 'kasse', 'kasus', 'kauri',
'kavaj', 'keder', 'kelen', 'keles', 'kelim', 'kemil', 'kende', 'kendo', 'kigge', 'kilde',
'kiler', 'kilet', 'kimen', 'kippe', 'kirke', 'kiste', 'kitaj', 'kiven', 'kjole', 'klage',
'klare', 'klein', 'klejn', 'klike', 'klima', 'kline', 'klink', 'kloak', 'kloen', 'klove',
'klynk', 'knage', 'knase', 'knast', 'knibe', 'knoen', 'knold', 'knort', 'knude', 'knuen',
'knust', 'knyet', 'kodak', 'kodel', 'koder', 'koger', 'kolbe', 'kolde', 'koldt', 'kolli',
'koman', 'komme', 'konen', 'konge', 'koral', 'koret', 'korfu', 'korte', 'kotka', 'kraft',
'krave', 'kravl', 'kreds', 'kreta', 'kridt', 'kroen', 'kroer', 'kryds', 'krypt', 'kujon',
'kulde', 'kulds', 'kules', 'kulos', 'kults', 'kumla', 'kumme', 'kunde', 'kunne', 'kunst',
'kupon', 'kurby', 'kuren', 'kvads', 'kvals', 'kvalt', 'kvasi', 'kvide', 'kvien', 'kvier',
'kvies', 'kvikt', 'kvist', 'kyler', 'kysen', 'kyser', 'kyskt', 'kabul', 'kabys', 'kadek',
'kadem', 'kaffe', 'kafka', 'kagen', 'kager', 'kagle', 'kahlo', 'kaija', 'kairo', 'kajak',
'kalas', 'kalif', 'kalki', 'kalot', 'kalua', 'kalum', 'kalve', 'kamel', 'kamin', 'kamre',
'kanal', 'kande', 'kanel', 'kanen', 'kaner', 'kanni', 'kanut', 'kapel', 'kapun', 'karan',
'karat', 'karle', 'karma', 'karna', 'karpe', 'karre', 'karry', 'karse', 'karup', 'kasko',
'kasse', 'kaste', 'kasus', 'kathy', 'katia', 'katie', 'katte', 'keaen', 'keaer', 'kebab',
'kebie', 'kecia', 'kedel', 'keder', 'kefir', 'kegle', 'keira', 'kelen', 'kelim', 'kelly',
'kende', 'kendt', 'kenno', 'kenny', 'kenth', 'kento', 'kerne', 'kerry', 'kerte', 'kerup',
'keten', 'keton', 'ketti', 'ketty', 'kevan', 'keven', 'kevin', 'kiara', 'kikse', 'kilen',
'kiler', 'kilet', 'kilte', 'kimen', 'kimer', 'kinin', 'kiosk', 'kiran', 'kiraz', 'kirke',
'kitna', 'kitsa', 'kives', 'kiwin', 'kiyan', 'kjeld', 'klaes', 'klage', 'klamt', 'klang',
'klaps', 'klare', 'klart', 'klase', 'klask', 'klaus', 'klejn', 'klemt', 'klike', 'klima',
'kling', 'klint', 'klire', 'klode', 'klods', 'kloen', 'kloge', 'klone', 'klovn', 'klude',
'kluns', 'klyde', 'klynk', 'knage', 'knald', 'knark', 'knase', 'knast', 'knibe', 'knirk',
'knive', 'knoen', 'knubs', 'knude', 'knuse', 'knust', 'knyer', 'knyet', 'koala', 'koben',
'kobra', 'koden', 'koder', 'koket', 'kokke', 'kokos', 'kolbe', 'kolde', 'koldt', 'kolik',
'kolli', 'kolos', 'komma', 'kondi', 'konen', 'koner', 'konge', 'konto', 'kopek', 'korea',
'koret', 'korfu', 'korte', 'korup', 'koste', 'kraft', 'krage', 'krank', 'krans', 'krast',
'krave', 'kravl', 'krebs', 'kreds', 'kreml', 'krese', 'kreta', 'kridt', 'krimi', 'krise',
'kroen', 'kroer', 'krogh', 'krone', 'krumt', 'kryds', 'krypt', 'kuber', 'kugle', 'kukur',
'kulde', 'kulos', 'kumte', 'kunst', 'kupon', 'kuren', 'kurer', 'kurie', 'kurus', 'kurve',
'kuske', 'kusse', 'kutte', 'kuuku', 'kvaks', 'kvalt', 'kvark', 'kvast', 'kvide', 'kvier',
'kvols', 'kvong', 'kyler', 'kylet', 'kyrie', 'kyser', 'kyset', 'kysse', 'kabel', 'kable',
'kabys', 'kadet', 'kadre', 'kafes', 'kaffe', 'kagen', 'kager', 'kagle', 'kahyt', 'kalar',
'kalas', 'kalde', 'kalif', 'kalke', 'kalot', 'kalve', 'kamel', 'kamin', 'kamre', 'kanal',
'kande', 'kanin', 'kanon', 'kante', 'kanut', 'kapel', 'kaper', 'kapok', 'kapot', 'kappe',
'kapre', 'kapun', 'kaput', 'karak', 'karat', 'karde', 'karet', 'karle', 'karme', 'karpe',
'karre', 'karsk', 'karve', 'kasko', 'kasse', 'kaste', 'kasus', 'katar', 'katte', 'kavaj',
'kaver', 'kazoo', 'kebab', 'kedah', 'kedel', 'kediv', 'kegle', 'kejse', 'kelim', 'kelly',
'kende', 'kendt', 'kerne', 'kerte', 'kerub', 'keten', 'ketle', 'keyes', 'kigge', 'kikse',
'kilde', 'kilen', 'kinin', 'kinke', 'kinks', 'kiper', 'kirke', 'kisel', 'kiste', 'kitte',
'kives', 'kjole', 'kjove', 'klage', 'klamp', 'klamt', 'klang', 'klaps', 'klare', 'klart',
'klase', 'klask', 'klein', 'klejn', 'klemt', 'klike', 'klima', 'kline', 'klink', 'klint',
'kloak', 'klode', 'klods', 'kloen', 'kloge', 'klogt', 'klold', 'klone', 'klove', 'klovn',
'klude', 'klump', 'kluns', 'klyde', 'knage', 'knald', 'knark', 'knase', 'knast', 'knibe',
'knips', 'knirk', 'knive', 'knold', 'knort', 'knubs', 'knude', 'knuge', 'knuse', 'knust',
'koala', 'koble', 'kobra', 'koder', 'kodet', 'kofte', 'koger', 'kogge', 'kogle', 'kogte',
'kokke', 'kokon', 'kolbe', 'kolde', 'koldt', 'kolik', 'kolon', 'kolos', 'komik', 'komma',
'komme', 'konak', 'kondi', 'koner', 'konge', 'konke', 'konti', 'konto', 'kopal', 'koral',
'koreg', 'koret', 'korga', 'korps', 'korte', 'kosak', 'kosta', 'koste', 'kraal', 'kraft',
'krage', 'krane', 'krank', 'krans', 'krast', 'krave', 'krebs', 'kreds', 'kreol', 'kreta',
'krete', 'kridt', 'krige', 'krimi', 'krise', 'kroge', 'krone', 'krops', 'krudt', 'kruse',
'krybe', 'kryds', 'kubus', 'kugle', 'kujon', 'kukke', 'kukur', 'kulak', 'kulan', 'kulde',
'kulos', 'kulso', 'kumme', 'kunde', 'kunne', 'kunst', 'kupon', 'kuppe', 'kurby', 'kurer',
'kurve', 'kuske', 'kutte', 'kvalm', 'kvalt', 'kvant', 'kvart', 'kvase', 'kvast', 'kvide',
'kvikt', 'kvind', 'kvint', 'kvist', 'kvota', 'kvote', 'kylet', 'kymre', 'kyper', 'kyras',
'kyrie', 'kyser', 'kyske', 'kyste', 'laban', 'laber', 'labre', 'laden', 'lader', 'lades',
'ladet', 'ladte', 'lagde', 'lager', 'laget', 'lagre', 'lagte', 'lakaj', 'lakke', 'lakst',
'lampe', 'langt', 'lassi', 'laste', 'lasts', 'laven', 'laver', 'laves', 'lavet', 'leben',
'leden', 'leder', 'ledet', 'leger', 'leges', 'leget', 'lejde', 'lejen', 'lejer', 'lejes',
'lejet', 'lejre', 'lepra', 'lepri', 'leret', 'lesto', 'letal', 'lette', 'lever', 'levet',
'levin', 'liden', 'lider', 'lidet', 'lieds', 'ligge', 'lille', 'limek', 'limen', 'limet',
'lindr', 'lindt', 'linen', 'liner', 'linet', 'linje', 'linse', 'linus', 'liste', 'liter',
'livet', 'lloyd', 'lobia', 'logen', 'logge', 'lokum', 'longe', 'loren', 'lotra', 'lotus',
'loves', 'lovet', 'luffe', 'lugar', 'luges', 'lukaf', 'lukke', 'lukum', 'lulle', 'lumen',
'lumre', 'lunen', 'lunet', 'luren', 'lurer', 'luret', 'lyden', 'lydes', 'lyene', 'lykke',
'lyner', 'lyser', 'lyset', 'lyste', 'laavu', 'laban', 'label', 'labre', 'laden', 'lader',
'lagde', 'lagos', 'lagre', 'laica', 'lakaj', 'lakke', 'lalle', 'lalou', 'lamel', 'lamia',
'lamin', 'lampe', 'lance', 'lande', 'lando', 'lange', 'langs', 'langt', 'lanja', 'lanka',
'lanna', 'lanni', 'lanse', 'large', 'larix', 'larve', 'lasen', 'laser', 'laset', 'lasso',
'latin', 'laura', 'laurs', 'laust', 'laven', 'lavet', 'laxin', 'lazio', 'leane', 'lease',
'leben', 'leden', 'leder', 'ledet', 'ledig', 'ledte', 'leeds', 'leere', 'legal', 'legat',
'legen', 'leger', 'leget', 'lehna', 'lehne', 'leine', 'lejde', 'lejen', 'lejer', 'lejre',
'lemme', 'lemna', 'lemon', 'lempe', 'lenda', 'lenet', 'lenne', 'lenus', 'leone', 'leret',
'lerup', 'lette', 'lever', 'levne', 'lhasa', 'liana', 'lidse', 'liege', 'liere', 'lifte',
'ligne', 'lilja', 'lilje', 'lille', 'limbo', 'linda', 'linde', 'lindi', 'lindt', 'linen',
'liner', 'linje', 'links', 'linne', 'linse', 'lirer', 'lirke', 'lisby', 'lisca', 'liste',
'liter', 'litza', 'litzi', 'litzy', 'livet', 'lloyd', 'lobby', 'lodde', 'lodne', 'logen',
'loger', 'logik', 'logre', 'loing', 'loire', 'lokum', 'lomme', 'lomvi', 'loppe', 'loren',
'losse', 'lotte', 'lotti', 'lotto', 'lotty', 'lotus', 'loven', 'lovet', 'loxia', 'luann',
'lubna', 'ludie', 'luede', 'luffe', 'lufte', 'lugen', 'luger', 'lugte', 'lukar', 'lukas',
'lukaz', 'lukia', 'lulle', 'lumre', 'lumsk', 'lunde', 'luner', 'lunge', 'lunte', 'lupin',
'luren', 'luret', 'lusen', 'luset', 'lusig', 'luton', 'lutre', 'lycie', 'lyden', 'lyhne',
'lykke', 'lyner', 'lynet', 'lytte', 'laban', 'labbe', 'label', 'laber', 'labil', 'laden',
'lader', 'ladet', 'ladte', 'ladts', 'lagde', 'lager', 'lagre', 'lagts', 'lakaj', 'lakke',
'lalle', 'lamel', 'lamme', 'lampe', 'lande', 'lange', 'langt', 'lanse', 'lapin', 'lapis',
'lapsk', 'larer', 'large', 'larme', 'larve', 'laser', 'laset', 'lasso', 'laste', 'lasur',
'latex', 'latin', 'latus', 'laura', 'laven', 'laver', 'lavet', 'lease', 'lebbe', 'leben',
'leden', 'leder', 'ledes', 'ledet', 'ledig', 'leers', 'lefle', 'legal', 'legat', 'leger',
'legio', 'lejde', 'lejer', 'lejre', 'lemma', 'lemme', 'lemon', 'lempe', 'lemur', 'lende',
'lenin', 'lento', 'leone', 'leret', 'leste', 'lette', 'leven', 'lever', 'levit', 'levne',
'levre', 'libel', 'liden', 'lider', 'lides', 'lidet', 'lidse', 'liere', 'ligge', 'light',
'ligne', 'lilla', 'lille', 'limer', 'limes', 'limet', 'liner', 'linge', 'lingo', 'linie',
'linje', 'linke', 'linse', 'lipom', 'lirer', 'lires', 'lirke', 'lisen', 'liste', 'liter',
'livid', 'livre', 'llama', 'lobby', 'lodde', 'lodes', 'lodne', 'lodse', 'lodur', 'logis',
'logre', 'logur', 'lokal', 'lokke', 'lokum', 'lomme', 'longe', 'longo', 'loppe', 'loren',
'lorne', 'losse', 'lotte', 'lotto', 'loure', 'lousy', 'lovet', 'loyal', 'lubbe', 'lucia',
'luder', 'ludet', 'luffe', 'lufte', 'luger', 'lugte', 'lukaf', 'lukke', 'lulle', 'lumen',
'lumre', 'lumsk', 'lunde', 'luner', 'lunge', 'lunik', 'lunke', 'lunte', 'lupin', 'lupus',
'lurer', 'luret', 'luset', 'luske', 'luven', 'lyder', 'lydig', 'lygte', 'lykke', 'lymfe',
'lynch', 'lyner', 'lynet', 'lynne', 'lyrik', 'lysen', 'lyset', 'lysne', 'lyste', 'lytte',
'maden', 'mader', 'magen', 'mager', 'magre', 'magte', 'maler', 'males', 'maner', 'manes',
'manet', 'maren', 'marin', 'marot', 'marts', 'maset', 'masse', 'maste', 'mater', 'maven',
'maver', 'mavet', 'mavse', 'mazen', 'meche', 'megen', 'meget', 'mejet', 'mekka', 'melde',
'meldt', 'meler', 'melon', 'mener', 'menes', 'menig', 'mente', 'messe', 'mestr', 'metal',
'meute', 'midte', 'mildt', 'mimen', 'mimet', 'modal', 'model', 'modem', 'moden', 'moder',
'modet', 'modne', 'molen', 'moler', 'monet', 'monne', 'monty', 'moore', 'moral', 'moret',
'moser', 'moset', 'moste', 'mosts', 'mosul', 'motel', 'motiv', 'motor', 'muges', 'muget',
'mugne', 'mukke', 'mulen', 'mules', 'mulet', 'mulne', 'munds', 'munin', 'muntr', 'muren',
'murer', 'muret', 'musik', 'mutte', 'myret', 'myten', 'mabel', 'madam', 'mados', 'madro',
'madum', 'mafia', 'magdi', 'magen', 'magma', 'magna', 'magne', 'magog', 'magre', 'magte',
'maida', 'maien', 'maiga', 'mails', 'maine', 'majsa', 'makak', 'malek', 'malla', 'malle',
'malta', 'mamba', 'mambo', 'mamre', 'manal', 'mange', 'mango', 'mangt', 'manke', 'manna',
'manor', 'manya', 'mappe', 'marck', 'marco', 'maren', 'margo', 'maria', 'mario', 'marko',
'marne', 'marts', 'marty', 'maser', 'maset', 'maske', 'match', 'mateo', 'matis', 'matte',
'mavel', 'mavse', 'mayen', 'mayet', 'medea', 'meden', 'meder', 'media', 'medie', 'medio',
'medoc', 'megen', 'meget', 'mehli', 'mejer', 'mejls', 'mejse', 'mekka', 'melda', 'melet',
'melis', 'melon', 'mened', 'menet', 'menig', 'merci', 'mercy', 'merit', 'meryl', 'mesan',
'messe', 'messi', 'mesto', 'metal', 'metan', 'meter', 'metro', 'metyl', 'meuse', 'miave',
'micah', 'micke', 'micki', 'miden', 'mider', 'miklo', 'milan', 'milas', 'milda', 'milde',
'miler', 'milja', 'milka', 'milla', 'milte', 'mimer', 'mimet', 'mimmi', 'mindi', 'miner',
'mingo', 'minik', 'minsk', 'minus', 'minut', 'mirja', 'miski', 'misle', 'mispa', 'misse',
'miste', 'mitja', 'mitta', 'mitzi', 'mjave', 'model', 'modem', 'modet', 'modig', 'modne',
'modri', 'moler', 'molie', 'molli', 'molly', 'moppe', 'moral', 'morel', 'moria', 'morud',
'morus', 'mosel', 'mosen', 'moses', 'moska', 'moske', 'mosul', 'motel', 'motiv', 'motor',
'motti', 'mover', 'muaaz', 'muffe', 'mufti', 'mugne', 'mukke', 'muler', 'mumie', 'munck',
'muren', 'murer', 'murre', 'muser', 'musik', 'mutte', 'mynde', 'mynte', 'myrer', 'mysli',
'myten', 'myter', 'mabel', 'macho', 'madam', 'mados', 'madro', 'mafia', 'magen', 'mager',
'magma', 'magre', 'magte', 'maile', 'major', 'makke', 'makro', 'maler', 'malet', 'malke',
'malle', 'manen', 'maner', 'mange', 'mango', 'manke', 'manko', 'manus', 'mappe', 'march',
'marin', 'marks', 'marsk', 'marts', 'masen', 'maser', 'mases', 'maset', 'maske', 'masse',
'maste', 'masut', 'match', 'matte', 'mauer', 'mauve', 'medea', 'meder', 'medie', 'medio',
'megen', 'meget', 'mejer', 'mekka', 'melba', 'melde', 'meldt', 'melet', 'melis', 'mener',
'menet', 'menig', 'mente', 'merit', 'mesan', 'messe', 'metal', 'metan', 'meter', 'metra',
'metre', 'metro', 'metyl', 'meute', 'meyer', 'mezzo', 'mider', 'midje', 'midti', 'mikro',
'mikse', 'mildt', 'mille', 'mimer', 'mimik', 'minde', 'minen', 'minus', 'minut', 'miste',
'mitra', 'mitte', 'mjave', 'mobbe', 'mobil', 'model', 'moden', 'moder', 'modig', 'modis',
'modul', 'modus', 'moire', 'mokha', 'mokka', 'mokke', 'molbo', 'molen', 'molok', 'monne',
'morak', 'moral', 'morer', 'morse', 'morsk', 'moser', 'moset', 'moske', 'mosle', 'moste',
'motel', 'motiv', 'motor', 'motto', 'mudre', 'muffe', 'mufle', 'mufti', 'mugne', 'mukke',
'mulen', 'muler', 'mulig', 'mulle', 'multe', 'multi', 'mumie', 'mumle', 'munde', 'munke',
'murbi', 'mures', 'murre', 'musen', 'musik', 'mutte', 'muzak', 'myopi', 'myose', 'myrde',
'myrra', 'myten', 'myter', 'nager', 'nages', 'naget', 'naive', 'naivt', 'nanna', 'nanus',
'nappe', 'narko', 'narre', 'natal', 'natte', 'natur', 'naver', 'navle', 'navne', 'navra',
'neden', 'negle', 'negus', 'nemer', 'nemme', 'netop', 'nevis', 'nicam', 'ninja', 'nippe',
'noget', 'nolde', 'noler', 'nomen', 'noomi', 'noreg', 'norge', 'norme', 'norms', 'norne',
'norsk', 'notat', 'noten', 'noter', 'novra', 'numre', 'nurse', 'nymfe', 'nyren', 'nytte',
'nabbe', 'nabil', 'nacha', 'nadir', 'nadja', 'nadya', 'naeem', 'naemi', 'nafta', 'nager',
'naget', 'nagle', 'naive', 'naivt', 'naiya', 'najah', 'najas', 'najat', 'nakke', 'nalre',
'nanmu', 'nanna', 'nanni', 'nanny', 'nappe', 'narin', 'narre', 'naser', 'nasua', 'natan',
'natia', 'natja', 'natur', 'nauru', 'navet', 'navle', 'navne', 'navra', 'nawal', 'naxos',
'nazan', 'nazli', 'nazmi', 'ndeye', 'nduta', 'nedad', 'nedre', 'neget', 'negev', 'negle',
'neill', 'nejer', 'nejet', 'nejla', 'nejst', 'nemer', 'nemet', 'nemme', 'nency', 'nenia',
'nepal', 'nerie', 'nerve', 'nette', 'netto', 'neuru', 'nevet', 'nevin', 'nexus', 'niaka',
'niall', 'niche', 'nicko', 'niece', 'niels', 'niere', 'niger', 'nihat', 'nijaz', 'nikas',
'nilen', 'nimco', 'nimet', 'ninja', 'ninka', 'ninok', 'niobe', 'nisse', 'nital', 'nitha',
'nitte', 'niver', 'nizar', 'nobel', 'noble', 'noder', 'noemi', 'nogen', 'noget', 'nogle',
'noler', 'nolet', 'nolte', 'nonbo', 'nonie', 'nonne', 'noret', 'norge', 'norne', 'norre',
'norsk', 'notat', 'noten', 'noter', 'nudel', 'nulte', 'numre', 'numse', 'nuppe', 'nuray',
'nuser', 'nutid', 'nuvel', 'nuvin', 'nydam', 'nyere', 'nyhed', 'nykke', 'nykro', 'nylon',
'nymfe', 'nynja', 'nyord', 'nyren', 'nyrer', 'nyrig', 'nyset', 'nysne', 'nabob', 'nafta',
'nagel', 'nagle', 'naive', 'nakib', 'nakke', 'nalle', 'nalre', 'nappa', 'nappe', 'narko',
'narre', 'nasal', 'nasse', 'naste', 'nasti', 'nativ', 'natue', 'natur', 'naupa', 'navel',
'naver', 'navle', 'navne', 'nedad', 'nedre', 'neger', 'negev', 'negle', 'nejer', 'nemeg',
'nemme', 'neret', 'nerie', 'nertz', 'nerve', 'netop', 'nette', 'netto', 'neves', 'nevet',
'ngoer', 'niche', 'niece', 'nieda', 'niger', 'nihil', 'nihon', 'nikke', 'nimes', 'ninon',
'nippe', 'nisse', 'nital', 'nitid', 'nitte', 'nival', 'nobel', 'nogen', 'noget', 'nogle',
'noler', 'nolet', 'nomen', 'nonan', 'nonne', 'noomi', 'noria', 'norne', 'nosse', 'notar',
'notat', 'notec', 'noter', 'novra', 'nudel', 'numer', 'nummi', 'numre', 'numse', 'nuppe',
'nurse', 'nuser', 'nusle', 'nusse', 'nutid', 'nutte', 'nuvel', 'nyala', 'nyder', 'nydes',
'nyere', 'nyhed', 'nykke', 'nylig', 'nylon', 'nymfe', 'nynne', 'nyrig', 'nyser', 'nysne',
'nytte', 'oasis', 'oboen', 'oboer', 'odden', 'odder', 'oders', 'ofrer', 'ofret', 'oksen',
'okses', 'okset', 'oktav', 'olien', 'oliet', 'oljen', 'olmes', 'ombyt', 'omdel', 'omega',
'omkom', 'omsat', 'ondes', 'ondet', 'opbyg', 'opdag', 'opera', 'ophav', 'opium', 'oplad',
'oplag', 'opliv', 'opluk', 'oplum', 'opret', 'opsat', 'opsig', 'optik', 'optog', 'optur',
'orbet', 'orden', 'ordet', 'ordre', 'orede', 'organ', 'orion', 'orken', 'orkis', 'ormet',
'ornat', 'ortis', 'osede', 'otiet', 'otium', 'oveni', 'ovnen', 'oanna', 'oasen', 'oaser',
'oasis', 'obada', 'obama', 'oboen', 'oboer', 'ocean', 'odden', 'odder', 'odeon', 'ofret',
'okker', 'oksen', 'okser', 'okset', 'oktan', 'oktay', 'olden', 'oleat', 'olein', 'olien',
'olier', 'olina', 'oline', 'olsen', 'omega', 'omegn', 'omend', 'omgik', 'omsat', 'omvej',
'ondet', 'onkel', 'onyks', 'opera', 'ophav', 'oplad', 'oplag', 'oprah', 'opret', 'optog',
'orale', 'oralt', 'orden', 'ordet', 'ordne', 'ordre', 'oreby', 'orede', 'orfeo', 'organ',
'orgel', 'orgie', 'orham', 'orhan', 'orion', 'orkan', 'orken', 'orker', 'orket', 'orler',
'ormen', 'ornat', 'ornen', 'orner', 'osaka', 'oscar', 'osede', 'osere', 'osten', 'othar',
'otiet', 'otium', 'otter', 'ovale', 'ovalt', 'oveni', 'ovnen', 'oaser', 'oasis', 'oblat',
'oblik', 'ocean', 'odder', 'odeur', 'offer', 'ofrer', 'ogive', 'oglio', 'ogram', 'okses',
'oktan', 'oktav', 'oktet', 'olden', 'oliet', 'olsen', 'ombud', 'ombuk', 'ombyg', 'omegn',
'omend', 'omlyd', 'ommer', 'omsat', 'omvej', 'onani', 'onans', 'onkel', 'onyks', 'opbud',
'opera', 'opfor', 'opgav', 'ophav', 'ophed', 'ophob', 'opium', 'opkog', 'opkom', 'oplad',
'oplag', 'oplod', 'opret', 'oprev', 'opsat', 'opsig', 'opsyn', 'optag', 'optik', 'optog',
'optur', 'ordal', 'orden', 'ordne', 'ordre', 'organ', 'orgel', 'orgie', 'orgle', 'orgon',
'oribi', 'orion', 'orkan', 'orker', 'orkis', 'orlog', 'orlov', 'ornat', 'osman', 'otium',
'ottar', 'otter', 'ounce', 'outro', 'oveni', 'ovnen', 'paars', 'paaru', 'paffe', 'pakke',
'papir', 'parer', 'paria', 'parti', 'parts', 'passe', 'pause', 'pebet', 'pebne', 'peder',
'peges', 'peget', 'pejse', 'pelse', 'penge', 'pensa', 'perez', 'pests', 'pibes', 'pibet',
'piger', 'pilen', 'piler', 'pilet', 'pilke', 'pimpe', 'pinen', 'piner', 'pines', 'pinup',
'pippi', 'pique', 'pirat', 'pirke', 'pirre', 'pivet', 'pjalt', 'pjank', 'plade', 'plads',
'plage', 'plien', 'pligt', 'plint', 'poden', 'poems', 'poesi', 'polen', 'poret', 'poter',
'potte', 'pound', 'praje', 'prale', 'pratt', 'prior', 'prise', 'prist', 'prygl', 'puder',
'puger', 'pulje', 'pulte', 'pumps', 'punch', 'punkt', 'putte', 'paavo', 'pablo', 'padle',
'paffe', 'pager', 'pakke', 'palet', 'palle', 'panda', 'pande', 'panel', 'panik', 'papio',
'papir', 'parat', 'paris', 'parma', 'paros', 'parre', 'parti', 'party', 'paseo', 'pasha',
'pasta', 'pater', 'patos', 'patti', 'paula', 'pause', 'paven', 'peber', 'pebet', 'pedal',
'pedel', 'pedro', 'peene', 'peger', 'pelin', 'pelle', 'pelse', 'penge', 'penne', 'perle',
'perth', 'pesos', 'pesto', 'peter', 'petra', 'petri', 'petro', 'petzi', 'phlox', 'phong',
'piber', 'picea', 'pigen', 'piler', 'pilet', 'pilke', 'pille', 'pilot', 'pilou', 'pinen',
'pinus', 'pirke', 'pirup', 'pjevs', 'plade', 'plads', 'plaid', 'plane', 'plast', 'pleje',
'plien', 'plire', 'plove', 'poche', 'pocke', 'poden', 'poder', 'podie', 'poesi', 'pokal',
'poker', 'polak', 'polar', 'polce', 'polen', 'polio', 'polka', 'polsk', 'pools', 'poren',
'porer', 'porgy', 'porno', 'porre', 'porte', 'porto', 'posen', 'poten', 'potte', 'pouli',
'pound', 'prajs', 'prima', 'prins', 'print', 'prosa', 'psyco', 'puget', 'pukle', 'pulke',
'pulte', 'punch', 'punkt', 'pusne', 'putte', 'pynte', 'pyton', 'padde', 'padle', 'pagaj',
'pajen', 'pajer', 'pakke', 'palle', 'pampa', 'panda', 'pande', 'panel', 'panik', 'pante',
'papat', 'papil', 'papir', 'pappe', 'parat', 'paria', 'paris', 'parka', 'parre', 'parti',
'party', 'passe', 'pasta', 'pater', 'patio', 'patos', 'patte', 'pauep', 'pauke', 'pause',
'paven', 'peber', 'pedal', 'pedel', 'peele', 'peger', 'pejle', 'pelse', 'penge', 'penis',
'pensa', 'peppe', 'perle', 'peter', 'pette', 'piano', 'pibet', 'pible', 'picot', 'pifte',
'piger', 'piget', 'piker', 'pilar', 'pilke', 'pille', 'pilne', 'pilot', 'pimpe', 'pinde',
'pines', 'pinje', 'pinol', 'pinse', 'pinte', 'pippe', 'pique', 'pirat', 'pirke', 'pirol',
'pirre', 'piske', 'pisse', 'piste', 'pixel', 'pizza', 'pjalt', 'pjank', 'pjask', 'pjece',
'pjevs', 'plade', 'plads', 'plage', 'plask', 'plast', 'plebs', 'pleje', 'pligt', 'pling',
'plint', 'plump', 'podie', 'poesi', 'poger', 'point', 'pokal', 'poker', 'polar', 'poler',
'polet', 'polyp', 'pools', 'porre', 'porto', 'poser', 'poste', 'potte', 'povne', 'pragt',
'praje', 'prale', 'price', 'prima', 'prime', 'prins', 'prior', 'prise', 'probe', 'prop1',
'prosa', 'provo', 'proxy', 'prunk', 'prust', 'pryde', 'prygl', 'psyke', 'pudel', 'pudre',
'pudse', 'puffe', 'puger', 'pukle', 'pulmo', 'pumpe', 'pumps', 'punge', 'punke', 'punkt',
'puppe', 'pures', 'purin', 'purke', 'pusle', 'puste', 'putte', 'putto', 'pvsej', 'pylon',
'pylre', 'pynte', 'pyrit', 'pyton', 'qajar', 'qamar', 'qatar', 'queen', 'quito', 'rabat',
'rabbi', 'racen', 'races', 'racet', 'raden', 'rader', 'radio', 'radon', 'rafte', 'raget',
'rakke', 'rakte', 'rally', 'raman', 'ramel', 'ramen', 'ranch', 'randt', 'raner', 'ranet',
'rankt', 'raskt', 'raten', 'rater', 'ravet', 'rebel', 'reber', 'rebet', 'reden', 'reder',
'regel', 'reger', 'regne', 'regns', 'rejer', 'rejse', 'rejst', 'remus', 'rende', 'rendt',
'renen', 'rense', 'repos', 'resin', 'reven', 'revet', 'riede', 'riget', 'rimen', 'rimer',
'rimes', 'ringe', 'risen', 'riset', 'riten', 'rites', 'ritus', 'rival', 'rives', 'rober',
'roden', 'rodeo', 'rodon', 'rolig', 'rolle', 'roman', 'ronge', 'rosen', 'roses', 'roste',
'rover', 'rovet', 'ruden', 'rudet', 'ruger', 'ruget', 'rumme', 'runde', 'rundt', 'runen',
'rusen', 'ruser', 'ruste', 'ruten', 'rutsj', 'ryger', 'ryges', 'rygge', 'rykke', 'ryste',
'rabat', 'rabba', 'rable', 'racer', 'racet', 'racha', 'racid', 'racks', 'radar', 'raden',
'rader', 'radio', 'radon', 'rafte', 'rager', 'raget', 'raids', 'rajaa', 'rajen', 'rakle',
'rakte', 'rally', 'ralph', 'ramot', 'ramte', 'ramus', 'rance', 'ranch', 'rande', 'randi',
'randt', 'randy', 'raner', 'ranet', 'rankt', 'ranum', 'rapse', 'raser', 'raset', 'rasim',
'rasit', 'raske', 'raskt', 'rasle', 'raspe', 'raten', 'rater', 'ravet', 'ravne', 'reale',
'realt', 'rebar', 'rebec', 'rebel', 'rebet', 'rebus', 'redde', 'reden', 'reder', 'redes',
'redet', 'reelt', 'reese', 'regel', 'regne', 'rehan', 'rehmi', 'rehob', 'rejen', 'rejer',
'rejse', 'rejst', 'rekha', 'rekyl', 'remee', 'remis', 'remix', 'remme', 'remse', 'remus',
'remzi', 'rende', 'rendt', 'renen', 'rener', 'renko', 'rense', 'rente', 'renzi', 'repos',
'resen', 'resha', 'retor', 'retro', 'rette', 'retur', 'reven', 'revet', 'revir', 'revle',
'revne', 'revse', 'reysa', 'rhein', 'rhesa', 'rhine', 'rhone', 'rider', 'ridse', 'riede',
'rigel', 'riger', 'riget', 'rigid', 'rille', 'rimet', 'rimme', 'ringe', 'rioja', 'risen',
'risle', 'riste', 'ritte', 'ritva', 'rival', 'riven', 'river', 'rives', 'robbi', 'robby',
'roben', 'rober', 'robin', 'robot', 'rocky', 'rodeo', 'roede', 'roere', 'rohan', 'rohde',
'rohit', 'rokke', 'rolig', 'rolle', 'rolls', 'roman', 'romeo', 'romer', 'rommy', 'ronin',
'roret', 'rosea', 'rosen', 'roser', 'roset', 'rosin', 'roste', 'rotor', 'rotte', 'rouge',
'rovet', 'royal', 'royce', 'rubel', 'ruben', 'rubin', 'rubus', 'ruden', 'ruder', 'rudme',
'rugen', 'ruger', 'ruget', 'rulle', 'rumba', 'rumex', 'rumpe', 'runen', 'runer', 'runna',
'runni', 'ruren', 'rusen', 'ruser', 'ruske', 'ruten', 'ruter', 'ryaen', 'ryaer', 'rydde',
'ryget', 'rygge', 'rylen', 'ryler', 'rynke', 'rypen', 'ryper', 'ryste', 'rabat', 'rabbi',
'rable', 'racer', 'radar', 'rader', 'radio', 'raffi', 'rafte', 'rager', 'raids', 'rajah',
'rakel', 'raket', 'rakle', 'rakte', 'ralle', 'rally', 'rambo', 'ramel', 'ramen', 'ramle',
'ramme', 'rampe', 'ramts', 'ranch', 'rande', 'rands', 'randt', 'raner', 'ranke', 'rappe',
'rapse', 'raske', 'raskt', 'rasle', 'raspe', 'raste', 'ratio', 'raven', 'raver', 'ravet',
'rayon', 'reale', 'rebab', 'rebel', 'rebus', 'redan', 'reder', 'redte', 'regal', 'regel',
'regne', 'rejfe', 'rejse', 'remis', 'remme', 'remse', 'rende', 'rendt', 'renin', 'rense',
'rente', 'repos', 'retor', 'retro', 'rette', 'retur', 'reven', 'reves', 'revet', 'revir',
'revle', 'revne', 'revse', 'ribbe', 'ridse', 'riede', 'rigel', 'riget', 'rigge', 'rigid',
'rimed', 'rimer', 'rimet', 'rimpe', 'rimte', 'rinde', 'ringe', 'ringo', 'rioja', 'rippe',
'risen', 'riser', 'rishi', 'risle', 'riste', 'riter', 'ritus', 'rival', 'robbe', 'rober',
'robot', 'rocky', 'roden', 'rodeo', 'roder', 'rodet', 'roede', 'rokke', 'rolig', 'rollo',
'roman', 'rombe', 'rondo', 'roote', 'rosen', 'roser', 'roset', 'rosin', 'rotte', 'rotur',
'rouge', 'royal', 'rudel', 'ruden', 'rudet', 'rugby', 'ruget', 'rulam', 'rulle', 'rumle',
'rumme', 'rumpe', 'runde', 'rundt', 'runge', 'rural', 'rurer', 'ruske', 'rusme', 'ruste',
'rusyn', 'rutte', 'rydde', 'ryger', 'ryges', 'rygte', 'rykke', 'rynke', 'ryste', 'rytme',
'safts', 'sagen', 'sagte', 'saken', 'sakse', 'salat', 'salen', 'salig', 'salon', 'salsa',
'salve', 'sambo', 'samle', 'samme', 'sande', 'saner', 'sange', 'sangs', 'sankt', 'saron',
'satin', 'satse', 'satte', 'saver', 'savne', 'scane', 'scene', 'scoop', 'sedes', 'semen',
'sendt', 'senen', 'sener', 'senil', 'serge', 'serum', 'serve', 'sesna', 'sheol', 'shilo',
'shops', 'siden', 'siers', 'sifon', 'sigar', 'siger', 'silas', 'silde', 'siles', 'silet',
'simen', 'simli', 'sippe', 'sirer', 'siret', 'sirts', 'sisal', 'sitre', 'sitte', 'sived',
'sivet', 'sjone', 'sjove', 'sjovs', 'sjovt', 'sjusk', 'skabt', 'skala', 'skalk', 'skare',
'skarn', 'skarp', 'skarv', 'skede', 'skejs', 'skeln', 'skels', 'skete', 'skidt', 'skien',
'skift', 'skilt', 'skimt', 'skind', 'skive', 'skjul', 'skole', 'skose', 'skrab', 'skrap',
'skred', 'skreg', 'skrev', 'skrid', 'skrig', 'skrud', 'skrut', 'skudt', 'skuer', 'skuet',
'skurk', 'skurs', 'skurv', 'skyen', 'skyld', 'slank', 'slapt', 'slave', 'slide', 'slidt',
'sliks', 'sluds', 'sluge', 'slugt', 'slump', 'smagt', 'small', 'smaln', 'smisk', 'smuds',
'smult', 'smurt', 'snage', 'snaps', 'snart', 'snask', 'snert', 'snese', 'snoet', 'snore',
'snude', 'snuen', 'snuet', 'snust', 'snyde', 'snydt', 'soden', 'sofia', 'solde', 'solds',
'solgt', 'solid', 'solur', 'somen', 'sonar', 'sondr', 'soten', 'sover', 'sovet', 'sovse',
'spagt', 'spalt', 'spids', 'spigr', 'spild', 'spion', 'spise', 'spist', 'splid', 'split',
'spole', 'spore', 'spors', 'sport', 'spred', 'sprit', 'sprut', 'spuns', 'spyer', 'spyes',
'spyet', 'stall', 'stang', 'stank', 'start', 'stave', 'stedt', 'stemt', 'stene', 'stevs',
'stien', 'stier', 'stift', 'stile', 'still', 'stime', 'sting', 'stive', 'stjal', 'stola',
'stolt', 'stord', 'store', 'storm', 'stort', 'stovt', 'straf', 'stram', 'stred', 'streg',
'strik', 'strip', 'studs', 'stuen', 'stuer', 'stump', 'stumt', 'stund', 'stupa', 'stuve',
'styrt', 'suget', 'suler', 'sulla', 'summe', 'suppe', 'suser', 'suses', 'suset', 'sussi',
'suste', 'svage', 'svagt', 'svale', 'svang', 'svedt', 'svend', 'svide', 'svien', 'sving',
'svirs', 'sygen', 'synes', 'synet', 'saale', 'sabel', 'sabro', 'sadel', 'sadle', 'saeed',
'saeid', 'saera', 'safir', 'safti', 'sagen', 'sagte', 'saheb', 'sahel', 'sahib', 'sahil',
'sahin', 'sahra', 'sakse', 'salat', 'saldo', 'saleh', 'salem', 'salig', 'salix', 'salme',
'salon', 'salsa', 'salte', 'salto', 'salum', 'salut', 'salve', 'samba', 'samer', 'samet',
'samle', 'samos', 'sande', 'sandi', 'sange', 'sanna', 'sanne', 'sanse', 'sarai', 'saras',
'saren', 'sarin', 'saron', 'sasha', 'satan', 'satin', 'satom', 'satse', 'satte', 'sauce',
'savne', 'saxen', 'scene', 'scoop', 'score', 'scott', 'sedan', 'sedat', 'sedum', 'seere',
'seest', 'segne', 'seier', 'seija', 'seine', 'seire', 'sejle', 'sekel', 'selen', 'seler',
'selma', 'senat', 'senay', 'senen', 'sener', 'senge', 'senol', 'senor', 'seoul', 'serge',
'serie', 'serum', 'serve', 'sesam', 'sesse', 'sevre', 'seyed', 'shafi', 'shams', 'shawn',
'sheen', 'sheik', 'shila', 'shilo', 'shots', 'shree', 'siden', 'sidon', 'sidse', 'sidst',
'siena', 'sigen', 'siges', 'sigma', 'signi', 'signy', 'sigte', 'sikem', 'sikre', 'silde',
'siler', 'simen', 'simra', 'sinai', 'sinaj', 'sinem', 'sipan', 'sirup', 'siska', 'sisle',
'sissa', 'sitar', 'sivet', 'sjove', 'sjusk', 'skabe', 'skabt', 'skade', 'skakt', 'skala',
'skalk', 'skals', 'skare', 'skarn', 'skarv', 'skast', 'skeen', 'skeer', 'skele', 'skema',
'skidt', 'skift', 'skind', 'skive', 'skjul', 'skoda', 'skoen', 'skole', 'skose', 'skrap',
'skrat', 'skred', 'skreg', 'skrev', 'skrig', 'skrin', 'skrog', 'skrot', 'skrub', 'skrud',
'skude', 'skuet', 'skuli', 'skure', 'skyen', 'skyer', 'skyld', 'skyum', 'slags', 'slang',
'slank', 'slave', 'slemt', 'slesk', 'sleve', 'slice', 'slide', 'slids', 'slige', 'slisk',
'slugt', 'smage', 'smagt', 'small', 'smalt', 'smart', 'smash', 'smask', 'smede', 'smide',
'smile', 'smule', 'smurt', 'snack', 'snaps', 'snare', 'snart', 'snavs', 'sneen', 'sneet',
'snegl', 'snert', 'snese', 'sneum', 'snige', 'snild', 'snilt', 'snoet', 'snoge', 'snold',
'snore', 'snude', 'snuen', 'snuer', 'snuet', 'snusk', 'snust', 'sober', 'sobhi', 'sobhy',
'sobia', 'sobre', 'soche', 'soden', 'soder', 'sofia', 'sofus', 'sogne', 'solde', 'solen',
'solgt', 'solid', 'solur', 'solvi', 'somme', 'sonar', 'sonde', 'sonet', 'sonya', 'sophi',
'sorte', 'souad', 'sover', 'sovet', 'space', 'spade', 'spaer', 'spagt', 'spand', 'spare',
'spejl', 'spids', 'spild', 'spind', 'spise', 'spist', 'splat', 'splid', 'spole', 'spore',
'sport', 'spray', 'spree', 'sprit', 'sprog', 'spurv', 'spyet', 'stabe', 'staby', 'stade',
'stads', 'stage', 'stald', 'stand', 'stang', 'stank', 'stars', 'start', 'stave', 'steak',
'steel', 'stege', 'stegt', 'stejl', 'stele', 'stene', 'steno', 'steph', 'steve', 'stian',
'stien', 'stier', 'stift', 'stile', 'stilk', 'still', 'stime', 'sting', 'stisa', 'stive',
'stivr', 'stjal', 'stoke', 'stola', 'stole', 'stolt', 'stone', 'store', 'storm', 'stort',
'stout', 'straf', 'stram', 'stred', 'streg', 'strid', 'strik', 'strop', 'stryg', 'studs',
'stuen', 'stuer', 'stumt', 'stunt', 'stupa', 'sture', 'stuve', 'style', 'styre', 'styrt',
'suger', 'suget', 'sugra', 'suite', 'sukre', 'sulet', 'sulky', 'summa', 'sunde', 'super',
'susan', 'suser', 'suset', 'sushi', 'suste', 'sutte', 'suzan', 'svage', 'svale', 'svamp',
'svana', 'svane', 'svang', 'svedt', 'svend', 'sveva', 'svier', 'sviet', 'svigt', 'sving',
'svire', 'svirp', 'svovl', 'sweet', 'sykar', 'sylte', 'syner', 'synes', 'synet', 'syren',
'syrer', 'syver', 'syvti', 'sabel', 'sable', 'saddu', 'sadhu', 'sadle', 'safir', 'safte',
'sagde', 'sager', 'sagte', 'sahib', 'saiga', 'salat', 'salen', 'salep', 'salig', 'salme',
'salol', 'salon', 'salpe', 'salsa', 'salte', 'salto', 'salus', 'salut', 'salve', 'sambo',
'samle', 'samme', 'sande', 'sandt', 'sanke', 'sanks', 'sankt', 'sanse', 'sarge', 'sarte',
'satin', 'satse', 'satte', 'satyr', 'sauce', 'sauna', 'savne', 'saxen', 'scane', 'scene',
'scoop', 'score', 'scrap', 'scuba', 'sedan', 'seede', 'segne', 'sejle', 'sejre', 'sekel',
'seler', 'selve', 'semit', 'senat', 'sende', 'senil', 'sepia', 'seraf', 'seran', 'seren',
'serge', 'serie', 'serif', 'serum', 'servo', 'setra', 'shang', 'shave', 'sheik', 'shift',
'shtml', 'shunt', 'siden', 'sider', 'sidst', 'sifon', 'sigel', 'siger', 'siges', 'sigte',
'sikar', 'sikre', 'silas', 'silde', 'silen', 'siler', 'siles', 'silet', 'silke', 'silur',
'simba', 'simre', 'simse', 'sinds', 'sines', 'sinke', 'sioux', 'sippe', 'sirat', 'siret',
'sirts', 'sirup', 'sisal', 'sitka', 'sitre', 'sjako', 'sjask', 'sjofl', 'sjove', 'sjovt',
'sjuft', 'sjusk', 'skabe', 'skabt', 'skade', 'skage', 'skakt', 'skala', 'skalk', 'skalp',
'skank', 'skare', 'skarn', 'skarp', 'skarv', 'skede', 'skeen', 'skeer', 'skeje', 'skejs',
'skele', 'skema', 'skete', 'skibe', 'skide', 'skidt', 'skift', 'skilt', 'skimt', 'skind',
'skink', 'skive', 'skjul', 'skogr', 'skole', 'skose', 'skove', 'skovl', 'skrab', 'skral',
'skram', 'skrap', 'skrat', 'skred', 'skrev', 'skrig', 'skrin', 'skriv', 'skrog', 'skrot',
'skrub', 'skrud', 'skrue', 'skude', 'skues', 'skuld', 'skunk', 'skure', 'skurk', 'skvat',
'skyde', 'skyen', 'skyer', 'skyet', 'skyld', 'slags', 'slang', 'slank', 'slant', 'slave',
'slemt', 'slesk', 'sleve', 'slibe', 'slide', 'slidt', 'slien', 'slige', 'sligt', 'slime',
'slips', 'slire', 'slisk', 'slogi', 'slude', 'sluge', 'slugt', 'slump', 'slurk', 'sluse',
'slyng', 'smage', 'smart', 'smede', 'smelt', 'smide', 'smile', 'smisk', 'smovs', 'smuds',
'smukt', 'smuld', 'smule', 'snack', 'snage', 'snaps', 'snare', 'snart', 'snask', 'snavs',
'snegl', 'snert', 'snige', 'snild', 'snive', 'snode', 'snold', 'snore', 'snude', 'snuse',
'snust', 'snyde', 'sober', 'soire', 'solde', 'solgt', 'solid', 'solis', 'solna', 'solur',
'sonar', 'sonde', 'sonet', 'sonor', 'soppe', 'sorte', 'soven', 'sover', 'soves', 'sovet',
'spacy', 'spaer', 'spagt', 'spahi', 'spand', 'spang', 'spank', 'spare', 'spark', 'speed',
'spelt', 'sperm', 'spice', 'spids', 'spild', 'spile', 'spion', 'tabel', 'tabet', 'tagen',
'tager', 'taget', 'talar', 'talen', 'taler', 'talon', 'tampe', 'tange', 'tanke', 'tapen',
'tapet', 'tappe', 'tatto', 'tavet', 'tavle', 'tavse', 'tavst', 'teede', 'tegns', 'tekst',
'teori', 'terne', 'terpe', 'teser', 'tesis', 'teten', 'texas', 'tiden', 'tiele', 'tiere',
'tilse', 'timed', 'times', 'timet', 'tinde', 'tirre', 'titan', 'titel', 'title', 'tjald',
'tjent', 'tobak', 'toede', 'tofod', 'toget', 'toine', 'toled', 'tolke', 'tonen', 'toner',
'tonga', 'toppe', 'torve', 'total', 'tovet', 'trang', 'trave', 'travl', 'travs', 'trawl',
'trend', 'trevl', 'trist', 'trods', 'troen', 'troet', 'troms', 'truer', 'truts', 'trygt',
'tudes', 'tudet', 'tudor', 'tuget', 'tulsa', 'tumle', 'tunge', 'tupac', 'turde', 'turen',
'turet', 'tusch', 'tydet', 'tygge', 'tykke', 'tylle', 'tynge', 'typen', 'tyren', 'tyret',
'tyste', 'tabel', 'taber', 'tabet', 'tabia', 'tabor', 'tager', 'taget', 'tajco', 'takst',
'talar', 'talen', 'taler', 'talin', 'talte', 'tamar', 'tamas', 'tamra', 'tanga', 'tange',
'tango', 'tanke', 'tanks', 'tanne', 'tanni', 'tante', 'tanya', 'tapas', 'tapir', 'tarif',
'tarme', 'tarot', 'tasha', 'taske', 'taste', 'tatar', 'tatra', 'tavse', 'tebar', 'tebod',
'teddi', 'teddy', 'tedug', 'tegne', 'tehus', 'teint', 'teist', 'tekma', 'tekoa', 'tekop',
'tekst', 'telma', 'telse', 'telte', 'tempo', 'tenen', 'tenor', 'tents', 'teori', 'terne',
'terry', 'terts', 'tesen', 'teser', 'teses', 'teske', 'teste', 'teten', 'texas', 'thanh',
'theis', 'theta', 'thiou', 'thise', 'thoai', 'thord', 'thore', 'thuja', 'thule', 'thure',
'thyra', 'thyre', 'tiara', 'tider', 'tidza', 'tiebr', 'tiera', 'tiere', 'tiger', 'tiklu',
'tikva', 'tilia', 'tilje', 'timen', 'timer', 'timet', 'timmi', 'timmo', 'timmy', 'timon',
'tinde', 'tinus', 'tirre', 'tirza', 'tiske', 'tital', 'titan', 'titel', 'titte', 'tjele',
'tjene', 'tjese', 'toast', 'tobak', 'toddy', 'toere', 'tofte', 'toget', 'tokyo', 'tolga',
'tolke', 'tomas', 'tomat', 'tonen', 'toner', 'tonet', 'topas', 'toreo', 'torne', 'torsk',
'torve', 'tosca', 'tosse', 'total', 'totem', 'touch', 'toula', 'toupe', 'tovet', 'tracy',
'tragt', 'train', 'trane', 'trang', 'trave', 'trawl', 'treer', 'trend', 'treti', 'trevl',
'trick', 'trige', 'trina', 'trind', 'trine', 'trist', 'trods', 'troen', 'trold', 'trone',
'truer', 'truet', 'trumf', 'trung', 'tuben', 'tuder', 'tudet', 'tudse', 'tugce', 'tugte',
'tukan', 'tulle', 'tuner', 'tunet', 'tunge', 'turen', 'turne', 'tusse', 'tutor', 'tuyet',
'tvang', 'tvist', 'tvolm', 'tweed', 'tweit', 'tyder', 'tydet', 'tyles', 'tylle', 'tynde',
'tyndt', 'typer', 'typha', 'tyren', 'tyrer', 'tyros', 'tyske', 'tabby', 'tabel', 'taber',
'tabte', 'tackl', 'tacos', 'taget', 'tagne', 'takke', 'takst', 'takts', 'talar', 'taler',
'talio', 'talje', 'talmi', 'talon', 'tamil', 'tande', 'tands', 'tanga', 'tango', 'tanis',
'tanke', 'tante', 'tapet', 'tapir', 'tappe', 'tapre', 'tarer', 'tarif', 'tarok', 'taske',
'taste', 'tater', 'tavle', 'tavst', 'tegne', 'teint', 'tekno', 'tekop', 'tekst', 'telex',
'telte', 'tempi', 'tempo', 'teori', 'terme', 'terne', 'terpe', 'terto', 'terts', 'teser',
'tesis', 'teske', 'teste', 'tetni', 'tetra', 'tevje', 'texas', 'thidi', 'tiara', 'tiede',
'tiere', 'tiest', 'tiger', 'tigge', 'tilde', 'tilse', 'timer', 'times', 'tinde', 'tinte',
'tippe', 'tirre', 'tiske', 'tisse', 'titan', 'titel', 'titte', 'tjald', 'tjans', 'tjavs',
'tjene', 'tjent', 'tobak', 'tobis', 'toddy', 'tolke', 'tomat', 'tomle', 'tommy', 'tonen',
'toner', 'tonet', 'tonic', 'topas', 'toppe', 'toque', 'torsk', 'torso', 'torve', 'tosse',
'total', 'totem', 'totne', 'touch', 'tragt', 'trake', 'tramp', 'trang', 'trave', 'travl',
'treer', 'trema', 'trend', 'treti', 'trevl', 'trial', 'trick', 'trind', 'trine', 'trist',
'trivi', 'trods', 'trold', 'trone', 'trope', 'truck', 'truet', 'trumf', 'trunk', 'trust',
'tryne', 'tsuba', 'tudse', 'tuede', 'tugte', 'tulle', 'tumle', 'tumor', 'tumpe', 'tunge',
'tungt', 'turbo', 'turde', 'tusch', 'tuske', 'tusse', 'tutti', 'tvang', 'tvebo', 'tvege',
'tvist', 'tvivl', 'tvlyd', 'twill', 'twist', 'tyfon', 'tykke', 'tykne', 'tylle', 'tynde',
'tyndt', 'tynge', 'tyran', 'tyrol', 'tyske', 'tysse', 'uanet', 'uddel', 'udlad', 'udlet',
'udrud', 'udser', 'udset', 'udsyn', 'udtog', 'udvis', 'ufine', 'ufrie', 'uglet', 'uklar',
'uklog', 'ulden', 'unden', 'ungen', 'urban', 'uredo', 'urene', 'urent', 'uroen', 'uroet',
'urter', 'usagt', 'usand', 'usher', 'uskik', 'ussel', 'uting', 'utryg', 'utryk', 'utugt',
'utzon', 'ublid', 'udbud', 'udelt', 'udgav', 'udgik', 'udkig', 'udser', 'udtog', 'udtur',
'udvej', 'uenig', 'ufine', 'ufoen', 'ufoer', 'ufred', 'ufrie', 'ugift', 'uglen', 'ugler',
'uglet', 'uheld', 'uhyre', 'uklar', 'uklog', 'ukogt', 'uland', 'ulave', 'ulden', 'uldne',
'uldum', 'ulige', 'uligt', 'ulken', 'ulmer', 'ulmet', 'ulmus', 'ulrik', 'ulven', 'umage',
'umbra', 'umiaq', 'under', 'undre', 'undte', 'ungar', 'ungen', 'unger', 'ungso', 'unikt',
'union', 'unode', 'urdel', 'urede', 'uredt', 'urene', 'urent', 'urlev', 'urlod', 'urnen',
'urner', 'uroen', 'uroer', 'urten', 'urter', 'urtid', 'usagt', 'usama', 'usand', 'usete',
'usket', 'uskik', 'ussel', 'usund', 'uting', 'utopi', 'utugt', 'uvejr', 'uvike', 'uvorn',
'uzair', 'uanet', 'ublid', 'ublus', 'udbad', 'udbed', 'udbud', 'udbyd', 'udelt', 'udfri',
'udgav', 'udgyd', 'udhus', 'udjog', 'udkig', 'udkog', 'udlet', 'udpib', 'udrul', 'udsat',
'udsig', 'udson', 'udspy', 'udsug', 'udsyn', 'udtag', 'udtog', 'udtur', 'udvej', 'udvis',
'uegal', 'uenig', 'ufiks', 'ufine', 'ufred', 'ugift', 'uglad', 'uglet', 'uheld', 'uhyre',
'uklar', 'ulave', 'ulden', 'ulige', 'ulyst', 'umage', 'umami', 'umbra', 'umiak', 'umiaq',
'umpir', 'under', 'undre', 'unger', 'unika', 'union', 'unode', 'urban', 'urdel', 'uredt',
'urent', 'urhav', 'urner', 'uroen', 'uroer', 'urrem', 'urter', 'usagt', 'usand', 'usete',
'uskik', 'ussel', 'usund', 'utide', 'uting', 'utopi', 'utrum', 'utugt', 'utysk', 'uvane',
'uvant', 'uvejr', 'uvorn', 'vabel', 'vable', 'vader', 'vadet', 'vajer', 'vajet', 'valen',
'valgt', 'valks', 'valle', 'valse', 'vamle', 'vandt', 'vanen', 'vante', 'varen', 'varer',
'varet', 'varme', 'vates', 'veere', 'vejen', 'vejes', 'vejet', 'vemod', 'vendt', 'venne',
'vente', 'venus', 'verne', 'verst', 'vetoe', 'vides', 'vidne', 'viger', 'vikna', 'vilde',
'vildt', 'vilet', 'villa', 'ville', 'vinde', 'vinen', 'viren', 'virke', 'visaf', 'vises',
'visit', 'visne', 'vodka', 'vogte', 'voice', 'voila', 'voile', 'voldt', 'vomme', 'vorde',
'vover', 'vovet', 'vrage', 'vrede', 'vredt', 'vride', 'vrist', 'vable', 'vadim', 'vaino',
'vajer', 'vajet', 'vakse', 'vakst', 'valby', 'valen', 'valgt', 'valne', 'valon', 'vanda',
'vandt', 'vanen', 'vange', 'vania', 'vanja', 'vante', 'varde', 'varen', 'varer', 'varet',
'varig', 'varme', 'varna', 'varny', 'vasen', 'vasna', 'vedde', 'veijo', 'vejen', 'vejer',
'vejle', 'vejre', 'vemod', 'vende', 'venen', 'vener', 'vente', 'venue', 'venus', 'verdi',
'verne', 'verup', 'vesta', 'veste', 'vesty', 'vesuv', 'viben', 'viber', 'vicha', 'vicia',
'vidde', 'viden', 'video', 'vidst', 'viede', 'vifte', 'vigen', 'viger', 'viggo', 'vilde',
'vildt', 'vilia', 'vilja', 'vilje', 'villa', 'ville', 'vilna', 'vilni', 'vinca', 'vinen',
'vinge', 'vinja', 'vinka', 'vinum', 'viola', 'virak', 'visby', 'viser', 'visir', 'visne',
'visse', 'viste', 'visti', 'vitis', 'viven', 'vlora', 'vodka', 'vogne', 'vojel', 'vokal',
'volde', 'volga', 'volvo', 'votiv', 'vover', 'vrang', 'vrede', 'vriet', 'vrist', 'vrold',
'vugge', 'vabel', 'vable', 'vadis', 'vager', 'vajer', 'vajet', 'vakle', 'vakre', 'vakse',
'vakst', 'valen', 'valet', 'valgt', 'valid', 'valle', 'valne', 'valse', 'vamse', 'vande',
'vaner', 'vanke', 'vanry', 'vante', 'vappe', 'varan', 'varde', 'varer', 'varig', 'varme',
'varpe', 'vasal', 'vaske', 'vedel', 'veget', 'vejen', 'vejer', 'vejle', 'velan', 'velar',
'vemod', 'venal', 'vende', 'vente', 'venus', 'verfe', 'verpe', 'verve', 'vetoe', 'vicer',
'vidde', 'viden', 'video', 'vides', 'vidje', 'vidne', 'vidst', 'viere', 'vifte', 'vikar',
'vikle', 'vilde', 'vildt', 'vilje', 'villa', 'ville', 'vimse', 'vinca', 'vinde', 'vindu',
'vinke', 'vinyl', 'viola', 'vippe', 'virak', 'viras', 'viril', 'virke', 'virre', 'virus',
'visas', 'visen', 'viser', 'visir', 'visit', 'visne', 'visse', 'visum', 'vital', 'vlies',
'vodka', 'vogne', 'vogte', 'voila', 'vokal', 'vokse', 'volde', 'vorde', 'vorte', 'votas',
'votum', 'voven', 'vovet', 'vovse', 'vrage', 'vrang', 'vrede', 'vredt', 'vugge', 'vulst',
'vunde', 'vuppe', 'vupti', 'wales', 'wasim', 'wayne', 'werra', 'wigan', 'wigga', 'wiggo',
'wikki', 'wirer', 'woods', 'weber', 'weser', 'xania', 'xonne', 'xthin', 'yaren', 'ydrer',
'ymper', 'yndes', 'yndet', 'yngre', 'ynken', 'ypper', 'yppes', 'yppet', 'yrket', 'yacht',
'yanne', 'yavuz', 'yazan', 'ydede', 'yding', 'ydret', 'yeats', 'yemen', 'yenne', 'yhaud',
'ynden', 'yndig', 'yngst', 'ynker', 'ynket', 'yonne', 'ystad', 'ytret', 'yucca', 'yvere',
'yacht', 'yatzy', 'ydede', 'yding', 'ydmyg', 'ymter', 'ynder', 'yndet', 'yndig', 'yngel',
'yngle', 'yngre', 'ynkes', 'ypper', 'yppig', 'yting', 'ytrer', 'ytret', 'zefyr', 'zobel',
'zonen', 'zabet', 'zakaa', 'zaman', 'zaren', 'zarer', 'zarie', 'zarit', 'zeena', 'zehra',
'zenon', 'zenta', 'zichi', 'zimon', 'zinar', 'zindy', 'zlata', 'zuhal', 'zuhra', 'zuhur',
'zappa', 'zappe', 'zarer', 'zefyr', 'zelot', 'zenit', 'zinke', 'zobel', 'zoome', 'aauug',
"abb's", "abc's", 'adict', "aeg's", "agf's", "aim's", "anc's", "aof's", 'asean', 'aages',
'aagot', 'aakes', 'aaron', 'aasas', 'aases', 'abbas', 'abbie', 'abdel', 'abdul', 'abell',
'abels', 'abild', 'achim', 'acton', 'adams', 'adane', 'addas', 'addie', 'addys', 'adeas',
'adela', 'adele', 'adens', 'adias', 'adies', 'adils', 'adina', 'adine', 'adolf', 'adser',
'adwan', 'adèle', 'agate', 'agdas', 'aggas', 'agges', 'aggis', 'agnar', 'agnas', 'agner',
'agnes', 'agnys', 'agnès', 'ahmed', 'aicha', 'aidas', "aies'", 'aikos', 'ailas', 'ailis',
'aimas', 'aimis', 'aimys', 'aimèe', 'ainas', 'ainos', 'aisha', "ajes'", 'akims', 'akita',
'aksel', 'akton', 'alaia', 'alain', 'alans', 'alban', 'albas', 'albin', 'aldos', 'alecs',
'aleia', 'aleks', 'aleta', 'alett', "alex'", 'alexa', 'alfas', 'algea', 'alger', 'algot',
'algys', 'alias', 'alice', 'alida', 'alina', 'aline', "alis'", 'alisa', 'alise', 'alita',
"aliz'", 'allah', 'allan', 'allen', 'aller', 'allie', 'allis', 'allys', 'almar', 'almas',
'almer', 'alois', 'alona', 'alpha', 'alvar', 'alvas', 'alver', 'alvin', 'amand', 'amdis',
'amina', 'amine', 'amira', 'amola', 'amund', 'anaya', 'ancia', 'andis', 'andre', 'andry',
'andré', 'andys', 'anete', 'anett', 'angel', 'angul', 'angus', 'anias', 'anica', 'anick',
'anies', 'aniet', 'anika', 'aniki', 'anina', 'anine', 'anisa', 'anise', 'anita', 'anjas',
'ankas', 'anker', 'ankes', 'ankie', 'anlis', 'annan', 'annas', 'annes', 'annet', 'annia',
'annie', 'annik', 'annis', 'annli', 'annys', 'anouk', 'anses', 'antes', 'antia', 'antje',
'anton', 'antía', 'anyas', 'anées', 'apple', 'aquas', 'arams', 'arent', 'ariks', 'arild',
'arina', 'arise', 'arken', 'arlas', 'arlys', 'armin', 'arnas', 'arndt', 'arnes', 'arnis',
'arnos', 'arnth', 'arnts', 'arons', 'artur', 'arved', 'arvid', 'arvin', 'asbæk', 'asdis',
'asgar', 'asger', 'asien', 'asjas', 'asker', 'askes', 'askil', 'aslak', 'aslas', 'asløg',
'asmus', 'asras', 'asser', 'assia', 'assis', 'astas', 'astor', 'athen', 'atles', 'atlis',
"atos'", 'attes', 'audun', 'augos', 'auken', 'aukje', 'avlum', 'axels', 'aylil', 'aymas',
'aynas', 'ayoes', 'ayses', "bkh's", 'baard', 'bagga', 'bagge', 'bahne', 'bakis', 'banes',
'barba', 'barny', 'barry', 'barsø', 'barts', 'beata', 'beate', 'bebes', 'becca', 'becky',
'bella', 'bells', 'benda', 'bende', 'bendt', 'bendy', 'benes', 'bengt', 'benin', 'benja',
'benna', 'benne', 'benni', 'benno', 'benns', 'benny', 'benta', 'bente', 'benth', 'bents',
'bentt', 'berds', 'berit', 'berna', 'bernd', 'berni', 'berno', 'bernt', 'berny', 'berry',
'berta', 'berte', 'berto', 'berts', 'beryl', "bess'", 'beths', 'betje', 'betri', 'betsy',
'bette', 'betts', 'betty', 'betzy', 'beyer', 'bibas', 'bibba', 'bibbi', 'bibis', 'biddy',
'bilka', 'bille', 'bills', 'billy', 'binas', 'bines', 'bings', 'binie', 'birde', 'birge',
'birit', 'birka', 'birks', 'birla', 'birna', 'birta', 'birte', 'bitja', 'bitta', 'bjork',
'björn', 'bjørg', 'bjørk', 'bjørn', 'blair', "blas'", 'blias', 'bobbi', 'bobby', 'bodes',
'bodil', 'bodos', 'boels', 'bogøs', 'bohrs', 'boies', 'bojes', 'bonde', 'bondo', 'bones',
'bonna', 'bonne', 'bonno', 'bonny', 'boris', 'boyds', 'boyes', 'brahe', 'brams', 'brede',
'brett', 'brian', 'brina', 'brion', 'brisa', 'brita', 'brith', 'brits', 'britt', 'brors',
'bruce', 'bruno', 'bruun', 'bruus', 'bryan', 'bryde', 'bugge', 'buris', 'burma', 'bushs',
'buurs', 'byrge', 'bågøs', 'bøjes', 'børge', 'børre', 'bülow', 'c-fil', "ceus'", "cia's",
'caias', 'cajas', 'cajus', 'calla', 'calle', 'camma', 'camre', 'canas', 'canja', 'canna',
'caria', 'carin', 'caris', 'carit', 'carla', 'carli', 'carlo', 'carls', 'carly', 'carna',
'carol', 'cates', 'cathe', 'cathy', 'catia', 'catja', 'catos', 'cayas', 'cecil', 'celia',
'celie', 'cendy', 'centa', 'chano', 'cheri', 'chias', 'chico', 'chiko', 'chile', 'chili',
'chloe', 'chres', 'chris', 'ciano', 'cilas', 'cilia', 'cilie', 'cilla', 'cille', 'cimmi',
'cinda', 'cindi', 'cindy', 'cinna', 'cinne', 'ciras', 'cisse', 'cissy', 'citas', 'citha',
'claes', 'clara', 'clare', 'clari', 'clark', "clas'", 'claus', 'clavs', 'cleas', 'cleos',
'cliff', 'clint', 'clive', 'cloes', 'clyde', 'cocos', 'codan', 'colin', 'congo', 'conja',
'conni', 'conny', 'coras', 'cordt', 'corna', 'corts', 'corty', "cris'", 'cubas', 'cunos',
'curds', 'curts', 'cyril', 'cæsar', 'd-dur', "dbu's", "ddr's", "dgu's", "dkp's", 'dkuug',
"dsb's", "dsl's", "dtu's", 'dacia', 'daens', 'dafne', 'daghs', 'dagny', 'dahls', 'daimi',
'daisi', 'daisy', 'dalai', 'dalby', 'dalum', 'danas', 'dania', 'danis', 'danja', 'danna',
'danni', 'danns', 'danny', 'dante', 'danys', 'dargo', 'dario', 'daves', 'david', 'davie',
'davys', 'dawns', 'deans', 'delia', 'denas', 'denia', 'denis', 'deniz', 'denja', 'denni',
'denny', 'derek', 'deres', 'derri', 'derry', 'devas', 'devin', 'diana', 'diane', 'dians',
'dichs', 'dicks', 'dicky', 'dicte', 'didas', 'didda', 'didde', 'diddi', 'didos', 'diego',
'dikte', 'dimys', 'dinah', 'dinas', 'dines', 'dinna', 'dinne', 'dinny', 'dinos', 'diona',
'dions', 'dirch', 'dirks', 'disas', 'ditta', 'ditte', "ditz'", 'divus', 'dodos', 'dolly',
'donna', 'donni', 'donny', 'doras', 'dorde', 'doria', 'doris', 'dorit', 'dorte', 'dotta',
'doyle', 'dreas', 'drejø', "dres'", 'drevs', 'drine', 'drude', 'druna', 'dubai', 'dunia',
'dunja', 'durup', 'dybæk', 'dylan', 'dynes', "elg's", "epo's", "esa's", 'earls', 'ebbas',
'ebbes', 'ebbis', 'ebers', 'eddas', 'eddis', 'eddys', 'edele', 'edels', 'edgar', 'edita',
'edith', 'edits', 'edlas', 'edlef', 'edles', 'edlys', 'edmas', 'edmée', 'ednas', 'eduas',
'edvia', 'edvin', 'edwin', 'effie', 'egans', 'egert', 'egild', 'egill', 'egils', 'egina',
'egons', 'egund', 'eguns', 'ehler', 'eides', 'eigil', 'eikes', 'eilas', 'eilef', 'eiler',
'eilev', 'eilif', 'einar', 'einas', 'einer', 'einos', 'eirik', 'eisas', 'eitel', 'eivin',
'eivor', 'ejbys', 'ejgil', 'ejlar', 'ejlas', 'ejlef', 'ejler', 'ejlev', 'ejlif', 'ejnar',
'ejnas', 'ejner', 'ejnos', 'ejolf', 'ejsas', 'ejvin', 'elafs', 'elans', 'elavs', 'elefs',
'elena', 'elene', 'eleni', 'elert', 'eleta', 'elfis', 'elgar', 'elgas', 'elian', 'elias',
'elice', 'elida', 'elies', 'elifs', 'elina', 'eline', 'elins', 'eliot', 'elisa', 'elise',
'elita', 'elith', 'elits', 'elius', 'eliza', 'elkas', 'elkes', 'ellas', 'ellen', 'elles',
'ellie', 'ellis', 'ellys', 'elmar', 'elmas', 'elmer', 'elmos', 'elmys', 'elnas', 'elnys',
'elofs', 'elons', 'elsas', 'elses', 'elsie', 'elton', 'elufs', 'elvar', 'elvas', 'elver',
'elvin', 'elvis', 'elwin', 'embla', 'emeli', 'emely', 'emiel', 'emile', 'emili', 'emils',
'emily', 'emmas', 'emmik', 'emmys', "emus'", 'enids', 'enjas', 'ennos', 'enoch', 'enoks',
'enver', 'enyas', 'enzos', 'erena', 'erene', 'erias', 'erica', 'erich', 'erick', 'erico',
'erics', 'erika', 'eriko', 'eriks', 'erins', 'erita', 'erkki', 'erlan', 'erlas', 'erlin',
'erlys', 'ernas', 'ernis', 'ernos', 'ernst', 'erons', 'errit', 'errol', 'ervin', 'erwin',
'esben', 'esger', 'esges', 'eskes', 'eskil', 'espen', 'esper', 'esrum', 'essex', 'estas',
'ester', 'estha', 'etels', 'ethan', 'ethel', 'ethla', 'ethly', 'etlar', 'etlas', 'etlys',
'ettas', 'ettie', 'ettys', 'eugen', 'evald', 'evans', 'evely', 'evens', 'evert', 'evind',
'evins', 'evita', 'ewald', 'ewans', 'ewert', 'excel', 'eylef', 'eylev', 'eylif', 'eyolf',
'eyvin', 'fabio', 'faith', 'fakse', 'falck', 'falka', 'falke', 'falks', 'fanny', 'fanøs',
'farah', 'farum', 'farup', 'fejøs', 'felia', 'felix', 'femøs', 'fenja', 'ferry', 'fijis',
'filip', 'filsø', 'finds', 'finis', 'finni', 'finns', 'fiona', 'fleur', 'flora', 'fodor',
'folke', 'frank', 'frans', 'franz', 'freda', 'frede', 'fredi', 'freds', 'fredy', 'freja',
'frejs', 'freud', 'freya', 'freys', 'fribo', 'frida', 'fride', 'frigg', 'friis', 'frilo',
'frits', 'fritz', 'frode', 'fylla', 'fänge', 'føtex', "gnu's", 'gulch', 'gabis', 'gabon',
'gabys', 'gaias', 'gaiga', 'gajas', 'ganja', 'garys', 'gaudi', 'gaute', 'gavin', 'gayas',
'geert', 'geira', 'geirs', 'gejrs', 'gelas', 'gemma', 'genas', 'genny', 'genos', 'georg',
'geran', 'gerda', 'gerds', 'gerdt', 'gerly', 'gerry', 'gerta', 'gerth', 'gerti', 'gerts',
'geske', 'getes', 'gethe', 'ghana', 'ghita', 'gians', 'gidas', 'gidda', 'gigis', 'gilas',
'gilda', 'gilla', 'ginas', 'gines', 'ginia', 'ginie', 'ginna', 'ginne', 'ginos', 'gisas',
'gisla', 'gisle', 'gitas', 'githa', 'githe', 'giths', 'gitta', 'gitte', 'gitts', 'glenn',
'glens', 'gleve', 'godik', 'gomme', 'gores', 'gorms', 'grace', 'gregs', 'greif', 'grejs',
'grenå', 'greta', 'grete', 'greve', 'griet', 'grith', 'grits', 'gritt', 'groas', 'grove',
'gudda', 'gudik', 'guido', 'gulla', 'gulli', 'gulls', 'gumme', 'gunda', 'gunde', 'gunna',
'gunne', 'gunni', 'gunns', 'gunos', 'gunta', 'gunva', 'guris', 'gurli', 'gurly', 'gwens',
'gydas', 'gylla', 'gynna', 'gyrit', 'gytas', 'gytha', 'gythe', 'gytta', 'gytte', 'göran',
'gösta', "götz'", "gøtz'", 'hagen', 'haggi', 'haiti', 'hajos', 'hakki', 'hakon', 'halla',
'hamid', 'hanna', 'hanne', 'hanni', 'hanno', 'hanny', "hans'", 'hansa', 'harda', 'hardy',
'harly', 'harri', 'harro', 'harry', 'hasan', 'hasel', 'hasle', 'hasse', 'hassi', 'hauge',
'hazel', 'hebes', 'hedas', 'hedda', 'heddi', 'heddy', 'hedis', 'hedys', 'hegen', 'hegns',
'heide', 'heidi', 'heidl', 'heika', 'heike', 'heiko', 'heile', 'heina', 'heine', 'heini',
'heino', 'heins', 'heinz', 'heise', 'hejdi', 'hejne', 'helas', 'helda', 'helen', 'helga',
'helge', 'helgi', 'helgo', 'helia', 'hella', 'helle', 'helma', 'henna', 'henni', 'henny',
'henri', 'henry', 'heras', 'heris', 'herla', 'herle', 'herma', 'herta', 'hilda', 'hilde',
'hilma', 'hinna', 'hjarn', 'hlifs', 'hobro', 'hoder', 'holds', 'holga', 'holly', 'holme',
'holms', 'holte', 'honey', 'hopes', 'horst', 'hroar', 'hrolf', 'hughs', 'hugin', 'hugis',
'hugos', 'hulda', 'husum', 'hyben', 'hygum', 'hågen', 'håkan', 'håkon', 'hårby', 'høghs',
'høgne', 'højer', 'hørby', 'hørup', "ibm's", 'ianes', 'ianis', 'ianne', 'ibbes', 'ibens',
'ibina', 'idaho', 'idunn', 'iduns', 'igors', 'ikast', 'ikeas', 'ilana', 'ilena', 'ilene',
'ilian', 'ilias', 'ilina', 'illas', 'illya', 'ilona', 'ilone', 'ilsas', 'ilses', 'ilyas',
'imran', 'india', 'ineke', "ines'", "inez'", 'ingas', 'inger', 'inges', 'ingis', 'ingos',
'ingse', 'ingun', 'inies', 'inken', 'innas', "inès'", "inèz'", 'iraks', 'irans', 'irbit',
'irela', 'irena', 'irene', 'irens', 'irina', "iris'", 'irith', 'irits', 'irjas', 'irkas',
'irkes', 'irlin', 'irmas', 'irnas', 'isaac', 'isacs', 'isaks', 'isels', 'ishøj', 'islev',
'ivalo', 'ivana', 'ivans', 'ivara', 'ivars', 'ivers', 'iwans', 'iwars', 'iwers', 'jaans',
'jacko', 'jacks', 'jacky', 'jacob', 'jades', 'jaels', 'jafet', 'jahns', 'jaime', "jais'",
'jakob', 'jalls', 'jalte', 'jamal', 'james', 'janas', 'janek', 'janes', 'janet', 'janey',
'jania', 'janie', 'janis', 'janna', 'janne', 'janni', 'janns', 'janny', 'janos', 'jansi',
'janus', 'japan', 'jappe', 'jaris', 'jarle', 'jarls', 'jarne', 'jarno', 'jaron', 'jason',
'jayne', 'jeana', 'jeane', 'jeans', 'jeddy', 'jeffi', 'jeffs', 'jeffy', 'jegor', 'jekos',
'jelva', 'jenas', 'jenda', 'jenna', 'jenni', 'jenny', "jens'", 'jeppe', 'jerik', 'jerks',
'jerne', 'jerri', 'jerry', "jess'", 'jesse', 'jesus', 'jette', 'jills', 'jimis', 'jimmi',
'jimms', 'jimmy', 'jinga', 'jings', 'joahs', 'joans', 'jocks', 'jodie', 'joels', 'joens',
'johan', 'johna', 'johni', 'johns', 'johny', "johs'", 'jokum', 'jonas', 'jonie', 'jonna',
'jonne', 'jonny', "joos'", 'joram', 'joran', 'jordy', 'jorge', 'jorid', 'jorie', 'jorns',
'jorry', 'jorst', 'jorun', 'josef', 'joshs', 'josia', 'josts', 'josua', 'josue', 'josva',
'josés', 'jovan', 'jovas', 'joyce', 'joyes', 'jozef', 'joëls', 'juana', 'juans', 'judie',
'judis', 'judit', 'judys', 'judæa', 'jukis', 'jules', 'julia', 'julie', 'julla', 'julsø',
'junas', 'junes', 'junia', 'junie', 'junni', 'juris', 'jussi', 'justa', 'justs', 'jutas',
'jutha', 'jutta', 'jyrki', 'jytas', 'jytta', 'jytte', 'jóhan', 'jøren', 'jørga', 'jørgs',
'jørks', 'jørli', 'jørna', 'jørns', 'kaare', 'kadia', 'kadja', 'kaias', 'kaino', 'kains',
'kairo', 'kaisa', 'kajas', 'kajsa', 'kaleb', 'kalis', 'kalle', 'kamma', 'kammy', 'kamos',
'kanja', 'kanna', 'kanya', 'karel', 'karen', 'karia', 'karim', 'karin', 'karis', 'karla',
'karle', 'karli', 'karlo', 'karls', 'karma', 'karna', 'karno', 'karol', 'katas', 'kates',
'katha', 'kathe', 'kathy', 'katia', 'katie', 'katja', 'katje', 'katka', 'katty', 'katya',
'katys', 'kayas', 'keans', 'kecia', 'keens', "kees'", 'keith', 'kelds', 'kelli', 'kells',
'kelly', 'kemal', 'kenan', 'kenni', 'kenno', 'kenns', 'kenny', 'kenth', 'kento', 'kents',
'kenya', 'keren', 'kerit', 'kerns', 'kerry', 'ketel', 'keths', 'ketil', 'ketta', 'kette',
'ketti', 'ketts', 'ketty', 'kevin', 'kevyn', 'kewan', 'kewin', 'kezia', 'kians', 'kicka',
'kicki', 'kield', 'kikas', 'kikis', 'kikke', 'kikki', 'kimie', 'kimis', 'kimma', 'kimmi',
'kimmo', 'kimms', 'kimmy', 'kimos', 'kinas', 'kinna', 'kinns', 'kions', 'kiras', 'kiris',
'kirit', 'kirja', 'kirsa', 'kirse', 'kirta', 'kisas', "kiss'", 'kissy', 'kitas', 'kitha',
'kitna', 'kitos', 'kitsa', 'kitta', 'kitte', 'kitti', 'kitts', 'kitty', 'kitza', 'kivas',
'kivin', 'kiwas', 'kiwin', 'kjeld', 'kjell', 'klaes', 'klara', 'klare', "klas'", 'klaus',
'klavs', 'kleas', 'kleos', 'klios', 'knuds', 'knuth', 'knuts', 'kofod', 'konja', 'konni',
'konny', 'koras', 'kords', 'korea', 'kores', 'korna', 'korts', 'kraka', 'kreis', 'kreml',
'krens', 'kreta', "kris'", 'krogh', 'kruså', 'kræns', 'krøjs', 'kuans', 'kunos', "kunz'",
'kurds', 'kurth', 'kurts', 'kyoto', 'kyras', 'kätes', 'käthe', 'kätty', 'kåres', 'kæthe',
'latex', 'lages', 'laica', 'laide', 'laika', 'laila', 'laina', 'laisa', 'laise', 'lajka',
'lajla', 'lalla', 'lanas', 'lance', 'lanes', 'langå', 'lanis', 'lanni', "laos'", 'laras',
'laris', 'larna', 'larry', "lars'", "lass'", 'lasse', 'laues', 'lauge', 'launy', 'laura',
'laure', 'lauri', 'laurs', "laus'", 'laust', 'laves', 'lavra', 'lavrs', 'lavst', 'layla',
'leahs', 'leana', 'leane', 'leans', 'lecia', 'lecks', 'ledas', 'ledna', 'leeds', 'leena',
'lehna', 'leias', 'leibs', 'leiff', 'leifs', 'leika', 'leila', "leis'", 'leisa', 'leise',
'lejff', 'lejfs', 'lejla', 'lelas', 'lemmy', 'lenas', 'lenda', 'lenes', 'lenia', 'lenie',
'lenis', 'lenja', 'lenka', 'lenna', 'lenni', 'lenny', 'leona', 'leone', 'leons', 'lette',
'levis', 'levys', 'lewis', 'leyla', 'liams', 'liana', 'liane', 'liani', 'liann', 'liats',
'libas', 'lican', 'licas', 'licia', 'licie', 'lidas', 'lidda', 'liddi', 'liddy', 'lidia',
'lidis', 'lidys', 'liffs', "liis'", 'liisa', 'lilah', 'lilan', 'lilas', 'lilia', 'lilie',
'lilis', 'lilja', 'lilla', 'lilli', 'lills', 'lilly', 'lilse', 'lilys', 'linas', 'linda',
'lindi', 'lindy', 'linea', 'lines', 'linet', 'linka', 'linna', 'linns', 'linus', 'linux',
'lisan', 'lisas', 'lisel', 'lises', 'liset', 'lisie', 'lisis', 'lisls', "liss'", 'lissa',
'lisse', 'lissi', 'lissy', 'lista', 'lisys', 'litas', 'liten', 'litha', 'liths', 'litka',
'litta', 'litte', 'litzi', 'litzy', 'livas', 'livia', 'lizas', 'lizet', 'lizie', 'lizis',
'lizls', 'lizza', 'lizzi', 'lizzy', 'lokes', 'lolan', 'lolas', 'lolos', 'lonas', 'lones',
'loney', 'lonia', 'lonis', 'lonna', 'lonni', 'lonny', 'loras', 'lorea', 'lores', 'loris',
'lorna', 'lorry', 'lotta', 'lotte', 'lotti', 'lotty', 'lotus', 'louie', 'louis', 'lovas',
'luana', 'luane', 'luann', 'lucas', 'lucca', 'lucia', 'lucie', 'lucys', "luis'", 'luisa',
'luise', 'lukas', 'lukes', 'lulas', 'lulla', 'lulle', 'lulls', 'lulus', 'lunas', 'lunds',
'lusys', 'luths', 'lycie', 'lyder', 'lydia', 'lykka', 'lykke', 'lynas', 'lynge', 'lynne',
'lynns', 'lyzet', 'lænna', 'lærke', 'læsøs', 'løcke', 'løkke', 'lønne', 'mabel', 'macks',
'madja', "mads'", 'magal', 'magda', 'magga', 'maggi', 'magna', 'magne', 'magni', 'magny',
'maias', 'maien', 'maija', 'maika', 'maike', 'maila', 'maina', 'maise', 'maite', 'majas',
'majes', 'majid', 'majka', 'majke', 'majli', 'majsa', 'majse', 'majvi', 'makie', "maks'",
'malia', 'malie', 'malin', 'malis', 'malla', 'malle', 'malmö', 'malmø', 'malou', 'malta',
'malte', 'malue', 'mamie', 'manda', 'mandø', 'manja', 'manly', 'manna', 'manne', 'manno',
'manon', 'maras', 'marck', 'marco', 'marcs', 'maren', 'marga', 'maria', 'marie', 'marin',
'mario', 'maris', 'marit', 'marja', 'marka', 'marko', 'marks', 'marna', 'marne', 'marni',
'marno', 'marry', 'marta', 'marte', 'marti', 'marty', "marx'", 'marya', 'marys', 'masha',
'masja', "mass'", 'matie', 'matis', "mats'", 'matti', 'matts', 'mauds', 'mauri', "max's",
'maxim', 'mayas', 'means', 'mecka', 'mecks', 'medea', 'meeri', 'megan', 'meike', 'meiks',
'meino', 'meirs', 'mejse', 'melie', 'menja', 'menos', 'merab', 'merci', 'mercy', 'meris',
'merle', 'merly', 'merri', 'merry', 'merte', 'merys', 'metas', 'metea', 'metha', 'metia',
'metta', 'mette', 'metty', 'mians', 'micas', 'micha', 'michs', 'micka', 'micki', 'micks',
'micky', 'micos', 'midde', 'mieke', 'mijas', 'mikal', 'mikas', 'mikes', 'mikey', 'mikie',
'mikis', 'mikka', 'mikki', 'mikko', 'mikks', 'milan', 'milas', 'milda', 'milia', 'milka',
'milla', 'mille', 'millo', 'milly', 'milos', 'mimis', 'mimmi', 'minas', 'minea', 'mines',
'mingo', 'minik', 'minis', 'minix', 'minja', 'minka', 'minna', 'minne', 'miras', 'miris',
'mirja', 'mirka', 'mirko', 'mirla', 'mirna', 'miros', 'mirra', 'mirsa', 'mirza', 'misha',
'misja', 'miska', 'mitra', 'mitte', 'mitzi', 'mitzy', 'molay', 'molly', "mols'", 'molte',
'momme', 'monas', 'mones', 'monia', 'monis', 'monja', 'monna', 'monne', 'monty', 'moore',
'moses', 'mossø', 'mouse', 'moust', 'munck', 'munin', 'mylia', 'myrna', 'märta', 'månen',
'mærsk', "nbi's", 'njlug', 'nadia', 'nadja', 'naias', 'naija', 'naila', 'naima', 'najas',
'nanas', 'nancy', 'nanda', 'nanes', 'nanet', 'nanja', 'nanna', 'nanne', 'nanni', 'nanns',
'nanny', 'naomi', 'natan', 'nauja', 'nauru', 'nayas', 'neals', 'nedja', 'neela', 'neels',
'neema', 'neias', 'neija', 'neika', 'neils', 'neksø', 'nelas', 'neles', 'nelie', 'nella',
'nelle', 'nelli', 'nells', 'nelly', "nels'", 'nenes', 'nenna', 'nepal', 'netas', 'netes',
'nethe', 'netta', 'nette', 'netti', 'netty', 'nevil', 'niall', 'nichi', 'nicis', 'nicka',
'nicki', 'nicko', 'nicks', 'nicky', 'nicla', 'nicol', 'nicos', 'niela', 'niels', 'nigel',
'niger', 'nikas', 'nikis', 'nikka', 'nikki', 'nikos', 'nilas', 'nilda', 'nilen', 'niles',
'nilla', 'nille', "nils'", 'nimas', 'ninas', 'ninel', 'nines', 'ninia', 'ninis', 'ninja',
'ninka', 'ninna', 'ninne', 'ninni', 'ninon', 'ninos', "niss'", 'nitas', 'nitta', 'nivan',
'nivis', 'nixon', 'njals', 'noahs', 'noals', 'noels', 'noemi', 'nokia', 'nomis', 'nonas',
'nonie', 'nonni', 'nonny', 'noomi', 'noras', 'nordu', 'nores', 'norge', 'norma', 'novos',
'noëls', 'nukas', 'nuoro', 'nynne', 'nyrup', 'nærum', "nøks'", 'nønne', 'nørre', "ooo's",
'obert', 'odder', 'odger', 'odile', 'odine', 'odins', 'odlev', 'odmar', 'olafs', 'olais',
'olajs', 'olaus', 'olava', 'olavs', 'olbia', 'oleas', 'olegs', 'olens', 'olgas', 'olina',
'oline', 'olise', 'oliva', 'olive', 'ollas', 'olles', 'olofs', 'olovs', 'olsen', 'olufs',
'omans', 'omars', 'oonas', 'orlas', 'osama', 'oscar', 'oskar', 'oslos', 'osman', 'osmar',
'othar', 'otine', 'otmar', 'ottar', 'ottas', 'ottes', 'ottos', 'ovard', 'owens', "pdf's",
"phk's", 'posix', 'paavo', 'pablo', 'pacos', 'paick', 'paies', 'palle', 'palls', 'palma',
'pansy', 'paolo', 'paris', 'parly', 'parmo', 'pauel', 'paula', 'pauli', 'paulo', 'pauls',
'pawel', 'pearl', 'peder', 'pedro', 'peers', 'peggy', 'pehrs', 'peiks', 'pejas', 'pejks',
'peles', 'pelle', 'penny', 'penti', 'percy', 'perry', 'perus', 'petas', 'peter', 'petes',
'petra', 'petri', 'petro', 'pfalz', 'pians', 'piets', 'piias', 'piils', 'pilar', 'pinas',
'piotr', 'pipis', 'pippi', "pius'", 'pluto', 'polen', 'polly', 'pouel', 'poula', 'pouli',
'pouls', 'povel', 'povla', 'povls', 'prosa', 'pusle', 'qatar', 'quist', 'qvans', 'racid',
'ragna', 'ragns', 'raimo', 'raini', 'rajas', 'rakel', 'rakis', 'ralff', 'ralfs', 'ralph',
'ramis', 'ramon', 'randa', 'randi', 'randy', 'ranes', 'rania', 'ranja', 'ranva', "rass'",
'rauls', 'rauno', 'ravns', 'regin', 'reier', 'reila', 'reino', 'rejer', 'remis', 'remon',
'remos', 'remus', 'remys', 'renas', 'renee', 'renes', 'renie', 'renis', 'renny', 'renos',
'renée', 'retas', 'retos', "rex's", 'rheas', 'rhina', 'rhoda', 'riber', 'ricco', 'richo',
'ricka', 'ricki', 'ricko', 'ricky', 'ricos', 'riefs', 'rieke', 'riffs', 'rigos', 'rikka',
'rikke', 'rikki', 'rikko', 'rikos', 'rilla', 'rimas', 'rinas', 'rinda', 'rines', 'rinie',
'rinna', 'rinos', 'risas', 'rises', 'risøs', 'ritas', 'ritha', 'riths', 'ritta', 'ritte',
'ritts', 'ritva', 'ritza', 'roald', 'roall', 'roans', 'roark', 'roars', 'robbi', 'robby',
'robin', 'rocco', 'rocko', 'rocky', 'roers', 'roger', 'rokil', 'rolas', 'rolff', 'rolfs',
'rollo', 'roman', 'romas', 'romeo', 'roméo', 'ronas', 'rones', 'ronia', 'ronja', 'ronni',
'ronns', 'ronny', 'rosas', 'rosea', 'roses', 'rotas', 'royni', 'ruars', 'ruben', 'rubis',
'rubys', 'ruddi', 'ruddy', 'rudis', 'rudys', 'rufus', 'rukan', 'rumle', 'runar', 'runas',
'runes', 'runis', 'runna', 'runos', 'rurik', 'rusla', 'ruths', 'ryans', 'ryles', 'ryolf',
'rødby', 'rønde', 'rønne', "sdu's", 'sslug', 'sacha', 'sacho', 'sadia', 'safie', 'sagas',
'sahra', 'sails', 'saima', 'saisa', 'sakse', 'sakso', 'salca', 'salka', 'salli', 'sally',
'salum', 'samia', 'sammi', 'sammy', 'samoa', 'samos', 'samsø', 'sanas', 'sandi', 'sandy',
'sanes', 'sanja', 'sankt', 'sanna', 'sanne', 'sanni', 'sanny', 'sarah', 'saras', 'saris',
'sasas', 'sasia', 'sasja', 'savas', 'saxes', 'saxos', 'scott', 'seans', 'sebbe', 'seier',
'seija', 'seirs', 'sejer', 'sejrs', 'sella', 'selma', 'semmy', 'senia', 'senna', 'senta',
'seppo', 'sepps', 'serge', 'sesil', 'sessa', 'seths', 'shane', 'shaun', 'shawn', 'sheba',
'shila', 'sibyl', 'sidse', 'siena', 'siffs', 'siger', 'sigga', 'sigge', 'siggi', 'signa',
'signe', 'signi', 'signy', 'sigyn', 'sikas', 'silas', 'silja', 'silje', 'silke', 'silla',
'sille', 'silpa', 'silva', 'simen', 'simon', 'sinas', 'sines', 'sinja', 'sinna', 'sinne',
'sinus', 'siras', 'sires', 'siria', 'sirid', 'siris', 'sisan', 'sisie', 'sisis', 'siska',
'sissa', 'sisse', 'sissi', 'sitas', 'sitta', 'sivel', 'skats', 'skive', 'skuli', 'skype',
'skåne', 'smila', 'snæja', 'soffi', 'soffy', 'sofia', 'sofie', 'sofja', 'sofus', 'sonia',
'sonja', 'sonna', 'sonni', 'sonny', 'sophy', 'stans', 'steen', 'steff', 'stege', 'stens',
'steve', 'stigs', 'stiig', 'stina', 'stine', 'stone', 'storå', 'sture', 'sturm', 'sudan',
'sunas', 'sunes', 'sunie', 'sunis', 'sunna', 'sunns', 'sunny', 'susan', 'susia', 'susie',
'susis', 'susse', 'sussi', 'sussy', 'susys', 'suzan', 'suzie', 'suzis', 'suzys', 'svala',
'svava', 'sveas', 'svein', 'svend', 'svenn', 'svens', 'sylva', 'synne', 'syrak', 'sølva',
'sølve', 'sølvi', 'søren', 'tabia', 'tacha', 'tadea', 'tades', 'tagea', 'tages', 'tagos',
'taias', 'taico', 'taija', 'taila', 'taimi', 'taina', "tais'", 'tajas', 'tajco', "tajs'",
'talia', 'talli', 'tamar', 'tamas', 'tamis', 'tamra', 'tanas', 'tania', 'tanja', 'tanna',
'tanne', 'tanni', 'tanos', 'tanya', 'tapio', 'taras', 'tarek', 'tarik', 'tasha', 'tasia',
'tasja', 'tassa', "taus'", 'taves', "tavs'", 'tchad', 'tecla', 'tedas', 'teddi', 'teddy',
'teela', 'teena', 'teias', "teis'", 'teits', 'tejns', "tejs'", 'tekla', 'telma', 'telse',
'temme', 'temmi', 'tenas', 'tenes', 'tenja', 'tenna', 'terja', 'terje', 'terka', 'terna',
'terne', 'terri', 'terry', "tess'", 'tessa', "tex's", "teys'", 'thage', 'thais', 'thala',
'thara', 'thaya', 'theas', 'theis', 'thejs', 'thems', 'theon', 'theos', 'thias', 'thims',
'thina', 'thine', 'thing', 'thios', 'thits', 'thoas', 'thoke', 'thoma', 'thoms', 'thony',
'thora', 'thord', 'thore', 'thors', 'thues', 'thule', 'thune', 'thure', 'thuri', 'thyge',
'thyra', 'thyre', 'thøge', 'tiana', 'tiane', "tias'", 'tibet', 'tibor', 'ticho', 'tidas',
'tiina', 'tikas', 'tilas', 'tilda', 'tilde', 'tilka', 'tilla', 'tille', 'tills', 'tilos',
'tilse', 'tilst', 'times', 'timia', 'timme', 'timmi', 'timmo', 'timms', 'timmy', 'timos',
'tinas', 'tinea', 'tines', 'tinie', 'tinja', 'tinna', 'tinne', 'tinny', 'tinos', 'tinus',
'tiras', 'tirsa', 'tirza', 'tises', 'tissø', 'titos', 'titta', 'titte', 'titti', 'tjana',
'tjørk', 'tjørn', 'tobby', 'tobys', 'togis', 'toivo', 'tokes', 'tokis', 'tolas', 'tolva',
'tomas', 'tommi', 'tomms', 'tommy', 'tonas', 'tones', 'tonga', 'tonie', 'tonja', 'tonje',
'tonni', 'tonny', 'tonya', 'tonys', 'toras', 'tords', 'tores', 'torid', 'toril', 'torin',
'torke', 'torms', 'torny', 'torre', 'torry', 'torun', 'toste', 'tovas', 'toves', 'trein',
'trina', 'trine', 'trohn', 'trond', 'trude', 'trudi', 'truls', 'tryms', 'tsuno', 'tucos',
'tudis', 'tulas', 'tulla', 'tumes', 'tunas', 'tunes', 'tures', 'turfs', 'turid', 'turis',
'tutta', 'tutte', 'tutts', 'tuula', 'tycho', 'tyges', 'tyras', 'tyres', 'tyrol', 'tytte',
'tøger', 'tørks', 'ubbes', 'uffes', 'uffos', 'ulffs', 'uljas', 'ullas', 'ulric', 'ulrik',
'ulver', 'unnas', 'unnes', 'unnie', 'unnis', 'urban', 'vaage', 'vagna', 'vagns', 'vaike',
'vaino', 'valby', 'valdo', 'valli', 'vally', 'vanda', 'vandy', 'vanja', 'varde', 'varla',
'varna', 'varny', 'vavas', 'vegas', 'veijo', 'vejdi', 'vejen', 'vejle', 'velas', 'venca',
'venia', 'venis', 'venke', 'venus', 'veras', 'verna', 'vesla', 'vesta', 'vesti', 'vesty',
'viana', 'viben', 'vibes', "vibs'", 'vibse', 'vibæk', 'vicas', 'vicha', 'vicki', 'vicky',
'vidar', 'vifil', 'vigan', 'vigga', 'vigge', 'viggo', 'vigil', 'vikas', 'vikie', 'vikis',
'vikka', 'vikki', 'vilda', 'vilia', 'vilja', 'villi', 'villy', 'vilma', 'vilna', 'vilni',
'vinas', 'vinca', 'vinie', 'vinis', 'vinja', 'vinka', 'vinna', 'vinni', 'viola', 'viols',
'viras', 'virum', 'viste', 'visti', 'vitas', 'vitha', 'vitos', 'vitta', 'vitus', 'vivan',
'vivas', 'vivia', 'vivie', 'vivis', 'vonge', 'våges', "who's", 'waage', 'wagna', 'wagns',
'wahid', 'walid', 'walli', 'wally', 'wanda', 'wandy', 'wange', 'wanja', 'warla', 'warna',
'warny', 'weena', 'weiss', 'welas', 'wendy', 'weras', 'werna', 'wicki', 'wicky', 'wiens',
'wigan', 'wigga', 'wiggo', 'wikis', 'wilda', 'wilja', 'willi', 'willy', 'wilma', 'winas',
'winie', 'winis', 'winna', 'winni', 'winns', 'wisti', 'witas', 'witha', 'witta', 'witte',
'wivan', 'wivis', 'wiwis', 'wotan', 'wyrna', 'wåges', 'xenia', 'y-tog', 'yades', 'yaels',
'yanns', 'yding', 'yduns', 'yelva', 'yemen', 'ylvas', 'yngva', 'yngve', 'yomas', 'yonna',
'yrsas', 'ystad', 'yttas', 'yttes', 'yuris', 'yvans', "yves'", 'yvonn', 'yvons', 'zahra',
'zaire', 'zakia', 'zakis', 'zanas', 'zanna', 'zanne', 'zanno', 'zanny', 'zapps', 'zarah',
'zaras', 'zazas', 'zazia', 'zeans', 'zella', 'zelma', 'zemas', 'zenia', 'zenja', 'zenta',
'zessa', 'zeths', 'ziads', 'zidas', 'ziers', 'zigas', 'zilas', 'zilla', 'zimon', 'zinas',
'zindy', 'ziras', 'ziska', 'zitas', 'zitha', 'zitta', 'zofia', 'zofie', 'zofja', 'zoran',
'zosia', 'zuzan', "a'ers", "a'ets", 'abbed', "abc's", 'abede', 'abens', 'abers', 'abort',
'acces', 'adder', 'addér', 'adels', 'adept', 'adler', 'adles', 'adlet', 'adlyd', 'adlød',
'adræt', 'advar', 'advis', 'aedes', 'aende', 'aerob', 'afart', 'afasi', 'afbag', 'afben',
'afbud', 'afbær', 'afbød', 'afdæk', 'afdød', 'affat', 'affej', 'affil', 'affyr', 'affød',
'affør', 'afgas', 'afgav', 'afgik', 'afgiv', 'afgud', 'afgår', 'afgær', 'afgør', 'afhop',
'afhud', 'afhug', 'afhår', 'afhør', 'afise', 'afkod', 'afkog', 'afkom', 'afkøl', 'aflad',
'afled', 'aflir', 'afliv', 'aflok', 'afluk', 'aflur', 'aflus', 'aflyd', 'aflys', 'aflyt',
'aflås', 'aflæg', 'aflæs', 'afløb', 'afløn', 'afløs', 'afløv', 'afmal', 'afmat', 'afmej',
'afmål', 'afnød', 'afpas', 'afpil', 'afpæl', 'afret', 'afrev', 'afrig', 'afrim', 'afriv',
'afryd', 'afsat', 'afsav', 'afser', 'afses', 'afset', 'afsig', 'afsky', 'afslå', 'afson',
'afstå', 'afsyr', 'afsæb', 'afsæt', 'aftag', 'aftal', 'aften', 'aftes', 'aftne', 'aftog',
'afveg', 'afvej', 'afvig', 'afvis', 'afvæn', 'afæsk', 'agape', 'agars', 'agats', 'agave',
'agede', 'agens', 'agent', 'agere', 'agern', 'agers', 'agnat', 'agnen', 'agnet', 'agoni',
'agora', 'agraf', 'agrar', 'agres', 'agten', 'agter', 'agtes', 'agtet', 'agurk', 'ahorn',
'ajlen', 'ajour', 'akryl', 'aksel', 'aksen', 'akser', 'akses', 'akset', 'aksle', 'akten',
'akter', 'aktie', 'aktiv', 'aktor', 'aktør', 'alarm', 'albue', 'album', 'alder', 'aldre',
'alene', 'alens', 'alert', 'alfen', 'alfer', 'algen', 'alger', 'alges', 'algod', 'algol',
'alhus', 'alias', 'alibi', 'alkyd', 'alles', 'allés', 'almen', 'almue', 'aloen', 'aloer',
'aloes', 'alpen', 'alper', 'alpin', 'alrum', 'altan', 'alter', 'altet', 'altid', 'altre',
'altså', 'alvor', 'ambra', 'ammen', 'ammer', 'ammes', 'ammet', 'amorf', 'amour', 'ampel',
'ampul', 'amter', 'amtet', 'amøbe', 'anale', 'analt', 'andel', 'anden', 'andet', 'andre',
'anede', 'anfør', 'angav', 'anger', 'angik', 'angiv', 'angle', 'angre', 'angst', 'angår',
'anion', "anis'", 'anjon', 'ankel', 'anken', 'anker', 'ankes', 'anket', 'ankom', 'ankre',
'anlæg', 'anløb', 'anmod', 'annal', 'annua', 'anode', 'anret', 'anråb', 'ansat', 'anser',
'anses', 'anset', 'ansku', 'anslå', 'anstå', 'ansås', 'ansæt', 'ansøg', 'antag', 'antal',
'antik', 'antog', 'antyd', 'anvis', 'anæmi', 'aorta', 'apati', 'apeks', 'appel', 'april',
'apsis', 'apter', 'aptér', 'araen', 'araer', 'areal', 'arena', 'arene', 'arens', 'argon',
'argot', 'arien', 'arier', 'aries', 'arisk', 'arken', 'arker', 'arket', 'arkiv', 'armen',
'armer', 'armes', 'armod', 'armér', 'armés', 'arnen', 'arner', 'arnes', 'aroma', 'arpet',
'arrak', 'arret', 'arrig', 'arsen', 'arses', 'arsis', 'arten', 'arter', 'artes', 'artet',
'artig', 'arven', 'arver', 'arves', 'arvet', 'arvæv', 'asede', 'asens', 'asers', 'asiat',
'asien', 'asier', 'asies', 'asiet', 'asken', 'asker', 'asket', 'asner', 'asnet', 'aspen',
'aspes', 'aspic', 'asser', 'asset', 'astma', 'asyls', 'atlas', 'atlet', 'atols', 'atoms',
'atoni', 'attak', 'atten', 'atter', 'attrå', 'audit', 'augur', 'aulas', 'auras', 'autor',
'autos', 'avecs', 'avers', 'avind', "avis'", 'avlen', 'avler', 'avles', 'avlet', 'avnen',
'avner', 'avnes', 'avnet', 'azurs', "b'ers", "b'ets", 'babys', 'bacon', 'bader', 'bades',
'badet', 'badge', 'badut', 'bagen', 'bager', 'bages', 'bagom', 'bagpå', 'bagte', 'bagud',
'bajer', 'bajet', 'bakke', 'bakse', 'balde', 'balge', 'balgs', 'balje', 'balle', 'bamle',
'bamse', 'banal', 'banan', 'bande', 'bands', 'bandt', 'banen', 'baner', 'banes', 'banet',
'bange', 'banjo', 'banke', 'banko', 'banks', 'bantu', 'barak', 'barbe', 'barde', 'baren',
'barer', 'bares', 'baret', 'barke', 'barks', 'barme', 'barms', 'barns', 'barok', 'baron',
'barre', 'barsk', 'barsl', 'baryl', 'baryt', 'basal', 'basar', 'basen', 'baser', 'bases',
'basic', 'basis', 'baske', 'basse', 'basta', 'baste', 'basts', 'basun', 'batat', 'batch',
'batik', 'batte', 'batts', 'bavls', 'bavne', 'bavns', 'bebop', 'bebor', 'bebos', 'bebud',
'bebyg', 'beden', 'beder', 'bedes', 'bedet', 'bedre', 'bedst', 'bedyr', 'bedår', 'bedæk',
'bedøm', 'bedøv', 'befal', 'befar', 'befor', 'befri', 'beføj', 'beføl', 'begav', 'beges',
'beget', 'begge', 'begik', 'begiv', 'beglo', 'begår', 'begås', 'begær', 'behag', 'behov',
'beige', 'bejae', 'bejds', 'bejle', 'bekom', 'belav', 'belur', 'belys', 'belån', 'belæg',
'belær', 'belæs', 'beløb', 'beløj', 'beløn', 'bemal', 'bemøj', 'bener', 'benet', 'benyt',
'benåd', 'beoen', 'beoer', 'bered', 'beret', 'berig', 'beror', 'berus', 'beryl', 'beråd',
'berøm', 'berør', 'berøv', 'besad', 'besat', 'beser', 'beses', 'beset', 'besid', 'beske',
'beskt', 'besku', 'beslå', 'besov', 'bestå', 'besyv', 'besæt', 'besøg', 'betag', 'betak',
'betal', 'betas', 'betel', 'beten', 'beter', 'betle', 'betog', 'beton', 'betro', 'betød',
'bevar', 'bevis', 'bevæg', 'beære', "bh'en", "bh'er", 'biavl', 'bibel', 'bider', 'bides',
'bidet', 'bidsk', 'bidte', 'biens', 'biers', 'bifag', 'bifil', 'bigot', 'bijob', 'bikse',
'bilag', 'bilde', 'bildt', 'biled', 'bilen', 'biler', 'biles', 'bilet', 'bilkø', 'bille',
'bilos', 'bilyd', 'bimle', 'bimse', 'binde', 'binds', 'bingo', 'binær', 'bioen', 'bioer',
'biord', 'bippe', 'birke', 'birks', 'birum', 'bisag', 'bisam', 'bisat', 'bisen', 'biser',
'bises', 'bisol', 'bison', 'bisps', 'bisse', 'bistå', 'bitre', 'bitte', 'bivej', 'bivån',
'bizar', 'bjerg', 'bjesk', 'bjæfs', 'bjærg', 'bjørn', 'blade', 'bladr', 'blads', 'blafr',
'bland', 'blank', 'blase', 'bleen', 'bleer', 'blege', 'blegn', 'blegt', 'blend', 'blide',
'blidt', 'bliks', 'blind', 'blink', "blis'", 'blist', 'blitz', 'blive', 'blods', 'bloks',
'blond', 'blote', 'blots', 'blues', 'bluff', 'blund', "blus'", 'bluse', 'blyet', 'blåne',
'blårs', 'blæks', 'blænd', 'blære', 'blærs', 'blæse', 'blæst', 'blævr', 'bløde', 'blødt',
'boaen', 'boaer', 'bobbe', 'boble', 'bodel', 'boden', 'boder', 'bodil', 'boede', 'boens',
'boere', 'boers', 'boets', 'bogen', 'bogie', 'bojan', 'bojar', "boks'", 'bokse', 'bolde',
'bolds', 'boler', 'boles', 'bolet', 'bolig', 'bolle', 'bolte', 'bolts', 'bombe', 'bomme',
'bonde', 'bonen', 'boner', 'bones', 'bonet', 'bonus', 'booke', 'booms', 'boote', 'bopæl',
'borde', 'bords', 'borer', 'bores', 'boret', 'borge', 'borgs', 'borst', 'borte', 'bosat',
"boss'", 'bosse', 'boven', 'boves', 'bovne', 'bowle', 'boxer', 'brage', 'brags', 'bragt',
'brand', 'brank', 'brase', 'brask', 'brast', 'brave', 'bravo', 'bravt', 'break', 'brede',
'bredt', 'brems', 'breve', 'brevs', 'brief', 'brien', 'brier', 'bries', 'briks', 'bring',
'brink', 'brint', 'brise', 'brist', 'brite', 'broen', 'broer', 'brors', 'brovt', 'brude',
'bruds', 'brudt', 'bruge', 'brugs', 'brugt', 'brune', 'brunt', "brus'", 'bruse', 'brusk',
'bryde', 'brygs', 'bryns', 'brysk', 'bryst', 'brædt', 'bræen', 'bræer', 'bræge', 'bræks',
'brænd', 'bræts', 'brøde', 'brøds', 'brøks', 'brøle', 'brøls', 'brønd', 'brøst', 'budes',
'buede', 'buens', 'buers', 'bugen', 'buggy', 'bugne', 'bugte', 'bugts', 'buhko', 'buket',
'bukke', 'bukle', 'buldr', 'bulen', 'buler', 'bules', 'bulet', 'bulke', 'bulks', 'bulle',
'bulme', 'bulne', 'bumle', 'bumpe', 'bumps', "bums'", 'bumse', 'bunde', 'bunds', 'bundt',
'bunke', 'burde', 'burer', 'bures', 'buret', 'burre', 'buser', 'buses', 'buset', 'buske',
'busks', 'buste', 'butan', 'butik', 'bybos', 'bybud', 'bybus', 'bydel', 'byder', 'bydes',
'byens', 'byers', 'bygas', 'bygds', 'bygen', 'byger', 'byges', 'byget', 'bygge', 'byhus',
'bylds', 'byliv', 'bylts', 'bymur', 'bynke', 'bynær', 'byrde', 'byret', 'byrum', 'byråd',
'byste', 'bytes', 'bytte', 'bytur', "bz'er", 'båden', 'bådes', 'båken', 'båker', 'båkes',
'bålet', 'bånde', 'bånds', 'båren', 'bårer', 'båres', 'båret', 'bårne', 'båsen', 'båses',
'bæens', 'bæers', 'bæets', 'bæger', 'bægre', 'bække', 'bælge', 'bælgs', 'bælle', 'bælte',
'bælts', 'bænke', 'bænks', 'bærer', 'bæres', 'bærme', 'bæsts', 'bæven', 'bæver', 'bævet',
'bævre', 'bøden', 'bøder', 'bødes', 'bødet', 'bødle', 'bøffe', 'bøgen', 'bøger', 'bøges',
'bøget', 'bøjen', 'bøjer', 'bøjes', 'bøjet', 'bøjle', 'bølge', 'bølle', 'bønne', 'børen',
'børes', 'børns', 'børst', 'bøsse', 'bøtte', 'bøvet', 'bøvse', "c'ers", "c'ets", 'cafes',
'cafés', 'capen', 'caper', 'capes', "cd'en", "cd'er", 'cdrom', 'ceder', 'cedre', 'celle',
'cello', 'cerut', 'charm', 'check', 'chefs', 'chili', 'chips', 'cider', 'cifre', 'cigar',
'cirka', 'citar', 'citat', 'citer', 'civil', 'clear', 'clips', 'coate', 'colas', 'conga',
'coupe', 'coupé', 'cover', 'crack', 'crawl', 'crazy', 'credo', 'creme', 'crepe', 'curie',
'cutte', 'cykel', 'cykle', 'cyste', 'cæsar', 'cæsur', "d'ers", "d'ets", 'dadel', 'dadle',
'dagen', 'dages', 'dalbo', 'dalen', 'daler', 'dales', 'dalet', 'dalre', 'damen', 'damer',
'dames', 'damet', 'damme', 'dampe', 'damps', 'danbo', 'dandy', 'daner', 'danne', "dans'",
'danse', 'dansk', 'daser', 'daset', 'daske', 'datas', 'dater', 'datid', 'dativ', 'datos',
'david', 'davre', 'debat', 'debet', 'debil', 'debug', 'debut', 'decca', 'decim', 'decks',
'deger', 'degne', 'degns', 'deist', 'dejen', 'dejes', 'dejet', 'dejse', 'dekan', 'dekor',
'delen', 'deler', 'deles', 'delle', 'delta', 'delte', 'denar', 'denim', 'denne', 'dente',
'depot', 'deraf', 'derby', 'deres', 'derom', 'derop', 'derpå', 'derud', 'desto', 'dette',
'devon', 'devot', 'diaer', 'diaet', 'diare', 'diaré', 'dible', 'digel', 'diger', 'diges',
'diget', 'digre', 'digte', 'digts', 'dikke', 'dildo', 'dilds', 'dille', 'dinar', 'diner',
'dingo', 'diode', 'dipol', 'dirke', 'dirks', 'dirre', 'disen', 'diset', 'diske', 'disko',
'disks', 'disse', 'ditto', 'divan', 'divas', 'diæts', 'djærv', 'doble', 'docer', 'dogen',
'doger', 'doges', 'dogme', 'dokke', 'dolce', 'dolke', 'dolks', 'dolme', 'domme', 'donen',
'doner', 'dones', 'donna', 'donor', 'doper', 'dopet', 'dorer', 'dorge', 'dorgs', 'dorne',
'dorsk', 'dosen', 'doser', 'dosis', 'doter', 'douce', 'doven', 'dovne', 'doyen', 'dozer',
'drabs', 'drage', 'drags', 'dragt', 'dragé', 'drama', 'drapa', 'dreje', 'drejl', 'drejs',
'dreng', 'dress', 'drevs', 'dribl', 'drift', 'drink', 'drist', 'drive', 'droge', 'drogs',
'drone', 'drops', 'drost', 'drude', 'druen', 'druer', 'drues', 'drukn', "drys'", 'dråbe',
'dræbe', 'dræbt', 'drægs', 'dræne', 'dræns', 'dræve', 'drøft', 'drøje', 'drøjt', 'drøms',
'drømt', 'drøne', 'drøns', 'dubbe', 'duble', 'dublé', 'duede', 'duels', 'duens', 'duers',
'duets', 'dufte', 'dufts', 'dugen', 'duges', 'dugge', 'dugts', 'dukat', 'dukke', 'dulgt',
'dulle', 'dulme', 'dumme', 'dummy', 'dumpe', 'dumps', 'dumpt', 'duner', 'dunes', 'dunet',
'dunke', 'dunks', 'dunst', 'dunte', 'duoen', 'duoer', 'duper', 'duplo', 'duppe', 'duren',
'dusin', 'duske', 'dusks', 'dusør', 'dutte', 'dvale', 'dvask', "dvd's", 'dvæle', 'dværg',
'dybde', 'dybel', 'dybet', 'dybsø', 'dyden', 'dyder', 'dydig', 'dykke', 'dynen', 'dyner',
'dynes', 'dynge', 'dyppe', 'dyres', 'dyret', 'dyrke', 'dysen', 'dyser', 'dyses', 'dysse',
'dyste', 'dysts', 'dytte', 'dyvel', 'dåben', 'dåden', 'dådyr', 'dåens', 'dåers', 'dålam',
'dåner', 'dånet', 'dåren', 'dårer', 'dåres', 'dåret', 'dåsen', 'dåser', 'dåses', 'dægge',
'dække', 'dælen', 'dæmme', 'dæmon', 'dæmpe', 'dæmre', 'dænge', 'døber', 'døbes', 'døbte',
'døden', 'dødis', 'døgns', 'døjer', 'døjet', 'dølge', 'dølle', 'dømme', 'dømte', 'dønne',
'døren', 'døres', 'dørke', 'dørks', 'døser', 'døset', 'døsig', 'døtre', 'døver', 'døves',
'døvet', "e'ers", "e'ets", 'ebben', 'ebber', 'ebbes', 'eclat', "edb's", 'eddas', 'edder',
'edens', 'eders', 'edikt', 'efeus', 'effen', 'efors', 'efter', 'egalt', 'egene', 'egens',
'egern', 'egers', 'egnen', 'egner', 'egnes', 'egnet', 'egoer', 'egoet', 'ejede', 'ejere',
'ejers', 'ekkos', 'eksem', 'ekser', 'ekses', 'ekset', 'eksil', 'elbil', 'elegi', 'elevs',
'elgen', 'elges', 'elgko', 'elite', 'eller', 'elles', 'elmen', 'elmes', 'elske', 'elven',
'elver', 'elves', 'elvte', 'emacs', 'emden', 'emder', 'emdes', 'emirs', 'emmer', 'emmet',
'emner', 'emnes', 'emnet', 'emsig', 'emuen', 'emuer', 'endda', 'enden', 'ender', 'endes',
'endnu', 'endog', 'endte', 'enere', 'eners', 'engel', 'engen', 'enges', 'engle', 'enhed',
'enige', 'enigt', 'enkel', 'enken', 'enker', 'enkes', 'enkle', 'enlig', 'enorm', 'enrum',
'ensom', 'ental', 'enten', 'entre', 'entré', 'enzym', 'enøre', 'eolit', 'episk', 'epoke',
'epope', 'epopé', 'epoxy', 'erfar', 'erika', 'erlæg', 'erobr', "eros'", 'erots', 'espen',
'espes', 'esrom', 'essay', 'essen', 'esser', 'esses', 'esset', 'essig', 'ester', 'etaer',
'etaet', 'etage', 'etape', 'etats', 'etbær', 'etiks', 'etisk', 'etmål', 'ettal', 'etter',
'etude', 'etuis', 'etårs', 'eunuk', 'event', 'evert', 'evige', 'evigt', 'evnen', 'evner',
'evnes', 'evnet', 'exces', 'exede', "f'ers", "f'ets", 'fabel', 'fable', 'facet', 'facil',
'facit', 'facon', 'facto', 'facts', 'fader', 'fades', 'fadet', 'fadøl', 'fager', 'faget',
'fagot', 'fagre', 'fakir', 'fakta', 'falde', 'falds', 'faldt', 'falke', 'falks', 'falle',
'falme', 'false', 'falsk', 'famle', 'famøs', 'fandt', 'fanen', 'faner', 'fanes', 'fange',
'farad', 'farao', 'farce', 'faren', 'farer', 'fares', 'faret', 'farin', 'farme', 'farms',
'farne', "fars'", 'farsi', 'farte', 'farts', 'farve', 'fasan', 'fasen', 'faser', 'fases',
'faste', 'fatal', 'fatte', 'fauna', 'fauns', 'favne', 'favns', 'favør', 'faxen', 'faxer',
'feber', 'febre', 'feder', 'fedet', 'fedme', 'fedte', 'fedts', 'feens', 'feers', 'fehår',
'fejde', 'fejer', 'fejet', 'fejle', 'fejls', 'fejre', 'felts', 'femte', 'femti', 'femår',
'fenne', 'fenol', 'fenyl', 'ferie', 'ferle', 'ferme', 'fermt', 'fersk', 'feset', 'feste',
'fests', 'fetas', 'feter', 'fiber', 'fibre', 'fichu', 'ficus', 'fidel', 'fidus', 'fiffe',
'fifle', 'figen', 'fight', 'figur', 'fikse', 'fikst', 'filen', 'filer', 'files', 'filet',
'filme', 'films', 'filte', 'filts', 'filur', 'fimet', 'fimre', "fims'", 'fimse', 'final',
'finde', 'finer', 'fingr', 'finit', 'finke', 'finne', 'finsk', 'finte', 'fiols', 'firer',
'fires', 'firet', 'firma', 'firme', 'firti', 'fiser', 'fiset', 'fiske', 'fisks', 'fisse',
'fiste', 'fistr', 'fixet', 'fjant', "fjas'", 'fjase', 'fjeld', 'fjern', 'fjers', 'fjert',
'fjogs', 'fjols', 'fjong', 'fjord', 'fjumr', 'fjums', 'fjæle', 'fjæls', 'fjært', "fjæs'",
'flabe', 'flabs', 'flade', 'fladt', 'flage', 'flagr', 'flags', 'flair', 'flaks', 'flakt',
'flane', 'flapr', 'flash', 'flere', 'flest', 'flids', 'flige', 'fligs', 'flink', 'flint',
'flire', 'flirt', 'flise', 'flods', 'floks', 'flora', 'flors', 'flove', 'flovt', 'flows',
'fluat', 'fluen', 'fluer', 'flues', 'flugt', 'fluid', 'fluks', 'fluor', 'flute', 'flyde',
'flydt', 'flyer', 'flyes', 'flyet', 'flygt', 'flyve', 'flåde', 'flåds', 'flået', 'flåts',
'flæbe', 'flæng', 'flæns', 'flæse', 'flæsk', 'fløde', 'fløje', 'fløjl', 'fløjs', 'fløjt',
"fløs'", 'fløse', "fnis'", 'fnise', "fnys'", 'fnyse', 'fobis', 'foden', 'foder', 'fodre',
'foged', 'foget', 'fokus', 'folde', 'folds', 'folen', 'foler', 'foles', 'folet', 'folie',
'folio', 'folks', 'fonde', 'fonds', 'fonem', 'fonte', 'foran', 'forbi', 'force', 'fordi',
'fordr', 'forel', 'foren', 'forer', 'foret', 'forgå', 'forke', 'forks', 'forku', 'forme',
'forms', 'formå', 'forne', 'forny', 'forpå', 'forrå', 'forse', 'forsk', 'forså', 'forte',
'forti', 'forts', 'forud', 'forum', 'foråd', 'forår', 'forær', 'forøg', 'fosse', 'foton',
'fotos', 'foyer', 'fragt', 'fragå', 'franc', 'frank', 'frase', 'frede', 'freds', 'frels',
'freon', 'frier', 'fries', 'friet', 'frise', 'frisk', 'frist', 'fromt', 'front', 'frost',
'fruen', 'fruer', 'frues', 'frugt', 'fryde', 'frygt', 'fryns', 'fryse', 'fråde', 'fråds',
'frækt', 'fræse', 'frøen', 'frøer', 'frøet', 'fugen', 'fuger', 'fuges', 'fuget', 'fugle',
'fugls', 'fugte', 'fugts', "fuks'", 'fulde', 'fulds', 'fuldt', 'fulgt', 'fumle', 'funds',
'funke', 'fuppe', 'furen', 'furer', 'fures', 'furet', 'furie', 'fusel', 'fusen', 'fuser',
'fuses', 'fuset', 'fuske', 'futil', 'futte', 'fyger', 'fyget', 'fylde', 'fyldt', 'fylke',
'fynbo', 'fynsk', 'fyren', 'fyrer', 'fyres', 'fyret', 'fyrig', 'fyrre', 'fyrst', 'fyråb',
'fysik', 'fytin', 'fåret', 'fåtal', 'fæces', 'fædre', 'fæene', 'fæets', 'fægte', 'fæhår',
'fæisk', 'fækal', 'fælde', 'fæles', 'fælge', 'fælgs', 'fælle', 'fænge', 'færde', 'færds',
'færge', 'færre', 'fæste', 'fæstn', 'fætre', 'føden', 'føder', 'fødes', 'fødte', 'føget',
'føjer', 'føjes', 'føjet', 'føjte', 'føler', 'føles', 'følge', 'følte', 'fønen', 'føner',
'fører', 'føres', 'føret', 'først', 'førte', "g'ers", "g'ets", 'gaben', 'gaber', 'gabes',
'gabet', 'gabte', 'gaden', 'gader', 'gades', 'gafle', 'gagat', 'gagen', 'gager', 'gages',
'gaget', "gags'", 'galan', 'galar', 'galde', 'galej', 'galer', 'gales', 'galet', 'galge',
'galla', 'galle', 'galon', 'galop', 'galpe', 'galte', 'galts', 'gambe', 'gamet', 'gamin',
'gamle', 'gamma', 'ganen', 'ganer', 'ganes', 'gange', 'gangs', 'garde', 'garns', 'garve',
'gasen', 'gaser', 'gases', 'gasse', 'gasts', 'gauge', 'gaven', 'gaver', 'gaves', 'gavle',
'gavls', 'gavne', 'gavns', 'gazen', 'gazer', 'gazes', 'geare', 'gears', 'gebet', 'gebis',
'gebyr', 'gedde', 'geden', 'geder', 'gehør', 'gejle', 'gejls', 'gejst', 'gekko', 'geled',
'geles', 'gelés', 'gemak', 'gemal', 'gemen', 'gemme', 'gemse', 'gemte', 'gemyt', 'genbo',
'genen', 'gener', 'genet', 'genis', 'genne', 'genom', 'genre', 'gense', 'genså', 'genua',
'genus', 'gerer', 'gerne', 'gevir', 'gevær', 'gibbe', 'gider', 'gidet', 'gifte', 'gifts',
'gigue', 'gilde', 'gimpe', 'ginen', 'giner', 'gines', 'gipse', 'giraf', 'gisne', 'gispe',
'gisps', 'gitov', 'gitre', 'given', 'giver', 'gives', 'givet', 'givne', 'gjald', 'gjord',
'gjort', 'glade', 'glane', 'glans', 'glemt', 'glibe', 'glide', 'glime', 'glimt', 'glins',
'glitr', 'globe', 'gloet', 'glose', 'glugs', 'glæde', 'gløde', 'gløds', 'gløgg', 'gnask',
'gnave', 'gnejs', 'gnide', 'gnier', 'gnist', 'gnome', 'gnoms', 'gnuen', 'gnuer', 'goden',
'goder', 'godes', 'godet', 'godte', 'gokke', 'golde', 'goldt', 'golfs', 'gople', 'goter',
'gotik', 'gouda', 'grade', 'grads', 'grafs', 'grams', 'grand', 'grans', 'grant', 'grave',
'gravs', 'grebs', 'green', 'greje', 'grejs', 'grelt', 'grene', 'grens', 'greve', 'gribe',
'grifl', 'grill', 'grime', 'grimt', 'grind', 'grine', 'grins', 'grise', 'grisk', 'groet',
'groft', 'grove', 'grube', 'grubl', 'gruer', 'gruet', 'grums', 'grumt', 'grund', 'gruse',
'gryde', 'gryns', 'grynt', 'gråne', 'græde', 'grædt', "græs'", 'græsk', 'grøde', 'grøds',
'grøft', 'grønt', 'guano', 'guava', 'gubbe', 'guden', 'guder', 'guffe', 'gufle', 'guide',
'gulds', 'gules', 'gulne', 'gulve', 'gulvs', 'gumle', 'gumme', 'gummi', 'gumpe', 'gumps',
'gungr', 'gunst', 'guppy', 'gurgl', 'gurus', 'gyden', 'gyder', 'gydes', 'gylle', 'gylpe',
'gylps', 'gylts', 'gynge', 'gyser', 'gyset', 'gyste', 'gytje', 'gyvel', 'gåben', 'gåden',
'gåder', 'gådes', 'gålæg', 'gårde', 'gårds', 'gåsen', 'gåset', 'gåtid', 'gåtur', 'gække',
'gælde', 'gælds', 'gæler', 'gælle', 'gænge', 'gængs', 'gærde', 'gæren', 'gærer', 'gæres',
'gæret', 'gæste', 'gæsts', 'gætte', 'gøder', 'gødet', 'gødsk', 'gøede', 'gøgen', 'gøges',
'gøgle', 'gøgls', 'gøren', 'gøres', "h'ers", "h'ets", 'habil', 'habit', 'hacke', 'hader',
'hades', 'hadet', 'hadsk', 'hagen', 'hager', 'hages', 'haget', 'hagle', 'haiku', 'hajen',
'hajer', 'hakke', 'halen', 'haler', 'hales', 'halet', 'hallo', 'halls', 'halma', 'halon',
'halse', 'halte', 'halve', 'halvt', 'halvø', 'hamit', 'hamle', 'hamme', 'hamre', 'handl',
'handy', 'hanen', 'haner', 'hanes', 'hanke', 'hanks', 'hapse', 'hapss', 'harem', 'haren',
'harer', 'hares', 'harke', 'harme', 'harpe', 'harpy', 'harsk', 'harve', 'hasen', 'haser',
'hases', 'haspe', 'haste', 'hatte', 'hausa', 'havde', 'haven', 'haver', 'haves', 'havet',
'havne', 'havns', 'havre', 'havål', 'heade', 'heats', 'heavy', 'hedde', 'heden', 'heder',
'hedes', 'hefte', 'hegle', 'hegne', 'hegns', 'heile', 'hejre', 'hejsa', 'hejse', 'hejst',
'hekse', 'heler', 'helet', 'helle', 'helme', 'helse', 'helst', 'helte', 'helts', 'helår',
'hemse', 'henad', 'hende', 'hendø', 'hengå', 'henlå', 'henna', 'henne', 'henry', 'hense',
'hente', 'heppe', 'heraf', 'herme', 'herom', 'herop', 'heros', 'herpå', 'herre', 'herse',
'hersk', 'herte', 'hertz', 'herud', 'herut', 'heste', 'hests', "hetz'", 'hetze', 'hevet',
"hf'er", 'hi-fi', 'hidse', 'hiers', 'hiets', 'higen', 'higer', 'higet', 'hikke', 'hikst',
'hilde', 'hille', 'hilse', 'hilst', 'himle', 'hinde', 'hindi', 'hindr', 'hinds', 'hindu',
'hinke', 'hippe', 'hirse', 'hisse', 'hitte', 'hiver', 'hives', 'hivet', 'hjald', 'hjalp',
'hjelm', 'hjord', 'hjort', 'hjuls', 'hjælp', 'hobby', 'hoben', 'hober', 'hobes', 'hobet',
'hofte', 'holde', 'holds', 'holdt', 'holme', 'holms', 'hopla', 'hoppe', 'hopsa', 'horde',
'horer', 'horet', 'horns', 'horst', 'hosen', 'hoser', 'hoses', 'hoste', 'hosts', 'hotel',
'hotte', 'house', 'hoved', 'hoven', 'hover', 'hoves', 'hovne', 'hovsa', 'huden', 'huder',
'hudre', 'huens', 'huers', 'hugaf', 'hugge', 'hugst', 'hujer', 'hujet', 'hulen', 'huler',
'hules', 'hulet', 'hulke', 'hulks', 'hulle', 'human', 'humle', 'humme', 'humor', 'humpe',
'humus', 'humør', 'hunde', 'hunds', 'hungr', 'hurra', 'husar', 'huser', 'huses', 'huset',
'huske', 'husly', 'hutle', 'hutre', 'hvalp', 'hvals', 'hvede', 'hvene', 'hveps', 'hvert',
'hverv', 'hvide', 'hvidt', 'hvile', 'hvils', 'hvine', 'hvins', 'hvisk', 'hvori', 'hvælv',
"hvæs'", 'hvæse', 'hybel', 'hyben', 'hydra', 'hygge', 'hykle', 'hylde', 'hylds', 'hylen',
'hyler', 'hyles', 'hylet', 'hylle', 'hymen', 'hymne', 'hynde', 'hyppe', 'hyrde', 'hyren',
'hyrer', 'hyres', 'hyret', 'hysse', 'hytte', 'hyæne', 'håber', 'håbet', 'hånde', 'hånds',
'hånen', 'håner', 'hånes', 'hånet', 'hånle', 'hånsk', 'hårde', 'hårdt', 'håret', 'hæder',
'hædre', 'hæfte', 'hægen', 'hæger', 'hæges', 'hæget', 'hægge', 'hægte', 'hække', 'hækle',
'hælde', 'hældt', 'hælen', 'hæler', 'hæles', 'hælvt', 'hæmme', 'hænde', 'hændt', 'hænge',
'hængt', 'hærde', 'hæren', 'hærge', 'hætte', 'hævde', 'hæver', 'hæves', 'hævet', 'hævne',
'hævns', 'høfde', 'højde', 'højen', 'højes', 'højne', 'højre', 'højst', 'høker', 'høkre',
'hølæs', 'hønen', 'høner', "høns'", 'hønse', 'hører', 'høres', 'hørig', 'hørme', 'hørte',
'høste', 'høsts', 'høtyv', 'høved', 'høvle', "i'ers", "i'ets", 'ideal', 'ideel', 'ideen',
'ideer', 'idiom', 'idiot', 'idols', 'idræt', 'idyls', 'idéen', 'idéer', 'idømt', 'ifald',
'iføre', 'iført', 'iglen', 'igler', 'igles', 'iglos', 'ihjel', 'ikkun', 'ikons', 'ikten',
'ilbud', 'ilden', 'ilder', 'ildhu', 'ildne', 'ilede', 'iling', 'ilsom', 'ilten', 'ilter',
'iltet', 'iltog', 'iltre', 'image', 'imens', 'immer', 'immun', 'indad', 'indbo', 'inden',
'inder', 'indgå', 'indre', 'indse', 'indså', 'indsø', 'indvi', 'indøv', 'inert', 'infam',
'ingen', 'input', 'intet', 'intim', 'intro', 'inuit', 'ionen', 'ioner', 'irisk', 'ironi',
'irren', 'irret', 'irske', 'irøre', 'isbod', 'isbåd', 'isene', 'isens', 'isfri', 'ishav',
'ising', 'islag', 'islam', 'islom', 'islæg', 'islæt', 'ismer', 'issen', 'isser', 'isses',
'issyl', 'istap', 'ister', 'istid', 'istme', 'ivrer', 'ivrig', "j'ers", "j'ets", 'jaden',
'jager', 'jages', 'jaget', 'jagte', 'jagts', 'jaket', 'jakke', 'jambe', 'jamen', 'jamme',
'jamre', 'jante', 'jappe', 'jarls', 'jaske', 'javel', "jazz'", 'jazze', 'jeans', 'jeeps',
'jeger', 'jeget', 'jenka', 'jente', 'jeres', 'jerns', 'jeton', 'jobbe', 'jodle', 'joges',
'jogge', 'joint', 'joken', 'joker', 'jokes', 'jokke', 'jolle', 'jolre', 'jonen', 'joner',
'jorde', 'jords', 'joule', 'jubel', 'juble', 'judas', 'juice', "juks'", 'julen', 'juler',
'jules', 'julet', 'julis', 'jumbe', 'jumbo', 'jumpe', 'junge', 'junke', 'junta', 'jurys',
'juvel', 'jyden', 'jyder', 'jydes', 'jyske', 'jæger', 'jærpe', 'jærve', 'jærvs', 'jætte',
'jævne', 'jævnt', 'jøden', 'jøder', 'jødes', 'jøkel', "k'ers", "k'ets", 'kabel', 'kable',
'kabys', 'kadet', 'kadre', 'kaffe', 'kagen', 'kager', 'kages', 'kagle', 'kahyt', 'kajak',
'kajen', 'kajer', 'kakao', 'kakis', 'kalas', 'kalde', 'kalds', 'kaldt', 'kalif', 'kalke',
'kalks', 'kalla', 'kalot', 'kalve', 'kalvs', 'kamel', 'kames', 'kamik', 'kamin', 'kamme',
'kampe', 'kamps', 'kamre', 'kamés', 'kanal', 'kande', 'kanel', 'kanen', 'kaner', 'kanes',
'kanin', 'kanon', 'kanos', 'kante', 'kants', 'kanut', 'kapel', 'kaper', 'kapok', 'kappe',
'kapre', 'kapun', 'kaput', 'karak', 'karat', 'karet', 'kargo', 'karle', 'karls', 'karma',
'karme', 'karms', 'karpe', 'karre', 'karry', 'karré', 'karse', 'karsk', 'karte', 'karve',
'kasak', 'kasko', 'kasse', 'kaste', 'kasts', 'kasus', 'katar', 'katte', 'kavaj', 'kaver',
'kebab', 'kedel', 'keder', 'kedes', 'kedet', 'kefir', 'kegle', 'kejse', 'kejte', 'kelim',
'kende', 'kendt', 'kerne', 'kerte', 'kerub', 'ketch', 'ketle', 'keton', 'khans', 'khmer',
'kigge', 'kikke', 'kikse', 'kilde', 'kilen', 'kiler', 'kiles', 'kilet', 'kilos', 'kilte',
'kilts', 'kimen', 'kimer', 'kimes', 'kimet', 'kimse', 'kinds', 'kinin', 'kinke', 'kinos',
'kiosk', 'kippe', 'kirke', 'kisel', 'kiste', 'kitin', 'kitte', 'kives', 'kiwis', 'kjole',
'kjove', 'klage', 'klamt', 'klang', 'klans', 'klaps', 'klare', 'klart', 'klase', 'klask',
'klavr', 'klejn', 'klemt', 'klerk', 'klike', 'klima', 'kline', 'kling', 'klink', 'klint',
'klips', 'klire', 'klits', 'kloak', 'klode', 'klods', 'kloen', 'kloge', 'klogt', 'klone',
'klore', 'klove', 'klovn', 'klovs', 'klubs', 'klude', 'kluds', 'klump', 'klumr', 'kluns',
'klunt', 'klyde', 'klyng', 'klynk', 'klæbe', 'klæde', 'klædt', 'klæge', 'kløen', 'kløer',
'kløet', 'kløft', 'kløgt', "kløs'", 'kløse', 'kløve', 'knage', 'knald', 'knaps', 'knapt',
'knark', 'knarr', 'knase', 'knast', 'knebl', 'knebr', 'knebs', 'knejs', 'knevr', 'knibe',
'kniks', 'knipl', 'knips', 'knirk', 'knitr', 'knive', 'knivs', 'knobe', 'knobs', 'knoen',
'knoer', 'knokl', 'knold', 'knops', 'knort', 'knubs', 'knude', 'knuge', 'knuse', 'knust',
'knyet', 'knyst', 'knæet', 'knægt', 'knæks', 'knæle', 'koala', 'koben', 'koble', 'kobra',
'koden', 'koder', 'kodes', 'kodet', 'koens', 'kofte', 'koger', 'koges', 'kogeø', 'kogge',
'kogle', 'kogte', 'koket', 'kokke', 'kokon', 'kokos', 'kokse', 'kolbe', 'kolde', 'koldt',
'kolik', 'kolli', 'kolon', 'kolos', 'komas', 'komet', 'komik', 'komma', 'komme', 'kondi',
'konen', 'koner', 'kones', 'konet', 'konge', 'konti', 'konto', 'konus', 'kopar', 'kopek',
'kopis', 'kopra', 'koral', 'koran', 'korde', 'koret', 'korne', 'korns', 'korps', 'korse',
'korso', 'korte', 'korts', 'kosak', 'koste', 'kosts', 'koter', 'koøje', 'kraal', 'krads',
'kraft', 'krage', 'kraks', 'krank', 'krans', 'krats', 'krave', 'kravl', 'kravs', 'krebs',
'kreds', 'kreer', 'krems', 'kremt', 'kreol', 'kreti', 'kribl', 'kridt', 'krige', 'krigs',
'krimi', 'krise', 'kroat', 'kroen', 'kroer', 'kroge', 'krogs', 'kroki', 'krone', 'krops',
'krudt', 'kruse', 'krybe', 'krybs', 'krydr', 'kryds', 'krymp', 'krypt', 'kråls', 'kråse',
'kræet', 'kræft', 'kræge', 'kræng', 'krænk', 'kræse', 'kræve', 'krøge', 'krøje', 'kubik',
'kubus', 'kuede', 'kugle', 'kujon', 'kukke', 'kukur', 'kulak', 'kulde', 'kulds', 'kulen',
'kuler', 'kules', 'kulet', 'kulos', 'kulso', 'kults', 'kulør', 'kumme', 'kunde', 'kunne',
'kunst', 'kupes', 'kuple', 'kupon', 'kuppe', 'kupés', 'kuren', 'kurer', 'kures', 'kuret',
'kurie', 'kurre', "kurs'", 'kurve', 'kurvs', 'kurér', 'kuske', 'kusks', 'kusse', 'kutte',
'kvads', 'kvaje', 'kvajs', 'kvalm', 'kvals', 'kvalt', 'kvant', 'kvark', 'kvart', 'kvase',
'kvast', 'kvide', 'kvien', 'kvier', 'kvies', 'kvikt', 'kvilt', 'kvint', 'kvist', 'kvota',
'kvote', 'kvæde', 'kvæge', 'kvægs', 'kvæld', 'kvæle', 'kværk', 'kværn', 'kvæst', 'kybel',
'kyler', 'kylet', 'kymre', 'kyper', 'kyras', 'kyrie', 'kysen', 'kyser', 'kyses', 'kysse',
'kyste', 'kysts', 'kåben', 'kåber', 'kåbes', 'kådes', 'kålen', 'kårde', 'kårer', 'kåres',
'kåret', 'kæben', 'kæber', 'kæbes', 'kæden', 'kæder', 'kædes', 'kædet', 'kæfte', 'kække',
'kælen', 'kæler', 'kælet', 'kælke', 'kælks', 'kælne', 'kælve', 'kæmme', 'kæmpe', 'kæppe',
'kærer', 'kæres', 'kæret', 'kærne', 'kærre', 'kærte', 'kævle', 'køber', 'købes', 'købet',
'købte', 'kødet', 'køens', 'køers', 'køjen', 'køjer', 'køjes', 'kølen', 'køler', 'køles',
'kølet', 'kølig', 'kølle', 'kølne', 'kønne', 'kører', 'køres', 'kørne', 'kørom', 'kørte',
'køter', "l'ers", "l'ets", 'laban', 'labbe', 'label', 'laber', 'labil', 'labre', 'laden',
'lader', 'lades', 'ladet', 'ladte', 'lagde', 'lagen', 'lager', 'lages', 'laget', 'lagre',
'lagte', 'lakaj', 'laker', 'lakke', 'lalle', 'lamas', 'lamel', 'lames', 'lamme', 'lampe',
'lamés', 'lande', 'lands', 'lange', 'langs', 'langt', 'lanse', 'lapin', 'lapis', 'lappe',
"laps'", 'lapse', 'lapsk', 'large', 'largo', 'larme', 'larve', 'laser', 'laset', 'laske',
'lasso', 'laste', 'lasts', 'lasur', 'latex', 'latin', 'lavas', 'laven', 'laver', 'laves',
'lavet', 'lease', 'leben', 'leden', 'leder', 'ledes', 'ledet', 'ledig', 'ledte', 'leens',
'leers', 'lefle', 'legal', 'legat', 'legen', 'leger', 'leget', 'legio', 'lejde', 'lejen',
'lejer', 'lejes', 'lejet', 'lejre', 'lejrs', 'lemma', 'lemme', 'lempe', 'lemur', 'lenet',
'lento', 'leret', 'letal', 'lette', 'lever', 'levet', 'levit', 'levne', 'levns', 'levre',
'liden', 'lider', 'lidet', 'lidse', 'lidte', 'liens', 'liere', 'liers', 'lifte', 'lifts',
'ligas', 'liges', 'liget', 'ligge', 'light', 'ligne', 'likør', 'lilje', 'lilla', 'lille',
'limbo', 'limen', 'limer', 'limes', 'limet', 'limit', 'linde', 'lindr', 'linds', 'linen',
'liner', 'lines', 'linet', 'linje', 'links', 'linse', 'liren', 'lirer', 'lires', 'liret',
'lirke', 'lisen', 'lises', 'liste', 'liter', 'litra', 'liver', 'livet', 'livre', 'livré',
'lobbe', 'lobby', 'lodde', 'lodne', 'lodse', 'loens', 'loers', 'lofts', 'logen', 'loger',
'loges', 'logge', 'logik', 'login', 'logre', 'lokal', 'lokke', 'lokum', 'lomme', 'lomvi',
'longe', 'loope', 'loppe', 'loran', 'loren', 'losse', 'lotte', 'lotto', 'lotus', 'loven',
'lover', 'loves', 'lovet', 'loyal', 'lubbe', 'luden', 'luder', 'ludes', 'ludet', 'luens',
'luffe', 'lufte', 'lufts', 'lugar', 'lugen', 'luger', 'luges', 'luget', 'lugte', 'lugts',
'lukaf', 'lukke', 'lulle', 'lumen', 'lumpe', 'lumre', 'lumsk', 'lunch', 'lunde', 'lunds',
'luner', 'lunes', 'lunet', 'lunge', 'lunke', "luns'", 'lunte', 'lupin', 'luppe', 'lupus',
'luren', 'lurer', 'lures', 'luret', 'lusen', 'luset', 'luske', 'lutre', 'luven', 'lybsk',
'lyden', 'lyder', 'lydes', 'lydig', 'lyene', 'lyets', 'lygte', 'lykke', 'lymfe', 'lynch',
'lyner', 'lynet', 'lynne', 'lyren', 'lyrer', 'lyres', 'lyrik', 'lyser', 'lyses', 'lyset',
'lyske', 'lysne', 'lyste', 'lysår', 'lytte', 'lyver', 'lågen', 'låger', 'låges', 'låget',
'låner', 'lånes', 'lånet', 'lånte', 'låret', 'låsen', 'låser', 'låses', 'låset', 'låste',
'læben', 'læber', 'læbes', 'læder', 'lægds', 'lægen', 'læger', 'læges', 'lægge', 'lægte',
'lækat', 'lække', 'lækre', 'læmme', 'lænds', 'læner', 'lænes', 'lænet', 'længe', 'lænke',
'lænse', 'lærde', 'læren', 'lærer', 'læres', 'lærke', 'lærks', 'lærte', 'læser', 'læses',
'læske', 'læspe', 'læsse', 'læste', 'læsts', 'løber', 'løbes', 'løbet', 'løbsk', 'lødig',
'løfte', 'løget', 'løgne', 'løgns', 'løjen', 'løjer', 'løjes', 'løjet', 'løjpe', 'løkke',
'lønne', 'løsen', 'løser', 'løses', 'løsne', 'løste', 'løven', 'løver', 'løves', 'løvet',
"m'ers", "m'ets", 'macho', 'macon', 'madam', 'maden', 'mader', 'madet', 'mafia', 'magen',
'mager', 'mages', 'magis', 'magma', 'magre', 'magte', 'magts', 'majer', 'majet', 'major',
'makke', 'makro', 'malaj', 'maler', 'malet', 'malke', 'malle', 'malme', 'malms', 'malte',
'malør', 'mamas', 'mambo', 'mande', 'mands', 'maner', 'manga', 'mange', 'mango', 'mangt',
'manis', 'manke', 'manko', 'manna', 'manne', 'manus', 'manér', 'maori', 'mappe', 'march',
'maren', 'marin', 'marks', 'marsk', 'marts', 'marve', 'maser', 'mases', 'maset', 'maske',
'masse', 'maste', 'masts', 'masut', 'match', 'maten', 'matte', 'maven', 'maver', 'maves',
'mavet', 'mayas', 'meden', 'meder', 'medes', 'medet', 'medgå', 'media', 'medie', 'medio',
'megen', 'meget', 'mejer', 'mejet', 'mejse', 'mejsl', 'mekka', 'melde', 'meldt', 'meler',
'melet', 'melis', 'melon', 'memos', 'mened', 'mener', 'menes', 'menet', 'menig', 'mente',
'menus', 'merit', 'merle', 'mesan', 'meson', 'messe', 'meste', 'metal', 'metan', 'meter',
'metra', 'metre', 'metro', 'metyl', 'mezzo', 'miave', 'miden', 'mider', 'mides', 'midje',
'midte', 'midti', 'mikro', 'mikse', 'milde', 'mildt', 'milen', 'miler', 'miles', 'miljø',
'mille', 'milte', 'milts', 'mimer', 'mimes', 'mimet', 'mimik', 'mimre', 'minde', 'minen',
'miner', 'mines', 'minke', 'minks', 'minus', 'minut', 'minør', 'misse', 'miste', 'mitra',
'mitte', 'mjave', 'mjøds', 'mobbe', 'mobil', 'modal', 'model', 'modem', 'moden', 'moder',
'modes', 'modet', 'modgå', 'modig', 'modne', 'modul', 'modus', 'moire', 'moiré', 'mokka',
'mokke', 'molbo', 'molen', 'moler', 'moles', 'molok', 'molær', 'monde', 'monne', 'moppe',
"mops'", 'moral', 'mords', 'morel', 'moren', 'morer', 'moret', 'morse', 'mosen', 'moser',
'moses', 'moset', 'moske', 'moské', 'mosle', 'moste', 'motel', 'motet', 'motiv', 'motor',
'motto', 'mover', 'mudre', 'muffe', 'mufle', 'mufti', 'muger', 'muget', 'mugge', 'mugne',
'muhko', 'mukke', 'mulat', 'mulen', 'muler', 'mules', 'mulig', 'mulkt', 'mulle', 'multi',
'mumie', 'mumle', 'munde', 'munds', 'munke', 'munks', 'muren', 'murer', 'mures', 'muret',
'murre', 'musen', 'muser', 'muses', 'musik', 'musts', 'muzak', 'mynde', 'mynte', 'myose',
'myrde', 'myren', 'myrer', 'myres', 'myrra', 'myrte', 'mysli', 'myten', 'myter', 'mytes',
'måber', 'måbet', 'måden', 'måder', 'mådes', 'mågen', 'måger', 'måges', 'måler', 'måles',
'målet', 'målte', 'måned', 'månen', 'måner', 'månes', 'måsen', 'måses', 'måske', 'måtte',
'mæcen', 'mægle', 'mægte', 'mælde', 'mæler', 'mælet', 'mælke', 'mælks', 'mænds', 'mænge',
'mæren', 'mæres', 'mærke', 'mæske', 'mætte', 'møbel', 'møder', 'mødes', 'mødet', 'mødig',
'mødom', 'mødre', 'mødte', 'møens', 'møers', 'møffe', 'møges', 'møgso', 'mølle', 'mønbo',
'mønje', 'mønne', 'mønsk', 'mønte', 'mønts', 'mørke', 'mørkt', 'mørne', 'møver', 'møvet',
"n'ers", "n'ets", 'nabob', 'nabos', 'nadir', 'nafta', 'nager', 'naget', 'nagle', 'naive',
'naivt', 'najer', 'najet', 'nakke', 'nappa', 'nappe', 'narko', 'narre', 'narve', 'narvs',
'nasal', 'nasse', 'natte', 'natur', 'naver', 'navet', 'navle', 'navne', 'navns', 'nazis',
'nedad', 'neden', 'nedis', 'nedom', 'nedre', 'neger', 'negle', 'negls', 'negre', 'nejer',
'nejet', 'nemme', 'nerie', 'nertz', 'nerve', 'netop', 'nette', 'netto', 'nevet', 'nevøs',
'niche', 'nidsk', 'niece', 'niere', 'niers', 'nikke', 'nippe', 'nipse', 'nisse', 'nital',
'nitid', 'nitte', 'niårs', 'niøje', 'nobel', 'noble', 'noden', 'noder', 'nodes', 'nogen',
'noget', 'nogle', 'nokke', 'noler', 'noles', 'nolet', 'nomen', 'nonet', 'nonne', 'noppe',
'nopre', 'noret', 'norms', 'norne', 'norsk', 'nosse', 'notar', 'notas', 'notat', 'noten',
'noter', 'notes', 'notet', 'nubre', 'nudel', 'nulre', 'nulte', 'numre', 'numse', 'nuppe',
'nurse', 'nusle', 'nusse', 'nutid', 'nuvel', 'nyder', 'nydes', 'nyere', 'nyest', 'nyhed',
'nykke', 'nylig', 'nylon', 'nymfe', 'nynne', 'nyren', 'nyrer', 'nyres', 'nyser', 'nyset',
'nysne', 'nysyn', 'nytid', 'nytte', 'nytår', 'nåden', 'nådig', 'nådle', 'nåede', 'nålen',
'nåles', 'næbes', 'næbet', 'nægte', 'nælde', 'nænne', 'næppe', 'nærer', 'næres', 'næret',
'nærig', 'nærme', 'nærpå', 'næsen', 'næser', 'næses', 'næste', 'næven', 'næver', 'næves',
'nævne', 'nævns', 'nævnt', 'nøden', 'nøder', 'nødet', 'nødig', 'nøfle', 'nøgen', 'nøgle',
'nøgne', 'nøjes', 'nøkke', 'nøler', 'nølet', 'nørde', 'nørke', 'nørkl', "o'ers", "o'ets",
'oasen', 'oaser', 'oases', 'oblat', 'oblik', 'oboen', 'oboer', 'obols', 'ocean', 'odden',
'odder', 'oddes', 'odens', 'oders', 'odiøs', 'odørs', 'offer', 'ofrer', 'ofres', 'ofret',
'okapi', 'okker', 'oksen', 'okser', 'okses', 'okset', 'oktan', 'oktav', 'oktet', 'olden',
'olien', 'olier', 'olies', 'oliet', 'olymp', 'ombud', 'ombuk', 'ombyg', 'omdøb', 'omega',
'omegn', 'omend', 'omgav', 'omgik', 'omgiv', 'omgås', 'omkom', 'omlyd', 'omløb', 'omsat',
'omtyd', 'omvej', 'onani', 'onder', 'ondes', 'ondet', 'onkel', 'onyks', 'opals', 'opart',
'opbag', 'opbud', 'opbyg', 'opdag', 'opera', 'opfat', 'opfed', 'opfej', 'opfør', 'opgav',
'opgiv', 'opgør', 'ophav', 'ophed', 'ophob', 'ophug', 'ophæv', 'ophøj', 'ophør', 'opiat',
'opium', 'opkog', 'opkøb', 'oplad', 'oplag', 'oplev', 'opliv', 'oplod', 'oplys', 'oplæg',
'opløb', 'opløs', 'opnår', 'opnås', 'opofr', 'opret', 'oprik', 'opråb', 'oprør', 'opsat',
'opslå', 'opstå', 'opsug', 'opsyn', 'opsøg', 'optag', 'optik', 'optog', 'optur', "opus'",
'opvej', 'opæde', 'opøve', 'orale', 'orden', 'ordet', 'ordne', 'ordre', 'organ', 'orgel',
'orgie', 'orkan', 'orker', 'orket', 'orkis', 'orlon', 'orlov', 'ormen', 'ormes', 'ornat',
'ornen', 'orner', 'ornes', 'oscar', 'osman', 'osten', 'ostes', 'ostet', 'otium', 'otter',
'ounce', 'ovale', 'oveni', 'overs', 'ovnen', 'ovnes', 'oxids', 'oxyds', "p'ers", "p'ets",
'p-hus', 'pacer', 'padde', 'padle', 'paffe', 'pagaj', 'pagen', 'pagts', 'paket', 'pakis',
'pakke', 'palen', 'palet', 'palle', 'palme', 'palpe', 'palæs', 'pampa', 'panda', 'pande',
'panel', 'panik', 'pante', 'pants', 'panty', 'papas', 'papil', 'papir', 'pappe', 'parat',
'parer', 'paria', 'parka', 'parks', 'parre', 'parti', 'parts', 'party', 'paryk', 'pasha',
'passe', 'passé', 'pasta', 'pater', 'pates', 'patio', 'patos', 'patte', 'patés', 'pauke',
'pause', 'paven', 'paver', 'paves', 'peber', 'pebet', 'pebre', 'pedal', 'pedel', 'pegen',
'peger', 'peget', 'pejle', 'pelse', 'pence', 'penge', 'penis', 'penne', 'penny', 'pensa',
'peppe', 'perle', 'perse', 'pesos', 'petit', 'pette', 'piano', 'piben', 'piber', 'pibes',
'pibet', 'pible', 'piffe', 'pifte', 'pigen', 'piger', 'piges', 'piget', 'pigge', 'pikes',
'pikke', 'pikés', 'pilaf', 'pilen', 'piles', 'pilke', 'pilks', 'pille', 'pilot', 'pimpe',
'pinde', 'pinds', 'pinen', 'piner', 'pines', 'pings', 'pinje', 'pinol', 'pinse', 'pinup',
'pippe', 'pique', 'piqué', 'pirat', 'pirke', 'pirks', 'pirog', 'pirol', 'pirre', 'piske',
'pisse', 'pists', 'piver', 'pivot', 'pixel', 'pizza', 'pjalt', 'pjank', 'pjask', 'pjece',
'pjevs', "pjus'", 'pjusk', 'pjæve', 'plade', 'plads', 'plage', 'plags', 'plaid', 'plane',
'plank', 'plano', 'plans', 'plant', 'plapr', 'plask', 'plast', 'plebs', 'pleje', 'plejl',
'pleti', 'pligt', 'plint', 'plire', 'plove', 'plovs', 'pludr', 'plump', 'plumr', 'plums',
'plæne', 'pløje', 'pløre', 'poche', 'poden', 'poder', 'podes', 'podet', 'poesi', 'poets',
'point', 'poise', 'pokal', 'poker', 'polak', 'polar', 'polen', 'poler', 'polet', 'polio',
'polka', 'polos', 'polsk', 'polyp', 'polær', 'pomet', 'ponto', 'ponys', 'pools', 'poppe',
'poren', 'porer', 'pores', 'poret', 'porno', 'porre', 'porse', 'porte', 'porto', 'ports',
'porøs', 'posen', 'poser', 'poses', 'poset', 'poste', 'posts', 'posør', 'poten', 'poter',
'potes', 'potte', 'power', 'pragt', 'praje', 'prajs', 'prale', 'prang', 'prate', 'prent',
"pres'", 'prima', 'prime', 'primo', 'prims', 'prins', 'print', 'prior', "pris'", 'prise',
'prods', 'props', 'prosa', 'provo', 'prunk', 'prust', 'pryde', 'prygl', 'præer', 'præet',
'præge', 'prægs', 'præke', 'præst', 'prøve', 'psyke', 'pucks', 'puden', 'puder', 'pudes',
'pudre', "puds'", 'pudse', 'puffe', 'puger', 'puget', 'pukke', 'pukle', 'pulje', 'pulle',
'pulse', 'pulte', 'pults', 'pumas', 'pumpe', 'pumps', 'punch', 'punds', 'punge', 'pungs',
'punks', 'punkt', 'pupil', 'puppe', 'pures', 'purke', 'purks', 'purre', 'purse', 'purés',
'pusle', 'puste', 'pusts', 'putte', 'pygmæ', 'pylre', 'pynte', 'pynts', 'pyton', 'påbud',
'pådut', 'pågår', 'påhit', 'påhør', 'påkær', 'pålæg', 'påløb', 'påpeg', 'påsat', 'påser',
'påske', 'påstå', 'påsyn', 'påtag', 'påtår', 'pægle', 'pælen', 'pæles', 'pæons', 'pæren',
'pærer', 'pæres', 'pøbel', 'pølle', 'pølse', 'pønse', "q'ers", "q'ets", 'quilt', "r'ers",
"r'ets", 'rabat', 'rabbi', 'rable', 'racen', 'racer', 'races', 'racet', 'radar', 'raden',
'rader', 'radio', 'radix', 'radon', 'radså', 'rafle', 'rafte', 'ragas', 'rager', 'raget',
'raids', 'rajah', 'raket', 'rakke', 'rakle', 'rakte', 'ralle', 'rally', 'ramle', 'ramme',
'rampe', 'ramte', 'ranch', 'rande', 'rands', 'randt', 'raner', 'ranet', 'range', 'rangs',
'ranke', 'rapid', 'rappe', 'rapse', 'rasen', 'raser', 'raset', 'raske', 'raskt', 'rasle',
'raspe', 'raste', 'rasts', 'rasur', 'raten', 'rater', 'rates', 'ratio', 'raver', 'ravet',
'ravne', 'ravns', 'rayon', 'rebel', 'reber', 'rebes', 'rebet', 'rebus', 'reces', 'recks',
'redde', 'reden', 'reder', 'redes', 'redet', 'redte', 'reelt', 'regal', 'regel', 'reger',
'regne', 'rejen', 'rejer', 'rejes', 'rejfe', 'rejfs', 'rejse', 'rejst', 'rekyl', 'remis',
'remme', 'remse', 'rende', 'rendt', 'renen', 'rener', 'rense', 'rente', 'reols', 'repos',
'rests', 'retor', 'rette', 'retur', 'reven', 'revet', 'revir', 'revle', 'revne', 'revse',
'revys', 'ribbe', "ribs'", 'riden', 'rider', 'rides', 'ridse', 'ridts', 'rifts', 'rigel',
'riger', 'riges', 'riget', 'rigge', 'rigid', 'rigle', 'rille', 'rimen', 'rimer', 'rimes',
'rimet', 'rimpe', 'rimte', 'rinde', 'ringe', 'rings', 'rinke', 'rippe', 'risen', 'rises',
'risle', 'rispe', 'riste', 'rists', 'ritte', 'ritus', 'rival', 'riven', 'river', 'rives',
'roben', 'rober', 'robes', 'robot', 'robåd', 'rocke', 'rocks', 'roden', 'rodeo', 'roder',
'rodes', 'rodet', 'roede', 'roens', 'roere', 'roers', 'roker', 'rokke', 'rolig', 'rolle',
'roman', 'rombe', 'romer', 'rommy', 'rondo', 'roret', 'rosen', 'roser', 'roses', 'roset',
'rosin', 'roste', 'roter', 'rotor', 'rotte', 'rotur', 'rouge', 'rover', 'rovet', 'rovse',
'royal', 'rubbe', 'rubel', 'rubin', 'ruche', 'rudel', 'ruden', 'ruder', 'rudes', 'rudet',
'rufle', 'rugby', 'ruger', 'ruget', 'ruins', 'rulam', 'rulle', 'rumba', 'rumle', 'rumme',
'rumpe', 'runde', 'rundt', 'runen', 'runer', 'runes', 'runge', 'rupis', 'rural', 'rusen',
'ruser', 'ruses', 'ruske', 'ruste', 'ruten', 'ruter', 'rutes', 'rutsj', 'rutte', 'ryaen',
'ryaer', 'rydde', 'ryger', 'rygge', 'rygte', 'rykke', 'rylen', 'ryler', 'ryles', 'rynke',
'rypen', 'ryper', 'rypes', 'ryste', 'rytme', 'råben', 'råber', 'råbes', 'råbet', 'råbte',
'råbuk', 'råder', 'rådes', 'rådet', 'rådig', 'rådne', 'rådyr', 'råens', 'råers', 'rågen',
'råger', 'råges', 'råhed', 'råhus', 'råkid', 'rålam', 'rånok', 'råtræ', 'ræbet', 'række',
'rælig', 'rænke', 'ræret', 'ræser', 'ræset', 'ræson', 'ræves', 'røber', 'røbet', 'rødme',
'rødne', 'røfle', 'røgen', 'røger', 'røges', 'røget', 'røgte', 'rømme', 'rønne', 'rører',
'røres', 'røret', 'rørig', 'rørte', 'røræg', 'røsen', 'røser', 'røses', 'røsti', 'røsts',
'røven', 'røver', 'røves', 'røvet', "s'ers", "s'ets", 'sabel', 'sable', 'sadel', 'sadhu',
'sadle', 'safir', 'safte', 'safts', 'sagas', 'sagde', 'sagen', 'sager', 'sagns', 'sagte',
'sakke', "saks'", 'sakse', 'salat', 'saldo', 'salen', 'salep', 'sales', 'salgs', 'salig',
'salme', 'salon', 'salpe', 'salsa', 'salte', 'salto', 'salts', 'salut', 'salve', 'salær',
'samba', 'sambo', 'samen', 'samer', 'sames', 'samle', 'samme', 'samsk', 'samsø', 'sande',
'sandt', 'saner', 'sange', 'sangs', 'sanke', 'sanse', 'sarge', 'sargs', 'saris', 'sarte',
'satan', 'satin', "sats'", 'satse', 'satte', 'satyr', 'sauce', 'sauna', 'saven', 'saver',
'saves', 'savet', 'savle', 'savne', 'savns', 'saxen', 'saxer', 'scene', 'scoop', 'score',
'sedan', 'sedes', 'seede', 'seere', 'seers', 'segle', 'segls', 'segne', 'sejen', 'sejer',
'sejes', 'sejle', 'sejls', 'sejre', 'sejrs', 'sejse', 'sekel', "seks'", 'sekst', 'sekts',
'selen', 'seler', 'seles', 'selve', 'semit', 'senat', 'sende', 'sendt', 'senen', 'sener',
'senes', 'senet', 'senge', 'sengs', 'senil', 'sepia', 'seraf', 'serge', 'serie', 'serum',
'serve', 'serøs', 'sesam', 'sexet', 'sfære', 'shahs', 'sheik', 'shiit', 'shine', 'shows',
'shunt', 'siben', 'sidde', 'siden', 'sider', 'sides', 'sidse', 'sidst', 'siede', 'siens',
'siers', 'sifon', 'sigel', 'siger', 'siges', 'sigma', 'signe', 'sigte', 'sikhs', 'sikke',
'sikre', 'silde', 'silds', 'silen', 'siler', 'silet', 'silke', 'silos', 'silur', 'simle',
'simre', 'simse', 'sinde', 'sinds', 'sinke', 'sinus', 'sioux', 'sippe', 'sirat', 'sirer',
'siret', 'sirts', 'sirup', 'sisal', 'sitar', 'sitre', 'siven', 'siver', 'sives', 'sivet',
'sjals', 'sjask', 'sjavs', 'sjofl', 'sjosk', 'sjove', 'sjovt', 'sjuft', 'sjusk', 'sjækl',
'sjæle', 'sjæls', 'skabe', 'skabs', 'skabt', 'skade', 'skaft', 'skage', 'skakt', 'skala',
'skalk', 'skalp', 'skals', 'skalt', 'skank', 'skare', 'skarn', 'skarp', 'skarv', 'skats',
'skave', 'skede', 'skeen', 'skeer', 'skeje', 'skejs', 'skele', 'skeln', 'skels', 'skema',
'skete', 'skibe', 'skibs', 'skide', 'skids', 'skidt', 'skift', 'skilt', 'skiml', 'skimt',
'skind', 'skins', 'skive', 'skjul', 'skoen', 'skogr', 'skold', 'skole', 'skose', 'skove',
'skovl', 'skovs', 'skrab', 'skral', 'skrap', 'skrat', 'skred', 'skreg', 'skrev', 'skrig',
'skrin', 'skriv', 'skrog', 'skrot', 'skrub', 'skrud', 'skrue', 'skruk', 'skrus', 'skrut',
'skryd', 'skrål', 'skrån', 'skrås', 'skråt', 'skræk', 'skræl', 'skræp', 'skræv', 'skrød',
'skude', 'skudt', 'skuer', 'skues', 'skuet', 'skule', 'skulk', 'skunk', 'skure', 'skurk',
'skurs', 'skurv', 'skvat', 'skvis', 'skvæt', 'skyde', 'skyen', 'skyer', 'skyet', 'skyld',
'skynd', 'skyts', 'skåle', 'skåls', 'skåne', 'skårs', 'skæft', 'skægt', 'skæld', 'skælm',
'skæls', 'skælv', 'skæmt', 'skænd', 'skæne', 'skænk', 'skære', 'skærf', 'skærm', 'skærs',
'skærv', 'skæve', 'skævt', 'skøde', 'skøds', 'skøge', 'skønt', 'skøre', 'skørt', 'sladr',
'slags', 'slagt', 'slang', 'slank', 'slant', 'slapt', 'slask', 'slave', 'slems', 'slemt',
'slesk', 'sleve', 'slevs', 'slibe', 'slide', 'slids', 'slidt', 'slige', 'sligt', 'slime',
'slips', 'slisk', 'slots', 'slubr', 'slude', 'sluge', 'slugt', "sluk'", 'slukn', 'slump',
'slumr', 'slurk', 'sluse', 'slyng', 'slåen', 'slåer', 'slået', 'slæbe', 'slæbs', 'slæbt',
'slæde', 'slægt', 'slæng', 'sløjd', 'sløje', 'sløjf', 'sløjt', 'sløre', 'sløse', 'sløve',
'sløvt', 'smage', 'smags', 'smagt', 'smalt', 'smart', 'smash', 'smask', 'smede', 'smeds',
'smelt', 'smide', 'smidt', 'smige', 'smigs', 'smile', 'smils', 'smisk', 'smock', 'smovs',
"sms'e", 'smuds', 'smugl', 'smukt', 'smuld', 'smule', 'smult', 'smurt', 'smyge', 'småby',
'smæde', 'smægt', 'smæld', 'smøge', 'smøgs', 'smøle', 'smøls', 'smøre', 'smørs', 'snack',
'snage', 'snaps', 'snare', 'snart', 'snask', 'snavs', 'sneen', 'sneet', 'snegl', 'snerp',
'snert', 'snese', 'snige', 'snild', 'snipe', 'snips', 'snits', 'snive', 'snoet', 'snoge',
'snogs', 'snold', 'snore', 'snork', 'snors', 'snude', 'snuer', 'snuet', 'snuse', 'snusk',
'snyde', 'snyds', 'snydt', 'snylt', 'snære', 'snært', 'snøft', 'snøre', 'snøvl', 'snøvs',
'sober', 'sobre', 'soder', 'sodet', 'soens', 'sofas', 'sogne', 'sogns', 'soire', 'soiré',
'solde', 'solds', 'solen', 'soler', 'soles', 'solet', 'solgt', 'solid', 'solos', 'solur',
'solår', 'somme', 'somre', 'sonar', 'sonde', 'soner', 'sonet', 'sonor', 'soppe', 'sorgs',
'sorte', 'sorts', 'soten', 'soter', 'sound', 'sover', 'sovet', 'sovse', 'spade', 'spage',
'spagt', 'spalt', 'spand', 'spang', 'spank', 'spant', 'spare', 'spark', 'spars', 'speed',
'spege', 'spejl', 'spelt', 'sperm', "spex'", 'spids', 'spild', 'spile', 'spils', 'spind',
'spink', 'spion', 'spire', 'spirs', 'spise', 'spist', 'spjæt', 'splid', 'split', 'spole',
'spore', 'spors', 'sport', 'spots', 'spove', 'sprak', 'spray', 'sprit', 'sprog', 'sprut',
'spryd', 'spræl', 'spræt', 'sprød', 'spule', 'spuns', 'spurt', 'spurv', 'spyds', 'spået',
'spåns', 'spæde', 'spædt', 'spæge', 'spænd', 'spæne', 'spærs', 'spøge', 'spøjs', 'spørg',
'squaw', 'stabe', 'stabs', 'stade', 'stads', 'stage', 'stags', 'stald', 'stamp', 'stand',
'stang', 'stank', 'start', 'stase', 'stats', 'stave', 'stavn', 'stavs', 'steak', 'stede',
'steds', 'stedt', 'stege', 'stegs', 'stegt', 'stejl', 'stele', 'stels', 'stemt', 'stene',
'stens', 'stevs', 'stien', 'stier', 'stift', 'stige', 'stile', 'stilk', 'still', 'stils',
'stime', 'stiml', 'stind', 'sting', 'stink', 'stive', 'stivn', 'stjal', 'stofs', 'stola',
'stole', 'stolp', 'stols', 'stolt', 'store', 'stork', 'storm', 'stort', 'story', 'stose',
'stovt', 'straf', 'stram', 'stred', 'streg', 'strib', 'strid', 'strik', 'strop', 'strut',
'stryg', 'strås', 'stræb', 'stræk', 'strøg', 'strøm', 'strør', 'strøs', 'stude', 'studs',
'stuen', 'stuer', 'stues', 'stuks', 'stump', 'stumt', 'stund', 'stunt', 'stuts', 'stuve',
'stygt', 'stylt', 'styne', 'styre', 'styrk', 'styrs', 'styrt', 'ståbi', 'stået', 'ståls',
'stænk', 'stære', 'stærk', 'stærs', 'stævn', 'støbe', 'støbt', 'støde', 'støds', 'stødt',
'støje', 'støre', 'størs', 'støve', 'støvl', 'støvs', 'suder', 'sudle', 'suger', 'suges',
'suget', 'suite', 'sujet', 'sukat', 'sukke', 'sukre', 'sulen', 'suler', 'sules', 'sulet',
'sulfo', 'sulky', 'sulte', 'sumak', 'summe', 'sumpe', 'sumps', 'sunde', 'sunds', 'super',
'suppe', 'surfe', 'surre', 'susen', 'suser', 'suset', 'sushi', 'sutte', 'sutur', 'svada',
'svage', 'svagt', 'svaje', 'svajs', 'svale', 'svamp', 'svane', 'svang', 'svans', 'svare',
'svars', 'svede', 'sveds', 'svedt', 'svejf', 'svejs', 'svend', 'svide', 'svien', 'svier',
'svies', 'svige', 'svigt', 'svime', 'svind', 'svine', 'sving', 'svins', 'svips', 'svire',
'svirp', 'svits', 'svovl', 'svulm', 'svælg', 'sværd', 'svære', 'sværm', 'sværs', 'svært',
'svæve', 'svævs', 'svøbe', 'svøbs', 'svøbt', 'swing', 'syden', 'syder', 'sydes', 'sydet',
'sydom', 'sydpå', 'syede', 'syere', 'syers', 'sygen', 'syger', 'syges', 'sygne', 'sylen',
'syles', 'sylfe', 'sylte', 'synde', 'synds', 'syner', 'synes', 'synet', 'synge', 'synke',
'synsk', 'synål', 'syren', 'syrer', 'syres', 'syret', 'syrne', 'sysle', 'sytøj', 'syver',
'syvti', 'sådan', 'såede', 'sågar', 'sålen', 'såler', 'såpas', 'sårer', 'såres', 'såret',
'såsom', 'såten', 'såter', 'såvel', 'sæben', 'sæber', 'sæbes', 'sæbet', 'sæden', 'sæder',
'sædes', 'sædet', 'sække', 'sælen', 'sæler', 'sælge', 'sænke', 'sænks', 'særbo', 'særke',
'særks', 'sæson', 'sæter', 'sætte', 'søber', 'søbet', 'søder', 'sødet', 'sødme', 'søens',
'søers', 'søgen', 'søger', 'søges', 'søgte', 'søjle', 'søler', 'sølet', 'sølje', 'sølle',
'sølvs', 'sømil', 'sømme', 'søren', 'søret', 'sørge', 'sørme', 'søsat', 'søsyg', 'søulk',
'søvej', "t'ers", "t'ets", 'tabel', 'taber', 'tabes', 'tabet', 'tabte', 'tabus', 'tacos',
'tafts', 'tager', 'tages', 'taget', 'tajga', 'takke', 'takle', 'taksi', 'takst', 'takts',
'talar', 'talen', 'taler', 'tales', 'talje', 'talks', 'talon', 'talte', 'tamil', 'tamme',
'tampe', 'tamps', 'tande', 'tands', 'tanga', 'tange', 'tango', 'tangs', 'tanke', 'tanks',
'tante', 'tapen', 'tapet', 'tapir', 'tappe', 'tapre', 'taras', 'tarer', 'tarif', 'tarme',
'tarms', 'tarok', 'tarse', 'taske', 'taste', 'tasts', 'tatar', 'tater', 'taven', 'taver',
'tavet', 'tavle', 'tavse', 'tavst', 'taxas', 'taxie', 'tazet', 'teams', "tee's", 'teens',
'teers', 'tegne', 'tegns', 'teint', 'teist', 'tejne', 'tejst', 'tekno', 'tekop', 'tekst',
'telex', 'telte', 'telts', 'temas', 'tempi', 'tempo', 'tenen', 'tenes', 'tenor', 'teori',
'terme', 'terms', 'terne', 'terpe', 'terre', "ters'", 'terts', 'tesen', 'teser', 'teses',
'tesis', 'teske', 'teste', 'tests', 'teten', 'thais', 'thybo', 'tiara', 'tiden', 'tider',
'tiere', 'tiers', 'tiest', 'tiger', 'tigge', 'tigre', 'tikke', 'tilde', 'tilgå', 'tilse',
'tilså', 'tilte', 'timen', 'timer', 'times', 'timid', 'tinde', 'tinge', 'tings', 'tinte',
'tipis', 'tippe', "tips'", 'tirre', 'tiske', 'tisse', 'tital', 'titan', 'titel', 'titte',
'tiårs', 'tiøre', 'tjald', 'tjalk', 'tjans', 'tjavs', 'tjene', 'tjent', 'tjept', 'tjurs',
'tjære', 'tjørn', 'toast', 'tobak', 'tobis', 'toddy', 'toere', 'toers', 'tofte', 'togas',
'toges', 'toget', 'togts', 'tolde', 'tolke', 'tolks', 'tomat', 'tomle', 'tomme', 'tomts',
'tonal', 'tonen', 'toner', 'tones', 'tonet', 'tonic', 'topas', 'toppe', 'topti', 'toras',
'tordn', 'torne', 'torns', 'torps', 'torsk', 'torso', 'torve', 'torvs', 'tosse', 'total',
'totem', 'totne', 'totte', 'totur', 'touch', 'toupe', 'toupé', 'touts', 'tover', 'toves',
'tovet', 'toårs', 'toøre', 'trace', 'tracé', 'tragt', 'trake', 'traké', 'tramp', 'trane',
'trang', 'trask', 'trave', 'travl', 'travs', 'trawl', 'treer', 'trema', 'trend', 'trens',
'treti', 'trevl', 'trias', 'trick', 'triml', 'trind', 'trine', 'trins', 'triol', 'trios',
'trist', 'trivi', 'triør', 'trods', 'troen', 'troet', 'trofæ', 'trokl', 'trokæ', 'trold',
'trone', 'trope', 'trops', 'truck', 'truer', 'truet', 'trugs', 'trumf', 'trust', 'trygl',
'trygt', 'trykt', 'tryne', 'tråde', 'tråds', 'trådt', 'træde', 'træer', 'træet', 'træge',
'trægt', 'træls', 'træne', 'træsk', 'trævl', 'trøje', 'trøst', 'tsars', 'tubas', 'tuben',
'tuber', 'tubes', 'tuden', 'tuder', 'tudes', 'tudet', 'tudse', 'tuens', 'tuers', 'tugte',
'tujas', 'tukan', 'tulle', 'tulre', 'tumbl', 'tumle', 'tumor', 'tuner', 'tunet', 'tunge',
'tungt', 'turbo', 'turde', 'turen', 'turer', 'tures', 'turet', 'turne', 'turné', 'tusch',
'tuske', 'tusse', 'tutor', 'tutte', 'tutti', 'tvang', 'tvebo', 'tvege', 'tvine', 'tvist',
'tvivl', 'tvære', 'tværs', 'tvært', 'tweed', 'twill', 'twist', 'tyder', 'tydet', 'tyfon',
'tyfus', 'tygge', 'tykke', 'tykne', 'tylle', 'tylvt', 'tynde', 'tyndt', 'tynge', 'typen',
'typer', 'types', 'tyran', 'tyren', 'tyrer', 'tyres', 'tyret', 'tyrks', 'tyske', 'tysks',
'tysse', 'tyste', 'tyven', 'tyver', 'tyves', 'tyvte', 'tåben', 'tåber', 'tåbes', 'tågen',
'tåger', 'tåget', 'tåled', 'tåler', 'tåren', 'tårer', 'tåres', 'tårne', 'tårns', 'tæfte',
'tæfts', 'tægen', 'tæger', 'tæges', 'tække', 'tælle', 'tæmme', 'tænde', 'tændt', 'tænke',
'tænkt', 'tæppe', 'tærer', 'tæres', 'tæret', 'tærsk', 'tærte', 'tæske', 'tætne', 'tætte',
'tæven', 'tæver', 'tæves', 'tævet', 'tøffe', 'tøfle', 'tøjer', 'tøjet', 'tøjle', 'tøjre',
'tøjrs', 'tøjte', 'tømme', 'tømre', 'tømte', 'tønde', 'tøris', 'tørke', 'tørne', 'tørns',
'tørre', 'tørst', 'tøsen', 'tøser', 'tøset', 'tøsne', 'tøven', 'tøver', "u'ers", "u'ets",
'uanet', 'ublid', 'ubåde', 'ubåds', 'udarm', 'udbad', 'udben', 'udbor', 'udbud', 'udbul',
'udbyg', 'uddød', 'uddør', 'udelt', 'udfor', 'udfri', 'udgav', 'udgik', 'udgiv', 'udgås',
'udgør', 'udhal', 'udhug', 'udhul', 'udhus', 'udhæv', 'udjag', 'udkig', 'udkik', 'udkog',
'udkom', 'udkår', 'udlad', 'udlej', 'udlov', 'udlud', 'udlyd', 'udlån', 'udlæg', 'udløb',
'udløs', 'udmaj', 'udnyt', 'udpeg', 'udpos', 'udriv', 'udrug', 'udråb', 'udrøj', 'udsat',
'udsav', 'udset', 'udson', 'udspy', 'udstå', 'udsug', 'udsyn', 'udsyr', 'udsæd', 'udsæt',
'udtag', 'udtap', 'udtog', 'udtur', 'udtyd', 'udtær', 'udvej', 'udvid', 'udvis', 'udyds',
'udyrs', 'udånd', 'udæsk', 'udøbt', 'udørk', 'udøse', 'udøve', 'uegal', 'uenig', 'ufiks',
'ufine', 'ufred', 'ufødt', 'uføre', 'ugens', 'ugers', 'ugift', 'uglen', 'ugler', 'ugles',
'ugræs', 'uheld', 'uhyre', 'uhørt', 'ujævn', 'uklar', 'uklog', 'uland', 'ulave', 'ulden',
'uldet', 'uldne', 'ulige', 'ulken', 'ulkes', 'ultra', 'ulven', 'ulves', 'ulyst', 'ulærd',
'ulæst', 'uløst', 'umage', 'umbra', 'umild', 'under', 'undes', 'undgå', 'undre', 'undse',
'undså', 'undte', 'ungen', 'unger', 'unges', 'ungmø', 'unika', 'unikt', 'union', 'unode',
'unsen', 'unser', 'unses', 'unåde', 'urban', 'urede', 'uredt', 'ureel', 'urene', 'urent',
'urets', 'urger', 'urkok', 'urnen', 'urner', 'urnes', 'uroen', 'uroer', 'urrem', 'urten',
'urter', 'urtid', 'urund', 'uræmi', 'urørt', 'usagt', 'usand', 'usete', 'usket', 'uskik',
'uskøn', 'ussel', 'usund', 'utals', 'utalt', 'utide', 'uting', 'utopi', 'utryg', 'utugt',
'uvane', 'uvant', 'uvejr', 'uvens', 'uvist', 'uvorn', 'uåret', 'uægte', 'uøvet', "v'ers",
"v'ets", 'vabel', 'vable', 'vaden', 'vader', 'vades', 'vadet', 'vager', 'vagts', 'vajer',
'vajet', 'vakle', 'vakse', 'vakte', 'valen', 'valgs', 'valgt', 'valid', 'valke', 'valle',
'valme', 'valse', 'valsk', 'valte', 'valør', 'vampe', 'vamps', 'vande', 'vandr', 'vands',
'vandt', 'vanen', 'vaner', 'vanes', 'vange', 'vangs', 'vanke', 'vanry', 'vante', 'vanær',
'varan', 'varde', 'varen', 'varer', 'vares', 'varet', 'varia', 'varig', 'varme', 'varmt',
'varpe', 'varsl', 'varte', 'varyl', 'vasal', 'vasen', 'vaser', 'vases', 'vaske', 'vasks',
'vater', 'vatre', 'vedet', 'vedgå', 'veens', 'veers', 'veget', 'vegne', 'vejen', 'vejer',
'vejes', 'vejet', 'vejle', 'vejre', 'vejrs', 'veksl', 'velan', 'velar', 'velin', 'velær',
'vemod', 'vende', 'vendt', 'venen', 'vener', 'venes', 'vente', 'venøs', 'verfe', 'verpe',
"vers'", 'verst', 'verve', 'vesir', 'veste', 'vests', 'vetoe', 'viben', 'viber', 'vibes',
'vidde', 'viden', 'video', 'vides', 'vidje', 'vidne', 'vidst', 'vifte', 'vigen', 'viger',
'viges', 'vigte', 'vigør', 'vikar', 'vikke', 'vikle', 'vikse', 'vilde', 'vildt', 'vilje',
'villa', 'ville', 'vimre', 'vimse', 'vinca', 'vinde', 'vinds', 'vinen', 'vines', 'vinge',
'vinke', 'vinks', 'vinyl', 'vinøs', 'viola', 'viols', 'vippe', 'virak', 'viril', 'virke',
'virre', 'virus', 'visen', 'viser', 'vises', 'visir', 'visit', 'viske', 'visne', 'visse',
'viste', 'visum', 'visér', 'vital', 'vivat', 'vlies', 'vodka', 'vogne', 'vogns', 'vogte',
'voila', 'voile', 'vokal', 'vokse', 'volde', 'volds', 'voldt', 'volfe', 'volte', 'volut',
'vorde', 'vores', 'vorte', 'votum', 'voven', 'vover', 'voves', 'vovet', 'vovse', 'vrage',
'vrags', 'vralt', 'vrang', 'vrede', 'vredt', 'vride', 'vrist', 'vråle', 'vræle', 'vræls',
'vræng', 'vrøvl', 'vugge', 'vulst', 'vunde', 'vuppe', 'vupti', 'vyets', 'våben', 'vådte',
'vågen', 'våger', 'våges', 'våget', 'vågne', 'vånde', 'våren', 'våret', 'våser', 'våset',
'væbne', 'vædde', 'væden', 'væder', 'vædet', 'vædre', 'vægen', 'væger', 'væges', 'vægge',
'vægre', 'vægte', 'vægts', 'vægur', 'vække', 'vækst', 'vælde', 'vælge', 'vælig', 'vælsk',
'vælte', 'vænge', 'vænne', 'værdi', 'væren', 'været', 'værft', 'værge', 'værke', 'værks',
'værne', 'værns', 'værre', 'værst', 'værts', 'væsel', 'væsen', 'væske', 'vætte', 'væven',
'væver', 'væves', 'vævet', 'vævre', 'vølve', "w'ers", "w'ets", 'wagon', 'whist', 'wiren',
'wirer', "x'ers", "x'ets", 'xenon', "y'ers", "y'ets", 'yacht', 'yatzy', 'ydede', 'ydere',
'yders', 'ydmyg', 'ydrer', 'ydres', 'ydret', 'ymere', 'ymers', 'ympen', 'ymper', 'ympes',
'ympet', 'ymter', 'ymtet', 'ynder', 'yndet', 'yndig', 'yngel', 'yngle', 'yngre', 'yngst',
'ynker', 'yogis', 'yoyos', 'ypern', 'yppes', 'yppig', 'yrker', 'yrkes', 'yrket', 'ytrer',
'ytres', 'ytret', "z'ers", "z'ets", 'zambo', 'zappe', 'zaren', 'zarer', 'zebra', 'zebus',
'zefyr', 'zelot', 'zenit', 'zinks', 'zloty', 'zobel', 'zombi', 'zonen', 'zoner', 'zones',
'zooen', 'zooer', 'zoome', 'zooms', 'zulus', 'zweck', 'ågots', 'åland', 'åmund', 'århus',
'øjlug', 'øland', 'ølgod', 'ørbæk', 'ørnis', 'øssur', 'østen', 'øster', 'øvlis', "å'ers",
"å'ets", 'åbent', 'åbner', 'åbnes', 'åbnet', 'ådale', 'ådsel', 'åerne', 'ågene', 'ågets',
'ålene', 'ålens', 'åløbs', 'ånden', 'ånder', 'åndes', 'åndet', 'åndig', 'årbog', 'årene',
'årens', 'årers', 'årets', 'årige', 'åring', 'årlig', 'årsag', 'årsko', 'årtis', 'åsene',
'åsted', 'åsyns', "æ'ers", "æ'ets", 'æbler', 'æbles', 'æblet', 'ædelt', 'ædens', 'ædere',
'æderi', 'æders', 'ædets', 'æggen', 'ægger', 'ægges', 'ægget', 'ægide', 'ægten', 'ægter',
'ægtes', 'ægtet', 'ælder', 'ældet', 'ældre', 'ældst', 'ælter', 'æltes', 'æltet', 'ænder',
'ændre', 'ængst', 'ænser', 'ænset', 'æonen', 'æoner', 'æraen', 'æraer', 'ærbar', 'ærede',
'ærens', 'ærers', 'ærgre', 'ærlig', 'ærmer', 'ærmes', 'ærmet', 'ærten', 'ærter', 'ærøbo',
'ærøsk', 'æsels', 'æsken', 'æsker', 'æskes', 'æsket', 'æsler', 'æslet', 'æstet', 'ætere',
'æters', 'ætser', 'ætset', 'ætyls', 'ævler', 'ævlet', 'ævred', "ø'ers", "ø'ets", 'øboen',
'øboer', 'ødems', 'ødere', 'øders', 'ødets', 'ødsel', 'ødsle', 'øerne', 'øffet', 'øgede',
'øgene', 'øgets', 'øglen', 'øgler', 'øgles', 'øjets', 'øjner', 'øjnet', 'øksen', 'økser',
'økses', 'økset', 'ølbas', 'ølejr', 'øllen', 'øller', 'ølles', 'øllet', 'ømhed', 'ønske',
'ørene', 'ørens', 'ørers', 'ørets', 'ørige', 'ørken', 'ørler', 'ørnen', 'ørnes', 'ørred',
'øsens', 'øsers', 'øsken', 'østat', 'østen', 'østom', 'østpå', 'østre', 'østud', 'øvede',
'øvrig'];

        
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }

        function t(e, a) {
            for (var s = 0; s < a.length; s++) {
                var t = a[s];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
            }
        }

        function o(e, a, s) {
            return a && t(e.prototype, a), s && t(e, s), e
        }

        function n(e, a, s) {
            return a in e ? Object.defineProperty(e, a, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = s, e
        }

        function r(e, a) {
            if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(a && a.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), a && l(e, a)
        }

        function i(e) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, a) {
            return (l = Object.setPrototypeOf || function(e, a) {
                return e.__proto__ = a, e
            })(e, a)
        }

        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function u(e, a, s) {
            return (u = d() ? Reflect.construct : function(e, a, s) {
                var t = [null];
                t.push.apply(t, a);
                var o = new(Function.bind.apply(e, t));
                return s && l(o, s.prototype), o
            }).apply(null, arguments)
        }

        function c(e) {
            var a = "function" == typeof Map ? new Map : void 0;
            return (c = function(e) {
                if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
                var s;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== a) {
                    if (a.has(e)) return a.get(e);
                    a.set(e, t)
                }

                function t() {
                    return u(e, arguments, i(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l(t, e)
            })(e)
        }

        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function m(e, a) {
            return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
        }

        function h(e) {
            var a = d();
            return function() {
                var s, t = i(e);
                if (a) {
                    var o = i(this).constructor;
                    s = Reflect.construct(t, arguments, o)
                } else s = t.apply(this, arguments);
                return m(this, s)
            }
        }

        function y(e, a) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, a) {
                var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == s) return;
                var t, o, n = [],
                    r = !0,
                    i = !1;
                try {
                    for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, a) || b(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e) {
            return function(e) {
                if (Array.isArray(e)) return f(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || b(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function b(e, a) {
            if (e) {
                if ("string" == typeof e) return f(e, a);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
            }
        }

        function f(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
            return t
        }
        var k = document.createElement("template");
        k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
        var v = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "last",
                set: function(e) {
                    this._last = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                        "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                            bubbles: !0,
                            composed: !0
                        }))), e._render()
                    })), this._render()
                }
            }, {
                key: "attributeChangedCallback",
                value: function(e, a, s) {
                    switch (e) {
                        case "letter":
                            if (s === a) break;
                            var t = "null" === s ? "" : s;
                            this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                            break;
                        case "evaluation":
                            if (!s) break;
                            this._state = s;
                            break;
                        case "reveal":
                            this._animation = "flip-in", this._reveal = !0
                    }
                    this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
                }
            }], [{
                key: "observedAttributes",
                get: function() {
                    return ["letter", "evaluation", "reveal"]
                }
            }]), t
        }(c(HTMLElement));
        customElements.define("game-tile", v);
        var w = document.createElement("template");
        w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
        var x = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({
                    mode: "open"
                }), e._letters = "", e._evaluation = [], e._length, e
            }
            return o(t, [{
                key: "evaluation",
                get: function() {
                    return this._evaluation
                },
                set: function(e) {
                    var a = this;
                    this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                        e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                            e.setAttribute("reveal", "")
                        }), 300 * s)
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                    for (var a = function(a) {
                            var s = document.createElement("game-tile"),
                                t = e._letters[a];
                            (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                                s.setAttribute("reveal", "")
                            }), 100 * a));
                            a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                        }, s = 0; s < this._length; s++) a(s);
                    this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                        "Shake" === a.animationName && e.removeAttribute("invalid")
                    }))
                }
            }, {
                key: "attributeChangedCallback",
                value: function(e, a, s) {
                    switch (e) {
                        case "letters":
                            this._letters = s || "";
                            break;
                        case "length":
                            this._length = parseInt(s, 10);
                            break;
                        case "win":
                            if (null === s) {
                                this.$tiles.forEach((function(e) {
                                    e.classList.remove("win")
                                }));
                                break
                            }
                            this.$tiles.forEach((function(e, a) {
                                e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                            }))
                    }
                    this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    var e = this;
                    this.$row && this.$tiles.forEach((function(a, s) {
                        var t = e._letters[s];
                        t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                    }))
                }
            }], [{
                key: "observedAttributes",
                get: function() {
                    return ["letters", "length", "invalid", "win"]
                }
            }]), t
        }(c(HTMLElement));
        customElements.define("game-row", x);
        var z = document.createElement("template");
        z.innerHTML = "\n  <slot></slot>\n";
        var j = "darkTheme",
            S = "colorBlindTheme",
            _ = function(e) {
                r(t, e);
                var a = h(t);

                function t() {
                    var e;
                    s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({
                        mode: "open"
                    });
                    var o = JSON.parse(window.localStorage.getItem(j)),
                        r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        i = JSON.parse(window.localStorage.getItem(S));
                    return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
                }
                return o(t, [{
                    key: "setDarkTheme",
                    value: function(e) {
                        var a = document.querySelector("body");
                        e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                    }
                }, {
                    key: "setColorBlindTheme",
                    value: function(e) {
                        var a = document.querySelector("body");
                        e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                    }
                }, {
                    key: "connectedCallback",
                    value: function() {
                        var e = this;
                        this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                            var s = a.detail,
                                t = s.name,
                                o = s.checked;
                            switch (t) {
                                case "dark-theme":
                                    return void e.setDarkTheme(o);
                                case "color-blind-theme":
                                    return void e.setColorBlindTheme(o)
                            }
                        }))
                    }
                }]), t
            }(c(HTMLElement));

        function q(e, a) {
            return e === a || e != e && a != a
        }

        function E(e, a) {
            for (var s = e.length; s--;)
                if (q(e[s][0], a)) return s;
            return -1
        }
        customElements.define("game-theme-manager", _);
        var A = Array.prototype.splice;

        function C(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        C.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, C.prototype.delete = function(e) {
            var a = this.__data__,
                s = E(a, e);
            return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
        }, C.prototype.get = function(e) {
            var a = this.__data__,
                s = E(a, e);
            return s < 0 ? void 0 : a[s][1]
        }, C.prototype.has = function(e) {
            return E(this.__data__, e) > -1
        }, C.prototype.set = function(e, a) {
            var s = this.__data__,
                t = E(s, e);
            return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
        };
        var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
            T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
            I = L || T || Function("return this")(),
            M = I.Symbol,
            O = Object.prototype,
            R = O.hasOwnProperty,
            $ = O.toString,
            P = M ? M.toStringTag : void 0;
        var H = Object.prototype.toString;
        var N = M ? M.toStringTag : void 0;

        function D(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
                var a = R.call(e, P),
                    s = e[P];
                try {
                    e[P] = void 0;
                    var t = !0
                } catch (e) {}
                var o = $.call(e);
                return t && (a ? e[P] = s : delete e[P]), o
            }(e) : function(e) {
                return H.call(e)
            }(e)
        }

        function G(e) {
            var s = a(e);
            return null != e && ("object" == s || "function" == s)
        }

        function B(e) {
            if (!G(e)) return !1;
            var a = D(e);
            return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
        }
        var F, W = I["__core-js_shared__"],
            Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
        var J = Function.prototype.toString;
        var U = /^\[object .+?Constructor\]$/,
            X = Function.prototype,
            V = Object.prototype,
            K = X.toString,
            Q = V.hasOwnProperty,
            Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function ee(e) {
            return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
                if (null != e) {
                    try {
                        return J.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }(e));
            var a
        }

        function ae(e, a) {
            var s = function(e, a) {
                return null == e ? void 0 : e[a]
            }(e, a);
            return ee(s) ? s : void 0
        }
        var se = ae(I, "Map"),
            te = ae(Object, "create");
        var oe = Object.prototype.hasOwnProperty;
        var ne = Object.prototype.hasOwnProperty;

        function re(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }

        function ie(e, s) {
            var t, o, n = e.__data__;
            return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
        }

        function le(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s;) {
                var t = e[a];
                this.set(t[0], t[1])
            }
        }
        re.prototype.clear = function() {
            this.__data__ = te ? te(null) : {}, this.size = 0
        }, re.prototype.delete = function(e) {
            var a = this.has(e) && delete this.__data__[e];
            return this.size -= a ? 1 : 0, a
        }, re.prototype.get = function(e) {
            var a = this.__data__;
            if (te) {
                var s = a[e];
                return "__lodash_hash_undefined__" === s ? void 0 : s
            }
            return oe.call(a, e) ? a[e] : void 0
        }, re.prototype.has = function(e) {
            var a = this.__data__;
            return te ? void 0 !== a[e] : ne.call(a, e)
        }, re.prototype.set = function(e, a) {
            var s = this.__data__;
            return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
        }, le.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new re,
                map: new(se || C),
                string: new re
            }
        }, le.prototype.delete = function(e) {
            var a = ie(this, e).delete(e);
            return this.size -= a ? 1 : 0, a
        }, le.prototype.get = function(e) {
            return ie(this, e).get(e)
        }, le.prototype.has = function(e) {
            return ie(this, e).has(e)
        }, le.prototype.set = function(e, a) {
            var s = ie(this, e),
                t = s.size;
            return s.set(e, a), this.size += s.size == t ? 0 : 1, this
        };

        function de(e) {
            var a = this.__data__ = new C(e);
            this.size = a.size
        }
        de.prototype.clear = function() {
            this.__data__ = new C, this.size = 0
        }, de.prototype.delete = function(e) {
            var a = this.__data__,
                s = a.delete(e);
            return this.size = a.size, s
        }, de.prototype.get = function(e) {
            return this.__data__.get(e)
        }, de.prototype.has = function(e) {
            return this.__data__.has(e)
        }, de.prototype.set = function(e, a) {
            var s = this.__data__;
            if (s instanceof C) {
                var t = s.__data__;
                if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
                s = this.__data__ = new le(t)
            }
            return s.set(e, a), this.size = s.size, this
        };
        var ue = function() {
            try {
                var e = ae(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();

        function ce(e, a, s) {
            "__proto__" == a && ue ? ue(e, a, {
                configurable: !0,
                enumerable: !0,
                value: s,
                writable: !0
            }) : e[a] = s
        }

        function pe(e, a, s) {
            (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
        }
        var me, he = function(e, a, s) {
                for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                    var i = n[me ? r : ++t];
                    if (!1 === a(o[i], i, o)) break
                }
                return e
            },
            ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            be = ge && ge.exports === ye ? I.Buffer : void 0,
            fe = be ? be.allocUnsafe : void 0;
        var ke = I.Uint8Array;

        function ve(e, a) {
            var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
            return new e.constructor(o, e.byteOffset, e.length)
        }
        var we = Object.create,
            xe = function() {
                function e() {}
                return function(a) {
                    if (!G(a)) return {};
                    if (we) return we(a);
                    e.prototype = a;
                    var s = new e;
                    return e.prototype = void 0, s
                }
            }();
        var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
                return ze(je(e))
            }),
            _e = Object.prototype;

        function qe(e) {
            var a = e && e.constructor;
            return e === ("function" == typeof a && a.prototype || _e)
        }

        function Ee(e) {
            return null != e && "object" == a(e)
        }

        function Ae(e) {
            return Ee(e) && "[object Arguments]" == D(e)
        }
        var Ce = Object.prototype,
            Le = Ce.hasOwnProperty,
            Te = Ce.propertyIsEnumerable,
            Ie = Ae(function() {
                return arguments
            }()) ? Ae : function(e) {
                return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
            },
            Me = Array.isArray;

        function Oe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }

        function Re(e) {
            return null != e && Oe(e.length) && !B(e)
        }
        var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            He = Pe && Pe.exports === $e ? I.Buffer : void 0,
            Ne = (He ? He.isBuffer : void 0) || function() {
                return !1
            },
            De = Function.prototype,
            Ge = Object.prototype,
            Be = De.toString,
            Fe = Ge.hasOwnProperty,
            We = Be.call(Object);
        var Ye = {};
        Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
        var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            Xe = Ue && Ue.exports === Je && L.process,
            Ve = function() {
                try {
                    var e = Ue && Ue.require && Ue.require("util").types;
                    return e || Xe && Xe.binding && Xe.binding("util")
                } catch (e) {}
            }(),
            Ke = Ve && Ve.isTypedArray,
            Qe = Ke ? function(e) {
                return function(a) {
                    return e(a)
                }
            }(Ke) : function(e) {
                return Ee(e) && Oe(e.length) && !!Ye[D(e)]
            };

        function Ze(e, a) {
            if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
        }
        var ea = Object.prototype.hasOwnProperty;

        function aa(e, a, s) {
            var t = e[a];
            ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
        }
        var sa = /^(?:0|[1-9]\d*)$/;

        function ta(e, s) {
            var t = a(e);
            return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
        }
        var oa = Object.prototype.hasOwnProperty;

        function na(e, a) {
            var s = Me(e),
                t = !s && Ie(e),
                o = !s && !t && Ne(e),
                n = !s && !t && !o && Qe(e),
                r = s || t || o || n,
                i = r ? function(e, a) {
                    for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
                    return t
                }(e.length, String) : [],
                l = i.length;
            for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
            return i
        }
        var ra = Object.prototype.hasOwnProperty;

        function ia(e) {
            if (!G(e)) return function(e) {
                var a = [];
                if (null != e)
                    for (var s in Object(e)) a.push(s);
                return a
            }(e);
            var a = qe(e),
                s = [];
            for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
            return s
        }

        function la(e) {
            return Re(e) ? na(e, !0) : ia(e)
        }

        function da(e) {
            return function(e, a, s, t) {
                var o = !s;
                s || (s = {});
                for (var n = -1, r = a.length; ++n < r;) {
                    var i = a[n],
                        l = t ? t(s[i], e[i], i, s, e) : void 0;
                    void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
                }
                return s
            }(e, la(e))
        }

        function ua(e, a, s, t, o, n, r) {
            var i = Ze(e, s),
                l = Ze(a, s),
                d = r.get(l);
            if (d) pe(e, s, d);
            else {
                var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
                    p = void 0 === c;
                if (p) {
                    var m = Me(l),
                        h = !m && Ne(l),
                        y = !m && !h && Qe(l);
                    c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                        var s = -1,
                            t = e.length;
                        for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                        return a
                    }(i) : h ? (p = !1, c = function(e, a) {
                        if (a) return e.slice();
                        var s = e.length,
                            t = fe ? fe(s) : new e.constructor(s);
                        return e.copy(t), t
                    }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                        if (!Ee(e) || "[object Object]" != D(e)) return !1;
                        var a = Se(e);
                        if (null === a) return !0;
                        var s = Fe.call(a, "constructor") && a.constructor;
                        return "function" == typeof s && s instanceof s && Be.call(s) == We
                    }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                        return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                    }(l))) : p = !1
                }
                p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
            }
        }

        function ca(e, a, s, t, o) {
            e !== a && he(a, (function(n, r) {
                if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
                else {
                    var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                    void 0 === i && (i = n), pe(e, r, i)
                }
            }), la)
        }

        function pa(e) {
            return e
        }

        function ma(e, a, s) {
            switch (s.length) {
                case 0:
                    return e.call(a);
                case 1:
                    return e.call(a, s[0]);
                case 2:
                    return e.call(a, s[0], s[1]);
                case 3:
                    return e.call(a, s[0], s[1], s[2])
            }
            return e.apply(a, s)
        }
        var ha = Math.max;
        var ya = ue ? function(e, a) {
                return ue(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (s = a, function() {
                        return s
                    }),
                    writable: !0
                });
                var s
            } : pa,
            ga = Date.now;
        var ba = function(e) {
            var a = 0,
                s = 0;
            return function() {
                var t = ga(),
                    o = 16 - (t - s);
                if (s = t, o > 0) {
                    if (++a >= 800) return arguments[0]
                } else a = 0;
                return e.apply(void 0, arguments)
            }
        }(ya);

        function fa(e, a) {
            return ba(function(e, a, s) {
                return a = ha(void 0 === a ? e.length - 1 : a, 0),
                    function() {
                        for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                        o = -1;
                        for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                        return i[a] = s(r), ma(e, this, i)
                    }
            }(e, a, pa), e + "")
        }
        var ka, va = (ka = function(e, a, s) {
                ca(e, a, s)
            }, fa((function(e, s) {
                var t = -1,
                    o = s.length,
                    n = o > 1 ? s[o - 1] : void 0,
                    r = o > 2 ? s[2] : void 0;
                for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) {
                        if (!G(t)) return !1;
                        var o = a(s);
                        return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
                    }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
                    var i = s[t];
                    i && ka(e, i, t, n)
                }
                return e
            }))),
            wa = tr["gameState"],
            xa = {
                boardState: null,
                evaluations: null,
                rowIndex: null,
                solution: null,
                gameStatus: null,
                lastPlayedTs: null,
                lastCompletedTs: null,
                restoringFromLocalStorage: null,
                hardMode: !1
            };

        function za() {
            var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
            return JSON.parse(e)
        }

        function ja(e) {
            var a = za();
            ! function(e) {
                window.localStorage.setItem(wa, JSON.stringify(e))
            }(va(a, e))
        }
        var Sa = document.createElement("template");
        Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">' + tr["Hard Mode"] + '</div>\n          <div class="description">' + tr["Any revealed hints must be used in subsequent guesses"] + '</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">' + tr["Dark Theme"] + '</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">' + tr["Color Blind Mode"] + '</div>\n          <div class="description">' + tr["High contrast colors"] + '</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">' + tr["Feedback"] + '</div>\n        </div>\n        <div class="control">\n          ' + tr['contact'] + '\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
        var _a = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e, a = this;
                    this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                        e.stopPropagation();
                        var s = e.detail,
                            t = s.name,
                            o = s.checked,
                            n = s.disabled;
                        a.dispatchEvent(new CustomEvent("game-setting-change", {
                            bubbles: !0,
                            composed: !0,
                            detail: {
                                name: t,
                                checked: o,
                                disabled: n
                            }
                        })), a.render()
                    })), this.render()
                }
            }, {
                key: "render",
                value: function() {
                    var e = document.querySelector("body");
                    e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                    var a = za();
                    a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
                }
            }]), t
        }(c(HTMLElement));
        customElements.define("game-settings", _a);
        var qa = document.createElement("template");
        qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
        var Ea, Aa = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                    var a = this.shadowRoot.querySelector(".toast");
                    a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                        a.classList.add("fade")
                    }), this._duration), a.addEventListener("transitionend", (function(a) {
                        e.parentNode.removeChild(e)
                    }))
                }
            }]), t
        }(c(HTMLElement));

        function Ca() {
            dataLayer.push(arguments)
        }
        customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
        Ca("config", "G-2SSGMHY3NP", {
            app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
            debug_mode: !1
        });
        
        

        
var Ia="present",Ma="correct",Oa="absent";var Ra={unknown:0,absent:1,present:2,correct:3};
function $a(e, a) {
    var s = {};
    return e.forEach((function(e, t) {
        if (a[t])
            for (var o = 0; o < e.length; o++) {
                var n = e[o],
                    r = a[t][o],
                    i = s[n] || "unknown";
                Ra[r] > Ra[i] && (s[n] = r)
            }
    })), s
}

function Pa(e) {
    var a = ["th", "st", "nd", "rd"],
        s = e % 100;
    return e + (a[(s - 20) % 10] || a[s] || a[0])
}
var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

//FIXME: Calcultare number of days since start day. USed to pick answer word
function Na(e, a) {
    var s = new Date(e),
        t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.round(t / 864e5)
}


//SHA1 Taken from: https://stackoverflow.com/questions/29099292/need-sha1-encryption-in-jquery-javascript
function sha1(str) {
  //  discuss at: http://phpjs.org/functions/sha1/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //  depends on: utf8_encode
  //   example 1: sha1('Kevin van Zonneveld');
  //   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'

  var rotate_left = function(n, s) {
    var t4 = (n << s) | (n >>> (32 - s));
    return t4;
  };

  /*var lsb_hex = function (val) { // Not in use; needed?
    var str="";
    var i;
    var vh;
    var vl;

    for ( i=0; i<=6; i+=2 ) {
      vh = (val>>>(i*4+4))&0x0f;
      vl = (val>>>(i*4))&0x0f;
      str += vh.toString(16) + vl.toString(16);
    }
    return str;
  };*/

  var cvt_hex = function(val) {
    var str = '';
    var i;
    var v;

    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;
      str += v.toString(16);
    }
    return str;
  };

  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xEFCDAB89;
  var H2 = 0x98BADCFE;
  var H3 = 0x10325476;
  var H4 = 0xC3D2E1F0;
  var A, B, C, D, E;
  var temp;

  //str = this.utf8_encode(str);
  var str_len = str.length;

  var word_array = [];
  for (i = 0; i < str_len - 3; i += 4) {
    j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
    word_array.push(j);
  }

  switch (str_len % 4) {
    case 0:
      i = 0x080000000;
      break;
    case 1:
      i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
      break;
    case 2:
      i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
      break;
    case 3:
      i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
        8 | 0x80;
      break;
  }

  word_array.push(i);

  while ((word_array.length % 16) != 14) {
    word_array.push(0);
  }

  word_array.push(str_len >>> 29);
  word_array.push((str_len << 3) & 0x0ffffffff);

  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) {
      W[i] = word_array[blockstart + i];
    }
    for (i = 16; i <= 79; i++) {
      W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    }

    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;

    for (i = 0; i <= 19; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }

    for (i = 20; i <= 39; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }

    for (i = 40; i <= 59; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }

    for (i = 60; i <= 79; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }

    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }

  temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  return temp.toLowerCase();
}


//FIXME: Pick an answer word. Takes the hash of number of days from start. Then uses that as index in word list.
function Da(e) {
    var a, s = Ga(e);
    //s = 214;
    var txt = "ordlek nr " + s.toString();
    //console.log(txt);
    var hex = sha1(txt).substring(0, 4);
    //console.log(hex);
    s = parseInt(Number("0x" + hex), 10);
    //console.log(s);
    //a = s % La.length;
    //console.log(La[a]);
    return a = s % La.length, La[a]
}

function Ga(e) {
    return Na(Ha, e)
}
//FIXME: Valid letters
var Ba = tr["@valid_letters"]; //"abcdefghijklmnopqrstuvwxyzåäö";
var Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

function Wa(e) {
    for (var a = "", s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : "_"
    }
    return a
}
var Ya = tr["statistics"],
    Ja = "fail",
    Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };

function Xa() {
    var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
    return JSON.parse(e)
}

function Va(e) {
    var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
    a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
            var s = y(a, 2),
                t = s[0],
                o = s[1];
            return t !== Ja ? e += t * o : e
        }), 0) / o.gamesWon),
        function(e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
}
var Ka = document.createElement("template");
Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         ' + tr["WORDLE"] + '\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
var Qa = document.createElement("template");
Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
var Za = tr["IN_PROGRESS"],
    es = tr["WIN"],
    as = tr["FAIL"],
    ss = [tr["Genius"], tr["Magnificent"], tr["Impressive"], tr["Splendid"], tr["Great"], tr["Phew"]],
    ts = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({
                mode: "open"
            }), e.today = new Date;
            var o = za();
            return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                rowIndex: e.rowIndex,
                boardState: e.boardState,
                evaluations: e.evaluations,
                solution: e.solution,
                gameStatus: e.gameStatus
            }), Ca("event", "level_start", {
                level_name: Wa(e.solution)
            })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = $a(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
        }
        return o(t, [{
            key: "evaluateRow",
            value: function() {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                        s = this.boardState[this.rowIndex];
                    //FIXME: Which word lists to check if the five letter guess is valid
                    if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast(tr["Not in word list"]);
                    //if (e = s, !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
                    if (this.hardMode) {
                        var t = function(e, a, s) {
                                if (!e || !a || !s) return {
                                    validGuess: !0
                                };
                                for (var t = 0; t < s.length; t++)
                                    if (s[t] === Ma && e[t] !== a[t]) return {
                                        validGuess: !1,
                                        errorMessage: "".concat(Pa(t + 1), tr[" letter must be "]).concat(a[t].toUpperCase())
                                    };
                                for (var o = {}, n = 0; n < s.length; n++)[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                var r = e.split("").reduce((function(e, a) {
                                    return e[a] ? e[a] += 1 : e[a] = 1, e
                                }), {});
                                for (var i in o)
                                    if ((r[i] || 0) < o[i]) return {
                                        validGuess: !1,
                                        errorMessage: tr["Guess must contain "].concat(i.toUpperCase())
                                    };
                                return {
                                    validGuess: !0
                                }
                            }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                            o = t.validGuess,
                            n = t.errorMessage;
                        if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || tr["Not valid in hard mode"])
                    }
                    var r = function(e, a) {
                        for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (t[r])
                                for (var l = 0; l < a.length; l++) {
                                    var d = a[l];
                                    if (o[l] && i === d) {
                                        s[r] = Ia, o[l] = !1;
                                        break
                                    }
                                }
                        }
                        return s
                    }(s, this.solution);
                    this.evaluations[this.rowIndex] = r, this.letterEvaluations = $a(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                    var i = this.rowIndex >= 6,
                        l = r.every((function(e) {
                            return "correct" === e
                        }));
                    if (i || l) Va({
                        isWin: l,
                        isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                        numGuesses: this.rowIndex
                    }), ja({
                        lastCompletedTs: Date.now()
                    }), this.gameStatus = l ? es : as, Ca("event", "level_end", {
                        level_name: Wa(this.solution),
                        num_guesses: this.rowIndex,
                        success: l
                    });
                    this.tileIndex = 0, this.canInput = !1, ja({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(e) {
                this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Za && this.canInput) {
                    if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast(tr["Not enough letters"]);
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(e, a) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    t = document.createElement("game-toast");
                t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var e = this.shadowRoot.querySelector("#board-container"),
                    a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                    s = 6 * Math.floor(a / 5);
                this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var e = this.$game.querySelector("game-modal"),
                    a = document.createElement("game-stats");
                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                    return e.showHelpModal()
                }), 100);
                for (var a = 0; a < 6; a++) {
                    var s = document.createElement("game-row");
                    s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                }
                this.$game.addEventListener("game-key-press", (function(a) {
                    var s = a.detail.key;
                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                    e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                        e.showStatsModal()
                    }), 2500))), e.restoringFromLocalStorage = !1)
                })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                    switch (t) {
                        case "hard-mode":
                            return void(n ? e.addToast(tr["Hard mode can only be enabled at the start of a round"], 1500, !0) : (e.hardMode = o, ja({
                                hardMode: o
                            })))
                    }
                })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode(tr["Settings"]);
                    s.appendChild(t);
                    var o = document.createElement("game-settings");
                    o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode(tr["How to play"]);
                    s.appendChild(t);
                    var o = document.createElement("game-help");
                    o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                    e.showStatsModal()
                })), window.addEventListener("resize", this.sizeBoard.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "debugTools",
            value: function() {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                    e.addToast("hello world")
                })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-modal");
                    s.textContent = "hello plz", s.setAttribute("open", "")
                })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    e.evaluateRow()
                })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                }))
            }
        }]), t
    }(c(HTMLElement));
customElements.define("game-app", ts);
var os = document.createElement("template");
os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
var ns = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({
            mode: "open"
        }), e
    }
    return o(t, [{
        key: "connectedCallback",
        value: function() {
            var e = this;
            this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                e.shadowRoot.querySelector(".content").classList.add("closing")
            })), this.shadowRoot.addEventListener("animationend", (function(a) {
                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
            }))
        }
    }]), t
}(c(HTMLElement));
customElements.define("game-modal", ns);
var rs = document.createElement("template");
rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
var is = document.createElement("template");
is.innerHTML = "\n  <button>key</button>\n";
var ls = document.createElement("template");
ls.innerHTML = '\n  <div class="spacer"></div>\n';
//FIX_ME: Keyboad Layout
var ds = [
        tr["@keyboard_top"],
        tr["@keyboard_mid"],
        tr["@keyboard_bot"]
    ],
    us = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "letterEvaluations",
            set: function(e) {
                this._letterEvaluations = e, this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(e) {
                this.dispatchEvent(new CustomEvent("game-key-press", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: e
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                })), window.addEventListener("keydown", (function(a) {
                    if (!0 !== a.repeat) {
                        var s = a.key,
                            t = a.metaKey,
                            o = a.ctrlKey;
                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                    }
                })), this.$keyboard.addEventListener("transitionend", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                })), ds.forEach((function(a) {
                    var s = document.createElement("div");
                    s.classList.add("row"), a.forEach((function(e) {
                        var a;
                        //FIXME: Valid letters check
                        //if (e >= "a" && e <= "z" || e == "å" || e == "ä" || e == "ö" || "←" === e || "↵" === e) {
                        if (tr["@valid_letters"].indexOf(e) >= 0 || "←" === e || "↵" === e) {
                            if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                var t = document.createElement("game-icon");
                                t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                            }
                            "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                        } else(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a)
                    })), e.$keyboard.appendChild(s)
                })), this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var e in this._letterEvaluations) {
                    var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                    a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                }
            }
        }]), t
    }(c(HTMLElement));
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
function cs(e, a, s, t) {
    return new(s || (s = Promise))((function(o, n) {
        function r(e) {
            try {
                l(t.next(e))
            } catch (e) {
                n(e)
            }
        }

        function i(e) {
            try {
                l(t.throw(e))
            } catch (e) {
                n(e)
            }
        }

        function l(e) {
            var a;
            e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                e(a)
            }))).then(r, i)
        }
        l((t = t.apply(e, a || [])).next())
    }))
}

function ps(e, a) {
    var s, t, o, n, r = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return n = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this
    }), n;

    function i(n) {
        return function(i) {
            return function(n) {
                if (s) throw new TypeError("Generator is already executing.");
                for (; r;) try {
                    if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
                    switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                        case 0:
                        case 1:
                            o = n;
                            break;
                        case 4:
                            return r.label++, {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            r.label++, t = n[1], n = [0];
                            continue;
                        case 7:
                            n = r.ops.pop(), r.trys.pop();
                            continue;
                        default:
                            if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                r.label = n[1];
                                break
                            }
                            if (6 === n[0] && r.label < o[1]) {
                                r.label = o[1], o = n;
                                break
                            }
                            if (o && r.label < o[2]) {
                                r.label = o[2], r.ops.push(n);
                                break
                            }
                            o[2] && r.ops.pop(), r.trys.pop();
                            continue
                    }
                    n = a.call(e, r)
                } catch (e) {
                    n = [6, e], t = 0
                } finally {
                    s = o = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }([n, i])
        }
    }
}
customElements.define("game-keyboard", us),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }.bind("[clipboard-polyfill]");
var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
    fs = null == bs ? void 0 : bs.clipboard;
null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
    vs = "undefined" == typeof window ? void 0 : window,
    ws = (null == vs || vs.ClipboardItem, vs);
var xs = function() {
    this.success = !1
};

function zs(e, a, s) {
    for (var t in e.success = !0, a) {
        var o = a[t],
            n = s.clipboardData;
        n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
    }
    s.preventDefault()
}

function js(e) {
    var a = new xs,
        s = zs.bind(this, a, e);
    document.addEventListener("copy", s);
    try {
        document.execCommand("copy")
    } finally {
        document.removeEventListener("copy", s)
    }
    return a.success
}

function Ss(e, a) {
    _s(e);
    var s = js(a);
    return qs(), s
}

function _s(e) {
    var a = document.getSelection();
    if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
    }
}

function qs() {
    var e = document.getSelection();
    e && e.removeAllRanges()
}

function Es(e) {
    return cs(this, void 0, void 0, (function() {
        var a;
        return ps(this, (function(s) {
            if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                if (!a) throw new Error("No `text/plain` value was specified.");
                if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
                throw new Error("Copying failed, possibly because the user rejected it.")
            }
            var t;
            return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                var a = document.createElement("div");
                a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                var s = Ss(a, e);
                return document.body.removeChild(a), s
            }(e) || function(e) {
                var a = document.createElement("div");
                a.setAttribute("style", "-webkit-user-select: text !important");
                var s = a;
                a.attachShadow && (s = a.attachShadow({
                    mode: "open"
                }));
                var t = document.createElement("span");
                t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
                var o = document.execCommand("copy");
                return qs(), document.body.removeChild(a), o
            }(e["text/plain"]) ? [2, !0] : [2, !1]
        }))
    }))
}

function As(e, a, s) {
    try {
        t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
            return cs(this, void 0, void 0, (function() {
                return ps(this, (function(a) {
                    if (ks) return [2, ks(e)];
                    if (!Es(function(e) {
                            var a = {};
                            return a["text/plain"] = e, a
                        }(e))) throw new Error("writeText() failed");
                    return [2]
                }))
            }))
        }(e.text).then(a, s) : navigator.share(e)
    } catch (e) {
        s()
    }
    var t
}
var Cs = document.createElement("template");
Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>' + tr["Statistics"] + '</h1>\n    <div id="statistics"></div>\n    <h1>' + tr["Guess Distribution"] + '</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
var Ls = document.createElement("template");
Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
var Ts = document.createElement("template");
Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
var Is = document.createElement("template");
Is.innerHTML = '\n  <div class="countdown">\n    <h1>' + tr["Next WORDLE"] + '</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      ' + tr["Share"] + ' <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
var Ms = {
        currentStreak: tr["Current Streak"],
        maxStreak: tr["Max Streak"],
        winPercentage: tr["Win %"],
        gamesPlayed: tr["Played"],
        gamesWon: tr["Won"],
        averageGuesses: tr["Av. Guesses"]
    },
    Os = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e.stats = Xa(), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics"),
                    s = this.shadowRoot.getElementById("guess-distribution"),
                    t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function(e) {
                        return 0 === e
                    }))) {
                    var o = document.createElement("div");
                    o.classList.add("no-data"), o.innerText = tr["No Data"], s.appendChild(o)
                } else
                    for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                        var r = n,
                            i = this.stats.guesses[n],
                            l = Ts.content.cloneNode(!0),
                            d = Math.max(7, Math.round(i / t * 100));
                        l.querySelector(".guess").textContent = r;
                        var u = l.querySelector(".graph-bar");
                        if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                            l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
                            var c = parseInt(this.getAttribute("highlight-guess"), 10);
                            c && n === c && u.classList.add("highlight")
                        }
                        s.appendChild(l)
                    }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                        var t = Ms[s],
                            o = e.stats[s],
                            n = Ls.content.cloneNode(!0);
                        n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                    })), this.gameApp.gameStatus !== Za) {
                    var p = this.shadowRoot.querySelector(".footer"),
                        m = Is.content.cloneNode(!0);
                    p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                        a.preventDefault(), a.stopPropagation();
                        As(function(e) {
                            var a = e.evaluations,
                                s = e.dayOffset,
                                t = e.rowIndex,
                                o = e.isHardMode,
                                n = e.isWin,
                                r = JSON.parse(window.localStorage.getItem(j)),
                                i = JSON.parse(window.localStorage.getItem(S));
                           var l = "";
                           if (tr["@use_link_in_share"]) {
                                l = tr["@short_link"] + " ".concat(s);
                           } else {
                                l = tr["Wordle"] + " ".concat(s);
                                l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
                           }
                            var d = "";
                            return a.forEach((function(e) {
                                e && (e.forEach((function(e) {
                                    if (e) {
                                        var a = "";
                                        switch (e) {
                                            case Ma:
                                                a = function(e) {
                                                    return e ? "🟧" : "🟩"
                                                }(i);
                                                break;
                                            case Ia:
                                                a = function(e) {
                                                    return e ? "🟦" : "🟨"
                                                }(i);
                                                break;
                                            case Oa:
                                                a = function(e) {
                                                    return e ? "⬛" : "⬜"
                                                }(r)
                                        }
                                        d += a
                                    }
                                })), d += "\n")
                            })), {
                                text: "".concat(l, "\n\n").concat(d.trimEnd())
                            }
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es
                        }), (function() {
                            e.gameApp.addToast(tr["Copied results to clipboard"], 2e3, !0)
                        }), (function() {
                            e.gameApp.addToast("Share failed", 2e3, !0)
                        }))
                    }))
                }
            }
        }]), t
    }(c(HTMLElement));
customElements.define("game-stats", Os);
var Rs = document.createElement("template");
Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
var $s = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({
            mode: "open"
        }), e
    }
    return o(t, [{
        key: "connectedCallback",
        value: function() {
            var e = this;
            this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        name: e.getAttribute("name"),
                        checked: e.hasAttribute("checked"),
                        disabled: e.hasAttribute("disabled")
                    }
                }))
            }))
        }
    }], [{
        key: "observedAttributes",
        get: function() {
            return ["checked"]
        }
    }]), t
}(c(HTMLElement));
customElements.define("game-switch", $s);
var Ps = document.createElement("template");
Ps.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>' + tr["Guess the <strong>WORDLE</strong> in 6 tries."] + '</p>\n      <p>' + tr["Each guess must be a valid 5 letter word. Hit the enter button to submit."] + '</p>\n      <p>' + tr["After each guess, the color of the tiles will change to show how close your guess was to the word."] + '</p>\n      <div class="examples">\n        <p><strong>' + tr["Examples"] + '</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="' + tr["letter-a1"] + '" evaluation="correct" reveal></game-tile>\n            <game-tile letter="' + tr["letter-a2"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-a3"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-a4"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-a5"] + '"></game-tile>\n          </div>\n          <p>' + tr["The letter <strong>W</strong> is in the word and in the correct spot."] + '</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="' + tr["letter-b1"] + '" evaluation="present" reveal></game-tile>\n            <game-tile letter="' + tr["letter-b2"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-b3"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-b4"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-b5"] + '"></game-tile>\n          </div>\n          <p>' + tr["The letter <strong>I</strong> is in the word but in the wrong spot."] + '</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="' + tr["letter-c1"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-c2"] + '" evaluation="absent" reveal></game-tile>\n            <game-tile letter="' + tr["letter-c3"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-c4"] + '"></game-tile>\n            <game-tile letter="' + tr["letter-c5"] + '"></game-tile>\n          </div>\n          <p>' + tr["The letter <strong>U</strong> is not in the word in any spot."] + '</p>\n        </div>\n      </div>\n      <p><strong>' + tr["A new WORDLE will be available each day!"] + '<strong></p>\n    </div>\n  </section>\n';
var Hs = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({
            mode: "open"
        }), e
    }
    return o(t, [{
        key: "connectedCallback",
        value: function() {
            this.shadowRoot.appendChild(Ps.content.cloneNode(!0))
        }
    }]), t
}(c(HTMLElement));
customElements.define("game-help", Hs);
var Ns = document.createElement("template");
Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
var Ds = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({
            mode: "open"
        }), e
    }
    return o(t, [{
        key: "connectedCallback",
        value: function() {
            var e = this;
            this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                e.shadowRoot.querySelector(".overlay").classList.add("closing")
            })), this.shadowRoot.addEventListener("animationend", (function(a) {
                "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                    e.removeChild(a)
                })), e.removeAttribute("open"))
            }))
        }
    }]), t
}(c(HTMLElement));
customElements.define("game-page", Ds);
var Gs = document.createElement("template");
Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    },
    Fs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]), t
    }(c(HTMLElement));
customElements.define("game-icon", Fs);
var Ws = document.createElement("template");
Ws.innerHTML = '\n  <div id="timer"></div>\n';
var Ys = 6e4,
    Js = 36e5,
    Us = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({
                mode: "open"
            });
            var o = new Date;
            return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
        }
        return o(t, [{
            key: "padDigit",
            value: function(e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var e, a = (new Date).getTime(),
                    s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = "00:00:00";
                else {
                    var t = Math.floor(s % 864e5 / Js),
                        o = Math.floor(s % Js / Ys),
                        n = Math.floor(s % Ys / 1e3);
                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                    e.updateTimer()
                }), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]), t
    }(c(HTMLElement));
return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = $s, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {
    value: !0
}), e
}({});
