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
            "@short_link": "t.ly/Ordlek",
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
'mölla', 'mönja', 'mörda', 'mörja', 'mörka', 'mössa', 'mötas', 'müsli', 'nabob', 'nacka',
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
Ta=['abbén', 'ackes', 'adaks', 'adams', 'adeln', 'adels', 'adlad', 'adlar', 'adlas', 'adlat',
'adolf', 'affin', 'agade', 'agans', 'agata', 'agats', 'agdas', 'agget', 'agnad', 'agnar',
'agnas', 'agnat', 'agnen', 'agnes', 'agnet', 'agors', 'ainas', 'airen', 'aktad', 'aktar',
'aktas', 'aktat', 'akten', 'akuta', 'alars', 'albas', 'albin', 'albys', 'alens', 'alets',
'alfan', 'alfta', 'algen', 'alger', 'algot', 'alice', 'allan', 'allas', 'allen', 'allén',
'allés', 'allom', 'almar', 'almas', 'almen', 'alnar', 'alnen', 'alnös', 'alpen', 'alper',
'altar', 'alten', 'alter', 'alvas', 'alven', 'alver', 'alvin', 'ammad', 'amman', 'ammar',
'ammas', 'ammat', 'ammor', 'ampla', 'ampra', 'anade', 'anala', 'analt', 'anans', 'anats',
'andan', 'andar', 'anden', 'andes', 'aneby', 'anför', 'angav', 'anger', 'anges', 'angår',
'angör', 'anita', 'ankan', 'ankom', 'ankor', 'anmäl', 'annas', 'annat', 'annes', 'annie',
'anods', 'anors', 'anred', 'ansad', 'ansar', 'ansas', 'ansat', 'anser', 'anses', 'ansåg',
'ansök', 'antag', 'antar', 'antas', 'antog', 'anton', 'antyd', 'apade', 'apans', 'apats',
'apeln', 'aplar', 'apors', 'arabs', 'arbrå', 'arean', 'arens', 'areor', 'arets', 'argas',
'arges', 'arian', 'arias', 'arild', 'arior', 'arken', 'arket', 'arlöv', 'armar', 'armen',
'armén', 'armés', 'arnes', 'aroms', 'artad', 'artar', 'artat', 'arten', 'arter', 'artur',
'arven', 'arvet', 'arvid', 'asars', 'asens', 'asets', 'asien', 'askad', 'askan', 'askar',
'askas', 'askat', 'asken', 'askim', 'aspar', 'aspen', 'aspås', 'astas', 'astra', 'asyls',
'atens', 'aulan', 'aulas', 'auran', 'auras', 'avböj', 'aveln', 'avels', 'avena', 'avens',
'avets', 'avför', 'avgav', 'avger', 'avges', 'avgår', 'avgör', 'avgöt', 'aviat', 'avier',
'avigt', 'avins', 'avkyl', 'avlad', 'avlar', 'avlas', 'avled', 'avlid', 'avlys', 'avläs',
'avlös', 'avoga', 'avoge', 'avogt', 'avres', 'avråd', 'avser', 'avses', 'avsåg', 'avsök',
'avtar', 'avtog', 'avvek', 'axeln', 'axels', 'axens', 'axets', 'axlad', 'axlar', 'axlat',
'babyn', 'badad', 'badar', 'badas', 'badat', 'baden', 'badet', 'bahrs', 'bakad', 'bakar',
'bakas', 'bakat', 'baken', 'baket', 'balar', 'balen', 'baler', 'balks', 'banad', 'banar',
'banas', 'banat', 'bands', 'banen', 'banks', 'banor', 'baras', 'baren', 'barer', 'barks',
'barms', 'barns', 'barrs', 'basat', 'basel', 'basen', 'baser', 'bebor', 'bebos', 'bedda',
'bedöm', 'begav', 'beger', 'begår', 'begås', 'behån', 'behås', 'beiga', 'beigt', 'bekom',
'bells', 'belys', 'bemöt', 'benan', 'benar', 'benas', 'benat', 'benen', 'benet', 'bengt',
'benin', 'benor', 'bered', 'berga', 'bergs', 'berit', 'beror', 'berta', 'berts', 'berör',
'beser', 'beses', 'beskt', 'besåg', 'betad', 'betan', 'betar', 'betas', 'betat', 'beten',
'beter', 'betes', 'betet', 'betog', 'betor', 'betts', 'betyd', 'bidar', 'bidat', 'bidde',
'biens', 'biets', 'biffs', 'bikts', 'bilan', 'bilar', 'bilas', 'bilds', 'bilen', 'bilor',
'binas', 'binds', 'bions', 'bitar', 'biten', 'biter', 'bitet', 'bitit', 'bitna', 'bjuds',
'bjuvs', 'bjöds', 'bleks', 'blekt', 'bleve', 'blide', 'blidö', 'blint', 'blitt', 'blods',
'blont', 'blyet', 'blyga', 'blyge', 'blygs', 'blygt', 'blåna', 'blåsa', 'blåst', 'blått',
'blöde', 'blöds', 'blött', 'bocks', 'bodar', 'bodas', 'bodde', 'boden', 'bodil', 'boens',
'boers', 'boets', 'bogar', 'bogen', 'bohus', 'bojan', 'bojas', 'bojen', 'bojor', 'bokad',
'bokar', 'bokas', 'bokat', 'bolls', 'bombs', 'bonar', 'bonas', 'bonat', 'borde', 'bords',
'boret', 'borgs', 'borna', 'borne', 'borås', 'bosse', 'botad', 'botar', 'botas', 'botat',
'boten', 'bovar', 'boven', 'boxad', 'boxar', 'boxat', 'boxen', 'bragt', 'brann', 'brast',
'braås', 'breds', 'brett', 'brita', 'broar', 'broby', 'brors', 'bruds', 'bruks', 'bruna',
'bryet', 'brygg', 'bryns', 'brynt', 'bryts', 'brytt', 'bråck', 'bråda', 'bråka', 'bråte',
'brått', 'bräck', 'bräkt', 'bränd', 'bränn', 'bränt', 'bröts', 'buade', 'buats', 'buden',
'budet', 'buffé', 'bugar', 'bugas', 'bugat', 'bukar', 'buken', 'bulan', 'bulor', 'burad',
'burar', 'buras', 'burat', 'buren', 'buret', 'bureå', 'burit', 'burma', 'burna', 'busar',
'busat', 'busen', 'buset', 'byars', 'bybon', 'bybor', 'bybos', 'byggd', 'byggs', 'byggt',
'byken', 'byket', 'byrån', 'byrås', 'byske', 'bytas', 'byten', 'byter', 'bytes', 'bytet',
'bytte', 'bytts', 'byxan', 'byxor', 'bådar', 'bådas', 'bådat', 'bågar', 'bågen', 'båges',
'bågig', 'bågna', 'bålda', 'bålen', 'bålet', 'bårar', 'båren', 'båsen', 'båset', 'båtar',
'båtat', 'båten', 'bäcks', 'bände', 'bänds', 'bänks', 'bänts', 'bäras', 'bären', 'bäres',
'bäret', 'bästa', 'bäste', 'bävar', 'bävas', 'bävat', 'böjas', 'böjda', 'böjde', 'böjer',
'böjts', 'bökar', 'bökas', 'bökat', 'bölar', 'bölat', 'bönan', 'bönar', 'bönas', 'bönat',
'bönen', 'böner', 'bönor', 'börje', 'bötar', 'bötas', 'bötat', 'cafés', 'cafét', 'carin',
'carls', 'carte', 'chefs', 'chica', 'chict', 'chile', 'chili', 'claes', 'conny', 'costa',
'cubas', 'cupen', 'cuper', 'curts', 'dagar', 'dagen', 'dagny', 'dahls', 'dalar', 'dalas',
'dalat', 'dalby', 'dalen', 'dalum', 'damen', 'damer', 'danar', 'danas', 'danat', 'danka',
'datan', 'datas', 'david', 'degar', 'degen', 'dejes', 'delar', 'delas', 'delat', 'delen',
'denna', 'depån', 'dessa', 'detta', 'diade', 'diats', 'digra', 'dikar', 'dikas', 'dikat',
'diken', 'dikes', 'diket', 'dikts', 'dines', 'disen', 'diser', 'diset', 'ditin', 'ditut',
'divas', 'divor', 'djupa', 'djupt', 'djura', 'djurs', 'dofts', 'doken', 'doket', 'dolda',
'dolde', 'dolts', 'domar', 'domen', 'donar', 'donat', 'donen', 'donet', 'donsö', 'dopad',
'dopar', 'dopas', 'dopat', 'dopen', 'dopet', 'dosan', 'dosas', 'dosen', 'doser', 'dosor',
'drack', 'drags', 'drevs', 'drick', 'drivs', 'drogs', 'drygt', 'drypt', 'dråps', 'dråsa',
'dråse', 'drämd', 'dräms', 'drämt', 'dränk', 'dräps', 'dräpt', 'dröjt', 'drömd', 'dröms',
'drömt', 'duade', 'dugde', 'duger', 'dukad', 'dukar', 'dukas', 'duken', 'dumme', 'dunen',
'dunet', 'duons', 'duvan', 'duvas', 'duved', 'duvet', 'duvor', 'dygns', 'dyker', 'dykte',
'dynan', 'dynen', 'dyner', 'dynor', 'dyrks', 'dyrön', 'dåden', 'dådet', 'dådra', 'dålig',
'dånar', 'dånat', 'dånet', 'dårar', 'dåren', 'dåres', 'dåsar', 'dåsat', 'dåsig', 'dåtid',
'däcks', 'dälds', 'dängs', 'dängt', 'därin', 'dästa', 'dävet', 'dödad', 'dödar', 'dödas',
'dödat', 'döden', 'dödes', 'döljs', 'dömas', 'dömda', 'dömde', 'dömer', 'dömes', 'dömts',
'döpas', 'döper', 'döpes', 'döpta', 'döpte', 'döpts', 'dörrs', 'ebbar', 'ebbas', 'ebbat',
'edane', 'eddan', 'edens', 'eders', 'edert', 'edets', 'edith', 'edits', 'edman', 'edvin',
'egala', 'egalt', 'eggad', 'eggar', 'eggas', 'eggat', 'eggen', 'egots', 'einar', 'ekade',
'ekans', 'ekars', 'ekeby', 'ekens', 'ekerö', 'ekets', 'eklöf', 'ekona', 'ekons', 'ekors',
'ekots', 'eksjö', 'elaka', 'elake', 'elakt', 'eldad', 'eldar', 'eldas', 'eldat', 'elden',
'elens', 'elevs', 'elfel', 'elins', 'ellas', 'ellen', 'ellös', 'elmer', 'elofs', 'elsas',
'elsie', 'emils', 'emmas', 'emuer', 'emuns', 'enade', 'enars', 'enats', 'enens', 'eniga',
'enigt', 'enkle', 'entré', 'enögt', 'eonen', 'eoner', 'epoks', 'erans', 'erfar', 'erfor',
'erics', 'erika', 'eriks', 'ernst', 'ernår', 'ernås', 'eskil', 'eslöv', 'essen', 'esset',
'essän', 'essäs', 'esten', 'etern', 'etsad', 'etsar', 'etsas', 'etsat', 'ettan', 'ettas',
'ettor', 'evert', 'eviga', 'evige', 'evigt', 'facks', 'facto', 'fadda', 'fagra', 'fagre',
'falls', 'falun', 'fanan', 'fanas', 'fanns', 'fanor', 'faran', 'faras', 'farit', 'farms',
'faror', 'fasar', 'fasat', 'faser', 'fasor', 'faten', 'fatet', 'fauns', 'feers', 'fegen',
'fejad', 'fejar', 'fejas', 'fejat', 'felad', 'felar', 'felat', 'felen', 'felet', 'fenan',
'fenas', 'fenor', 'ficks', 'fikar', 'fikat', 'filar', 'filat', 'filen', 'filén', 'filer',
'filés', 'filip', 'films', 'fimps', 'finge', 'finja', 'finns', 'fints', 'firad', 'firar',
'firas', 'firat', 'fixad', 'fixar', 'fixas', 'fixat', 'fjuns', 'flens', 'floby', 'floda',
'flygs', 'flyts', 'flådd', 'flåsa', 'flått', 'fläks', 'flögs', 'fnyst', 'foajé', 'fogad',
'fogar', 'fogas', 'fogat', 'fogen', 'folke', 'folks', 'foran', 'foras', 'forms', 'forna',
'forne', 'fornt', 'foror', 'foten', 'fotos', 'fotot', 'fotös', 'freds', 'freja', 'freud',
'friar', 'frias', 'friat', 'frida', 'frids', 'fritt', 'froda', 'fromt', 'fruar', 'fruns',
'fråga', 'fräls', 'fräna', 'fränt', 'fräst', 'fräts', 'frätt', 'fröen', 'fröer', 'fröet',
'fröna', 'fröns', 'frövi', 'fugan', 'fugas', 'fugor', 'fukts', 'fulla', 'fulle', 'fullt',
'funna', 'furan', 'furas', 'fylls', 'fyllt', 'fynds', 'fyran', 'fyrar', 'fyras', 'fyrat',
'fyren', 'fyror', 'fågel', 'fåker', 'fålar', 'fålen', 'fåles', 'fålla', 'fånar', 'fånen',
'fånes', 'fånet', 'fånga', 'fånge', 'fånig', 'fårad', 'fåran', 'fårat', 'fårbo', 'fåren',
'fåret', 'fårig', 'fåror', 'fåtal', 'fåtts', 'fäder', 'fäets', 'fälgs', 'fälld', 'fälls',
'fällt', 'fälts', 'fänas', 'färde', 'färma', 'färmt', 'fästs', 'födan', 'födas', 'födda',
'födde', 'föder', 'födes', 'fölen', 'fölet', 'följs', 'följt', 'föras', 'förda', 'förde',
'fören', 'föres', 'föret', 'förre', 'förts', 'föröd', 'fösas', 'föser', 'föses', 'fösta',
'föste', 'fösts', 'fötts', 'gabon', 'gager', 'gaget', 'galan', 'galer', 'galet', 'galit',
'galna', 'galne', 'galor', 'gamar', 'gamen', 'gamla', 'gamle', 'gapar', 'gapas', 'gapat',
'gapen', 'gapet', 'gasar', 'gasas', 'gasat', 'gasen', 'gaser', 'gatan', 'gator', 'gelén',
'geler', 'gelés', 'gelet', 'gemet', 'gemla', 'genar', 'genat', 'genen', 'gener', 'georg',
'gerda', 'gerds', 'gerts', 'geten', 'getts', 'ghana', 'gicks', 'gideå', 'gifts', 'gimos',
'ginge', 'girar', 'girat', 'giren', 'girot', 'giver', 'gives', 'givit', 'givna', 'gjort',
'gjuts', 'glade', 'glava', 'glest', 'glott', 'gläds', 'gläns', 'glöds', 'glömd', 'glöms',
'glömt', 'glött', 'gnagt', 'gnarp', 'gneds', 'gnids', 'gnoms', 'gnott', 'gnuer', 'gnuns',
'gnytt', 'godan', 'godas', 'godes', 'golvs', 'goter', 'grads', 'grams', 'grant', 'granö',
'gravs', 'gravt', 'grens', 'greps', 'greta', 'grips', 'grott', 'grova', 'grove', 'grovt',
'grunt', 'gryns', 'gryts', 'grytt', 'gråal', 'gråbo', 'gråna', 'gråta', 'gråts', 'grått',
'grämt', 'gräts', 'grävd', 'grävs', 'grävt', 'gröna', 'gröps', 'gröpt', 'gudar', 'guden',
'gulan', 'gulor', 'gurun', 'gurus', 'gusum', 'gylfs', 'gånga', 'gångs', 'gårds', 'gåsen',
'gåtan', 'gåtor', 'gåtts', 'gåvan', 'gåvor', 'gälar', 'gälen', 'gälls', 'gällt', 'gällö',
'gängs', 'gärds', 'gästs', 'gävle', 'gödas', 'gödda', 'gödde', 'göder', 'gökar', 'göken',
'gölar', 'gölen', 'gömda', 'gömde', 'gömts', 'göran', 'göras', 'göres', 'gösar', 'gösen',
'gösta', 'götar', 'götas', 'göten', 'göter', 'götes', 'götts', 'habos', 'hagar', 'hagen',
'hages', 'haiti', 'hajar', 'hajat', 'hajen', 'hajom', 'hakad', 'hakan', 'hakar', 'hakas',
'hakat', 'haken', 'hakes', 'hakor', 'halls', 'halms', 'halte', 'halvt', 'hamns', 'hanar',
'handa', 'hanen', 'hanes', 'hanna', 'hanns', 'harar', 'harbo', 'haren', 'hares', 'harms',
'harry', 'harvs', 'hasar', 'hasat', 'hasor', 'hasse', 'hatad', 'hatar', 'hatas', 'hatat',
'hatet', 'hatts', 'haven', 'havet', 'hebys', 'hedar', 'hedes', 'hedet', 'hedna', 'hejad',
'hejar', 'hejas', 'hejat', 'helar', 'helas', 'helat', 'helen', 'helge', 'helgs', 'hemse',
'henry', 'henån', 'hetat', 'heter', 'hette', 'hinds', 'hinks', 'hinns', 'hippt', 'hitin',
'hivad', 'hivar', 'hivat', 'hjons', 'hjuls', 'hoars', 'hobys', 'holks', 'holms', 'holts',
'honan', 'honas', 'honor', 'hopad', 'hopar', 'hopat', 'hopen', 'hopps', 'horda', 'hords',
'horet', 'horns', 'hotad', 'hotar', 'hotas', 'hotat', 'hoten', 'hotet', 'hovar', 'hovas',
'hoven', 'hovet', 'hovås', 'hudar', 'huden', 'hugat', 'hugen', 'huggs', 'hugos', 'hukad',
'hukar', 'hukas', 'hukat', 'hulda', 'hults', 'hunds', 'hunna', 'husby', 'husen', 'huset',
'husum', 'hutar', 'hutat', 'huvan', 'huvar', 'huvas', 'huven', 'huvor', 'hymns', 'hyran',
'hyras', 'hyrda', 'hyrde', 'hyres', 'hyror', 'hyrts', 'hysas', 'hyser', 'hyses', 'hyste',
'hysts', 'hytts', 'hågad', 'hågat', 'hågen', 'hågsa', 'håkan', 'håken', 'hålan', 'hålas',
'hålen', 'hålet', 'hålig', 'hålla', 'hålls', 'hålor', 'hånad', 'hånar', 'hånas', 'hånat',
'hånet', 'hånle', 'hårda', 'hårde', 'håren', 'håret', 'hårig', 'håvar', 'håvas', 'håvat',
'håven', 'håvor', 'häcks', 'hädar', 'hädas', 'hädat', 'häggs', 'hälar', 'hälen', 'hälld',
'hälls', 'hällt', 'hälsö', 'hände', 'hängd', 'hängs', 'hängt', 'häpet', 'häpne', 'härar',
'härds', 'hären', 'hästs', 'hävas', 'hävde', 'häver', 'häves', 'hävts', 'häxan', 'häxas',
'häxor', 'höets', 'höfts', 'högan', 'högar', 'högas', 'högen', 'höges', 'höggs', 'högra',
'högre', 'högst', 'höjas', 'höjda', 'höjde', 'höjds', 'höjer', 'höjes', 'höjts', 'hökar',
'höken', 'höljd', 'höljs', 'höljt', 'hölls', 'hölös', 'hönan', 'hönas', 'hönor', 'hönös',
'höras', 'hörby', 'hörda', 'hörde', 'höres', 'hörns', 'hörts', 'hösts', 'hötte', 'höves',
'höörs', 'idars', 'iddes', 'idéen', 'idéer', 'idens', 'idéns', 'idets', 'idkad', 'idkar',
'idkas', 'idkat', 'idoga', 'idoge', 'idogt', 'idols', 'idres', 'ifyll', 'iförd', 'iförs',
'ifört', 'igeln', 'igels', 'iglar', 'iglon', 'iglor', 'iglos', 'ikast', 'ikeas', 'ikläd',
'ikläm', 'iklär', 'ikläs', 'ikons', 'ilade', 'ilars', 'ilats', 'ilens', 'ilsbo', 'imman',
'immar', 'immas', 'immat', 'indal', 'infil', 'ingas', 'ingav', 'inger', 'inges', 'inget',
'ingår', 'ingås', 'inhys', 'inkan', 'inkas', 'inkom', 'inled', 'inlär', 'inlät', 'inlös',
'inrar', 'inred', 'inrym', 'inser', 'inses', 'insup', 'insåg', 'insöp', 'insöv', 'intar',
'intas', 'intog', 'invig', 'iraks', 'irans', 'irene', 'irrar', 'irras', 'irrat', 'isade',
'isars', 'isats', 'isatt', 'isens', 'isiga', 'isigt', 'ismen', 'ismer', 'ivans', 'ivars',
'ivern', 'ivers', 'ivrar', 'ivras', 'ivrat', 'jacob', 'jagad', 'jagar', 'jagas', 'jagat',
'jaget', 'jakar', 'jakas', 'jakat', 'jaken', 'jakob', 'jamar', 'jamat', 'janne', 'janos',
'jarls', 'jeeps', 'jenny', 'jesus', 'jimmy', 'jobbs', 'joden', 'joels', 'johan', 'johns',
'jojon', 'jojor', 'jonas', 'jonen', 'jones', 'jonny', 'jords', 'josef', 'judar', 'juden',
'judes', 'judit', 'jular', 'julas', 'julen', 'julia', 'julis', 'junis', 'juryn', 'jurys',
'jämjö', 'järbo', 'järna', 'järva', 'jäser', 'jäste', 'jävar', 'jävat', 'jäven', 'jävet',
'jörns', 'kajan', 'kajas', 'kajen', 'kajer', 'kajor', 'kajsa', 'kakan', 'kakor', 'kalix',
'kalks', 'kalle', 'kalls', 'kallt', 'kalvs', 'kanar', 'kanat', 'kapad', 'kapar', 'kapas',
'kapat', 'kapen', 'kapet', 'karen', 'karga', 'kargt', 'karin', 'karls', 'karma', 'karms',
'karps', 'karup', 'katts', 'kelar', 'kelat', 'kemin', 'kenny', 'kents', 'kenya', 'keson',
'kexen', 'kexet', 'kiden', 'kidet', 'kikar', 'kikat', 'kilar', 'kilat', 'kilen', 'kilon',
'kilos', 'kilot', 'kilts', 'kinas', 'kinna', 'kisar', 'kisas', 'kisat', 'kivar', 'kivat',
'kivet', 'kivik', 'kjell', 'klart', 'klein', 'klene', 'klent', 'kleva', 'kliad', 'kliar', 'klias',
'kliat', 'kliet', 'kloka', 'kloke', 'klokt', 'klons', 'klors', 'klyvs', 'klåda', 'klådd',
'klåpa', 'klått', 'kläck', 'kläds', 'klämd', 'kläms', 'klöst', 'klövs', 'kneps', 'knivs',
'knock', 'knops', 'knuts', 'knyts', 'knåda', 'knåpa', 'knäar', 'knäat', 'knäet', 'knäna',
'knäns', 'knäts', 'knöls', 'knöts', 'kocks', 'kodad', 'kodar', 'kodas', 'kodat', 'koden',
'koder', 'kodes', 'kojan', 'kojas', 'kojen', 'kojer', 'kojor', 'kokad', 'kokar', 'kokas',
'kokat', 'koken', 'koket', 'kokta', 'kokte', 'kolan', 'kolen', 'koler', 'kolet', 'kolor',
'kolts', 'kolvs', 'koman', 'komas', 'komna', 'konen', 'koner', 'konga', 'kongo', 'korad',
'korar', 'koras', 'korat', 'korea', 'koret', 'korgs', 'korte', 'kosan', 'kotan', 'kotas',
'kotor', 'kravs', 'kreti', 'krigs', 'krogs', 'krumt', 'kryar', 'kryat', 'krymp', 'kryps',
'krytt', 'kråka', 'kråma', 'kräka', 'kräks', 'kräkt', 'kräng', 'kränk', 'krävs', 'krävt',
'kröks', 'kröns', 'krönt', 'kröps', 'kubas', 'kuben', 'kuber', 'kulan', 'kulas', 'kulet',
'kulor', 'kumla', 'kunde', 'kunds', 'kungs', 'kupad', 'kupan', 'kupar', 'kupas', 'kupat',
'kupén', 'kupor', 'kurar', 'kurat', 'kuren', 'kurts', 'kutar', 'kutat', 'kuvad', 'kuvar',
'kuvas', 'kuvat', 'kvava', 'kvavt', 'kväkt', 'kvälj', 'kväst', 'kvävd', 'kvävs', 'kvävt',
'kylan', 'kylas', 'kylda', 'kylde', 'kylen', 'kyler', 'kyles', 'kylts', 'kyska', 'kyskt',
'kysst', 'kådan', 'kådas', 'kådig', 'kådis', 'kåges', 'kålen', 'kånka', 'kåpan', 'kåpas',
'kåpor', 'kårar', 'kåras', 'kårel', 'kåren', 'kårer', 'kåsör', 'kåsös', 'kåtan', 'kåtor',
'käcka', 'käcke', 'käckt', 'käkar', 'käkas', 'käkat', 'käken', 'käkes', 'källö', 'kända',
'kände', 'känns', 'känts', 'käpps', 'kärrs', 'kärvt', 'käxen', 'käxet', 'köade', 'köers',
'köken', 'köket', 'kölar', 'kölen', 'könen', 'könet', 'köpas', 'köpen', 'köper', 'köpes',
'köpet', 'köpta', 'köpte', 'köpts', 'köras', 'körda', 'körde', 'kören', 'körer', 'köres',
'körts', 'kötts', 'labbs', 'ladan', 'ladas', 'lades', 'lador', 'lagad', 'lagan', 'lagar',
'lagas', 'lagat', 'lagda', 'lagen', 'laget', 'lagts', 'laila', 'lakar', 'lakas', 'lakat',
'laman', 'lamas', 'lamor', 'lands', 'lapad', 'lapar', 'lapas', 'lapat', 'lasse', 'lasts',
'latar', 'latas', 'latat', 'lates', 'lavar', 'laven', 'laxar', 'laxen', 'laxås', 'ledan',
'ledde', 'leden', 'leder', 'ledes', 'ledet', 'leifs', 'lejas', 'lejda', 'lejde', 'lejer',
'lejts', 'lekar', 'lekas', 'leken', 'leker', 'lekte', 'lekts', 'lenas', 'leone', 'leran',
'leras', 'lerum', 'letad', 'letar', 'letas', 'letat', 'letts', 'levas', 'levde', 'leven',
'levts', 'liars', 'liden', 'lidet', 'lidit', 'lidna', 'liens', 'ligan', 'ligor', 'likar',
'liken', 'likes', 'liket', 'lilly', 'limas', 'linan', 'linas', 'linde', 'linet', 'linor',
'linux', 'lipar', 'lipat', 'lirar', 'liras', 'lirat', 'lisan', 'lisas', 'lisor', 'litar',
'litat', 'livar', 'livas', 'livat', 'liven', 'livet', 'ljumt', 'ljusa', 'ljuse', 'ljust',
'ljuts', 'ljuva', 'ljuve', 'ljuvt', 'ljöts', 'loars', 'loben', 'lober', 'locks', 'lodet',
'logen', 'loger', 'loken', 'loket', 'lovad', 'lovar', 'lovas', 'lovat', 'lovet', 'ludet',
'ludna', 'lufts', 'lugne', 'lugnt', 'luleå', 'lunde', 'lunds', 'lupit', 'lurad', 'lurar',
'lurat', 'luren', 'lusen', 'lutad', 'lutan', 'lutar', 'lutas', 'lutat', 'lutor', 'luxor',
'lycke', 'lycks', 'lyckt', 'lydas', 'lydde', 'lyder', 'lyfte', 'lyfts', 'lyran', 'lyras',
'lyror', 'lysas', 'lysen', 'lyser', 'lyses', 'lyset', 'lyste', 'lysts', 'lyten', 'lytes',
'lytet', 'lytta', 'lytts', 'lyxen', 'lådan', 'lådor', 'lågan', 'lågar', 'lågas', 'lågat',
'lågor', 'lånad', 'lånar', 'lånas', 'lånat', 'lånen', 'lånet', 'långa', 'långt', 'lånke',
'lånta', 'lårar', 'låren', 'låret', 'låsas', 'låsen', 'låser', 'låses', 'låset', 'låssa',
'låsta', 'låste', 'låsts', 'låtar', 'låten', 'låter', 'låtes', 'låtit', 'låtsa', 'läckt',
'läfsa', 'lägen', 'läget', 'läggs', 'lägre', 'lägst', 'läker', 'läkte', 'lände', 'länen',
'länet', 'länna', 'läpps', 'läran', 'läras', 'lärda', 'lärde', 'läror', 'lärts', 'läsas',
'läser', 'läses', 'läste', 'lästs', 'läten', 'lätes', 'lätet', 'läxan', 'läxor', 'lödas',
'lödde', 'löder', 'löjen', 'löjes', 'löjet', 'lökar', 'löken', 'lönar', 'lönas', 'lönat',
'lönen', 'löner', 'löpas', 'löper', 'löpte', 'löpts', 'lösas', 'löser', 'löses', 'lösta',
'löste', 'lösts', 'lötts', 'lövar', 'lövat', 'löven', 'lövet', 'magar', 'magen', 'magin',
'majas', 'makad', 'makan', 'makar', 'makas', 'makat', 'maken', 'makes', 'makro', 'malas',
'malde', 'malen', 'maler', 'malet', 'malin', 'malms', 'malmö', 'malna', 'malta', 'malts',
'malås', 'manar', 'manas', 'manat', 'manen', 'manér', 'maria', 'marie', 'marks', 'marta',
'marys', 'masar', 'masen', 'matar', 'matas', 'matat', 'maten', 'mauds', 'mejad', 'mejar',
'mejat', 'menar', 'menas', 'menat', 'menyn', 'menys', 'mesta', 'metad', 'metar', 'metas',
'metat', 'milan', 'milda', 'milde', 'milen', 'milor', 'minen', 'miner', 'minks', 'minns',
'mists', 'mjuke', 'mjukt', 'mjöds', 'mjöls', 'moars', 'modet', 'moget', 'molat', 'molen',
'molns', 'monas', 'moran', 'mords', 'moren', 'morer', 'moset', 'motad', 'motar', 'motas',
'motat', 'muffs', 'muggs', 'mulan', 'mulas', 'mulet', 'mulle', 'mulor', 'munin', 'munka',
'munks', 'munsö', 'murad', 'murar', 'muras', 'murat', 'muren', 'musen', 'muskö', 'myggs',
'myran', 'myrar', 'myren', 'myror', 'myser', 'müsli', 'myste', 'myten', 'myter', 'mådde',
'mågar', 'mågen', 'målad', 'målar', 'målas', 'målat', 'målen', 'målet', 'månar', 'månat',
'månen', 'månes', 'måsar', 'måsen', 'mäkla', 'mäkta', 'mälta', 'mänga', 'mängd', 'märka',
'märke', 'märks', 'märkt', 'märla', 'märta', 'mäska', 'mässa', 'mätas', 'mäter', 'mätta',
'mätte', 'mätts', 'mödan', 'mödas', 'mödor', 'möjas', 'mölle', 'mörke', 'mörkt', 'mörna',
'möten', 'möter', 'mötes', 'mötet', 'mötte', 'mötts', 'nadja', 'naiva', 'naive', 'naivt',
'naket', 'nakna', 'nakne', 'nalka', 'namns', 'nancy', 'napps', 'narvs', 'nejdå', 'nekad',
'nekar', 'nekas', 'nekat', 'nepal', 'nesan', 'nevön', 'nians', 'niger', 'ninas', 'niors',
'nitad', 'nitar', 'nitas', 'nitat', 'niten', 'nivån', 'njuts', 'njöts', 'noaks', 'nobla',
'noden', 'noder', 'nokia', 'noras', 'norge', 'nosen', 'noten', 'noter', 'novan', 'novas',
'nuets', 'nupit', 'nyare', 'nyast', 'nybro', 'nykil', 'nymfs', 'nypan', 'nyper', 'nypor',
'nysas', 'nyser', 'nyste', 'nysts', 'nyårs', 'nåbar', 'nådda', 'nådde', 'nåden', 'nåder',
'nådig', 'någon', 'något', 'några', 'nålar', 'nålen', 'nåtar', 'nåten', 'nåtet', 'nåtla',
'nåtts', 'nåväl', 'nämdö', 'nämns', 'nämnt', 'näpet', 'näpna', 'näras', 'närde', 'närke',
'näsan', 'näsen', 'näset', 'näsor', 'näsum', 'näten', 'nätet', 'nävar', 'näven', 'nöden',
'nöjda', 'nöjde', 'nöjen', 'nöjer', 'nöjes', 'nöjet', 'nötas', 'nöter', 'nötta', 'nötte',
'nötts', 'oanat', 'oasen', 'oaser', 'obett', 'oboen', 'oboer', 'oböjt', 'odens', 'odlar',
'odlas', 'odlat', 'ofina', 'ofint', 'ofött', 'ohört', 'ojade', 'okens', 'okets', 'okänt',
'okära', 'okärt', 'olgas', 'olikt', 'oljan', 'oljas', 'olles', 'olofs', 'olovs', 'olåst',
'omans', 'omgav', 'omger', 'omges', 'omilt', 'omkom', 'omrör', 'ondas', 'ondes', 'opaka',
'opakt', 'orala', 'oralt', 'ordar', 'ordas', 'ordat', 'ordet', 'orene', 'orent', 'orkar',
'orkas', 'orkat', 'orken', 'ormar', 'ormen', 'ornös', 'oroad', 'oroar', 'oroas', 'oroat',
'orons', 'orrar', 'orren', 'orres', 'orsas', 'orten', 'orter', 'orvar', 'orört', 'osagt',
'osant', 'osbys', 'oscar', 'osett', 'oskar', 'oslos', 'osten', 'osunt', 'osålt', 'osått',
'osäll', 'otron', 'otros', 'ottos', 'oturs', 'ovala', 'ovalt', 'ovane', 'ovant', 'ovisa',
'ovist', 'oväns', 'oxars', 'oxens', 'oxies', 'oävet', 'oävna', 'oömma', 'paffa', 'paffe',
'pafft', 'pagen', 'pager', 'pakts', 'palls', 'palme', 'palts', 'pamps', 'parar', 'paras',
'paren', 'paret', 'paris', 'pauls', 'pehrs', 'pekar', 'pekas', 'pekat', 'pelle', 'pello',
'pengs', 'perus', 'petad', 'petar', 'petas', 'petat', 'peter', 'petra', 'pigan', 'piggt',
'pigor', 'pikar', 'piken', 'pilar', 'pilen', 'pinad', 'pinar', 'pinas', 'pinat', 'pipan',
'pipas', 'piper', 'pipit', 'pipor', 'piteå', 'pjåka', 'pjåsk', 'plant', 'plogs', 'pluto',
'plyms', 'plång', 'pläga', 'plätt', 'plöjd', 'plöjs', 'plöjt', 'poems', 'polen', 'poler',
'ports', 'prags', 'provs', 'prydd', 'pryds', 'pryls', 'prytt', 'pränt', 'präst', 'pubar',
'puben', 'pukan', 'pukor', 'putar', 'putat', 'pyret', 'pyser', 'pyste', 'påarp', 'påför',
'pågar', 'pågen', 'pågår', 'påkom', 'pålar', 'pålen', 'påryd', 'påsar', 'påsen', 'påven',
'påves', 'påöka', 'pälsa', 'pärla', 'pärms', 'päron', 'pärta', 'pölar', 'pölen', 'pöser',
'pöste', 'qatar', 'radas', 'radat', 'raden', 'rader', 'rakad', 'rakar', 'rakat', 'ramar',
'ramas', 'ramat', 'ramen', 'rankt', 'rasad', 'rasar', 'rasas', 'rasat', 'rasen', 'raser',
'raske', 'raskt', 'reala', 'realt', 'reans', 'redas', 'redda', 'redde', 'reden', 'reder',
'redet', 'reläs', 'renar', 'renas', 'renen', 'reors', 'repad', 'repar', 'repas', 'repat',
'repen', 'repet', 'resan', 'resas', 'resen', 'reser', 'reset', 'resor', 'reste', 'rests',
'retad', 'retar', 'retat', 'retts', 'revan', 'revar', 'revat', 'revor', 'revyn', 'rhens',
'ridas', 'rider', 'ridit', 'ridån', 'rikas', 'riken', 'rikes', 'riket', 'rimbo', 'ringe',
'rings', 'ringt', 'ripan', 'ripas', 'risen', 'riset', 'risks', 'riste', 'rists', 'ritad',
'ritar', 'ritas', 'ritat', 'riten', 'riter', 'riven', 'river', 'rivet', 'rivit', 'rivna',
'roade', 'roats', 'robin', 'rodda', 'rodde', 'roger', 'rolfs', 'ronny', 'ropad', 'ropar',
'ropas', 'ropat', 'ropen', 'ropet', 'rosen', 'rosor', 'rotar', 'rotas', 'rotat', 'roten',
'rotts', 'rovet', 'rudas', 'runan', 'runes', 'runor', 'rusar', 'rusas', 'rusat', 'rusen',
'ruset', 'rutan', 'rutit', 'rutor', 'rutts', 'ruvar', 'ruvas', 'ruvat', 'rycks', 'ryckt',
'rydal', 'ryggs', 'rykas', 'ryker', 'rykts', 'rylar', 'rylen', 'rymde', 'rymts', 'ryser',
'ryske', 'ryskt', 'ryste', 'rytas', 'ryter', 'rytms', 'råare', 'råast', 'rådas', 'rådda',
'rådde', 'råden', 'råder', 'rådet', 'rådig', 'råegg', 'rågad', 'rågar', 'rågas', 'rågat',
'rågax', 'rågen', 'råget', 'råhet', 'råkar', 'råkas', 'råkat', 'råkid', 'rånad', 'rånar',
'rånas', 'rånat', 'rånen', 'rånet', 'råneå', 'råris', 'råsop', 'råtta', 'råtts', 'räcks',
'räckt', 'rädde', 'räden', 'räder', 'räkan', 'räkor', 'rände', 'ränns', 'ränts', 'rätan',
'rätar', 'rätat', 'rätte', 'rätts', 'rävar', 'räven', 'röjas', 'röjda', 'röjde', 'röjer',
'röjes', 'röjts', 'rökas', 'röken', 'röker', 'rökta', 'rökte', 'rökts', 'rökås', 'röner',
'rönte', 'röras', 'rörda', 'rörde', 'rören', 'röret', 'rörts', 'rörös', 'rövar', 'rövat',
'saabs', 'sades', 'sagan', 'sagas', 'sagda', 'sagde', 'sagor', 'sagts', 'saken', 'salar',
'salas', 'salen', 'samen', 'samer', 'samme', 'sanka', 'saras', 'satta', 'satte', 'satts',
'saven', 'saxar', 'saxat', 'saxen', 'sedda', 'seden', 'seder', 'sejar', 'sejen', 'sekts',
'senan', 'senor', 'setts', 'sexan', 'siade', 'siats', 'sidan', 'sidas', 'sidor', 'signe',
'sikar', 'siken', 'silad', 'silar', 'silas', 'silat', 'sills', 'silon', 'silor', 'simon',
'sinar', 'sinat', 'sirar', 'siret', 'siris', 'siste', 'sjuan', 'sjuke', 'sjukt', 'sjung',
'sjuor', 'sjåpa', 'själs', 'sjöar', 'sjöbo', 'sjöng', 'sjönk', 'sjöns', 'skavt', 'skedd',
'skees', 'skene', 'skets', 'skett', 'skevt', 'skilj', 'skils', 'skilt', 'skirt', 'skits',
'skodd', 'skogs', 'skons', 'skors', 'skrek', 'skriv', 'skrål', 'skråp', 'skräm', 'skröt',
'skumt', 'skurs', 'skyar', 'skyll', 'skyls', 'skymd', 'skyms', 'skyns', 'skåda', 'skåla',
'skåle', 'skåne', 'skånk', 'skåpa', 'skåra', 'skåre', 'skåta', 'skälv', 'skäms', 'skärs',
'skärt', 'skölj', 'sköna', 'sköne', 'skönj', 'skönt', 'sköts', 'skött', 'slags', 'slems',
'slets', 'slevs', 'slika', 'slikt', 'slite', 'slogs', 'sluga', 'sluge', 'slugt', 'sluts',
'slåss', 'slått', 'släck', 'slöks', 'slöts', 'slött', 'smala', 'small', 'smeks', 'smekt',
'smets', 'smidd', 'smits', 'smitt', 'smort', 'smurf', 'småby', 'småle', 'smått', 'smält',
'sneda', 'snett', 'snott', 'snyts', 'snåla', 'snåle', 'snålt', 'snårs', 'snäst', 'snävt',
'snöad', 'snöar', 'snöat', 'snöns', 'snöts', 'sobra', 'sofia', 'sofie', 'sojan', 'sojas',
'solen', 'solna', 'sonad', 'sonas', 'sonen', 'sonja', 'sopad', 'sopan', 'sopar', 'sopas',
'sopat', 'sopor', 'sorts', 'sover', 'sovit', 'spads', 'spels', 'spord', 'spred', 'sprid',
'spytt', 'spådd', 'spåna', 'spång', 'spånt', 'spåra', 'spårs', 'spått', 'spänt', 'spätt',
'spöad', 'spöar', 'spöat', 'spörj', 'stads', 'stams', 'stats', 'statt', 'steks', 'stekt',
'stela', 'stelt', 'stens', 'stigs', 'stina', 'stjäl', 'stoby', 'stols', 'stora', 'stort',
'storå', 'stred', 'stryp', 'strån', 'sträv', 'strök', 'strör', 'strös', 'stumt', 'sture',
'styrd', 'styrk', 'styrs', 'styrt', 'ståla', 'ståls', 'stånd', 'stång', 'stånk', 'ståta',
'ståte', 'stått', 'städs', 'stämd', 'stäms', 'stämt', 'stärk', 'stödd', 'stöde', 'stöds',
'stöps', 'stöpt', 'störd', 'störs', 'stöts', 'succé', 'sudan', 'sugas', 'suger', 'suget',
'sugit', 'sulan', 'sulor', 'sunda', 'sunes', 'sunne', 'supar', 'supas', 'supen', 'super',
'supit', 'surte', 'susar', 'susat', 'suset', 'svaga', 'svage', 'svagt', 'svalt', 'svars',
'sveas', 'sweet', 'svegs', 'svens', 'sveps', 'swing', 'svång', 'svåra', 'svåre', 'svårt',
'sydda', 'sydde', 'synad', 'synar', 'synat', 'synen', 'syner', 'synes', 'synts', 'syrad',
'syran', 'syrat', 'syres', 'syret', 'syror', 'sytts', 'såbar', 'sådan', 'sådda', 'sådde',
'sådig', 'sådor', 'sådär', 'sågad', 'sågar', 'sågas', 'sågat', 'sågen', 'såhär', 'sålda',
'sålde', 'sålla', 'sålts', 'sånär', 'såpan', 'såpig', 'såpor', 'sårad', 'sårar', 'såras',
'sårat', 'såren', 'såret', 'sårig', 'såsig', 'såsom', 'såtar', 'såten', 'såtts', 'såväl',
'säbys', 'säcks', 'säden', 'sägas', 'säger', 'säges', 'sälar', 'sälen', 'säljs', 'sällt',
'sände', 'sänds', 'sängs', 'sänks', 'sänkt', 'sänts', 'särad', 'särar', 'säras', 'särat',
'särna', 'särös', 'säten', 'sätet', 'sätts', 'sävar', 'säves', 'sökas', 'söker', 'sökes',
'sökta', 'sökte', 'sökts', 'sölad', 'sölar', 'sölas', 'sölat', 'söner', 'sören', 'sörjs',
'sörjt', 'sövas', 'sövda', 'sövde', 'söver', 'sövts', 'tabun', 'tabut', 'tager', 'tages',
'taget', 'tagit', 'tagna', 'taken', 'taket', 'talat', 'talen', 'talet', 'talls', 'taxan',
'taxar', 'taxen', 'taxin', 'taxor', 'tchad', 'tedde', 'teers', 'teets', 'tegar', 'tegen',
'teman', 'temas', 'temat', 'tenar', 'tenen', 'tenns', 'terms', 'tesen', 'teser', 'texas',
'tians', 'tibro', 'tidan', 'tiden', 'tider', 'tierp', 'tiggs', 'tiggt', 'tigit', 'tikar',
'tiken', 'timar', 'timat', 'timrå', 'tinar', 'tinas', 'tinat', 'tiors', 'tived', 'tjejs',
'tjoar', 'tjoat', 'tjuts', 'tjuvs', 'tjöts', 'tobos', 'togan', 'togas', 'token', 'tomas',
'tomma', 'tommy', 'tomts', 'tonar', 'tonas', 'tonat', 'tonen', 'toner', 'tonys', 'topps',
'tords', 'tores', 'torgs', 'torne', 'torps', 'torra', 'torrt', 'torup', 'torvs', 'trean',
'treas', 'trint', 'trivs', 'trixa', 'trodd', 'trofé', 'trons', 'trott', 'truts', 'tryts',
'tråda', 'tråds', 'tråka', 'tråla', 'tråna', 'trång', 'träds', 'träts', 'trätt', 'tröga',
'trögt', 'tröts', 'tuban', 'tubas', 'tuben', 'tuber', 'tubor', 'tufft', 'tulls', 'tumba',
'tungt', 'turen', 'turer', 'tures', 'turné', 'tutad', 'tutar', 'tutas', 'tutat', 'tuvan',
'tuvor', 'tvang', 'tweed', 'twist', 'tvåan', 'tvådd', 'tvåla', 'tvåls', 'tvång', 'tvåor',
'tvått', 'tycks', 'tyckt', 'tydas', 'tydda', 'tydde', 'tyder', 'tygen', 'tyger', 'tyget',
'tynar', 'tynat', 'tyngs', 'tyngt', 'typen', 'typer', 'tyskt', 'tyste', 'tytts', 'tåben',
'tågan', 'tågar', 'tågas', 'tågat', 'tågen', 'tåget', 'tågig', 'tågor', 'tålas', 'tålde',
'tåled', 'tålig', 'tålts', 'tålös', 'tånge', 'tåpig', 'tårad', 'tårar', 'tåras', 'tårem',
'tåren', 'tårig', 'tårna', 'tårta', 'tåtel', 'täbys', 'täcks', 'täljd', 'täljs', 'täljt',
'tämjd', 'tämjs', 'tämjt', 'tände', 'tänds', 'tänjd', 'tänjs', 'tänjt', 'tänks', 'tänkt',
'tärda', 'tärde', 'tömda', 'tömde', 'tömts', 'töres', 'tösen', 'töser', 'ubåts', 'uddar',
'udden', 'ugnar', 'ugnen', 'ullas', 'ullen', 'ulvar', 'ulven', 'umeås', 'ungar', 'ungas',
'ungen', 'unges', 'unika', 'unikt', 'unket', 'unnad', 'unnar', 'unnas', 'unnat', 'urens',
'urets', 'urnan', 'urnor', 'uselt', 'utbad', 'utbyt', 'utdöm', 'utfil', 'utgav', 'utger',
'utgår', 'utgör', 'utgöt', 'uthyr', 'utkom', 'utlys', 'utläs', 'utlös', 'utmät', 'utred',
'utrym', 'utser', 'utses', 'utsåg', 'uttyd', 'uttöm', 'uvars', 'uvens', 'vadar', 'vadat',
'vaden', 'vadet', 'vagns', 'vajar', 'vajat', 'vakad', 'vakar', 'vakas', 'vakat', 'vaket',
'valan', 'valas', 'valbo', 'valda', 'valde', 'valet', 'valid', 'valor', 'valps', 'valts',
'vanan', 'vanas', 'vande', 'vanor', 'varar', 'varat', 'varet', 'vargs', 'varit', 'varma',
'varmt', 'varor', 'varps', 'varvs', 'vasen', 'vaser', 'vassa', 'vasst', 'vaxad', 'vaxar',
'vaxas', 'vaxat', 'vaxen', 'vaxer', 'vecks', 'veden', 'vedum', 'vegan', 'vegby', 'vekar',
'vekas', 'veken', 'vekes', 'velat', 'venus', 'verde', 'vetat', 'vetet', 'veton', 'vevad',
'vevar', 'vevas', 'vevat', 'veven', 'whist', 'wiens', 'vigas', 'vigde', 'viger', 'vigts',
'vikar', 'vikas', 'viken', 'viker', 'vikit', 'vikts', 'vilad', 'vilan', 'vilar', 'vilas',
'vilat', 'vilda', 'vilka', 'ville', 'vinds', 'viner', 'vinet', 'vinns', 'viols', 'vipan',
'vipor', 'virad', 'virar', 'viras', 'virat', 'wirth', 'visad', 'visan', 'visar', 'visas',
'visat', 'visby', 'visen', 'vises', 'visor', 'visps', 'vissa', 'vitas', 'vites', 'vitås',
'vivet', 'volvo', 'vraks', 'vreda', 'vreds', 'vrena', 'vreta', 'vrids', 'vråns', 'vrårs',
'vräka', 'vräks', 'vräkt', 'wulff', 'vunna', 'vuxet', 'vuxit', 'vuxna', 'vuxne', 'vyers',
'vådan', 'vådas', 'vådor', 'vågad', 'vågar', 'vågas', 'vågat', 'vågen', 'vågig', 'vågor',
'vålds', 'vålla', 'vålma', 'vånda', 'vånga', 'vånna', 'våpig', 'våran', 'vårar', 'våras',
'vårby', 'vårda', 'våren', 'våris', 'vårså', 'vårta', 'väcks', 'väddö', 'vägad', 'vägar',
'vägas', 'vägat', 'vägde', 'vägen', 'väger', 'väggs', 'vägts', 'väjas', 'väjde', 'väjer',
'välas', 'välte', 'välts', 'välvs', 'välvt', 'vände', 'vänds', 'vänge', 'vänts', 'värda',
'värjt', 'värmd', 'värms', 'värmt', 'väsas', 'väsby', 'väser', 'väses', 'väste', 'västs',
'vätan', 'vätös', 'vävar', 'vävas', 'vävda', 'vävde', 'väven', 'väver', 'vävts', 'växer',
'växjö', 'växte', 'växts', 'xerox', 'yemen', 'ylade', 'ylvas', 'yngve', 'yorks', 'yppad',
'yppar', 'yppas', 'yppat', 'yrade', 'yrans', 'yrkad', 'yrkar', 'yrkas', 'yrkat', 'yrken',
'yrkes', 'yrket', 'ystad', 'ystra', 'ytans', 'ytors', 'yvats', 'yviga', 'yvigt', 'yxans',
'yxlan', 'yxors', 'zaire', 'zonen', 'zoner', 'åarna', 'åberg', 'åbons', 'åbors', 'ådern',
'ådran', 'ådrog', 'ådror', 'åhörd', 'åhörs', 'åhört', 'åkarp', 'åkern', 'åkers', 'åkets',
'åkrar', 'ålade', 'åland', 'ålars', 'åleds', 'ålems', 'ålens', 'ålägg', 'åmåls', 'ångan',
'ångar', 'ångat', 'ånges', 'ångor', 'årans', 'årens', 'årets', 'årors', 'årsta', 'åryds',
'åsarp', 'åsars', 'åsbro', 'åseda', 'åsele', 'åsens', 'åsett', 'åskan', 'åsnan', 'åsnor',
'åstol', 'åtals', 'åteln', 'åtels', 'åtgår', 'åtlyd', 'åtorp', 'åtrån', 'åtrår', 'åtrås',
'åttan', 'åttas', 'åttor', 'äckel', 'äckla', 'ädelt', 'ädlas', 'ädles', 'ägare', 'ägdes',
'äggen', 'ägget', 'äggul', 'ägnad', 'ägnar', 'ägnas', 'ägnat', 'ägors', 'äktad', 'äktar',
'äktas', 'äktat', 'äldre', 'äldst', 'älgar', 'älgen', 'älgko', 'älska', 'ältad', 'ältar',
'ältas', 'ältat', 'älvan', 'älvar', 'älven', 'älvor', 'ämbar', 'ämnad', 'ämnar', 'ämnas',
'ämnat', 'ämnen', 'ämnes', 'ämnet', 'ändad', 'ändan', 'ändar', 'ändas', 'ändat', 'änden',
'änder', 'ändes', 'ändra', 'ängar', 'ängel', 'ängen', 'änger', 'änkan', 'änkas', 'änkor',
'äntra', 'äpple', 'ärade', 'ärans', 'ärats', 'ärbar', 'ärgig', 'äring', 'ärlan', 'ärlas',
'ärlbo', 'ärlig', 'ärlor', 'ärmar', 'ärmen', 'ärnar', 'ärnat', 'ärrad', 'ärras', 'ärren',
'ärret', 'ärrig', 'ärtan', 'ärten', 'ärtig', 'ärtor', 'ärvas', 'ärvda', 'ärvde', 'ärver',
'ärvts', 'äskad', 'äskar', 'äskas', 'äskat', 'ässja', 'ätare', 'ätbar', 'ätits', 'ätlig',
'ätran', 'ätten', 'ätter', 'ävjig', 'ävlan', 'ävlas', 'äxing', 'öarna', 'öbons', 'öbors',
'ödena', 'ödens', 'ödets', 'ödlan', 'ödlor', 'ögats', 'öglan', 'öglas', 'öglor', 'ögnad',
'ögnar', 'ögnas', 'ögnat', 'ögons', 'ökade', 'ökats', 'öknar', 'öknen', 'ökänt', 'öland',
'ölens', 'ölets', 'ömkad', 'ömkar', 'ömkas', 'ömkat', 'öppet', 'örats', 'örbys', 'örets',
'örlog', 'örnar', 'örnen', 'örons', 'örsjö', 'örten', 'örter', 'ösmos', 'östen', 'östes',
'övade', 'övats'];

        
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
