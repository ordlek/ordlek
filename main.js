this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
        "use strict";
        //FiXME: Translations
        var tr = {
            "WORDLE": "ORDLEK",
            "Wordle": "Ordlek",
            "": "",
            "@language": "sv-SE",
            "@title": "Ordlek - Gissa dagens ord",
            "@description": "Gissa dagens fembokstavsord på sex försök",
            "@short_link": "bit.ly/ordlek",
            "@use_link_in_share": true,
            "": "",
            "@valid_letters": "abcdefghijklmnopqrstuvwxyzåäö",
            "@keyboard_top": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
            "@keyboard_mid": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
            "@keyboard_bot": ["←", "z", "x", "c", "v", "b", "n", "m", "↵"],
            "": "",
            "": "",
            "gameState": "sv-gameState",
            "statistics": "statistik",
            "fail": "misslyckanden",
            "IN_PROGRESS": "PÅGÅENDE",
            "WIN": "VUNNA",
            "FAIL": "EJ VUNNA",
            "Genius": "Genialt!",
            "Magnificent": "Otroligt!",
            "Impressive": "Fantastiskt!",
            "Splendid": "Imponerande!",
            "Great": "Bra!",
            "Phew": "Nära ögat!",
            " letter must be ": " bokstaven måste vara ett ",
            "Guess must contain ": "Gissningsordet måste ha: ",
            "Not valid in hard mode": "Tillåts inte i den svåra varianten",
            "Hard mode can only be enabled at the start of a round": "Svåra varianten kan bara aktiveras innan första gissnigen",
            "No Data": "Inga spelade omångar ännu",
            "Not in word list": "Finns inte i ordlistan",
            "Not enough letters": "Måste vara fem bokstäver långt!",
            "Copied results to clipboard": "Resultatet går nu klistra in i andra appar",
            "": "",
            "": "",
            "Settings": "Inställningar",
            "Hard Mode": "Svåra varianten",
            "Any revealed hints must be used in subsequent guesses": "Alla funna bokstäver måste användas i kommande gissningar",
            "Dark Theme": "Mörkt läge",
            "Color Blind Mode": "Bättre färger för färgblinda",
            "High contrast colors": "Färgerna får högre konstrast",
            "Feedback": "Originalspelet: ",
            "contact": '<a href="https://www.powerlanguage.co.uk/wordle/">Wordle in English</a>',
            "": "",
            "": "",
            "Statistics": "Statistik",
            "Guess Distribution": "Gissningsfördelning:",
            "Next WORDLE": "Nästa ord om: ",
            "Share": "Dela",
            "Current Streak": "Antal klarade dagar i rad",
            "Max Streak": "Max klarade dagar i rad",
            "Win %": "Procentandel vunna",
            "Played": "Spelade omgångar",
            "Won": "Vunna",
            "Av. Guesses": "Gissningar i genomsnitt",
            "": "",
            "": "",
            "How to play": "Hur man spelar",
            "Guess the <strong>WORDLE</strong> in 6 tries.": "Gissa dagens ord på sex försök!",
            "Each guess must be a valid 5 letter word. Hit the enter button to submit.": "Varje gissning ska vara ett fembokstavsord. Tryck på Enter för att kontrollera.",
            "After each guess, the color of the tiles will change to show how close your guess was to the word.": "Beroende på hur nära din gissning var så färgas enskilda bokstäver i ordet.",
            "": "",
            "Examples": "Till exempel:",
            "letter-a1": "g",
            "letter-a2": "i",
            "letter-a3": "s",
            "letter-a4": "s",
            "letter-a5": "a",
            "The letter <strong>W</strong> is in the word and in the correct spot.": "Bokstaven <b>G</b> står på rätt plats.",
            "letter-b1": "o",
            "letter-b2": "r",
            "letter-b3": "d",
            "letter-b4": "e",
            "letter-b5": "t",
            "The letter <strong>I</strong> is in the word but in the wrong spot.": "Bokstaven <b>O</b> finns med i ordet men ska stå på en annan plats.",
            "letter-c1": "s",
            "letter-c2": "m",
            "letter-c3": "a",
            "letter-c4": "r",
            "letter-c5": "t",
            "The letter <strong>U</strong> is not in the word in any spot.": "Bokstaven <b>M</b> finns inte med i ordet.",
            "": "",
            "A new WORDLE will be available each day!": "Varje dag finns ett nytt ord att gissa på!",
            "": "",
            
        };

        //FIXME: Entire Word list
