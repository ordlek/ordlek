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
    var La = ['abbot', 'abort', 'absid', 'accis', 'ackja', 'adept', 'adlig', 'aerob', 'afasi', 'affix',
'affär', 'afton', 'agave', 'agens', 'agent', 'agera', 'agmyr', 'agoni', 'agrar', 'agtak',
'aioli', 'ajour', 'ajöss', 'akryl', 'akter', 'aktie', 'aktiv', 'aktor', 'aktra', 'aktre',
'aktör', 'alarm', 'alban', 'album', 'alert', 'alexi', 'alias', 'alibi', 'alika', 'alkis',
'alkov', 'alkyd', 'allra', 'alpby', 'alpin', 'alrot', 'altan', 'altea', 'alumn', 'alvar',
'ambis', 'ambra', 'amorf', 'amour', 'ampel', 'amper', 'amöba', 'anbud', 'andas', 'andel',
'andra', 'andre', 'anemi', 'angel', 'angla', 'aning', 'anjon', 'ankar', 'ankel', 'ankra',
'anlag', 'anlöp', 'annan', 'annex', 'anomi', 'anrik', 'anrop', 'anslå', 'anstå', 'antal',
'antik', 'aorta', 'apart', 'apati', 'apbur', 'aphus', 'april', 'aptit', 'areal', 'arena',
'argon', 'argot', 'arier', 'arisk', 'arkad', 'arkiv', 'armod', 'arrak', 'arsel', 'arsin',
'arsle', 'artig', 'arton', 'artär', 'asgam', 'asiat', 'askes', 'asket', 'astat', 'aster',
'astma', 'ataxi', 'atcho', 'atlas', 'atlet', 'atoll', 'atoni', 'attan', 'attji', 'attjo',
'atypi', 'augur', 'avans', 'avart', 'avbön', 'avdra', 'avdöd', 'aveny', 'avers', 'avgas',
'avgud', 'aviga', 'avisa', 'avklä', 'avkok', 'avlat', 'avlut', 'avrad', 'avrop', 'avsky',
'avslå', 'avstå', 'avtal', 'avtvå', 'avtåg', 'avund', 'avväg', 'aväta', 'axial', 'axill',
'axiom', 'aztek', 'backa', 'backe', 'bacon', 'badda', 'bagge', 'bagis', 'bajsa', 'bakis',
'bakom', 'bakpå', 'bakre', 'bakut', 'bakåt', 'balja', 'balka', 'balla', 'balsa', 'bamba',
'bambu', 'bamse', 'banal', 'banan', 'banda', 'bandy', 'bandå', 'baner', 'banga', 'banjo',
'banka', 'banko', 'banna', 'banta', 'bantu', 'barbi', 'barka', 'baron', 'barra', 'barsk',
'baryt', 'basal', 'basar', 'basis', 'basse', 'basta', 'bastu', 'basun', 'batat', 'batik',
'baxna', 'bebis', 'bebop', 'becka', 'bedja', 'bedra', 'befäl', 'begär', 'behag', 'behov',
'beige', 'beklä', 'belag', 'benig', 'berså', 'beråd', 'beröm', 'beska', 'beslå', 'bestå',
'besök', 'betel', 'betro', 'betsa', 'betyg', 'bevis', 'bevåg', 'bibba', 'bibel', 'bidan',
'bidra', 'bienn', 'bikta', 'bilda', 'bilkö', 'bimbo', 'binda', 'binge', 'bingo', 'binka',
'binom', 'binär', 'biord', 'birot', 'bisak', 'bisam', 'bisol', 'bison', 'bistå', 'bitas',
'bitch', 'biton', 'bitsk', 'bitti', 'bivax', 'biväg', 'bjuda', 'bjugg', 'bjäbb', 'bjäfs',
'bjärt', 'björk', 'björn', 'black', 'blada', 'blaha', 'blaja', 'bland', 'blank', 'blarr',
'blase', 'blask', 'blast', 'bleck', 'bleka', 'bleke', 'blick', 'blida', 'bliga', 'blind',
'blini', 'blink', 'bliva', 'blixt', 'block', 'bloda', 'blond', 'bloss', 'blota', 'blott',
'blues', 'bluff', 'blund', 'blusa', 'blygd', 'bläck', 'bläda', 'bläng', 'blänk', 'blära',
'blåna', 'blåsa', 'blåst', 'blått', 'blöda', 'blöja', 'blöta', 'board', 'bobba', 'bobin',
'bocka', 'boett', 'boggi', 'bohag', 'bohem', 'bojar', 'boken', 'bokna', 'bolag', 'bolin',
'bolla', 'bolma', 'bomba', 'bomma', 'bonad', 'bonde', 'bonga', 'bonus', 'boots', 'borax',
'borda', 'boren', 'borga', 'borra', 'borst', 'borta', 'bosch', 'boule', 'bowla', 'boxas',
'boxer', 'boyta', 'boägg', 'bragd', 'braja', 'braka', 'brand', 'brant', 'brasa', 'brass',
'bravo', 'break', 'breda', 'bredd', 'brigg', 'brink', 'brisa', 'brist', 'brits', 'britt',
'brodd', 'broms', 'bronk', 'brons', 'brosk', 'brott', 'brugd', 'bruka', 'brunn', 'brunt',
'brusa', 'brydd', 'brygd', 'bryna', 'bryne', 'brysk', 'bryta', 'bräda', 'brädd', 'bräde',
'bräka', 'bräma', 'bräss', 'bråck', 'bråka', 'bråte', 'bröla', 'bröst', 'bubon', 'buffa',
'buffe', 'bugga', 'bukig', 'bukta', 'bulla', 'bulle', 'bulna', 'bulta', 'bunge', 'bunke',
'bunta', 'burka', 'burop', 'burra', 'busig', 'buska', 'buske', 'bussa', 'butan', 'butik',
'butyl', 'byffe', 'bygel', 'bygga', 'bygge', 'bylta', 'bylte', 'bytta', 'byväg', 'byxis',
'bäbis', 'bädda', 'bägge', 'bälga', 'bälta', 'bälte', 'bända', 'bänka', 'bärga', 'bärig',
'bärsa', 'bässe', 'bävan', 'bäver', 'bågig', 'bågna', 'bödel', 'bökig', 'bölja', 'börda',
'börja', 'bössa', 'bösta', 'böter', 'bövel', 'campa', 'ceder', 'cello', 'cerat', 'cesur',
'chans', 'chark', 'charm', 'check', 'chefa', 'chick', 'chips', 'chock', 'choka', 'choke',
'chosa', 'chuck', 'cider', 'cilie', 'cirka', 'citat', 'civil', 'clips', 'clown', 'coach',
'coupe', 'cover', 'crack', 'crawl', 'crazy', 'credo', 'crepe', 'cross', 'culpa', 'curla',
'curry', 'cykel', 'cykla', 'cysta', 'dabba', 'dadda', 'dadel', 'dagas', 'dager', 'dagga',
'dagis', 'dalbo', 'daler', 'dalsk', 'dalta', 'damig', 'damma', 'dampa', 'dandy', 'daner',
'dansa', 'dansk', 'darra', 'daska', 'dater', 'dativ', 'datja', 'dator', 'datum', 'debet',
'debil', 'debut', 'degel', 'degig', 'deism', 'deist', 'dejsa', 'dekad', 'dekal', 'dekan',
'dekis', 'dekor', 'delad', 'delge', 'delta', 'demon', 'denar', 'denim', 'denne', 'deppa',
'deras', 'derby', 'desto', 'deuce', 'devis', 'devon', 'devot', 'digel', 'diger', 'digga',
'digna', 'dikta', 'dilla', 'dille', 'dimma', 'dimpa', 'dinar', 'dinge', 'dingo', 'dirka',
'dirra', 'disig', 'diska', 'disko', 'disör', 'disös', 'ditåt', 'divan', 'divig', 'divis',
'dixie', 'djinn', 'djonk', 'djärv', 'docka', 'dofta', 'dolma', 'dolme', 'dolsk', 'dolus',
'domna', 'domän', 'donna', 'doppa', 'dorer', 'dorsk', 'dosis', 'doyen', 'draga', 'drage',
'dragg', 'drake', 'drama', 'drank', 'drapa', 'dreja', 'dress', 'dreva', 'drift', 'drill',
'drink', 'driva', 'drive', 'droga', 'dront', 'dropp', 'drots', 'drott', 'druid', 'druva',
'dryad', 'dryck', 'dryga', 'drypa', 'drägg', 'dräkt', 'dräll', 'dräng', 'dräpa', 'dråsa',
'dråse', 'dröja', 'dröna', 'drösa', 'dröse', 'dubba', 'ducka', 'duell', 'duett', 'dugga',
'dukat', 'duman', 'dumma', 'dummy', 'dumpa', 'dunge', 'dunig', 'dunka', 'dunsa', 'dunst',
'durka', 'durra', 'dusch', 'duska', 'dusör', 'dutta', 'duven', 'duvna', 'dvala', 'dvärg',
'dylik', 'dynga', 'dypöl', 'dyrka', 'dyvåt', 'däcka', 'dädan', 'dämma', 'dämme', 'dämpa',
'dänga', 'dänka', 'däran', 'därav', 'därom', 'därpå', 'därur', 'däråt', 'däven', 'dävna',
'däxel', 'dådra', 'dålig', 'dåsig', 'dåtid', 'dödis', 'döing', 'dölja', 'dörja', 'eagle',
'edera', 'edikt', 'edlig', 'efter', 'ehuru', 'ejder', 'ekfat', 'eklog', 'eklut', 'eklöv',
'ekoxe', 'eksem', 'elbil', 'eldig', 'elegi', 'elfte', 'eller', 'ellok', 'elnät', 'eloge',
'eltåg', 'elugn', 'emalj', 'emfas', 'empir', 'enare', 'enbar', 'enbär', 'endiv', 'enfas',
'enhet', 'ening', 'enkel', 'enkla', 'enkom', 'enkät', 'enorm', 'enris', 'enrum', 'ensak',
'ensam', 'ental', 'entre', 'envar', 'envig', 'envis', 'enzym', 'enögd', 'eocen', 'eoler',
'eosin', 'episk', 'epope', 'espri', 'essay', 'ester', 'estet', 'etage', 'etapp', 'etisk',
'etter', 'exakt', 'extas', 'extra', 'fabel', 'fabla', 'facil', 'facit', 'fader', 'fadäs',
'fager', 'fakir', 'fakta', 'falka', 'falla', 'falna', 'falsa', 'falsk', 'famla', 'famna',
'famös', 'faner', 'farad', 'farao', 'faren', 'farin', 'farma', 'farsa', 'fasad', 'fasan',
'fasen', 'fason', 'fasta', 'fatal', 'fatta', 'fatöl', 'fauna', 'favör', 'feber', 'feeri',
'fegis', 'fejka', 'fekal', 'felas', 'femma', 'femte', 'femti', 'fenol', 'fenyl', 'ferie',
'festa', 'fetma', 'fetna', 'fiber', 'ficka', 'fidus', 'fiffa', 'fight', 'figur', 'fiken',
'fikon', 'fikus', 'filea', 'filma', 'filta', 'filur', 'fimpa', 'final', 'fingå', 'finit',
'finka', 'finna', 'finne', 'finsk', 'finta', 'firma', 'firre', 'fisig', 'fiska', 'fiske',
'fitta', 'fjant', 'fjord', 'fjäll', 'fjärd', 'fjärt', 'fjäsa', 'fjäsk', 'flabb', 'flack',
'flaga', 'flagg', 'flake', 'flams', 'flank', 'flark', 'flarn', 'flata', 'flaxa', 'flera',
'flere', 'flest', 'flexa', 'flika', 'flina', 'flink', 'flint', 'flirt', 'flisa', 'flita',
'flock', 'flopp', 'flora', 'flott', 'fluff', 'fluga', 'fluid', 'flukt', 'fluor', 'fluss',
'flyga', 'flygg', 'flykt', 'flyta', 'flytt', 'fläck', 'fläka', 'fläkt', 'flämt', 'fläng',
'fläns', 'flärd', 'fläsk', 'fläta', 'flåsa', 'flått', 'flöda', 'flöde', 'flöja', 'flöjt',
'flört', 'flöte', 'flöts', 'fnasa', 'fnask', 'fnatt', 'fniss', 'fnysa', 'foaje', 'focka',
'foder', 'fodra', 'fogde', 'fokal', 'fokus', 'folie', 'folio', 'folka', 'fondy', 'fonem',
'forma', 'forsa', 'forta', 'forte', 'forum', 'foton', 'frack', 'frakt', 'frami', 'franc',
'frank', 'frans', 'frasa', 'freda', 'frejd', 'freon', 'fresk', 'frett', 'frige', 'frisk',
'frist', 'frita', 'frond', 'front', 'frost', 'fruga', 'frukt', 'frusa', 'fryle', 'fryna',
'frysa', 'fryst', 'fräck', 'fräne', 'fräsa', 'fräta', 'fråga', 'fröjd', 'fukta', 'fullo',
'fulna', 'fumla', 'funka', 'furie', 'furir', 'furor', 'furst', 'fuska', 'futil', 'futta',
'fylka', 'fylke', 'fylla', 'fylld', 'fylle', 'fyllo', 'fynda', 'fyrop', 'fyrti', 'fysik',
'fäbod', 'fäfot', 'fägna', 'fähus', 'fäkta', 'fälad', 'fälla', 'fälle', 'fänad', 'fänta',
'färga', 'färja', 'färla', 'färna', 'färre', 'färsk', 'fästa', 'fäste', 'fäsör', 'fågel',
'fålla', 'fånga', 'fånge', 'fånig', 'fårad', 'fårig', 'fåtal', 'följa', 'följd', 'följe',
'förbi', 'förgå', 'förig', 'förmå', 'förna', 'förom', 'förra', 'förrn', 'förse', 'först',
'förta', 'förti', 'förty', 'förut', 'förår', 'gadda', 'gagat', 'gagga', 'gagna', 'galax',
'galej', 'galen', 'galge', 'galla', 'galon', 'galva', 'galär', 'gamba', 'gamet', 'gamig',
'gamma', 'gapig', 'garde', 'garva', 'gasad', 'gaska', 'gasol', 'gassa', 'gasta', 'gavel',
'gavla', 'gebit', 'gecko', 'gegga', 'gehör', 'geist', 'gelea', 'gemak', 'gemen', 'gemyt',
'gemål', 'genbo', 'genes', 'genie', 'genom', 'genre', 'genta', 'genua', 'genus', 'getto',
'gevär', 'gifta', 'gifte', 'gilja', 'gilla', 'gille', 'ginst', 'gippa', 'gipsa', 'gipyr',
'girig', 'gissa', 'gista', 'gitta', 'givas', 'given', 'givet', 'gjord', 'gjuse', 'gjuta',
'glaci', 'glada', 'glana', 'glans', 'glapp', 'glasa', 'glass', 'glatt', 'glesa', 'glete',
'glida', 'glima', 'glimt', 'gliom', 'glipa', 'glira', 'glisa', 'glopp', 'glosa', 'gloso',
'glugg', 'glunt', 'glupa', 'glutt', 'glytt', 'gläfs', 'glänt', 'glöda', 'glögg', 'glöta',
'gnabb', 'gnaga', 'gnata', 'gnava', 'gnejs', 'gneka', 'gneta', 'gnida', 'gnist', 'gnola',
'gnuko', 'gnägg', 'gnäll', 'gnöla', 'godis', 'godta', 'godår', 'golfa', 'golva', 'gonad',
'gorma', 'gorån', 'gosig', 'gosse', 'gotik', 'gotsk', 'gotta', 'graal', 'grabb', 'grace',
'grada', 'grain', 'grand', 'grann', 'grava', 'green', 'greja', 'grena', 'grepe', 'grepp',
'greve', 'grift', 'grill', 'grina', 'grind', 'gripa', 'grisa', 'grisk', 'groda', 'grodd',
'grogg', 'groll', 'gross', 'gruff', 'grums', 'grund', 'grupp', 'grusa', 'gruva', 'grymt',
'gryna', 'gryta', 'gräla', 'gräll', 'gräma', 'gränd', 'gräng', 'gräns', 'gräsa', 'gräva',
'gråal', 'gråbo', 'gråna', 'gråta', 'grått', 'gröda', 'grönt', 'gröpa', 'gröpe', 'gröta',
'guano', 'guava', 'gubba', 'gubbe', 'gubbs', 'gudom', 'guida', 'guide', 'gulla', 'gulle',
'gulna', 'gumma', 'gummi', 'gumpa', 'gumse', 'gunga', 'gunst', 'gunås', 'guppa', 'guppy',
'gurka', 'guska', 'gutår', 'guvet', 'gylta', 'gympa', 'gynna', 'gäcka', 'gädda', 'gälda',
'gälla', 'gänga', 'gärda', 'gärde', 'gärna', 'gäspa', 'gästa', 'gånga', 'gökbo', 'gökur',
'gömma', 'gömme', 'göpen', 'habil', 'habit', 'hacka', 'haffa', 'hafsa', 'hagel', 'hagga',
'hagla', 'haiku', 'hajka', 'hakig', 'halis', 'halka', 'hallå', 'halma', 'halsa', 'halta',
'halva', 'halvö', 'hambo', 'hamit', 'hamla', 'hamna', 'hampa', 'hamra', 'hands', 'hanka',
'hanne', 'hansa', 'harem', 'harig', 'harka', 'harma', 'harpa', 'harts', 'harva', 'hasch',
'haspa', 'hasta', 'hatta', 'havre', 'hebre', 'heden', 'heder', 'hedra', 'hejda', 'hejig',
'hekto', 'helga', 'helgd', 'helig', 'helna', 'helot', 'helst', 'helår', 'hemby', 'hemma',
'hemom', 'hemsk', 'hemul', 'hemåt', 'henna', 'henne', 'herde', 'heros', 'herre', 'herse',
'hertz', 'hetsa', 'hetta', 'hetär', 'hicka', 'hilka', 'himla', 'hindi', 'hindu', 'hinka',
'hinna', 'hippa', 'hisna', 'hissa', 'hitom', 'hitre', 'hitta', 'hitåt', 'hjalt', 'hjord',
'hjort', 'hjula', 'hjälm', 'hjälp', 'hobby', 'hojta', 'holka', 'holma', 'holme', 'homma',
'honom', 'hopas', 'hoper', 'hoppa', 'horst', 'hosta', 'houri', 'hovra', 'hugad', 'hugga',
'hugna', 'hulka', 'human', 'humid', 'humla', 'humle', 'humma', 'humor', 'humus', 'humör',
'hunsa', 'hurra', 'hurså', 'hurts', 'husar', 'husch', 'husly', 'husse', 'hutta', 'huvud',
'hydda', 'hydra', 'hyena', 'hyfsa', 'hygge', 'hylla', 'hylle', 'hylsa', 'hymen', 'hymla',
'hynda', 'hysch', 'hyska', 'hysta', 'hytta', 'hyvel', 'hyvla', 'häcka', 'hädan', 'häfta',
'häfte', 'häger', 'hägna', 'hägra', 'häkta', 'häkte', 'hälft', 'hälla', 'hälsa', 'hälta',
'hämma', 'hämna', 'hämnd', 'hämta', 'hända', 'hänga', 'hänge', 'häpen', 'häpna', 'härad',
'härav', 'härda', 'härja', 'härma', 'härom', 'härpå', 'härur', 'härva', 'häråt', 'hätsk',
'hätta', 'hävda', 'hävel', 'hävla', 'häxig', 'hågad', 'hågsa', 'håken', 'hålig', 'hålla',
'hånle', 'hårig', 'håvor', 'höbal', 'höfta', 'höger', 'hölja', 'hölje', 'hönsa', 'hördu',
'hörna', 'hörru', 'hösta', 'hövan', 'hövas', 'icing', 'ideal', 'idiom', 'idiot', 'idyll',
'ifall', 'ifatt', 'ifjol', 'ifjor', 'ifred', 'ifrån', 'iföra', 'igloo', 'igång', 'ihjäl',
'ijåns', 'ikapp', 'iklyv', 'iktus', 'ikull', 'iland', 'ilbud', 'iller', 'ilska', 'iltåg',
'image', 'imago', 'imfri', 'immig', 'immun', 'imrör', 'inatt', 'index', 'indie', 'indra',
'inert', 'infam', 'infix', 'inför', 'ingen', 'ingöt', 'inhav', 'inkok', 'inköp', 'inlån',
'inmat', 'innan', 'inner', 'input', 'inrim', 'inrop', 'insjö', 'insyn', 'intag', 'intet',
'intig', 'intim', 'intyg', 'intåg', 'inuit', 'inuti', 'inval', 'invid', 'invit', 'inäga',
'inöva', 'irisk', 'ironi', 'iröra', 'isbit', 'isblå', 'isfri', 'isgrå', 'ishav', 'iskub',
'islag', 'islam', 'islår', 'isnot', 'ispik', 'issjö', 'issåg', 'ister', 'istid', 'isvak',
'isvit', 'isydd', 'isyxa', 'isälv', 'itänd', 'ivran', 'ivrig', 'jacka', 'jakko', 'jamen',
'jamma', 'jamsa', 'jamän', 'jaord', 'japan', 'jarop', 'jazza', 'jeans', 'jenka', 'jeppe',
'jippo', 'jobba', 'jodda', 'jogga', 'jojka', 'joker', 'jolle', 'jolta', 'jomen', 'joner',
'jorda', 'joule', 'joxig', 'jubel', 'jubla', 'jucka', 'juice', 'julig', 'julle', 'julöl',
'jumbo', 'jumpa', 'junta', 'juris', 'jurta', 'juste', 'jutsk', 'juvel', 'juver', 'jycke',
'jympa', 'jädra', 'jäkel', 'jäkla', 'jäkta', 'jämka', 'jämna', 'jämnt', 'jämra', 'jämte',
'jänta', 'järpe', 'jäsig', 'jästa', 'jätte', 'jävel', 'jävig', 'jävla', 'jökel', 'jösse',
'kabal', 'kabel', 'kabin', 'kabla', 'kabyl', 'kacka', 'kader', 'kaffe', 'kagge', 'kajak',
'kajbo', 'kajka', 'kakao', 'kakel', 'kakla', 'kakte', 'kalas', 'kalde', 'kalif', 'kalka',
'kalla', 'kalna', 'kaluv', 'kalva', 'kamel', 'kamin', 'kamma', 'kanak', 'kanal', 'kandi',
'kanel', 'kanik', 'kanin', 'kanna', 'kanon', 'kanot', 'kanta', 'kanyl', 'kapok', 'kappa',
'kappe', 'kapun', 'karat', 'karda', 'karel', 'karet', 'karib', 'karit', 'karpa', 'karre',
'karsk', 'karst', 'karta', 'karva', 'kasko', 'kassa', 'kasse', 'kasta', 'kasus', 'katet',
'katig', 'katod', 'katsa', 'katse', 'katta', 'kauri', 'kavaj', 'kavat', 'kavel', 'kavla',
'kavle', 'kaxig', 'kazak', 'kebab', 'kediv', 'kedja', 'kefir', 'kelen', 'kelig', 'kelim',
'kendo', 'keram', 'kerub', 'ketch', 'khmer', 'kiasm', 'kicka', 'kikna', 'killa', 'kille',
'kimma', 'kines', 'kinin', 'kinka', 'kiosk', 'kippa', 'kirra', 'kisel', 'kissa', 'kisse',
'kista', 'kitin', 'kitta', 'kivas', 'kjusa', 'klabb', 'klack', 'kladd', 'klaff', 'klafs',
'klaga', 'klamp', 'klang', 'klank', 'klant', 'klapp', 'klara', 'klase', 'klass', 'klatt',
'klava', 'klave', 'klema', 'klena', 'klerk', 'kleta', 'klibb', 'klick', 'klifs', 'klimp',
'kling', 'klink', 'klint', 'klipp', 'klirr', 'klitt', 'kliva', 'kloak', 'klona', 'kloss',
'klots', 'klott', 'klove', 'klubb', 'kluck', 'kludd', 'klump', 'klunk', 'kluns', 'klura',
'kluta', 'klyft', 'klyka', 'klyva', 'kläda', 'klädd', 'kläde', 'klämt', 'kläng', 'kläpp',
'klätt', 'klåda', 'klåpa', 'klösa', 'knack', 'knagg', 'knaka', 'knall', 'knape', 'knapp',
'knark', 'knarp', 'knarr', 'knasa', 'knast', 'knata', 'knega', 'kneka', 'knekt', 'knick',
'knipa', 'knips', 'knirk', 'knirr', 'knisp', 'knixa', 'knodd', 'knoga', 'knoge', 'knopa',
'knopp', 'knorr', 'knort', 'knorv', 'knota', 'knott', 'knubb', 'knuff', 'knuta', 'knyck',
'knyla', 'knyst', 'knyta', 'knyte', 'knytt', 'knäck', 'knäpp', 'knätt', 'knåda', 'knåpa',
'knöka', 'knöla', 'koala', 'kobbe', 'kobra', 'kocka', 'kodex', 'kofen', 'kofot', 'kofta',
'koger', 'kokig', 'kokos', 'koksa', 'kolik', 'kolin', 'kolit', 'kolja', 'kolka', 'kolla',
'kolli', 'kollo', 'kolon', 'kolos', 'kombi', 'komet', 'komik', 'komma', 'kompa', 'konst',
'konto', 'kopal', 'kopek', 'kopia', 'koppa', 'kopra', 'koral', 'koran', 'korda', 'korka',
'korna', 'korpa', 'korsa', 'korso', 'korta', 'korum', 'korus', 'korva', 'kossa', 'kosta',
'kotte', 'koögd', 'kpist', 'kraal', 'kraba', 'krabb', 'krafs', 'kraft', 'kraga', 'krage',
'kraka', 'krake', 'krama', 'kramp', 'krams', 'krana', 'krank', 'krans', 'krapp', 'krasa',
'krass', 'krats', 'kratt', 'kraxa', 'kreol', 'kreta', 'krets', 'kriga', 'krill', 'kring',
'krisa', 'krita', 'kroat', 'krock', 'kroka', 'kroki', 'kroma', 'krona', 'kropp', 'kross',
'krubb', 'kruka', 'krull', 'krupp', 'krusa', 'kruta', 'kruxa', 'krypa', 'kryss', 'kräla',
'kräpp', 'kräva', 'kråka', 'kråma', 'kröka', 'krökt', 'kröna', 'kuban', 'kubbe', 'kubik',
'kucku', 'kudde', 'kugga', 'kugge', 'kujon', 'kulak', 'kulen', 'kulig', 'kulla', 'kulle',
'kulna', 'kulör', 'kunna', 'kupig', 'kupol', 'kuppa', 'kurer', 'kuria', 'kurir', 'kurra',
'kurre', 'kursa', 'kurva', 'kusch', 'kusin', 'kuska', 'kutig', 'kutym', 'kuvös', 'kvala',
'kvalm', 'kvarg', 'kvark', 'kvarn', 'kvart', 'kvass', 'kvast', 'kvesa', 'kvick', 'kvida',
'kvidd', 'kviga', 'kvint', 'kvirr', 'kvist', 'kvitt', 'kväda', 'kväde', 'kväka', 'kväll',
'kväsa', 'kväva', 'kväve', 'kyffa', 'kyffe', 'kylig', 'kylna', 'kylsa', 'kymig', 'kynne',
'kyrka', 'kyssa', 'kytta', 'käfta', 'kägel', 'kägla', 'kälke', 'källa', 'kälta', 'kämpa',
'kämpe', 'känga', 'känna', 'käppi', 'käril', 'kärna', 'kärra', 'kärva', 'kärve', 'kätte',
'käxig', 'kådig', 'kådis', 'kånka', 'kåras', 'kårel', 'kåsör', 'kåsös', 'köksa', 'kölad',
'kölna', 'körig', 'körna', 'laber', 'labil', 'lacka', 'ladda', 'lafsa', 'lager', 'lagga',
'lagom', 'lagra', 'lagun', 'lakan', 'lakej', 'lakun', 'lalla', 'lamma', 'lampa', 'landa',
'landå', 'laner', 'langa', 'lanka', 'lapis', 'lappa', 'lapsk', 'largo', 'larma', 'larva',
'laser', 'laska', 'lasra', 'lassa', 'lasso', 'lasta', 'lasur', 'lasyr', 'later', 'latex',
'latin', 'latta', 'laura', 'lavin', 'lavyr', 'leasa', 'ledad', 'ledas', 'ledig', 'legal',
'legat', 'legio', 'legär', 'lejon', 'lekis', 'lemma', 'lemur', 'lepra', 'lerig', 'letal',
'lever', 'levit', 'levra', 'lidar', 'lider', 'liera', 'lifta', 'ligga', 'likna', 'likör',
'lilja', 'lilla', 'lille', 'limit', 'limma', 'limpa', 'linda', 'linje', 'linka', 'linne',
'lipas', 'lipen', 'lipig', 'lirka', 'lisen', 'lisma', 'lista', 'lisös', 'liten', 'liter',
'litet', 'litsa', 'livad', 'liver', 'livre', 'ljuda', 'ljuga', 'ljung', 'ljuta', 'lobba',
'lobby', 'locka', 'lodda', 'loden', 'logga', 'logik', 'lojal', 'lokal', 'lokus', 'lolla',
'lomma', 'lomme', 'loppa', 'loran', 'lorta', 'loser', 'loska', 'lossa', 'losta', 'lotsa',
'lotta', 'lotto', 'lotus', 'loven', 'lubba', 'lucia', 'lucka', 'ludda', 'luden', 'luder',
'ludra', 'luffa', 'lufsa', 'lufta', 'lugga', 'lugna', 'lukta', 'lulla', 'lumen', 'lumpa',
'lunar', 'lunch', 'lunga', 'lunka', 'lunna', 'lunne', 'lunsa', 'lunta', 'lupin', 'lupus',
'luras', 'lurig', 'lusig', 'luska', 'lussa', 'lusta', 'luver', 'lybsk', 'lycka', 'lydig',
'lyfta', 'lykta', 'lymfa', 'lynne', 'lyrik', 'lysin', 'lysol', 'lyxig', 'lyxåk', 'läcka',
'läder', 'lägel', 'läger', 'lägga', 'lägra', 'läkas', 'lämna', 'lämpa', 'lända', 'länga',
'längd', 'länge', 'längs', 'länka', 'länsa', 'lärft', 'lärka', 'läska', 'läspa', 'lästa',
'läsår', 'lätta', 'långa', 'långt', 'lånke', 'lånta', 'låssa', 'låtsa', 'lödig', 'löfte',
'lömsk', 'löpna', 'löpsk', 'lösen', 'lösge', 'löska', 'lövad', 'lövas', 'macka', 'madam',
'madhö', 'madra', 'mager', 'magik', 'magma', 'magra', 'major', 'makta', 'malaj', 'malis',
'malja', 'malla', 'malma', 'malva', 'malör', 'mamba', 'mambo', 'mamma', 'manad', 'maner',
'manet', 'mango', 'manke', 'manna', 'manus', 'manår', 'maori', 'marig', 'marin', 'marka',
'marsk', 'maser', 'masig', 'maska', 'massa', 'masur', 'matad', 'match', 'matho', 'matig',
'matkö', 'matos', 'matro', 'matta', 'matte', 'mauve', 'maxim', 'maxis', 'mecka', 'medan',
'medel', 'meder', 'medge', 'media', 'medio', 'medla', 'medta', 'mejka', 'mejla', 'melon',
'memma', 'menad', 'mened', 'menig', 'merit', 'mesan', 'mesig', 'meson', 'metan', 'meter',
'metod', 'metro', 'metyl', 'midja', 'mikra', 'mikro', 'milis', 'miljö', 'mimik', 'minna',
'minne', 'minst', 'minus', 'minut', 'minör', 'missa', 'misse', 'mista', 'miste', 'misär',
'mitra', 'mixed', 'mixer', 'mjugg', 'mjuka', 'mjäka', 'mjäla', 'mjäll', 'mjöla', 'mjölk',
'moare', 'mobba', 'mobil', 'mocka', 'modal', 'modem', 'moder', 'modig', 'modul', 'modus',
'mogen', 'mogna', 'mogul', 'moira', 'mojig', 'mojna', 'molar', 'molok', 'monad', 'monke',
'moped', 'moppa', 'moppe', 'mopsa', 'moral', 'moras', 'mores', 'morla', 'morna', 'morot',
'morra', 'morsa', 'morse', 'morsk', 'morän', 'mosel', 'mosig', 'moske', 'mossa', 'mosse',
'motig', 'motiv', 'motor', 'motse', 'motta', 'motto', 'mucka', 'mufti', 'mujka', 'mulen',
'mulla', 'mulna', 'multe', 'mumie', 'mumla', 'mumma', 'mumsa', 'mungo', 'munta', 'mural',
'murra', 'murre', 'musch', 'musik', 'musta', 'mycel', 'mycke', 'mygel', 'mygga', 'mygla',
'mylla', 'mylta', 'mynda', 'mynna', 'mynta', 'myopi', 'myrra', 'mysig', 'myska', 'mysko',
'mäkla', 'mäkta', 'mälta', 'mänga', 'mängd', 'märka', 'märke', 'märkt', 'märla', 'mäska',
'mässa', 'mätta', 'måbär', 'målla', 'målro', 'månad', 'månde', 'många', 'mångt', 'månne',
'måste', 'måtro', 'måtta', 'måtte', 'måtto', 'möbel', 'mödom', 'mögel', 'mögla', 'mölja',
'mölla', 'mönja', 'mörda', 'mörja', 'mörka', 'mössa', 'mötas', 'blipp', 'nabob', 'nacka',
'nacke', 'nadir', 'nafsa', 'nafta', 'nagel', 'nagga', 'nagla', 'najad', 'naken', 'nalla',
'nalle', 'namna', 'namne', 'nappa', 'narig', 'narra', 'narri', 'narva', 'nasal', 'nasir',
'nasse', 'nativ', 'natta', 'natur', 'naval', 'navel', 'navla', 'nedan', 'neder', 'nedom',
'nedpå', 'nedre', 'nedta', 'nedåt', 'neger', 'nehej', 'nerom', 'nerpå', 'nerta', 'nerts',
'nertz', 'neråt', 'netto', 'nevus', 'nexus', 'nicka', 'nidsk', 'niece', 'nikta', 'nipig',
'nippa', 'nisch', 'nissa', 'nisse', 'nitid', 'nitti', 'njugg', 'njure', 'njuta', 'nobba',
'nobel', 'nocka', 'nodul', 'nogav', 'nojig', 'nojsa', 'nolla', 'nolle', 'nomad', 'nomen',
'nonie', 'noppa', 'norna', 'norpa', 'norra', 'norsk', 'nosig', 'notis', 'novis', 'nubba',
'nubbe', 'nucka', 'nudda', 'nudel', 'numen', 'numer', 'numro', 'nunna', 'nutid', 'nyans',
'nycka', 'nyhet', 'nying', 'nylig', 'nylle', 'nylon', 'nynna', 'nypas', 'nypon', 'nyrik',
'nysnö', 'nysta', 'nyter', 'nytta', 'nyval', 'näbba', 'nähej', 'nämen', 'nämna', 'nämnd',
'näpen', 'näppe', 'näpsa', 'näpst', 'närig', 'närma', 'nästa', 'näste', 'nätta', 'näver',
'nåbar', 'nåder', 'nådig', 'någon', 'nåtla', 'nåväl', 'nödga', 'nödig', 'nödår', 'nöjas',
'nörel', 'oadel', 'oanad', 'oasis', 'obedd', 'oblat', 'oblid', 'oblik', 'oblyg', 'obygd',
'obytt', 'oböjd', 'ocean', 'ocker', 'ockra', 'också', 'odiös', 'odjur', 'odlad', 'odryg',
'odygd', 'odåga', 'odömd', 'odöpt', 'odört', 'oenig', 'oense', 'offer', 'offra', 'ofred',
'ofrid', 'ofrom', 'ofärd', 'ofärg', 'ofödd', 'oföre', 'ogagn', 'ogift', 'ogill', 'ogräs',
'ohmsk', 'ohyra', 'ohägn', 'ohörd', 'ojust', 'ojämn', 'okapi', 'okben', 'oklar', 'oklok',
'okokt', 'oktal', 'oktan', 'oktav', 'okysk', 'okänd', 'olaga', 'olika', 'oljig', 'oljud',
'ollon', 'olust', 'olvon', 'oläkt', 'olänt', 'olärd', 'oläst', 'olåst', 'olöst', 'omaka',
'ombud', 'omdop', 'omega', 'omgiv', 'omild', 'omkok', 'omköp', 'omsyn', 'omtag', 'omtal',
'omval', 'omväg', 'omåkt', 'onani', 'onkel', 'onöjd', 'opera', 'opiat', 'opium', 'opris',
'optik', 'orask', 'ordal', 'orden', 'order', 'ordna', 'oread', 'oreda', 'oredd', 'orena',
'orera', 'organ', 'orgel', 'orgie', 'origo', 'orkan', 'orlov', 'ormbo', 'ornat', 'orsak',
'orund', 'orädd', 'orätt', 'oröjd', 'orörd', 'osagd', 'osams', 'osann', 'osedd', 'osfri',
'oskäl', 'oskön', 'osmak', 'osman', 'osmos', 'ostan', 'ostig', 'ostor', 'osund', 'osäll',
'osådd', 'osåld', 'osökt', 'otack', 'otakt', 'otalt', 'oting', 'otium', 'otukt', 'otydd',
'otäck', 'ovana', 'ovass', 'ovett', 'ovigd', 'ovikt', 'oviss', 'ovägd', 'oväld', 'oxbär',
'oxhud', 'oxöga', 'oädel', 'oäkta', 'oäven', 'oövad', 'packa', 'packe', 'padda', 'pagod',
'pajas', 'paket', 'palla', 'palma', 'palta', 'panda', 'panel', 'panga', 'panik', 'panka',
'panna', 'pannå', 'panta', 'pappa', 'papua', 'parad', 'parat', 'parce', 'pares', 'paria',
'parig', 'parti', 'party', 'pasha', 'pasma', 'passa', 'passe', 'pasta', 'paten', 'pater',
'patos', 'patta', 'patte', 'pausa', 'peang', 'pedal', 'pegas', 'pegel', 'pejla', 'penal',
'penis', 'penna', 'penni', 'penny', 'pense', 'peppa', 'peruk', 'petig', 'petit', 'piaff',
'piano', 'picka', 'picot', 'pieta', 'piffa', 'pigga', 'piket', 'pilka', 'pilla', 'pilot',
'pilsk', 'pinal', 'pinje', 'pinka', 'pinna', 'pinne', 'pipig', 'pippa', 'pippi', 'pirat',
'pirig', 'pirka', 'pirog', 'pirra', 'pirum', 'pirål', 'piska', 'pispa', 'pissa', 'pivot',
'pizza', 'pjatt', 'pjosk', 'pjunk', 'pjätt', 'pjäxa', 'pjåka', 'pjåsk', 'plack', 'plage',
'plagg', 'plana', 'plank', 'plask', 'plast', 'plats', 'platt', 'platå', 'playa', 'plebs',
'pleti', 'pligg', 'plikt', 'pling', 'plint', 'plira', 'plita', 'plock', 'ploga', 'plomb',
'plopp', 'plugg', 'plump', 'plums', 'plurr', 'pluta', 'plutt', 'plymå', 'plysa', 'plyte',
'pläga', 'plätt', 'plåga', 'plåna', 'plåta', 'plöja', 'pocka', 'poesi', 'pojke', 'pokal',
'poker', 'polar', 'polio', 'polis', 'polka', 'polsk', 'polyp', 'polär', 'pompa', 'ponke',
'ponny', 'poppa', 'porig', 'porla', 'porta', 'porto', 'porös', 'posta', 'posto', 'posör',
'potta', 'poäng', 'prakt', 'prata', 'preja', 'press', 'prick', 'prima', 'primo', 'prins',
'prion', 'prior', 'prisa', 'proms', 'propp', 'props', 'propå', 'prosa', 'prost', 'prova',
'prunk', 'pruta', 'prutt', 'pryda', 'pränt', 'präst', 'pråla', 'pråma', 'prång', 'pröjs',
'pröva', 'psalm', 'psyka', 'psyke', 'ptroa', 'pucka', 'pudel', 'puder', 'pudra', 'puffa',
'pulka', 'pulla', 'pulpa', 'pulsa', 'pumpa', 'pumps', 'punda', 'punga', 'punka', 'punkt',
'punsa', 'puppa', 'purjo', 'purra', 'pussa', 'pusta', 'putig', 'putsa', 'putta', 'putte',
'putti', 'putto', 'pycke', 'pyemi', 'pygme', 'pylon', 'pynta', 'pyrig', 'pyton', 'pytsa',
'pytte', 'pälsa', 'pärla', 'päron', 'pärta', 'påbrå', 'påbud', 'pålle', 'pålok', 'pårop',
'påsig', 'påste', 'påstå', 'påsyn', 'påtal', 'påtår', 'påver', 'påökt', 'pöbel', 'pölsa',
'pörte', 'pösig', 'rabbi', 'racer', 'racka', 'radar', 'radda', 'radie', 'radio', 'radja',
'radon', 'radså', 'rafsa', 'ragga', 'ragla', 'raken', 'raket', 'rakna', 'ralla', 'rally',
'ramla', 'ramma', 'ramsa', 'ranch', 'randa', 'ranka', 'ranta', 'rapid', 'rappa', 'rarka',
'raska', 'raspa', 'rasta', 'ratta', 'ravin', 'rayon', 'reale', 'rebus', 'recit', 'redan',
'redig', 'reell', 'refug', 'regal', 'regel', 'regim', 'regla', 'regna', 'rejäl', 'rekyl',
'relik', 'reläa', 'remis', 'remsa', 'renat', 'renko', 'rensa', 'repig', 'reson', 'resår',
'retas', 'retor', 'retur', 'reuma', 'revel', 'revig', 'revir', 'revär', 'ribba', 'ricin',
'ricka', 'rigel', 'rigga', 'rigid', 'rigla', 'rikta', 'rilla', 'rimma', 'rimpa', 'ringa',
'rinna', 'risig', 'riska', 'rispa', 'rista', 'ritsa', 'rival', 'rivas', 'rivig', 'robot',
'rocka', 'rodel', 'rodeo', 'roder', 'rodna', 'roffa', 'rolig', 'rolla', 'rolös', 'roman',
'romsk', 'ronda', 'rondo', 'rosig', 'rosta', 'rotad', 'rotel', 'rotig', 'rotor', 'rouge',
'route', 'rubba', 'rubel', 'rubin', 'rucka', 'rudis', 'ruffa', 'rufsa', 'rugby', 'rugga',
'rugge', 'rulad', 'rulla', 'rulle', 'rulsa', 'rulta', 'rumba', 'rumla', 'rumor', 'rumpa',
'rumän', 'runda', 'runga', 'runka', 'rupie', 'rusch', 'rusha', 'rusig', 'ruska', 'rusta',
'ruter', 'rutig', 'rutin', 'rycka', 'rygga', 'rykta', 'rykte', 'rymma', 'rynka', 'rysch',
'ryska', 'räcka', 'räcke', 'rädas', 'rädda', 'räfsa', 'räfst', 'räkel', 'räkna', 'rälig',
'rämna', 'ränna', 'ränne', 'ränta', 'rätta', 'rävig', 'rådda', 'rådig', 'råegg', 'rågax',
'råget', 'råhet', 'råkas', 'råkid', 'råris', 'råsop', 'råtta', 'röjel', 'rökig', 'rörig',
'rösta', 'röste', 'rösti', 'sabba', 'sabel', 'sabin', 'sabla', 'sacka', 'sadel', 'sadla',
'safir', 'safsa', 'safta', 'sagen', 'sagga', 'sagla', 'saker', 'sakna', 'sakta', 'saldo',
'salep', 'salig', 'salin', 'saliv', 'salsa', 'salta', 'salut', 'salva', 'samba', 'sambo',
'samgå', 'samka', 'samla', 'samma', 'samsa', 'samum', 'sanda', 'sankt', 'sanna', 'sansa',
'sarga', 'satan', 'satin', 'satir', 'satsa', 'satyr', 'sauna', 'saute', 'savas', 'savig',
'scarf', 'schah', 'schal', 'schas', 'schäs', 'scoop', 'scout', 'seans', 'sebar', 'sebra',
'sedan', 'sedel', 'sedes', 'sedig', 'sedum', 'seeda', 'sefir', 'sefyr', 'segel', 'seger',
'segla', 'segna', 'segra', 'sejda', 'sejsa', 'sejte', 'sekel', 'sekin', 'selen', 'selot',
'semem', 'semit', 'semla', 'senap', 'senar', 'senat', 'senig', 'senil', 'senna', 'sepia',
'seraf', 'seren', 'serge', 'serie', 'serum', 'serva', 'serve', 'servo', 'serös', 'sesam',
'sessa', 'sexig', 'sexti', 'sfinx', 'shagg', 'shaka', 'shake', 'shejk', 'shiit', 'showa',
'shunt', 'siare', 'sibet', 'sicka', 'siden', 'sifon', 'sigel', 'sigma', 'signa', 'sikel',
'sikta', 'sikte', 'silen', 'silke', 'silur', 'simma', 'simpa', 'simsa', 'sinka', 'sinko',
'sinne', 'sinom', 'sinus', 'sioux', 'sippa', 'sirap', 'sirat', 'siren', 'sirpa', 'sirra',
'sisal', 'siska', 'sista', 'sitar', 'sitta', 'sjagg', 'sjana', 'sjapp', 'sjasa', 'sjava',
'sjubb', 'sjuda', 'sjuka', 'sjyst', 'själv', 'sjåpa', 'sjöko', 'sjöss', 'skabb', 'skack',
'skada', 'skaft', 'skaka', 'skala', 'skald', 'skalk', 'skall', 'skalm', 'skalp', 'skalv',
'skank', 'skans', 'skapa', 'skara', 'skare', 'skarn', 'skarp', 'skarv', 'skata', 'skate',
'skatt', 'skava', 'skave', 'skeda', 'skede', 'skeet', 'skeka', 'skela', 'skena', 'skepa',
'skepp', 'skeva', 'skick', 'skida', 'skift', 'skikt', 'skild', 'skina', 'skinn', 'skipa',
'skira', 'skiss', 'skita', 'skiva', 'skjul', 'skjut', 'skock', 'skoft', 'skoga', 'skoja',
'skola', 'skolk', 'skolt', 'skona', 'skopa', 'skorr', 'skorv', 'skota', 'skott', 'skotå',
'skova', 'skraj', 'skrak', 'skral', 'skrap', 'skred', 'skrev', 'skria', 'skrik', 'skrin',
'skrot', 'skrov', 'skrud', 'skruv', 'skryp', 'skryt', 'skrän', 'skräp', 'skrål', 'skråp',
'skubb', 'skuff', 'skula', 'skuld', 'skull', 'skult', 'skunk', 'skura', 'skurk', 'skuta',
'skutt', 'skval', 'skvär', 'skydd', 'skygd', 'skygg', 'skyig', 'skyla', 'skyld', 'skyle',
'skylt', 'skymf', 'skymt', 'skytt', 'skäck', 'skägg', 'skäkt', 'skäll', 'skälm', 'skämd',
'skämt', 'skänk', 'skära', 'skärm', 'skärp', 'skärv', 'skäva', 'skåda', 'skåla', 'skåle',
'skånk', 'skåpa', 'skåra', 'skåre', 'skåta', 'sköka', 'sköld', 'skölp', 'sköra', 'skörd',
'sköre', 'skörl', 'skört', 'sköta', 'sköte', 'slabb', 'slack', 'sladd', 'slafa', 'slafs',
'slaga', 'slagg', 'slaka', 'slakt', 'slams', 'slana', 'slang', 'slank', 'slant', 'slapp',
'slarv', 'slasa', 'slase', 'slask', 'slatt', 'slava', 'slejd', 'slejf', 'slejs', 'sleke',
'sleta', 'sleva', 'slice', 'slick', 'slida', 'sling', 'slint', 'slipa', 'slips', 'slira',
'slisk', 'slita', 'slits', 'sloka', 'slopa', 'slott', 'slubb', 'sluka', 'slump', 'slunk',
'slurk', 'slusk', 'sluss', 'sluta', 'slyna', 'släde', 'släkt', 'släng', 'slänt', 'släpa',
'släpp', 'släta', 'slätt', 'slåss', 'slått', 'slöax', 'slöja', 'slöjd', 'slöra', 'slösa',
'smack', 'smaka', 'smalt', 'smart', 'smash', 'smask', 'smatt', 'smeka', 'smeta', 'smida',
'smide', 'smila', 'smink', 'smisk', 'smita', 'smock', 'smolk', 'smolt', 'smord', 'smula',
'smuts', 'smutt', 'smyga', 'smäck', 'smäda', 'smäll', 'smärt', 'småby', 'småle', 'smått',
'smöra', 'smörj', 'snabb', 'snack', 'snafs', 'snapp', 'snaps', 'snara', 'snark', 'snart',
'snask', 'snava', 'snesa', 'snibb', 'snida', 'sniff', 'snika', 'snilj', 'snipa', 'snipp',
'snits', 'snitt', 'snobb', 'snodd', 'snoka', 'snopp', 'snora', 'snork', 'snudd', 'snurr',
'snusa', 'snusk', 'snutt', 'snuva', 'snyft', 'snygg', 'snyta', 'snyte', 'snäll', 'snäpp',
'snärj', 'snärp', 'snärt', 'snäsa', 'snäva', 'snåla', 'snöby', 'snöig', 'snöpa', 'snöra',
'snöre', 'snörp', 'soare', 'sobel', 'sober', 'socka', 'soffa', 'solar', 'solid', 'solig',
'solka', 'solur', 'solva', 'solär', 'somna', 'sonar', 'sonat', 'sonor', 'soppa', 'sorla',
'sorti', 'sosse', 'sotig', 'sotis', 'sound', 'sovel', 'sovra', 'spada', 'spade', 'spaka',
'spalt', 'spana', 'spann', 'spant', 'spara', 'spark', 'sparv', 'spasm', 'spatt', 'speed',
'speja', 'spela', 'spene', 'spens', 'speta', 'spets', 'spett', 'spexa', 'spigg', 'spika',
'spila', 'spill', 'spink', 'spinn', 'spion', 'spira', 'spisa', 'spjut', 'split', 'spola',
'spole', 'spont', 'sport', 'spott', 'sprak', 'spray', 'sprej', 'sprit', 'sprut', 'språk',
'spröd', 'spröt', 'spurt', 'späck', 'späda', 'späka', 'spänd', 'spänn', 'späns', 'spärr',
'spåna', 'spång', 'spånt', 'spåra', 'spöka', 'spöke', 'squaw', 'stack', 'stadd', 'staga',
'stagg', 'staka', 'stake', 'stall', 'stalp', 'stamp', 'stank', 'stans', 'stare', 'stark',
'starr', 'start', 'stass', 'staty', 'stava', 'stega', 'stege', 'steka', 'stele', 'stena',
'stepp', 'stick', 'stift', 'stiga', 'stila', 'still', 'sting', 'stinn', 'stins', 'stirr',
'stock', 'stoff', 'stoft', 'stoja', 'stola', 'stoll', 'stolt', 'stomi', 'stomp', 'stopp',
'store', 'stork', 'storm', 'story', 'strak', 'stram', 'strax', 'stret', 'strid', 'stril',
'strip', 'strit', 'strof', 'strul', 'strut', 'stryk', 'sträv', 'stråk', 'stråt', 'strög',
'ström', 'stubb', 'stuck', 'studs', 'stuff', 'stuga', 'stuka', 'stump', 'stund', 'stuns',
'stupa', 'stura', 'stuss', 'stuts', 'stuva', 'stybb', 'styck', 'stygg', 'stygn', 'styla',
'styng', 'styra', 'styre', 'styva', 'styvt', 'städa', 'ställ', 'stäng', 'stänk', 'stäpp',
'stäva', 'ståla', 'stånd', 'stång', 'stånk', 'ståta', 'ståte', 'stöda', 'stöka', 'stöld',
'stöna', 'stöpa', 'störa', 'stört', 'stöta', 'stött', 'stöva', 'subba', 'succe', 'sucka',
'sudda', 'sudla', 'sugen', 'sugga', 'sukta', 'sulfa', 'sulky', 'sumak', 'sumer', 'summa',
'sumpa', 'supig', 'suput', 'surfa', 'surna', 'surra', 'susen', 'sussa', 'sutan', 'sutta',
'sutur', 'svabb', 'svada', 'svaja', 'svala', 'svale', 'svalg', 'svall', 'svamp', 'svang',
'svank', 'svans', 'svara', 'svart', 'svarv', 'svass', 'svear', 'sveda', 'svejs', 'svepa',
'svepe', 'svets', 'svett', 'svida', 'svika', 'svikt', 'svina', 'sving', 'svinn', 'svira',
'svirr', 'svälj', 'sväll', 'svält', 'sväng', 'svära', 'svärd', 'svärm', 'sväva', 'svång',
'sweet', 'swing', 'sydpå', 'syfta', 'syfte', 'sylta', 'synas', 'synda', 'synka', 'synod',
'synsk', 'synål', 'syrak', 'syren', 'syrra', 'syrsa', 'syska', 'säcka', 'sägen', 'säker',
'säkra', 'sälja', 'sälla', 'sälle', 'sälta', 'sämja', 'sämre', 'sämsk', 'sämst', 'sända',
'sänka', 'sänke', 'särbo', 'särla', 'säter', 'sätta', 'såbar', 'sådan', 'sådig', 'sådor',
'sådär', 'såhär', 'sålla', 'sånär', 'såpig', 'sårad', 'sårig', 'såsig', 'såsom', 'såväl',
'söder', 'södra', 'sölig', 'sölja', 'sömma', 'sörja', 'sörpa', 'sötma', 'tabba', 'tabbe',
'tablå', 'tacka', 'tadel', 'tadla', 'tafsa', 'tagas', 'tagel', 'tagen', 'tagga', 'tagla',
'taiga', 'tajga', 'tajma', 'tajts', 'takta', 'takås', 'talan', 'talar', 'talas', 'talga',
'talja', 'talka', 'talko', 'talmi', 'tambi', 'tamil', 'tanda', 'tango', 'tanig', 'tanka',
'tanke', 'tanks', 'tapet', 'tapir', 'tappa', 'tappt', 'tapto', 'tarok', 'tarva', 'taska',
'tassa', 'tatar', 'tavla', 'teban', 'teddy', 'tefat', 'tegel', 'tehus', 'teint', 'teism',
'teist', 'tejpa', 'tejst', 'tekök', 'telex', 'tempo', 'tenor', 'tenta', 'teori', 'tepig',
'teros', 'tesil', 'testa', 'tetas', 'tetig', 'tetra', 'texta', 'tiara', 'ticka', 'tidig',
'tidur', 'tiger', 'tigga', 'tight', 'tilde', 'tilja', 'tills', 'tilta', 'timer', 'timid',
'timma', 'timme', 'timra', 'tinga', 'tinne', 'tippa', 'tipsa', 'tirad', 'titan', 'titel',
'titta', 'tjabb', 'tjack', 'tjafs', 'tjalk', 'tjall', 'tjata', 'tjeck', 'tjing', 'tjock',
'tjuga', 'tjuge', 'tjugo', 'tjugu', 'tjura', 'tjusa', 'tjuta', 'tjuva', 'tjäla', 'tjäle',
'tjäll', 'tjäna', 'tjära', 'tjärn', 'tobak', 'tobis', 'tocka', 'toddy', 'tokas', 'toker',
'tokig', 'tolft', 'tolka', 'tolta', 'tolva', 'tomat', 'tomme', 'tomta', 'tomte', 'tonal',
'tonem', 'tonic', 'tonus', 'tonår', 'topas', 'toppa', 'toque', 'torax', 'torde', 'torga',
'torka', 'torna', 'torsk', 'torso', 'torta', 'torva', 'tosig', 'tossa', 'total', 'totem',
'toupe', 'tovig', 'toxin', 'traja', 'trake', 'trakt', 'trala', 'trall', 'tramp', 'trams',
'trana', 'trans', 'trapp', 'trasa', 'trask', 'trast', 'tratt', 'trava', 'trave', 'trema',
'trend', 'treva', 'triad', 'trial', 'trias', 'trick', 'trift', 'trikå', 'trind', 'triod',
'triol', 'tripp', 'trips', 'triss', 'trist', 'triör', 'trofe', 'troke', 'troll', 'tromb',
'trona', 'tropp', 'trosa', 'tross', 'trots', 'truck', 'truga', 'trula', 'trull', 'truls',
'trumf', 'trunk', 'trupp', 'trust', 'truta', 'tryck', 'tryga', 'trygg', 'trymå', 'tryna',
'tryne', 'tryta', 'träck', 'träda', 'träde', 'träff', 'träig', 'träla', 'träna', 'träng',
'träns', 'träsk', 'träta', 'tråda', 'tråka', 'tråla', 'tråna', 'trång', 'tröja', 'trösk',
'tröst', 'trött', 'tubba', 'tuffa', 'tufsa', 'tugga', 'tukan', 'tukta', 'tulla', 'tulta',
'tumla', 'tumma', 'tumme', 'tumör', 'tunga', 'tunik', 'tunna', 'tuppa', 'turas', 'turbo',
'turig', 'turne', 'tusan', 'tusch', 'tusen', 'tussa', 'tutsi', 'tutta', 'tutti', 'tuvad',
'tuvig', 'tvaga', 'tveka', 'tvina', 'tving', 'tvist', 'tvära', 'tvärs', 'tvärt', 'tvätt',
'tvåla', 'tvång', 'tweed', 'twist', 'tycka', 'tycke', 'tyfon', 'tyfus', 'tygel', 'tygla',
'tyken', 'tymus', 'tynga', 'tyngd', 'tyska', 'tysta', 'täcka', 'täcke', 'täckt', 'täfft',
'tälja', 'tälta', 'tämja', 'tända', 'tänja', 'tänka', 'täppa', 'täppt', 'tärna', 'tätna',
'tävla', 'tåben', 'tågig', 'tåled', 'tålig', 'tålös', 'tånge', 'tåpig', 'tårad', 'tåras',
'tårem', 'tårig', 'tårta', 'tåtel', 'töffa', 'tömma', 'tönta', 'töras', 'törel', 'törna',
'törne', 'törst', 'tösnö', 'tövan', 'uddad', 'uddig', 'uggla', 'ullig', 'ullus', 'ultra',
'uläge', 'umbra', 'umebo', 'umgås', 'undan', 'under', 'undfå', 'undgå', 'undin', 'undra',
'undre', 'ungmö', 'union', 'unken', 'unkna', 'uppge', 'uppgå', 'uppnå', 'uppom', 'uppta',
'uppåt', 'urban', 'urdum', 'ureas', 'uremi', 'urhem', 'urkok', 'urmyt', 'uroxe', 'urtag',
'urtid', 'urtyp', 'urval', 'usans', 'uslig', 'utbud', 'utdöd', 'utför', 'uthus', 'utkik',
'utkok', 'utled', 'utlån', 'utmed', 'utmål', 'utopi', 'utrop', 'utrum', 'utsot', 'utspy',
'utstå', 'utsug', 'utsyn', 'uttag', 'uttal', 'utter', 'uttra', 'uttåg', 'utväg', 'utäga',
'utäng', 'utöka', 'utösa', 'utöva', 'uzbek', 'vadan', 'vagel', 'vagga', 'vajer', 'vaken',
'vakna', 'vakta', 'valen', 'valka', 'valla', 'valna', 'valpa', 'valsa', 'valår', 'valör',
'vampa', 'vanka', 'vanna', 'vante', 'vapen', 'vapör', 'varan', 'varas', 'varav', 'varda',
'varde', 'varia', 'varig', 'varje', 'varna', 'varom', 'varpa', 'varpå', 'varse', 'varsk',
'varur', 'varva', 'varåt', 'vaska', 'vecka', 'vedel', 'vejde', 'vekna', 'velar', 'velig',
'vemod', 'venia', 'venös', 'verba', 'verka', 'verop', 'verst', 'vesen', 'vesir', 'vetta',
'vette', 'vevla', 'vichy', 'vicka', 'video', 'vidga', 'vidgå', 'vidja', 'vidta', 'vifta',
'vigga', 'vigge', 'vigör', 'vikta', 'vilde', 'vilja', 'vilje', 'villa', 'vilse', 'vimba',
'vimla', 'vimma', 'vimsa', 'vinda', 'vinge', 'vinka', 'vinna', 'vinst', 'vinyl', 'viola',
'vippa', 'virak', 'viril', 'virka', 'virke', 'viros', 'virra', 'virus', 'visir', 'visit',
'viska', 'vispa', 'visso', 'visst', 'viste', 'visum', 'vital', 'vitna', 'vitra', 'vitsa',
'vitta', 'vivel', 'vivre', 'vivör', 'voall', 'vodka', 'voile', 'vojta', 'vokal', 'volma',
'volta', 'volut', 'volym', 'votum', 'vovve', 'vraka', 'vrede', 'vrida', 'vrist', 'vräka',
'vråla', 'vrång', 'vulka', 'vulst', 'vulva', 'vurma', 'vurpa', 'vurst', 'vuxen', 'vyssa',
'väbel', 'väcka', 'väckt', 'väder', 'vädja', 'vädra', 'vädur', 'vägra', 'välan', 'välde',
'välja', 'välla', 'välsk', 'välta', 'välva', 'välvd', 'vända', 'vänja', 'vänta', 'väpna',
'värde', 'värja', 'värka', 'värld', 'värma', 'värme', 'värna', 'värpa', 'värre', 'värst',
'värva', 'väsen', 'väska', 'vässa', 'vätte', 'växel', 'växla', 'vågad', 'vågig', 'vålla',
'vålma', 'vånda', 'vånna', 'våpig', 'våran', 'våras', 'vårda', 'våris', 'vårså', 'vårta',
'vörda', 'whist', 'xenon', 'xylos', 'yacht', 'yllen', 'ymnig', 'yngel', 'yngla', 'yngre',
'yngst', 'ynkan', 'yppig', 'yrhet', 'yrkan', 'yrsel', 'yrsnö', 'yster', 'ytlig', 'ytter',
'yttra', 'yttre', 'ytved', 'yxegg', 'zappa', 'zebra', 'zelot', 'zenit', 'zloty', 'zonal',
'zooma', 'zygot', 'äckel', 'äckla', 'ägare', 'äggul', 'ägnad', 'äldre', 'äldst', 'älgko',
'älska', 'ämbar', 'ändas', 'ändra', 'ängel', 'änger', 'äntra', 'äpple', 'ärbar', 'ärgig',
'äring', 'ärlbo', 'ärlig', 'ärrad', 'ärras', 'ärrig', 'ärtig', 'ässja', 'ätbar', 'ätlig',
'ävjig', 'ävlan', 'ävlas', 'äxing', 'åbäka', 'åbäke', 'ådrig', 'ådöma', 'åhnej', 'åhåga',
'åhöra', 'åkare', 'åkbar', 'åkdon', 'åkeri', 'åktur', 'ålder', 'ånger', 'ångra', 'årder',
'årfot', 'åring', 'årlig', 'årlom', 'årpar', 'årtag', 'årtal', 'årvis', 'åsido', 'åsikt',
'åskby', 'åskig', 'åstad', 'åsyna', 'åtaga', 'åtala', 'åttio', 'åvila', 'öbåge', 'ödeby',
'ödsla', 'ökänd', 'ölfat', 'ölost', 'ölpub', 'ömhet', 'ömkan', 'ömsom', 'önska', 'öppen',
'öppna', 'örfil', 'örike', 'öring', 'örlig', 'örnbo', 'örtte', 'örtug', 'öskar', 'östan',
'öster', 'östpå', 'östra', 'övers', 'övlig', 'övrig'],
Ta=['abaya', 'abbén', 'abbes', 'abels', 'abers', 'abjad', 'abren', 'abret', 'abuja', 'accra',
'acehs', 'ackas', 'ackes', 'ackis', 'acnen', 'acnes', 'acren', 'acres', 'acryl', 'adaks',
'adams', 'addar', 'addas', 'addat', 'addes', 'addis', 'adela', 'adeln', 'adels', 'adlad',
'adlar', 'adlas', 'adlat', 'admin', 'adobe', 'adolf', 'affes', 'affin', 'afgaf', 'afgif',
'afgår', 'afgås', 'aflad', 'aflar', 'aflas', 'aflat', 'afled', 'aflid', 'afoni', 'afser',
'afses', 'afsky', 'afsåg', 'after', 'afvel', 'agade', 'agans', 'agape', 'agars', 'agata',
'agats', 'agdas', 'agget', 'agios', 'agiot', 'agnad', 'agnar', 'agnas', 'agnat', 'agnen',
'agnes', 'agnet', 'agors', 'aguti', 'ahlin', 'ahmed', 'ainas', 'airen', 'airer', 'akant',
'aknen', 'aknes', 'aktad', 'aktar', 'aktas', 'aktat', 'akten', 'aktin', 'akuta', 'akuts',
'alans', 'alant', 'alars', 'albas', 'albin', 'albit', 'albor', 'albyl', 'albys', 'alder',
'alens', 'alers', 'alets', 'alfan', 'alfas', 'alfat', 'alfen', 'alfer', 'alfta', 'algen',
'alger', 'algot', 'alice', 'alkan', 'alkas', 'alken', 'alkor', 'alkyn', 'allah', 'allan',
'allas', 'allel', 'allen', 'allén', 'allés', 'allin', 'allod', 'allom', 'allor', 'almar',
'almas', 'almen', 'alnar', 'alnen', 'alnös', 'alpen', 'alper', 'altar', 'alten', 'alter',
'aluns', 'alvas', 'alven', 'alver', 'alves', 'alvin', 'amids', 'amins', 'amish', 'ammad',
'amman', 'ammar', 'ammas', 'ammat', 'ammis', 'ammor', 'amors', 'ampla', 'ampra', 'ampre',
'anade', 'anala', 'anale', 'analt', 'anans', 'anats', 'andan', 'andar', 'anden', 'andes',
'andor', 'aneby', 'anför', 'angaf', 'angav', 'anger', 'anges', 'angif', 'angiv', 'angår',
'angör', 'anime', 'anita', 'anjas', 'ankan', 'ankas', 'ankis', 'ankom', 'ankor', 'anmäl',
'annas', 'annat', 'annes', 'annie', 'anods', 'anors', 'anoxi', 'anred', 'ansad', 'ansar',
'ansas', 'ansat', 'anser', 'anses', 'ansåg', 'ansök', 'antag', 'antar', 'antas', 'antes',
'antog', 'anton', 'antyd', 'anund', 'anuri', 'apade', 'apans', 'apats', 'apeln', 'apels',
'aplar', 'apors', 'appar', 'appen', 'aprak', 'apsis', 'arabs', 'arans', 'arbrå', 'arbus',
'arean', 'areas', 'arens', 'areol', 'areor', 'arets', 'argas', 'arges', 'argus', 'arian',
'arias', 'arild', 'arior', 'arkar', 'arken', 'arket', 'arlöv', 'armar', 'armen', 'armén',
'armés', 'arnes', 'aroms', 'arons', 'arors', 'arrad', 'arrar', 'arras', 'arrat', 'arren',
'arret', 'arsar', 'arsen', 'artad', 'artar', 'artas', 'artat', 'arten', 'arter', 'artur',
'aruba', 'arven', 'arvet', 'arvid', 'asade', 'asars', 'asats', 'asbra', 'asens', 'asets',
'asful', 'asgod', 'asien', 'asint', 'askad', 'askan', 'askar', 'askas', 'askat', 'asken',
'askim', 'askor', 'aspar', 'aspen', 'aspås', 'assai', 'assar', 'assen', 'asset', 'astas',
'astra', 'asurn', 'asurs', 'asyls', 'atens', 'atjeh', 'atoms', 'aulan', 'aulas', 'auloi',
'aulor', 'aulos', 'aural', 'auran', 'auras', 'auror', 'avböj', 'avecs', 'aveln', 'avels',
'avena', 'avens', 'avets', 'avför', 'avgav', 'avger', 'avges', 'avgiv', 'avgår', 'avgås',
'avgör', 'avgöt', 'avhys', 'aviat', 'avier', 'avige', 'avigt', 'avins', 'avkom', 'avkyl',
'avlad', 'avlar', 'avlas', 'avled', 'avlid', 'avlys', 'avlär', 'avläs', 'avlös', 'avmät',
'avoga', 'avoge', 'avogt', 'avres', 'avråd', 'avser', 'avses', 'avsåg', 'avsäg', 'avsök',
'avtag', 'avtar', 'avtas', 'avtog', 'avvek', 'avvik', 'axade', 'axats', 'axeln', 'axels',
'axens', 'axets', 'axlad', 'axlar', 'axlas', 'axlat', 'axons', 'aylas', 'azers', 'azurn',
'azurs', 'babbe', 'babyn', 'babys', 'backs', 'badad', 'badar', 'badas', 'badat', 'baden',
'badet', 'bagar', 'bagel', 'bagen', 'bahrs', 'baila', 'bajet', 'bajta', 'bakad', 'bakar',
'bakas', 'bakat', 'baken', 'baket', 'bakus', 'balar', 'balbo', 'balen', 'baler', 'balks',
'balle', 'balls', 'ballt', 'balts', 'banad', 'banar', 'banas', 'banat', 'banco', 'bands',
'banen', 'bangs', 'banks', 'banne', 'banns', 'banor', 'baras', 'bards', 'baren', 'barer',
'baris', 'barks', 'barms', 'barna', 'barns', 'barrs', 'basad', 'basas', 'basat', 'basel',
'basen', 'baser', 'baske', 'basks', 'bassa', 'basso', 'baxad', 'baxar', 'baxas', 'baxat',
'beans', 'beata', 'bebin', 'bebor', 'bebos', 'becca', 'becks', 'bedas', 'bedda', 'beder',
'bedes', 'bedit', 'bedts', 'bedöm', 'befar', 'befor', 'begav', 'beger', 'begge', 'begiv',
'begum', 'begår', 'begås', 'behof', 'behån', 'behås', 'behöf', 'behöv', 'beiga', 'beigt',
'beira', 'bejen', 'bejer', 'bekom', 'beler', 'beles', 'bella', 'belle', 'bells', 'belog',
'belys', 'belåg', 'bemöt', 'benan', 'benar', 'benas', 'benat', 'benen', 'benet', 'benga',
'bengs', 'bengt', 'benim', 'benin', 'benke', 'benny', 'benor', 'benso', 'beppe', 'bered',
'berga', 'bergh', 'bergs', 'berit', 'bernt', 'beror', 'berra', 'berta', 'berts', 'berör',
'beser', 'beses', 'beske', 'besko', 'besks', 'beskt', 'besov', 'bests', 'besyr', 'besys',
'besåg', 'besår', 'besås', 'betad', 'betal', 'betan', 'betar', 'betas', 'betat', 'beten',
'beter', 'betes', 'betet', 'betog', 'betor', 'betse', 'betta', 'betts', 'betty', 'betvå',
'betyd', 'bevar', 'bidar', 'bidas', 'bidat', 'bidde', 'biens', 'biets', 'biffa', 'biffs',
'bigge', 'bihål', 'bikts', 'bilad', 'bilan', 'bilar', 'bilas', 'bilat', 'bilds', 'bilen',
'billy', 'bilor', 'binas', 'binds', 'binna', 'binne', 'bions', 'bipod', 'biran', 'biras',
'birks', 'biror', 'birre', 'bitar', 'biten', 'biter', 'bitet', 'bitit', 'bitna', 'bitne',
'bjuds', 'bjuvs', 'bjöds', 'blads', 'blajs', 'blejd', 'bleks', 'blekt', 'bleve', 'blevo',
'blide', 'blidö', 'bling', 'blint', 'blitt', 'bloar', 'bloas', 'bloat', 'blods', 'bloga',
'blogg', 'bloms', 'blont', 'blots', 'blyet', 'blyga', 'blyge', 'blygs', 'blygt', 'blådt',
'blåna', 'blåsa', 'blåst', 'blått', 'blöde', 'blöds', 'blöte', 'blöts', 'blött', 'boans',
'bobbs', 'bocks', 'bodar', 'bodas', 'bodde', 'boden', 'bodil', 'bodon', 'bodos', 'boels',
'boens', 'boern', 'boers', 'boets', 'boffa', 'bogar', 'bogen', 'bogey', 'bohus', 'bojan',
'bojas', 'bojen', 'bojor', 'bokad', 'bokar', 'bokas', 'bokat', 'bolby', 'bolen', 'bolet',
'bolls', 'bolus', 'boman', 'bombs', 'bomän', 'bonar', 'bonas', 'bonat', 'bonda', 'bongs',
'bonna', 'bonne', 'booma', 'boors', 'boota', 'borat', 'borde', 'bords', 'boret', 'borgs',
'boris', 'borna', 'borne', 'borrs', 'borås', 'boson', 'bosse', 'botad', 'botar', 'botas',
'botat', 'boten', 'botet', 'botts', 'bovar', 'boven', 'bovin', 'boxad', 'boxar', 'boxat',
'boxen', 'braga', 'brage', 'bragt', 'brajd', 'brajs', 'braks', 'brann', 'brast', 'brats',
'braås', 'brede', 'breds', 'brefs', 'brett', 'brevs', 'brien', 'bries', 'brims', 'brinn',
'brion', 'brios', 'briss', 'brita', 'broar', 'broas', 'broat', 'broby', 'brors', 'brosh',
'bruds', 'bruks', 'bruna', 'brune', 'bruno', 'bryda', 'bryet', 'brygg', 'brylå', 'bryns',
'brynt', 'bryte', 'bryts', 'brytt', 'bråck', 'bråda', 'bråde', 'bråen', 'bråka', 'bråks',
'bråte', 'brått', 'bräck', 'bräks', 'bräkt', 'bräms', 'bränd', 'bränn', 'bränt', 'bröds',
'bröet', 'bröna', 'bröns', 'bröts', 'buade', 'buats', 'bubba', 'budar', 'budas', 'budat',
'buden', 'budet', 'buffé', 'bugar', 'bugas', 'bugat', 'buggs', 'bukar', 'buken', 'bukts',
'bulan', 'bulas', 'bulks', 'bulor', 'bults', 'bunts', 'buost', 'burad', 'burar', 'buras',
'burat', 'buren', 'buret', 'bureå', 'burit', 'burks', 'burma', 'burna', 'burne', 'busar',
'busas', 'busat', 'busen', 'buset', 'butta', 'byars', 'bybon', 'bybor', 'bybos', 'bygds',
'byggd', 'byggs', 'byggt', 'byiga', 'byigt', 'bykar', 'bykas', 'byken', 'byker', 'bykes',
'byket', 'bykte', 'bykts', 'byrån', 'byrås', 'byske', 'bysts', 'bytas', 'byten', 'byter',
'bytes', 'bytet', 'bytte', 'bytts', 'byxad', 'byxan', 'byxas', 'byxor', 'bådan', 'bådar',
'bådas', 'bådat', 'båden', 'bådes', 'bådor', 'bågar', 'bågen', 'båges', 'bågig', 'bågna',
'bålar', 'bålda', 'bålde', 'bålen', 'bålet', 'bånge', 'bårar', 'bårds', 'båren', 'båsar',
'båsen', 'båset', 'båtar', 'båtas', 'båtat', 'båten', 'bäcks', 'bädds', 'bäfva', 'bälar',
'bälas', 'bälat', 'bälgs', 'bände', 'bänds', 'bänks', 'bänts', 'bäras', 'bären', 'bäres',
'bäret', 'bästa', 'bäste', 'bävar', 'bävas', 'bävat', 'bödig', 'bögar', 'bögas', 'bögat',
'bögen', 'bögig', 'böjar', 'böjas', 'böjda', 'böjde', 'böjen', 'böjer', 'böjes', 'böjts',
'bökar', 'bökas', 'bökat', 'bölar', 'bölas', 'bölat', 'bölds', 'bönan', 'bönar', 'bönas',
'bönat', 'bönen', 'böner', 'bönor', 'börds', 'börje', 'börna', 'böset', 'bösig', 'bötad',
'bötar', 'bötas', 'bötat', 'bötes', 'bötte', 'bötts', 'cacha', 'cache', 'cafés', 'cafét',
'calla', 'calle', 'calls', 'camma', 'capen', 'caper', 'capes', 'capon', 'capos', 'capot',
'carin', 'carls', 'carpa', 'carry', 'carte', 'casha', 'cavan', 'cavas', 'celia', 'celli',
'cells', 'cents', 'ceres', 'cesar', 'chant', 'chatt', 'chefs', 'chica', 'chict', 'chief',
'chile', 'chili', 'chill', 'chipp', 'ciggs', 'cissa', 'cissi', 'cityn', 'claes', 'clara',
'codex', 'colin', 'conga', 'conny', 'coola', 'coole', 'coolt', 'corps', 'corso', 'costa',
'covid', 'coxar', 'coxen', 'crona', 'cubas', 'cupen', 'cuper', 'cuppa', 'curie', 'curts',
'cyana', 'cyane', 'cyant', 'dabbs', 'dabst', 'daesh', 'dagar', 'dagat', 'dagen', 'daggs',
'dagny', 'dagös', 'dahls', 'dairi', 'dajms', 'dakar', 'dakta', 'dalad', 'dalar', 'dalas',
'dalat', 'dalby', 'dalen', 'dalet', 'dalum', 'damen', 'damer', 'damms', 'damps', 'danad',
'danar', 'danas', 'danat', 'dance', 'danen', 'danka', 'danks', 'danne', 'dante', 'darna',
'darts', 'dasar', 'dasat', 'dasen', 'dases', 'datan', 'datas', 'daten', 'dates', 'david',
'davna', 'decil', 'degar', 'degas', 'degat', 'degen', 'dehär', 'dejes', 'dejta', 'dejts',
'delar', 'delas', 'delat', 'delen', 'demor', 'demot', 'denna', 'depån', 'depås', 'deraf',
'derom', 'derpå', 'dessa', 'desse', 'detta', 'diade', 'diana', 'dians', 'diats', 'dicks',
'diens', 'diets', 'diffa', 'digra', 'digre', 'dikar', 'dikas', 'dikat', 'diken', 'dikes',
'diket', 'dikts', 'dildo', 'dills', 'dimps', 'dimra', 'dines', 'dinka', 'diods', 'dioik',
'dione', 'diors', 'dipol', 'dippa', 'dipps', 'dirks', 'disas', 'disco', 'disen', 'diser',
'diset', 'disks', 'dissa', 'ditin', 'diton', 'ditos', 'ditot', 'ditut', 'divas', 'divor',
'diyns', 'djerå', 'djupa', 'djupe', 'djups', 'djupt', 'djura', 'djurs', 'dnepr', 'doade',
'doans', 'doats', 'dobra', 'dofts', 'dogms', 'dojan', 'dojas', 'dojon', 'dojor', 'dojos',
'doken', 'doket', 'dolce', 'dolda', 'dolde', 'dolka', 'dolks', 'dolly', 'dolmn', 'dolts',
'dolös', 'domar', 'domen', 'domer', 'domma', 'donar', 'donas', 'donat', 'donau', 'donen',
'donet', 'donsö', 'donut', 'dopad', 'dopar', 'dopas', 'dopat', 'dopen', 'dopet', 'dopps',
'doris', 'dosan', 'dosas', 'dosen', 'doser', 'dosor', 'doter', 'dotra', 'downs', 'drack',
'drags', 'drams', 'draps', 'dratt', 'drefs', 'drevs', 'drick', 'drite', 'drivs', 'droge',
'drogo', 'drogs', 'druga', 'drule', 'dryge', 'drygt', 'dryps', 'drypt', 'dråps', 'dråsa',
'dråse', 'drägt', 'drämd', 'dräms', 'drämt', 'dränk', 'dräps', 'dräpt', 'dröjt', 'drömd',
'dröms', 'drömt', 'dröps', 'dröst', 'duade', 'duala', 'duals', 'dualt', 'duats', 'dubie',
'dufva', 'dugat', 'dugde', 'duger', 'dugit', 'dukad', 'dukar', 'dukas', 'duken', 'dulce',
'dumbo', 'dumme', 'dumps', 'dunen', 'duner', 'dunet', 'dunks', 'duons', 'duors', 'durks',
'dusts', 'duvan', 'duvas', 'duved', 'duvet', 'duvor', 'dverg', 'dyads', 'dygds', 'dygna',
'dygns', 'dykas', 'dyken', 'dyker', 'dyket', 'dykte', 'dykts', 'dynan', 'dynas', 'dynen',
'dyner', 'dynor', 'dyrks', 'dyrön', 'dysäv', 'dytåg', 'dåden', 'dådet', 'dådra', 'dålig',
'dånad', 'dånar', 'dånas', 'dånat', 'dånen', 'dånet', 'dårad', 'dårar', 'dåras', 'dårat',
'dåren', 'dåres', 'dåsar', 'dåsas', 'dåsat', 'dåset', 'dåsig', 'dåtid', 'däcks', 'dägga',
'dälds', 'dängd', 'dängs', 'dängt', 'däraf', 'därin', 'därnt', 'dästa', 'däste', 'dävet',
'dävne', 'dödad', 'dödar', 'dödas', 'dödat', 'dödde', 'döden', 'dödes', 'döljs', 'dömas',
'dömda', 'dömde', 'dömer', 'dömes', 'dömts', 'dönar', 'dönas', 'dönat', 'dönen', 'dönet',
'döpas', 'döper', 'döpes', 'döpta', 'döpte', 'döpts', 'dörrn', 'dörrs', 'dösen', 'dötts',
'ebbar', 'ebbas', 'ebbat', 'ebben', 'ebbes', 'ebola', 'edane', 'edans', 'eddan', 'eddas',
'eddie', 'eddor', 'edens', 'eders', 'edert', 'edets', 'edith', 'edits', 'edlas', 'edman',
'edors', 'edvin', 'efebs', 'efors', 'eftis', 'eftre', 'egade', 'egala', 'egalt', 'egans',
'egats', 'egdes', 'eggad', 'eggar', 'eggas', 'eggat', 'eggen', 'egids', 'egils', 'egnar',
'egnas', 'egnat', 'egona', 'egons', 'egors', 'egots', 'einar', 'eivor', 'ekade', 'ekans',
'ekare', 'ekarn', 'ekars', 'ekats', 'ekeby', 'ekens', 'ekern', 'ekers', 'ekerö', 'ekets',
'eklöf', 'ekman', 'ekona', 'ekons', 'ekors', 'ekots', 'ekrad', 'ekrar', 'ekras', 'ekrat',
'eksjö', 'ekträ', 'elack', 'elaka', 'elake', 'elakt', 'elbas', 'eldad', 'eldar', 'eldas',
'eldat', 'elden', 'elens', 'elevs', 'elfel', 'elfva', 'elgar', 'elgen', 'elias', 'elina',
'elins', 'elisa', 'elise', 'elits', 'eljes', 'ellas', 'ellen', 'ellie', 'ellys', 'ellös',
'elmer', 'elofs', 'elsas', 'elsie', 'elton', 'elvan', 'elvas', 'elvin', 'elvor', 'elväg',
'embla', 'emils', 'emily', 'emirs', 'emlig', 'emman', 'emmas', 'emmor', 'emmys', 'emoji',
'emona', 'emons', 'emots', 'empor', 'emuer', 'emuns', 'enade', 'enars', 'enats', 'enens',
'enets', 'engla', 'eniga', 'enige', 'enigt', 'enkan', 'enkas', 'enkle', 'enkor', 'ennui',
'ensad', 'ensar', 'ensas', 'ensat', 'entré', 'enögt', 'eonen', 'eoner', 'epans', 'epods',
'epoks', 'epors', 'erans', 'erfar', 'erfor', 'erica', 'erics', 'erika', 'eriks', 'ernst',
'ernår', 'ernås', 'erors', 'erzya', 'esbos', 'eskil', 'eslöv', 'esmen', 'esras', 'essen',
'esset', 'essän', 'essäs', 'esten', 'etans', 'etens', 'etern', 'eters', 'ethos', 'etiks',
'etrar', 'etsad', 'etsar', 'etsas', 'etsat', 'ettan', 'ettas', 'ettor', 'etuin', 'etuis',
'etuit', 'etyds', 'etyls', 'etyns', 'eugen', 'euron', 'euros', 'evald', 'evart', 'evert',
'eviga', 'evige', 'evigt', 'exark', 'exens', 'exets', 'exfru', 'exils', 'exing', 'exons',
'exots', 'expon', 'expos', 'exter', 'fabbe', 'facks', 'facto', 'fadda', 'fagen', 'fagra',
'fagre', 'faila', 'fajta', 'fajts', 'falck', 'falks', 'falls', 'falun', 'famas', 'famns',
'fanan', 'fanas', 'fanen', 'fanet', 'fanns', 'fanny', 'fanor', 'fants', 'faran', 'faras',
'fares', 'farit', 'farms', 'faror', 'farsi', 'farts', 'fasar', 'fasas', 'fasat', 'faser',
'fasor', 'faste', 'faten', 'fatet', 'fatig', 'fatin', 'fatwa', 'fauns', 'faute', 'favvo',
'faxad', 'faxar', 'faxas', 'faxat', 'faxen', 'faxet', 'febra', 'fecit', 'feens', 'feers',
'fegar', 'fegas', 'fegat', 'fegen', 'feger', 'fejad', 'fejan', 'fejar', 'fejas', 'fejat',
'fejda', 'fejds', 'fejor', 'felad', 'felan', 'felar', 'felat', 'feldt', 'felen', 'felet',
'felix', 'felor', 'felte', 'femme', 'fenan', 'fenas', 'fenix', 'fenor', 'ferre', 'fesen',
'feser', 'fests', 'fetan', 'fetas', 'fetto', 'fetts', 'fezen', 'fezer', 'ficks', 'fidla',
'fiffi', 'fijis', 'fikad', 'fikan', 'fikar', 'fikas', 'fikat', 'fiket', 'fikor', 'filar',
'filas', 'filat', 'filem', 'filen', 'filén', 'filer', 'filés', 'filet', 'filip', 'fille',
'films', 'filts', 'fimps', 'finen', 'fines', 'finge', 'fingo', 'finis', 'finja', 'finks',
'finns', 'fints', 'fiols', 'firad', 'firar', 'firas', 'firat', 'firns', 'fisar', 'fisas',
'fisen', 'fiser', 'fises', 'fisit', 'fisks', 'fista', 'fixad', 'fixar', 'fixas', 'fixat',
'fixen', 'fjams', 'fjong', 'fjuns', 'fjutt', 'fjång', 'fjäla', 'fjära', 'fjärr', 'fjäts',
'fjöla', 'flane', 'flate', 'flatt', 'flens', 'fliks', 'flins', 'flits', 'floby', 'floda',
'flods', 'flors', 'flums', 'flydd', 'flyen', 'flyet', 'flygs', 'flygt', 'flyna', 'flyns',
'flyts', 'flådd', 'flåsa', 'flått', 'fläks', 'flöds', 'flögo', 'flögs', 'flött', 'fnutt',
'fnyst', 'fnöso', 'foajé', 'fobin', 'fobis', 'focks', 'fogad', 'fogar', 'fogas', 'fogat',
'fogel', 'fogen', 'fokad', 'fokar', 'fokas', 'fokat', 'folat', 'folda', 'folds', 'folke',
'folks', 'fonds', 'fonen', 'foner', 'fonon', 'fonts', 'foran', 'foras', 'force', 'forms',
'forna', 'forne', 'fornt', 'foror', 'forts', 'fotad', 'fotar', 'fotas', 'fotat', 'foten',
'fotos', 'fotot', 'fotös', 'foula', 'fouls', 'foyer', 'frame', 'freak', 'freds', 'freja',
'frejs', 'freud', 'friad', 'friar', 'frias', 'friat', 'frick', 'frida', 'frids', 'frigg',
'fritt', 'froda', 'frode', 'frods', 'fromt', 'frosa', 'fruar', 'fruas', 'fruat', 'fruns',
'fråga', 'fräls', 'fräna', 'fränt', 'fräst', 'fräts', 'frätt', 'fröen', 'fröer', 'fröet',
'fröna', 'fröns', 'frösa', 'fröss', 'fröst', 'fröts', 'frövi', 'fubba', 'fucka', 'fugan',
'fugas', 'fugor', 'fukts', 'fulla', 'fulle', 'fullt', 'fulöl', 'funks', 'funna', 'funne',
'funno', 'funta', 'funts', 'furan', 'furas', 'furen', 'furun', 'furus', 'furut', 'fusks',
'futts', 'fuxar', 'fuxen', 'fykas', 'fyker', 'fykte', 'fykts', 'fylen', 'fyles', 'fylet',
'fylls', 'fyllt', 'fylum', 'fynds', 'fyran', 'fyrar', 'fyras', 'fyrat', 'fyren', 'fyrer',
'fyror', 'fysen', 'fågel', 'fåkar', 'fåken', 'fåker', 'fålar', 'fålen', 'fåles', 'fålla',
'fånar', 'fånen', 'fånes', 'fånet', 'fånga', 'fånge', 'fångs', 'fånig', 'fårad', 'fåran',
'fårar', 'fåras', 'fårat', 'fårbo', 'fåren', 'fåret', 'fårig', 'fåror', 'fåtal', 'fåten',
'fåter', 'fåtts', 'fäder', 'fäets', 'fälen', 'fälgs', 'fälld', 'fälls', 'fällt', 'fälts',
'fänas', 'fänge', 'färde', 'färds', 'färgs', 'färma', 'färmt', 'färst', 'fästs', 'födan',
'födas', 'födda', 'födde', 'föder', 'födes', 'födor', 'fölad', 'fölar', 'fölas', 'fölat',
'fölen', 'fölet', 'följs', 'följt', 'föllo', 'fönad', 'fönar', 'fönas', 'fönat', 'fönen',
'förar', 'föras', 'förda', 'förde', 'föreg', 'fören', 'förer', 'föres', 'föret', 'förns',
'förre', 'förts', 'föråt', 'förät', 'föröd', 'fösas', 'föser', 'föses', 'fösta', 'föste',
'fösts', 'fötts', 'gabbe', 'gabon', 'gadds', 'gagen', 'gager', 'gages', 'gaget', 'gaggs',
'gagns', 'gaily', 'gajar', 'gajen', 'galan', 'galas', 'galde', 'galer', 'galet', 'galit',
'gallo', 'galls', 'galna', 'galne', 'galor', 'galts', 'gamad', 'gamar', 'gamas', 'gamat',
'gamea', 'gamen', 'gamla', 'gamle', 'ganka', 'gapad', 'gapan', 'gapar', 'gapas', 'gapat',
'gapen', 'gapet', 'gapor', 'garam', 'gards', 'garns', 'garvs', 'gasar', 'gasas', 'gasat',
'gasen', 'gaser', 'gashs', 'gasts', 'gatan', 'gatas', 'gaten', 'gater', 'gates', 'gator',
'gatts', 'gauge', 'gauss', 'gayly', 'gazis', 'gdzie', 'gefle', 'gefta', 'gejds', 'gelen',
'gelén', 'geler', 'gelés', 'gelet', 'gemet', 'gemla', 'genar', 'genas', 'genat', 'genen',
'gener', 'genis', 'georg', 'gerda', 'gerds', 'gerna', 'gerts', 'gests', 'getan', 'geten',
'getts', 'ghana', 'gibba', 'gibbs', 'gicks', 'gidde', 'gideå', 'gifts', 'gifva', 'gifwa',
'gigen', 'giget', 'gikts', 'gills', 'gillt', 'gimel', 'gimos', 'ginge', 'gingo', 'ginna',
'gipar', 'gipas', 'gipat', 'girad', 'girar', 'giras', 'girat', 'giren', 'giron', 'giros',
'girot', 'giter', 'gitte', 'givan', 'givar', 'giver', 'gives', 'givit', 'givna', 'givor',
'gjort', 'gjuts', 'glace', 'gladd', 'glade', 'gladh', 'glads', 'gladt', 'glams', 'glane',
'glava', 'glavs', 'glenn', 'glest', 'glids', 'glien', 'gliet', 'glina', 'glinn', 'glins',
'gliss', 'glist', 'gliså', 'glits', 'globs', 'glodd', 'glott', 'gluon', 'glysa', 'glyst',
'glåma', 'gläds', 'gläns', 'glöds', 'glömd', 'glöms', 'glömt', 'glött', 'gnagd', 'gnagt',
'gnarp', 'gneds', 'gnets', 'gnids', 'gnoms', 'gnott', 'gnuer', 'gnuns', 'gnurk', 'gnyet',
'gnytt', 'gnöls', 'goare', 'goarn', 'goast', 'godan', 'godas', 'godes', 'goffe', 'gojan',
'gojas', 'gojor', 'golar', 'golas', 'golat', 'golem', 'golfs', 'golvs', 'gosad', 'gosar',
'gosas', 'gosat', 'goten', 'goter', 'gotte', 'gouda', 'govän', 'grads', 'grafs', 'graft',
'grahn', 'grams', 'grans', 'grant', 'granö', 'grave', 'gravs', 'gravt', 'grejs', 'greks',
'grens', 'greps', 'greta', 'grins', 'grips', 'groft', 'grops', 'grott', 'grova', 'grove',
'grovt', 'grunt', 'gryns', 'gryts', 'grytt', 'gråal', 'gråbo', 'grådt', 'gråna', 'gråta',
'gråts', 'grått', 'gräda', 'gräfd', 'gräfs', 'gräft', 'gräls', 'gräms', 'grämt', 'gräto',
'gräts', 'grävd', 'grävs', 'grävt', 'grödd', 'gröds', 'gröen', 'gröer', 'gröes', 'gröet',
'gröna', 'gröne', 'gröps', 'gröpt', 'gröts', 'grött', 'guams', 'gucka', 'gudar', 'gudda',
'guden', 'guiro', 'gulan', 'gulas', 'gulds', 'guler', 'gulls', 'gulor', 'gunde', 'gurad',
'guran', 'gurar', 'guras', 'gurat', 'gurli', 'guror', 'gurra', 'gurun', 'gurus', 'gusum',
'gutar', 'guten', 'gutes', 'guugu', 'gylfs', 'gymma', 'gyoza', 'gyron', 'gyros', 'gyrot',
'gyrus', 'gåfva', 'gånga', 'gånge', 'gångs', 'gårde', 'gårds', 'gårns', 'gåsen', 'gåtan',
'gåtas', 'gåtor', 'gåtts', 'gåvan', 'gåvas', 'gåvor', 'gäfle', 'gäfva', 'gäfve', 'gälar',
'gälds', 'gälen', 'gäler', 'gälle', 'gälls', 'gällt', 'gällö', 'gämmå', 'gängs', 'gärds',
'gärin', 'gäris', 'gästs', 'gävle', 'gödas', 'gödda', 'gödde', 'göder', 'gödes', 'göfab',
'gökar', 'gökas', 'gökat', 'göken', 'gölar', 'gölen', 'gömda', 'gömde', 'gömts', 'görad',
'göran', 'görar', 'göras', 'görat', 'görel', 'gören', 'görer', 'göres', 'görom', 'gösar',
'gösen', 'gösse', 'gösta', 'götar', 'götas', 'göten', 'göter', 'götes', 'götet', 'götha',
'götts', 'haags', 'habos', 'haden', 'hades', 'hadom', 'hafra', 'hafre', 'hafts', 'hafva',
'hafwa', 'hagar', 'hagen', 'hages', 'haiti', 'hajad', 'hajar', 'hajas', 'hajat', 'hajen',
'hajom', 'hajpa', 'hajps', 'hakad', 'hakan', 'hakar', 'hakas', 'hakat', 'haken', 'hakes',
'haket', 'hakka', 'hakon', 'hakor', 'halal', 'halar', 'halas', 'halat', 'halft', 'halle',
'halls', 'halms', 'halps', 'halte', 'halts', 'halvt', 'hamns', 'hanar', 'handa', 'hanen',
'hanes', 'hanks', 'hanna', 'hanns', 'hanzi', 'happy', 'haram', 'harar', 'harbo', 'haren',
'hares', 'harms', 'harrs', 'harry', 'harvs', 'hasar', 'hasat', 'hasen', 'hasha', 'hasor',
'hassa', 'hasse', 'hasts', 'hatad', 'hatar', 'hatas', 'hatat', 'hatet', 'hatts', 'hausa',
'havas', 'haven', 'haver', 'haves', 'havet', 'havom', 'heats', 'heavy', 'hebys', 'hedar',
'hedda', 'hedes', 'hedet', 'hedin', 'hedna', 'hedne', 'hegge', 'heidi', 'heila', 'hejad',
'hejar', 'hejas', 'hejat', 'hejdå', 'hejen', 'hejet', 'helad', 'helan', 'helar', 'helas',
'helat', 'helen', 'helge', 'helgs', 'helny', 'helor', 'heltå', 'hemsa', 'hemse', 'henar',
'henen', 'henke', 'henny', 'henom', 'henry', 'henån', 'herms', 'herrn', 'herrs', 'herrå',
'herul', 'hesna', 'hetat', 'heter', 'hette', 'hexan', 'hexod', 'hexos', 'hiade', 'hidös',
'hijab', 'hilda', 'hilma', 'hinds', 'hinks', 'hinns', 'hinta', 'hints', 'hions', 'hippe',
'hippt', 'hirds', 'hispa', 'hitin', 'hivad', 'hivar', 'hivas', 'hivat', 'hjalp', 'hjelm',
'hjelp', 'hjons', 'hjuls', 'hoade', 'hoars', 'hoats', 'hober', 'hobys', 'hodda', 'hoets',
'hojad', 'hojar', 'hojas', 'hojat', 'hojen', 'hokus', 'holks', 'holms', 'holts', 'homon',
'homos', 'homot', 'honan', 'honas', 'honor', 'hopad', 'hopar', 'hopat', 'hopen', 'hopps',
'horan', 'horar', 'horas', 'horat', 'horda', 'hords', 'horet', 'horns', 'horor', 'hosor',
'hossa', 'hotad', 'hotar', 'hotas', 'hotat', 'hoten', 'hotet', 'hovar', 'hovas', 'hoven',
'hovet', 'hovås', 'hubbs', 'hudar', 'huden', 'huena', 'huens', 'huets', 'hugat', 'hugen',
'huggs', 'hugos', 'hugsa', 'hukad', 'hukar', 'hukas', 'hukat', 'huken', 'hulda', 'hulde',
'hulpe', 'hulth', 'hults', 'humpa', 'hunds', 'hunka', 'hunks', 'hunna', 'hursa', 'husad',
'husan', 'husas', 'husat', 'husby', 'husen', 'huset', 'husit', 'husor', 'husum', 'husun',
'husus', 'hutad', 'hutar', 'hutas', 'hutat', 'huvan', 'huvar', 'huvas', 'huven', 'huves',
'huvet', 'huvor', 'hvalf', 'hvals', 'hvarf', 'hvari', 'hvars', 'hvart', 'hwart', 'hvass',
'hvete', 'hvila', 'hwila', 'hvita', 'hvite', 'hvitt', 'hvred', 'hvrid', 'hygga', 'hymns',
'hypar', 'hypas', 'hypat', 'hyran', 'hyras', 'hyrax', 'hyrda', 'hyrde', 'hyres', 'hyror',
'hyrts', 'hysas', 'hyser', 'hyses', 'hyssa', 'hyste', 'hysts', 'hytte', 'hytts', 'hågad',
'hågat', 'hågen', 'hågsa', 'håkan', 'håken', 'hålan', 'hålas', 'hålen', 'hålet', 'hålig',
'hålla', 'hållf', 'hålls', 'hållt', 'hålor', 'hånad', 'hånar', 'hånas', 'hånat', 'hånet',
'hånle', 'hånna', 'hårda', 'hårde', 'håren', 'håret', 'hårig', 'håsan', 'håsar', 'håsas',
'håsat', 'håsor', 'håvad', 'håvan', 'håvar', 'håvas', 'håvat', 'håven', 'håvor', 'häcks',
'hädar', 'hädas', 'hädat', 'häfda', 'häfde', 'häfdt', 'häfna', 'häfts', 'häfva', 'häfwa',
'häggs', 'hägns', 'hälar', 'hälen', 'hälld', 'hälls', 'hällt', 'hälsö', 'hände', 'hängd',
'hängs', 'hängt', 'hänka', 'hänne', 'häpet', 'häpne', 'häraf', 'härar', 'härds', 'hären',
'härke', 'härks', 'härnt', 'hästs', 'hävas', 'hävde', 'hävds', 'häven', 'häver', 'häves',
'hävet', 'hävit', 'hävna', 'hävne', 'hävts', 'häxan', 'häxas', 'häxor', 'höets', 'höfts',
'högan', 'högar', 'högas', 'högen', 'höges', 'höggs', 'högra', 'högre', 'högst', 'höjas',
'höjda', 'höjde', 'höjds', 'höjer', 'höjes', 'höjts', 'hökar', 'höken', 'höljd', 'höljs',
'höljt', 'hölls', 'höllt', 'hölös', 'hönan', 'hönas', 'hönor', 'hönös', 'höras', 'hörby',
'hörda', 'hörde', 'hören', 'hörer', 'höres', 'hörne', 'hörns', 'hörts', 'hösts', 'hötad',
'hötas', 'höter', 'hötes', 'hötta', 'hötte', 'hötts', 'höves', 'hövts', 'höörs', 'ibiza',
'idaho', 'idars', 'idats', 'iddes', 'idéen', 'idéer', 'idena', 'idens', 'idéns', 'ident',
'idets', 'idkad', 'idkar', 'idkas', 'idkat', 'idoga', 'idoge', 'idogt', 'idols', 'idres',
'iduns', 'ifver', 'ifyll', 'iförd', 'iförs', 'ifört', 'igeln', 'igels', 'iggad', 'iggar',
'iggas', 'iggat', 'iglar', 'iglon', 'iglor', 'iglos', 'ikalf', 'ikalv', 'ikast', 'ikeas',
'ikläd', 'ikläm', 'iklär', 'ikläs', 'ikons', 'ilade', 'ilars', 'ilats', 'ilens', 'ileum',
'illis', 'ilsan', 'ilsbo', 'ilskt', 'imams', 'immad', 'imman', 'immar', 'immas', 'immat',
'immor', 'impad', 'impar', 'impas', 'impat', 'inade', 'inbox', 'indal', 'infil', 'infon',
'infos', 'ingas', 'ingav', 'inger', 'inges', 'inget', 'ingiv', 'ingår', 'ingås', 'inhys',
'inkan', 'inkar', 'inkas', 'inken', 'inkom', 'inlas', 'inled', 'inlåt', 'inlär', 'inlät',
'inlös', 'inrar', 'inred', 'inrym', 'inser', 'inses', 'inspo', 'insup', 'insåg', 'insöp',
'insöv', 'intar', 'intas', 'intog', 'invig', 'iowas', 'iraks', 'irans', 'irene', 'irish',
'irjas', 'irmas', 'irrar', 'irras', 'irrat', 'isade', 'isaks', 'isars', 'isats', 'isatt',
'isens', 'isiga', 'isigt', 'ismen', 'ismer', 'ismås', 'isnål', 'istes', 'isväg', 'isäng',
'ivans', 'ivars', 'ivern', 'ivers', 'ivrar', 'ivras', 'ivrat', 'jacke', 'jacks', 'jacob',
'jaens', 'jaets', 'jagad', 'jagar', 'jagas', 'jagat', 'jagen', 'jaget', 'jagga', 'jagts',
'jakad', 'jakan', 'jakar', 'jakas', 'jakat', 'jaken', 'jakob', 'jakts', 'jaleo', 'jalla',
'jalle', 'jamar', 'jamat', 'jambs', 'jamet', 'janas', 'janne', 'janos', 'jante', 'jappa',
'japps', 'jarls', 'jason', 'jasså', 'javan', 'javas', 'jeeps', 'jemen', 'jemka', 'jemna',
'jemne', 'jemnt', 'jemte', 'jenny', 'jerka', 'jerns', 'jerry', 'jesus', 'jetar', 'jeten',
'jette', 'jihad', 'jimmy', 'jippi', 'jobbs', 'jocka', 'jocke', 'joden', 'jodet', 'jodid',
'joels', 'johan', 'johns', 'joina', 'joint', 'jojje', 'jojon', 'jojor', 'jojos', 'jokks',
'jolla', 'jonas', 'jonen', 'jones', 'jonna', 'jonne', 'jonny', 'jonte', 'joppe', 'jords',
'josef', 'josen', 'joser', 'josse', 'josua', 'jotan', 'jotas', 'jotat', 'jotun', 'joxar',
'joxas', 'joxat', 'joxet', 'jubas', 'jucks', 'judar', 'judas', 'juden', 'judes', 'judit',
'judon', 'judos', 'jufts', 'jugge', 'jular', 'julas', 'julen', 'julia', 'julie', 'julis',
'julön', 'junis', 'junos', 'juras', 'juryn', 'jurys', 'justa', 'jutar', 'juten', 'jutes',
'jäger', 'jäkts', 'jälla', 'jämjö', 'jämne', 'järbo', 'järfs', 'järna', 'järns', 'järva',
'järvs', 'jäsas', 'jäser', 'jäses', 'jäste', 'jästs', 'jävar', 'jävat', 'jäven', 'jävet',
'jörns', 'jötun', 'kabul', 'kadin', 'kadis', 'kairo', 'kaisa', 'kajal', 'kajan', 'kajas',
'kajen', 'kajer', 'kajor', 'kajsa', 'kakan', 'kakas', 'kakin', 'kakis', 'kakor', 'kalix',
'kalks', 'kalle', 'kalls', 'kallt', 'kalma', 'kalmt', 'kalvs', 'kammu', 'kamps', 'kanad',
'kanan', 'kanar', 'kanas', 'kanat', 'kanji', 'kanor', 'kants', 'kapad', 'kapar', 'kapas',
'kapat', 'kapen', 'kapet', 'karen', 'karga', 'karge', 'kargt', 'karin', 'karln', 'karls',
'karma', 'karms', 'karps', 'karts', 'karup', 'kasad', 'kasar', 'kasas', 'kasat', 'kasen',
'kases', 'kasst', 'kasts', 'katal', 'katja', 'katts', 'kaxar', 'kaxen', 'kaxes', 'kazoo',
'keans', 'keffa', 'keffe', 'kefft', 'kelar', 'kelas', 'kelat', 'kelet', 'kelna', 'kelne',
'kemin', 'kemis', 'kenny', 'kenta', 'kents', 'kenya', 'keors', 'kepan', 'kepas', 'kepor',
'kesar', 'kesas', 'kesat', 'keson', 'kesos', 'keton', 'kevin', 'kexen', 'kexet', 'khaki',
'kians', 'kicki', 'kicks', 'kiden', 'kidet', 'kidla', 'kievs', 'kikar', 'kikat', 'kiken',
'kikra', 'kilar', 'kilat', 'kilen', 'kilig', 'killi', 'kilon', 'kilos', 'kilot', 'kilts',
'kinas', 'kinds', 'kinna', 'kinne', 'kisar', 'kisas', 'kisat', 'kisen', 'kiset', 'kivar',
'kivat', 'kivet', 'kivik', 'kivin', 'kiwin', 'kivis', 'kiwis', 'kjams', 'kjell', 'kjols',
'klans', 'klare', 'klart', 'klast', 'klavs', 'klein', 'klene', 'klent', 'kleva', 'klevs',
'kliad', 'kliar', 'klias', 'kliat', 'kliet', 'klivs', 'kloka', 'kloke', 'klokt', 'klons',
'klors', 'klovå', 'kluka', 'kluts', 'klydd', 'klyfd', 'klyfs', 'klyks', 'klyvd', 'klyvs',
'klyvt', 'klåda', 'klådd', 'klåpa', 'klått', 'kläck', 'kläds', 'klämd', 'kläms', 'klöfs',
'klöka', 'klöst', 'klövs', 'knaks', 'knalt', 'kneds', 'knegs', 'kneip', 'kneps', 'kniva',
'knivs', 'knock', 'knops', 'knose', 'knots', 'knugs', 'knull', 'knusa', 'knuts', 'knyts',
'knåda', 'knåpa', 'knäar', 'knäas', 'knäat', 'knäet', 'knäna', 'knäns', 'knäts', 'knödd',
'knöls', 'knöts', 'knött', 'kocks', 'kodad', 'kodar', 'kodas', 'kodat', 'koden', 'koder',
'kodes', 'kodon', 'koine', 'kojan', 'kojar', 'kojas', 'kojat', 'kojen', 'kojer', 'kojor',
'kokad', 'kokan', 'kokar', 'kokas', 'kokat', 'koken', 'koket', 'kokor', 'kokta', 'kokte',
'kokts', 'kolad', 'kolan', 'kolar', 'kolas', 'kolat', 'kolen', 'koler', 'kolet', 'kolls',
'kolna', 'kolor', 'kolts', 'kolvs', 'koman', 'komas', 'kombo', 'komis', 'kommo', 'komna',
'komps', 'komst', 'konan', 'konas', 'konen', 'koner', 'konga', 'kongo', 'konjn', 'konjv',
'konka', 'konne', 'konny', 'konor', 'konti', 'kopps', 'kopts', 'korad', 'korar', 'koras',
'korat', 'kords', 'korea', 'koren', 'koret', 'korgs', 'korks', 'korma', 'korns', 'korps',
'korre', 'korte', 'korts', 'korvs', 'kosan', 'kosts', 'kotan', 'kotas', 'kotor', 'kovan',
'kovas', 'koves', 'koxad', 'koxar', 'koxas', 'koxat', 'kragg', 'kraja', 'kravs', 'kredd',
'kreml', 'kreti', 'krian', 'krias', 'krigs', 'krika', 'krims', 'krior', 'kripp', 'krogs',
'kroks', 'kroms', 'kruda', 'krumt', 'kruså', 'kruts', 'kryar', 'kryat', 'krydd', 'krymp',
'kryps', 'krytt', 'kråka', 'kråla', 'kråma', 'kräka', 'kräks', 'kräkt', 'kräma', 'kräms',
'kräng', 'kränk', 'kräsa', 'krävd', 'krävs', 'krävt', 'kröks', 'kröne', 'kröns', 'krönt',
'kröps', 'krösa', 'kuala', 'kubas', 'kubba', 'kubbs', 'kuben', 'kuber', 'kufar', 'kufen',
'kukar', 'kuken', 'kulan', 'kular', 'kulas', 'kulat', 'kulet', 'kulka', 'kulls', 'kulor',
'kults', 'kumla', 'kunde', 'kunds', 'kungs', 'kupad', 'kupan', 'kupar', 'kupas', 'kupat',
'kupén', 'kupor', 'kupps', 'kurar', 'kuras', 'kurat', 'kurds', 'kuren', 'kurrs', 'kurts',
'kusar', 'kusen', 'kuses', 'kusks', 'kusse', 'kusts', 'kutad', 'kutan', 'kutar', 'kutas',
'kutat', 'kuten', 'kutet', 'kutta', 'kuvad', 'kuvar', 'kuvas', 'kuvat', 'kvack', 'kvads',
'kvaft', 'kvald', 'kvals', 'kvalt', 'kvant', 'kvava', 'kvavt', 'kveds', 'kveke', 'kvest',
'kvfot', 'kvids', 'kvots', 'kväds', 'kväfd', 'kväft', 'kväkt', 'kvälj', 'kväst', 'kvävd',
'kvävs', 'kvävt', 'kwött', 'kylan', 'kylar', 'kylas', 'kylda', 'kylde', 'kylen', 'kyler',
'kyles', 'kylts', 'kymus', 'kyska', 'kyskt', 'kysst', 'kådan', 'kådas', 'kådig', 'kådis',
'kådor', 'kåges', 'kåkar', 'kåken', 'kålen', 'kånka', 'kåpan', 'kåpas', 'kåpor', 'kårar',
'kåras', 'kårel', 'kåren', 'kårer', 'kåres', 'kåsan', 'kåsas', 'kåsor', 'kåsör', 'kåsös',
'kåtan', 'kåtas', 'kåtor', 'kåvis', 'käcka', 'käcke', 'käcks', 'käckt', 'käfts', 'käkad',
'käkar', 'käkas', 'käkat', 'käken', 'käkes', 'käket', 'kälar', 'kälen', 'källö', 'kända',
'kände', 'känns', 'känts', 'käpps', 'käran', 'kärar', 'kärat', 'kärls', 'kärrs', 'kärvt',
'käxar', 'käxas', 'käxat', 'käxen', 'käxet', 'köade', 'köats', 'köers', 'köken', 'köket',
'köksö', 'kölar', 'kölds', 'kölen', 'kölns', 'könad', 'könar', 'könas', 'könat', 'könen',
'könet', 'köpas', 'köpen', 'köper', 'köpes', 'köpet', 'köpta', 'köpte', 'köpts', 'körad',
'körar', 'köras', 'körat', 'körda', 'körde', 'kören', 'körer', 'köres', 'körka', 'körts',
'kössa', 'kötta', 'kötts', 'laban', 'labba', 'labbs', 'labra', 'lacke', 'lacks', 'lackt',
'ladan', 'ladas', 'ladde', 'ladds', 'lades', 'lador', 'lagad', 'lagan', 'lagar', 'lagas',
'lagat', 'lagda', 'lagen', 'lages', 'laget', 'laggs', 'lagts', 'laila', 'lajda', 'lajer',
'lajva', 'lajvs', 'lakar', 'lakas', 'lakat', 'laken', 'lakes', 'laman', 'lamas', 'lamat',
'lamed', 'lamer', 'lamms', 'lamor', 'lanar', 'lanas', 'lanat', 'lands', 'lanen', 'lanet',
'lanne', 'lapad', 'lapar', 'lapas', 'lapat', 'lapps', 'laren', 'larer', 'larms', 'larvs',
'lasse', 'lasts', 'latar', 'latas', 'latat', 'laten', 'lates', 'lativ', 'latte', 'latus',
'lavan', 'lavar', 'lavas', 'laven', 'laves', 'laxar', 'laxen', 'laxås', 'lebbs', 'ledan',
'ledar', 'ledat', 'ledda', 'ledde', 'ledds', 'leden', 'leder', 'ledes', 'ledet', 'leeds',
'lefde', 'leffe', 'lefva', 'lefwa', 'lefve', 'legad', 'legan', 'legas', 'legen', 'leget',
'legga', 'legor', 'leias', 'leifs', 'lejas', 'lejda', 'lejde', 'lejer', 'lejes', 'lejts',
'lekar', 'lekas', 'leken', 'leker', 'lekes', 'lekte', 'lekts', 'lelle', 'lemna', 'lenas',
'lento', 'leone', 'leons', 'leppe', 'leran', 'leras', 'leren', 'leret', 'leror', 'lerum',
'letad', 'letar', 'letas', 'letat', 'letts', 'levan', 'levas', 'levat', 'levda', 'levde',
'level', 'leven', 'leves', 'levla', 'levor', 'levts', 'lexan', 'lexas', 'lexem', 'lexor',
'lhasa', 'liams', 'lians', 'liars', 'liber', 'lidas', 'liden', 'lides', 'lidet', 'lidit',
'lidna', 'liens', 'lifts', 'ligan', 'ligas', 'liger', 'liggs', 'ligor', 'likar', 'likas',
'likat', 'liken', 'likes', 'liket', 'lilly', 'limas', 'limbo', 'limen', 'limes', 'limon',
'limos', 'linan', 'linas', 'linde', 'lindh', 'linds', 'linet', 'linns', 'linor', 'linus',
'linux', 'lipad', 'lipar', 'lipat', 'lipid', 'lirad', 'liran', 'lirar', 'liras', 'lirat',
'liren', 'lires', 'liret', 'liror', 'lisan', 'lisar', 'lisas', 'lisat', 'lisor', 'lists',
'litad', 'litar', 'litas', 'litat', 'litta', 'livar', 'livas', 'livat', 'liven', 'livet',
'livia', 'livvi', 'lixom', 'ljong', 'ljuds', 'ljuft', 'ljugs', 'ljumt', 'ljusa', 'ljuse',
'ljust', 'ljuts', 'ljuva', 'ljuve', 'ljuvt', 'ljödo', 'ljögs', 'ljöts', 'loars', 'loben',
'lober', 'locis', 'locks', 'locus', 'lodad', 'lodar', 'lodas', 'lodat', 'lodet', 'lodis',
'loffe', 'lofts', 'lofva', 'logar', 'logen', 'loger', 'loges', 'loggs', 'login', 'logis',
'logit', 'lokan', 'lokas', 'loken', 'lokes', 'loket', 'lokor', 'loppe', 'lopps', 'lords',
'lorts', 'lotss', 'lotts', 'louie', 'lovad', 'lovar', 'lovas', 'lovat', 'loves', 'lovet',
'lovis', 'luade', 'luars', 'luats', 'lucas', 'ludde', 'ludds', 'ludet', 'ludna', 'ludne',
'luens', 'lufts', 'luggs', 'lugne', 'lugns', 'lugnt', 'luhya', 'lukas', 'lukts', 'luleå',
'luman', 'lumas', 'lumor', 'lumps', 'lunas', 'lunde', 'lundh', 'lunds', 'lupen', 'lupit',
'lupps', 'lurad', 'lurar', 'lurat', 'luren', 'lurks', 'lurra', 'lurre', 'lusar', 'lusat',
'lusen', 'lusts', 'lutad', 'lutan', 'lutar', 'lutas', 'lutat', 'luten', 'lutet', 'lutna',
'lutne', 'lutor', 'luvan', 'luvar', 'luvas', 'luven', 'luvor', 'luxor', 'lvivs', 'lyans',
'lycke', 'lycks', 'lyckt', 'lydas', 'lydde', 'lyder', 'lydes', 'lydia', 'lydit', 'lyets',
'lyfte', 'lyfts', 'lykke', 'lykts', 'lyllo', 'lyons', 'lyors', 'lyran', 'lyras', 'lyror',
'lysas', 'lysen', 'lyser', 'lyses', 'lyset', 'lysta', 'lyste', 'lysts', 'lyten', 'lytes',
'lytet', 'lytta', 'lytts', 'lyxen', 'lådan', 'lådas', 'lådde', 'lådor', 'lågad', 'lågan',
'lågar', 'lågas', 'lågat', 'lågen', 'lågor', 'lånad', 'lånar', 'lånas', 'lånat', 'lånen',
'lånet', 'långa', 'långe', 'långo', 'långt', 'lånke', 'lånta', 'lårar', 'låren', 'låret',
'låsas', 'låsen', 'låser', 'låses', 'låset', 'låssa', 'låsta', 'låste', 'låsts', 'låtar',
'låtas', 'låten', 'låter', 'låtes', 'låtit', 'låtom', 'låtsa', 'läade', 'läats', 'läcks',
'läckt', 'läfsa', 'lägda', 'lägen', 'läges', 'läget', 'läggs', 'lägre', 'lägst', 'läker',
'läkes', 'läkta', 'läkte', 'läkts', 'lände', 'länds', 'länen', 'länet', 'länks', 'länna',
'länts', 'läppe', 'läpps', 'läran', 'läras', 'lärda', 'lärde', 'lärer', 'läres', 'läror',
'lärts', 'läsas', 'läser', 'läses', 'läsks', 'läste', 'lästs', 'läten', 'lätes', 'lätet',
'lätte', 'läxan', 'läxas', 'läxor', 'lödas', 'lödde', 'löder', 'löets', 'lögad', 'lögar',
'lögas', 'lögat', 'lögns', 'löjan', 'löjas', 'löjen', 'löjes', 'löjet', 'löjla', 'löjor',
'lökar', 'löken', 'lökig', 'lönad', 'lönar', 'lönas', 'lönat', 'lönen', 'löner', 'lönna',
'lönne', 'lönns', 'löpas', 'löpen', 'löper', 'löpes', 'löpet', 'löpte', 'löpts', 'lösas',
'löser', 'löses', 'lösig', 'lösta', 'löste', 'lösts', 'lötar', 'löten', 'lötts', 'lövar',
'lövat', 'löven', 'lövet', 'lövja', 'lööfs', 'löövs', 'macho', 'macks', 'madde', 'maffe',
'magar', 'magen', 'mages', 'magin', 'magis', 'magna', 'magre', 'magts', 'mails', 'maine',
'mainz', 'majad', 'majan', 'majar', 'majas', 'majat', 'majen', 'majos', 'makad', 'makak',
'makan', 'makar', 'makas', 'makat', 'maken', 'makes', 'makor', 'makro', 'makts', 'malar',
'malas', 'malda', 'malde', 'malen', 'maler', 'males', 'malet', 'malin', 'malle', 'malls',
'malms', 'malmö', 'malna', 'malta', 'malte', 'malts', 'malås', 'manan', 'manar', 'manas',
'manat', 'manen', 'manér', 'manga', 'mange', 'manin', 'manis', 'manne', 'manta', 'manul',
'mappa', 'mapps', 'maran', 'marar', 'maras', 'maren', 'maria', 'marie', 'maris', 'marks',
'maron', 'maror', 'marta', 'marys', 'masar', 'masen', 'masks', 'masse', 'masta', 'masts',
'matan', 'matar', 'matas', 'matat', 'maten', 'mater', 'matks', 'matts', 'mauds', 'maxad',
'maxar', 'maxas', 'maxat', 'mazel', 'medar', 'meden', 'medes', 'medis', 'medle', 'meios',
'mejad', 'mejar', 'mejas', 'mejat', 'mejls', 'mekad', 'mekar', 'mekas', 'mekat', 'melin',
'mello', 'memen', 'memer', 'memet', 'memil', 'menar', 'menas', 'menat', 'menen', 'menet',
'menyn', 'menys', 'merca', 'mesar', 'mesas', 'mesat', 'mesen', 'mesor', 'messa', 'mesta',
'meste', 'mesyr', 'metad', 'metal', 'metar', 'metas', 'metat', 'metes', 'metet', 'metop',
'mezzo', 'micka', 'micke', 'micks', 'miffo', 'milan', 'milar', 'milas', 'milda', 'milde',
'milen', 'mille', 'milns', 'milor', 'milos', 'mimad', 'mimar', 'mimas', 'mimat', 'mimen',
'mimer', 'mimmi', 'minan', 'minas', 'minen', 'miner', 'minks', 'minns', 'minor', 'minsk',
'mints', 'miras', 'mirca', 'mists', 'mitos', 'mitts', 'mixar', 'mixas', 'mixat', 'mixen',
'mjaua', 'mjuke', 'mjukt', 'mjuta', 'mjärd', 'mjöds', 'mjöls', 'moars', 'mobbs', 'modda',
'modds', 'moden', 'modes', 'modet', 'modir', 'modis', 'moget', 'mogne', 'mojar', 'mojen',
'mojje', 'molat', 'molen', 'molin', 'molla', 'molls', 'molly', 'molns', 'monas', 'mongo',
'monom', 'moona', 'mopps', 'moran', 'mords', 'moren', 'morer', 'moror', 'morrs', 'mosad',
'mosar', 'mosas', 'mosat', 'moses', 'moset', 'motad', 'motar', 'motas', 'motat', 'moten',
'motet', 'mount', 'mousa', 'mousi', 'mucks', 'muffe', 'muffs', 'muggs', 'mulad', 'mulan',
'mular', 'mulas', 'mulat', 'mulch', 'mules', 'mulet', 'mulle', 'mulls', 'mulor', 'multa',
'mumle', 'munin', 'munka', 'munks', 'munsö', 'muppa', 'mupps', 'murad', 'murar', 'muras',
'murat', 'muren', 'murva', 'musan', 'musar', 'musas', 'musen', 'muser', 'muskö', 'musse',
'musts', 'mutad', 'mutan', 'mutar', 'mutas', 'mutat', 'mutor', 'mutta', 'muzak', 'myens',
'myets', 'myggs', 'mylad', 'mylar', 'mylas', 'mylat', 'mynas', 'mynts', 'myoms', 'myons',
'myran', 'myrar', 'myras', 'myren', 'myror', 'mysas', 'myser', 'myses', 'myset', 'mysks',
'müsli', 'mysse', 'myste', 'mysts', 'myten', 'myter', 'mådde', 'mågar', 'mågen', 'målad',
'målar', 'målas', 'målat', 'målen', 'målet', 'målis', 'månar', 'månas', 'månat', 'månen',
'månes', 'månår', 'måsar', 'måsen', 'måssa', 'måsta', 'måtts', 'mähän', 'mähäs', 'mähät',
'mäkla', 'mäkta', 'mälas', 'mälde', 'mälen', 'mäler', 'mäles', 'mälet', 'mälta', 'mälte',
'mälts', 'mänga', 'mängd', 'mären', 'märer', 'märgs', 'märka', 'märke', 'märks', 'märkt',
'märla', 'märrs', 'märta', 'mäska', 'mäsks', 'mässa', 'mätas', 'mäten', 'mäter', 'mätes',
'mätig', 'mätit', 'mätta', 'mätte', 'mätts', 'mödan', 'mödas', 'mödor', 'mögad', 'mögar',
'mögas', 'mögat', 'möget', 'mögig', 'möjas', 'mökar', 'mökas', 'mökat', 'möken', 'mölar',
'mölas', 'mölat', 'mölle', 'mörke', 'mörkt', 'mörna', 'mörts', 'möten', 'möter', 'mötes',
'mötet', 'mötte', 'mötts', 'naans', 'nabbe', 'nabon', 'nabor', 'nabos', 'nadja', 'naemi',
'nagge', 'naggs', 'naira', 'naiva', 'naive', 'naivt', 'naket', 'nakfa', 'nakna', 'nakne',
'nalka', 'naman', 'namas', 'namns', 'nanar', 'nanas', 'nanat', 'nancy', 'nandu', 'nanig',
'nanna', 'nanny', 'napps', 'narfe', 'narrs', 'narvs', 'nasar', 'nasas', 'nasat', 'natti',
'natts', 'nauru', 'naven', 'navet', 'nedla', 'nejds', 'nejdå', 'nejen', 'nejet', 'nekad',
'nekar', 'nekas', 'nekat', 'nelly', 'neons', 'nepal', 'nervs', 'nesan', 'nesas', 'nevön',
'nevös', 'ngras', 'niade', 'nians', 'niats', 'nices', 'nicke', 'nicks', 'niden', 'nidet',
'nigas', 'niger', 'nigit', 'nikud', 'nilen', 'nilla', 'nimma', 'ninas', 'ninis', 'ninja',
'niobs', 'niors', 'niqab', 'nitad', 'nitar', 'nitas', 'nitat', 'niten', 'niter', 'nitet',
'niuer', 'niues', 'nivån', 'nivås', 'njord', 'njosa', 'njuts', 'njöto', 'njöts', 'noahs',
'noaks', 'nobla', 'noble', 'nocke', 'nocks', 'noden', 'noder', 'noels', 'nojan', 'nojas',
'nojor', 'nokia', 'nolan', 'nolas', 'noler', 'nonan', 'nonas', 'nonor', 'nooba', 'noomi',
'nopal', 'noppn', 'noras', 'noren', 'nores', 'noret', 'norge', 'norms', 'north', 'nosad',
'nosar', 'nosas', 'nosat', 'nosen', 'notan', 'notas', 'noten', 'noter', 'notor', 'novan',
'novas', 'novor', 'nubbs', 'nuets', 'nunan', 'nunas', 'nunor', 'nupen', 'nupit', 'nuppa',
'nusit', 'nuuks', 'nyare', 'nyast', 'nybro', 'nycks', 'nydöd', 'nyens', 'nyets', 'nykil',
'nykär', 'nymfs', 'nynas', 'nyord', 'nypan', 'nyper', 'nypor', 'nypte', 'nypts', 'nysas',
'nyser', 'nyses', 'nysit', 'nyste', 'nysts', 'nytit', 'nytra', 'nytre', 'nyårs', 'nåbar',
'nådda', 'nådde', 'nåden', 'nåder', 'nådig', 'någon', 'något', 'några', 'nåkas', 'nålar',
'nålen', 'nånna', 'nåtar', 'nåten', 'nåtet', 'nåtla', 'nåtts', 'nåväl', 'näbbs', 'näcka',
'nälla', 'nämdö', 'nämns', 'nämnt', 'nänns', 'nänts', 'näpet', 'näpna', 'näpne', 'näras',
'närda', 'närde', 'näres', 'närke', 'närts', 'näsan', 'näsas', 'näsen', 'näset', 'näsor',
'nästs', 'näsum', 'nätad', 'nätar', 'nätas', 'nätat', 'näten', 'nätet', 'nävar', 'näven',
'näves', 'nödda', 'nödde', 'nöden', 'nöffa', 'nöffe', 'nöjda', 'nöjde', 'nöjen', 'nöjer',
'nöjes', 'nöjet', 'nöjts', 'nölar', 'nölat', 'nördo', 'nörds', 'nörfe', 'nötas', 'nöten',
'nöter', 'nötes', 'nötet', 'nötta', 'nötte', 'nötts', 'oanat', 'oasen', 'oaser', 'obett',
'objet', 'oboen', 'oboer', 'oboes', 'obols', 'obror', 'oböjt', 'ocool', 'odals', 'odena',
'odens', 'odets', 'odins', 'odlar', 'odlas', 'odlat', 'odons', 'odöds', 'odörs', 'oekad',
'ofina', 'ofine', 'ofint', 'ofogs', 'ofvan', 'ofött', 'ogges', 'ogina', 'ogint', 'oglad',
'ohios', 'ohmen', 'ohört', 'ojade', 'ojsan', 'okens', 'okets', 'okänt', 'okära', 'okärt',
'olade', 'olafs', 'olats', 'olgas', 'olike', 'olikt', 'olivs', 'oljad', 'oljan', 'oljar',
'oljas', 'oljat', 'oljor', 'ollad', 'ollan', 'ollar', 'ollas', 'ollat', 'ollen', 'olles',
'ollie', 'ollor', 'olmek', 'olofs', 'olovs', 'olsen', 'olson', 'olåst', 'oläte', 'omaks',
'omans', 'ombad', 'ombed', 'omber', 'ombes', 'omens', 'omgav', 'omger', 'omges', 'omilt',
'omkom', 'omlöp', 'omrör', 'onans', 'ondas', 'ondes', 'onger', 'onors', 'ontet', 'onådd',
'onått', 'oocyt', 'oolit', 'oorts', 'opaka', 'opakt', 'opiet', 'orala', 'oralt', 'orben',
'orber', 'ordar', 'ordas', 'ordat', 'ordet', 'orene', 'orens', 'orent', 'orets', 'orion',
'oriya', 'orkar', 'orkas', 'orkat', 'orken', 'orkit', 'ormar', 'ormen', 'ornös', 'oroad',
'oroar', 'oroas', 'oroat', 'oromo', 'orons', 'orrar', 'orren', 'orres', 'orsas', 'orten',
'orter', 'orvar', 'orven', 'orvet', 'oråds', 'orört', 'osade', 'osagt', 'osant', 'osats',
'osbys', 'oscar', 'oseds', 'osens', 'osets', 'osett', 'oskar', 'oslos', 'osoft', 'osset',
'ostar', 'osten', 'osunt', 'osålt', 'osått', 'osäll', 'otald', 'otids', 'otron', 'otros',
'ottan', 'ottas', 'ottor', 'ottos', 'oturs', 'otysk', 'otänk', 'outad', 'outar', 'outas',
'outat', 'ouzon', 'ouzos', 'ovala', 'ovals', 'ovalt', 'ovane', 'ovant', 'ovisa', 'ovist',
'oväns', 'ovärd', 'ovärt', 'oxars', 'oxeln', 'oxels', 'oxens', 'oxern', 'oxers', 'oxids',
'oxies', 'oxlar', 'oxrar', 'ozons', 'oåren', 'oåret', 'oäten', 'oävet', 'oävna', 'oävne',
'oömma', 'pablo', 'packs', 'padel', 'paffa', 'paffe', 'pafft', 'pagen', 'pager', 'pages',
'paisa', 'pajad', 'pajar', 'pajat', 'pajen', 'pajer', 'pakan', 'pakts', 'palau', 'palle',
'palls', 'palme', 'palms', 'palps', 'palts', 'pamps', 'pangs', 'panke', 'pankt', 'pants',
'papel', 'paper', 'papir', 'papps', 'parar', 'paras', 'paren', 'paret', 'parin', 'paris',
'parit', 'parka', 'parks', 'parma', 'parra', 'parsa', 'parta', 'parts', 'patch', 'patts',
'patwa', 'paula', 'pauls', 'pavan', 'pavas', 'pavor', 'paxad', 'paxar', 'paxas', 'paxat',
'paxen', 'paxet', 'payad', 'payar', 'payas', 'payat', 'peaka', 'peddo', 'peder', 'peggy',
'pehrs', 'pekar', 'pekas', 'pekat', 'peken', 'peket', 'pekka', 'pelad', 'pelar', 'pelas',
'pelat', 'pelle', 'pello', 'pemar', 'penar', 'penen', 'pengs', 'penne', 'pepps', 'perfa',
'perra', 'perus', 'pervo', 'pesto', 'pests', 'petad', 'petar', 'petas', 'petat', 'peter',
'petet', 'petra', 'petri', 'phnom', 'pialo', 'piens', 'piets', 'piffs', 'pigan', 'pigas',
'pigge', 'piggs', 'piggt', 'pigor', 'pikar', 'pikas', 'pikat', 'piken', 'pilar', 'pilen',
'pille', 'pilts', 'pimpa', 'pinad', 'pinar', 'pinas', 'pinat', 'pinig', 'pints', 'pions',
'pipan', 'pipas', 'pipen', 'piper', 'pipes', 'pipet', 'pipit', 'pipor', 'pirar', 'piren',
'pirer', 'pirrs', 'pisks', 'pisse', 'pists', 'pitch', 'piteå', 'pitts', 'pixel', 'pixla',
'pjexa', 'pjods', 'pjuck', 'pjåks', 'pjätt', 'pjäxa', 'plans', 'plant', 'plena', 'pligt',
'plins', 'plits', 'plogs', 'plojs', 'plupp', 'pluto', 'plyms', 'plång', 'plåns', 'plåts',
'pläds', 'pläga', 'plätt', 'plöjd', 'plöjs', 'plöjt', 'podds', 'poems', 'poets', 'point',
'pojks', 'polas', 'polat', 'polen', 'poler', 'polon', 'polos', 'pools', 'popen', 'poper',
'poren', 'porer', 'porrs', 'ports', 'posen', 'poser', 'poses', 'posts', 'potts', 'potät',
'prags', 'praia', 'prank', 'praoa', 'prats', 'predv', 'prega', 'prest', 'pride', 'print',
'profs', 'progg', 'provs', 'prydd', 'pryde', 'pryds', 'pryls', 'pryon', 'pryos', 'prytt',
'pråls', 'pråms', 'pränt', 'präst', 'pubar', 'pubba', 'puben', 'pucko', 'pucks', 'pudla',
'pugga', 'pukan', 'pukar', 'pukas', 'puken', 'pukes', 'pukor', 'pulad', 'pular', 'pulas',
'pulat', 'pults', 'puman', 'pumas', 'pumla', 'pumor', 'pundo', 'punds', 'pungs', 'pusha',
'pusts', 'putad', 'putar', 'putas', 'putat', 'putts', 'pynts', 'pyrde', 'pyret', 'pysas',
'pysen', 'pyser', 'pyses', 'pyset', 'pyste', 'pysts', 'pytts', 'påarp', 'påfve', 'påför',
'pågar', 'pågen', 'pågår', 'påkar', 'påken', 'påkom', 'pålar', 'pålen', 'påles', 'påryd',
'påsar', 'påsen', 'påses', 'påska', 'påsks', 'påtad', 'påtar', 'påtas', 'påtat', 'påtog',
'påvar', 'påven', 'påves', 'påvra', 'påvre', 'påöka', 'pälls', 'pälsa', 'pären', 'pärer',
'pärla', 'pärma', 'pärms', 'päron', 'pärta', 'pökad', 'pökar', 'pökas', 'pökat', 'pöken',
'pöket', 'pölar', 'pölas', 'pölat', 'pölen', 'pömsa', 'pöser', 'pöste', 'qatar', 'queer',
'quena', 'quito', 'qvaft', 'qvald', 'qvalm', 'qvals', 'qvalt', 'qvarn', 'qvart', 'qvast',
'qveds', 'qvick', 'qvida', 'qvids', 'qviga', 'qvint', 'qvist', 'qvitt', 'qväda', 'qväde',
'qväfd', 'qväft', 'qväka', 'qvälj', 'qväll', 'qväsa', 'rabat', 'rabba', 'racen', 'races',
'racet', 'racks', 'radad', 'radas', 'radat', 'raden', 'rader', 'ragge', 'raggs', 'ragna',
'ragun', 'ragus', 'raids', 'raisa', 'raise', 'rajab', 'rajon', 'rakad', 'rakan', 'rakar',
'rakas', 'rakat', 'rakel', 'rakor', 'ralls', 'ramar', 'ramas', 'ramat', 'ramen', 'ramis',
'ramms', 'rands', 'rangs', 'rankt', 'raoul', 'rapan', 'rapar', 'rapas', 'rapat', 'rapen',
'rapet', 'rapps', 'rappt', 'rasad', 'rasar', 'rasas', 'rasat', 'rasen', 'raser', 'raset',
'raske', 'raskt', 'rasps', 'rasse', 'rasts', 'ratad', 'ratar', 'ratas', 'ratat', 'ratel',
'ratts', 'rauks', 'raven', 'reade', 'reala', 'reals', 'realt', 'reans', 'reats', 'redas',
'redda', 'redde', 'reden', 'reder', 'redes', 'redet', 'regga', 'regin', 'regis', 'regns',
'reine', 'rejva', 'rejvs', 'rekad', 'rekar', 'rekas', 'rekat', 'reket', 'relän', 'reläs',
'relät', 'remin', 'renad', 'renal', 'renar', 'renas', 'renen', 'renin', 'reols', 'reors',
'repad', 'repan', 'repar', 'repas', 'repat', 'repen', 'repes', 'repet', 'repor', 'resan',
'resar', 'resas', 'resen', 'reser', 'reses', 'reset', 'resor', 'reste', 'rests', 'retad',
'retar', 'retat', 'retro', 'retts', 'revad', 'revan', 'revar', 'revas', 'revat', 'reven',
'revet', 'revor', 'revyn', 'revys', 'rheas', 'rhens', 'rhode', 'rhoen', 'rhoet', 'rhona',
'rhons', 'rhots', 'riade', 'rians', 'riats', 'ribos', 'ricke', 'ridas', 'riden', 'rider',
'ridit', 'ridom', 'ridån', 'ridås', 'riffs', 'rifva', 'rigas', 'riggs', 'rikas', 'riken',
'rikes', 'riket', 'rimbo', 'ringd', 'ringe', 'rings', 'ringt', 'rinit', 'riors', 'ripan',
'ripas', 'rippa', 'risad', 'risar', 'risas', 'risat', 'risen', 'riset', 'risks', 'riste',
'rists', 'ritad', 'ritar', 'ritas', 'ritat', 'riten', 'riter', 'rivan', 'riven', 'river',
'rives', 'rivet', 'rivit', 'rivna', 'rivne', 'rivor', 'riyal', 'roade', 'roama', 'roats',
'roben', 'rober', 'robes', 'robin', 'rocks', 'rodda', 'rodde', 'rodds', 'roffe', 'roger',
'rogga', 'rolfs', 'rolls', 'rombs', 'romen', 'romer', 'ronja', 'ronny', 'ropad', 'ropar',
'ropas', 'ropat', 'ropen', 'ropet', 'rosad', 'rosar', 'rosas', 'rosat', 'rosen', 'roset',
'rosor', 'rosts', 'rotar', 'rotas', 'rotat', 'roten', 'rotfl', 'rotts', 'rovan', 'rovas',
'roven', 'rovet', 'rovor', 'royal', 'rubbe', 'rubbs', 'ruben', 'rudan', 'rudas', 'rudde',
'rudor', 'ruffs', 'ruins', 'rukit', 'runan', 'runar', 'runas', 'runde', 'runes', 'runor',
'rusad', 'rusar', 'rusas', 'rusat', 'rusen', 'ruset', 'rusks', 'rutad', 'rutan', 'rutar',
'rutas', 'rutat', 'ruten', 'rutet', 'ruths', 'rutil', 'rutit', 'rutna', 'rutor', 'rutts',
'ruvad', 'ruvan', 'ruvar', 'ruvas', 'ruvat', 'ruvor', 'ryade', 'ryans', 'ryats', 'rycks',
'ryckt', 'rydal', 'rydar', 'ryden', 'ryggs', 'rykas', 'ryker', 'rykts', 'rylar', 'rylen',
'rymde', 'rymds', 'rymts', 'ryors', 'rysas', 'ryser', 'ryses', 'ryske', 'ryskt', 'ryste',
'rysts', 'rytas', 'ryter', 'rytes', 'rytet', 'rytms', 'råare', 'råast', 'rådas', 'rådda',
'rådde', 'råden', 'råder', 'rådes', 'rådet', 'rådge', 'rådig', 'rådis', 'råegg', 'råets',
'rågad', 'rågar', 'rågas', 'rågat', 'rågax', 'rågen', 'råges', 'råget', 'råhet', 'råkan',
'råkar', 'råkas', 'råkat', 'råkid', 'råkor', 'råmar', 'råmas', 'råmat', 'rånad', 'rånar',
'rånas', 'rånat', 'rånen', 'rånet', 'råneå', 'råris', 'rårna', 'råsop', 'råtta', 'råtts',
'råväv', 'räcks', 'räckt', 'rädde', 'räden', 'räder', 'rädes', 'rädit', 'rägns', 'räkan',
'räkas', 'räkor', 'rälen', 'räler', 'rälla', 'rände', 'ränks', 'ränns', 'ränts', 'rätad',
'rätan', 'rätar', 'rätas', 'rätat', 'rätte', 'rätts', 'rävar', 'räven', 'rödda', 'rödde',
'rödek', 'rödja', 'röets', 'rögad', 'rögar', 'rögas', 'rögat', 'röjas', 'röjda', 'röjde',
'röjer', 'röjes', 'röjts', 'rökas', 'rökat', 'röken', 'röker', 'rökes', 'rökta', 'rökte',
'rökts', 'rökås', 'rönas', 'rönen', 'röner', 'rönes', 'rönet', 'rönns', 'rönta', 'rönte',
'rönts', 'röran', 'röras', 'rörda', 'rörde', 'rören', 'röres', 'röret', 'röris', 'rörit',
'röror', 'rörts', 'rörös', 'rösen', 'röses', 'röset', 'rösts', 'rötad', 'rötan', 'rötar',
'rötas', 'rötat', 'röten', 'röter', 'rötes', 'rötor', 'rötte', 'rötts', 'rövad', 'rövar',
'rövas', 'rövat', 'röven', 'saabs', 'sabha', 'sabra', 'sades', 'sadhe', 'safar', 'safts',
'sagan', 'sagas', 'sagda', 'sagde', 'sagge', 'sagon', 'sagor', 'sagos', 'sagot', 'sagts',
'saint', 'sajna', 'sajts', 'sakad', 'sakar', 'sakas', 'sakat', 'saken', 'salad', 'salar',
'salas', 'salat', 'salem', 'salen', 'sally', 'salte', 'salts', 'samek', 'samen', 'samer',
'sames', 'samme', 'samoa', 'samos', 'sampi', 'sanaa', 'sanct', 'sands', 'sanka', 'sanks',
'sanne', 'santo', 'sapps', 'sarah', 'saras', 'sards', 'sarin', 'saris', 'sarra', 'sarre',
'sarvs', 'sassa', 'satar', 'saten', 'sates', 'satta', 'satte', 'satts', 'saven', 'saxad',
'saxar', 'saxas', 'saxat', 'saxen', 'scens', 'schwa', 'sedda', 'sedde', 'seden', 'seder',
'sedna', 'sejar', 'sejds', 'sejen', 'sejva', 'sekts', 'selar', 'seles', 'selet', 'selma',
'semin', 'semis', 'semko', 'senan', 'senas', 'sendj', 'senor', 'senza', 'seppo', 'serbs',
'serin', 'serri', 'setet', 'setta', 'setts', 'sexan', 'sexar', 'sexas', 'sexat', 'sexet',
'sexor', 'sexta', 'sexts', 'sexus', 'sfärs', 'shahs', 'shelf', 'shots', 'shows', 'shuno',
'siade', 'siarn', 'siats', 'sicks', 'sidan', 'sidar', 'sidas', 'sidat', 'sidor', 'siffe',
'sigge', 'signe', 'sigta', 'sigyn', 'sikar', 'siken', 'sikts', 'silad', 'silar', 'silas',
'silat', 'sills', 'silon', 'silor', 'silos', 'silts', 'simon', 'sinad', 'sinai', 'sinar',
'sinat', 'sinks', 'sinns', 'sippe', 'sipps', 'sippt', 'sirar', 'siras', 'siret', 'siris',
'sissa', 'sissi', 'siste', 'sisun', 'sisus', 'sitts', 'sjals', 'sjane', 'sjelf', 'sjoks',
'sjoxa', 'sjuan', 'sjuas', 'sjuds', 'sjuke', 'sjukt', 'sjung', 'sjunk', 'sjuor', 'sjåar',
'sjåas', 'sjåat', 'sjået', 'sjåig', 'sjåts', 'själf', 'själs', 'själv', 'sjöar', 'sjöbo',
'sjöds', 'sjöig', 'sjöng', 'sjönk', 'sjöns', 'skage', 'skaks', 'skalf', 'skals', 'skams',
'skaps', 'skapt', 'skars', 'skaru', 'skavd', 'skavs', 'skavt', 'skedd', 'skeds', 'skees',
'skeft', 'skene', 'skens', 'skets', 'skett', 'skeve', 'skevt', 'skhlm', 'skilj', 'skils',
'skilt', 'skins', 'skips', 'skirs', 'skirt', 'skits', 'skizz', 'skjuv', 'skodd', 'skogh',
'skogs', 'skojs', 'skole', 'skons', 'skoog', 'skors', 'skots', 'skoug', 'skovs', 'skref',
'skrek', 'skrid', 'skrif', 'skris', 'skrit', 'skriv', 'skrym', 'skråa', 'skrån', 'skrås',
'skråt', 'skräm', 'skrän', 'skräp', 'skröt', 'skröv', 'skums', 'skumt', 'skurs', 'skuti',
'skyar', 'skyen', 'skyll', 'skyls', 'skymd', 'skyms', 'skyns', 'skypa', 'skåda', 'skåla',
'skåle', 'skåls', 'skåne', 'skånk', 'skåpa', 'skåps', 'skåra', 'skåre', 'skåta', 'skälf',
'skäls', 'skälv', 'skäms', 'skäre', 'skärs', 'skärt', 'skölj', 'sköna', 'sköne', 'skönj',
'skönt', 'sköts', 'skött', 'skövs', 'slagn', 'slags', 'slagt', 'slajk', 'slake', 'slavs',
'slems', 'slemt', 'slets', 'slevs', 'slide', 'slika', 'slikt', 'slink', 'slipp', 'slite',
'slogs', 'sloke', 'sloms', 'sluga', 'sluge', 'slugg', 'slugt', 'sluks', 'sluts', 'slyet',
'slyns', 'slyts', 'slåar', 'slåna', 'slåns', 'slåss', 'slått', 'släck', 'slägt', 'släps',
'slöar', 'slöas', 'slöat', 'slöks', 'slörs', 'slöto', 'slöts', 'slött', 'smaks', 'smala',
'smale', 'small', 'smeds', 'smeks', 'smekt', 'smets', 'smidd', 'smids', 'smils', 'smits',
'smitt', 'smogs', 'smort', 'smurf', 'smygs', 'småby', 'småle', 'smått', 'smååt', 'småät',
'smädd', 'smäds', 'smält', 'smätt', 'smöga', 'smögs', 'smörs', 'snagg', 'snapa', 'sneda',
'snede', 'sneks', 'snett', 'snidd', 'snide', 'sniks', 'snikt', 'snoks', 'snors', 'snott',
'snuts', 'snyts', 'snåla', 'snåle', 'snålt', 'snårs', 'snäst', 'snäve', 'snävt', 'snöad',
'snöar', 'snöat', 'snöda', 'snöde', 'snöga', 'snögs', 'snöns', 'snöps', 'snöpt', 'snörs',
'snört', 'snöts', 'snött', 'sobra', 'sofia', 'sofie', 'softa', 'softe', 'sofva', 'sojan',
'sojas', 'solad', 'solas', 'solat', 'solds', 'solel', 'solen', 'solis', 'solna', 'solon',
'solos', 'solot', 'solvs', 'sonad', 'sonas', 'sonds', 'sonen', 'sonja', 'sopad', 'sopan',
'sopar', 'sopas', 'sopat', 'sopig', 'sopor', 'sopot', 'sopps', 'sorbs', 'sorgs', 'sorks',
'sorls', 'sorry', 'sorts', 'sotad', 'sotar', 'sotas', 'sotat', 'soten', 'sotet', 'south',
'sovas', 'soven', 'sover', 'soves', 'sovit', 'spads', 'spaet', 'spake', 'spaks', 'spakt',
'spall', 'spams', 'spans', 'spard', 'spars', 'spart', 'spats', 'spels', 'spelt', 'spiks',
'sponk', 'spons', 'spoon', 'spord', 'spors', 'spovs', 'spred', 'sprid', 'spyad', 'spyan',
'spyar', 'spyas', 'spyat', 'spydd', 'spyor', 'spytt', 'spådd', 'spåga', 'spåna', 'spång',
'spånk', 'spåns', 'spånt', 'spåra', 'spårs', 'spått', 'spädd', 'späde', 'späds', 'späks',
'späkt', 'spänt', 'spätt', 'spöad', 'spöar', 'spöas', 'spöat', 'spöet', 'spöna', 'spöns',
'spörj', 'spörs', 'spöts', 'stabs', 'stads', 'stags', 'stals', 'stams', 'stash', 'stats',
'statt', 'stavs', 'steen', 'stegs', 'steks', 'stekt', 'stela', 'stelt', 'stens', 'sthlm',
'stian', 'stias', 'stigs', 'stils', 'stims', 'stina', 'stink', 'stint', 'stior', 'stjäl',
'stoby', 'stodo', 'stods', 'stoet', 'stojs', 'stols', 'stona', 'stons', 'stops', 'stora',
'stors', 'stort', 'storå', 'stots', 'stova', 'stred', 'stryp', 'strån', 'strås', 'sträv',
'strök', 'ströp', 'strör', 'strös', 'ströv', 'stuks', 'stumt', 'stunk', 'stups', 'sture',
'stuvs', 'styft', 'styrd', 'styrk', 'styrs', 'styrt', 'styve', 'stådd', 'ståhl', 'ståls',
'ståts', 'stått', 'städa', 'städs', 'stäka', 'ställ', 'stämd', 'stäms', 'stämt', 'stäng',
'stänk', 'stäpp', 'stärd', 'stärk', 'stäva', 'stävs', 'stödd', 'stöde', 'stöds', 'stöps',
'stöpt', 'störd', 'störs', 'stöts', 'subjn', 'succé', 'sucks', 'sucre', 'sudan', 'suddi',
'sudds', 'sufsa', 'sugas', 'sugel', 'suger', 'suges', 'suget', 'sugit', 'sugna', 'sugne',
'sulan', 'sulas', 'sulor', 'sumor', 'sumps', 'sunda', 'sunde', 'sunds', 'sunes', 'sunne',
'supar', 'supas', 'supen', 'super', 'supes', 'supit', 'suran', 'surar', 'suras', 'surat',
'suror', 'surrs', 'surte', 'susar', 'susas', 'susat', 'suset', 'sushi', 'sussi', 'sutte',
'sutto', 'svaga', 'svage', 'svags', 'svagt', 'svald', 'svals', 'svalt', 'svams', 'svana',
'svann', 'svars', 'swart', 'sveas', 'svebs', 'svedd', 'sveds', 'sweet', 'svegs', 'sveks',
'svens', 'sveps', 'svept', 'sviks', 'svims', 'swing', 'svins', 'svits', 'svors', 'svyck',
'svåls', 'svång', 'svåra', 'svåre', 'svårt', 'svärj', 'svärs', 'sydda', 'sydde', 'sydow',
'sydön', 'sylar', 'sylas', 'sylat', 'sylen', 'sylfs', 'sylls', 'sylts', 'synad', 'synar',
'synat', 'synds', 'synen', 'syner', 'synes', 'synks', 'synth', 'synts', 'syrad', 'syran',
'syrar', 'syras', 'syrat', 'syres', 'syret', 'syror', 'syrup', 'sysop', 'sytts', 'såars',
'såbar', 'sådan', 'sådda', 'sådde', 'sådds', 'sådig', 'sådor', 'sådär', 'sågad', 'sågar',
'sågas', 'sågat', 'sågen', 'sågos', 'såhär', 'sålda', 'sålde', 'sålla', 'sålls', 'sålts',
'sångs', 'sånär', 'såpad', 'såpan', 'såpar', 'såpas', 'såpat', 'såpig', 'såpor', 'sårad',
'sårar', 'såras', 'sårat', 'såren', 'såret', 'sårig', 'såsar', 'såsas', 'såsat', 'såsen',
'såser', 'såsig', 'såsom', 'såsse', 'såtar', 'såten', 'såtts', 'såväl', 'säbys', 'säcks',
'säden', 'sägas', 'säger', 'säges', 'säjas', 'säjer', 'säkre', 'sälar', 'sälen', 'sälgs',
'säljs', 'sällt', 'sände', 'sänds', 'sängs', 'sänks', 'sänkt', 'sänna', 'sänts', 'särad',
'särar', 'säras', 'särat', 'särna', 'särös', 'säten', 'sätes', 'sätet', 'sätts', 'sävar',
'säven', 'säves', 'södre', 'sökan', 'sökas', 'söken', 'söker', 'sökes', 'söket', 'sökta',
'sökte', 'sökts', 'sölad', 'sölar', 'sölas', 'sölat', 'sömns', 'sönad', 'sönar', 'sönas',
'sönat', 'söner', 'sönka', 'sören', 'sörjd', 'sörjs', 'sörjt', 'sörru', 'sötad', 'sötar',
'sötas', 'sötat', 'sötis', 'söuls', 'sövas', 'sövda', 'sövde', 'söver', 'söves', 'sövts',
'tabun', 'tabus', 'tabut', 'tacks', 'tacos', 'tafla', 'tager', 'tages', 'taget', 'taggs',
'tagit', 'tagna', 'tagne', 'tagom', 'taiji', 'taino', 'tajta', 'tajte', 'taken', 'taket',
'takts', 'talad', 'talat', 'talda', 'talde', 'talds', 'talen', 'taler', 'tales', 'talet',
'talgs', 'talib', 'talls', 'talte', 'talts', 'tamam', 'tamde', 'tamts', 'tamul', 'tanan',
'tanas', 'tands', 'tanga', 'tanja', 'tanor', 'tants', 'tanum', 'tapan', 'tapas', 'tapen',
'taper', 'tapes', 'tapor', 'tapps', 'tarms', 'tarvs', 'tasks', 'tatta', 'tauon', 'taxan',
'taxar', 'taxas', 'taxat', 'taxen', 'taxin', 'taxis', 'taxon', 'taxor', 'tchad', 'teaks',
'teams', 'tebös', 'tedde', 'teens', 'teers', 'teets', 'tegar', 'tegen', 'tehuv', 'tejps',
'tekar', 'tekas', 'tekat', 'tekla', 'telge', 'teman', 'temas', 'temat', 'temla', 'tempi',
'temps', 'tenar', 'tendu', 'tenen', 'tenge', 'tenns', 'teorb', 'terms', 'terra', 'terån',
'tesen', 'teser', 'tesla', 'tests', 'tetum', 'teven', 'teves', 'texan', 'texas', 'texts',
'thage', 'theas', 'theos', 'thern', 'theta', 'thing', 'thora', 'thore', 'tians', 'tibet',
'tibia', 'tibro', 'ticks', 'tidan', 'tiden', 'tider', 'tierp', 'tigas', 'tiggs', 'tiggt',
'tigit', 'tigon', 'tikar', 'tiken', 'tilda', 'tilla', 'timad', 'timar', 'timas', 'timat',
'timrå', 'tinad', 'tinar', 'tinas', 'tinat', 'tings', 'tiols', 'tiors', 'tipps', 'tiran',
'tiras', 'tiror', 'tisha', 'titin', 'titti', 'tittj', 'titts', 'tived', 'tjaba', 'tjabo',
'tjats', 'tjejs', 'tjena', 'tjent', 'tjilå', 'tjoar', 'tjoas', 'tjoat', 'tjoet', 'tjogs',
'tjorv', 'tjuds', 'tjugi', 'tjurs', 'tjust', 'tjuts', 'tjuvs', 'tjyvs', 'tjåla', 'tjåls',
'tjörn', 'tjöta', 'tjöts', 'toans', 'toast', 'tobbe', 'tobos', 'tocke', 'todde', 'tofts',
'tofun', 'tofus', 'togan', 'togas', 'togen', 'togom', 'togor', 'toini', 'tokar', 'token',
'tokot', 'tokyo', 'tolks', 'tolla', 'tolle', 'tomas', 'tomen', 'tomer', 'tomma', 'tommy',
'tomts', 'tonad', 'tonar', 'tonas', 'tonat', 'tonen', 'toner', 'tonga', 'tonys', 'toors',
'topps', 'topsa', 'torah', 'toras', 'tords', 'tores', 'torgs', 'torne', 'torns', 'torps',
'torra', 'torre', 'torrt', 'torts', 'torup', 'torus', 'torvs', 'toryn', 'torys', 'tosar',
'tosen', 'tosse', 'totte', 'touch', 'tovas', 'toves', 'trade', 'trads', 'travs', 'trean',
'treas', 'treor', 'trier', 'trims', 'trint', 'trion', 'trior', 'trios', 'trivs', 'trixa',
'trodd', 'trofé', 'troja', 'trola', 'trons', 'trops', 'trott', 'truts', 'tryts', 'tråda',
'trådd', 'tråds', 'trågs', 'tråka', 'tråla', 'tråls', 'tråna', 'trång', 'trått', 'träad',
'träar', 'träas', 'träat', 'trädd', 'träds', 'träet', 'träls', 'träts', 'trätt', 'tröck',
'tröga', 'tröge', 'trögt', 'tröts', 'tsadi', 'tsars', 'tuban', 'tubas', 'tuben', 'tuber',
'tubor', 'tuend', 'tuffe', 'tufft', 'tujan', 'tujas', 'tujor', 'tulls', 'tumba', 'tunar',
'tunen', 'tunet', 'tunge', 'tungt', 'tunis', 'tunne', 'tupel', 'tupps', 'turar', 'turat',
'turen', 'turer', 'tures', 'turid', 'turin', 'turks', 'turné', 'turre', 'turrä', 'tutad',
'tutan', 'tutar', 'tutas', 'tutat', 'tuten', 'tutet', 'tutor', 'tutte', 'tutun', 'tuvan',
'tuvas', 'tuvin', 'tuvor', 'tvagd', 'tvags', 'tvagt', 'tvang', 'tvann', 'tweed', 'tveks',
'twerk', 'twink', 'tvinn', 'twist', 'tvogs', 'tvåan', 'tvåas', 'tvådd', 'tvåla', 'tvåls',
'tvång', 'tvåor', 'tvått', 'tväre', 'tyade', 'tycks', 'tyckt', 'tydas', 'tydda', 'tydde',
'tyder', 'tydes', 'tygen', 'tyger', 'tyget', 'tyket', 'tykna', 'tykne', 'tykos', 'tylls',
'tymin', 'tynar', 'tynat', 'tyngs', 'tyngt', 'typen', 'typer', 'tyras', 'tyske', 'tysks',
'tyskt', 'tyste', 'tytts', 'tåben', 'tågan', 'tågar', 'tågas', 'tågat', 'tågen', 'tåget',
'tågig', 'tågom', 'tågor', 'tålas', 'tålde', 'tåled', 'tåles', 'tålig', 'tålts', 'tålös',
'tånge', 'tångs', 'tåpaj', 'tåpig', 'tårad', 'tårar', 'tåras', 'tårem', 'tåren', 'tårig',
'tårna', 'tårta', 'tåsko', 'tåtel', 'täbys', 'täcks', 'täljd', 'täljs', 'täljt', 'tälts',
'tämde', 'tämjd', 'tämjs', 'tämjt', 'tämts', 'tände', 'tänds', 'tänjd', 'tänjs', 'tänjt',
'tänks', 'tänkt', 'tänts', 'täpps', 'täras', 'tärda', 'tärde', 'tärts', 'täten', 'täter',
'töade', 'töats', 'töcka', 'töets', 'töjet', 'tölps', 'tölta', 'tölts', 'tömda', 'tömde',
'tömts', 'tönts', 'töres', 'tösen', 'töser', 'tövad', 'tövar', 'tövas', 'tövat', 'ubåts',
'uddar', 'udden', 'uddes', 'uffes', 'ufona', 'ufons', 'ufots', 'ufvar', 'ufven', 'ugnad',
'ugnar', 'ugnas', 'ugnat', 'ugnen', 'uigur', 'ullas', 'ullen', 'ulnar', 'ulric', 'ulrik',
'ulvar', 'ulvat', 'ulven', 'umami', 'umbar', 'umbär', 'umeås', 'undör', 'ungar', 'ungas',
'ungen', 'unges', 'unika', 'unike', 'unikt', 'unket', 'unkne', 'unnad', 'unnar', 'unnas',
'unnat', 'unsen', 'unset', 'unsts', 'unära', 'unärt', 'urals', 'urans', 'urdun', 'urdus',
'urean', 'urens', 'urets', 'urins', 'urnan', 'urnas', 'urnor', 'uselt', 'uskan', 'uskas',
'uskor', 'utahs', 'utbad', 'utbyt', 'utdöm', 'utfil', 'utgav', 'utger', 'utges', 'utgiv',
'utgår', 'utgör', 'utgöt', 'uthyr', 'utkom', 'utlys', 'utläs', 'utlöp', 'utlös', 'utmät',
'utral', 'utred', 'utrer', 'utret', 'utrym', 'utrön', 'utser', 'utses', 'utsåg', 'uttar',
'uttas', 'uttog', 'uttyd', 'uttöm', 'uvars', 'uvens', 'vabba', 'vadad', 'vadar', 'vadas',
'vadat', 'vaden', 'vader', 'vadet', 'vador', 'vaduz', 'vafan', 'vaffa', 'vaffe', 'vagns',
'waila', 'vajar', 'vajas', 'vajat', 'wajla', 'vakad', 'vakan', 'vakar', 'vakas', 'vakat',
'vakes', 'vaket', 'vakne', 'vakor', 'vakts', 'valan', 'valar', 'valas', 'valbo', 'valda',
'valde', 'vales', 'wales', 'valet', 'valid', 'valin', 'valks', 'valle', 'valls', 'valor',
'valps', 'valts', 'valvs', 'vamps', 'vanan', 'vanas', 'vanda', 'vande', 'vanen', 'vaner',
'vanja', 'vanns', 'vanor', 'vants', 'varar', 'varat', 'warda', 'vardt', 'wardt', 'vardå',
'varen', 'varet', 'varfs', 'vargs', 'varit', 'warit', 'varma', 'varme', 'varmt', 'varor',
'varps', 'varvs', 'vasar', 'vasas', 'vasen', 'vaser', 'vases', 'vassa', 'vasse', 'vasst',
'watts', 'vaxad', 'vaxar', 'vaxas', 'vaxat', 'vaxen', 'vaxer', 'vaxet', 'webbs', 'weber',
'vecks', 'veden', 'vedro', 'vedum', 'vegan', 'vegas', 'vegby', 'vejpa', 'vekar', 'vekas',
'veken', 'vekes', 'velad', 'velas', 'velat', 'velen', 'veles', 'venar', 'venda', 'wende',
'venen', 'vener', 'venne', 'venol', 'venus', 'vepan', 'vepas', 'vepor', 'veras', 'verbs',
'verde', 'verke', 'verks', 'verld', 'vervs', 'vesan', 'vesas', 'vespa', 'vesta', 'vetat',
'veten', 'vetes', 'vetet', 'veton', 'vetos', 'vetot', 'vetts', 'vevad', 'vevan', 'vevar',
'vevas', 'vevat', 'veven', 'vevor', 'vexel', 'whigs', 'whina', 'whist', 'vians', 'vibbs',
'wicca', 'vicke', 'vicks', 'vidar', 'vidds', 'viden', 'vides', 'videt', 'wiens', 'viets',
'vigas', 'vigde', 'viger', 'viggo', 'viggs', 'wight', 'vigts', 'vikar', 'wikar', 'vikas',
'wikas', 'wikat', 'viken', 'viker', 'vikes', 'viket', 'wikin', 'wikis', 'vikit', 'vikna',
'vikte', 'vikts', 'vilad', 'vilan', 'vilar', 'vilas', 'vilat', 'vilda', 'wilda', 'vildt',
'wilja', 'vilka', 'ville', 'wille', 'villi', 'vilma', 'wilma', 'vilor', 'vilts', 'vinds',
'viner', 'vinet', 'vinit', 'vinks', 'vinns', 'viols', 'viors', 'vipan', 'wipea', 'vipor',
'virad', 'viral', 'virar', 'wirar', 'viras', 'virat', 'wiren', 'vireo', 'wires', 'virre',
'wirth', 'visad', 'visan', 'visar', 'visas', 'visat', 'visby', 'wisby', 'visen', 'vises',
'viset', 'visky', 'visor', 'visps', 'vissa', 'vitan', 'vitas', 'viten', 'vites', 'vitet',
'vitor', 'vitts', 'vitås', 'vivan', 'viven', 'vivet', 'vlogg', 'vobba', 'vogue', 'wokad',
'wokar', 'wokas', 'wokat', 'woken', 'wolof', 'volts', 'volvo', 'voter', 'vraks', 'vrala',
'wraps', 'vreda', 'vreds', 'vrena', 'vresa', 'vreta', 'vrets', 'vrett', 'vrids', 'vrils',
'vråls', 'vråns', 'vrårs', 'vräka', 'vräks', 'vräkt', 'vräng', 'vulen', 'vulet', 'wulff',
'vulgo', 'vulna', 'vulne', 'vunna', 'vunne', 'vurms', 'vurre', 'vurti', 'vuxet', 'vuxit',
'vuxna', 'vuxne', 'vyers', 'vådan', 'vådas', 'våden', 'våder', 'vådis', 'vådor', 'vågad',
'vågar', 'vågas', 'vågat', 'vågen', 'vågig', 'vågor', 'wåjnå', 'vålda', 'vålds', 'vålla',
'vålma', 'vånda', 'vånga', 'vångs', 'vånna', 'våpen', 'våpet', 'våpig', 'våran', 'vårar',
'våras', 'vårat', 'vårby', 'vårda', 'vårds', 'våren', 'vårig', 'våris', 'vårså', 'vårta',
'väcks', 'väddö', 'väfde', 'väfts', 'väfva', 'vägad', 'vägar', 'vägas', 'vägat', 'vägde',
'vägen', 'väger', 'väges', 'väggs', 'vägts', 'väjas', 'väjde', 'väjer', 'välas', 'välds',
'väljs', 'välls', 'vällt', 'välte', 'välts', 'välvs', 'välvt', 'vämjs', 'vämts', 'vände',
'vänds', 'vänge', 'vänjs', 'vänna', 'vänts', 'värda', 'wärde', 'värds', 'värjd', 'värjo',
'värjs', 'värjt', 'värks', 'värkt', 'värmd', 'värms', 'värmt', 'värns', 'värps', 'värpt',
'värvs', 'väsas', 'väsby', 'väser', 'väses', 'väste', 'västs', 'vätan', 'vätas', 'väter',
'vätes', 'vätet', 'vätta', 'vätts', 'vätös', 'vävar', 'vävas', 'vävda', 'vävde', 'väven',
'väver', 'väves', 'vävts', 'växas', 'växer', 'växes', 'växjö', 'växta', 'växte', 'växts',
'völva', 'wörka', 'vörts', 'xerox', 'xhosa', 'xylen', 'yahoo', 'yatzy', 'yawls', 'yells',
'yemen', 'yenen', 'ylade', 'ylens', 'ylets', 'ylles', 'yllet', 'ylvas', 'ympad', 'ympar',
'ympas', 'ympat', 'ympen', 'yngve', 'ynkar', 'ynkas', 'ynkat', 'yoloa', 'yorks', 'yppad',
'yppar', 'yppas', 'yppat', 'yrade', 'yrans', 'yrare', 'yrast', 'yrats', 'yrkad', 'yrkar',
'yrkas', 'yrkat', 'yrken', 'yrkes', 'yrket', 'yrors', 'yrsas', 'ystad', 'ystar', 'ystas',
'ystat', 'ystra', 'ystre', 'ytans', 'ytors', 'yupik', 'yvats', 'yvdes', 'yviga', 'yvige',
'yvigt', 'yxade', 'yxans', 'yxats', 'yxlan', 'yxman', 'yxors', 'zacke', 'zaire', 'zajin',
'zaras', 'zayin', 'zests', 'zetan', 'zetas', 'zetat', 'zinks', 'zippa', 'zomfg', 'zonen',
'zoner', 'zooet', 'zoona', 'zoons', 'zoots', 'zouks', 'zulun', 'zulus', 'åarna', 'åberg',
'åbobo', 'åbons', 'åbors', 'ådans', 'ådern', 'åders', 'ådors', 'ådran', 'ådrar', 'ådras',
'ådrog', 'ådror', 'ågren', 'åhörd', 'åhörs', 'åhört', 'åkarn', 'åkarp', 'åkens', 'åkern',
'åkers', 'åkets', 'åkrar', 'åktes', 'ålade', 'ålagd', 'ålagt', 'åland', 'ålars', 'ålats',
'åleds', 'ålems', 'ålens', 'åligg', 'ålågs', 'ålägg', 'åmade', 'åmars', 'åmbrå', 'åmens',
'åmvis', 'åmåls', 'ångad', 'ångan', 'ångar', 'ångas', 'ångat', 'ånges', 'ångor', 'årans',
'årens', 'årets', 'århus', 'årors', 'årsta', 'årtan', 'årtas', 'årtor', 'åryds', 'åsarp',
'åsars', 'åsbro', 'åseda', 'åsedd', 'åsele', 'åsens', 'åsett', 'åsigt', 'åskan', 'åskar',
'åskas', 'åskat', 'åskor', 'åslög', 'åsnan', 'åsnas', 'åsnor', 'åstol', 'åsyns', 'åsågs',
'åtags', 'åtals', 'åteln', 'åtels', 'åtgår', 'åtlar', 'åtlas', 'åtlat', 'åtlyd', 'åtogs',
'åtorp', 'åtrar', 'åtras', 'åtrat', 'åtrån', 'åtrår', 'åtrås', 'åttan', 'åttas', 'åttor',
'åvidö', 'äckel', 'äckla', 'ädelt', 'ädlas', 'ädles', 'äfven', 'ägans', 'ägare', 'ägarn',
'ägdes', 'äggar', 'äggas', 'äggat', 'äggen', 'ägget', 'äggul', 'ägnad', 'ägnar', 'ägnas',
'ägnat', 'ägors', 'äktad', 'äktar', 'äktas', 'äktat', 'äldre', 'äldst', 'älgar', 'älgas',
'älgat', 'älgen', 'älgko', 'älska', 'ältad', 'ältan', 'ältar', 'ältas', 'ältat', 'älvan',
'älvar', 'älvas', 'älven', 'älvor', 'ämbar', 'ämlig', 'ämnad', 'ämnar', 'ämnas', 'ämnat',
'ämnen', 'ämnes', 'ämnet', 'ändad', 'ändan', 'ändar', 'ändas', 'ändat', 'änden', 'änder',
'ändes', 'ändor', 'ändra', 'ändån', 'ängar', 'ängel', 'ängen', 'änger', 'änkan', 'änkas',
'änkor', 'ännen', 'ännes', 'ännet', 'äntra', 'äpple', 'ärade', 'ärans', 'ärats', 'ärbar',
'ärgen', 'ärgig', 'äriln', 'ärils', 'äring', 'ärlan', 'ärlas', 'ärlbo', 'ärlig', 'ärlor',
'ärmar', 'ärmen', 'ärnad', 'ärnar', 'ärnas', 'ärnat', 'ärors', 'ärrad', 'ärras', 'ärren',
'ärret', 'ärrig', 'ärtan', 'ärtas', 'ärten', 'ärter', 'ärtig', 'ärtor', 'ärvas', 'ärvda',
'ärvde', 'ärver', 'ärvts', 'äskad', 'äskan', 'äskar', 'äskas', 'äskat', 'äskor', 'ässen',
'ässet', 'ässja', 'ätare', 'ätbar', 'ätits', 'ätlig', 'ätran', 'ätten', 'ätter', 'ävjan',
'ävjas', 'ävjig', 'ävlan', 'ävlas', 'äxing', 'öarna', 'öberg', 'öbons', 'öbors', 'öddes',
'ödela', 'ödems', 'ödena', 'ödens', 'ödets', 'ödlan', 'ödlas', 'ödlor', 'öfrig', 'öfver',
'öfwer', 'ögats', 'öglad', 'öglan', 'öglar', 'öglas', 'öglat', 'öglor', 'ögnad', 'ögnar',
'ögnas', 'ögnat', 'ögons', 'öhman', 'ökade', 'ökats', 'ökens', 'ökets', 'öknar', 'öknen',
'ökänt', 'ölade', 'öland', 'ölats', 'ölens', 'ölers', 'ölets', 'ölrap', 'ömkad', 'ömkar',
'ömkas', 'ömkat', 'ömmad', 'ömmar', 'ömmas', 'ömmat', 'ömsad', 'ömsar', 'ömsas', 'ömsat',
'önamn', 'öppet', 'öppne', 'örats', 'örbys', 'örena', 'örens', 'örets', 'örjan', 'örlob',
'örlog', 'örnar', 'örnen', 'örona', 'örons', 'örsjö', 'örten', 'örter', 'öråds', 'ösels',
'ösets', 'ösmos', 'östat', 'östen', 'östes', 'östre', 'övade', 'övats'];

        
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
            wa = "gameState",
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