var La = ['abbot', 'abort', 'adept', 'adlig', 'aerob', 'afasi', 'affix', 'affär', 'afton', 'agent',
'agera', 'agnat', 'agoni', 'aioli', 'ajour', 'ajöss', 'akryl', 'akter', 'aktie', 'aktiv',
'aktör', 'alarm', 'alban', 'album', 'alert', 'alexi', 'alias', 'alibi', 'alkis', 'alkov',
'allan', 'allra', 'alpby', 'alpin', 'alrot', 'altan', 'alter', 'alumn', 'alvar', 'amorf',
'ampel', 'amper', 'amöba', 'anbud', 'andas', 'andel', 'andra', 'angla', 'anime', 'aning',
'ankel', 'ankra', 'anlag', 'annan', 'annex', 'anrik', 'anrop', 'anslå', 'anstå', 'antal',
'antik', 'aorta', 'apart', 'apati', 'apbur', 'aphus', 'april', 'aptit', 'areal', 'arena',
'argon', 'arier', 'arisk', 'arkad', 'arkiv', 'arsle', 'artig', 'arton', 'artär', 'asiat',
'asien', 'astma', 'atlas', 'atlet', 'atoll', 'attan', 'attjo', 'avans', 'avart', 'avbön',
'avdöd', 'aveny', 'avgas', 'avgud', 'aviga', 'avisa', 'avkok', 'avlat', 'avsky', 'avslå',
'avstå', 'avtal', 'avtåg', 'avund', 'avväg', 'aväta', 'axiom', 'aztek', 'backa', 'backe',
'bacon', 'badda', 'bagge', 'bajsa', 'bakis', 'bakom', 'bakpå', 'bakre', 'bakåt', 'balja',
'balka', 'balle', 'balsa', 'bamba', 'bambu', 'bamse', 'banal', 'banan', 'banda', 'bandy',
'bandå', 'baner', 'banga', 'banjo', 'banka', 'banna', 'banta', 'barka', 'baron', 'barra',
'barsk', 'basal', 'basar', 'basse', 'basta', 'bastu', 'basun', 'basår', 'batik', 'baxna',
'bebis', 'bebop', 'becka', 'bedra', 'befäl', 'begär', 'behag', 'behov', 'beige', 'benig',
'berså', 'beröm', 'beska', 'beslå', 'bestå', 'besök', 'betro', 'betsa', 'betyg', 'bevis',
'bevåg', 'bibba', 'bibel', 'bidde', 'bidra', 'bihus', 'bikta', 'bilda', 'bilkö', 'bimbo',
'binda', 'binga', 'binge', 'bingo', 'binär', 'birem', 'birot', 'bisak', 'bison', 'bistå',
'bitas', 'biten', 'bitsk', 'bivax', 'biväg', 'biyta', 'bjuda', 'bjugg', 'bjäbb', 'bjäfs',
'bjärt', 'björk', 'björn', 'black', 'blada', 'blaha', 'blaja', 'bland', 'blank', 'blask',
'blast', 'bleck', 'bleka', 'bleke', 'blick', 'blida', 'blind', 'bling', 'blink', 'blipp',
'blixt', 'block', 'bloda', 'blogg', 'blond', 'blota', 'blott', 'blues', 'bluff', 'blund',
'blurb', 'bläck', 'bläng', 'blänk', 'blåsa', 'blåst', 'blått', 'blöda', 'blöja', 'blöta',
'bobba', 'bocka', 'boden', 'bohag', 'bohem', 'boken', 'bolag', 'bolla', 'bolma', 'bolån',
'bomba', 'bomma', 'bonad', 'bonde', 'bonus', 'borda', 'borga', 'borra', 'borst', 'borta',
'borås', 'botox', 'boule', 'bowla', 'boxas', 'boxer', 'boyta', 'boägg', 'bragd', 'braka',
'brand', 'brant', 'brasa', 'brass', 'bravo', 'breda', 'bredd', 'brigg', 'brink', 'brisa',
'brist', 'brits', 'britt', 'brock', 'brodd', 'broms', 'brons', 'brosk', 'brott', 'brugd',
'bruka', 'brunn', 'brunt', 'brusa', 'brydd', 'brygd', 'bryna', 'bryne', 'brysk', 'bryta',
'bryte', 'bräck', 'bräda', 'brädd', 'bräde', 'bräka', 'bräma', 'bränd', 'bräss', 'bråck',
'bråka', 'bråte', 'bröla', 'bröst', 'budda', 'bugga', 'bukta', 'bulla', 'bulle', 'bulta',
'bunke', 'bunta', 'burka', 'burop', 'burra', 'busig', 'buska', 'buske', 'bussa', 'butan',
'butik', 'bygel', 'bygga', 'byggd', 'bygge', 'bylta', 'bylte', 'byråd', 'byväg', 'bädda',
'bägge', 'bälga', 'bälta', 'bälte', 'bända', 'bänka', 'bärga', 'bärig', 'bävan', 'bäver',
'bågig', 'bågna', 'bödel', 'bökig', 'bölja', 'börda', 'börja', 'bössa', 'bövel', 'campa',
'ceder', 'cella', 'cello', 'cerat', 'chans', 'chark', 'charm', 'chatt', 'check', 'chefa',
'chile', 'chili', 'chips', 'chock', 'choka', 'choke', 'cider', 'cirka', 'citat', 'civil',
'clown', 'coach', 'curla', 'curry', 'cykel', 'cykla', 'cysta', 'dadda', 'dadel', 'dager',
'dagga', 'dagis', 'dalbo', 'daler', 'dalta', 'damma', 'dampa', 'damur', 'daner', 'dansa',
'dansk', 'darra', 'daska', 'dativ', 'dator', 'datum', 'debut', 'degig', 'deism', 'deist',
'dejta', 'dekad', 'dekal', 'dekor', 'delad', 'delfi', 'delge', 'delta', 'demon', 'denim',
'denna', 'denne', 'deppa', 'deras', 'derby', 'desto', 'devis', 'diffa', 'digel', 'diger',
'digga', 'digna', 'dikta', 'dilla', 'dille', 'dimma', 'dimpa', 'dimra', 'dingo', 'dipol',
'dippa', 'disco', 'disig', 'diska', 'disko', 'dissa', 'ditåt', 'divan', 'divig', 'djärv',
'docka', 'dofta', 'dolme', 'domna', 'domän', 'donna', 'doppa', 'drake', 'drama', 'dreja',
'dress', 'dreva', 'drift', 'drill', 'drink', 'driva', 'dront', 'dropp', 'drott', 'druid',
'druva', 'dryck', 'dryga', 'drypa', 'drägg', 'dräkt', 'dräll', 'dräng', 'dräpa', 'dråsa',
'dröja', 'dröna', 'drösa', 'dubba', 'ducka', 'duell', 'duett', 'dugga', 'dumma', 'dumpa',
'dunge', 'dunig', 'dunka', 'dunsa', 'dunst', 'dusch', 'dutta', 'dvala', 'dvärg', 'dygna',
'dylik', 'dynga', 'dypöl', 'dyrka', 'dyvåt', 'däcka', 'dämma', 'dämpa', 'dänga', 'därav',
'därom', 'därpå', 'därur', 'däråt', 'dålig', 'dåsig', 'dåtid', 'döing', 'dölja', 'dörja',
'ebola', 'efter', 'ekfat', 'eklöv', 'ekoby', 'ekoxe', 'eksem', 'elbas', 'elbil', 'eldig',
'elfel', 'elfte', 'eller', 'ellok', 'elnät', 'eloge', 'eltåg', 'elugn', 'emalj', 'emfas',
'emoji', 'enare', 'enbär', 'enfas', 'enhet', 'ening', 'enkel', 'enkla', 'enkom', 'enkät',
'enorm', 'enris', 'enrum', 'ensak', 'ensam', 'ental', 'envar', 'envig', 'envis', 'enzym',
'enögd', 'episk', 'ester', 'estet', 'etage', 'etapp', 'etisk', 'exakt', 'exfru', 'exman',
'extas', 'exter', 'extra', 'fabel', 'fabla', 'facit', 'fader', 'fadäs', 'fager', 'fakir',
'falla', 'falna', 'falsa', 'falsk', 'falun', 'famla', 'famna', 'famös', 'faner', 'farad',
'farao', 'farsa', 'fasad', 'fasan', 'fasen', 'fason', 'fasta', 'fatal', 'fatta', 'fatöl',
'fauna', 'favör', 'feber', 'fegis', 'fejka', 'fejsa', 'felas', 'femma', 'femte', 'ferie',
'festa', 'fetma', 'fetta', 'fiber', 'ficka', 'fiffa', 'figur', 'fikon', 'fikus', 'filea',
'filma', 'filur', 'fimpa', 'final', 'fingå', 'finka', 'finna', 'finne', 'finsk', 'finta',
'firma', 'firre', 'fisig', 'fiska', 'fiske', 'fjant', 'fjomp', 'fjong', 'fjord', 'fjutt',
'fjäll', 'fjärd', 'fjärt', 'fjäsk', 'flabb', 'flack', 'flagg', 'flams', 'flane', 'flank',
'flaxa', 'flera', 'flest', 'flexa', 'flika', 'flina', 'flink', 'flint', 'flipp', 'flirt',
'flisa', 'flock', 'flopp', 'flora', 'flott', 'fluff', 'fluga', 'fluor', 'flyga', 'flykt',
'flyta', 'flytt', 'fläck', 'fläka', 'fläkt', 'flämt', 'fläng', 'fläns', 'flärd', 'flärp',
'fläsk', 'fläta', 'flåsa', 'flöda', 'flöde', 'flöjt', 'flört', 'flöte', 'flöts', 'fnatt',
'fniss', 'fnysa', 'foder', 'fodra', 'fogde', 'fokal', 'fokus', 'folie', 'folka', 'forma',
'forsa', 'forta', 'forum', 'foton', 'frack', 'frakt', 'frank', 'frans', 'frasa', 'freda',
'frejd', 'freon', 'fresk', 'frige', 'frisk', 'frist', 'frita', 'friår', 'front', 'frost',
'frukt', 'frusa', 'frysa', 'fryst', 'fräck', 'fräsa', 'fräta', 'fråga', 'fröjd', 'fukta',
'fumla', 'funka', 'furie', 'furir', 'fuska', 'fylla', 'fylld', 'fynda', 'fyrop', 'fysik',
'fäbod', 'fäfot', 'fähus', 'fäkta', 'fälla', 'färga', 'färja', 'färsk', 'fästa', 'fäste',
'fågel', 'fålla', 'fånga', 'fånge', 'fånig', 'fårig', 'fåtal', 'födas', 'följa', 'följd',
'följe', 'förbi', 'förmå', 'förom', 'förra', 'förse', 'först', 'förut', 'gadda', 'gagga',
'gagna', 'galax', 'galej', 'galen', 'galge', 'galla', 'galon', 'gamma', 'gapig', 'garva',
'gaska', 'gasol', 'gasta', 'gavel', 'gebit', 'gegga', 'gehör', 'geist', 'gemak', 'gemen',
'gemyt', 'gemål', 'genom', 'genus', 'getto', 'gevär', 'gifta', 'gifte', 'gilla', 'gille',
'gipsa', 'girig', 'gissa', 'given', 'givet', 'gjord', 'gjuse', 'gjuta', 'glada', 'glans',
'glapp', 'glasa', 'glass', 'glatt', 'glesa', 'glida', 'glimt', 'glipa', 'glira', 'glosa',
'glufs', 'glugg', 'glutt', 'gläfs', 'glänt', 'glöda', 'glögg', 'gnabb', 'gnaga', 'gnata',
'gnejs', 'gneta', 'gnida', 'gnola', 'gnägg', 'gnäll', 'gnöla', 'godis', 'godta', 'golfa',
'golva', 'gorma', 'gosig', 'gosse', 'gotik', 'gotta', 'grabb', 'grada', 'grand', 'grann',
'grava', 'greja', 'grena', 'grepp', 'greve', 'grift', 'grill', 'grina', 'grind', 'gripa',
'grisa', 'groda', 'grodd', 'grogg', 'groll', 'gross', 'gruff', 'grund', 'grupp', 'grusa',
'gruva', 'grymt', 'gryna', 'gryta', 'gräla', 'gräma', 'gränd', 'gräns', 'gräsa', 'gräva',
'gråal', 'gråbo', 'gråna', 'gråta', 'grått', 'gröda', 'grönt', 'gröpa', 'gubbe', 'gudom',
'guida', 'guide', 'gulag', 'gulla', 'gulna', 'gumma', 'gummi', 'gunga', 'gunst', 'guppa',
'gurka', 'gutår', 'gynna', 'gäcka', 'gädda', 'gälda', 'gälla', 'gänga', 'gärda', 'gärde',
'gärna', 'gäspa', 'gästa', 'gåtåg', 'gökbo', 'gökur', 'gömma', 'gömme', 'hacka', 'haffa',
'hafsa', 'hagel', 'hagga', 'hagla', 'haiti', 'hajka', 'hajpa', 'halka', 'hallå', 'halsa',
'halta', 'halva', 'halvö', 'hamna', 'hampa', 'hamra', 'hands', 'hanka', 'hanne', 'harig',
'harka', 'harpa', 'harts', 'harva', 'haspa', 'hasta', 'hatta', 'havre', 'heder', 'hedra',
'hejda', 'hekto', 'helga', 'helig', 'helst', 'helår', 'hemby', 'hemma', 'hemsk', 'hemåt',
'herde', 'herre', 'hertz', 'hetsa', 'hetta', 'hicka', 'himla', 'hindu', 'hinka', 'hinna',
'hinta', 'hisna', 'hispa', 'hissa', 'hitta', 'hitåt', 'hjalt', 'hjord', 'hjort', 'hjula',
'hjälm', 'hjälp', 'hobby', 'hojta', 'holme', 'hopas', 'hoper', 'hoppa', 'hosta', 'hugga',
'hulka', 'humla', 'humle', 'humma', 'humor', 'humör', 'hurra', 'hurså', 'hurts', 'husar',
'husse', 'huvud', 'hydda', 'hydra', 'hyena', 'hyfsa', 'hygge', 'hylla', 'hylsa', 'hysch',
'hysta', 'hytta', 'hyvel', 'hyvla', 'häcka', 'hädan', 'häfta', 'häfte', 'häger', 'hägna',
'hägra', 'häkta', 'häkte', 'hälft', 'hälla', 'hälsa', 'hämma', 'hämna', 'hämnd', 'hämta',
'hända', 'hänga', 'häpen', 'häpna', 'härda', 'härja', 'härma', 'härva', 'hätta', 'hävda',
'hågad', 'hålig', 'hålla', 'hånle', 'hårig', 'håröm', 'höbal', 'höfta', 'höger', 'högst',
'hölje', 'höras', 'hörna', 'hösta', 'ideal', 'idiot', 'idyll', 'ifall', 'ifatt', 'ifrån',
'igång', 'ihjäl', 'ikapp', 'ikull', 'iller', 'ilska', 'immig', 'immun', 'index', 'ingen',
'inköp', 'inlån', 'innan', 'inrop', 'insjö', 'insyn', 'intag', 'intet', 'intim', 'intro',
'intyg', 'intåg', 'inuti', 'invid', 'invit', 'inöva', 'ironi', 'isbit', 'isblå', 'isboj',
'isfri', 'isgrå', 'ishav', 'isigt', 'iskub', 'islam', 'ispik', 'ister', 'istid', 'isvak',
'isvit', 'isydd', 'ituta', 'ivrig', 'jacka', 'jamen', 'jamma', 'jamsa', 'jamän', 'japan',
'jarop', 'javäl', 'jazza', 'jeppe', 'jippi', 'jobba', 'jogga', 'jojka', 'joker', 'jolle',
'jorda', 'joxig', 'jubel', 'jubla', 'julig', 'julöl', 'jumbo', 'junta', 'juvel', 'juver',
'jycke', 'jäkta', 'jämka', 'jämna', 'jämnt', 'jämra', 'jämte', 'jänta', 'jästa', 'jätte',
'jävig', 'jökel', 'jösse', 'kabal', 'kabel', 'kabin', 'kabla', 'kaffe', 'kagge', 'kajak',
'kakao', 'kakel', 'kakla', 'kalas', 'kalka', 'kalla', 'kalna', 'kalva', 'kamel', 'kamin',
'kamma', 'kanal', 'kanel', 'kanin', 'kanna', 'kanon', 'kanot', 'kanta', 'kappa', 'karat',
'karda', 'karma', 'karsk', 'karta', 'karva', 'kassa', 'kasse', 'kasta', 'katet', 'katod',
'kavaj', 'kavat', 'kavel', 'kavla', 'kaxig', 'kebab', 'kedja', 'kelig', 'kerub', 'kicka',
'kikna', 'killa', 'kille', 'kines', 'kiosk', 'kisel', 'kissa', 'kisse', 'kista', 'kivas',
'klabb', 'klack', 'kladd', 'klaff', 'klafs', 'klaga', 'klamp', 'klang', 'klank', 'klant',
'klapp', 'klara', 'klase', 'klass', 'klena', 'kleta', 'klibb', 'klick', 'klimp', 'kling',
'klink', 'klint', 'klipp', 'klirr', 'kliva', 'kloak', 'klona', 'kloss', 'klubb', 'kluck',
'kludd', 'klump', 'klunk', 'kluns', 'klura', 'klyka', 'klyva', 'klädd', 'klåda', 'klåpa',
'klösa', 'knack', 'knaka', 'knall', 'knapp', 'knarr', 'knasa', 'knata', 'knega', 'knekt',
'knipa', 'knirr', 'knixa', 'knoge', 'knopp', 'knorr', 'knott', 'knuff', 'knuta', 'knyck',
'knyst', 'knyta', 'knyte', 'knäck', 'knäpp', 'knåda', 'knåpa', 'knöka', 'knöla', 'kobbe',
'kobra', 'kofot', 'kofta', 'kokos', 'kolik', 'kolja', 'kolla', 'kolli', 'kollo', 'kolon',
'kombi', 'kombo', 'komet', 'komik', 'komma', 'kongo', 'konka', 'konst', 'konto', 'kopia',
'koppa', 'korka', 'korna', 'korre', 'korsa', 'korta', 'korus', 'korva', 'kossa', 'kosta',
'kotte', 'koöga', 'koögd', 'kpist', 'krafs', 'kraft', 'krage', 'krake', 'krama', 'kramp',
'krams', 'krans', 'krasa', 'krass', 'kraxa', 'kreta', 'kreti', 'krets', 'kriga', 'krill',
'kring', 'krisa', 'krita', 'krock', 'kroka', 'krona', 'kropp', 'kross', 'krubb', 'kruka',
'krull', 'krusa', 'krypa', 'kryss', 'kräka', 'kräks', 'kräla', 'kräma', 'kräva', 'kråka',
'kråma', 'kröna', 'kubik', 'kudde', 'kugga', 'kugge', 'kulla', 'kulle', 'kulör', 'kunna',
'kupol', 'kuppa', 'kurir', 'kurra', 'kursa', 'kurva', 'kusin', 'kutym', 'kuvös', 'kvack',
'kvala', 'kvarg', 'kvark', 'kvarn', 'kvart', 'kvast', 'kvick', 'kvida', 'kviga', 'kvist',
'kvitt', 'kväka', 'kväll', 'kväva', 'kväve', 'kyffe', 'kylig', 'kynne', 'kyrka', 'kyssa',
'käfta', 'kägel', 'kägla', 'kälke', 'källa', 'kämpa', 'kämpe', 'känga', 'känna', 'kärna',
'kärra', 'kärva', 'kånka', 'kåsör', 'köksö', 'kölad', 'körig', 'kötid', 'labba', 'labil',
'lacka', 'ladda', 'lager', 'lagom', 'lagra', 'lagun', 'lajva', 'lakan', 'lakej', 'lalla',
'lampa', 'landa', 'langa', 'lappa', 'larma', 'larva', 'laser', 'lassa', 'lasso', 'lasta',
'latin', 'latte', 'lavin', 'ledig', 'legal', 'lejon', 'lekis', 'lerig', 'lever', 'lider',
'liera', 'lifta', 'ligga', 'likna', 'likör', 'lilja', 'limbo', 'limma', 'limpa', 'linda',
'linje', 'linka', 'linne', 'lirka', 'lista', 'liten', 'liter', 'livad', 'ljuda', 'ljuga',
'lobba', 'lobby', 'locka', 'logga', 'logik', 'lojal', 'lokal', 'lomme', 'loppa', 'lorta',
'loska', 'lossa', 'lotsa', 'lotta', 'lotto', 'lucia', 'lucka', 'luden', 'luffa', 'lufsa',
'lufta', 'lugga', 'lugna', 'lukta', 'lulla', 'lumpa', 'lunch', 'lunga', 'lunne', 'lunsa',
'lunta', 'luras', 'lurig', 'luska', 'lussa', 'lusse', 'lusta', 'luven', 'lycka', 'lydig',
'lyfta', 'lykta', 'lynne', 'lyrik', 'lyxig', 'lyxåk', 'läcka', 'läder', 'läger', 'lägga',
'lägra', 'lämna', 'lämpa', 'länga', 'längd', 'länge', 'längs', 'länsa', 'lärka', 'läska',
'läspa', 'läsår', 'lätta', 'långa', 'långt', 'löfte', 'lömsk', 'lösen', 'lösge', 'macka',
'madam', 'mager', 'magma', 'magra', 'major', 'malta', 'mamba', 'mambo', 'mamma', 'maner',
'manet', 'manga', 'mango', 'manna', 'manus', 'marig', 'marin', 'maska', 'massa', 'masta',
'matad', 'match', 'matig', 'matkö', 'matos', 'matta', 'matte', 'maxad', 'mecka', 'medel',
'medge', 'media', 'medla', 'medta', 'mejla', 'melon', 'mened', 'menig', 'merit', 'mesig',
'messa', 'metan', 'meter', 'metod', 'metro', 'midja', 'mikro', 'milis', 'miljö', 'mimik',
'minne', 'minst', 'minus', 'minut', 'missa', 'misse', 'mista', 'misär', 'mixer', 'mjuka',
'mjäka', 'mjäll', 'mjöla', 'mjölk', 'mobba', 'mobil', 'mocka', 'modem', 'moder', 'modig',
'mogen', 'mogna', 'mojna', 'moped', 'moppe', 'mopsa', 'moral', 'morot', 'morra', 'morsa',
'morse', 'morsk', 'morän', 'mosig', 'mossa', 'motig', 'motiv', 'motor', 'motto', 'mucka',
'mulen', 'mulla', 'mulna', 'mumie', 'mumla', 'mumma', 'mumsa', 'musik', 'musta', 'mygel',
'mygga', 'mygla', 'mylla', 'mynna', 'mynta', 'mysig', 'mysko', 'mäkla', 'mäkta', 'mängd',
'märka', 'märke', 'märkt', 'mässa', 'mätta', 'månad', 'måste', 'måtta', 'möbel', 'mögel',
'mögla', 'mörda', 'mörka', 'mössa', 'nacka', 'nacke', 'nafsa', 'nagel', 'nagga', 'naken',
'nalla', 'nalle', 'namna', 'namne', 'narig', 'narra', 'nasal', 'natta', 'natur', 'navel',
'nedan', 'nedre', 'nedåt', 'neråt', 'netto', 'nicka', 'ninja', 'nisch', 'nisse', 'njure',
'njuta', 'nobba', 'nobel', 'nojig', 'nolla', 'nomad', 'norge', 'norpa', 'norra', 'norsk',
'notis', 'novis', 'nubbe', 'nudda', 'nudel', 'nunna', 'nutid', 'nyans', 'nyhet', 'nying',
'nykär', 'nylig', 'nylle', 'nylon', 'nynna', 'nypon', 'nyrik', 'nysnö', 'nysta', 'nytta',
'nyval', 'näbba', 'nämen', 'nämna', 'nämnd', 'näpen', 'näppe', 'närma', 'nästa', 'näste',
'näver', 'nåbar', 'någon', 'något', 'nåväl', 'nödig', 'nödår', 'nötig', 'oanad', 'obedd',
'oblat', 'oblyg', 'obygd', 'oböjd', 'ocean', 'ocker', 'också', 'odjur', 'odlad', 'odryg',
'odygd', 'odåga', 'odömd', 'odöpt', 'oenig', 'oense', 'offer', 'offra', 'oflyt', 'ofödd',
'ogift', 'ogräs', 'ohyra', 'ojämn', 'ojäst', 'oklar', 'oklok', 'okokt', 'oktan', 'oktav',
'okänd', 'olika', 'oljig', 'oljud', 'olust', 'oläkt', 'olärd', 'olåst', 'olöst', 'omaka',
'ombud', 'omild', 'omköp', 'omsyn', 'omtag', 'omtal', 'omval', 'omväg', 'opera', 'optik',
'order', 'ordna', 'oreda', 'oredd', 'orena', 'organ', 'orgel', 'orkan', 'ormbo', 'orsak',
'orädd', 'orätt', 'oröjd', 'osagd', 'osams', 'osann', 'osedd', 'ostig', 'osund', 'osåld',
'osökt', 'otalt', 'otukt', 'otydd', 'otäck', 'ovana', 'ovett', 'oviss', 'oxhud', 'oxöga',
'oäkta', 'packa', 'padda', 'pajas', 'paket', 'palla', 'panda', 'panel', 'panga', 'panik',
'panna', 'panta', 'paper', 'pappa', 'parad', 'paria', 'paris', 'parti', 'party', 'passa',
'pasta', 'pausa', 'pedal', 'pejla', 'pektå', 'penna', 'peppa', 'peruk', 'petig', 'piano',
'piffa', 'pigga', 'piket', 'pilla', 'pilot', 'pinal', 'pinka', 'pinne', 'pipig', 'pippi',
'pirat', 'pirog', 'pirra', 'piska', 'pissa', 'pixel', 'pizza', 'pjosk', 'pjäxa', 'plack',
'plagg', 'plana', 'plank', 'plask', 'plast', 'plats', 'platt', 'platå', 'pleti', 'plikt',
'pling', 'plint', 'plira', 'plita', 'plock', 'ploga', 'plomb', 'plopp', 'plugg', 'plump',
'plums', 'plupp', 'plurr', 'pluta', 'plutt', 'plätt', 'plåga', 'plåna', 'plåta', 'plöja',
'pocka', 'poesi', 'pojke', 'pokal', 'poker', 'polen', 'polio', 'polis', 'polka', 'polsk',
'polär', 'pompa', 'ponny', 'porig', 'porla', 'porta', 'porös', 'posta', 'potta', 'poäng',
'prakt', 'praoa', 'prata', 'preja', 'press', 'prick', 'prima', 'prins', 'prisa', 'progg',
'propp', 'prosa', 'prost', 'prova', 'pruta', 'prutt', 'pryda', 'pränt', 'präst', 'pröjs',
'pröva', 'psalm', 'psyka', 'psyke', 'pucko', 'pudel', 'puder', 'pudla', 'pudra', 'puffa',
'pulka', 'pulpa', 'pulsa', 'pumpa', 'punka', 'punkt', 'puppa', 'pussa', 'pusta', 'putsa',
'putta', 'pynta', 'pyton', 'pytsa', 'pytte', 'pälsa', 'pärla', 'päron', 'påbrå', 'påbud',
'pålle', 'påsig', 'påstå', 'påtår', 'påökt', 'pöbel', 'pölsa', 'pösig', 'quorn', 'radar',
'radda', 'radie', 'radio', 'radon', 'rafsa', 'ragga', 'ragla', 'raket', 'rally', 'ramla',
'ramma', 'ramsa', 'ranch', 'ranka', 'ranta', 'rappa', 'raska', 'raspa', 'rasta', 'ratta',
'ravin', 'rebus', 'redan', 'redig', 'regel', 'regla', 'regna', 'rejva', 'rejäl', 'rekyl',
'relik', 'reläa', 'remix', 'remsa', 'renko', 'rensa', 'repig', 'resår', 'retro', 'retur',
'revig', 'revir', 'ribba', 'rigga', 'rigid', 'rikta', 'rimma', 'ringa', 'rinna', 'rippa',
'risig', 'riska', 'rispa', 'rista', 'rival', 'rivig', 'robot', 'rodeo', 'roder', 'rodna',
'roffa', 'rolig', 'roman', 'rosig', 'rosta', 'rubba', 'rubin', 'rucka', 'rufsa', 'rugby',
'rulla', 'rulle', 'rumla', 'rumpa', 'runda', 'rusch', 'ruska', 'rusta', 'ruter', 'rutig',
'rutin', 'rycka', 'rygga', 'rykta', 'rykte', 'rymma', 'rynka', 'räcka', 'räcke', 'rädda',
'räfsa', 'räkna', 'ränna', 'ränta', 'rätta', 'rådda', 'rådig', 'råris', 'råtta', 'rökig',
'rörig', 'rösta', 'sabba', 'sabel', 'sabla', 'sadel', 'sadla', 'sakna', 'sakta', 'saldo',
'salig', 'saliv', 'salsa', 'salta', 'salva', 'samba', 'sambo', 'samla', 'samma', 'sanda',
'sansa', 'sarga', 'satsa', 'schas', 'scout', 'sedan', 'sedel', 'segel', 'seger', 'segla',
'segra', 'sekel', 'semla', 'senap', 'senig', 'senil', 'serum', 'serva', 'sexig', 'sfinx',
'siare', 'siden', 'sigma', 'sikta', 'sikte', 'silke', 'simma', 'sinka', 'sinne', 'sinus',
'sirap', 'siren', 'sista', 'sitta', 'sjuda', 'sjuka', 'sjukt', 'själv', 'sjåpa', 'sjöko',
'skabb', 'skada', 'skaft', 'skaka', 'skala', 'skald', 'skalp', 'skalv', 'skans', 'skara',
'skare', 'skarp', 'skarv', 'skata', 'skatt', 'skava', 'skeda', 'skela', 'skena', 'skepp',
'skick', 'skida', 'skift', 'skikt', 'skild', 'skina', 'skinn', 'skipa', 'skira', 'skiss',
'skiva', 'skjul', 'skjut', 'skock', 'skoja', 'skola', 'skolk', 'skona', 'skopa', 'skorr',
'skott', 'skraj', 'skral', 'skrap', 'skred', 'skrev', 'skrik', 'skrin', 'skrot', 'skruv',
'skryt', 'skrän', 'skräp', 'skrål', 'skuld', 'skull', 'skunk', 'skura', 'skurk', 'skuta',
'skutt', 'skydd', 'skygg', 'skyla', 'skylt', 'skymf', 'skymt', 'skytt', 'skägg', 'skäll',
'skämd', 'skämt', 'skära', 'skärm', 'skärp', 'skåda', 'skåla', 'skåra', 'sköld', 'skörd',
'sköta', 'sköte', 'sladd', 'slagg', 'slakt', 'slana', 'slang', 'slank', 'slant', 'slapp',
'slarv', 'slask', 'slatt', 'slava', 'sleva', 'slick', 'slint', 'slipa', 'slips', 'slira',
'slita', 'slopa', 'slott', 'sluka', 'slump', 'slurk', 'slusk', 'sluss', 'sluta', 'släde',
'släkt', 'släng', 'slänt', 'släpa', 'släta', 'slätt', 'slåss', 'slöja', 'slöjd', 'slösa',
'smack', 'smaka', 'smart', 'smask', 'smatt', 'smeka', 'smeta', 'smida', 'smide', 'smink',
'smisk', 'smita', 'smula', 'smuts', 'smyga', 'smäck', 'smäda', 'smäll', 'småle', 'smått',
'smöra', 'smörj', 'snabb', 'snack', 'snaps', 'snara', 'snark', 'snart', 'snava', 'snibb',
'snida', 'sniff', 'snipa', 'snitt', 'snobb', 'snodd', 'snoka', 'snora', 'snork', 'snudd',
'snurr', 'snusa', 'snutt', 'snuva', 'snyft', 'snygg', 'snyta', 'snäll', 'snäpp', 'snärt',
'snåla', 'snöby', 'snöig', 'snöra', 'snöre', 'socka', 'soffa', 'solig', 'solka', 'solur',
'somna', 'soppa', 'sorla', 'sotig', 'sovra', 'spade', 'spaka', 'spalt', 'spana', 'spann',
'spara', 'spark', 'sparv', 'spasm', 'speja', 'spela', 'spene', 'spets', 'spett', 'spexa',
'spika', 'spill', 'spinn', 'spion', 'spira', 'spisa', 'spjut', 'spola', 'spole', 'sport',
'spott', 'sprak', 'sprej', 'sprit', 'språk', 'spröd', 'spröt', 'spurt', 'späck', 'späda',
'spänd', 'spärr', 'spåna', 'spång', 'spåra', 'spöka', 'spöke', 'stack', 'stake', 'stall',
'stamp', 'stank', 'stare', 'stark', 'starr', 'start', 'staty', 'stava', 'stega', 'stege',
'steka', 'stena', 'stick', 'stift', 'stiga', 'still', 'sting', 'stins', 'stock', 'stoft',
'stoja', 'stolt', 'stopp', 'stork', 'storm', 'stram', 'strax', 'strid', 'strof', 'strul',
'strut', 'stryk', 'sträv', 'stråk', 'ström', 'studs', 'stuga', 'stuka', 'stump', 'stund',
'stuns', 'stupa', 'stuts', 'stuva', 'styck', 'stygg', 'stygn', 'styra', 'styre', 'städa',
'ställ', 'stänk', 'stäva', 'stång', 'stånk', 'stöka', 'stöld', 'stöna', 'stöpa', 'störa',
'stöta', 'sucka', 'sudda', 'sugen', 'sugga', 'summa', 'sumpa', 'super', 'surfa', 'surra',
'susen', 'sussa', 'svabb', 'svaja', 'svala', 'svalg', 'svamp', 'svank', 'svans', 'svara',
'svart', 'svarv', 'svepa', 'svets', 'svett', 'svida', 'svika', 'sving', 'svinn', 'svält',
'sväng', 'svära', 'svärd', 'svärm', 'sväva', 'sydon', 'syfta', 'sylta', 'synas',
'synda', 'synsk', 'synål', 'syren', 'syrra', 'syrsa', 'säcka', 'sägen', 'säker', 'säkra',
'sälja', 'sämre', 'sämst', 'sända', 'sänka', 'särbo', 'sätta', 'såbar', 'sådan', 'sådär',
'sålla', 'sårig', 'söder', 'sölig', 'sörja', 'sötma', 'tabbe', 'tablå', 'tacka', 'tafsa',
'tagel', 'tagga', 'takta', 'takås', 'talan', 'talka', 'tanda', 'tango', 'tanig', 'tanka',
'tanke', 'tapet', 'tappa', 'tarot', 'tassa', 'tavla', 'teddy', 'tefat', 'tegel', 'tehus',
'tejpa', 'tempo', 'tenor', 'tenta', 'teori', 'tesil', 'testa', 'tetig', 'tetra', 'texta',
'tiara', 'ticka', 'tidig', 'tiger', 'tigga', 'tills', 'tilta', 'timid', 'timme', 'tinga',
'tippa', 'tipsa', 'titel', 'titta', 'tjafs', 'tjata', 'tjena', 'tjing', 'tjock', 'tjura',
'tjuta', 'tjuva', 'tjäle', 'tjäna', 'tjära', 'tjärn', 'tobak', 'tokig', 'tolka', 'tolva',
'tomat', 'tomte', 'tonår', 'toppa', 'topsa', 'torde', 'torka', 'torna', 'torsk', 'total',
'tovig', 'trakt', 'trall', 'tramp', 'trams', 'trana', 'trasa', 'trast', 'tratt', 'trava',
'trend', 'treva', 'trick', 'trikå', 'tripp', 'triss', 'trist', 'trixa', 'troll', 'trona',
'trots', 'truga', 'trumf', 'trupp', 'tryck', 'trygg', 'tryne', 'tryta', 'träda', 'träff',
'träna', 'träsk', 'träta', 'tråka', 'tråla', 'tråna', 'trång', 'tröja', 'tröst', 'trött',
'tufsa', 'tugga', 'tukta', 'tumla', 'tumma', 'tumme', 'tumör', 'tunga', 'tunna', 'tuppa',
'turbo', 'tusch', 'tusen', 'tutta', 'tvaga', 'tveka', 'tvina', 'tving', 'tvist', 'tvärs',
'tvätt', 'tvåla', 'tycka', 'tycke', 'tygel', 'tygla', 'tyngd', 'tysta', 'täcka', 'täcke',
'täckt', 'tälja', 'tälta', 'tämja', 'tända', 'tänja', 'tänka', 'täppa', 'tävla', 'tålig',
'tårig', 'tårta', 'tölta', 'tömma', 'törne', 'törst', 'tösnö', 'uggla', 'ultra', 'umgås',
'undan', 'under', 'undgå', 'undra', 'undre', 'ungmö', 'unken', 'uppge', 'uppnå', 'uppta',
'uppåt', 'uroxe', 'urtid', 'urtyp', 'urval', 'utbud', 'utdöd', 'utför', 'uthus', 'utkik',
'utmed', 'utopi', 'utrop', 'utstå', 'utsug', 'uttag', 'uttal', 'utter', 'uttåg', 'utväg',
'utöka', 'utöva', 'vabba', 'vagga', 'vajer', 'vaken', 'vakna', 'vakta', 'valla', 'valpa',
'valsa', 'valår', 'valör', 'vanka', 'vante', 'vapen', 'varan', 'varav', 'varig', 'varje',
'varna', 'varpa', 'varse', 'varva', 'varåt', 'vaska', 'vecka', 'vegan', 'vekna', 'velig',
'vemod', 'venus', 'verka', 'vespa', 'vicka', 'video', 'vidga', 'vifta', 'vilde', 'vilja',
'villa', 'vilse', 'vimla', 'vimsa', 'vinda', 'vinge', 'vinka', 'vinna', 'vinst', 'vinyl',
'vippa', 'virka', 'virke', 'virra', 'virus', 'visir', 'viska', 'vispa', 'visst', 'visum',
'vitna', 'vodka', 'vokal', 'volta', 'volym', 'vovve', 'vraka', 'vrede', 'vrida', 'vrist',
'vräka', 'vråla', 'vrång', 'vurma', 'vurpa', 'vuxen', 'väcka', 'väder', 'vädja', 'vädra',
'vädur', 'vägra', 'välja', 'välta', 'vända', 'vänja', 'vänta', 'väpna', 'värde', 'värja',
'värka', 'värld', 'värma', 'värme', 'värna', 'värpa', 'värva', 'väsen', 'väska', 'vässa',
'vätte', 'växel', 'växla', 'vågig', 'vålla', 'vånda', 'vårda', 'vårta', 'vörda', 'wales',
'yacht', 'yngel', 'yngla', 'yppig', 'yrhet', 'yrsel', 'yrsnö', 'yster', 'ytlig', 'yttra',
'yttre', 'yxegg', 'zappa', 'zebra', 'zenit', 'zooma', 'äckel', 'äckla', 'ägare', 'äldre',
'äldst', 'älgko', 'älska', 'ändra', 'ängel', 'äpple', 'ärgig', 'ärlig', 'ärrig', 'ärtig',
'ätbar', 'ätlig', 'åbäke', 'ådrig', 'åhöra', 'åkare', 'åkdon', 'åkeri', 'åktur', 'åland',
'ålder', 'ånger', 'ångra', 'årlig', 'årtag', 'årtal', 'åsido', 'åsikt', 'åskam', 'åskby',
'åskig', 'åtala', 'åttio', 'ödeby', 'ödsla', 'ökänd', 'öland', 'ölfat', 'ölhak', 'ölost',
'ömhet', 'ömkan', 'ömsom', 'önska', 'öppen', 'öppna', 'örfil', 'örike', 'öring', 'örnbo',
'örtte', 'öster', 'östra', 'övrig'];

var Ta=new Set(['abasi', 'abaya', 'abbes', 'abels', 'abers', 'abjad', 'abren', 'abret', 'absid', 'abuja',
'accis', 'accra', 'acehs', 'ackas', 'ackes', 'ackis', 'ackja', 'acnen', 'acnes', 'acren',
'acres', 'acryl', 'adaks', 'adams', 'addar', 'addas', 'addat', 'addes', 'addis', 'adela',
'adeln', 'adels', 'adlad', 'adlar', 'adlas', 'adlat', 'admin', 'adobe', 'adolf', 'adult',
'affes', 'affin', 'afgaf', 'afgif', 'afgår', 'afgås', 'aflad', 'aflar', 'aflas', 'aflat',
'afled', 'aflid', 'afoni', 'afser', 'afses', 'afsky', 'afsåg', 'after', 'aftös', 'afvel',
'agade', 'agans', 'agape', 'agars', 'agata', 'agats', 'agave', 'agdas', 'agens', 'agget',
'agios', 'agiot', 'agmyr', 'agnad', 'agnar', 'agnas', 'agnen', 'agnes', 'agnet', 'agors',
'agrar', 'agtak', 'aguti', 'ahlin', 'ahmed', 'ainas', 'airen', 'airer', 'akant', 'aknen',
'aknes', 'aktad', 'aktar', 'aktas', 'aktat', 'akten', 'aktin', 'aktor', 'aktra', 'aktre',
'akuta', 'akuts', 'alans', 'alant', 'alars', 'albas', 'albin', 'albit', 'albor', 'albyl',
'albys', 'alder', 'alens', 'alers', 'alets', 'alfan', 'alfas', 'alfat', 'alfen', 'alfer',
'alfta', 'algen', 'alger', 'algot', 'alice', 'alika', 'alkan', 'alkas', 'alken', 'alkor',
'alkyd', 'alkyn', 'allah', 'allas', 'allel', 'allen', 'allin', 'allod', 'allom', 'allor',
'almar', 'almas', 'almen', 'alnar', 'alnen', 'alnös', 'alpen', 'alper', 'altar', 'altea',
'alten', 'aluns', 'alvas', 'alven', 'alver', 'alves', 'alvin', 'ambis', 'ambra', 'amids',
'amins', 'amish', 'ammad', 'amman', 'ammar', 'ammas', 'ammat', 'ammis', 'ammor', 'amors',
'amour', 'ampla', 'ampra', 'ampre', 'anade', 'anala', 'anale', 'analt', 'anans', 'anats',
'andan', 'andar', 'anden', 'andes', 'andor', 'andre', 'andur', 'aneby', 'anemi', 'anför',
'angaf', 'angav', 'angel', 'anger', 'anges', 'angif', 'angiv', 'angår', 'angör', 'anita',
'anjas', 'anjon', 'ankan', 'ankar', 'ankas', 'ankis', 'ankom', 'ankor', 'anlöp', 'anmäl',
'annas', 'annat', 'annes', 'annie', 'anods', 'anomi', 'anors', 'anoxi', 'anred', 'ansad',
'ansar', 'ansas', 'ansat', 'anser', 'anses', 'ansåg', 'ansök', 'antag', 'antar', 'antas',
'antes', 'antog', 'anton', 'antyd', 'anund', 'anuri', 'apade', 'apans', 'apats', 'apeln',
'apels', 'aplar', 'apors', 'appar', 'appen', 'aprak', 'apsis', 'arabs', 'arans', 'arbrå',
'arbus', 'arean', 'areas', 'arens', 'areol', 'areor', 'arets', 'argas', 'arges', 'argot',
'argus', 'arian', 'arias', 'arild', 'arior', 'arkar', 'arken', 'arket', 'arlöv', 'armar',
'armen', 'armod', 'arnes', 'aroms', 'arons', 'arors', 'arrad', 'arrak', 'arrar', 'arras',
'arrat', 'arren', 'arret', 'arsar', 'arsel', 'arsen', 'arsin', 'artad', 'artar', 'artas',
'artat', 'arten', 'arter', 'artur', 'aruba', 'arven', 'arvet', 'arvid', 'asade', 'asado',
'asars', 'asats', 'asbra', 'asens', 'asets', 'asful', 'asgam', 'asgod', 'asint', 'askad',
'askan', 'askar', 'askas', 'askat', 'asken', 'askes', 'asket', 'askim', 'askor', 'aspar',
'aspen', 'aspås', 'assai', 'assar', 'assen', 'asset', 'astas', 'astat', 'aster', 'astra',
'asurn', 'asurs', 'asyls', 'ataxi', 'atcho', 'atens', 'atjeh', 'atoms', 'atoni', 'atopi',
'attji', 'atypi', 'augur', 'aulan', 'aulas', 'auloi', 'aulor', 'aulos', 'aural', 'auran',
'auras', 'auror', 'avböj', 'avdra', 'avecs', 'aveln', 'avels', 'avena', 'avens', 'avers',
'avets', 'avför', 'avgav', 'avger', 'avges', 'avgiv', 'avgår', 'avgås', 'avgör', 'avgöt',
'avhys', 'aviat', 'avier', 'avige', 'avigt', 'avins', 'avklä', 'avkom', 'avkyl', 'avlad',
'avlar', 'avlas', 'avled', 'avlid', 'avlut', 'avlys', 'avlär', 'avläs', 'avlös', 'avmät',
'avoga', 'avoge', 'avogt', 'avrad', 'avres', 'avrop', 'avråd', 'avser', 'avses', 'avsäg',
'avsåg', 'avsök', 'avtag', 'avtar', 'avtas', 'avtog', 'avtvå', 'avvek', 'avvik', 'axade',
'axats', 'axeln', 'axels', 'axens', 'axets', 'axial', 'axill', 'axlad', 'axlar', 'axlas',
'axlat', 'axons', 'aylas', 'azers', 'azurn', 'azurs', 'babbe', 'babyn', 'babys', 'backs',
'badad', 'badar', 'badas', 'badat', 'baden', 'badet', 'bagar', 'bagel', 'bagen', 'bagis',
'bahai', 'bahrs', 'baila', 'bajet', 'bajta', 'bakad', 'bakar', 'bakas', 'bakat', 'baken',
'baket', 'bakus', 'bakut', 'balar', 'balbo', 'balen', 'baler', 'balks', 'balla', 'balls',
'ballt', 'balts', 'banad', 'banar', 'banas', 'banat', 'banco', 'bands', 'banen', 'bangs',
'banko', 'banks', 'banne', 'banns', 'banor', 'bantu', 'baras', 'barbi', 'bards', 'baren',
'barer', 'baris', 'barks', 'barms', 'barna', 'barns', 'barrs', 'baryt', 'basad', 'basas',
'basat', 'basel', 'basen', 'baser', 'basis', 'baske', 'basks', 'bassa', 'basso', 'batat',
'batch', 'baxad', 'baxar', 'baxas', 'baxat', 'beach', 'beans', 'beata', 'bebin', 'bebor',
'bebos', 'becca', 'becks', 'bedas', 'bedda', 'beder', 'bedes', 'bedit', 'bedja', 'bedts',
'bedöm', 'befar', 'befor', 'begav', 'beger', 'begge', 'begiv', 'begum', 'begår', 'begås',
'behof', 'behån', 'behås', 'behöf', 'behöv', 'beiga', 'beigt', 'beira', 'bejen', 'bejer',
'beklä', 'bekom', 'belag', 'beler', 'beles', 'bella', 'belle', 'bells', 'belog', 'belys',
'belåg', 'bemöt', 'benan', 'benar', 'benas', 'benat', 'benen', 'benet', 'benga', 'bengs',
'bengt', 'benim', 'benin', 'benke', 'benny', 'benor', 'benso', 'beppe', 'bered', 'berga',
'bergh', 'bergs', 'berit', 'bernt', 'beror', 'berra', 'berta', 'berts', 'beråd', 'berör',
'beser', 'beses', 'beske', 'besko', 'besks', 'beskt', 'besov', 'bests', 'besyr', 'besys',
'besåg', 'besår', 'besås', 'betad', 'betal', 'betan', 'betar', 'betas', 'betat', 'betel',
'beten', 'beter', 'betes', 'betet', 'betog', 'betor', 'betse', 'betta', 'betts', 'betty',
'betvå', 'betyd', 'betål', 'bevar', 'bidan', 'bidar', 'bidas', 'bidat', 'bienn', 'biens',
'biets', 'biffa', 'biffs', 'bigge', 'bihål', 'bikts', 'bilad', 'bilan', 'bilar', 'bilas',
'bilat', 'bilds', 'bilen', 'billy', 'bilor', 'binas', 'binds', 'binka', 'binna', 'binne',
'binom', 'bions', 'biord', 'bipod', 'biran', 'biras', 'birks', 'birma', 'biror', 'birre',
'bisam', 'bisol', 'bitar', 'bitch', 'biter', 'bitet', 'bitit', 'bitna', 'bitne', 'biton',
'bitti', 'bjuds', 'bjuvs', 'bjära', 'bjöds', 'blads', 'blajs', 'blarr', 'blase', 'blejd',
'bleks', 'blekt', 'bleve', 'blevo', 'blide', 'blidö', 'bliga', 'blini', 'blint', 'blitt',
'bliva', 'bloar', 'bloas', 'bloat', 'blods', 'bloga', 'bloms', 'blont', 'bloss', 'blots',
'blusa', 'blyet', 'blyga', 'blygd', 'blyge', 'blygs', 'blygt', 'bläda', 'blära', 'blådt',
'blåis', 'blåna', 'blöde', 'blöds', 'blöte', 'blöts', 'blött', 'boans', 'board', 'bobbs',
'bobby', 'bobin', 'bocks', 'bodar', 'bodas', 'bodde', 'bodil', 'bodon', 'bodos', 'boels',
'boens', 'boern', 'boers', 'boets', 'boett', 'boffa', 'bogar', 'bogen', 'bogey', 'boggi',
'bohus', 'bojan', 'bojar', 'bojas', 'bojen', 'bojor', 'bokad', 'bokal', 'bokar', 'bokas',
'bokat', 'bokna', 'bolby', 'bolen', 'bolet', 'bolid', 'bolin', 'bolls', 'bolus', 'boman',
'bombs', 'bomän', 'bonar', 'bonas', 'bonat', 'bonda', 'bonga', 'bongs', 'bonna', 'bonne',
'booma', 'boors', 'boost', 'boota', 'boots', 'borat', 'borax', 'borde', 'bords', 'boren',
'boret', 'borgs', 'boris', 'borna', 'borne', 'borrs', 'bosch', 'boson', 'bosse', 'botad',
'botar', 'botas', 'botat', 'boten', 'botet', 'botts', 'bovar', 'boven', 'bovin', 'boxad',
'boxar', 'boxat', 'boxen', 'braga', 'brage', 'bragt', 'braja', 'brajd', 'brajs', 'braks',
'brann', 'brast', 'brats', 'braås', 'break', 'brede', 'breds', 'brefs', 'brett', 'brevs',
'brien', 'bries', 'brims', 'brinn', 'brion', 'brios', 'briss', 'brita', 'broar', 'broas',
'broat', 'broby', 'bronk', 'brors', 'brosh', 'bruds', 'bruks', 'bruna', 'brune', 'bruno',
'bryda', 'bryet', 'brygg', 'brylå', 'bryns', 'brynt', 'bryts', 'brytt', 'bräks', 'bräkt',
'bräms', 'bränn', 'bränt', 'bråda', 'bråde', 'bråen', 'bråks', 'brått', 'bröds', 'bröet',
'bröna', 'bröns', 'bröts', 'buade', 'buats', 'bubba', 'bubon', 'budar', 'budas', 'budat',
'buden', 'budet', 'buffa', 'buffe', 'bugar', 'bugas', 'bugat', 'buggs', 'bukar', 'buken',
'bukig', 'bukts', 'bulan', 'bulas', 'bulks', 'bulna', 'bulor', 'bults', 'bunge', 'bunts',
'buost', 'burad', 'burar', 'buras', 'burat', 'buren', 'buret', 'bureå', 'burit', 'burks',
'burma', 'burna', 'burne', 'busar', 'busas', 'busat', 'busen', 'buset', 'butta', 'butyl',
'byars', 'bybon', 'bybor', 'bybos', 'byffe', 'bygds', 'byggs', 'byggt', 'byiga', 'byigt',
'bykar', 'bykas', 'byken', 'byker', 'bykes', 'byket', 'bykte', 'bykts', 'byrån', 'byrås',
'byske', 'bysts', 'bytas', 'byten', 'byter', 'bytes', 'bytet', 'bytta', 'bytte', 'bytts',
'byxad', 'byxan', 'byxas', 'byxis', 'byxor', 'bäbis', 'bäcks', 'bädds', 'bäfva', 'bälar',
'bälas', 'bälat', 'bälgs', 'bände', 'bänds', 'bänks', 'bänts', 'bäras', 'bären', 'bäres',
'bäret', 'bärsa', 'bärår', 'bässe', 'bästa', 'bäste', 'bävar', 'bävas', 'bävat', 'bådan',
'bådar', 'bådas', 'bådat', 'båden', 'bådes', 'bådor', 'bågar', 'bågen', 'båges', 'bålar',
'bålda', 'bålde', 'bålen', 'bålet', 'bånge', 'bårar', 'bårds', 'båren', 'båsar', 'båsen',
'båset', 'båtar', 'båtas', 'båtat', 'båten', 'bödig', 'bögar', 'bögas', 'bögat', 'bögen',
'bögig', 'böjar', 'böjas', 'böjda', 'böjde', 'böjen', 'böjer', 'böjes', 'böjts', 'bökar',
'bökas', 'bökat', 'bölar', 'bölas', 'bölat', 'bölds', 'bönan', 'bönar', 'bönas', 'bönat',
'bönen', 'böner', 'bönor', 'börds', 'börje', 'börna', 'böset', 'bösig', 'bösta', 'bötad',
'bötar', 'bötas', 'bötat', 'böter', 'bötes', 'bötte', 'bötts', 'cacha', 'cache', 'cajun',
'calla', 'calle', 'calls', 'camma', 'capen', 'caper', 'capes', 'capon', 'capos', 'capot',
'carin', 'carls', 'carol', 'carpa', 'carry', 'carte', 'casha', 'casta', 'cavan', 'cavas',
'celia', 'celli', 'cells', 'cents', 'ceres', 'cesar', 'cesur', 'chant', 'chefs', 'chica',
'chick', 'chict', 'chief', 'chill', 'chipp', 'chosa', 'chuck', 'ciggs', 'cilie', 'cissa',
'cissi', 'cityn', 'claes', 'clara', 'clips', 'codex', 'colin', 'conga', 'conny', 'coola',
'coole', 'coolt', 'corny', 'corps', 'corso', 'costa', 'coupe', 'cover', 'covid', 'coxar',
'coxen', 'crack', 'crawl', 'crazy', 'credo', 'crepe', 'crona', 'cross', 'cubas', 'culpa',
'cupen', 'cuper', 'cuppa', 'curie', 'curts', 'cyana', 'cyane', 'cyant', 'dabba', 'dabbs',
'dabst', 'daesh', 'dagar', 'dagas', 'dagat', 'dagen', 'daggs', 'dagny', 'dagös', 'dahls',
'dairi', 'dajms', 'dakar', 'dakta', 'dalad', 'dalar', 'dalas', 'dalat', 'dalby', 'dalen',
'dalet', 'dalsk', 'dalum', 'damen', 'damer', 'damig', 'damms', 'damps', 'danad', 'danar',
'danas', 'danat', 'dance', 'dandy', 'danen', 'danka', 'danks', 'danne', 'dante', 'darna',
'darts', 'dasar', 'dasat', 'dasen', 'dases', 'datan', 'datas', 'daten', 'dater', 'dates',
'datja', 'david', 'davna', 'deala', 'debet', 'debil', 'decil', 'deffa', 'degar', 'degas',
'degat', 'degel', 'degen', 'dehär', 'dejes', 'dejsa', 'dejts', 'dekan', 'dekis', 'delar',
'delas', 'delat', 'delen', 'demor', 'demot', 'denar', 'depån', 'depås', 'deraf', 'derom',
'derpå', 'dessa', 'desse', 'detta', 'deuce', 'devon', 'devot', 'diade', 'diana', 'dians',
'diats', 'dicks', 'diens', 'diets', 'digra', 'digre', 'dikar', 'dikas', 'dikat', 'diken',
'dikes', 'diket', 'dikts', 'dildo', 'dills', 'dimps', 'dinar', 'dines', 'dinge', 'dinka',
'diods', 'dioik', 'dione', 'diors', 'dipps', 'dirka', 'dirks', 'dirra', 'disas', 'disen',
'diser', 'diset', 'disks', 'disör', 'disös', 'ditin', 'diton', 'ditos', 'ditot', 'ditut',
'divas', 'divis', 'divor', 'dixie', 'diyns', 'djerå', 'djinn', 'djonk', 'djupa', 'djupe',
'djups', 'djupt', 'djura', 'djurs', 'dnepr', 'doade', 'doans', 'doats', 'dobra', 'dofts',
'dogms', 'dojan', 'dojas', 'dojon', 'dojor', 'dojos', 'doken', 'doket', 'dolce', 'dolda',
'dolde', 'dolka', 'dolks', 'dolly', 'dolma', 'dolmn', 'dolsk', 'dolts', 'dolus', 'dolös',
'domar', 'domen', 'domer', 'domma', 'donar', 'donas', 'donat', 'donau', 'donen', 'donet',
'donsö', 'donut', 'dopad', 'dopar', 'dopas', 'dopat', 'dopen', 'dopet', 'dopps', 'dorer',
'doris', 'dorsk', 'dosan', 'dosas', 'dosen', 'doser', 'dosis', 'dosor', 'doter', 'dotra',
'doula', 'downs', 'doyen', 'drack', 'draft', 'draga', 'drage', 'dragg', 'drags', 'drams',
'drank', 'drapa', 'draps', 'dratt', 'drefs', 'drevs', 'drick', 'drite', 'drive', 'drivs',
'droga', 'droge', 'drogo', 'drogs', 'drots', 'drufs', 'druga', 'drule', 'dryad', 'dryge',
'drygt', 'dryps', 'drypt', 'drägt', 'drämd', 'dräms', 'drämt', 'dränk', 'dräps', 'dräpt',
'drätt', 'dråps', 'dråse', 'dröjt', 'drömd', 'dröms', 'drömt', 'dröps', 'dröse', 'dröst',
'duade', 'duala', 'duals', 'dualt', 'duats', 'dubai', 'dubie', 'dufva', 'dugat', 'dugde',
'duger', 'dugit', 'dukad', 'dukar', 'dukas', 'dukat', 'duken', 'dulce', 'duman', 'dumbo',
'dumme', 'dummy', 'dumps', 'dunen', 'duner', 'dunet', 'dunks', 'duons', 'duors', 'durka',
'durks', 'durra', 'duska', 'dusts', 'dusör', 'duvan', 'duvas', 'duved', 'duven', 'duvet',
'duvna', 'duvor', 'dverg', 'dyads', 'dygds', 'dygns', 'dykas', 'dyken', 'dyker', 'dyket',
'dykte', 'dykts', 'dynan', 'dynas', 'dynen', 'dyner', 'dynor', 'dyrks', 'dyrön', 'dysäv',
'dytåg', 'däcks', 'dädan', 'dägga', 'dälds', 'dämme', 'dängd', 'dängs', 'dängt', 'dänka',
'däraf', 'däran', 'därin', 'därnt', 'dästa', 'däste', 'däven', 'dävet', 'dävna', 'dävne',
'däxel', 'dåden', 'dådet', 'dådra', 'dånad', 'dånar', 'dånas', 'dånat', 'dånen', 'dånet',
'dårad', 'dårar', 'dåras', 'dårat', 'dåren', 'dåres', 'dåsar', 'dåsas', 'dåsat', 'dåset',
'dödad', 'dödar', 'dödas', 'dödat', 'dödde', 'döden', 'dödes', 'dödis', 'döljs', 'dömas',
'dömda', 'dömde', 'dömer', 'dömes', 'dömts', 'dönar', 'dönas', 'dönat', 'dönen', 'dönet',
'döpas', 'döper', 'döpes', 'döpta', 'döpte', 'döpts', 'dörrn', 'dörrs', 'dösen', 'dötts',
'eagle', 'ebbar', 'ebbas', 'ebbat', 'ebben', 'ebbes', 'edane', 'edans', 'eddan', 'eddas',
'eddie', 'eddor', 'edens', 'edera', 'eders', 'edert', 'edets', 'edikt', 'edith', 'edits',
'edlas', 'edlig', 'edman', 'edors', 'edvin', 'efebs', 'efors', 'eftis', 'eftre', 'egade',
'egala', 'egalt', 'egans', 'egats', 'egdes', 'eggad', 'eggar', 'eggas', 'eggat', 'eggen',
'egids', 'egils', 'egnar', 'egnas', 'egnat', 'egona', 'egons', 'egors', 'egots', 'ehuru',
'einar', 'eivor', 'ejder', 'ekade', 'ekans', 'ekare', 'ekarn', 'ekars', 'ekats', 'ekeby',
'ekens', 'ekern', 'ekers', 'ekerö', 'ekets', 'eklog', 'eklut', 'eklöf', 'ekman', 'ekona',
'ekons', 'ekors', 'ekots', 'ekrad', 'ekrar', 'ekras', 'ekrat', 'eksjö', 'ekträ', 'elack',
'elaka', 'elake', 'elakt', 'eland', 'elast', 'eldad', 'eldar', 'eldas', 'eldat', 'elden',
'elegi', 'elens', 'elevs', 'elfva', 'elgar', 'elgen', 'elias', 'elina', 'elins', 'elisa',
'elise', 'elits', 'eljes', 'ellas', 'ellen', 'ellie', 'ellys', 'ellös', 'elmer', 'elofs',
'elsas', 'elsie', 'elton', 'elvan', 'elvas', 'elvin', 'elvor', 'elväg', 'embla', 'emils',
'emily', 'emirs', 'emlig', 'emman', 'emmas', 'emmor', 'emmys', 'emona', 'emons', 'emots',
'empir', 'empor', 'emuer', 'emuns', 'enade', 'enars', 'enats', 'enbar', 'endiv', 'enens',
'enets', 'engla', 'eniga', 'enige', 'enigt', 'enkan', 'enkas', 'enkle', 'enkor', 'ennui',
'ensad', 'ensar', 'ensas', 'ensat', 'entre', 'enögt', 'eocen', 'eoler', 'eonen', 'eoner',
'eosin', 'epans', 'epods', 'epoks', 'epope', 'epors', 'epoxi', 'erans', 'erfar', 'erfor',
'erica', 'erics', 'erika', 'eriks', 'ernst', 'ernår', 'ernås', 'erors', 'erzya', 'esbos',
'eskil', 'eslöv', 'esmen', 'espri', 'esras', 'essay', 'essen', 'esset', 'essän', 'essäs',
'esten', 'etans', 'etens', 'etern', 'eters', 'ethos', 'etiks', 'etiop', 'etrar', 'etsad',
'etsar', 'etsas', 'etsat', 'ettan', 'ettas', 'etter', 'ettor', 'etuin', 'etuis', 'etuit',
'etyds', 'etyls', 'etyns', 'eugen', 'euron', 'euros', 'evald', 'evart', 'event', 'evert',
'eviga', 'evige', 'evigt', 'exark', 'exens', 'exets', 'exils', 'exing', 'exons', 'exots',
'expon', 'expos', 'fabbe', 'facil', 'facks', 'facto', 'fadda', 'fagen', 'fagra', 'fagre',
'faila', 'fajta', 'fajts', 'fakta', 'falck', 'falka', 'falks', 'falls', 'famas', 'famns',
'fanan', 'fanas', 'fanen', 'fanet', 'fanns', 'fanny', 'fanor', 'fants', 'faran', 'faras',
'faren', 'fares', 'farin', 'farit', 'farma', 'farms', 'faror', 'farsi', 'farts', 'fasar',
'fasas', 'fasat', 'faser', 'fasor', 'faste', 'faten', 'fatet', 'fatig', 'fatin', 'fatwa',
'fauns', 'faute', 'favvo', 'faxad', 'faxar', 'faxas', 'faxat', 'faxen', 'faxet', 'febra',
'fecit', 'feens', 'feeri', 'feers', 'fegar', 'fegas', 'fegat', 'fegen', 'feger', 'fejad',
'fejan', 'fejar', 'fejas', 'fejat', 'fejda', 'fejds', 'fejor', 'fekal', 'felad', 'felan',
'felar', 'felat', 'feldt', 'felen', 'felet', 'felix', 'felor', 'felte', 'femme', 'femti',
'fenan', 'fenas', 'fenix', 'fenol', 'fenor', 'fenyl', 'ferre', 'fesen', 'feser', 'fests',
'fetal', 'fetan', 'fetas', 'fetna', 'fetto', 'fetts', 'fezen', 'fezer', 'ficks', 'fidla',
'fidus', 'fiffi', 'fight', 'fijis', 'fikad', 'fikan', 'fikar', 'fikas', 'fikat', 'fiken',
'fiket', 'fikor', 'filar', 'filas', 'filat', 'filem', 'filen', 'filer', 'filet', 'filip',
'fille', 'films', 'filta', 'filts', 'fimps', 'finen', 'fines', 'finge', 'fingo', 'finis',
'finit', 'finja', 'finks', 'finns', 'fints', 'fiols', 'firad', 'firar', 'firas', 'firat',
'firns', 'fisar', 'fisas', 'fisen', 'fiser', 'fises', 'fisit', 'fisks', 'fista', 'fitta',
'fixad', 'fixar', 'fixas', 'fixat', 'fixen', 'fixie', 'fjams', 'fjuns', 'fjäla', 'fjära',
'fjärr', 'fjäsa', 'fjäts', 'fjång', 'fjöla', 'flaga', 'flake', 'flark', 'flarn', 'flata',
'flate', 'flatt', 'flema', 'flens', 'flere', 'fliks', 'fling', 'flins', 'flita', 'flits',
'floby', 'floda', 'flods', 'flors', 'fluid', 'flukt', 'flums', 'flush', 'fluss', 'flydd',
'flyen', 'flyer', 'flyet', 'flygg', 'flygs', 'flygt', 'flyna', 'flyns', 'flyts', 'fläks',
'flådd', 'flått', 'flöds', 'flögo', 'flögs', 'flöja', 'flött', 'fnasa', 'fnask', 'fnutt',
'fnyst', 'fnöso', 'foaje', 'fobin', 'fobis', 'focka', 'focks', 'fogad', 'fogar', 'fogas',
'fogat', 'fogel', 'fogen', 'fokad', 'fokar', 'fokas', 'fokat', 'folat', 'folda', 'folds',
'folio', 'folke', 'folks', 'fonds', 'fondy', 'fonem', 'fonen', 'foner', 'fonon', 'fonts',
'foran', 'foras', 'force', 'forms', 'forna', 'forne', 'fornt', 'foror', 'forte', 'forts',
'fotad', 'fotar', 'fotas', 'fotat', 'foten', 'fotos', 'fotot', 'fotös', 'foula', 'fouls',
'foyer', 'frame', 'frami', 'franc', 'freak', 'freds', 'freja', 'frejs', 'frett', 'freud',
'friad', 'friar', 'frias', 'friat', 'frick', 'frida', 'frids', 'frigg', 'fritt', 'froda',
'frode', 'frods', 'fromt', 'frond', 'frosa', 'fruar', 'fruas', 'fruat', 'fruga', 'fruns',
'fryle', 'fryna', 'fräls', 'fräna', 'fräne', 'fränt', 'fräst', 'fräts', 'frätt', 'fröen',
'fröer', 'fröet', 'fröna', 'fröns', 'frösa', 'fröss', 'fröst', 'fröts', 'frövi', 'fubba',
'fucka', 'fudge', 'fugan', 'fugas', 'fugor', 'fukts', 'fulla', 'fulle', 'fullo', 'fullt',
'fulna', 'fulöl', 'funks', 'funna', 'funne', 'funno', 'funta', 'funts', 'furan', 'furas',
'furen', 'furor', 'furst', 'furun', 'furus', 'furut', 'fusks', 'futil', 'futta', 'futts',
'fuxar', 'fuxen', 'fykas', 'fyker', 'fykte', 'fykts', 'fylen', 'fyles', 'fylet', 'fylka',
'fylke', 'fylle', 'fyllo', 'fylls', 'fyllt', 'fylum', 'fynds', 'fyran', 'fyrar', 'fyras',
'fyrat', 'fyren', 'fyrer', 'fyror', 'fyrti', 'fysen', 'fäder', 'fäets', 'fägna', 'fälad',
'fälen', 'fälgs', 'fälld', 'fälle', 'fälls', 'fällt', 'fälts', 'fänad', 'fänas', 'fänge',
'fänta', 'färde', 'färds', 'färgs', 'färla', 'färma', 'färmt', 'färna', 'färre', 'färst',
'fästs', 'fäsör', 'fåkar', 'fåken', 'fåker', 'fålar', 'fålen', 'fåles', 'fånar', 'fånen',
'fånes', 'fånet', 'fångs', 'fårad', 'fåran', 'fårar', 'fåras', 'fårat', 'fårbo', 'fåren',
'fåret', 'fåror', 'fåten', 'fåter', 'fåtts', 'födan', 'födda', 'födde', 'föder', 'födes',
'födor', 'fölad', 'fölar', 'fölas', 'fölat', 'fölen', 'fölet', 'följs', 'följt', 'föllo',
'fönad', 'fönar', 'fönas', 'fönat', 'fönen', 'förar', 'föras', 'förda', 'förde', 'föreg',
'fören', 'förer', 'föres', 'föret', 'förgå', 'förig', 'förna', 'förns', 'förre', 'förrn',
'förta', 'förti', 'förts', 'förty', 'förät', 'förår', 'föråt', 'föröd', 'fösas', 'föser',
'föses', 'fösta', 'föste', 'fösts', 'fötts', 'gabbe', 'gabon', 'gadds', 'gagat', 'gagen',
'gager', 'gages', 'gaget', 'gaggs', 'gagns', 'gaily', 'gajar', 'gajen', 'galan', 'galas',
'galde', 'galer', 'galet', 'galit', 'gallo', 'galls', 'galna', 'galne', 'galor', 'galts',
'galva', 'galär', 'gamad', 'gamar', 'gamas', 'gamat', 'gamba', 'gamea', 'gamen', 'gamet',
'gamig', 'gamla', 'gamle', 'ganka', 'gapad', 'gapan', 'gapar', 'gapas', 'gapat', 'gapen',
'gapet', 'gapor', 'garam', 'garde', 'gards', 'garns', 'garvs', 'gasad', 'gasar', 'gasas',
'gasat', 'gasen', 'gaser', 'gashs', 'gassa', 'gasts', 'gatan', 'gatas', 'gaten', 'gater',
'gates', 'gator', 'gatts', 'gauge', 'gauss', 'gavla', 'gayly', 'gazis', 'gdzie', 'gecko',
'gefle', 'gefta', 'gejds', 'gelea', 'gelen', 'geler', 'gelet', 'gemet', 'gemla', 'genar',
'genas', 'genat', 'genbo', 'genen', 'gener', 'genes', 'genie', 'genis', 'genre', 'genta',
'genua', 'geoid', 'georg', 'gerda', 'gerds', 'gerna', 'gerts', 'gests', 'getan', 'geten',
'getts', 'ghana', 'gibba', 'gibbs', 'gicks', 'gidde', 'gideå', 'gifts', 'gifva', 'gifwa',
'gigen', 'giget', 'gigue', 'gikts', 'gilja', 'gills', 'gillt', 'gimel', 'gimos', 'ginge',
'gingo', 'ginna', 'ginst', 'gipar', 'gipas', 'gipat', 'gippa', 'gipyr', 'girad', 'girar',
'giras', 'girat', 'giren', 'giron', 'giros', 'girot', 'gista', 'giter', 'gitta', 'gitte',
'givan', 'givar', 'givas', 'giver', 'gives', 'givit', 'givna', 'givor', 'gjort', 'gjuts',
'glace', 'glaci', 'gladd', 'glade', 'gladh', 'glads', 'gladt', 'glams', 'glana', 'glane',
'glava', 'glavs', 'glenn', 'glest', 'glete', 'glids', 'glien', 'gliet', 'glima', 'glina',
'glinn', 'glins', 'gliom', 'glisa', 'gliss', 'glist', 'gliså', 'glits', 'globs', 'glodd',
'glopp', 'gloso', 'glott', 'glunt', 'gluon', 'glupa', 'glysa', 'glyst', 'glytt', 'gläds',
'gläns', 'glåma', 'glöds', 'glömd', 'glöms', 'glömt', 'glöta', 'glött', 'gnagd', 'gnagt',
'gnarp', 'gnava', 'gneds', 'gneka', 'gnets', 'gnids', 'gnist', 'gnoms', 'gnott', 'gnuer',
'gnuko', 'gnuns', 'gnurk', 'gnyet', 'gnytt', 'gnöls', 'goare', 'goarn', 'goast', 'godan',
'godas', 'godes', 'godår', 'goffe', 'gojan', 'gojas', 'gojor', 'golar', 'golas', 'golat',
'golem', 'golfs', 'golvs', 'gonad', 'gorån', 'gosad', 'gosar', 'gosas', 'gosat', 'goten',
'goter', 'gotsk', 'gotte', 'gouda', 'govän', 'graal', 'grace', 'grads', 'grafs', 'graft',
'grahn', 'grain', 'grams', 'grans', 'grant', 'granö', 'grave', 'gravs', 'gravt', 'green',
'grejs', 'greks', 'grens', 'grepe', 'greps', 'greta', 'grins', 'grips', 'grisk', 'groft',
'groma', 'grops', 'grott', 'grova', 'grove', 'grovt', 'grums', 'grunt', 'gryne', 'gryns',
'gryts', 'grytt', 'gräda', 'gräfd', 'gräfs', 'gräft', 'gräll', 'gräls', 'gräms', 'grämt',
'gräng', 'gräto', 'gräts', 'grävd', 'grävs', 'grävt', 'grådt', 'gråts', 'grödd', 'gröds',
'gröen', 'gröer', 'gröes', 'gröet', 'gröna', 'gröne', 'gröpe', 'gröps', 'gröpt', 'gröta',
'gröts', 'grött', 'guams', 'guano', 'guava', 'gubba', 'gubbs', 'gucka', 'gudar', 'gudda',
'guden', 'guiro', 'gulan', 'gulas', 'gulds', 'guler', 'gulle', 'gulls', 'gulor', 'gumpa',
'gumse', 'gunde', 'gunås', 'guppy', 'gurad', 'guran', 'gurar', 'guras', 'gurat', 'gurli',
'guror', 'gurra', 'gurun', 'gurus', 'guska', 'gusum', 'gutar', 'guten', 'gutes', 'guugu',
'guvet', 'gylfs', 'gylta', 'gymma', 'gympa', 'gyoza', 'gyron', 'gyros', 'gyrot', 'gyrus',
'gädja', 'gäfle', 'gäfva', 'gäfve', 'gälar', 'gälds', 'gälen', 'gäler', 'gälle', 'gälls',
'gällt', 'gällö', 'gämmå', 'gängs', 'gärds', 'gärin', 'gäris', 'gästs', 'gävle', 'gåfva',
'gåing', 'gånga', 'gånge', 'gångs', 'gårde', 'gårds', 'gårns', 'gåsen', 'gåtan', 'gåtas',
'gåtor', 'gåtts', 'gåvan', 'gåvas', 'gåvor', 'gödas', 'gödda', 'gödde', 'göder', 'gödes',
'göfab', 'gökar', 'gökas', 'gökat', 'göken', 'gölar', 'gölen', 'gömda', 'gömde', 'gömts',
'göpen', 'görad', 'göran', 'görar', 'göras', 'görat', 'görel', 'gören', 'görer', 'göres',
'görom', 'gösar', 'gösen', 'gösse', 'gösta', 'götar', 'götas', 'göten', 'göter', 'götes',
'götet', 'götha', 'götts', 'haags', 'habil', 'habit', 'habos', 'haden', 'hades', 'hadom',
'hafra', 'hafre', 'hafts', 'hafva', 'hafwa', 'hagar', 'hagen', 'hages', 'haiku', 'hajad',
'hajar', 'hajas', 'hajat', 'hajen', 'hajom', 'hajps', 'hakad', 'hakan', 'hakar', 'hakas',
'hakat', 'haken', 'hakes', 'haket', 'hakig', 'hakka', 'hakon', 'hakor', 'halal', 'halar',
'halas', 'halat', 'halft', 'halis', 'halle', 'halls', 'halma', 'halms', 'halps', 'halte',
'halts', 'halvt', 'hambo', 'hamit', 'hamla', 'hamns', 'hanar', 'handa', 'hanen', 'hanes',
'hanks', 'hanna', 'hanns', 'hansa', 'hanzi', 'happy', 'haram', 'harar', 'harbo', 'harem',
'haren', 'hares', 'harma', 'harms', 'harrs', 'harry', 'harvs', 'hasar', 'hasat', 'hasch',
'hasen', 'hasha', 'hasor', 'hassa', 'hasse', 'hasts', 'hatad', 'hatar', 'hatas', 'hatat',
'hatet', 'hatts', 'hausa', 'havas', 'haven', 'haver', 'haves', 'havet', 'havom', 'heats',
'heavy', 'hebre', 'hebys', 'hedar', 'hedda', 'heden', 'hedes', 'hedet', 'hedin', 'hedna',
'hedne', 'hegel', 'hegge', 'heidi', 'heila', 'hejad', 'hejar', 'hejas', 'hejat', 'hejdå',
'hejen', 'hejet', 'hejig', 'helad', 'helan', 'helar', 'helas', 'helat', 'helen', 'helgd',
'helge', 'helgs', 'helix', 'helna', 'helny', 'helor', 'helot', 'heltå', 'hemom', 'hemsa',
'hemse', 'hemul', 'henar', 'henen', 'henke', 'henna', 'henne', 'henny', 'henom', 'henry',
'henån', 'herms', 'heros', 'herrn', 'herrs', 'herrå', 'herse', 'herul', 'hesna', 'hetat',
'heter', 'hette', 'hetär', 'hexan', 'hexod', 'hexos', 'hiade', 'hidös', 'hijab', 'hilda',
'hilka', 'hilma', 'hindi', 'hinds', 'hinks', 'hinns', 'hints', 'hions', 'hippa', 'hippe',
'hippt', 'hirds', 'hitin', 'hitom', 'hitre', 'hivad', 'hivar', 'hivas', 'hivat', 'hjalp',
'hjelm', 'hjelp', 'hjons', 'hjuls', 'hoade', 'hoars', 'hoats', 'hober', 'hobys', 'hodda',
'hoets', 'hojad', 'hojar', 'hojas', 'hojat', 'hojen', 'hokus', 'holka', 'holks', 'holma',
'holms', 'holts', 'homma', 'homon', 'homos', 'homot', 'honan', 'honas', 'honom', 'honor',
'hopad', 'hopar', 'hopat', 'hopen', 'hopps', 'horan', 'horar', 'horas', 'horat', 'horda',
'hords', 'horet', 'horns', 'horor', 'horst', 'hosor', 'hossa', 'hotad', 'hotar', 'hotas',
'hotat', 'hoten', 'hotet', 'hotta', 'houri', 'house', 'hovar', 'hovas', 'hoven', 'hovet',
'hovra', 'hovås', 'hubbs', 'hubot', 'hudar', 'huden', 'huena', 'huens', 'huets', 'hugad',
'hugat', 'hugen', 'huggs', 'hugna', 'hugos', 'hugsa', 'hukad', 'hukar', 'hukas', 'hukat',
'huken', 'hulda', 'hulde', 'hulpe', 'hulth', 'hults', 'human', 'humid', 'humpa', 'humus',
'hunds', 'hunka', 'hunks', 'hunna', 'hunsa', 'hursa', 'husad', 'husan', 'husas', 'husat',
'husby', 'husch', 'husen', 'huset', 'husit', 'husly', 'husor', 'husum', 'husun', 'husus',
'hutad', 'hutar', 'hutas', 'hutat', 'hutta', 'huvan', 'huvar', 'huvas', 'huven', 'huves',
'huvet', 'huvor', 'hvalf', 'hvals', 'hvarf', 'hvari', 'hvars', 'hvart', 'hvass', 'hvete',
'hvila', 'hvita', 'hvite', 'hvitt', 'hvred', 'hvrid', 'hwart', 'hwila', 'hygga', 'hylle',
'hymen', 'hymla', 'hymns', 'hynda', 'hypar', 'hypas', 'hypat', 'hyran', 'hyras', 'hyrax',
'hyrda', 'hyrde', 'hyres', 'hyror', 'hyrts', 'hysas', 'hyser', 'hyses', 'hyska', 'hyssa',
'hyste', 'hysts', 'hytte', 'hytts', 'häcks', 'hädar', 'hädas', 'hädat', 'häfda', 'häfde',
'häfdt', 'häfna', 'häfts', 'häfva', 'häfwa', 'häggs', 'hägns', 'hälar', 'hälen', 'hälld',
'hälls', 'hällt', 'hälsö', 'hälta', 'hände', 'hängd', 'hänge', 'hängs', 'hängt', 'hänka',
'hänne', 'häpet', 'häpne', 'härad', 'häraf', 'härar', 'härav', 'härds', 'hären', 'härke',
'härks', 'härnt', 'härom', 'härpå', 'härur', 'häråt', 'hästs', 'hätsk', 'hävas', 'hävde',
'hävds', 'hävel', 'häven', 'häver', 'häves', 'hävet', 'hävit', 'hävla', 'hävna', 'hävne',
'hävts', 'häxan', 'häxas', 'häxig', 'häxor', 'hågat', 'hågen', 'hågsa', 'håkan', 'håken',
'hålan', 'hålas', 'hålen', 'hålet', 'hållf', 'hålls', 'hållt', 'hålor', 'hånad', 'hånar',
'hånas', 'hånat', 'hånet', 'hånna', 'hårda', 'hårde', 'håren', 'håret', 'håsan', 'håsar',
'håsas', 'håsat', 'håsor', 'håvad', 'håvan', 'håvar', 'håvas', 'håvat', 'håven', 'håvor',
'höets', 'höfts', 'högan', 'högar', 'högas', 'högen', 'höges', 'höggs', 'högra', 'högre',
'höjas', 'höjda', 'höjde', 'höjds', 'höjer', 'höjes', 'höjts', 'hökar', 'höken', 'hölja',
'höljd', 'höljs', 'höljt', 'hölls', 'höllt', 'hölös', 'hönan', 'hönas', 'hönor', 'hönsa',
'hönös', 'hörby', 'hörda', 'hörde', 'hördu', 'hören', 'hörer', 'höres', 'hörne', 'hörns',
'hörru', 'hörts', 'hösts', 'hötad', 'hötas', 'höter', 'hötes', 'hötta', 'hötte', 'hötts',
'hövan', 'hövas', 'höves', 'hövts', 'höörs', 'ibiza', 'icing', 'idaho', 'idars', 'idats',
'iddes', 'idena', 'idens', 'ident', 'idets', 'idiom', 'idkad', 'idkar', 'idkas', 'idkat',
'idoga', 'idoge', 'idogt', 'idols', 'idres', 'iduns', 'ifjol', 'ifjor', 'ifred', 'ifver',
'ifyll', 'iföra', 'iförd', 'iförs', 'ifört', 'igeln', 'igels', 'iggad', 'iggar', 'iggas',
'iggat', 'iglar', 'iglon', 'igloo', 'iglor', 'iglos', 'ijåns', 'ikalf', 'ikalv', 'ikast',
'ikeas', 'iklyv', 'ikläd', 'ikläm', 'iklär', 'ikläs', 'ikons', 'iktus', 'ilade', 'iland',
'ilars', 'ilats', 'ilbud', 'ilens', 'ileum', 'illis', 'ilsan', 'ilsbo', 'ilskt', 'iltåg',
'image', 'imago', 'imams', 'imfri', 'imhuv', 'immad', 'imman', 'immar', 'immas', 'immat',
'immor', 'impad', 'impar', 'impas', 'impat', 'imrör', 'inade', 'inatt', 'inbox', 'indal',
'indie', 'indra', 'inert', 'infam', 'infil', 'infix', 'infon', 'infos', 'inför', 'ingas',
'ingav', 'inger', 'inges', 'inget', 'ingiv', 'ingår', 'ingås', 'ingöt', 'inhak', 'inhav',
'inhys', 'inkan', 'inkar', 'inkas', 'inken', 'inkok', 'inkom', 'inlas', 'inled', 'inlär',
'inlät', 'inlåt', 'inlös', 'inmat', 'inner', 'input', 'inrar', 'inred', 'inrim', 'inrym',
'inser', 'inses', 'inspo', 'insup', 'insåg', 'insöp', 'insöv', 'intar', 'intas', 'intig',
'intog', 'inuit', 'inval', 'invig', 'inäga', 'iowas', 'ipren', 'iraks', 'irans', 'irene',
'irish', 'irisk', 'irjas', 'irmas', 'irrar', 'irras', 'irrat', 'iröra', 'isade', 'isaks',
'isars', 'isats', 'isatt', 'isdös', 'isens', 'isiga', 'islag', 'islom', 'islår', 'ismen',
'ismer', 'ismås', 'isnot', 'isnål', 'issjö', 'issåg', 'istes', 'isväg', 'isyta', 'isyxa',
'isälv', 'isäng', 'itänd', 'ivans', 'ivars', 'ivern', 'ivers', 'ivran', 'ivrar', 'ivras',
'ivrat', 'jabba', 'jacke', 'jacks', 'jacob', 'jaens', 'jaets', 'jagad', 'jagar', 'jagas',
'jagat', 'jagen', 'jaget', 'jagga', 'jagts', 'jakad', 'jakan', 'jakar', 'jakas', 'jakat',
'jaken', 'jakko', 'jakob', 'jakts', 'jaleo', 'jalla', 'jalle', 'jamar', 'jamat', 'jambs',
'jamet', 'janas', 'janne', 'janos', 'jante', 'jaord', 'jappa', 'japps', 'jarls', 'jason',
'jasså', 'javan', 'javas', 'jeans', 'jeeps', 'jemen', 'jemka', 'jemna', 'jemne', 'jemnt',
'jemte', 'jenka', 'jenny', 'jerka', 'jerns', 'jerry', 'jesus', 'jetar', 'jeten', 'jette',
'jihad', 'jimmy', 'jippo', 'jobbs', 'jocka', 'jocke', 'jodda', 'joden', 'jodet', 'jodid',
'joels', 'johan', 'johns', 'joina', 'joint', 'jojje', 'jojon', 'jojor', 'jojos', 'jokks',
'jolla', 'jolta', 'jomen', 'jonas', 'jonen', 'joner', 'jones', 'jonna', 'jonne', 'jonny',
'jonte', 'joppe', 'jords', 'josef', 'josen', 'joser', 'josse', 'josua', 'jotan', 'jotas',
'jotat', 'jotun', 'joule', 'joxar', 'joxas', 'joxat', 'joxet', 'jubas', 'jucka', 'jucks',
'judar', 'judas', 'juden', 'judes', 'judit', 'judon', 'judos', 'jufts', 'jugge', 'juice',
'jular', 'julas', 'julen', 'julia', 'julie', 'julis', 'julle', 'julön', 'jumpa', 'junis',
'junos', 'juras', 'juris', 'jurta', 'juryn', 'jurys', 'justa', 'juste', 'jutar', 'juten',
'jutes', 'jutsk', 'jympa', 'jädra', 'jäger', 'jäkel', 'jäkla', 'jäkts', 'jälla', 'jämjö',
'jämne', 'järbo', 'järfs', 'järna', 'järns', 'järpe', 'järva', 'järvs', 'jäsas', 'jäser',
'jäses', 'jäsig', 'jäste', 'jästs', 'jävar', 'jävat', 'jävel', 'jäven', 'jävet', 'jävla',
'jörns', 'jötun', 'kabul', 'kabyl', 'kacka', 'kader', 'kadin', 'kadis', 'kairo', 'kaisa',
'kajal', 'kajan', 'kajas', 'kajbo', 'kajen', 'kajer', 'kajka', 'kajor', 'kajsa', 'kakan',
'kakas', 'kakin', 'kakis', 'kakor', 'kakte', 'kalde', 'kalif', 'kalix', 'kalks', 'kalle',
'kalls', 'kallt', 'kalma', 'kalmt', 'kaluv', 'kalvs', 'kammu', 'kamps', 'kanad', 'kanak',
'kanan', 'kanar', 'kanas', 'kanat', 'kandi', 'kanik', 'kanji', 'kanor', 'kants', 'kanyl',
'kapad', 'kapar', 'kapas', 'kapat', 'kapen', 'kapet', 'kapok', 'kappe', 'kapun', 'karel',
'karen', 'karet', 'karga', 'karge', 'kargt', 'karib', 'karin', 'karit', 'karln', 'karls',
'karms', 'karpa', 'karps', 'karre', 'karst', 'karts', 'karup', 'kasad', 'kasar', 'kasas',
'kasat', 'kasen', 'kases', 'kasko', 'kasst', 'kasts', 'kasus', 'katal', 'katig', 'katja',
'katsa', 'katse', 'katta', 'katts', 'kauri', 'kavle', 'kaxar', 'kaxen', 'kaxes', 'kazak',
'kazoo', 'keans', 'kediv', 'keffa', 'keffe', 'kefft', 'kefir', 'kelar', 'kelas', 'kelat',
'kelen', 'kelet', 'kelim', 'kelna', 'kelne', 'kemin', 'kemis', 'kendo', 'kenny', 'kenta',
'kents', 'kenya', 'keors', 'kepan', 'kepas', 'kepor', 'keram', 'kesar', 'kesas', 'kesat',
'keson', 'kesos', 'ketch', 'keton', 'kevin', 'kexen', 'kexet', 'khaki', 'khmer', 'kians',
'kiasm', 'kicki', 'kicks', 'kiden', 'kidet', 'kidla', 'kievs', 'kikar', 'kikat', 'kiken',
'kikra', 'kilar', 'kilat', 'kilen', 'kilig', 'killi', 'kilon', 'kilos', 'kilot', 'kilts',
'kimma', 'kinas', 'kinds', 'kinin', 'kinka', 'kinky', 'kinna', 'kinne', 'kippa', 'kirra',
'kisar', 'kisas', 'kisat', 'kisen', 'kiset', 'kitin', 'kiton', 'kitta', 'kivar', 'kivat',
'kivet', 'kivik', 'kivin', 'kivis', 'kiwin', 'kiwis', 'kjams', 'kjell', 'kjols', 'kjusa',
'klans', 'klare', 'klart', 'klast', 'klatt', 'klava', 'klave', 'klavs', 'klein', 'klema',
'klene', 'klent', 'klerk', 'kleva', 'klevs', 'kliad', 'kliar', 'klias', 'kliat', 'kliet',
'klifs', 'klina', 'klitt', 'klivs', 'kloka', 'kloke', 'klokt', 'klons', 'klors', 'klots',
'klott', 'klove', 'klovå', 'kluka', 'kluta', 'kluts', 'klydd', 'klyfd', 'klyfs', 'klyft',
'klyks', 'klyvd', 'klyvs', 'klyvt', 'kläck', 'kläda', 'kläde', 'kläds', 'klägg', 'klämd',
'kläms', 'klämt', 'kläng', 'kläpp', 'klätt', 'klådd', 'klått', 'klöfs', 'klöka', 'klöst',
'klövs', 'knagg', 'knaks', 'knalt', 'knape', 'knark', 'knarp', 'knast', 'kneds', 'knegs',
'kneip', 'kneka', 'kneps', 'knick', 'knips', 'knirk', 'knisp', 'kniva', 'knivs', 'knock',
'knodd', 'knoga', 'knopa', 'knops', 'knort', 'knorv', 'knose', 'knota', 'knots', 'knubb',
'knugs', 'knull', 'knusa', 'knuts', 'knyla', 'knyts', 'knytt', 'knäar', 'knäas', 'knäat',
'knäet', 'knäna', 'knäns', 'knäts', 'knätt', 'knödd', 'knöls', 'knöts', 'knött', 'koala',
'kocka', 'kocks', 'kodad', 'kodar', 'kodas', 'kodat', 'koden', 'koder', 'kodes', 'kodex',
'kodon', 'kofen', 'koger', 'koine', 'kojan', 'kojar', 'kojas', 'kojat', 'kojen', 'kojer',
'kojor', 'kokad', 'kokan', 'kokar', 'kokas', 'kokat', 'koken', 'koket', 'kokig', 'kokor',
'koksa', 'kokta', 'kokte', 'kokts', 'kolad', 'kolan', 'kolar', 'kolas', 'kolat', 'kolen',
'koler', 'kolet', 'kolin', 'kolit', 'kolka', 'kolls', 'kolna', 'kolor', 'kolos', 'kolts',
'kolvs', 'koman', 'komas', 'komis', 'kommo', 'komna', 'kompa', 'komps', 'komst', 'konan',
'konas', 'konen', 'koner', 'konga', 'konjn', 'konjv', 'konne', 'konny', 'konor', 'konti',
'kopal', 'kopek', 'kopps', 'kopra', 'kopts', 'korad', 'koral', 'koran', 'korar', 'koras',
'korat', 'korda', 'kords', 'korea', 'koren', 'koret', 'korgs', 'korks', 'korma', 'korns',
'korpa', 'korps', 'korso', 'korte', 'korts', 'korum', 'korvs', 'kosan', 'kosts', 'kotan',
'kotas', 'kotor', 'kovan', 'kovas', 'koves', 'koxad', 'koxar', 'koxas', 'koxat', 'koyot',
'kraal', 'kraba', 'krabb', 'kraga', 'kragg', 'kraja', 'kraka', 'krana', 'krank', 'krapp',
'krats', 'kratt', 'kravs', 'kredd', 'kreml', 'kreol', 'krian', 'krias', 'krigs', 'krika',
'krims', 'krior', 'kripp', 'kroat', 'krogs', 'kroki', 'kroks', 'kroma', 'kroms', 'kruda',
'krumt', 'krupp', 'kruså', 'kruta', 'kruts', 'kruxa', 'kryar', 'kryat', 'krydd', 'krymp',
'kryps', 'krytt', 'kräkt', 'kräms', 'kräng', 'kränk', 'kräpp', 'kräsa', 'krävd', 'krävs',
'krävt', 'kråla', 'kröka', 'kröks', 'krökt', 'kröne', 'kröns', 'krönt', 'kröps', 'krösa',
'kuala', 'kuban', 'kubas', 'kubba', 'kubbe', 'kubbs', 'kuben', 'kuber', 'kucku', 'kufar',
'kufen', 'kujon', 'kukar', 'kuken', 'kulak', 'kulan', 'kular', 'kulas', 'kulat', 'kulen',
'kulet', 'kulig', 'kulka', 'kulls', 'kulna', 'kulor', 'kults', 'kumla', 'kunde', 'kunds',
'kungs', 'kupad', 'kupan', 'kupar', 'kupas', 'kupat', 'kupig', 'kupor', 'kupps', 'kurar',
'kuras', 'kurat', 'kurds', 'kuren', 'kurer', 'kuria', 'kurre', 'kurrs', 'kurts', 'kusar',
'kusch', 'kusen', 'kuses', 'kuska', 'kusks', 'kusse', 'kusts', 'kutad', 'kutan', 'kutar',
'kutas', 'kutat', 'kuten', 'kutet', 'kutig', 'kutta', 'kuvad', 'kuvar', 'kuvas', 'kuvat',
'kvads', 'kvaft', 'kvald', 'kvalm', 'kvals', 'kvalt', 'kvant', 'kvass', 'kvava', 'kvavt',
'kveds', 'kveke', 'kvesa', 'kvest', 'kvfot', 'kvidd', 'kvids', 'kvint', 'kvirr', 'kvots',
'kväda', 'kväde', 'kväds', 'kväfd', 'kväft', 'kväkt', 'kvälj', 'kväsa', 'kväst', 'kvävd',
'kvävs', 'kvävt', 'kwött', 'kyffa', 'kyfos', 'kylan', 'kylar', 'kylas', 'kylda', 'kylde',
'kylen', 'kyler', 'kyles', 'kylna', 'kylsa', 'kylts', 'kymig', 'kymus', 'kyska', 'kyskt',
'kysst', 'kytta', 'käcka', 'käcke', 'käcks', 'käckt', 'käfts', 'käkad', 'käkar', 'käkas',
'käkat', 'käken', 'käkes', 'käket', 'kälar', 'kälen', 'källö', 'kälta', 'kända', 'kände',
'känns', 'känts', 'käppi', 'käpps', 'käran', 'kärar', 'kärat', 'käril', 'kärls', 'kärrs',
'kärve', 'kärvt', 'kätte', 'käxar', 'käxas', 'käxat', 'käxen', 'käxet', 'käxig', 'kådan',
'kådas', 'kådig', 'kådis', 'kådor', 'kåges', 'kåkar', 'kåken', 'kålen', 'kåpan', 'kåpas',
'kåpor', 'kårar', 'kåras', 'kårel', 'kåren', 'kårer', 'kåres', 'kåsan', 'kåsas', 'kåsor',
'kåsös', 'kåtan', 'kåtas', 'kåtor', 'kåvis', 'köade', 'köats', 'köers', 'köken', 'köket',
'köksa', 'kölar', 'kölds', 'kölen', 'kölna', 'kölns', 'könad', 'könar', 'könas', 'könat',
'könen', 'könet', 'köpas', 'köpen', 'köper', 'köpes', 'köpet', 'köpta', 'köpte', 'köpts',
'körad', 'körar', 'köras', 'körat', 'körda', 'körde', 'kören', 'körer', 'köres', 'köret',
'körka', 'körna', 'körts', 'kössa', 'kötta', 'kötts', 'laban', 'labbs', 'laber', 'labra',
'lacke', 'lacks', 'lackt', 'ladan', 'ladas', 'ladde', 'ladds', 'lades', 'lador', 'lafsa',
'lagad', 'lagan', 'lagar', 'lagas', 'lagat', 'lagda', 'lagen', 'lages', 'laget', 'lagga',
'laggs', 'lagts', 'laila', 'lajda', 'lajer', 'lajvs', 'lakar', 'lakas', 'lakat', 'laken',
'lakes', 'lakun', 'laman', 'lamas', 'lamat', 'lamed', 'lamer', 'lamma', 'lamms', 'lamor',
'lanar', 'lanas', 'lanat', 'lands', 'landå', 'lanen', 'laner', 'lanet', 'lanka', 'lanne',
'lapad', 'lapar', 'lapas', 'lapat', 'lapis', 'lapps', 'lapsk', 'laren', 'larer', 'largo',
'larms', 'larvs', 'lasad', 'laska', 'lasra', 'lasse', 'lasts', 'lasur', 'lasyr', 'latar',
'latas', 'latat', 'laten', 'later', 'lates', 'latex', 'lativ', 'latta', 'latus', 'laura',
'lavan', 'lavar', 'lavas', 'laven', 'laves', 'lavyr', 'laxar', 'laxen', 'laxås', 'leasa',
'lebbs', 'ledad', 'ledan', 'ledar', 'ledas', 'ledat', 'ledda', 'ledde', 'ledds', 'leden',
'leder', 'ledes', 'ledet', 'leeds', 'lefde', 'leffe', 'lefva', 'lefve', 'lefwa', 'legad',
'legan', 'legas', 'legat', 'legen', 'leget', 'legga', 'legio', 'legor', 'legär', 'leias',
'leifs', 'lejas', 'lejda', 'lejde', 'lejer', 'lejes', 'lejts', 'lekar', 'lekas', 'leken',
'leker', 'lekes', 'lekte', 'lekts', 'lelle', 'lemma', 'lemna', 'lemur', 'lenas', 'lenin',
'lenis', 'lento', 'leone', 'leons', 'leppe', 'lepra', 'leran', 'leras', 'leren', 'leret',
'leror', 'lerum', 'letad', 'letal', 'letar', 'letas', 'letat', 'letts', 'levan', 'levas',
'levat', 'levda', 'levde', 'level', 'leven', 'leves', 'levit', 'levla', 'levor', 'levra',
'levts', 'lexan', 'lexas', 'lexem', 'lexor', 'lhasa', 'liams', 'lians', 'liars', 'liber',
'lidar', 'lidas', 'liden', 'lides', 'lidet', 'lidit', 'lidna', 'liens', 'lifts', 'ligan',
'ligas', 'liger', 'liggs', 'light', 'ligor', 'likar', 'likas', 'likat', 'liken', 'likes',
'liket', 'lilla', 'lille', 'lilly', 'limas', 'limen', 'limes', 'limit', 'limon', 'limos',
'linan', 'linas', 'linde', 'lindh', 'linds', 'linet', 'lingo', 'linns', 'linor', 'linus',
'linux', 'lipad', 'lipar', 'lipas', 'lipat', 'lipen', 'lipid', 'lipig', 'lipom', 'lirad',
'liran', 'lirar', 'liras', 'lirat', 'liren', 'lires', 'liret', 'liror', 'lisan', 'lisar',
'lisas', 'lisat', 'lisen', 'lisma', 'lisor', 'lissa', 'lists', 'lisös', 'litad', 'litar',
'litas', 'litat', 'litet', 'litsa', 'litta', 'livar', 'livas', 'livat', 'liven', 'liver',
'livet', 'livia', 'livre', 'livvi', 'lixom', 'ljong', 'ljuds', 'ljuft', 'ljugs', 'ljumt',
'ljung', 'ljusa', 'ljuse', 'ljust', 'ljuta', 'ljuts', 'ljuva', 'ljuve', 'ljuvt', 'ljödo',
'ljögs', 'ljöts', 'loars', 'loben', 'lober', 'locis', 'locks', 'locus', 'lodad', 'lodar',
'lodas', 'lodat', 'lodda', 'loden', 'lodet', 'lodis', 'loffe', 'lofts', 'lofva', 'logar',
'logen', 'loger', 'loges', 'loggs', 'login', 'logis', 'logit', 'lokan', 'lokas', 'loken',
'lokes', 'loket', 'lokor', 'lokus', 'lolla', 'lomma', 'loopa', 'loppe', 'lopps', 'loran',
'lords', 'lorts', 'loser', 'losta', 'lotss', 'lotts', 'lotus', 'louie', 'lovad', 'lovar',
'lovas', 'lovat', 'loven', 'loves', 'lovet', 'lovis', 'luade', 'luars', 'luats', 'lubba',
'lucas', 'ludda', 'ludde', 'ludds', 'luder', 'ludet', 'ludna', 'ludne', 'ludra', 'luens',
'lufts', 'luggs', 'lugne', 'lugns', 'lugnt', 'luhya', 'lukas', 'lukts', 'luleå', 'luman',
'lumas', 'lumen', 'lumor', 'lumps', 'lunar', 'lunas', 'lunde', 'lundh', 'lunds', 'lunka',
'lunna', 'lupen', 'lupin', 'lupit', 'lupps', 'lupus', 'lurad', 'lurar', 'lurat', 'luren',
'lurks', 'lurra', 'lurre', 'lusar', 'lusat', 'lusen', 'lusig', 'lusts', 'lutad', 'lutan',
'lutar', 'lutas', 'lutat', 'luten', 'lutet', 'lutna', 'lutne', 'lutor', 'luvan', 'luvar',
'luvas', 'luver', 'luvor', 'luxor', 'lvivs', 'lyans', 'lybsk', 'lycke', 'lycks', 'lyckt',
'lydas', 'lydde', 'lyder', 'lydes', 'lydia', 'lydit', 'lyets', 'lyfte', 'lyfts', 'lykke',
'lykts', 'lyllo', 'lymfa', 'lyons', 'lyors', 'lyran', 'lyras', 'lyror', 'lysas', 'lysen',
'lyser', 'lyses', 'lyset', 'lysin', 'lysol', 'lysta', 'lyste', 'lysts', 'lyten', 'lytes',
'lytet', 'lytta', 'lytts', 'lyxen', 'läade', 'läats', 'läcks', 'läckt', 'läfsa', 'lägda',
'lägel', 'lägen', 'läges', 'läget', 'läggs', 'lägre', 'lägst', 'läkas', 'läker', 'läkes',
'läkta', 'läkte', 'läkts', 'lända', 'lände', 'länds', 'länen', 'länet', 'länka', 'länks',
'länna', 'länts', 'läppe', 'läpps', 'läran', 'läras', 'lärda', 'lärde', 'lärer', 'läres',
'lärft', 'läror', 'lärts', 'läsas', 'läser', 'läses', 'läsks', 'lästa', 'läste', 'lästs',
'läten', 'lätes', 'lätet', 'lätte', 'läxan', 'läxas', 'läxor', 'lådan', 'lådas', 'lådde',
'lådor', 'lågad', 'lågan', 'lågar', 'lågas', 'lågat', 'lågen', 'lågor', 'lånad', 'lånar',
'lånas', 'lånat', 'lånen', 'lånet', 'långe', 'långo', 'lånke', 'lånta', 'lårar', 'låren',
'låret', 'låsas', 'låsen', 'låser', 'låses', 'låset', 'låssa', 'låsta', 'låste', 'låsts',
'låtar', 'låtas', 'låten', 'låter', 'låtes', 'låtit', 'låtom', 'låtsa', 'lödas', 'lödde',
'löder', 'lödig', 'löets', 'lögad', 'lögar', 'lögas', 'lögat', 'lögns', 'löjan', 'löjas',
'löjen', 'löjes', 'löjet', 'löjla', 'löjor', 'lökar', 'löken', 'lökig', 'lönad', 'lönar',
'lönas', 'lönat', 'lönen', 'löner', 'lönna', 'lönne', 'lönns', 'löpas', 'löpen', 'löper',
'löpes', 'löpet', 'löpna', 'löpsk', 'löpte', 'löpts', 'lösas', 'löser', 'löses', 'lösig',
'löska', 'lösta', 'löste', 'lösts', 'lötar', 'löten', 'lötts', 'lövad', 'lövar', 'lövas',
'lövat', 'löven', 'lövet', 'lövja', 'lööfs', 'löövs', 'macho', 'macks', 'madde', 'madhö',
'madra', 'maffe', 'magar', 'magen', 'mages', 'magik', 'magin', 'magis', 'magna', 'magre',
'magts', 'mails', 'maine', 'mainz', 'majad', 'majan', 'majar', 'majas', 'majat', 'majen',
'majos', 'makad', 'makak', 'makan', 'makar', 'makas', 'makat', 'maken', 'makes', 'makor',
'makro', 'makta', 'makts', 'malaj', 'malar', 'malas', 'malda', 'malde', 'malen', 'maler',
'males', 'malet', 'malin', 'malis', 'malja', 'malla', 'malle', 'malls', 'malma', 'malms',
'malmö', 'malna', 'malte', 'malts', 'malva', 'malås', 'malör', 'manad', 'manan', 'manar',
'manas', 'manat', 'manen', 'mange', 'manin', 'manis', 'manke', 'manko', 'manne', 'manta',
'manul', 'manår', 'maori', 'mappa', 'mapps', 'maran', 'marar', 'maras', 'maren', 'maria',
'marie', 'maris', 'marka', 'marks', 'maron', 'maror', 'marsk', 'marta', 'marys', 'masar',
'masen', 'maser', 'masig', 'masks', 'masse', 'masts', 'masur', 'matan', 'matar', 'matas',
'matat', 'maten', 'mater', 'matho', 'matks', 'matro', 'matts', 'mauds', 'mauve', 'maxar',
'maxas', 'maxat', 'maxim', 'maxis', 'mazel', 'medan', 'medar', 'meden', 'meder', 'medes',
'medio', 'medis', 'medle', 'meios', 'mejad', 'mejar', 'mejas', 'mejat', 'mejka', 'mejls',
'mekad', 'mekar', 'mekas', 'mekat', 'melin', 'mello', 'memen', 'memer', 'memet', 'memil',
'memma', 'menad', 'menar', 'menas', 'menat', 'menen', 'menet', 'menyn', 'menys', 'merca',
'mesan', 'mesar', 'mesas', 'mesat', 'mesen', 'meson', 'mesor', 'mesta', 'meste', 'mesyr',
'metad', 'metal', 'metar', 'metas', 'metat', 'metes', 'metet', 'metop', 'metyl', 'mezzo',
'micka', 'micke', 'micks', 'miffo', 'mikra', 'milan', 'milar', 'milas', 'milda', 'milde',
'milen', 'mille', 'milns', 'milor', 'milos', 'mimad', 'mimar', 'mimas', 'mimat', 'mimen',
'mimer', 'mimmi', 'minan', 'minas', 'minen', 'miner', 'minks', 'minna', 'minns', 'minor',
'minsk', 'mints', 'minör', 'miras', 'mirca', 'miste', 'mists', 'mitos', 'mitra', 'mitts',
'mixar', 'mixas', 'mixat', 'mixed', 'mixen', 'mjaua', 'mjugg', 'mjuke', 'mjukt', 'mjuta',
'mjäla', 'mjärd', 'mjöds', 'mjöls', 'moare', 'moars', 'mobbs', 'modal', 'modda', 'modds',
'moden', 'modes', 'modet', 'modir', 'modis', 'modul', 'modus', 'moget', 'mogne', 'mogul',
'moira', 'mojar', 'mojen', 'mojig', 'mojje', 'molar', 'molat', 'molen', 'molin', 'molla',
'molls', 'molly', 'molns', 'molok', 'monad', 'monas', 'monel', 'mongo', 'monke', 'monom',
'moona', 'moppa', 'mopps', 'moran', 'moras', 'mords', 'moren', 'morer', 'mores', 'morla',
'morna', 'moror', 'morrn', 'morrs', 'mosad', 'mosar', 'mosas', 'mosat', 'mosel', 'moses',
'moset', 'moske', 'mosse', 'motad', 'motar', 'motas', 'motat', 'moten', 'motet', 'motse',
'motta', 'motti', 'mount', 'mousa', 'mousi', 'mucks', 'muffe', 'muffs', 'mufti', 'muggs',
'mujka', 'mulad', 'mulan', 'mular', 'mulas', 'mulat', 'mulch', 'mules', 'mulet', 'mulle',
'mulls', 'mulor', 'multa', 'multe', 'mumle', 'mungo', 'munin', 'munka', 'munks', 'munsö',
'munta', 'muppa', 'mupps', 'murad', 'mural', 'murar', 'muras', 'murat', 'muren', 'murra',
'murre', 'murva', 'musan', 'musar', 'musas', 'musch', 'musen', 'muser', 'muskö', 'musse',
'musts', 'mutad', 'mutan', 'mutar', 'mutas', 'mutat', 'mutor', 'mutta', 'muzak', 'mycel',
'mycke', 'myens', 'myets', 'myggs', 'mylad', 'mylar', 'mylas', 'mylat', 'mylta', 'mynas',
'mynda', 'mynts', 'myoms', 'myons', 'myopi', 'myran', 'myrar', 'myras', 'myren', 'myror',
'myrra', 'mysas', 'myser', 'myses', 'myset', 'myska', 'mysks', 'mysse', 'myste', 'mysts',
'myten', 'myter', 'mähän', 'mähäs', 'mähät', 'mälas', 'mälde', 'mälen', 'mäler', 'mäles',
'mälet', 'mälta', 'mälte', 'mälts', 'mänga', 'mären', 'märer', 'märgs', 'märks', 'märla',
'märrs', 'märta', 'mäska', 'mäsks', 'mätas', 'mäten', 'mäter', 'mätes', 'mätig', 'mätit',
'mätte', 'mätts', 'måbär', 'mådde', 'mågar', 'mågen', 'målad', 'målar', 'målas', 'målat',
'målen', 'målet', 'målis', 'målla', 'målro', 'månar', 'månas', 'månat', 'månde', 'månen',
'månes', 'många', 'mångt', 'månne', 'månår', 'måsar', 'måsen', 'måssa', 'måsta', 'måtro',
'måtte', 'måtto', 'måtts', 'mödan', 'mödas', 'mödom', 'mödor', 'mögad', 'mögar', 'mögas',
'mögat', 'möget', 'mögig', 'möjas', 'mökar', 'mökas', 'mökat', 'möken', 'mölar', 'mölas',
'mölat', 'mölja', 'mölla', 'mölle', 'mönja', 'mörja', 'mörke', 'mörkt', 'mörna', 'mörts',
'mötas', 'möten', 'möter', 'mötes', 'mötet', 'mötte', 'mötts', 'naans', 'nabbe', 'nabob',
'nabon', 'nabor', 'nabos', 'nadir', 'nadja', 'naemi', 'nafta', 'nagge', 'naggs', 'nagla',
'naira', 'naiva', 'naive', 'naivt', 'najad', 'naket', 'nakfa', 'nakna', 'nakne', 'nalka',
'naman', 'namas', 'namns', 'nanar', 'nanas', 'nanat', 'nancy', 'nandu', 'nanig', 'nanna',
'nanny', 'nappa', 'napps', 'narfe', 'narri', 'narrs', 'narva', 'narvs', 'nasar', 'nasas',
'nasat', 'nasir', 'nasse', 'nasti', 'nativ', 'natti', 'natts', 'nauru', 'naval', 'naven',
'navet', 'navla', 'neder', 'nedla', 'nedom', 'nedpå', 'nedta', 'neger', 'nehej', 'nejds',
'nejdå', 'nejen', 'nejet', 'nekad', 'nekar', 'nekas', 'nekat', 'nelly', 'neons', 'nepal',
'nerom', 'nerpå', 'nerta', 'nerts', 'nertz', 'nervs', 'nesan', 'nesas', 'nevus', 'nevön',
'nevös', 'nexus', 'ngras', 'niade', 'nians', 'niats', 'nices', 'nicke', 'nicks', 'niden',
'nidet', 'nidsk', 'niece', 'nigas', 'niger', 'nigit', 'nikta', 'nikud', 'nilen', 'nilla',
'nimma', 'ninas', 'ninis', 'niobs', 'niors', 'nipig', 'nippa', 'niqab', 'nissa', 'nitad',
'nitar', 'nitas', 'nitat', 'niten', 'niter', 'nitet', 'nitid', 'nitti', 'niuer', 'niues',
'nivån', 'nivås', 'njord', 'njosa', 'njugg', 'njuts', 'njöto', 'njöts', 'noahs', 'noaks',
'nobla', 'noble', 'nocka', 'nocke', 'nocks', 'noden', 'noder', 'nodul', 'noels', 'nogav',
'nojan', 'nojas', 'nojor', 'nojsa', 'nokia', 'nolan', 'nolas', 'noler', 'nolle', 'nomen',
'nonan', 'nonas', 'nonie', 'nonor', 'nooba', 'noomi', 'nopal', 'noppa', 'noppn', 'noras',
'noren', 'nores', 'noret', 'norms', 'norna', 'north', 'norum', 'nosad', 'nosar', 'nosas',
'nosat', 'nosen', 'nosig', 'notan', 'notas', 'notat', 'noten', 'noter', 'notor', 'novan',
'novas', 'novor', 'nubba', 'nubbs', 'nucka', 'nuets', 'numen', 'numer', 'numro', 'nunan',
'nunas', 'nunor', 'nupen', 'nupit', 'nuppa', 'nusit', 'nuuks', 'nyare', 'nyast', 'nybro',
'nycka', 'nycks', 'nydöd', 'nyens', 'nyets', 'nykil', 'nymfs', 'nynas', 'nyord', 'nypan',
'nypas', 'nyper', 'nypor', 'nypte', 'nypts', 'nysas', 'nyser', 'nyses', 'nysit', 'nyste',
'nysts', 'nyter', 'nytit', 'nytra', 'nytre', 'nyårs', 'näbbs', 'näcka', 'nähej', 'nälla',
'nämdö', 'nämns', 'nämnt', 'nänns', 'nänts', 'näpet', 'näpna', 'näpne', 'näpsa', 'näpst',
'näras', 'närda', 'närde', 'näres', 'närig', 'närke', 'närts', 'näsan', 'näsas', 'näsen',
'näset', 'näsor', 'nästs', 'näsum', 'nätad', 'nätar', 'nätas', 'nätat', 'näten', 'nätet',
'nätta', 'nävar', 'näven', 'näves', 'nådda', 'nådde', 'nåden', 'nåder', 'nådig', 'några',
'nåkas', 'nålar', 'nålen', 'nånna', 'nåtar', 'nåten', 'nåtet', 'nåtla', 'nåtts', 'nödda',
'nödde', 'nöden', 'nödga', 'nöffa', 'nöffe', 'nöjas', 'nöjda', 'nöjde', 'nöjen', 'nöjer',
'nöjes', 'nöjet', 'nöjts', 'nölar', 'nölat', 'nörda', 'nördo', 'nörds', 'nörel', 'nörfe',
'nötas', 'nöten', 'nöter', 'nötes', 'nötet', 'nötta', 'nötte', 'nötts', 'oadel', 'oanat',
'oasen', 'oaser', 'oasis', 'obett', 'objet', 'oblid', 'oblik', 'oboen', 'oboer', 'oboes',
'obols', 'obror', 'obytt', 'oböjt', 'ockra', 'ocool', 'odals', 'odena', 'odens', 'odets',
'odins', 'odiös', 'odlar', 'odlas', 'odlat', 'odons', 'odöds', 'odörs', 'odört', 'oekad',
'ofina', 'ofine', 'ofint', 'ofogs', 'ofred', 'ofrid', 'ofrom', 'ofvan', 'ofärd', 'ofärg',
'oföre', 'ofött', 'ogagn', 'ogges', 'ogill', 'ogina', 'ogint', 'oglad', 'ohios', 'ohmen',
'ohmsk', 'ohägn', 'ohörd', 'ohört', 'ojade', 'ojsan', 'ojust', 'okapi', 'okben', 'okeja',
'okens', 'okets', 'oktal', 'okysk', 'okänt', 'okära', 'okärt', 'olade', 'olafs', 'olaga',
'olats', 'olein', 'olgas', 'olike', 'olikt', 'olivs', 'oljad', 'oljan', 'oljar', 'oljas',
'oljat', 'oljor', 'ollad', 'ollan', 'ollar', 'ollas', 'ollat', 'ollen', 'olles', 'ollie',
'ollon', 'ollor', 'olmek', 'olofs', 'olovs', 'olsen', 'olson', 'olvon', 'olänt', 'oläst',
'oläte', 'omaks', 'omans', 'ombad', 'ombed', 'omber', 'ombes', 'omdop', 'omega', 'omens',
'omgav', 'omger', 'omges', 'omgiv', 'omilt', 'omkok', 'omkom', 'omlån', 'omlöp', 'omrör',
'omåkt', 'onani', 'onans', 'ondas', 'ondes', 'onger', 'onkel', 'onors', 'ontet', 'onådd',
'onått', 'onöda', 'onöjd', 'oocyt', 'oolit', 'oorts', 'opaka', 'opakt', 'opiat', 'opiet',
'opium', 'opris', 'orala', 'oralt', 'orant', 'orask', 'orben', 'orber', 'ordal', 'ordar',
'ordas', 'ordat', 'orden', 'ordet', 'oread', 'orene', 'orens', 'orent', 'orera', 'orets',
'orgie', 'origo', 'orion', 'oriya', 'orkar', 'orkas', 'orkat', 'orken', 'orkit', 'orlov',
'ormar', 'ormen', 'ornat', 'ornös', 'oroad', 'oroar', 'oroas', 'oroat', 'oromo', 'orons',
'orrar', 'orren', 'orres', 'orsas', 'orten', 'orter', 'ortos', 'orund', 'orvar', 'orven',
'orvet', 'oråds', 'orörd', 'orört', 'osade', 'osagt', 'osant', 'osats', 'osbys', 'oscar',
'oseds', 'osens', 'osets', 'osett', 'osfri', 'oskar', 'oskäl', 'oskön', 'oslos', 'osmak',
'osman', 'osmos', 'osoft', 'osset', 'ostan', 'ostar', 'osten', 'ostor', 'osunt', 'osäll',
'osådd', 'osålt', 'osått', 'otack', 'otakt', 'otald', 'otids', 'oting', 'otium', 'otron',
'otros', 'ottan', 'ottas', 'ottor', 'ottos', 'oturs', 'otysk', 'otänk', 'outad', 'outar',
'outas', 'outat', 'ouzon', 'ouzos', 'ovala', 'ovals', 'ovalt', 'ovane', 'ovant', 'ovass',
'overt', 'ovigd', 'ovikt', 'ovisa', 'ovist', 'ovägd', 'oväld', 'oväns', 'ovärd', 'ovärt',
'oxars', 'oxbär', 'oxeln', 'oxels', 'oxens', 'oxern', 'oxers', 'oxids', 'oxies', 'oxlar',
'oxrar', 'ozons', 'oädel', 'oäten', 'oäven', 'oävet', 'oävna', 'oävne', 'oåren', 'oåret',
'oömma', 'oövad', 'pablo', 'packe', 'packs', 'padel', 'paffa', 'paffe', 'pafft', 'pagen',
'pager', 'pages', 'pagod', 'paisa', 'pajad', 'pajar', 'pajat', 'pajen', 'pajer', 'pakan',
'pakts', 'palau', 'palle', 'palls', 'palma', 'palme', 'palms', 'palps', 'palta', 'palts',
'pamps', 'panad', 'pangs', 'panka', 'panke', 'pankt', 'pannå', 'pants', 'papel', 'papir',
'papps', 'papua', 'parar', 'paras', 'parat', 'parce', 'paren', 'pares', 'paret', 'parig',
'parin', 'parit', 'parka', 'parks', 'parma', 'parra', 'parsa', 'parta', 'parts', 'pasha',
'pasma', 'passe', 'patch', 'paten', 'pater', 'patos', 'patta', 'patte', 'patts', 'patwa',
'paula', 'pauls', 'pavan', 'pavas', 'pavor', 'paxad', 'paxar', 'paxas', 'paxat', 'paxen',
'paxet', 'payad', 'payar', 'payas', 'payat', 'peaka', 'peang', 'peddo', 'peder', 'pegas',
'pegel', 'peggy', 'pehrs', 'pekar', 'pekas', 'pekat', 'peken', 'peket', 'pekka', 'pelad',
'pelar', 'pelas', 'pelat', 'pelle', 'pello', 'pemar', 'penal', 'penar', 'penen', 'pengs',
'penis', 'penne', 'penni', 'penny', 'pense', 'pepps', 'perfa', 'perra', 'persa', 'perus',
'pervo', 'pesto', 'pests', 'petad', 'petar', 'petas', 'petat', 'peter', 'petet', 'petit',
'petra', 'petri', 'phnom', 'piaff', 'pialo', 'picka', 'picot', 'pidro', 'piens', 'pieta',
'piets', 'piffs', 'pigan', 'pigas', 'pigge', 'piggs', 'piggt', 'pigor', 'pikar', 'pikas',
'pikat', 'piken', 'pikör', 'pilar', 'pilen', 'pilka', 'pille', 'pilsk', 'pilts', 'pimpa',
'pinad', 'pinar', 'pinas', 'pinat', 'pinig', 'pinje', 'pinna', 'pints', 'pions', 'pipan',
'pipas', 'pipen', 'piper', 'pipes', 'pipet', 'pipit', 'pipor', 'pippa', 'pirar', 'piren',
'pirer', 'pirig', 'pirka', 'pirrs', 'pirum', 'pirål', 'pisks', 'pispa', 'pisse', 'pista',
'pists', 'pitch', 'piteå', 'pitts', 'pivot', 'pixla', 'pjatt', 'pjexa', 'pjods', 'pjuck',
'pjunk', 'pjätt', 'pjåka', 'pjåks', 'pjåsk', 'plage', 'plans', 'plant', 'playa', 'plebs',
'plena', 'pligg', 'pligt', 'plins', 'plits', 'plogs', 'ploja', 'plojs', 'pluto', 'plyms',
'plymå', 'plysa', 'plyte', 'pläds', 'pläga', 'plång', 'plåns', 'plåts', 'plöjd', 'plöjs',
'plöjt', 'podda', 'podds', 'poems', 'poets', 'point', 'pojks', 'polar', 'polas', 'polat',
'poler', 'polon', 'polos', 'polyp', 'ponke', 'pools', 'popen', 'poper', 'poppa', 'poren',
'porer', 'porrs', 'porto', 'ports', 'posen', 'poser', 'poses', 'posto', 'posts', 'posör',
'potts', 'potät', 'prags', 'praia', 'prank', 'prats', 'predv', 'prega', 'prest', 'pride',
'primo', 'print', 'prion', 'prior', 'profs', 'proms', 'props', 'propå', 'provs', 'prunk',
'prydd', 'pryde', 'pryds', 'pryls', 'pryon', 'pryos', 'prytt', 'pråla', 'pråls', 'pråma',
'pråms', 'prång', 'ptroa', 'pubar', 'pubba', 'puben', 'pubes', 'pucka', 'pucks', 'pugga',
'pukan', 'pukar', 'pukas', 'puken', 'pukes', 'pukor', 'pulad', 'pular', 'pulas', 'pulat',
'pulla', 'pults', 'puman', 'pumas', 'pumla', 'pumor', 'pumps', 'punch', 'punda', 'pundo',
'punds', 'punga', 'pungs', 'punsa', 'purea', 'purjo', 'purra', 'pusha', 'pusts', 'putad',
'putar', 'putas', 'putat', 'putig', 'putte', 'putti', 'putto', 'putts', 'pycke', 'pyemi',
'pygme', 'pylon', 'pynts', 'pyrde', 'pyren', 'pyret', 'pyrig', 'pyrit', 'pysas', 'pysch',
'pysen', 'pyser', 'pyses', 'pyset', 'pyste', 'pysts', 'pytts', 'pälls', 'pären', 'pärer',
'pärma', 'pärms', 'pärta', 'påarp', 'påfve', 'påför', 'pågar', 'pågen', 'pågår', 'påkar',
'påken', 'påkom', 'pålar', 'pålen', 'påles', 'pålok', 'pårop', 'påryd', 'påsar', 'påsen',
'påses', 'påska', 'påsks', 'påste', 'påsyn', 'påtad', 'påtal', 'påtar', 'påtas', 'påtat',
'påtog', 'påvar', 'påven', 'påver', 'påves', 'påvra', 'påvre', 'påöka', 'pökad', 'pökar',
'pökas', 'pökat', 'pöken', 'pöket', 'pölar', 'pölas', 'pölat', 'pölen', 'pölse', 'pömsa',
'pörte', 'pöser', 'pöste', 'qatar', 'queer', 'quena', 'quito', 'qvaft', 'qvald', 'qvalm',
'qvals', 'qvalt', 'qvarn', 'qvart', 'qvast', 'qveds', 'qvick', 'qvida', 'qvids', 'qviga',
'qvint', 'qvist', 'qvitt', 'qväda', 'qväde', 'qväfd', 'qväft', 'qväka', 'qvälj', 'qväll',
'qväsa', 'rabat', 'rabba', 'rabbi', 'racen', 'racer', 'races', 'racet', 'racka', 'racks',
'radad', 'radas', 'radat', 'raden', 'rader', 'radja', 'radså', 'ragge', 'raggs', 'ragna',
'ragun', 'ragus', 'raids', 'raisa', 'raise', 'rajab', 'rajon', 'rakad', 'rakan', 'rakar',
'rakas', 'rakat', 'rakel', 'raken', 'rakit', 'rakna', 'rakor', 'ralla', 'ralls', 'ramar',
'ramas', 'ramat', 'ramen', 'ramis', 'ramms', 'randa', 'rands', 'rangs', 'rankt', 'raoul',
'rapan', 'rapar', 'rapas', 'rapat', 'rapen', 'rapet', 'rapid', 'rapps', 'rappt', 'rarka',
'rasad', 'rasar', 'rasas', 'rasat', 'rasen', 'raser', 'raset', 'raske', 'raskt', 'rasps',
'rasse', 'rasts', 'ratad', 'ratar', 'ratas', 'ratat', 'ratel', 'ratts', 'rauks', 'raven',
'rayon', 'reade', 'reala', 'reale', 'reals', 'realt', 'reans', 'reats', 'recit', 'redas',
'redda', 'redde', 'reden', 'reder', 'redes', 'redet', 'reell', 'refug', 'regal', 'regga',
'regim', 'regin', 'regis', 'regns', 'rehab', 'reine', 'rejvs', 'rekad', 'rekar', 'rekas',
'rekat', 'reket', 'relän', 'reläs', 'relät', 'remin', 'remis', 'remma', 'renad', 'renal',
'renar', 'renas', 'renat', 'renen', 'renin', 'reols', 'reors', 'repad', 'repan', 'repar',
'repas', 'repat', 'repen', 'repes', 'repet', 'repor', 'resan', 'resar', 'resas', 'resen',
'reser', 'reses', 'reset', 'reson', 'resor', 'reste', 'rests', 'retad', 'retar', 'retas',
'retat', 'retor', 'retts', 'reuma', 'revad', 'revan', 'revar', 'revas', 'revat', 'revel',
'reven', 'revet', 'revor', 'revyn', 'revys', 'revär', 'rheas', 'rhens', 'rhode', 'rhoen',
'rhoet', 'rhona', 'rhons', 'rhots', 'riade', 'rians', 'riats', 'ribos', 'ricin', 'ricka',
'ricke', 'ridas', 'riden', 'rider', 'ridit', 'ridom', 'ridån', 'ridås', 'riffs', 'rifva',
'rigas', 'rigel', 'riggs', 'rigla', 'rikas', 'riken', 'rikes', 'riket', 'rilla', 'rimbo',
'rimpa', 'ringd', 'ringe', 'rings', 'ringt', 'rinit', 'rioja', 'riors', 'ripan', 'ripas',
'risad', 'risar', 'risas', 'risat', 'risen', 'riset', 'risks', 'riste', 'rists', 'ritad',
'ritar', 'ritas', 'ritat', 'riten', 'riter', 'ritsa', 'rivan', 'rivas', 'riven', 'river',
'rives', 'rivet', 'rivit', 'rivna', 'rivne', 'rivor', 'riyal', 'roade', 'roama', 'roats',
'roben', 'rober', 'robes', 'robin', 'rocka', 'rocks', 'rodda', 'rodde', 'rodds', 'rodel',
'roffe', 'roger', 'rogga', 'rolfs', 'rolla', 'rolls', 'rolös', 'rombs', 'romen', 'romer',
'romsk', 'ronda', 'rondo', 'ronja', 'ronny', 'ropad', 'ropar', 'ropas', 'ropat', 'ropen',
'ropet', 'rosad', 'rosar', 'rosas', 'rosat', 'rosen', 'roset', 'rosor', 'rosts', 'rotad',
'rotar', 'rotas', 'rotat', 'rotel', 'roten', 'rotfl', 'rotig', 'rotor', 'rotts', 'rouge',
'route', 'rovan', 'rovas', 'roven', 'rovet', 'rovor', 'royal', 'rubbe', 'rubbs', 'rubel',
'ruben', 'rudan', 'rudas', 'rudde', 'rudis', 'rudor', 'ruffa', 'ruffs', 'rugga', 'rugge',
'ruins', 'rukit', 'rulad', 'rulsa', 'rulta', 'rumba', 'rumor', 'rumän', 'runan', 'runar',
'runas', 'runde', 'runes', 'runga', 'runka', 'runor', 'rupie', 'rural', 'rusad', 'rusar',
'rusas', 'rusat', 'rusen', 'ruset', 'rusha', 'rusig', 'rusks', 'rutad', 'rutan', 'rutar',
'rutas', 'rutat', 'ruten', 'rutet', 'ruths', 'rutil', 'rutit', 'rutna', 'rutor', 'rutts',
'ruvad', 'ruvan', 'ruvar', 'ruvas', 'ruvat', 'ruvor', 'ryade', 'ryans', 'ryats', 'rycks',
'ryckt', 'rydal', 'rydar', 'ryden', 'ryggs', 'rykas', 'ryker', 'rykts', 'rylar', 'rylen',
'rymde', 'rymds', 'rymts', 'ryors', 'rysas', 'rysch', 'ryser', 'ryses', 'ryska', 'ryske',
'ryskt', 'ryste', 'rysts', 'rytas', 'ryter', 'rytes', 'rytet', 'rytms', 'räcks', 'räckt',
'rädas', 'rädde', 'räden', 'räder', 'rädes', 'rädit', 'räfst', 'rägns', 'räkan', 'räkas',
'räkel', 'räkor', 'rälen', 'räler', 'rälig', 'rälla', 'rämna', 'rände', 'ränks', 'ränne',
'ränns', 'ränts', 'rätad', 'rätan', 'rätar', 'rätas', 'rätat', 'rätte', 'rätts', 'rävar',
'räven', 'rävig', 'råare', 'råast', 'rådas', 'rådde', 'råden', 'råder', 'rådes', 'rådet',
'rådge', 'rådis', 'råegg', 'råets', 'rågad', 'rågar', 'rågas', 'rågat', 'rågax', 'rågen',
'råges', 'råget', 'råhet', 'råkan', 'råkar', 'råkas', 'råkat', 'råkid', 'råkor', 'råmar',
'råmas', 'råmat', 'rånad', 'rånar', 'rånas', 'rånat', 'rånen', 'rånet', 'råneå', 'rårna',
'råsop', 'råtts', 'råväv', 'rödda', 'rödde', 'rödek', 'rödja', 'röets', 'rögad', 'rögar',
'rögas', 'rögat', 'röjas', 'röjda', 'röjde', 'röjel', 'röjer', 'röjes', 'röjig', 'röjts',
'rökas', 'rökat', 'röken', 'röker', 'rökes', 'rökta', 'rökte', 'rökts', 'rökås', 'rönas',
'rönen', 'röner', 'rönes', 'rönet', 'rönns', 'rönta', 'rönte', 'rönts', 'röran', 'röras',
'rörda', 'rörde', 'rören', 'röres', 'röret', 'röris', 'rörit', 'röror', 'rörts', 'rörös',
'rösen', 'röses', 'röset', 'röste', 'rösti', 'rösts', 'rötad', 'rötan', 'rötar', 'rötas',
'rötat', 'röten', 'röter', 'rötes', 'rötor', 'rötte', 'rötts', 'rövad', 'rövar', 'rövas',
'rövat', 'röven', 'saabs', 'sabha', 'sabin', 'sabra', 'sacka', 'sades', 'sadhe', 'safar',
'safir', 'safsa', 'safta', 'safts', 'sagan', 'sagas', 'sagda', 'sagde', 'sagen', 'sagga',
'sagge', 'sagla', 'sagon', 'sagor', 'sagos', 'sagot', 'sagts', 'sahib', 'saiga', 'saint',
'sajna', 'sajts', 'sakad', 'sakar', 'sakas', 'sakat', 'saken', 'saker', 'salad', 'salar',
'salas', 'salat', 'salem', 'salen', 'salep', 'salin', 'sally', 'salte', 'salto', 'salts',
'salut', 'samek', 'samen', 'samer', 'sames', 'samgå', 'samka', 'samme', 'samoa', 'samos',
'sampi', 'samsa', 'samum', 'sanaa', 'sanct', 'sands', 'sanka', 'sanks', 'sankt', 'sanna',
'sanne', 'santo', 'sapfo', 'sapps', 'sarah', 'saras', 'sards', 'sarin', 'saris', 'sarra',
'sarre', 'sarvs', 'sassa', 'satan', 'satar', 'saten', 'sates', 'satin', 'satir', 'satta',
'satte', 'satts', 'satyr', 'sauna', 'saute', 'savas', 'saven', 'savig', 'saxad', 'saxar',
'saxas', 'saxat', 'saxen', 'scarf', 'scens', 'schah', 'schal', 'schwa', 'schäs', 'scoop',
'seans', 'sebar', 'sebra', 'sedda', 'sedde', 'seden', 'seder', 'sedes', 'sedig', 'sedna',
'sedum', 'seeda', 'sefir', 'sefyr', 'segna', 'sejar', 'sejda', 'sejds', 'sejen', 'sejsa',
'sejte', 'sejva', 'sekin', 'sekts', 'selar', 'selen', 'seles', 'selet', 'selma', 'selot',
'semem', 'semin', 'semis', 'semit', 'semko', 'senan', 'senar', 'senas', 'senat', 'sendj',
'senna', 'senor', 'senza', 'sepia', 'sepoy', 'seppo', 'seraf', 'serbs', 'seren', 'serge',
'serie', 'serin', 'serri', 'serve', 'servo', 'serös', 'sesam', 'sessa', 'setet', 'setta',
'setts', 'sexan', 'sexar', 'sexas', 'sexat', 'sexet', 'sexor', 'sexta', 'sexti', 'sexts',
'sexus', 'sfärs', 'shagg', 'shahs', 'shaka', 'shake', 'shejk', 'shelf', 'shiit', 'shots',
'showa', 'shows', 'shuno', 'shunt', 'siade', 'siarn', 'siats', 'sibet', 'sicka', 'sicks',
'sidan', 'sidar', 'sidas', 'sidat', 'sidor', 'siena', 'siffe', 'sifon', 'sigel', 'sigge',
'signa', 'signe', 'sigta', 'sigyn', 'sikar', 'sikel', 'siken', 'sikts', 'silad', 'silar',
'silas', 'silat', 'silen', 'sills', 'silon', 'silor', 'silos', 'silts', 'silur', 'simon',
'simpa', 'simsa', 'sinad', 'sinai', 'sinar', 'sinat', 'sinko', 'sinks', 'sinns', 'sinom',
'sioux', 'sippa', 'sippe', 'sipps', 'sippt', 'sirar', 'siras', 'sirat', 'siret', 'siris',
'sirpa', 'sirra', 'sisal', 'sisel', 'siska', 'sissa', 'sissi', 'siste', 'sisun', 'sisus',
'sitar', 'sitts', 'situp', 'sjagg', 'sjals', 'sjana', 'sjane', 'sjapp', 'sjasa', 'sjava',
'sjelf', 'sjoks', 'sjoxa', 'sjuan', 'sjuas', 'sjubb', 'sjuds', 'sjuke', 'sjung', 'sjunk',
'sjuor', 'sjyst', 'själf', 'själs', 'sjåar', 'sjåas', 'sjåat', 'sjået', 'sjåig', 'sjåts',
'sjöar', 'sjöbo', 'sjöds', 'sjöig', 'sjöis', 'sjöng', 'sjönk', 'sjöns', 'sjöss', 'skack',
'skage', 'skajp', 'skaks', 'skalf', 'skalk', 'skall', 'skalm', 'skals', 'skams', 'skank',
'skapa', 'skaps', 'skapt', 'skarn', 'skars', 'skaru', 'skate', 'skavd', 'skave', 'skavs',
'skavt', 'skedd', 'skede', 'skeds', 'skees', 'skeet', 'skeft', 'skeka', 'skene', 'skens',
'skepa', 'skets', 'skett', 'skeva', 'skeve', 'skevt', 'skhlm', 'skilj', 'skils', 'skilt',
'skins', 'skips', 'skirs', 'skirt', 'skita', 'skits', 'skizz', 'skjuv', 'skodd', 'skoft',
'skoga', 'skogh', 'skogs', 'skojs', 'skole', 'skolt', 'skons', 'skoog', 'skors', 'skorv',
'skota', 'skots', 'skotå', 'skoug', 'skova', 'skovs', 'skrak', 'skref', 'skrek', 'skria',
'skrid', 'skrif', 'skris', 'skrit', 'skriv', 'skrov', 'skrud', 'skrym', 'skryp', 'skräm',
'skråa', 'skrån', 'skråp', 'skrås', 'skråt', 'skröt', 'skröv', 'skubb', 'skuff', 'skula',
'skult', 'skums', 'skumt', 'skurs', 'skuti', 'skval', 'skvis', 'skvär', 'skyar', 'skyen',
'skygd', 'skyig', 'skyld', 'skyle', 'skyll', 'skyls', 'skymd', 'skyms', 'skyns', 'skypa',
'skäck', 'skäkt', 'skälf', 'skälm', 'skäls', 'skälv', 'skäms', 'skänk', 'skäre', 'skärs',
'skärt', 'skärv', 'skäva', 'skåle', 'skåls', 'skåne', 'skånk', 'skåpa', 'skåps', 'skåre',
'skåta', 'sköka', 'skölj', 'skölp', 'sköna', 'sköne', 'skönj', 'skönt', 'sköra', 'sköre',
'skörl', 'skört', 'sköts', 'skött', 'skövs', 'slabb', 'slack', 'slafa', 'slafs', 'slaga',
'slagn', 'slags', 'slagt', 'slajk', 'slaka', 'slake', 'slams', 'slasa', 'slase', 'slash',
'slavs', 'slejd', 'slejf', 'slejs', 'sleke', 'slems', 'slemt', 'sleta', 'slets', 'slevs',
'slica', 'slice', 'slida', 'slide', 'slika', 'slikt', 'sling', 'slink', 'slipp', 'slisk',
'slite', 'slits', 'slogs', 'sloka', 'sloke', 'sloms', 'slubb', 'sluga', 'sluge', 'slugg',
'slugt', 'sluks', 'slunk', 'sluts', 'slyet', 'slyna', 'slyns', 'slyts', 'släck', 'slägt',
'släpp', 'släps', 'slåar', 'slåna', 'slåns', 'slått', 'slöar', 'slöas', 'slöat', 'slöax',
'slöks', 'slöra', 'slörs', 'slöto', 'slöts', 'slött', 'smaks', 'smala', 'smale', 'small',
'smalt', 'smash', 'smeds', 'smeks', 'smekt', 'smets', 'smidd', 'smids', 'smila', 'smils',
'smits', 'smitt', 'smock', 'smogs', 'smolk', 'smolt', 'smord', 'smort', 'smurf', 'smutt',
'smygs', 'smädd', 'smäds', 'smält', 'smärt', 'smätt', 'småax', 'småby', 'småät', 'smååt',
'smöga', 'smögs', 'smörs', 'snafs', 'snagg', 'snapa', 'snapp', 'snask', 'sneda', 'snede',
'sneks', 'snesa', 'snett', 'snidd', 'snide', 'snika', 'sniks', 'snikt', 'snilj', 'snipe',
'snipp', 'snits', 'snoks', 'snopp', 'snors', 'snott', 'snusk', 'snuts', 'snyte', 'snyts',
'snärj', 'snärp', 'snäsa', 'snäst', 'snäva', 'snäve', 'snävt', 'snåle', 'snålt', 'snårs',
'snöad', 'snöar', 'snöat', 'snöda', 'snöde', 'snöga', 'snögs', 'snöns', 'snöpa', 'snöps',
'snöpt', 'snörp', 'snörs', 'snört', 'snöts', 'snött', 'soare', 'sobel', 'sober', 'sobra',
'sofia', 'sofie', 'softa', 'softe', 'sofva', 'sojan', 'sojas', 'solad', 'solar', 'solas',
'solat', 'solds', 'solel', 'solen', 'solid', 'solis', 'solna', 'solon', 'solos', 'solot',
'solva', 'solvs', 'solär', 'solår', 'sonad', 'sonar', 'sonas', 'sonat', 'sonds', 'sonen',
'sonja', 'sonor', 'sopad', 'sopan', 'sopar', 'sopas', 'sopat', 'sopig', 'sopor', 'sopot',
'sopps', 'sorbs', 'sorgs', 'sorks', 'sorls', 'sorry', 'sorti', 'sorts', 'sosse', 'sotad',
'sotar', 'sotas', 'sotat', 'soten', 'sotet', 'sotis', 'sound', 'south', 'sovas', 'sovel',
'soven', 'sover', 'soves', 'sovit', 'spada', 'spads', 'spaet', 'spake', 'spaks', 'spakt',
'spall', 'spams', 'spans', 'spant', 'spard', 'spars', 'spart', 'spats', 'spatt', 'speed',
'spels', 'spelt', 'spens', 'speta', 'spigg', 'spiks', 'spila', 'spink', 'split', 'sponk',
'spons', 'spont', 'spoon', 'spord', 'spors', 'spovs', 'spray', 'spred', 'sprid', 'sprue',
'sprut', 'spyad', 'spyan', 'spyar', 'spyas', 'spyat', 'spydd', 'spyor', 'spytt', 'spädd',
'späde', 'späds', 'späka', 'späks', 'späkt', 'spänn', 'späns', 'spänt', 'spätt', 'spådd',
'spåga', 'spånk', 'spåns', 'spånt', 'spårs', 'spått', 'spöad', 'spöar', 'spöas', 'spöat',
'spöet', 'spöna', 'spöns', 'spörj', 'spörs', 'spöts', 'squaw', 'stabs', 'stadd', 'stads',
'staga', 'stagg', 'stags', 'staka', 'stalp', 'stals', 'stams', 'stans', 'stasa', 'stash',
'stass', 'stats', 'statt', 'stavs', 'steen', 'stegs', 'steks', 'stekt', 'stela', 'stele',
'stelt', 'stens', 'stent', 'stepp', 'sthlm', 'stian', 'stias', 'stigs', 'stila', 'stils',
'stims', 'stina', 'stink', 'stinn', 'stint', 'stior', 'stirr', 'stjäl', 'stoby', 'stodo',
'stods', 'stoet', 'stoff', 'stojs', 'stola', 'stoll', 'stols', 'stomi', 'stomp', 'stona',
'stons', 'stops', 'stora', 'store', 'stors', 'stort', 'story', 'storå', 'stots', 'stout',
'stova', 'strak', 'stred', 'stret', 'stril', 'strip', 'strit', 'stryp', 'strån', 'strås',
'stråt', 'strög', 'strök', 'ströp', 'strör', 'strös', 'ströv', 'stubb', 'stuck', 'stuff',
'stuks', 'stumt', 'stunk', 'stunt', 'stups', 'stura', 'sture', 'stuss', 'stuvs', 'stybb',
'styft', 'styla', 'styng', 'styrd', 'styrk', 'styrs', 'styrt', 'styva', 'styve', 'styvt',
'städs', 'stäka', 'stämd', 'stäms', 'stämt', 'stäng', 'stäpp', 'stärd', 'stärk', 'stävs',
'stådd', 'ståhl', 'ståla', 'ståls', 'stånd', 'ståta', 'ståte', 'ståts', 'stått', 'stöda',
'stödd', 'stöde', 'stöds', 'stöps', 'stöpt', 'störd', 'störs', 'stört', 'stöts', 'stött',
'stöva', 'subba', 'subjn', 'succe', 'sucks', 'sucre', 'sudan', 'suddi', 'sudds', 'sudla',
'sufsa', 'sugas', 'sugel', 'suger', 'suges', 'suget', 'sugit', 'sugna', 'sugne', 'sukta',
'sulan', 'sulas', 'sulfa', 'sulky', 'sulor', 'sumak', 'sumer', 'sumor', 'sumps', 'sunda',
'sunde', 'sunds', 'sunes', 'sunna', 'sunne', 'sunni', 'supar', 'supas', 'supen', 'supes',
'supig', 'supit', 'suput', 'suran', 'surar', 'suras', 'surat', 'surna', 'suror', 'surrs',
'surte', 'susar', 'susas', 'susat', 'suset', 'sushi', 'sussi', 'sutan', 'sutta', 'sutte',
'sutto', 'sutur', 'svada', 'svaga', 'svage', 'svags', 'svagt', 'svald', 'svale', 'svall',
'svals', 'svalt', 'svams', 'svana', 'svang', 'svann', 'svars', 'svass', 'svear', 'sveas',
'svebs', 'sveda', 'svedd', 'sveds', 'svegs', 'svejs', 'sveks', 'svens', 'svepe', 'sveps',
'svept', 'sviks', 'svikt', 'svims', 'svina', 'svins', 'svira', 'svirr', 'svits', 'svors',
'svyck', 'svälj', 'sväll', 'svärj', 'svärs', 'svåls', 'svåra', 'svåre', 'svårt', 'swart',
'sweet', 'swing', 'sydda', 'sydde', 'sydow', 'sydpå', 'sydön', 'syfte', 'sylar', 'sylas',
'sylat', 'sylen', 'sylfs', 'sylls', 'sylts', 'synad', 'synar', 'synat', 'synds', 'synen',
'syner', 'synes', 'synka', 'synks', 'synod', 'synth', 'synts', 'syrad', 'syrak', 'syran',
'syrar', 'syras', 'syrat', 'syres', 'syret', 'syror', 'syrup', 'syska', 'sysop', 'sytts',
'säbys', 'säcks', 'säden', 'sägas', 'säger', 'säges', 'säjas', 'säjer', 'säkre', 'sälar',
'sälen', 'sälgs', 'säljs', 'sälla', 'sälle', 'sällt', 'sälta', 'sämja', 'sämsk', 'sände',
'sänds', 'sängs', 'sänke', 'sänks', 'sänkt', 'sänna', 'sänts', 'särad', 'särar', 'säras',
'särat', 'särla', 'särna', 'särös', 'säten', 'säter', 'sätes', 'sätet', 'sätts', 'sävar',
'säven', 'säves', 'såars', 'sådda', 'sådde', 'sådds', 'sådig', 'sådor', 'sågad', 'sågar',
'sågas', 'sågat', 'sågen', 'sågos', 'såhär', 'sålda', 'sålde', 'sålls', 'sålts', 'sångs',
'sånär', 'såpad', 'såpan', 'såpar', 'såpas', 'såpat', 'såpig', 'såpor', 'sårad', 'sårar',
'såras', 'sårat', 'såren', 'såret', 'såsar', 'såsas', 'såsat', 'såsen', 'såser', 'såsig',
'såsom', 'såsse', 'såtar', 'såten', 'såtts', 'såväl', 'södra', 'södre', 'sökan', 'sökas',
'söken', 'söker', 'sökes', 'söket', 'sökta', 'sökte', 'sökts', 'sölad', 'sölar', 'sölas',
'sölat', 'sölja', 'sömma', 'sömns', 'sönad', 'sönar', 'sönas', 'sönat', 'söner', 'sönka',
'sören', 'sörjd', 'sörjs', 'sörjt', 'sörpa', 'sörru', 'sötad', 'sötar', 'sötas', 'sötat',
'sötis', 'söuls', 'sövas', 'sövda', 'sövde', 'söver', 'söves', 'sövts', 'tabba', 'tabun',
'tabus', 'tabut', 'tacks', 'tacos', 'tadel', 'tadla', 'tafla', 'tagas', 'tagen', 'tager',
'tages', 'taget', 'taggs', 'tagit', 'tagla', 'tagna', 'tagne', 'tagom', 'taiga', 'taiji',
'taino', 'tajga', 'tajma', 'tajta', 'tajte', 'tajts', 'takag', 'taken', 'taket', 'takts',
'talad', 'talar', 'talas', 'talat', 'talda', 'talde', 'talds', 'talen', 'taler', 'tales',
'talet', 'talga', 'talgs', 'talib', 'talja', 'talko', 'talls', 'talmi', 'talte', 'talts',
'tamam', 'tambi', 'tamde', 'tamil', 'tamts', 'tamul', 'tanan', 'tanas', 'tands', 'tanga',
'tanja', 'tanks', 'tanor', 'tants', 'tanum', 'tapan', 'tapas', 'tapen', 'taper', 'tapes',
'tapir', 'tapor', 'tapps', 'tappt', 'tapto', 'tarms', 'tarok', 'tarva', 'tarvs', 'taska',
'tasks', 'tatar', 'tatta', 'tauon', 'taxan', 'taxar', 'taxas', 'taxat', 'taxen', 'taxin',
'taxis', 'taxon', 'taxor', 'tchad', 'teaks', 'teams', 'teban', 'tebös', 'tedde', 'teens',
'teers', 'teets', 'tegar', 'tegen', 'tehuv', 'teint', 'teism', 'teist', 'tejps', 'tejst',
'tekar', 'tekas', 'tekat', 'tekla', 'tekök', 'telex', 'telge', 'teman', 'temas', 'temat',
'temla', 'tempi', 'temps', 'tenar', 'tendu', 'tenen', 'tenge', 'tenns', 'teorb', 'tepig',
'terms', 'teros', 'terra', 'terån', 'tesen', 'teser', 'tesla', 'tests', 'tetas', 'tetum',
'teven', 'teves', 'texan', 'texas', 'texts', 'thage', 'theas', 'theos', 'thern', 'theta',
'thing', 'thora', 'thore', 'tians', 'tibet', 'tibia', 'tibro', 'ticks', 'tidan', 'tiden',
'tider', 'tidur', 'tierp', 'tigas', 'tiggs', 'tiggt', 'tight', 'tigit', 'tigon', 'tikar',
'tiken', 'tilda', 'tilde', 'tilja', 'tilla', 'timad', 'timar', 'timas', 'timat', 'timer',
'timma', 'timra', 'timrå', 'tinad', 'tinar', 'tinas', 'tinat', 'tings', 'tinne', 'tiols',
'tiors', 'tipps', 'tirad', 'tiran', 'tiras', 'tiror', 'tisha', 'titan', 'titer', 'titin',
'titti', 'tittj', 'titts', 'tived', 'tjaba', 'tjabb', 'tjabo', 'tjack', 'tjalk', 'tjall',
'tjats', 'tjeck', 'tjejs', 'tjeka', 'tjent', 'tjilå', 'tjoar', 'tjoas', 'tjoat', 'tjoet',
'tjogs', 'tjorv', 'tjuds', 'tjuga', 'tjuge', 'tjugi', 'tjugo', 'tjugu', 'tjurs', 'tjusa',
'tjust', 'tjuts', 'tjuvs', 'tjyvs', 'tjäla', 'tjäll', 'tjåla', 'tjåls', 'tjörn', 'tjöta',
'tjöts', 'toans', 'toast', 'tobbe', 'tobis', 'tobos', 'tocka', 'tocke', 'todde', 'toddy',
'tofts', 'tofun', 'tofus', 'togan', 'togas', 'togen', 'togom', 'togor', 'toini', 'tokar',
'tokas', 'token', 'toker', 'tokot', 'tokyo', 'tolft', 'tolks', 'tolla', 'tolle', 'tolta',
'tomas', 'tomen', 'tomer', 'tomma', 'tomme', 'tommy', 'tomta', 'tomts', 'tonad', 'tonal',
'tonar', 'tonas', 'tonat', 'tonem', 'tonen', 'toner', 'tonga', 'tonic', 'tonus', 'tonys',
'toors', 'topas', 'topps', 'toque', 'torah', 'toras', 'torax', 'tords', 'tores', 'torga',
'torgs', 'torne', 'torns', 'torps', 'torra', 'torre', 'torrt', 'torso', 'torta', 'torts',
'torup', 'torus', 'torva', 'torvs', 'toryn', 'torys', 'tosar', 'tosca', 'tosen', 'tosig',
'tossa', 'tosse', 'totem', 'totte', 'touch', 'toupe', 'tovas', 'toves', 'toxin', 'trade',
'trads', 'traja', 'trake', 'trala', 'trans', 'trapp', 'trask', 'trave', 'travs', 'trean',
'treas', 'trekk', 'trema', 'treor', 'triad', 'trial', 'trias', 'trier', 'trift', 'trims',
'trind', 'trint', 'triod', 'triol', 'trion', 'trior', 'trios', 'trips', 'trivs', 'triör',
'trodd', 'trofe', 'troja', 'troke', 'trola', 'tromb', 'trons', 'tropp', 'trops', 'trosa',
'tross', 'trott', 'truck', 'trula', 'trull', 'truls', 'trunk', 'trust', 'truta', 'truts',
'tryga', 'trymå', 'tryna', 'tryts', 'träad', 'träar', 'träas', 'träat', 'träck', 'trädd',
'träde', 'träds', 'träet', 'träig', 'träla', 'träls', 'träng', 'träns', 'träts', 'trätt',
'tråda', 'trådd', 'tråds', 'trågs', 'tråls', 'trått', 'tröck', 'tröga', 'tröge', 'trögt',
'trösk', 'tröts', 'tsadi', 'tsars', 'tuban', 'tubas', 'tubba', 'tuben', 'tuber', 'tubor',
'tuend', 'tuffa', 'tuffe', 'tufft', 'tujan', 'tujas', 'tujor', 'tukan', 'tulla', 'tulls',
'tulta', 'tumba', 'tunar', 'tunen', 'tuner', 'tunet', 'tunge', 'tungt', 'tunik', 'tunis',
'tunne', 'tupel', 'tupps', 'turar', 'turas', 'turat', 'turen', 'turer', 'tures', 'turid',
'turig', 'turin', 'turks', 'turne', 'turre', 'turrä', 'tusan', 'tussa', 'tutad', 'tutan',
'tutar', 'tutas', 'tutat', 'tuten', 'tutet', 'tutor', 'tutsi', 'tutte', 'tutti', 'tutun',
'tuvad', 'tuvan', 'tuvas', 'tuvig', 'tuvin', 'tuvor', 'tvagd', 'tvags', 'tvagt', 'tvang',
'tvann', 'tveks', 'tvinn', 'tvogs', 'tvära', 'tväre', 'tvärt', 'tvåan', 'tvåas', 'tvådd',
'tvåls', 'tvång', 'tvåor', 'tvått', 'tweed', 'tweet', 'twerk', 'twill', 'twink', 'twist',
'tyade', 'tycks', 'tyckt', 'tydas', 'tydda', 'tydde', 'tyder', 'tydes', 'tyfon', 'tyfus',
'tygen', 'tyger', 'tyget', 'tyken', 'tyket', 'tykna', 'tykne', 'tykos', 'tylls', 'tymin',
'tymus', 'tynar', 'tynat', 'tynga', 'tyngs', 'tyngt', 'typen', 'typer', 'tyras', 'tyska',
'tyske', 'tysks', 'tyskt', 'tyste', 'tytts', 'täbys', 'täcks', 'täfft', 'täljd', 'täljs',
'täljt', 'tälts', 'tämde', 'tämjd', 'tämjs', 'tämjt', 'tämts', 'tände', 'tänds', 'tänjd',
'tänjs', 'tänjt', 'tänks', 'tänkt', 'tänts', 'täpps', 'täppt', 'täras', 'tärda', 'tärde',
'tärna', 'tärts', 'täten', 'täter', 'tätna', 'tåben', 'tågan', 'tågar', 'tågas', 'tågat',
'tågen', 'tåget', 'tågig', 'tågom', 'tågor', 'tålas', 'tålde', 'tåled', 'tåles', 'tålts',
'tålös', 'tånge', 'tångs', 'tåpaj', 'tåpig', 'tårad', 'tårar', 'tåras', 'tårem', 'tåren',
'tårna', 'tåsko', 'tåtel', 'töade', 'töats', 'töcka', 'töets', 'töffa', 'töjet', 'tölps',
'tölts', 'tömda', 'tömde', 'tömts', 'tönta', 'tönts', 'töras', 'törel', 'töres', 'törna',
'tösen', 'töser', 'tövad', 'tövan', 'tövar', 'tövas', 'tövat', 'ubåts', 'uddad', 'uddar',
'udden', 'uddes', 'uddig', 'uffes', 'ufona', 'ufons', 'ufots', 'ufvar', 'ufven', 'ugnad',
'ugnar', 'ugnas', 'ugnat', 'ugnen', 'uigur', 'ullas', 'ullen', 'ullig', 'ullus', 'ulnar',
'ulric', 'ulrik', 'ulvar', 'ulvat', 'ulven', 'uläge', 'umami', 'umbar', 'umbra', 'umbär',
'umebo', 'umeås', 'undfå', 'undin', 'undör', 'ungar', 'ungas', 'ungen', 'unges', 'uniat',
'unika', 'unike', 'unikt', 'union', 'unket', 'unkna', 'unkne', 'unnad', 'unnar', 'unnas',
'unnat', 'unsen', 'unset', 'unsts', 'unära', 'unärt', 'uppgå', 'uppom', 'urals', 'urans',
'urban', 'urdum', 'urdun', 'urdus', 'urean', 'ureas', 'uremi', 'urens', 'urets', 'urhav',
'urhem', 'urins', 'urkok', 'urmyt', 'urnan', 'urnas', 'urnor', 'urtag', 'usans', 'uselt',
'uskan', 'uskas', 'uskor', 'uslig', 'utahs', 'utbad', 'utbyt', 'utdöm', 'utfil', 'utgav',
'utger', 'utges', 'utgiv', 'utgår', 'utgör', 'utgöt', 'uthyr', 'utkok', 'utkom', 'utled',
'utlys', 'utläs', 'utlån', 'utlöp', 'utlös', 'utmät', 'utmål', 'utral', 'utred', 'utrer',
'utret', 'utrum', 'utrym', 'utrön', 'utser', 'utses', 'utsot', 'utspy', 'utsyn', 'utsåg',
'uttar', 'uttas', 'uttog', 'uttra', 'uttyd', 'uttöm', 'utvik', 'utäga', 'utäng', 'utösa',
'uvars', 'uvens', 'uzbek', 'vadad', 'vadan', 'vadar', 'vadas', 'vadat', 'vaden', 'vader',
'vadet', 'vador', 'vaduz', 'vafan', 'vaffa', 'vaffe', 'vagel', 'vagns', 'vajar', 'vajas',
'vajat', 'vakad', 'vakan', 'vakar', 'vakas', 'vakat', 'vakes', 'vaket', 'vakne', 'vakor',
'vakts', 'valan', 'valar', 'valas', 'valbo', 'valda', 'valde', 'valen', 'vales', 'valet',
'valid', 'valin', 'valka', 'valks', 'valle', 'valls', 'valna', 'valor', 'valps', 'valts',
'valvs', 'vampa', 'vamps', 'vanan', 'vanas', 'vanda', 'vande', 'vanen', 'vaner', 'vanja',
'vanna', 'vanns', 'vanor', 'vants', 'vapör', 'varar', 'varas', 'varat', 'varda', 'varde',
'vardt', 'vardå', 'varen', 'varet', 'varfs', 'varga', 'vargs', 'varia', 'varit', 'varma',
'varme', 'varmt', 'varom', 'varor', 'varps', 'varpå', 'varsk', 'varur', 'varvs', 'vasar',
'vasas', 'vasen', 'vaser', 'vases', 'vassa', 'vasse', 'vasst', 'vaxad', 'vaxar', 'vaxas',
'vaxat', 'vaxen', 'vaxer', 'vaxet', 'vecks', 'vedel', 'veden', 'vedro', 'vedum', 'vegas',
'vegby', 'vejde', 'vejpa', 'vekar', 'vekas', 'veken', 'vekes', 'velad', 'velar', 'velas',
'velat', 'velen', 'veles', 'velum', 'venar', 'venda', 'venen', 'vener', 'venia', 'venne',
'venol', 'venös', 'vepan', 'vepas', 'vepor', 'veras', 'verba', 'verbs', 'verde', 'verke',
'verks', 'verld', 'verop', 'verst', 'vervs', 'vesan', 'vesas', 'vesen', 'vesir', 'vesta',
'vetat', 'veten', 'vetes', 'vetet', 'veton', 'vetos', 'vetot', 'vetta', 'vette', 'vetts',
'vevad', 'vevan', 'vevar', 'vevas', 'vevat', 'veven', 'vevla', 'vevor', 'vexel', 'vians',
'vibbs', 'vichy', 'vicke', 'vicks', 'vidar', 'vidds', 'viden', 'vides', 'videt', 'vidgå',
'vidja', 'vidta', 'viets', 'vigas', 'vigde', 'viger', 'vigga', 'vigge', 'viggo', 'viggs',
'vigts', 'vigör', 'vikar', 'vikas', 'viken', 'viker', 'vikes', 'viket', 'vikit', 'vikna',
'vikon', 'vikta', 'vikte', 'vikts', 'vilad', 'vilan', 'vilar', 'vilas', 'vilat', 'vilda',
'vildt', 'vilje', 'vilka', 'ville', 'villi', 'vilma', 'vilor', 'vilts', 'vimba', 'vimma',
'vinds', 'viner', 'vinet', 'vinit', 'vinks', 'vinns', 'vinår', 'viola', 'viols', 'viors',
'vipan', 'vipor', 'virad', 'virak', 'viral', 'virar', 'viras', 'virat', 'vireo', 'viril',
'viros', 'virre', 'visad', 'visan', 'visar', 'visas', 'visat', 'visby', 'visen', 'vises',
'viset', 'visit', 'visky', 'visor', 'visps', 'vissa', 'visso', 'viste', 'vital', 'vitan',
'vitas', 'viten', 'vites', 'vitet', 'vitor', 'vitra', 'vitsa', 'vitta', 'vitts', 'vitås',
'vivan', 'vivel', 'viven', 'vivet', 'vivre', 'vivör', 'vlogg', 'voall', 'vobba', 'vogue',
'voile', 'vojta', 'volma', 'volts', 'volut', 'volvo', 'voter', 'votum', 'vraks', 'vrala',
'vreda', 'vreds', 'vrena', 'vresa', 'vreta', 'vrets', 'vrett', 'vrids', 'vrils', 'vräks',
'vräkt', 'vräng', 'vråls', 'vråns', 'vrårs', 'vulen', 'vulet', 'vulgo', 'vulka', 'vulna',
'vulne', 'vulst', 'vulva', 'vunna', 'vunne', 'vurms', 'vurre', 'vurst', 'vurti', 'vuxet',
'vuxit', 'vuxna', 'vuxne', 'vyers', 'vyssa', 'väbel', 'väcks', 'väckt', 'väddö', 'väfde',
'väfts', 'väfva', 'vägad', 'vägar', 'vägas', 'vägat', 'vägde', 'vägen', 'väger', 'väges',
'väggs', 'vägts', 'väjas', 'väjde', 'väjer', 'välan', 'välas', 'välde', 'välds', 'väljs',
'välla', 'välls', 'vällt', 'välsk', 'välte', 'välts', 'välva', 'välvd', 'välvs', 'välvt',
'vämjs', 'vämts', 'vände', 'vänds', 'vänge', 'vänjs', 'vänna', 'vänts', 'värda', 'värds',
'värjd', 'värjo', 'värjs', 'värjt', 'värks', 'värkt', 'värmd', 'värms', 'värmt', 'värns',
'värps', 'värpt', 'värre', 'värst', 'värvs', 'väsas', 'väsby', 'väser', 'väses', 'väste',
'västs', 'vätan', 'vätas', 'väter', 'vätes', 'vätet', 'vätta', 'vätts', 'vätös', 'vävar',
'vävas', 'vävda', 'vävde', 'väven', 'väver', 'väves', 'vävts', 'växas', 'växer', 'växes',
'växjö', 'växta', 'växte', 'växts', 'vådan', 'vådas', 'våden', 'våder', 'vådis', 'vådor',
'vågad', 'vågar', 'vågas', 'vågat', 'vågen', 'vågor', 'vålda', 'vålds', 'vålma', 'vånga',
'vångs', 'vånna', 'våpen', 'våpet', 'våpig', 'våran', 'vårar', 'våras', 'vårat', 'vårby',
'vårds', 'våren', 'vårig', 'våris', 'vårså', 'våtår', 'völva', 'vörts', 'wafer', 'waila',
'wajla', 'warda', 'wardt', 'warit', 'watts', 'webbs', 'weber', 'wende', 'whigs', 'whina',
'whist', 'wicca', 'wiens', 'wight', 'wikar', 'wikas', 'wikat', 'wikin', 'wikis', 'wilda',
'wilja', 'wille', 'wilma', 'wipea', 'wirar', 'wiren', 'wires', 'wirth', 'wisby', 'wokad',
'wokar', 'wokas', 'wokat', 'woken', 'wolof', 'wraps', 'wulff', 'wärde', 'wåjnå', 'wörka',
'xenon', 'xerox', 'xhosa', 'xylen', 'xylos', 'yahoo', 'yatzy', 'yawls', 'yells', 'yemen',
'yenen', 'ylade', 'ylens', 'ylets', 'yllen', 'ylles', 'yllet', 'ylvas', 'ymnig', 'ympad',
'ympar', 'ympas', 'ympat', 'ympen', 'yngre', 'yngst', 'yngve', 'ynkan', 'ynkar', 'ynkas',
'ynkat', 'yoloa', 'yorks', 'yppad', 'yppar', 'yppas', 'yppat', 'yrade', 'yrans', 'yrare',
'yrast', 'yrats', 'yrkad', 'yrkan', 'yrkar', 'yrkas', 'yrkat', 'yrken', 'yrkes', 'yrket',
'yrors', 'yrsas', 'ystad', 'ystar', 'ystas', 'ystat', 'ystra', 'ystre', 'ytans', 'yteld',
'ytors', 'ytter', 'ytved', 'yupik', 'yvats', 'yvdes', 'yviga', 'yvige', 'yvigt', 'yxade',
'yxans', 'yxats', 'yxlan', 'yxman', 'yxors', 'zacke', 'zaire', 'zajin', 'zaras', 'zayin',
'zelot', 'zests', 'zetan', 'zetas', 'zetat', 'zinks', 'zippa', 'zloty', 'zomfg', 'zonal',
'zonen', 'zoner', 'zooet', 'zoona', 'zoons', 'zoots', 'zouks', 'zulun', 'zulus', 'zygot',
'ädelt', 'ädlas', 'ädles', 'äfven', 'ägans', 'ägarn', 'ägdes', 'äggar', 'äggas', 'äggat',
'äggen', 'ägget', 'äggul', 'ägnad', 'ägnar', 'ägnas', 'ägnat', 'ägors', 'äktad', 'äktar',
'äktas', 'äktat', 'älgar', 'älgas', 'älgat', 'älgen', 'ältad', 'ältan', 'ältar', 'ältas',
'ältat', 'älvan', 'älvar', 'älvas', 'älven', 'älvor', 'ämbar', 'ämlig', 'ämnad', 'ämnar',
'ämnas', 'ämnat', 'ämnen', 'ämnes', 'ämnet', 'ändad', 'ändan', 'ändar', 'ändas', 'ändat',
'änden', 'änder', 'ändes', 'ändor', 'ändån', 'ängar', 'ängen', 'änger', 'änkan', 'änkas',
'änkor', 'ännen', 'ännes', 'ännet', 'äntra', 'ärade', 'ärans', 'ärats', 'ärbar', 'ärgen',
'äriln', 'ärils', 'äring', 'ärlan', 'ärlas', 'ärlbo', 'ärlor', 'ärmar', 'ärmen', 'ärnad',
'ärnar', 'ärnas', 'ärnat', 'ärors', 'ärrad', 'ärras', 'ärren', 'ärret', 'ärtan', 'ärtas',
'ärten', 'ärter', 'ärtor', 'ärvas', 'ärvda', 'ärvde', 'ärver', 'ärvts', 'äskad', 'äskan',
'äskar', 'äskas', 'äskat', 'äskor', 'ässen', 'ässet', 'ässja', 'ätare', 'ätits', 'ätran',
'ätten', 'ätter', 'ävjan', 'ävjas', 'ävjig', 'ävlan', 'ävlas', 'äxing', 'åarna', 'åberg',
'åbobo', 'åbons', 'åbors', 'åbäka', 'ådans', 'ådern', 'åders', 'ådors', 'ådran', 'ådrar',
'ådras', 'ådrog', 'ådror', 'ådöma', 'åfåra', 'ågren', 'åhnej', 'åhåga', 'åhörd', 'åhörs',
'åhört', 'åkant', 'åkarn', 'åkarp', 'åkbar', 'åkens', 'åkern', 'åkers', 'åkets', 'åkrar',
'åktes', 'åktid', 'ålade', 'ålagd', 'ålagt', 'ålars', 'ålats', 'åleds', 'ålems', 'ålens',
'åligg', 'ålrev', 'ålägg', 'ålågs', 'åmade', 'åmars', 'åmbrå', 'åmens', 'åmvis', 'åmåls',
'ångad', 'ångan', 'ångar', 'ångas', 'ångat', 'ånges', 'ångor', 'årans', 'årder', 'årens',
'årets', 'årfot', 'århus', 'åring', 'årlom', 'årors', 'årpar', 'årsta', 'årtan', 'årtas',
'årtor', 'årvis', 'åryds', 'åsarp', 'åsars', 'åsbro', 'åseda', 'åsedd', 'åsele', 'åsens',
'åsett', 'åsigt', 'åskan', 'åskar', 'åskas', 'åskat', 'åskor', 'åslög', 'åsnan', 'åsnas',
'åsnor', 'åstad', 'åstol', 'åsyna', 'åsyns', 'åsågs', 'åtaga', 'åtags', 'åtals', 'åteln',
'åtels', 'åtgår', 'åtlar', 'åtlas', 'åtlat', 'åtlyd', 'åtogs', 'åtorp', 'åtrar', 'åtras',
'åtrat', 'åtrån', 'åtrår', 'åtrås', 'åttan', 'åttas', 'åttor', 'åvidö', 'åvila', 'öarna',
'öberg', 'öbons', 'öbors', 'öbåge', 'öddes', 'ödela', 'ödems', 'ödena', 'ödens', 'ödets',
'ödlan', 'ödlas', 'ödlor', 'öfrig', 'öfver', 'öfwer', 'ögats', 'öglad', 'öglan', 'öglar',
'öglas', 'öglat', 'öglor', 'ögnad', 'ögnar', 'ögnas', 'ögnat', 'ögons', 'öhman', 'ökade',
'ökats', 'ökens', 'ökets', 'öknar', 'öknen', 'ökänt', 'ölade', 'ölats', 'ölens', 'ölers',
'ölets', 'ölpub', 'ölrap', 'ömkad', 'ömkar', 'ömkas', 'ömkat', 'ömmad', 'ömmar', 'ömmas',
'ömmat', 'ömsad', 'ömsar', 'ömsas', 'ömsat', 'önamn', 'öppet', 'öppne', 'örats', 'örbys',
'örena', 'örens', 'örets', 'örjan', 'örlig', 'örlob', 'örlog', 'örnar', 'örnen', 'örona',
'örons', 'örråg', 'örsjö', 'örten', 'örter', 'örtig', 'örtug', 'öråds', 'ösels', 'ösets',
'öskar', 'ösmos', 'östan', 'östat', 'östen', 'östes', 'östpå', 'östre', 'övade', 'övats',
'övers', 'övlig']
)
;

        
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
                    if (e = s, !Ta.has(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast(tr["Not in word list"]);
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
