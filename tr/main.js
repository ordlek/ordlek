this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
        "use strict";
        //FiXME: Translations
        var tr = {
            "WORDLE": "Günün Sözleri",
            "Wordle": "günün sözleri",
            "": "",
            "@language": "tr",
            "@title": "Günün Sözleri - Günün sözlerini tahmin et",
            "@description": "Sanırım bugünün beş harfli kelimeleri altı girişimde",
            "@short_link": "bit.ly/bulmak",
            "@use_link_in_share": true,
            "": "",
            "@valid_letters": "abcçdefgğhıijklmnoöpqrsştuüvwxyz",
            "@keyboard_top": ["q", "w", "e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü"],
            "@keyboard_mid": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i"],
            "@keyboard_bot": ["←", "z", "x", "c", "v", "b", "n", "m", "ö", "ç", "↵"],
           "": "",
            "": "",
            "gameState": "tr-gameState",
            "statistics": "tr-statistics",
            "fail": "misslyckanden",
            "IN_PROGRESS": "PÅGÅENDE",
            "WIN": "VUNNA",
            "FAIL": "EJ VUNNA",
            "Genius": "Ustaca!",
            "Magnificent": "Inanılmaz!",
            "Impressive": "Mükemmel!",
            "Splendid": "Etkileyici!",
            "Great": "İyi!",
            "Phew": "Yakın çağrı!",
            " letter must be ": " bokstaven måste vara ett ",
            "Guess must contain ": "Gissningsordet måste ha: ",
            "Not valid in hard mode": "Tillåts inte i den svåra varianten",
            "Hard mode can only be enabled at the start of a round": "Svåra varianten kan bara aktiveras innan första gissnigen",
            "No Data": "Henüz bir gençleştirme oynamadı",
            "Not in word list": "Sözlükte bulunamadı",
            "Not enough letters": "Måste vara fem bokstäver långt!",
            "Copied results to clipboard": "Sonuç şimdi diğer uygulamalara yapıştırın",
            "": "",
            "": "",
            "Settings": "Ayarlar",
            "Hard Mode": "Şiddetli varyantı.",
            "Any revealed hints must be used in subsequent guesses": "Tüm bulunan harfler yaklaşmakta olan tahminlerde kullanılmalıdır",
            "Dark Theme": "Karanlık pozisyon",
            "Color Blind Mode": "Renk kör için daha iyi renkler",
            "High contrast colors": "Renkler daha yüksek kontrast alır",
            "Feedback": "Orijinal oyun: ",
            "contact": '<a href="https://www.powerlanguage.co.uk/wordle/">Wordle in English</a>',
            "": "",
            "": "",
            "Statistics": "İSTATİSTİK",
            "Guess Distribution": "TAHMİN DAĞILIMI",
            "Next WORDLE": "BİR SONRAKİ KELİME İÇİN KALAN SÜRE:",
            "Share": "Paylaş",
            "Current Streak": "Üst üste oynanılan gün sayısı",
            "Max Streak": "Maksimum üst üste oynanılan gün sayısı",
            "Win %": "Kazanma yüzdesi",
            "Played": "Oynanılan tur sayısı",
            "Won": "Kazanmak",
            "Av. Guesses": "Ortalama olarak tahmin eder",
            "": "",
            "": "",
            "How to play": "Nasıl oynanır",
            "Guess the <strong>WORDLE</strong> in 6 tries.": "Günün kelimesini altı denemede tahmin et!",
            "Each guess must be a valid 5 letter word. Hit the enter button to submit.": "Her tahmin beş harfli bir kelime olmalıdır. Tahminini göndermek için ENTER tuşuna basman gerekiyor.",
            "After each guess, the color of the tiles will change to show how close your guess was to the word.": "Tahminine ne kadar yakın olduğuna bağlı olarak harfler renklendirilecektir.",
            "": "",
            "Examples": "Örneğin:",
            "letter-a1": "a",
            "letter-a2": "ç",
            "letter-a3": "m",
            "letter-a4": "a",
            "letter-a5": "k",
            "The letter <strong>W</strong> is in the word and in the correct spot.": "<B>A</B> harfi doğru yerde duruyor.",
            "letter-b1": "b",
            "letter-b2": "e",
            "letter-b3": "ş",
            "letter-b4": "i",
            "letter-b5": "r",
            "The letter <strong>I</strong> is in the word but in the wrong spot.": "<B>B</B> harfi kelimeye dahildir ancak başka bir yerde durmalıdır.",
            "letter-c1": "g",
            "letter-c2": "a",
            "letter-c3": "l",
            "letter-c4": "i",
            "letter-c5": "p",
            "The letter <strong>U</strong> is not in the word in any spot.": "<B>A</B> harfi kelimeye dahil değildir.",
            "": "",
            "A new WORDLE will be available each day!": "Her gün tahmin edilebilecek yeni bir kelime var!",
            "": "",
            
        };

        //FIXME: Entire Word list
    var La = ['abacı', 'abaka', 'abalı', 'abani', 'abaza', 'abbas', 'abdal', 'abece', 'abide', 'abiye',
'ablak', 'acemi', 'acısı', 'acıyı', 'adali', 'adalı', 'adsız', 'afyon', 'afşar', 'agora',
'agraf', 'ahenk', 'ahlat', 'ahval', 'ahzan', 'ajans', 'akbah', 'akbaş', 'aklık', 'akman',
'akort', 'akrep', 'akret', 'aktif', 'akvam', 'akçıl', 'akşam', 'akşın', 'alaca', 'alaka',
'alaza', 'albüm', 'aleme', 'alemi', 'alevi', 'algın', 'alkan', 'alkin', 'alkış', 'allel',
'allık', 'almak', 'altın', 'alıcı', 'amber', 'ameli', 'amfor', 'amors', 'anbar', 'ancak',
'ander', 'angoş', 'angut', 'anime', 'anjin', 'anter', 'anuko', 'apart', 'april', 'apron',
'apsis', 'aptal', 'araba', 'araca', 'aracı', 'arama', 'arazi', 'ardıç', 'argaç', 'argon',
'argın', 'armut', 'aroma', 'artar', 'artis', 'artık', 'artım', 'arvit', 'asdam', 'asfar',
'aslan', 'asmak', 'astan', 'atayı', 'atlas', 'atlet', 'atıcı', 'avşar', 'aydan', 'aydos',
'aydın', 'ayraç', 'aysız', 'azime', 'azvay', 'açmak', 'açval', 'açısı', 'açıyı', 'ağaca',
'ağreb', 'aşağı', 'aşkın', 'aşmak', 'aşurı', 'aşırı', 'bahar', 'bahir', 'bahri', 'bakir',
'bakla', 'bakya', 'bakım', 'bakır', 'ballı', 'balta', 'balık', 'balım', 'bambu', 'bamya',
'banaç', 'banjo', 'banka', 'barak', 'baran', 'barba', 'barda', 'barem', 'bartu', 'barış',
'basak', 'basar', 'basen', 'basil', 'basit', 'basma', 'bastı', 'basım', 'basın', 'batak',
'batur', 'batıl', 'batış', 'bayak', 'bayan', 'bağan', 'bağcı', 'bağır', 'başak', 'başka',
'başçı', 'başın', 'bebek', 'becir', 'bedel', 'bedia', 'bedük', 'begüm', 'bekar', 'beleh',
'belek', 'belen', 'belgi', 'belli', 'bendi', 'benek', 'bengi', 'benim', 'besin', 'beste',
'beter', 'betik', 'beton', 'betül', 'beyaz', 'bezek', 'bezik', 'beşir', 'beşli', 'bihin',
'bilağ', 'bilek', 'bilet', 'bilir', 'bilye', 'bimar', 'birli', 'biçem', 'biçim', 'biçiş',
'biçki', 'bocuk', 'bofor', 'bokum', 'bombe', 'boran', 'borda', 'bordo', 'bozon', 'boğaz',
'boğum', 'boğur', 'boşar', 'brail', 'brove', 'buket', 'bulgu', 'bulma', 'bulut', 'buluğ',
'burcu', 'burka', 'burma', 'buruk', 'burun', 'buzla', 'buğra', 'böcek', 'bölge', 'böluk',
'bücür', 'bürük', 'bürün', 'bütan', 'büyük', 'büşra', 'bıcıl', 'bıtık', 'bıçkı', 'cacık',
'cafli', 'camız', 'canlı', 'cehiz', 'celep', 'cemil', 'cemre', 'cerek', 'ceren', 'cevaz',
'cevri', 'cibin', 'cibre', 'cicil', 'cicoz', 'cihat', 'civan', 'civar', 'corum', 'culuk',
'cumba', 'cümud', 'cürde', 'cürüm', 'cüzam', 'cılız', 'cıvma', 'cızık', 'cığır', 'dabak',
'dahil', 'dahra', 'dalaş', 'dalga', 'dalız', 'damak', 'damar', 'damla', 'danua', 'darab',
'dayak', 'dağlı', 'deber', 'debil', 'defne', 'dekan', 'delal', 'delil', 'delta', 'demir',
'deniz', 'derin', 'devin', 'deyil', 'deşik', 'deşme', 'diazo', 'dibek', 'dikey', 'dikeç',
'dilek', 'direk', 'dirig', 'dival', 'dizem', 'dizim', 'dizin', 'diğer', 'dogma', 'dokuz',
'dolak', 'dolam', 'dolça', 'donam', 'donra', 'donuk', 'doruk', 'dorum', 'doyra', 'doğan',
'doğma', 'doğru', 'doğuş', 'drama', 'duluk', 'duman', 'durak', 'duran', 'durma', 'durum',
'duruş', 'duvar', 'duygu', 'döndü', 'dönük', 'dübrü', 'düdek', 'dünya', 'dürüm', 'düzce',
'düşün', 'ebene', 'ecnef', 'ecrin', 'eflak', 'efsus', 'eftal', 'efzal', 'ekmek', 'elgin',
'elhac', 'elhal', 'elhap', 'elisa', 'elkab', 'ellik', 'elçin', 'emice', 'emraz', 'emval',
'emvat', 'enbar', 'encik', 'encir', 'ender', 'enfas', 'engel', 'engin', 'enver', 'epkem',
'erdem', 'erden', 'ergen', 'ergin', 'erkek', 'erkin', 'ermiş', 'ersad', 'esemm', 'eskil',
'eslek', 'esmek', 'esneb', 'esnek', 'etkin', 'evaze', 'evham', 'evlek', 'evren', 'evreç',
'evrik', 'evsen', 'eyger', 'eylem', 'eylik', 'eylül', 'eyvan', 'eşkin', 'eşlek', 'eşler',
'eşmek', 'eşten', 'fahri', 'faizi', 'fakat', 'faril', 'faris', 'fasid', 'fatih', 'fatır',
'feeri', 'fehme', 'fehmi', 'fekül', 'felek', 'fener', 'fenik', 'fenni', 'fenol', 'ferdi',
'fesih', 'fesli', 'fethi', 'fetih', 'feyfa', 'fifre', 'figen', 'figür', 'fiili', 'fikri',
'filik', 'filiz', 'filoz', 'firma', 'fiyat', 'fonda', 'forma', 'foroz', 'foton', 'frank',
'frenk', 'frika', 'frisa', 'fulya', 'furya', 'fötör', 'fücur', 'fünye', 'füzen', 'fıkra',
'fırta', 'fırtı', 'fırın', 'fıtri', 'gabağ', 'galba', 'galep', 'galif', 'galip', 'galoş',
'galve', 'gamze', 'garip', 'gauss', 'gayda', 'gayrı', 'gazab', 'gazte', 'gecek', 'gedem',
'geldi', 'gelin', 'geniş', 'gerek', 'geren', 'geriş', 'getto', 'geyik', 'geçen', 'geçim',
'girdi', 'giriş', 'gitar', 'giysi', 'gobal', 'gobça', 'gohle', 'golan', 'gonca', 'gopca',
'gotik', 'guatr', 'gulaş', 'guluk', 'gulya', 'guval', 'göbek', 'gökçe', 'gölek', 'gölet',
'gölge', 'gölük', 'gömme', 'gönül', 'görgü', 'gözde', 'gözel', 'göçer', 'gübre', 'güdüm',
'gügüm', 'gülen', 'güler', 'gülle', 'güllü', 'gülün', 'gülür', 'güman', 'gümüş', 'güney',
'güneş', 'güreş', 'güven', 'güveç', 'güyan', 'güyük', 'güzel', 'güzer', 'güçlü', 'gıdak',
'gıyli', 'habeş', 'hacda', 'hacet', 'hades', 'hadid', 'hadim', 'hadım', 'hafif', 'hakan',
'hakka', 'hakkı', 'hakta', 'halas', 'halat', 'halim', 'halle', 'hamak', 'hamal', 'hamam',
'haman', 'hamsi', 'hamur', 'hanak', 'hande', 'hanos', 'hapır', 'harba', 'harbi', 'harem',
'hasis', 'hassa', 'hatia', 'hatif', 'hatip', 'hatmi', 'hatır', 'havza', 'haybe', 'hayız',
'hazal', 'hazar', 'hazne', 'haçta', 'haşiş', 'hedef', 'hediy', 'helal', 'helin', 'hempa',
'hepsi', 'herek', 'herem', 'hertz', 'hesap', 'heybe', 'hidiv', 'hilal', 'hindi', 'hiper',
'horda', 'hoşaf', 'hufre', 'hufye', 'hulya', 'hülle', 'hülya', 'hısım', 'ibahe', 'ibcal',
'ibham', 'ibhar', 'ibraz', 'ibzal', 'icmal', 'idara', 'idari', 'idbar', 'iffet', 'ihada',
'ihrac', 'ihsan', 'ikrah', 'ilahi', 'ileri', 'ilkel', 'ilzam', 'imalı', 'imbat', 'incik',
'inebe', 'inkar', 'input', 'inşat', 'iradi', 'iradı', 'isbat', 'ishal', 'ismet', 'israr',
'isten', 'iteği', 'itham', 'izabe', 'izhar', 'izine', 'izini', 'izole', 'içlik', 'içmek',
'içsiz', 'işcen', 'işlek', 'işsiz', 'işten', 'jakar', 'japon', 'jeole', 'jeton', 'jilet',
'kabak', 'kaban', 'kabil', 'kabus', 'kabın', 'kabız', 'kadaş', 'kadem', 'kader', 'kadit',
'kadük', 'kadın', 'kahin', 'kahve', 'kaime', 'kakum', 'kakım', 'kalay', 'kalem', 'kalfa',
'kalça', 'kalım', 'kalıt', 'kalış', 'kamer', 'kamil', 'kamis', 'kamka', 'kamus', 'kanal',
'kanat', 'kanca', 'kande', 'kaniş', 'kanlı', 'kanık', 'kanış', 'kapak', 'kapan', 'kaput',
'kapış', 'karak', 'karda', 'karga', 'kargı', 'karlı', 'karık', 'karın', 'kasar', 'kasko',
'kaslı', 'kasık', 'kasım', 'katar', 'katkı', 'katık', 'katır', 'kavak', 'kaysı', 'kayın',
'kazak', 'kazan', 'kaşar', 'kaşlı', 'kaşık', 'kebap', 'kebir', 'kebze', 'kefen', 'kekre',
'keler', 'keleş', 'kelle', 'kelli', 'kemal', 'kemed', 'kemne', 'kendi', 'kepir', 'kerim',
'kerki', 'kesel', 'kesen', 'keser', 'kesir', 'kesiş', 'keyfi', 'kezik', 'keşan', 'keşiş',
'kibar', 'kilit', 'killi', 'kimya', 'kinik', 'kiraz', 'kireç', 'kirpi', 'kiste', 'klima',
'kobra', 'kodes', 'kofti', 'koful', 'kokon', 'kokoş', 'kokus', 'kolaj', 'kolan', 'kolej',
'komar', 'konca', 'konur', 'kopek', 'kopuz', 'korte', 'koruk', 'kosba', 'kotan', 'koyar',
'koyun', 'koşma', 'koşuk', 'kucak', 'kudal', 'kufur', 'kulak', 'kumlu', 'kumru', 'kumul',
'kuran', 'kurgu', 'kurna', 'kurum', 'kurut', 'kusur', 'kutan', 'kutlu', 'kutur', 'kutür',
'kuvva', 'kuyis', 'kuzay', 'kuşak', 'kuşku', 'köken', 'kömeç', 'kömür', 'köpek', 'köprü',
'köpük', 'körpe', 'körük', 'kössü', 'köylü', 'köyüm', 'köyün', 'kübra', 'külli', 'külür',
'kümek', 'künge', 'kürdi', 'kürük', 'küskü', 'küsur', 'kütin', 'küçük', 'kıdık', 'kıllı',
'kılıç', 'kırat', 'kırım', 'kıska', 'kısıt', 'ladin', 'lakin', 'lamba', 'latin', 'lavaj',
'lağıv', 'legal', 'lehçe', 'leken', 'leziz', 'leçek', 'leşin', 'leşte', 'lifli', 'lihye',
'liman', 'limbo', 'limon', 'lipom', 'lizöz', 'loput', 'löpür', 'lügat', 'lıkır', 'lığlı',
'maade', 'macun', 'madde', 'maden', 'madik', 'madur', 'mafat', 'mafik', 'mafil', 'magma',
'mahat', 'mahfe', 'mahik', 'mahra', 'mahur', 'mahık', 'mahız', 'makas', 'makat', 'makro',
'malla', 'malta', 'malül', 'mamuk', 'manas', 'manav', 'manda', 'manen', 'manga', 'mango',
'manim', 'manti', 'mantı', 'manık', 'maric', 'marid', 'marka', 'martı', 'marzi', 'masaj',
'masal', 'masid', 'maske', 'mason', 'masum', 'matim', 'mavuç', 'mazca', 'maziz', 'mazul',
'mebit', 'mebna', 'mecla', 'mecma', 'mecul', 'mecur', 'medek', 'meder', 'medet', 'mehan',
'mehar', 'mehaş', 'mekki', 'melek', 'meles', 'meleş', 'melih', 'melik', 'melon', 'mengü',
'menus', 'merak', 'merid', 'merre', 'mesen', 'mesir', 'metal', 'metin', 'metre', 'meşaş',
'meşem', 'meşen', 'meşuh', 'milat', 'milis', 'milli', 'minci', 'miras', 'mirat', 'moket',
'molla', 'momol', 'motel', 'motor', 'muceb', 'mucur', 'mukla', 'mumcu', 'murat', 'muris',
'murur', 'musil', 'mutlu', 'muvaz', 'mübdi', 'mücef', 'müfid', 'mühür', 'müjde', 'mülti',
'müluk', 'mümin', 'mümza', 'münci', 'münşi', 'mürur', 'müsün', 'müyüz', 'mısır', 'nabız',
'nacak', 'nacar', 'nadim', 'nakis', 'nasir', 'nasır', 'nazan', 'nazik', 'nazir', 'nazlı',
'nefaz', 'neseb', 'nezle', 'nezük', 'neşve', 'nikah', 'nilay', 'nimet', 'nipel', 'nisan',
'niyaz', 'nişan', 'notam', 'nufus', 'numan', 'nuran', 'nüfus', 'nüfuz', 'nükul', 'nüzur',
'oburu', 'oflan', 'okült', 'olgun', 'omaca', 'ongen', 'optik', 'orada', 'orfoz', 'organ',
'orkit', 'ortam', 'ortaç', 'osman', 'otosu', 'otçul', 'ovmak', 'oyluk', 'oğlak', 'oğlan',
'oğrun', 'palas', 'palaz', 'pamal', 'pamuk', 'pansi', 'pança', 'parke', 'parsa', 'parti',
'paska', 'pasta', 'payet', 'pazar', 'pazen', 'paçal', 'pelin', 'pelte', 'pelür', 'pelüş',
'penah', 'penis', 'pençe', 'peren', 'petek', 'peçka', 'peşgo', 'peşin', 'pigme', 'pikaj',
'piket', 'pilav', 'pinel', 'pines', 'piran', 'pirit', 'pisik', 'pizza', 'piçin', 'pişek',
'pişik', 'pişim', 'pişti', 'plato', 'plaza', 'plili', 'polak', 'polat', 'polen', 'polin',
'polis', 'polka', 'pomak', 'pomat', 'ponje', 'ponza', 'popra', 'posta', 'potas', 'pound',
'poyra', 'prafa', 'prens', 'pruva', 'pusat', 'pöşke', 'pütür', 'pıhtı', 'pınar', 'pırpı',
'rabia', 'rabib', 'racil', 'radar', 'radga', 'radhe', 'radif', 'radme', 'radon', 'radua',
'rafia', 'rafih', 'rafız', 'ragif', 'ragım', 'rahil', 'rahim', 'rahin', 'rahip', 'rahis',
'rahmi', 'rahna', 'rakor', 'rakıb', 'ramis', 'rampa', 'rasaf', 'rasim', 'rayic', 'recat',
'recep', 'redif', 'rekub', 'remil', 'remzi', 'resmi', 'revak', 'rezan', 'ringa', 'roman',
'rosap', 'rukum', 'rukye', 'rumba', 'rumca', 'rumen', 'rükbe', 'rüküb', 'rüküp', 'rüsta',
'rüyet', 'sabah', 'saban', 'sabik', 'sabir', 'sabit', 'sabra', 'sabuh', 'sabuk', 'sabık',
'sabır', 'sadet', 'sadir', 'sadır', 'safir', 'sagak', 'sahap', 'sahha', 'sahit', 'sahne',
'sakar', 'sakin', 'sakın', 'sakıt', 'salah', 'salak', 'salam', 'salat', 'salih', 'salin',
'sallı', 'salon', 'salto', 'salya', 'saman', 'samit', 'sanki', 'sapak', 'saray', 'saraç',
'sarma', 'satan', 'satir', 'satır', 'sauna', 'savak', 'savan', 'savaş', 'savcı', 'sayru',
'saçak', 'saçlı', 'saçık', 'sağcı', 'sağrı', 'sağır', 'sedef', 'sedir', 'sedye', 'sefer',
'sefil', 'sekil', 'sekre', 'sekse', 'seksi', 'selam', 'selda', 'selek', 'selen', 'selim',
'selva', 'semen', 'semer', 'semih', 'senin', 'sepet', 'seren', 'servi', 'serçe', 'setre',
'sevda', 'sevgi', 'sevim', 'seçim', 'seçme', 'shona', 'sibak', 'sibel', 'sigar', 'sikim',
'silah', 'simin', 'sinik', 'sinir', 'sinüs', 'sirkü', 'sivri', 'siyah', 'sizin', 'siğil',
'skala', 'sokum', 'sonat', 'sordu', 'soylu', 'soğan', 'soğuk', 'sudan', 'sudre', 'sukut',
'sulak', 'sumak', 'sunak', 'sungu', 'surat', 'susak', 'susam', 'susuz', 'suvat', 'sökel',
'sökük', 'söküm', 'sökün', 'sönüm', 'söyle', 'sözlü', 'söğüt', 'sükun', 'sümük', 'süngü',
'süper', 'sürur', 'süsen', 'sıcak', 'sıfır', 'sınık', 'sınır', 'sırça', 'sızma', 'sıçan',
'sıçma', 'sığın', 'tabak', 'tablo', 'tacik', 'tacim', 'tafte', 'tahıl', 'taife', 'takva',
'talak', 'talan', 'talay', 'taleb', 'talik', 'tanrı', 'tarık', 'tasar', 'tasma', 'tasni',
'tasım', 'tatar', 'tayfa', 'tağar', 'taşar', 'taşaş', 'taşma', 'taşçı', 'taşım', 'teker',
'tekil', 'tekin', 'tekir', 'tekke', 'tekli', 'tekne', 'telli', 'tempo', 'tenke', 'tenor',
'tenör', 'teras', 'terek', 'terim', 'terki', 'terme', 'terzi', 'terör', 'tesri', 'teyze',
'teşne', 'teşri', 'tokal', 'tokar', 'tokat', 'toklu', 'tokyo', 'tolga', 'tonga', 'topuz',
'topçu', 'torun', 'tosun', 'tozan', 'trafo', 'trans', 'tranş', 'trata', 'tufan', 'tuluk',
'tulum', 'tuman', 'tumba', 'tunga', 'turaç', 'turfa', 'turna', 'turta', 'turus', 'tutar',
'tutku', 'tutuk', 'tuyuğ', 'tuzla', 'tuğla', 'tuğra', 'töker', 'tübaj', 'tükel', 'tümen',
'tümör', 'tümür', 'türüm', 'tütün', 'umman', 'umure', 'urban', 'urmak', 'uryan', 'uygar',
'uysal', 'uzman', 'uçarı', 'uçmak', 'uçman', 'vaadi', 'vadet', 'vakad', 'vakit', 'vakuf',
'varil', 'varis', 'varlı', 'varoş', 'varım', 'varış', 'vatan', 'vaşak', 'vecit', 'vehim',
'verdi', 'vezne', 'video', 'vihad', 'virüs', 'vites', 'vişne', 'vodem', 'vokal', 'vulva',
'vuruş', 'vusub', 'vücut', 'vüküf', 'yaban', 'yabgu', 'yafta', 'yahey', 'yahşi', 'yakin',
'yakut', 'yakın', 'yakıt', 'yalak', 'yalan', 'yalım', 'yalın', 'yamak', 'yaman', 'yamaç',
'yamuk', 'yamçı', 'yanal', 'yanaz', 'yancı', 'yanma', 'yanık', 'yanış', 'yaren', 'yargı',
'yarım', 'yarış', 'yaslı', 'yastı', 'yasıb', 'yatak', 'yatış', 'yavuz', 'yaygı', 'yayıg',
'yayık', 'yazda', 'yazıh', 'yazıt', 'yağcı', 'yağma', 'yağız', 'yaşam', 'yaşlı', 'yeden',
'yediz', 'yedme', 'yeküm', 'yengi', 'yeter', 'yetim', 'yeğen', 'yeşil', 'yeşim', 'yirik',
'yirmi', 'yitik', 'yitme', 'yiğit', 'yobaz', 'yoklu', 'yolak', 'yonca', 'yorga', 'yosun',
'yoğun', 'yular', 'yumak', 'yumru', 'yumuş', 'yunak', 'yungu', 'yunus', 'yönlü', 'yörük',
'yüklü', 'yünlü', 'yürek', 'yüzey', 'yüzük', 'yılkı', 'yılma', 'yığma', 'zabil', 'zacir',
'zaden', 'zafar', 'zafer', 'zafir', 'zahir', 'zahit', 'zalim', 'zaman', 'zarar', 'zağar',
'zebra', 'zehep', 'zelil', 'zerde', 'zifir', 'zikre', 'zikri', 'zimba', 'zinos', 'ziver',
'zorlu', 'zuluf', 'zulüm', 'zurna', 'zuvak', 'zübre', 'zübük', 'zühuf', 'zümre', 'züyuf',
'zıpka', 'zıpır', 'çabuk', 'çader', 'çakal', 'çakan', 'çakar', 'çaker', 'çakın', 'çakır',
'çakış', 'çalgı', 'çalış', 'çamur', 'çamuş', 'çamça', 'çamıç', 'çamış', 'çanta', 'çapak',
'çapar', 'çapla', 'çaplı', 'çatak', 'çatma', 'çavlı', 'çavun', 'çavuş', 'çaylı', 'çayır',
'çağla', 'çedik', 'çekim', 'çekin', 'çekiç', 'çekte', 'çelek', 'çelik', 'çelim', 'çemen',
'çenar', 'çenet', 'çengi', 'çenti', 'çerge', 'çerçi', 'çetin', 'çevik', 'çevre', 'çeyiz',
'çeşme', 'çinim', 'çinin', 'çizik', 'çizim', 'çiçek', 'çoban', 'çocuk', 'çokal', 'çolak',
'çorba', 'çukur', 'çöker', 'çömçe', 'çöten', 'çöğen', 'çükür', 'çıfıt', 'çınar', 'çırak',
'çırpı', 'çısar', 'çıtma', 'çıvma', 'öbürü', 'ödeme', 'öksüz', 'ölmek', 'ölmüş', 'ölçüt',
'önazı', 'öneze', 'öngün', 'önleç', 'ördek', 'örnek', 'örter', 'örtük', 'örtün', 'ötmek',
'ötmez', 'ötürü', 'övret', 'övünç', 'özdek', 'özgün', 'özgür', 'özler', 'öznel', 'üdeba',
'ülgüç', 'ümera', 'ünlem', 'üstel', 'üstün', 'ütopi', 'ütülü', 'üzgün', 'üzmek', 'üçgen',
'ıldız', 'ılgın', 'ırmak', 'ışgın', 'ışıma', 'şaban', 'şahap', 'şahin', 'şahne', 'şahsa',
'şahsi', 'şahsı', 'şakıt', 'şalak', 'şaman', 'şamar', 'şamat', 'şapka', 'şarkı', 'şatır',
'şayan', 'şedde', 'şefik', 'şeker', 'şekil', 'şelek', 'şemit', 'şeran', 'şeref', 'şerir',
'şifre', 'şinas', 'şinik', 'şirin', 'şişek', 'şoför', 'şöyle', 'şükrü', 'şükür', 'şıkım']
;
var Ta= ['ababa', 'abacı', 'abadi', 'abaju', 'abaka', 'abaks', 'abalı', 'abani', 'abant', 'abara',
'abası', 'abayi', 'abayı', 'abaza', 'abazi', 'abaşo', 'abbak', 'abbas', 'abbaz', 'abbağ',
'abdal', 'abdan', 'abdaz', 'abece', 'abeci', 'abede', 'abega', 'abgah', 'abher', 'abide',
'abiye', 'ablak', 'abone', 'abosa', 'abovv', 'abraş', 'abril', 'abrul', 'abrıl', 'absan',
'abula', 'abuli', 'abuse', 'abıru', 'acaba', 'acaip', 'accuk', 'accık', 'acele', 'acemi',
'aceze', 'acibe', 'acube', 'acuze', 'acıca', 'acıdı', 'acılı', 'acıma', 'acıot', 'acısı',
'acıyı', 'adada', 'adadı', 'adale', 'adali', 'adalı', 'adama', 'adamı', 'adanı', 'adave',
'adaya', 'adayı', 'adağa', 'adağı', 'addan', 'adedi', 'adele', 'ademi', 'adese', 'adeta',
'adlar', 'adlık', 'adres', 'adsal', 'adsız', 'adına', 'adını', 'afaki', 'afara', 'afazi',
'afife', 'afili', 'afişe', 'afoni', 'afsun', 'aftab', 'aftos', 'afyon', 'afşar', 'agami',
'agber', 'agora', 'agraf', 'agser', 'agtem', 'agözi', 'ahali', 'ahbap', 'ahbar', 'ahben',
'ahbun', 'ahcar', 'ahdar', 'ahdeb', 'ahenk', 'ahfad', 'ahfat', 'ahger', 'ahize', 'ahkar',
'ahlaf', 'ahlak', 'ahlar', 'ahlas', 'ahlat', 'ahlef', 'ahmak', 'ahmer', 'ahpap', 'ahpin',
'ahrar', 'ahras', 'ahraz', 'ahres', 'ahret', 'ahreş', 'ahvad', 'ahval', 'ahzan', 'ahını',
'ahıra', 'ahşap', 'aidat', 'ailat', 'ajans', 'ajite', 'akabe', 'akait', 'akaju', 'akala',
'akağa', 'akbah', 'akbaş', 'akdut', 'akemi', 'akide', 'akika', 'akkan', 'akkor', 'akkuş',
'akkız', 'aklan', 'aklen', 'aklet', 'aklık', 'aklım', 'aklın', 'akmak', 'akman', 'akmaz',
'akont', 'akord', 'akort', 'akoza', 'akpas', 'akran', 'akrep', 'akret', 'aksak', 'aksam',
'aksan', 'aksar', 'akson', 'aktar', 'aktif', 'aktin', 'aktör', 'akval', 'akvam', 'akçıl',
'aküsü', 'akıcı', 'akşam', 'akşın', 'alaca', 'aladı', 'alaka', 'alara', 'alarm', 'alaya',
'alayı', 'alaza', 'alaşa', 'albay', 'albüm', 'albız', 'aldoz', 'aldık', 'aldım', 'aldın',
'aleme', 'alemi', 'aleni', 'aleve', 'alevi', 'aleyh', 'algın', 'alina', 'alize', 'alkan',
'alkid', 'alkil', 'alkin', 'alkol', 'alkım', 'alkış', 'allak', 'allel', 'allem', 'allık',
'almak', 'almaz', 'almaç', 'almaş', 'almes', 'almış', 'alnaç', 'alonj', 'altağ', 'altes',
'altlı', 'altta', 'altık', 'altın', 'altız', 'alver', 'alyan', 'alyon', 'alçak', 'alıcı',
'alınç', 'alışı', 'amade', 'amana', 'amane', 'amaro', 'ambar', 'amber', 'amcık', 'amdan',
'amele', 'ameli', 'amete', 'amfor', 'amidi', 'amigo', 'amino', 'amiri', 'amlar', 'amorf',
'amors', 'amper', 'ampir', 'ampul', 'ampül', 'amuca', 'amuda', 'amudi', 'amına', 'anaca',
'anada', 'anale', 'analı', 'anama', 'anamı', 'anane', 'ananı', 'anası', 'anaya', 'anayı',
'anbar', 'anber', 'ancak', 'andak', 'andaç', 'ander', 'andık', 'andım', 'andın', 'andız',
'andıç', 'anele', 'anemi', 'angaz', 'angoş', 'angut', 'angın', 'angıt', 'angıç', 'anide',
'anime', 'anjin', 'anket', 'anlak', 'anlam', 'anlar', 'anlık', 'anmak', 'anmış', 'annaç',
'annem', 'anneç', 'anons', 'ansız', 'anten', 'anter', 'antet', 'antik', 'antlı', 'antre',
'anuko', 'anvog', 'anyon', 'anüri', 'apacı', 'apala', 'apart', 'apiko', 'aplik', 'aport',
'apotr', 'apoşi', 'april', 'apron', 'apsis', 'aptal', 'aptes', 'araba', 'araca', 'aracı',
'arada', 'aradı', 'araka', 'aralı', 'arama', 'arasa', 'arası', 'araya', 'arayı', 'arazi',
'arcah', 'ardak', 'arday', 'ardıl', 'ardın', 'ardıç', 'arefe', 'arena', 'argaç', 'argon',
'argın', 'argıt', 'arhaç', 'arife', 'ariya', 'ariza', 'arkaç', 'arkaş', 'arkoz', 'arkıt',
'arlar', 'armut', 'armuz', 'armül', 'aroma', 'arpağ', 'arpej', 'arpçı', 'arsız', 'artar',
'arter', 'artis', 'artiz', 'artma', 'arttı', 'artçı', 'artık', 'artım', 'artın', 'artış',
'arvit', 'arçar', 'arıcı', 'arıda', 'arımı', 'arına', 'arını', 'arısı', 'arıya', 'arıyı',
'arıza', 'arızi', 'arşiv', 'arşın', 'asabi', 'asbap', 'asdam', 'asfar', 'ashap', 'aside',
'asist', 'asker', 'asklı', 'askın', 'aslan', 'aslen', 'aslık', 'asmak', 'aspir', 'aspur',
'assai', 'astan', 'astar', 'astat', 'astik', 'astöz', 'astım', 'asude', 'asyön', 'asıda',
'asılı', 'atabe', 'atadı', 'atama', 'atari', 'atayı', 'ataşe', 'ateme', 'ateşe', 'ateşi',
'atfen', 'atgıç', 'atlar', 'atlas', 'atlet', 'atmak', 'atmaz', 'atmık', 'atmış', 'attan',
'attık', 'attım', 'attın', 'atıcı', 'atılı', 'atını', 'avaik', 'avane', 'avans', 'avara',
'avare', 'avazı', 'avcar', 'avdet', 'avene', 'avgun', 'avgın', 'avize', 'avlak', 'avlar',
'avrat', 'avret', 'avsun', 'avucu', 'avunç', 'avurt', 'avşar', 'ayarı', 'ayaza', 'ayağa',
'ayağı', 'aydan', 'aydos', 'aydın', 'ayeti', 'ayevi', 'aygın', 'aygır', 'aygıt', 'aylak',
'aylar', 'aylık', 'aymak', 'aymaz', 'aynak', 'aynaz', 'aynen', 'ayran', 'ayraç', 'ayrık',
'ayrıl', 'ayrım', 'ayrıt', 'ayrıç', 'aysar', 'aysız', 'ayvan', 'ayvaz', 'ayyar', 'ayyaş',
'ayyuk', 'ayıcı', 'ayıda', 'ayırt', 'ayıya', 'ayıyı', 'azade', 'azami', 'azdık', 'azdım',
'azdın', 'azemi', 'azgın', 'azime', 'azize', 'azlık', 'azmak', 'azman', 'azmış', 'aznif',
'azoik', 'azvay', 'azzık', 'azılı', 'açgöz', 'açiga', 'açlık', 'açmak', 'açmaz', 'açmış',
'açtık', 'açtım', 'açtın', 'açval', 'açıcı', 'açısı', 'açıyı', 'açığa', 'açığı', 'ağaca',
'ağacı', 'ağasi', 'ağbaz', 'ağbaş', 'ağcık', 'ağdaş', 'ağfer', 'ağlak', 'ağlar', 'ağlaz',
'ağlef', 'ağmad', 'ağmak', 'ağman', 'ağmar', 'ağnam', 'ağraz', 'ağreb', 'ağrık', 'ağsan',
'ağulu', 'ağvun', 'ağyar', 'ağyel', 'ağılı', 'ağına', 'ağşak', 'aşama', 'aşari', 'aşağı',
'aşevi', 'aşina', 'aşkta', 'aşkım', 'aşkın', 'aşlıh', 'aşlık', 'aşmak', 'aşmış', 'aştık',
'aştım', 'aştın', 'aşula', 'aşure', 'aşurı', 'aşıcı', 'aşılı', 'aşırı', 'aşığı', 'babal',
'babam', 'baban', 'babaç', 'babet', 'baboş', 'babun', 'babıç', 'bacak', 'badak', 'badal',
'badas', 'badat', 'badem', 'badik', 'badya', 'badıç', 'bafon', 'bagaj', 'baget', 'bagıy',
'bahak', 'bahar', 'bahir', 'bahis', 'bahri', 'bahse', 'bahsi', 'bahtı', 'bahçe', 'bakam',
'bakan', 'bakar', 'bakaç', 'bakir', 'bakka', 'bakla', 'bakma', 'baktı', 'bakya', 'bakım',
'bakıp', 'bakır', 'bakış', 'balad', 'balak', 'balam', 'balar', 'balat', 'balcı', 'baldo',
'balen', 'balet', 'baliğ', 'balkı', 'ballı', 'balon', 'baloz', 'balsa', 'balta', 'baluk',
'balya', 'balık', 'balım', 'bambu', 'bamya', 'banak', 'banal', 'banar', 'banaç', 'banda',
'bando', 'bandı', 'banjo', 'banka', 'banko', 'banma', 'banyo', 'banço', 'baraj', 'barak',
'baran', 'barba', 'barcı', 'barda', 'bardi', 'bardo', 'barem', 'baret', 'barit', 'bariz',
'barka', 'barlı', 'barok', 'baron', 'bartu', 'barut', 'barça', 'barın', 'barıt', 'barış',
'basak', 'basar', 'basaç', 'basen', 'basil', 'basir', 'basit', 'baskı', 'basma', 'basso',
'bastı', 'basuk', 'basur', 'basya', 'basık', 'basım', 'basın', 'basıp', 'basış', 'batak',
'batal', 'batar', 'batik', 'batkı', 'batma', 'battı', 'batur', 'batöz', 'batık', 'batıl',
'batın', 'batış', 'bavcı', 'bavlı', 'bavuk', 'bavul', 'bayah', 'bayak', 'bayan', 'bayar',
'bayat', 'baydı', 'bayma', 'bayrı', 'bayır', 'bazal', 'bazan', 'bazar', 'bazen', 'bazik',
'bazit', 'baççı', 'baçıg', 'bağan', 'bağcı', 'bağla', 'bağlı', 'bağrı', 'bağıl', 'bağım',
'bağın', 'bağır', 'bağıs', 'bağıt', 'bağış', 'başak', 'başat', 'başka', 'başlı', 'başta',
'başçı', 'başın', 'bebek', 'bebiş', 'becet', 'becik', 'becir', 'becit', 'bedel', 'beden',
'bedia', 'bedii', 'bedik', 'bedir', 'bediz', 'beduh', 'bedük', 'begüm', 'beher', 'behey',
'behni', 'behre', 'bekar', 'bekas', 'bekle', 'bekri', 'bekçi', 'belce', 'belci', 'belde',
'beleh', 'belek', 'belen', 'beleş', 'belge', 'belgi', 'belik', 'belit', 'beliğ', 'belki',
'belli', 'bemol', 'bence', 'benci', 'bende', 'bendi', 'benek', 'bengi', 'benim', 'beniz',
'benli', 'benze', 'benzi', 'berat', 'beril', 'berim', 'berri', 'besin', 'beste', 'beter',
'betik', 'betil', 'betim', 'betke', 'beton', 'betül', 'beyan', 'beyaz', 'beyin', 'beyit',
'beyni', 'beyzi', 'bezci', 'bezdi', 'bezek', 'bezem', 'bezen', 'bezer', 'bezgi', 'bezik',
'bezir', 'bezli', 'bezme', 'bezsi', 'beşer', 'beşik', 'beşir', 'beşiz', 'beşli', 'beşme',
'beşon', 'beşuş', 'biber', 'biblo', 'bicik', 'bidar', 'bider', 'bidon', 'bihin', 'bihuş',
'bijon', 'bikes', 'bikir', 'bilar', 'bilağ', 'bildi', 'bilek', 'bilen', 'bilet', 'bilez',
'bilge', 'bilgi', 'bilik', 'bilim', 'bilir', 'bilit', 'biliş', 'bilme', 'bilye', 'bimar',
'binde', 'bindi', 'binek', 'biner', 'bingi', 'binim', 'binin', 'binit', 'biniş', 'binme',
'binom', 'biran', 'biraz', 'birci', 'birem', 'birer', 'birey', 'birim', 'birli', 'birun',
'bitap', 'bitek', 'biten', 'biter', 'bitey', 'bitik', 'bitim', 'bitiş', 'bitki', 'bitli',
'bitme', 'bitti', 'bitüm', 'biyel', 'biyom', 'bizam', 'bizar', 'bizce', 'bizim', 'bizir',
'bizon', 'biçem', 'biçim', 'biçiş', 'biçki', 'biçme', 'bişek', 'bişet', 'bişme', 'bişri',
'bloke', 'bluza', 'bobin', 'bocit', 'bocuk', 'bodhi', 'bodik', 'bodun', 'bodur', 'boduç',
'bofor', 'bohem', 'bohça', 'boklu', 'bokta', 'bokuk', 'bokum', 'bokun', 'bolca', 'bomba',
'bombe', 'borak', 'boran', 'borat', 'borca', 'borcu', 'borda', 'bordo', 'borik', 'borsa',
'boruk', 'boyam', 'boyan', 'boyar', 'boyca', 'boylu', 'boyna', 'boynu', 'boyoz', 'boyun',
'boyut', 'bozar', 'bozay', 'bozca', 'bozdu', 'bozma', 'bozon', 'bozuk', 'bozum', 'boğak',
'boğan', 'boğar', 'boğaz', 'boğdu', 'boğma', 'boğuk', 'boğum', 'boğur', 'boşan', 'boşar',
'boşay', 'boşta', 'brail', 'branş', 'bravo', 'brode', 'bronz', 'bronş', 'brove', 'bröve',
'bubuş', 'bucak', 'budak', 'budar', 'budun', 'bugün', 'buhar', 'buhul', 'buhur', 'bukal',
'buket', 'bukle', 'bulak', 'buldu', 'bulgu', 'bulli', 'bulma', 'buluk', 'bulun', 'bulup',
'bulur', 'bulut', 'buluz', 'buluç', 'buluğ', 'buluş', 'bulüz', 'bumba', 'bunak', 'bunar',
'bunca', 'bunda', 'bunlu', 'bunun', 'buram', 'burar', 'burcu', 'burdu', 'burgu', 'burka',
'burma', 'burnu', 'buruk', 'burum', 'burun', 'buruş', 'butik', 'buton', 'buyma', 'buyot',
'buyur', 'buzcu', 'buzla', 'buzlu', 'buzsa', 'buzul', 'buçuk', 'buğra', 'buğul', 'buğur',
'buşon', 'böbür', 'böcek', 'böcül', 'böldü', 'bölek', 'bölen', 'böler', 'böleç', 'bölge',
'bölme', 'böluk', 'bölük', 'bölüm', 'bölün', 'bölüt', 'bölüş', 'bönce', 'börek', 'börtü',
'bösme', 'böyle', 'böyük', 'böğet', 'böğsü', 'böğür', 'bücür', 'büken', 'büker', 'bükme',
'büktü', 'bükük', 'büküm', 'bükün', 'büküç', 'büküş', 'bülke', 'büluğ', 'bülük', 'bülüç',
'bülüş', 'bünye', 'bürgü', 'büruc', 'bürçe', 'bürük', 'bürüm', 'bürün', 'bürür', 'bütan',
'büten', 'bütçe', 'bütün', 'büvet', 'büyük', 'büyür', 'büzdü', 'büzer', 'büzgü', 'büzme',
'büzük', 'büğet', 'büğlü', 'büşra', 'bıcik', 'bıcıl', 'bıcır', 'bıdık', 'bıkar', 'bıkma',
'bıktı', 'bıkıp', 'bıkış', 'bılik', 'bılla', 'bılık', 'bılız', 'bıtık', 'bıyık', 'bızır',
'bıçak', 'bıçik', 'bıçkı', 'bıçık', 'cacık', 'cadde', 'cafli', 'cahal', 'cahil', 'caize',
'caket', 'calak', 'calip', 'camcı', 'camia', 'camii', 'camim', 'camin', 'camit', 'camlı',
'camsı', 'camuz', 'camız', 'canan', 'canip', 'canla', 'canlı', 'cansu', 'canım', 'canın',
'capıl', 'capıt', 'carlı', 'carse', 'carta', 'casus', 'cavır', 'cayma', 'cayır', 'cayış',
'cazcı', 'cazip', 'cazlı', 'cazır', 'cebel', 'cebin', 'cebir', 'cebri', 'cedit', 'cedre',
'cefni', 'cehil', 'cehiz', 'cehre', 'cehri', 'ceket', 'celal', 'celbe', 'celep', 'celil',
'celle', 'celse', 'cemal', 'ceman', 'cemil', 'cemre', 'cenah', 'cenap', 'cenin', 'cenup',
'cephe', 'cepçi', 'ceran', 'cerek', 'ceren', 'cerge', 'cerre', 'ceset', 'cesim', 'ceste',
'cesur', 'ceton', 'cevap', 'cevaz', 'cevir', 'ceviz', 'cevri', 'cevvi', 'ceyda', 'cezai',
'cezam', 'cezan', 'cezbe', 'cezim', 'cezir', 'cezri', 'cezve', 'check', 'cibes', 'cibin',
'cibre', 'cicik', 'cicil', 'cicim', 'cicoz', 'cidal', 'cidar', 'ciddi', 'cifir', 'cihan',
'cihar', 'cihat', 'cihaz', 'cihet', 'cilet', 'cilve', 'cimri', 'cinai', 'cinas', 'cinci',
'cinli', 'cinsi', 'ciret', 'cirim', 'cirit', 'cisim', 'cisme', 'cismi', 'civan', 'civar',
'ciyan', 'ciyer', 'ciyiş', 'cizye', 'ciğer', 'cokey', 'conta', 'corum', 'coşar', 'coşku',
'coşma', 'coştu', 'cudam', 'cugul', 'cukka', 'culfa', 'culuk', 'cumba', 'cunda', 'cunta',
'curuk', 'cuşiş', 'cübbe', 'cübür', 'cücük', 'cülus', 'cümle', 'cümud', 'cünha', 'cünun',
'cünüp', 'cüppe', 'cürde', 'cüret', 'cürmü', 'cüruf', 'cürum', 'cürüm', 'cüsse', 'cüzam',
'cüzzi', 'cıbıl', 'cıbır', 'cıcık', 'cıdak', 'cılga', 'cılkı', 'cılız', 'cımık', 'cıngı',
'cırık', 'cıvar', 'cıvma', 'cıvık', 'cıvıl', 'cıvır', 'cıyak', 'cızık', 'cızır', 'cığır',
'dabak', 'daban', 'dadaş', 'dafia', 'dahil', 'dahli', 'dahra', 'daima', 'daimi', 'daire',
'dakik', 'dakka', 'dalak', 'dalan', 'dalap', 'dalar', 'dalaş', 'daldı', 'dalga', 'dalgı',
'dallı', 'dalma', 'dalsı', 'dalya', 'dalıp', 'dalız', 'dalış', 'damak', 'damar', 'damat',
'damcı', 'damga', 'damla', 'damlı', 'danni', 'danua', 'danış', 'darab', 'daraç', 'daraş',
'darbe', 'darca', 'darda', 'darma', 'darül', 'dasda', 'dasit', 'datif', 'datlı', 'davar',
'davet', 'davul', 'davya', 'dayak', 'dayar', 'dayze', 'dağar', 'dağcı', 'dağda', 'dağlı',
'dağın', 'daşga', 'debağ', 'debba', 'debbe', 'deber', 'debil', 'dedik', 'dedim', 'dedin',
'defin', 'defne', 'defol', 'degaj', 'dehan', 'deist', 'deizm', 'dekan', 'dekar', 'dekor',
'delal', 'deldi', 'delep', 'deler', 'delgi', 'delik', 'delil', 'delme', 'delta', 'demek',
'demem', 'demet', 'demeç', 'demin', 'demir', 'demiş', 'demli', 'dendi', 'denek', 'denel',
'dener', 'denet', 'deney', 'denge', 'denim', 'denir', 'deniz', 'denli', 'denme', 'denyo',
'depar', 'depme', 'derbi', 'derde', 'derdi', 'deren', 'derer', 'dergi', 'derim', 'derin',
'deriz', 'derli', 'derme', 'derse', 'dersi', 'derun', 'derya', 'desen', 'deste', 'detay',
'devam', 'devce', 'devim', 'devin', 'devir', 'devre', 'devri', 'deyil', 'deyim', 'deyin',
'deyip', 'deyiş', 'dezze', 'değdi', 'değer', 'değeç', 'değil', 'değim', 'değin', 'değiş',
'değme', 'deşer', 'deşik', 'deşme', 'deşti', 'diazo', 'dibek', 'didar', 'didek', 'didik',
'didon', 'digin', 'dikel', 'diken', 'diker', 'dikey', 'dikeç', 'dikim', 'dikit', 'dikiz',
'dikiş', 'dikme', 'dikse', 'dikta', 'dikte', 'dikti', 'dikçe', 'dilci', 'dilde', 'dilek',
'diler', 'dilev', 'dilim', 'dilin', 'diliş', 'dille', 'dilli', 'dilme', 'dilüe', 'dimağ',
'dimek', 'dinar', 'dince', 'dinci', 'dinde', 'dinek', 'dinen', 'dinge', 'dingi', 'dinim',
'diniş', 'dinle', 'dinli', 'dinme', 'dinse', 'dioik', 'dipli', 'direk', 'diren', 'direy',
'dirig', 'dirik', 'diril', 'dirim', 'diriğ', 'disko', 'ditme', 'dival', 'divan', 'divik',
'divit', 'diyar', 'diyet', 'diyez', 'diyor', 'diyot', 'dizdi', 'dizek', 'dizel', 'dizem',
'dizer', 'dizey', 'dizge', 'dizgi', 'dizil', 'dizim', 'dizin', 'diziş', 'dizme', 'diğer',
'dişil', 'dişim', 'dişin', 'dişli', 'dişte', 'dişçi', 'dobra', 'dogma', 'dokur', 'dokuz',
'dolak', 'dolam', 'dolan', 'dolap', 'dolar', 'dolay', 'dolaz', 'doldu', 'dolgu', 'dolin',
'dolma', 'dolum', 'dolun', 'dolup', 'doluş', 'dolça', 'domat', 'domra', 'domur', 'domuz',
'donak', 'donam', 'donar', 'dondu', 'dongu', 'donlu', 'donma', 'donra', 'donuk', 'donup',
'donör', 'dorse', 'doruk', 'dorum', 'dosta', 'dosya', 'doyar', 'doydu', 'doygu', 'doyma',
'doyra', 'doyum', 'doyuş', 'dozaj', 'dozer', 'doğal', 'doğan', 'doğar', 'doğaç', 'doğdu',
'doğma', 'doğru', 'doğum', 'doğuş', 'draje', 'drama', 'drupa', 'duacı', 'duası', 'dubar',
'dubel', 'duble', 'dudak', 'duhul', 'dulda', 'duluk', 'duman', 'dumur', 'dunuk', 'durak',
'dural', 'duran', 'duraç', 'durdu', 'durgu', 'durma', 'duruk', 'durum', 'durun', 'durup',
'durur', 'duruş', 'dutar', 'duvak', 'duvar', 'duvaz', 'duyar', 'duydu', 'duygu', 'duyma',
'duyuk', 'duyum', 'duyur', 'duyuş', 'duçar', 'duşak', 'duşla', 'duşta', 'duşum', 'duşun',
'döfen', 'döker', 'dökme', 'döktü', 'dökük', 'döküm', 'döküp', 'dölek', 'döllü', 'dölüt',
'döndü', 'dönek', 'dönel', 'dönem', 'döner', 'döneç', 'döngu', 'döngü', 'dönme', 'dönük',
'dönüm', 'dönüt', 'dönüş', 'dörüt', 'dövdü', 'döven', 'döver', 'döveç', 'döviz', 'dövme',
'dövüş', 'dözme', 'döğen', 'döğüş', 'döşek', 'döşem', 'döşer', 'döşte', 'döşüm', 'döşün',
'dübel', 'dübeş', 'dübrü', 'dübür', 'düdek', 'düden', 'düdük', 'dühul', 'dümen', 'dümür',
'dünek', 'dünit', 'dünkü', 'dünya', 'dünür', 'dürme', 'dürtü', 'dürzü', 'dürüm', 'düvel',
'düven', 'düver', 'düyan', 'düyek', 'düyun', 'düzce', 'düzdü', 'düzek', 'düzem', 'düzen',
'düzer', 'düzey', 'düzeç', 'düzgü', 'düzme', 'düzüm', 'düçar', 'düğme', 'düğüm', 'düğün',
'düşer', 'düşes', 'düşey', 'düşeş', 'düşkü', 'düşme', 'düşte', 'düştü', 'düşçü', 'düşük',
'düşüm', 'düşün', 'düşüp', 'düşüt', 'düşüş', 'dıbır', 'dılak', 'dırıç', 'dığan', 'dışar',
'dışkı', 'dışık', 'ebced', 'ebcet', 'ebedi', 'ebeli', 'ebemi', 'ebene', 'ebeni', 'ebleh',
'eccük', 'ecdat', 'eceli', 'ecnef', 'ecrin', 'edalı', 'edebi', 'edeme', 'edinç', 'edvar',
'efdal', 'efece', 'efekt', 'efkar', 'eflak', 'efrat', 'efriz', 'efsun', 'efsus', 'eftal',
'eften', 'efuli', 'efzal', 'eglog', 'egsos', 'egsoz', 'egzos', 'egzoz', 'ehali', 'ehram',
'ehven', 'ejder', 'ekber', 'ekici', 'ekili', 'ekini', 'eklem', 'ekler', 'ekmek', 'ekmem',
'ekmez', 'ekmiş', 'ekolu', 'ekose', 'ekran', 'ekrut', 'eksen', 'ekser', 'eksik', 'eksin',
'eksos', 'eksoz', 'eksük', 'ekten', 'ektik', 'ektim', 'ektin', 'ekzos', 'ekzoz', 'eküri',
'ekşir', 'ekşit', 'elbet', 'elbir', 'elbiz', 'elcik', 'elden', 'elece', 'eledi', 'eleji',
'eleme', 'elemi', 'elgin', 'elhac', 'elhak', 'elhal', 'elhan', 'elhap', 'elifi', 'eline',
'elini', 'elips', 'elisa', 'elişi', 'elkab', 'ellam', 'eller', 'ellik', 'elmas', 'elmek',
'elvan', 'elyaf', 'elzem', 'elçek', 'elçim', 'elçin', 'emare', 'emaye', 'emcek', 'emcik',
'emdik', 'emdim', 'emdin', 'emeti', 'emeği', 'emice', 'emici', 'emlak', 'emlek', 'emlik',
'emmek', 'emmem', 'emmez', 'emmeç', 'emmiş', 'emraz', 'emrin', 'emsal', 'emtia', 'emval',
'emvat', 'emzik', 'enayi', 'enbar', 'enbik', 'encam', 'encek', 'encik', 'encir', 'endam',
'endem', 'ender', 'eneme', 'eneze', 'enfas', 'enfes', 'enfüs', 'engel', 'enger', 'engeç',
'engin', 'enine', 'enkaz', 'enlem', 'enmek', 'ensar', 'enser', 'ensiz', 'entel', 'envai',
'enver', 'enzim', 'enöte', 'eosen', 'eozin', 'epeyi', 'epkem', 'epope', 'epsem', 'erbap',
'erbaş', 'erbin', 'ercik', 'erdem', 'erden', 'erezi', 'ergen', 'ergin', 'eridi', 'erika',
'erime', 'erinç', 'erkek', 'erken', 'erkeç', 'erkil', 'erkin', 'erkli', 'erlik', 'ermek',
'ermin', 'ermiş', 'eroin', 'ersad', 'ersiz', 'ervah', 'erzak', 'erzel', 'esame', 'esami',
'esans', 'esasa', 'esasi', 'esbak', 'esbap', 'eseme', 'esemm', 'esham', 'esire', 'eskil',
'eskir', 'eskiz', 'eslaf', 'eslek', 'esmek', 'esmer', 'esmez', 'esnaf', 'esneb', 'esnek',
'espas', 'espri', 'esrar', 'esrik', 'essah', 'esseh', 'estek', 'ester', 'estet', 'esvab',
'esvap', 'etene', 'eteğe', 'eteği', 'etfal', 'etime', 'etine', 'etken', 'etkin', 'etlik',
'etmek', 'etmem', 'etmen', 'etmez', 'etmiş', 'etnik', 'etraf', 'etsiz', 'ettik', 'ettim',
'ettin', 'etçik', 'etçil', 'evaze', 'evcek', 'evcik', 'evcil', 'evden', 'evdeş', 'eveli',
'evgin', 'evham', 'evire', 'eviri', 'eviye', 'evken', 'evlat', 'evlek', 'evler', 'evlik',
'evmek', 'evrak', 'evrat', 'evren', 'evreç', 'evrik', 'evrim', 'evsaf', 'evsel', 'evsen',
'evsin', 'evsiz', 'evvel', 'eyere', 'eyeri', 'eyger', 'eylem', 'eylik', 'eylül', 'eytam',
'eyvah', 'eyvan', 'eyyam', 'ezani', 'ezber', 'ezdik', 'ezdim', 'ezdin', 'ezeli', 'ezgin',
'ezgiç', 'ezici', 'ezile', 'ezinç', 'ezkar', 'ezmek', 'ezmem', 'ezmez', 'ezmiş', 'eçhel',
'eğdik', 'eğdim', 'eğdin', 'eğlek', 'eğmek', 'eğmem', 'eğmez', 'eğmeç', 'eğmiş', 'eğrez',
'eğrim', 'eşarp', 'eşeğe', 'eşhas', 'eşkin', 'eşlek', 'eşlem', 'eşler', 'eşlik', 'eşmek',
'eşraf', 'eşref', 'eşsiz', 'eşten', 'eşyam', 'eşyan', 'eşşek', 'faale', 'facia', 'fagot',
'fahim', 'fahir', 'fahiş', 'fahri', 'fahte', 'fahur', 'faide', 'faize', 'faizi', 'fakat',
'fakih', 'fakir', 'fakül', 'fakır', 'falan', 'falcı', 'falez', 'falso', 'falya', 'fanta',
'fanti', 'fanus', 'fanya', 'faraş', 'farba', 'farik', 'faril', 'farin', 'faris', 'fariv',
'fariğ', 'farka', 'farkı', 'faroz', 'farta', 'farza', 'farzı', 'faset', 'fasid', 'fasih',
'fasit', 'faska', 'fasla', 'fason', 'fasık', 'fasıl', 'fatih', 'fatül', 'fatır', 'fauna',
'fayda', 'fazla', 'fazıl', 'faşır', 'fecir', 'fedai', 'fedik', 'feeri', 'fehim', 'fehme',
'fehmi', 'fehva', 'fekal', 'fekül', 'felah', 'felak', 'felan', 'felce', 'felek', 'femur',
'fenci', 'fener', 'fenik', 'fenni', 'fenol', 'ferah', 'ferağ', 'ferce', 'ferci', 'ferda',
'ferde', 'ferdi', 'feret', 'ferih', 'ferik', 'ferli', 'ferma', 'fesad', 'fesat', 'fesih',
'fesli', 'fetha', 'fethi', 'fetih', 'fetil', 'fetiş', 'fetva', 'fetüs', 'fevri', 'feyfa',
'feyiz', 'fiber', 'fidan', 'fidye', 'fifre', 'figan', 'figen', 'figür', 'fiile', 'fiili',
'fikir', 'fikri', 'filan', 'filar', 'filet', 'filik', 'filim', 'filiz', 'filme', 'filmi',
'filoz', 'filum', 'final', 'finiş', 'firak', 'firar', 'firaz', 'firek', 'firez', 'firik',
'firka', 'firma', 'fiske', 'fisto', 'fiten', 'fites', 'fitil', 'fitin', 'fitne', 'fitre',
'fitçi', 'fiyat', 'fizik', 'fişek', 'fişka', 'fişli', 'flama', 'fleol', 'flora', 'flori',
'flöre', 'flört', 'flüor', 'fodla', 'fodra', 'fodul', 'fokur', 'fokus', 'folyo', 'fonda',
'fonem', 'forma', 'foroz', 'forsa', 'forsu', 'forte', 'forum', 'forza', 'fosil', 'fosur',
'foton', 'frank', 'frape', 'frenk', 'fresk', 'freze', 'frigo', 'frika', 'frisa', 'fruko',
'fuaye', 'fuhuş', 'fujer', 'fular', 'fulse', 'fulya', 'funda', 'funya', 'furya', 'fuşki',
'fötus', 'fötör', 'fücur', 'fülüt', 'fünye', 'füsun', 'fütur', 'füzen', 'fıkra', 'fıkıh',
'fıkır', 'fırka', 'fırla', 'fırta', 'fırtı', 'fırça', 'fırıl', 'fırın', 'fısıl', 'fısır',
'fıtri', 'fıtık', 'fışkı', 'fışır', 'gabağ', 'gabin', 'gabro', 'gabya', 'gabır', 'gacal',
'gacır', 'gadir', 'gadre', 'gafil', 'gaful', 'gafur', 'gaile', 'gaita', 'galan', 'galat',
'galba', 'galep', 'galif', 'galip', 'galiz', 'galle', 'galon', 'galop', 'galoş', 'galve',
'gamba', 'gamet', 'gamga', 'gamlı', 'gamze', 'ganad', 'ganem', 'ganlı', 'ganım', 'gapız',
'garaj', 'garaz', 'garbi', 'garip', 'garni', 'garoz', 'garıv', 'gasil', 'gaste', 'gasıp',
'gatma', 'gauss', 'gavot', 'gavur', 'gavın', 'gavıt', 'gayda', 'gayet', 'gayfa', 'gayri',
'gayrı', 'gayur', 'gayya', 'gayçı', 'gazab', 'gazal', 'gazap', 'gazel', 'gazlı', 'gazoz',
'gazte', 'gazup', 'gazve', 'gaşiy', 'gebeş', 'gebol', 'gebre', 'gecek', 'gecem', 'gecen',
'gedem', 'gedik', 'gedme', 'geldi', 'gelek', 'gelen', 'gelin', 'gelip', 'gelir', 'geliş',
'gelme', 'gemig', 'gendi', 'genel', 'genez', 'geniz', 'geniş', 'genom', 'geoit', 'gerdi',
'gerek', 'geren', 'gerer', 'gerey', 'gereç', 'gerfi', 'gergi', 'gerim', 'geriz', 'geriş',
'germe', 'gerze', 'gerçi', 'getir', 'getto', 'geven', 'geviş', 'gevme', 'gevük', 'geyik',
'geyşa', 'gezdi', 'gezer', 'gezip', 'geziş', 'gezme', 'geçek', 'geçen', 'geçer', 'geçim',
'geçit', 'geçiş', 'geçki', 'geçme', 'geçti', 'geççe', 'gidek', 'giden', 'gider', 'gidil',
'gidim', 'gidin', 'gidip', 'gidiş', 'gidon', 'gilik', 'giliç', 'ginez', 'gipür', 'giray',
'girde', 'girdi', 'girek', 'giren', 'girim', 'girip', 'giriş', 'girme', 'girye', 'gitar',
'gitme', 'gitse', 'gitti', 'giydi', 'giyer', 'giyim', 'giyin', 'giyit', 'giyiş', 'giyme',
'giysi', 'gizem', 'gizge', 'gizil', 'gizli', 'glase', 'gnays', 'gobal', 'gobel', 'gobit',
'gobça', 'gocuk', 'goden', 'godoş', 'goduş', 'gogol', 'gogoş', 'gohle', 'gohum', 'golan',
'golcü', 'gonat', 'gonca', 'gopca', 'goril', 'goruk', 'gotik', 'grado', 'greko', 'grena',
'grizu', 'grogi', 'grosa', 'grızü', 'guano', 'guatr', 'gubar', 'gudde', 'gudik', 'gugar',
'guguk', 'gulaş', 'gulet', 'guluk', 'gulya', 'gurfe', 'gurka', 'gurme', 'gurup', 'gurur',
'gurut', 'gussa', 'gusto', 'gusül', 'guval', 'göbek', 'göbel', 'göbüt', 'göcek', 'göcen',
'göden', 'gödeş', 'gökte', 'gökçe', 'gölek', 'gölet', 'gölge', 'gölle', 'gölük', 'gömdü',
'gömer', 'gömeç', 'gömme', 'gömük', 'gömüt', 'gömüş', 'göncü', 'gönen', 'gönle', 'gönlü',
'gönye', 'gönül', 'gördü', 'görev', 'görge', 'görgü', 'görme', 'görüm', 'görün', 'görüp',
'görür', 'görüş', 'götle', 'götoş', 'götçü', 'götün', 'götür', 'gövde', 'gövek', 'gövel',
'gövem', 'göyük', 'gözcü', 'gözde', 'gözel', 'gözer', 'gözgü', 'gözle', 'gözlü', 'gözse',
'gözüm', 'gözün', 'göçer', 'göçme', 'göçtü', 'göçük', 'göçüm', 'göçüp', 'göçüş', 'göğem',
'göğer', 'göğsü', 'göğüs', 'gübre', 'gübür', 'gücük', 'gücün', 'güdek', 'güdük', 'güdüm',
'güfte', 'gügüm', 'güher', 'gülcü', 'gülde', 'güldü', 'gülen', 'güler', 'güleç', 'gülle',
'güllü', 'gülme', 'gülük', 'gülün', 'gülüp', 'gülür', 'gülüt', 'gülüş', 'güman', 'gümen',
'gümeç', 'gümüş', 'günah', 'günce', 'günde', 'günek', 'güney', 'güneç', 'güneş', 'günlü',
'günük', 'günün', 'güpür', 'gürel', 'güreş', 'güruh', 'gürül', 'gütme', 'güven', 'güvey',
'güvez', 'güveç', 'güyan', 'güyer', 'güygü', 'güyük', 'güzaf', 'güzel', 'güzem', 'güzer',
'güzey', 'güzin', 'güzün', 'güçlü', 'güğül', 'güğüm', 'gıcık', 'gıcır', 'gıdak', 'gıdik',
'gıdık', 'gıdıl', 'gıdım', 'gılik', 'gılık', 'gıpta', 'gırak', 'gırla', 'gırıl', 'gısır',
'gıtma', 'gıyap', 'gıyli', 'habbe', 'haber', 'habeş', 'habip', 'habis', 'hacca', 'haccı',
'hacda', 'hacet', 'hacim', 'hacir', 'haciz', 'hadde', 'haddi', 'hades', 'hadid', 'hadim',
'hadis', 'hadım', 'hafif', 'hafit', 'hafta', 'haftı', 'hafız', 'haham', 'hahha', 'haile',
'hakan', 'hakem', 'haket', 'hakim', 'hakir', 'hakka', 'hakkı', 'haklı', 'hakta', 'hakça',
'halas', 'halat', 'halay', 'halef', 'halel', 'halfa', 'halik', 'halim', 'halis', 'haliç',
'halka', 'halle', 'halon', 'halça', 'hamak', 'hamal', 'hamam', 'haman', 'hamil', 'hamiş',
'hamla', 'hamle', 'hampa', 'hamse', 'hamsi', 'hamur', 'hamut', 'hamız', 'hanak', 'hanay',
'hancı', 'hande', 'hanek', 'hangi', 'hanos', 'hanut', 'hanzo', 'hanım', 'hapaz', 'hapis',
'hapçı', 'hapır', 'hapşu', 'haral', 'haram', 'harap', 'harar', 'haraç', 'harba', 'harbe',
'harbi', 'harcı', 'harem', 'harif', 'harim', 'harir', 'haris', 'hariç', 'harlı', 'harta',
'harıl', 'harım', 'harın', 'hasar', 'hasat', 'hasbi', 'hasen', 'hasep', 'haset', 'hasis',
'haspa', 'hassa', 'hasse', 'hasta', 'hasut', 'hasıl', 'hasım', 'hasır', 'hatia', 'hatif',
'hatim', 'hatip', 'hatla', 'hatmi', 'hatsa', 'hatta', 'hatun', 'hatıl', 'hatır', 'havai',
'havan', 'havas', 'havil', 'havis', 'havlu', 'havlı', 'havra', 'havut', 'havuz', 'havuç',
'havya', 'havza', 'hayal', 'hayat', 'haybe', 'hayda', 'haydi', 'hayfa', 'hayin', 'hayli',
'hayma', 'haynk', 'hayra', 'hayta', 'hayıf', 'hayın', 'hayır', 'hayız', 'hazal', 'hazan',
'hazar', 'hazcı', 'hazif', 'hazin', 'hazne', 'hazık', 'hazım', 'hazın', 'hazır', 'haçlı',
'haçta', 'haçın', 'haşat', 'haşin', 'haşir', 'haşiv', 'haşiş', 'haşıl', 'haşım', 'haşır',
'hecin', 'hedef', 'heder', 'hedik', 'hediy', 'hekim', 'helak', 'helal', 'helik', 'helin',
'helis', 'helke', 'helki', 'helme', 'helva', 'hemen', 'hempa', 'henüz', 'hepsi', 'herek',
'herem', 'herif', 'herik', 'herke', 'hertz', 'herze', 'hesap', 'heste', 'heves', 'heybe',
'heyet', 'heyle', 'heyre', 'heyya', 'hezel', 'heğri', 'hibeş', 'hicap', 'hicaz', 'hiciv',
'hicri', 'hidiv', 'hidra', 'hikem', 'hilaf', 'hilal', 'hilye', 'himen', 'hindi', 'hiper',
'hippi', 'hisar', 'hisli', 'hisse', 'hissi', 'hitam', 'hitan', 'hitap', 'hizip', 'hiççi',
'hocam', 'hodah', 'hodak', 'hodan', 'hodri', 'hokey', 'hokka', 'hokus', 'homur', 'hopla',
'hoppa', 'horam', 'horda', 'horon', 'horoz', 'horst', 'horul', 'hotoz', 'hotum', 'hozan',
'hoşaf', 'hoşot', 'hoşur', 'hoşça', 'hudut', 'huduş', 'hufre', 'hufye', 'hukuk', 'hulul',
'hulus', 'hulya', 'humar', 'humma', 'humor', 'humus', 'hurda', 'hurma', 'hurra', 'huruf',
'huruç', 'hurüf', 'husuf', 'husul', 'husus', 'husye', 'hutbe', 'hutut', 'huylu', 'huzme',
'huzur', 'hödük', 'högeç', 'höküz', 'hörek', 'höyük', 'hücre', 'hücum', 'hükme', 'hükmi',
'hükmü', 'hüküm', 'hülle', 'hülya', 'hüner', 'hünsa', 'hürle', 'hürya', 'hüsnü', 'hüsun',
'hüsün', 'hüzme', 'hüzün', 'hıdiv', 'hıfız', 'hımış', 'hınca', 'hırik', 'hırka', 'hırlı',
'hırtı', 'hırıl', 'hısar', 'hısta', 'hısım', 'hıtap', 'hıyar', 'hızan', 'hızar', 'hızla',
'hızlı', 'hızma', 'hızır', 'hışik', 'hışıl', 'hışım', 'hışır', 'ibahe', 'ibare', 'ibate',
'ibcal', 'ibdai', 'ibham', 'ibhar', 'ibiki', 'iblağ', 'iblis', 'ibraz', 'ibret', 'ibrik',
'ibzal', 'icara', 'icare', 'icbar', 'iccas', 'icmal', 'idadi', 'idame', 'idara', 'idare',
'idari', 'idbar', 'iddaa', 'iddet', 'iddia', 'ideal', 'idhal', 'idman', 'idrak', 'idrar',
'idris', 'ifade', 'iffet', 'ifham', 'iflah', 'iflas', 'ifrat', 'ifraz', 'ifrağ', 'ifrit',
'ifsat', 'iftar', 'ifşat', 'ihada', 'ihale', 'ihata', 'ihbar', 'ihdas', 'ihlal', 'ihlas',
'ihmal', 'ihrac', 'ihram', 'ihraz', 'ihraç', 'ihsan', 'ihsas', 'ihtar', 'ihvan', 'ihzar',
'ikame', 'ikbal', 'ikdam', 'ikici', 'ikide', 'ikili', 'ikisi', 'ikiyi', 'iklim', 'ikmal',
'ikrah', 'ikram', 'ikrar', 'ikraz', 'iksir', 'ikter', 'ilahe', 'ilahi', 'ilanı', 'ilave',
'ilbay', 'ilenç', 'ileri', 'ileti', 'ilgeç', 'ilhak', 'ilham', 'ilhan', 'ilkah', 'ilkel',
'ilkin', 'illet', 'ilmek', 'ilmik', 'ilyen', 'ilzam', 'imale', 'imalı', 'imama', 'imame',
'imamı', 'imana', 'imanı', 'imbat', 'imbik', 'imdat', 'imece', 'imkan', 'imlek', 'imlem',
'imleç', 'imren', 'imroz', 'imsak', 'inadı', 'inanç', 'inaye', 'inbat', 'incaz', 'incik',
'incil', 'incir', 'indik', 'indim', 'indin', 'indis', 'inebe', 'infak', 'infaz', 'ingin',
'inkar', 'inler', 'inmek', 'inmem', 'inmez', 'inmiş', 'input', 'insaf', 'insan', 'intak',
'intan', 'intaç', 'inzal', 'inşaa', 'inşad', 'inşai', 'inşat', 'ipeka', 'ipham', 'ipini',
'ipken', 'ipler', 'iplik', 'ipnoz', 'ipsiz', 'iptal', 'ipten', 'ipucu', 'ipçik', 'irade',
'iradi', 'iradı', 'ireli', 'ireng', 'irenç', 'irfan', 'irhas', 'irice', 'irili', 'irite',
'irkme', 'irmik', 'ironi', 'irsal', 'irsen', 'irşat', 'isale', 'isbat', 'isevi', 'ishak',
'ishal', 'iskan', 'islim', 'ismen', 'ismet', 'ismin', 'isnat', 'ispat', 'ispir', 'ispit',
'israf', 'israr', 'istek', 'istem', 'isten', 'ister', 'istif', 'istim', 'istol', 'istop',
'istor', 'isyan', 'itaat', 'iteği', 'ithaf', 'ithal', 'itham', 'itici', 'itila', 'itina',
'itlaf', 'itlik', 'itmam', 'itmek', 'itmem', 'itmez', 'itrak', 'itsiz', 'ittik', 'ittim',
'ittin', 'itülü', 'ivedi', 'ivesi', 'ivmek', 'iyesi', 'iyice', 'iyiye', 'izabe', 'izafe',
'izafi', 'izale', 'izden', 'izhar', 'izine', 'izini', 'izlek', 'izlem', 'izler', 'izlev',
'iznim', 'iznin', 'izole', 'izzet', 'içeri', 'içici', 'içine', 'içini', 'içkin', 'içlek',
'içlem', 'içler', 'içlik', 'içmek', 'içmem', 'içmez', 'içmiş', 'içrek', 'içsel', 'içses',
'içsiz', 'içten', 'içtik', 'içtim', 'içtin', 'içyüz', 'içzar', 'iğdiş', 'iğfal', 'iğlik',
'işcen', 'işedi', 'işeme', 'işgal', 'işini', 'işkil', 'işlek', 'işlem', 'işler', 'işlet',
'işlev', 'işleç', 'işlik', 'işmar', 'işrak', 'işret', 'işsiz', 'iştah', 'işten', 'işteş',
'işyar', 'işçik', 'jakar', 'jaket', 'japon', 'jarse', 'jeloz', 'jeoit', 'jeole', 'jeton',
'jiant', 'jikle', 'jilet', 'jipon', 'joker', 'jokey', 'joule', 'jupon', 'jüpon', 'kabak',
'kaban', 'kabay', 'kabil', 'kabin', 'kabir', 'kablo', 'kabuk', 'kabul', 'kabus', 'kabuz',
'kabza', 'kabın', 'kabız', 'kacik', 'kadar', 'kadaş', 'kadeh', 'kadem', 'kader', 'kadim',
'kadir', 'kadit', 'kadre', 'kadro', 'kadük', 'kadın', 'kafes', 'kafir', 'kaful', 'kafur',
'kagir', 'kaham', 'kahat', 'kahin', 'kahir', 'kahpe', 'kahve', 'kahya', 'kahım', 'kahır',
'kaide', 'kaime', 'kakao', 'kakar', 'kakaç', 'kakle', 'kakma', 'kaktı', 'kakum', 'kakım',
'kakır', 'kakıç', 'kakış', 'kalak', 'kalan', 'kalao', 'kalas', 'kalay', 'kalbi', 'kalcı',
'kalde', 'kaldı', 'kalem', 'kalfa', 'kalma', 'kalya', 'kalça', 'kalıb', 'kalık', 'kalım',
'kalın', 'kalıp', 'kalır', 'kalıt', 'kalıç', 'kalığ', 'kalış', 'kamer', 'kamet', 'kamga',
'kamil', 'kamis', 'kamka', 'kamus', 'kamçı', 'kamış', 'kanal', 'kanar', 'kanat', 'kanca',
'kande', 'kandı', 'kaniş', 'kanka', 'kanki', 'kanlı', 'kanma', 'kanon', 'kanto', 'kanun',
'kanık', 'kanıt', 'kanış', 'kapak', 'kapan', 'kapar', 'kapik', 'kaplı', 'kapma', 'kaptı',
'kaput', 'kapuz', 'kapıp', 'kapış', 'karaf', 'karak', 'karan', 'karar', 'karaç', 'karda',
'kardı', 'karga', 'kargo', 'kargı', 'karha', 'karlı', 'karma', 'karne', 'karni', 'karnı',
'karst', 'kartı', 'karun', 'karye', 'karık', 'karım', 'karın', 'karış', 'karşı', 'kasap',
'kasar', 'kasem', 'kaset', 'kasis', 'kasko', 'kasla', 'kaslı', 'kasma', 'kasna', 'kasnı',
'kasti', 'kastı', 'kasık', 'kasıl', 'kasım', 'kasıp', 'kasır', 'kasıt', 'katar', 'katet',
'katil', 'katip', 'katkı', 'katlı', 'katma', 'katot', 'katre', 'kattı', 'katur', 'katık',
'katım', 'katır', 'kavaf', 'kavak', 'kaval', 'kavas', 'kavat', 'kavga', 'kavil', 'kavim',
'kavis', 'kavkı', 'kavmi', 'kavuk', 'kavum', 'kavun', 'kavut', 'kavuz', 'kayak', 'kayan',
'kayar', 'kayaç', 'kayda', 'kaydi', 'kaydı', 'kaygı', 'kayla', 'kayma', 'kayme', 'kayra',
'kaysı', 'kayık', 'kayın', 'kayıp', 'kayır', 'kayıt', 'kayış', 'kayşa', 'kazai', 'kazak',
'kazan', 'kazaz', 'kazdı', 'kazma', 'kazık', 'kazıl', 'kazım', 'kazın', 'kazır', 'kaçak',
'kaçan', 'kaçar', 'kaçlı', 'kaçma', 'kaçta', 'kaçtı', 'kaçık', 'kaçın', 'kaçır', 'kaçış',
'kağan', 'kağnı', 'kağım', 'kağıt', 'kaşan', 'kaşar', 'kaşer', 'kaşif', 'kaşla', 'kaşlı',
'kaşık', 'kaşır', 'kebap', 'kebir', 'kebze', 'keder', 'kefal', 'kefek', 'kefen', 'kefil',
'kefir', 'kefne', 'kefye', 'kehet', 'kehle', 'kekeç', 'kekik', 'kekre', 'kelam', 'kelee',
'kelek', 'kelem', 'kelep', 'keler', 'keleş', 'kelik', 'kelle', 'kelli', 'kemal', 'keman',
'kemed', 'kemer', 'kemha', 'kemik', 'kemis', 'kemne', 'kemre', 'kenar', 'kendi', 'kenef',
'kenet', 'kepek', 'kepez', 'kepik', 'kepir', 'kepiç', 'kepme', 'kepçe', 'kerat', 'kerde',
'kerem', 'keres', 'kerih', 'kerim', 'keriz', 'kerki', 'kerli', 'keroğ', 'kerpe', 'kerte',
'kerti', 'kerye', 'kesat', 'kesek', 'kesel', 'kesen', 'keser', 'kesif', 'kesik', 'kesim',
'kesin', 'kesip', 'kesir', 'kesit', 'kesiş', 'keski', 'kesme', 'kesre', 'kesti', 'ketal',
'keten', 'keton', 'ketum', 'kevel', 'keven', 'kevzi', 'kevük', 'keyfi', 'keyif', 'kezik',
'keşan', 'keşen', 'keşif', 'keşik', 'keşiş', 'keşke', 'keşki', 'keşme', 'kibar', 'kibir',
'kidin', 'kifaf', 'kifir', 'kikla', 'kilam', 'kiler', 'kilim', 'kilit', 'kiliz', 'killi',
'kilot', 'kilüs', 'kimde', 'kimin', 'kimse', 'kimya', 'kimüs', 'kinci', 'kinik', 'kinin',
'kiniş', 'kinli', 'kipin', 'kipri', 'kipte', 'kiraz', 'kirde', 'kirez', 'kireç', 'kiriş',
'kirli', 'kirpi', 'kirve', 'kispi', 'kiste', 'kisti', 'kisve', 'kitap', 'kitin', 'kitle',
'kitli', 'kitre', 'kivra', 'kiyad', 'kizir', 'klapa', 'klape', 'klark', 'klima', 'klips',
'klişe', 'kloak', 'klışe', 'koala', 'kobay', 'kobra', 'kodes', 'kodik', 'kodoş', 'kofra',
'kofti', 'koful', 'kokak', 'kokan', 'kokar', 'koket', 'kokma', 'kokon', 'kokot', 'kokoz',
'kokoş', 'kokus', 'kokuş', 'kolaj', 'kolan', 'kolay', 'kolcu', 'kolej', 'kolik', 'kolit',
'kollu', 'kolon', 'kolpa', 'kolpo', 'kolsu', 'kolun', 'kolye', 'kolza', 'komar', 'kombi',
'komik', 'komot', 'komut', 'komün', 'komşu', 'konak', 'konan', 'konar', 'konca', 'kondu',
'konik', 'konma', 'konsa', 'konuk', 'konum', 'konun', 'konur', 'konut', 'konuş', 'kopal',
'kopek', 'kopil', 'kopma', 'kopoy', 'kopuk', 'kopup', 'kopuz', 'kopya', 'kopye', 'kopça',
'kopçe', 'koral', 'korka', 'korku', 'korna', 'korno', 'korse', 'korta', 'korte', 'koruk',
'korun', 'korur', 'korza', 'kosba', 'kotan', 'koton', 'kotra', 'kovam', 'kovan', 'kovar',
'kovcu', 'kovdu', 'kovma', 'kovuk', 'kovuş', 'koyak', 'koyar', 'koydu', 'koyma', 'koyun',
'koyut', 'kozak', 'koçak', 'koçan', 'koçma', 'koğcu', 'koğma', 'koğuş', 'koşak', 'koşam',
'koşar', 'koşaç', 'koşer', 'koşin', 'koşku', 'koşma', 'koştu', 'koşuk', 'koşul', 'koşum',
'koşun', 'koşut', 'kraft', 'kramp', 'krank', 'kravl', 'kraça', 'kredi', 'krema', 'kriko',
'kroki', 'krome', 'kroşe', 'kubat', 'kubbe', 'kubur', 'kucak', 'kudal', 'kudas', 'kuduz',
'kudüm', 'kufur', 'kukla', 'kukri', 'kukul', 'kukus', 'kulak', 'kulaç', 'kulef', 'kulis',
'kulun', 'kulüp', 'kumar', 'kumaş', 'kumcu', 'kumla', 'kumlu', 'kumru', 'kumul', 'kumuç',
'kunda', 'kupes', 'kuple', 'kupon', 'kupro', 'kupür', 'kurak', 'kural', 'kuram', 'kuran',
'kurar', 'kurca', 'kurda', 'kurdu', 'kurgu', 'kurma', 'kurna', 'kuron', 'kurul', 'kurum',
'kurur', 'kurut', 'kuruş', 'kurya', 'kurye', 'kusar', 'kusma', 'kustu', 'kusur', 'kutan',
'kutlu', 'kutnu', 'kutsi', 'kutum', 'kutun', 'kutup', 'kutur', 'kutür', 'kuver', 'kuvva',
'kuvve', 'kuvöz', 'kuyis', 'kuytu', 'kuyum', 'kuzay', 'kuzen', 'kuzey', 'kuzin', 'kuşak',
'kuşam', 'kuşet', 'kuşku', 'kuşçu', 'köfte', 'köhne', 'köken', 'köklü', 'köksü', 'kökçe',
'kökçü', 'kökür', 'kölge', 'kölle', 'kölük', 'kömbe', 'kömek', 'kömeç', 'kömme', 'kömür',
'kömüş', 'köpek', 'köprü', 'köpük', 'körpe', 'körük', 'kösem', 'kösnü', 'kössü', 'kösçü',
'kötek', 'köten', 'köycü', 'köyde', 'köylü', 'köyüm', 'köyün', 'köçek', 'köşek', 'kübik',
'kübit', 'kübra', 'küflü', 'küfrü', 'küfür', 'küfüv', 'kükre', 'külah', 'külek', 'külli',
'küllü', 'külot', 'külte', 'külçe', 'külür', 'kümek', 'kümes', 'küncü', 'künde', 'küney',
'künge', 'künlü', 'künye', 'küplü', 'küpür', 'kürar', 'kürcü', 'kürdi', 'kürek', 'kürit',
'kürsü', 'kürük', 'küskü', 'küsme', 'küspe', 'küsuf', 'küsur', 'küsür', 'kütin', 'kütle',
'kütlü', 'kütük', 'kütür', 'küvet', 'küvöz', 'küçük', 'küşat', 'küşne', 'küşüm', 'kıble',
'kıdem', 'kıdık', 'kıdım', 'kıkır', 'kılaç', 'kılda', 'kıldı', 'kılgı', 'kıllı', 'kılma',
'kılıf', 'kılık', 'kılır', 'kılıç', 'kılış', 'kımıl', 'kımız', 'kınar', 'kınlı', 'kıpma',
'kıpti', 'kıpık', 'kıpır', 'kıral', 'kıran', 'kırar', 'kırat', 'kıray', 'kıraç', 'kırba',
'kırca', 'kırcı', 'kırdı', 'kırgı', 'kırkı', 'kırma', 'kırık', 'kırım', 'kırıp', 'kırış',
'kısar', 'kısas', 'kıska', 'kıskı', 'kısma', 'kısmi', 'kıssa', 'kıstı', 'kısık', 'kısım',
'kısır', 'kısıt', 'kısış', 'kıtal', 'kıtık', 'kıtır', 'kıvam', 'kıvıl', 'kıvır', 'kıyak',
'kıyam', 'kıyas', 'kıyga', 'kıygı', 'kıyma', 'kıyye', 'kıyık', 'kıyım', 'kıyın', 'kıyış',
'kızak', 'kızan', 'kızar', 'kızdı', 'kızlı', 'kızma', 'kızıl', 'kızıp', 'kızış', 'kıçın',
'kışla', 'kışçı', 'kışın', 'kışır', 'laden', 'lades', 'ladin', 'lafçı', 'lafın', 'lafız',
'lagar', 'lagün', 'lahit', 'lahor', 'lahos', 'lahut', 'lahza', 'lakap', 'lakaz', 'lakin',
'lakke', 'lakoz', 'lalas', 'laleş', 'lamba', 'lamel', 'lanba', 'lando', 'lanet', 'lango',
'lanse', 'lapya', 'largo', 'larva', 'laski', 'lasta', 'latif', 'latin', 'lavaj', 'lavaş',
'lavta', 'lavuk', 'layık', 'lazer', 'lazut', 'lazım', 'laçka', 'lağam', 'lağus', 'lağım',
'lağıv', 'lağız', 'ledün', 'legal', 'lehim', 'lehte', 'lehçe', 'leken', 'lemis', 'lemur',
'lenfa', 'lento', 'lepra', 'lerze', 'levha', 'levni', 'levye', 'leyen', 'leyla', 'leyli',
'lezar', 'leziz', 'leçek', 'leğen', 'leşim', 'leşin', 'leşte', 'libas', 'liboş', 'libre',
'lider', 'lifli', 'lihye', 'liken', 'likit', 'likör', 'liman', 'limbo', 'limit', 'limon',
'linet', 'linin', 'lipit', 'lipom', 'liret', 'lirik', 'lisan', 'liste', 'litre', 'livar',
'lizol', 'lizöz', 'lobut', 'lobye', 'loder', 'lodos', 'logar', 'logos', 'lojik', 'lokal',
'lokma', 'lokum', 'lokus', 'lonca', 'longa', 'lopur', 'loput', 'lorke', 'lorta', 'lotus',
'loşça', 'lugat', 'lutfa', 'lutuf', 'luzum', 'luzüm', 'lögar', 'lökoz', 'löpür', 'lövye',
'lüfer', 'lügat', 'lügol', 'lülük', 'lümen', 'lünet', 'lüpçü', 'lütuf', 'lüver', 'lüzum',
'lıkır', 'lığlı', 'maada', 'maade', 'maale', 'maaşa', 'mabat', 'mabet', 'mabut', 'macun',
'madam', 'madde', 'maddi', 'madem', 'maden', 'madik', 'madun', 'madur', 'mafat', 'mafik',
'mafil', 'mafiş', 'mafuş', 'mafya', 'magma', 'magri', 'mahal', 'mahat', 'mahfe', 'mahfi',
'mahik', 'mahir', 'mahiv', 'mahle', 'mahna', 'mahra', 'mahuf', 'mahur', 'mahut', 'mahve',
'mahya', 'mahık', 'mahız', 'maide', 'maile', 'majör', 'makak', 'makam', 'makas', 'makat',
'maket', 'makro', 'maksi', 'makta', 'maktu', 'makul', 'makus', 'maküs', 'malak', 'malaz',
'malca', 'malda', 'malen', 'malez', 'malik', 'malla', 'malsa', 'malta', 'malul', 'malum',
'malup', 'malya', 'malül', 'malım', 'malın', 'mambo', 'mamuk', 'mamul', 'mamur', 'mamut',
'manas', 'manat', 'manav', 'manca', 'manda', 'manej', 'manen', 'manga', 'mango', 'manik',
'manim', 'manti', 'manto', 'mantı', 'manık', 'mapus', 'maral', 'maraq', 'maraz', 'maraş',
'marda', 'maric', 'marid', 'mariz', 'marka', 'marke', 'marki', 'maron', 'martı', 'maruf',
'marul', 'maruz', 'marya', 'marzi', 'masaj', 'masal', 'masat', 'masdı', 'masid', 'masif',
'maske', 'masnu', 'mason', 'mastı', 'masum', 'masun', 'masör', 'masöz', 'matah', 'matba',
'matbu', 'matem', 'matim', 'matiz', 'matla', 'matuf', 'matuh', 'maval', 'maviş', 'mavna',
'mavra', 'mavuç', 'mayer', 'mayna', 'mayon', 'mayoz', 'mayın', 'mayıs', 'mazak', 'mazca',
'maziz', 'mazot', 'mazul', 'mazur', 'mağma', 'mağra', 'maşer', 'maşuk', 'mebde', 'mebit',
'mebiz', 'mebna', 'mebni', 'mebus', 'mecal', 'mecaz', 'mecid', 'mecla', 'mecma', 'mecmu',
'mecra', 'mecul', 'mecur', 'medar', 'medek', 'meder', 'medet', 'medih', 'medya', 'medüz',
'mefta', 'meful', 'mehan', 'mehar', 'mehaz', 'mehaş', 'mehdi', 'mehel', 'mehil', 'mehir',
'mehle', 'mekan', 'mekik', 'mekki', 'melal', 'melas', 'melce', 'melek', 'meles', 'melez',
'meleş', 'melih', 'melik', 'melil', 'melis', 'melon', 'melul', 'melun', 'melül', 'memat',
'memba', 'memnu', 'memul', 'memur', 'menba', 'menfa', 'menfi', 'mengü', 'menik', 'menus',
'menüm', 'menün', 'menşe', 'merak', 'meral', 'meram', 'merci', 'merek', 'meres', 'meret',
'merid', 'mermi', 'merre', 'mersi', 'mesai', 'mesaj', 'mesel', 'mesen', 'meses', 'mesih',
'mesir', 'mesmu', 'mesul', 'mesut', 'metal', 'metan', 'metbu', 'metil', 'metin', 'metis',
'metod', 'metot', 'metre', 'metro', 'mevce', 'mevdu', 'mevki', 'mevla', 'mevta', 'mevut',
'mevzi', 'mevzu', 'meyan', 'meyil', 'meyit', 'meyli', 'meyus', 'meyva', 'meyve', 'mezam',
'mezar', 'mezat', 'mezon', 'mezra', 'mezro', 'mezru', 'mezun', 'mezür', 'meğer', 'meşaş',
'meşbu', 'meşem', 'meşen', 'meşin', 'meşru', 'meşuh', 'meşum', 'miadı', 'midye', 'mikos',
'mikoz', 'mikro', 'mikst', 'milat', 'milel', 'milim', 'milis', 'milli', 'mimar', 'mimik',
'mimli', 'minci', 'minha', 'minik', 'minzi', 'minör', 'mirad', 'miras', 'mirat', 'miray',
'miraç', 'mirim', 'mirin', 'mirza', 'misak', 'misal', 'misel', 'misil', 'misin', 'misis',
'missi', 'mitil', 'mitli', 'mitos', 'mitoz', 'miyad', 'miyar', 'miyat', 'miyav', 'miyaz',
'miydi', 'miyim', 'miyiz', 'miyom', 'miyon', 'miyop', 'miyoz', 'mizac', 'mizah', 'mizan',
'mizaç', 'miçel', 'miğde', 'mobil', 'model', 'modem', 'modül', 'mohel', 'moher', 'moket',
'molas', 'molla', 'moloz', 'momol', 'monat', 'monte', 'moral', 'moren', 'morga', 'morto',
'moruk', 'motel', 'motet', 'motif', 'motor', 'motto', 'mozak', 'muare', 'mubah', 'muceb',
'mucip', 'mucir', 'mucit', 'mucuk', 'mucur', 'mudil', 'mufla', 'muhal', 'muhat', 'muhik',
'muhil', 'muhip', 'muhit', 'muhla', 'mujik', 'mukim', 'mukla', 'mukni', 'mukus', 'mulaj',
'mulga', 'mumcu', 'mumda', 'mumla', 'mumlu', 'mumun', 'mumya', 'munci', 'munis', 'murat',
'muris', 'murur', 'musap', 'musil', 'muska', 'muson', 'musun', 'musır', 'mutaf', 'mutat',
'mutlu', 'muvaz', 'muydu', 'muylu', 'muyum', 'muyuz', 'muzaf', 'muzip', 'muzur', 'muzır',
'muşta', 'muştu', 'möble', 'mösyö', 'mübah', 'mübdi', 'mücef', 'mücre', 'müdde', 'müdür',
'müfid', 'müfit', 'müfte', 'müftü', 'mühim', 'mühre', 'mühür', 'müjde', 'mülga', 'mülki',
'mülti', 'müluk', 'mümas', 'mümin', 'mümza', 'münci', 'münşi', 'mürai', 'mürit', 'mürur',
'müsün', 'müydü', 'müyüm', 'müyüz', 'müzik', 'müziç', 'müşir', 'mıcır', 'mıgri', 'mıhlı',
'mıhta', 'mıkla', 'mırra', 'mırıh', 'mırıl', 'mırın', 'mısra', 'mısın', 'mısır', 'mıydı',
'mıyım', 'mıyız', 'mışıl', 'nabak', 'nabza', 'nabzı', 'nabız', 'nacak', 'nacar', 'nadan',
'nadas', 'nadim', 'nadir', 'nafiz', 'nafta', 'nafıa', 'nahak', 'nahif', 'nahiv', 'nahoş',
'nahır', 'nakba', 'nakdi', 'nakil', 'nakip', 'nakis', 'nakit', 'nakli', 'nakıp', 'nakıs',
'nakız', 'nakış', 'nalda', 'nalet', 'nalça', 'nalım', 'nalın', 'namaz', 'namlu', 'namlı',
'namus', 'namıs', 'nanay', 'nanik', 'narin', 'nasip', 'nasir', 'nasıl', 'nasıp', 'nasır',
'natuk', 'natür', 'natır', 'nazal', 'nazan', 'nazar', 'nazik', 'nazil', 'nazir', 'nazlı',
'nazım', 'nazır', 'naçar', 'naçiz', 'nağme', 'nağıl', 'naşir', 'nebat', 'nebze', 'necat',
'necip', 'nedbe', 'neden', 'nedim', 'nefaz', 'nefer', 'nefes', 'nefha', 'nefir', 'nefis',
'nefiy', 'nefsi', 'nefti', 'nehir', 'nehiy', 'nekes', 'nekre', 'nemfo', 'nemin', 'nemli',
'nerde', 'nerse', 'neseb', 'nesep', 'nesih', 'nesil', 'nesim', 'nesir', 'nesiç', 'nesli',
'nesne', 'nevir', 'nevri', 'neyin', 'neyse', 'neyçe', 'nezif', 'nezih', 'nezir', 'nezle',
'nezük', 'neşet', 'neşir', 'neşve', 'nicel', 'nicem', 'nicep', 'nifak', 'nihai', 'nihal',
'nihan', 'nikah', 'nikap', 'nikel', 'nilay', 'nimet', 'ninja', 'ninni', 'nipel', 'nisai',
'nisan', 'nisap', 'nispi', 'nitel', 'nitem', 'niyaz', 'niyet', 'nizam', 'niçin', 'nişan',
'nodul', 'nohut', 'nokra', 'nokta', 'nokul', 'nomad', 'nonoş', 'notam', 'noter', 'nufus',
'nukut', 'nuküş', 'numan', 'numen', 'nuran', 'nurlu', 'nutku', 'nutuk', 'nöbet', 'nöron',
'nüans', 'nüfus', 'nüfuz', 'nüfüs', 'nükte', 'nükul', 'nüsha', 'nüzul', 'nüzur', 'nısıf',
'oberj', 'obruk', 'obura', 'oburu', 'ocakı', 'ocağı', 'odacı', 'odalı', 'odeon', 'odsuz',
'oflan', 'oflaz', 'ofris', 'ofset', 'ojeli', 'okapi', 'okluk', 'oksit', 'oktan', 'oktav',
'oktet', 'okulu', 'okuma', 'okume', 'okumu', 'okült', 'olası', 'olaya', 'olayı', 'olduk',
'oldum', 'oleik', 'olein', 'olgun', 'olmak', 'olmam', 'olman', 'olmaz', 'olmuş', 'olçum',
'omaca', 'ombra', 'omlet', 'omuza', 'onama', 'onart', 'onbeş', 'onbir', 'ondan', 'ongen',
'ongun', 'oniki', 'oniks', 'onlar', 'onluk', 'onmak', 'onmaz', 'onore', 'onsuz', 'ontik',
'oosit', 'opera', 'optik', 'orada', 'oralı', 'orana', 'orası', 'oraya', 'orcik', 'orfoz',
'organ', 'orgcu', 'orkit', 'orlon', 'orman', 'ortak', 'ortam', 'ortay', 'ortaç', 'ortez',
'ortoz', 'oryan', 'oselo', 'osman', 'osmoz', 'otacı', 'otama', 'otayı', 'otist', 'otizm',
'otlak', 'otluk', 'otoda', 'otosu', 'otoya', 'otoyu', 'otsuz', 'otçul', 'ovalı', 'ovmak',
'ovmaç', 'oyacı', 'oyalı', 'oydaş', 'oyluk', 'oylum', 'oymak', 'oynak', 'oynaş', 'oyuna',
'oyunu', 'oyşar', 'ozmos', 'ozuga', 'oğlak', 'oğlan', 'oğmak', 'oğmaç', 'oğraş', 'oğrun',
'pabuç', 'padok', 'pafta', 'pagan', 'pahal', 'pahıl', 'paket', 'palan', 'palas', 'palaz',
'palet', 'palto', 'palut', 'palıd', 'palıt', 'pamal', 'pamir', 'pampa', 'pamuk', 'panda',
'panel', 'panik', 'pansi', 'panti', 'pança', 'papak', 'papaz', 'papel', 'papuç', 'paraf',
'param', 'pardı', 'parka', 'parke', 'parpa', 'parsa', 'parti', 'parya', 'parça', 'parıl',
'pasaj', 'pasak', 'pasif', 'paska', 'paslı', 'pasta', 'pasör', 'patak', 'patat', 'paten',
'patge', 'patik', 'patis', 'patla', 'patoz', 'patır', 'paunt', 'payam', 'payan', 'payda',
'payen', 'payet', 'paylı', 'payım', 'payın', 'pazar', 'pazen', 'paçal', 'paçka', 'paçoz',
'paççı', 'pağla', 'pedal', 'peder', 'pehle', 'pehli', 'pekçe', 'pelet', 'pelik', 'pelin',
'pelit', 'pelte', 'peluj', 'peluş', 'pelüj', 'pelür', 'pelüş', 'pembe', 'penah', 'penbe',
'penes', 'pengö', 'penis', 'pense', 'penye', 'pençe', 'pepoo', 'perde', 'peren', 'perki',
'perma', 'permi', 'perno', 'peron', 'peruk', 'perva', 'pesek', 'pesüs', 'petek', 'petri',
'peyam', 'peyda', 'peyke', 'pezik', 'peçiç', 'peçka', 'peçko', 'peşgo', 'peşin', 'peşli',
'pigme', 'pikaj', 'pikap', 'piket', 'pilaj', 'pilav', 'pilit', 'piliç', 'pilli', 'pilon',
'pilot', 'pinel', 'pines', 'pinti', 'pipet', 'piran', 'pirit', 'pisik', 'pisin', 'piton',
'pitza', 'piyan', 'piyaz', 'piyes', 'piyon', 'pizza', 'piçin', 'pişal', 'pişar', 'pişde',
'pişek', 'pişey', 'pişih', 'pişik', 'pişim', 'pişki', 'pişme', 'pişti', 'pişva', 'plaka',
'plase', 'plato', 'plaza', 'plili', 'plöra', 'poaça', 'pofur', 'pohça', 'poker', 'polak',
'polar', 'polat', 'polen', 'polim', 'polin', 'polip', 'polis', 'polka', 'polye', 'pomak',
'pomat', 'pomel', 'pompa', 'ponje', 'ponza', 'popra', 'popçu', 'pordu', 'porno', 'porte',
'porto', 'posta', 'postu', 'potas', 'potin', 'potuk', 'potur', 'pound', 'poyra', 'poğça',
'poşet', 'prafa', 'prasa', 'prens', 'prese', 'prezo', 'print', 'proje', 'proto', 'prova',
'pruva', 'puaça', 'pudra', 'pufla', 'puhul', 'pulat', 'pulcu', 'pullu', 'puluç', 'pumba',
'punto', 'purşu', 'pusat', 'puset', 'puslu', 'pusma', 'puvan', 'pölüt', 'pöçük', 'pöşke',
'püfür', 'pünez', 'püren', 'pürik', 'pürin', 'pürüz', 'püsük', 'püsür', 'pütür', 'pıhtı',
'pınar', 'pırpı', 'pırtı', 'pırıl', 'pısik', 'pısma', 'pıtık', 'pıtır', 'rabia', 'rabib',
'rabıt', 'racil', 'racon', 'radar', 'radde', 'radga', 'radhe', 'radif', 'radme', 'radon',
'rados', 'radua', 'radye', 'radyo', 'rafia', 'rafih', 'rafit', 'rafta', 'rafya', 'rafız',
'ragbi', 'ragif', 'ragım', 'rahat', 'rahib', 'rahil', 'rahim', 'rahin', 'rahip', 'rahis',
'rahle', 'rahmi', 'rahna', 'rahne', 'rakam', 'raket', 'rakik', 'rakip', 'rakit', 'rakle',
'rakor', 'rakta', 'rakun', 'rakıb', 'rakım', 'ralli', 'ramak', 'rambo', 'ramis', 'rampa',
'randa', 'ranza', 'rapor', 'rasaf', 'rasat', 'rasem', 'rasim', 'raspa', 'rasyo', 'rasıt',
'ratıp', 'raund', 'raunt', 'rayba', 'rayic', 'rayiç', 'rayon', 'reaya', 'rebap', 'recat',
'recep', 'recim', 'redif', 'refah', 'refik', 'refüj', 'rehin', 'reiki', 'rejim', 'rekeb',
'rekiz', 'rekor', 'rekub', 'remel', 'remil', 'remim', 'remiz', 'remzi', 'renda', 'rende',
'renet', 'renga', 'rengi', 'resen', 'reset', 'resif', 'resim', 'resmi', 'resti', 'resul',
'retuş', 'revak', 'revan', 'revaç', 'revir', 'reviş', 'reybe', 'reybi', 'reyha', 'reyon',
'rezan', 'rezil', 'reçel', 'reşit', 'reşme', 'riboz', 'rical', 'ricat', 'rijit', 'rimel',
'ringa', 'ritim', 'rivus', 'riyal', 'rizom', 'robot', 'rodaj', 'rodeo', 'roket', 'rolcü',
'roman', 'rondo', 'rosap', 'rosto', 'rotil', 'rotor', 'rozet', 'rubai', 'ruble', 'rugan',
'rugbi', 'ruhen', 'ruhlu', 'ruhça', 'rujlu', 'rukum', 'rukye', 'rulet', 'rumba', 'rumca',
'rumen', 'rumuz', 'runik', 'rutin', 'ruzba', 'röfle', 'rögar', 'rötar', 'rötuş', 'rötüş',
'rüesa', 'rükbe', 'rüküb', 'rükün', 'rüküp', 'rüküş', 'rünik', 'rüsta', 'rüsub', 'rüsum',
'rüsup', 'rüsva', 'rütbe', 'rütuş', 'rüyet', 'rızık', 'saati', 'sabah', 'saban', 'sabih',
'sabik', 'sabir', 'sabit', 'sabra', 'sabrı', 'sabuh', 'sabuk', 'sabun', 'sabur', 'sabık',
'sabın', 'sabır', 'sadak', 'sadet', 'sadik', 'sadir', 'sadme', 'sadra', 'sadık', 'sadır',
'safer', 'safha', 'safir', 'safra', 'safça', 'sagak', 'sagan', 'sagar', 'sahaf', 'saham',
'sahan', 'sahap', 'sahha', 'sahih', 'sahil', 'sahip', 'sahir', 'sahit', 'sahne', 'sahra',
'sahre', 'sahte', 'sahur', 'saika', 'sakaf', 'sakak', 'sakal', 'sakar', 'sakat', 'sakil',
'sakim', 'sakin', 'sakit', 'saklı', 'sakso', 'saksı', 'sakçı', 'sakın', 'sakır', 'sakıt',
'sakız', 'salah', 'salak', 'salam', 'salat', 'salaş', 'salcı', 'salep', 'salgı', 'salih',
'salik', 'salim', 'salin', 'salip', 'salla', 'sallı', 'salma', 'salon', 'salot', 'saloz',
'salpa', 'salsa', 'salta', 'salto', 'salvo', 'salya', 'salça', 'salık', 'salım', 'saman',
'samba', 'samit', 'samsa', 'samua', 'samur', 'samut', 'sanal', 'sanat', 'sancı', 'sandı',
'sanem', 'sangı', 'sanki', 'sanlı', 'sanma', 'sanrı', 'sanık', 'sapak', 'sapan', 'sapkı',
'sapla', 'saplı', 'sapma', 'sapot', 'sapık', 'sapır', 'sapış', 'sarak', 'sarat', 'saray',
'saraç', 'sargı', 'sarig', 'sarih', 'sarka', 'sarma', 'sarpa', 'sarpi', 'sarus', 'saruç',
'sarık', 'sarım', 'sarın', 'sarıp', 'sarış', 'satak', 'satan', 'saten', 'sathi', 'satir',
'satma', 'satun', 'satıh', 'satım', 'satın', 'satıp', 'satır', 'satış', 'sauna', 'savak',
'savan', 'savat', 'savaş', 'savca', 'savcı', 'savla', 'savma', 'savti', 'sayal', 'sayas',
'sayaç', 'sayca', 'sayfa', 'saygı', 'sayha', 'sayma', 'saypa', 'sayra', 'sayru', 'sayrı',
'sayıl', 'sayım', 'sayın', 'sayıp', 'sayıt', 'sayış', 'sazak', 'sazan', 'sazcı', 'sazlı',
'saçak', 'saçlı', 'saçma', 'saçık', 'saçıp', 'saçış', 'sağan', 'sağcı', 'sağlı', 'sağma',
'sağol', 'sağrı', 'sağım', 'sağın', 'sağır', 'seans', 'sebat', 'sebep', 'sebil', 'sebze',
'secde', 'sedan', 'sedef', 'sedir', 'sedye', 'sefer', 'sefih', 'sefil', 'sefir', 'seher',
'sehim', 'sehiv', 'sehpa', 'sekel', 'sekil', 'sekiz', 'sekiş', 'sekma', 'sekme', 'sekre',
'sekse', 'seksi', 'sekte', 'selam', 'selda', 'selef', 'selek', 'selem', 'selen', 'selim',
'selis', 'selva', 'selvi', 'semah', 'semai', 'seman', 'semen', 'semer', 'semih', 'semiz',
'semra', 'senei', 'senek', 'senet', 'senin', 'senir', 'senit', 'senli', 'sepek', 'sepet',
'sepil', 'sepya', 'serak', 'serap', 'seren', 'sergi', 'serim', 'serin', 'seriş', 'serme',
'serpe', 'serum', 'servi', 'serçe', 'sesin', 'sesli', 'seste', 'sesçi', 'seter', 'setik',
'setir', 'setre', 'sevap', 'sevda', 'seven', 'sever', 'sevgi', 'sevim', 'seviş', 'sevme',
'seyek', 'seyid', 'seyip', 'seyir', 'seyis', 'seyit', 'seyre', 'sezgi', 'seziş', 'sezme',
'sezon', 'seçal', 'seçik', 'seçim', 'seçiş', 'seçki', 'seçme', 'shona', 'sibak', 'sibel',
'sibob', 'sibop', 'sicil', 'sicim', 'sidik', 'sifin', 'sifon', 'sigar', 'sihir', 'siker',
'sikim', 'sikiş', 'sikke', 'sikme', 'sikte', 'silah', 'silaj', 'silgi', 'silik', 'silip',
'silis', 'siliş', 'silki', 'sille', 'silme', 'simde', 'simge', 'simin', 'simit', 'simya',
'sinek', 'sinik', 'sinir', 'siniş', 'sinle', 'sinme', 'sinni', 'sinor', 'sinsi', 'sinüs',
'siper', 'sipet', 'sipsi', 'siren', 'sirer', 'sirke', 'sirkü', 'sirmo', 'siron', 'siroz',
'sirto', 'sisin', 'sisli', 'siste', 'sitem', 'sitil', 'sitte', 'sivil', 'sivri', 'siyah',
'siyak', 'siyek', 'siyem', 'siyer', 'siyga', 'siyim', 'siyit', 'siyme', 'sizde', 'sizik',
'sizin', 'siğil', 'skala', 'skink', 'skoda', 'slayt', 'sofra', 'softa', 'sohum', 'sokak',
'soket', 'sokma', 'sokra', 'sokum', 'sokur', 'sokuş', 'solak', 'solcu', 'solda', 'solma',
'soluk', 'soluş', 'soman', 'somat', 'somon', 'somun', 'somut', 'somya', 'sonar', 'sonat',
'sonda', 'songu', 'sonlu', 'sonra', 'sonuç', 'sordu', 'sorgu', 'sorit', 'sorma', 'sorti',
'sorum', 'sorun', 'sosis', 'sovan', 'soyad', 'soyka', 'soylu', 'soyma', 'soyup', 'soyut',
'soyuş', 'soğan', 'soğra', 'soğuk', 'spazm', 'sperm', 'spika', 'sprey', 'stand', 'stant',
'start', 'statü', 'steno', 'stent', 'stilo', 'stres', 'streç', 'suale', 'suali', 'suare',
'subap', 'subay', 'subra', 'subya', 'subye', 'sucuk', 'sucul', 'sudak', 'sudan', 'sudre',
'sufle', 'sukut', 'sulak', 'sular', 'sulha', 'sulhu', 'sulta', 'suluk', 'sumak', 'sunak',
'sungu', 'sunma', 'sunny', 'sunta', 'sunum', 'sunun', 'sunuş', 'suoku', 'supab', 'supap',
'supya', 'surat', 'suret', 'susak', 'susam', 'susik', 'susku', 'susma', 'susta', 'susuz',
'susuş', 'sutaş', 'suvat', 'suyuk', 'suyum', 'suyun', 'suçlu', 'svihs', 'sökel', 'sökme',
'sökük', 'söküm', 'sökün', 'söküp', 'söküş', 'sölom', 'sönme', 'sönük', 'sönüm', 'söven',
'sövgü', 'sövme', 'sövüp', 'sövüş', 'söyle', 'sözce', 'sözcü', 'sözde', 'sözel', 'sözle',
'sözlü', 'sözse', 'sözüm', 'sözün', 'söğke', 'söğüt', 'söğüş', 'sübap', 'sübek', 'sübut',
'sübye', 'sücut', 'süfli', 'sühan', 'sükna', 'sükse', 'sükun', 'süluk', 'sülük', 'sülün',
'sülüs', 'sümek', 'sümen', 'sümük', 'sünek', 'süngü', 'sünme', 'sünük', 'süper', 'sürat',
'sürek', 'sürem', 'süren', 'sürer', 'süret', 'süreç', 'sürfe', 'sürgü', 'sürme', 'sürre',
'sürur', 'sürüm', 'sürün', 'sürüp', 'sürür', 'sürüş', 'süsen', 'süslü', 'süsme', 'sütlü',
'sütre', 'sütun', 'sütçü', 'süven', 'süvet', 'süyek', 'süyem', 'süyüm', 'süzek', 'süzgü',
'süzme', 'süzük', 'süzüm', 'sıcak', 'sıdkı', 'sıfat', 'sıfır', 'sıhhi', 'sıhri', 'sıkma',
'sıkça', 'sıkım', 'sıkıt', 'sılaj', 'sımak', 'sınai', 'sınak', 'sınav', 'sındı', 'sınma',
'sınıf', 'sınık', 'sınır', 'sıral', 'sıram', 'sırat', 'sırga', 'sırlı', 'sırma', 'sırra',
'sırtı', 'sırça', 'sırık', 'sırıl', 'sırım', 'sıska', 'sıtma', 'sıtıl', 'sıvık', 'sıyga',
'sıygı', 'sızak', 'sızma', 'sızım', 'sızış', 'sıçan', 'sıçma', 'sıçtı', 'sıçıp', 'sığaç',
'sığla', 'sığma', 'sığın', 'sığır', 'tabak', 'taban', 'taben', 'tabii', 'tabip', 'tabir',
'tabla', 'tablo', 'tabur', 'tabut', 'tabya', 'tacal', 'tacik', 'tacil', 'tacim', 'tacir',
'taciz', 'tadat', 'tadil', 'tadım', 'tafra', 'tafta', 'tafte', 'tahin', 'tahra', 'tahta',
'tahıl', 'tahın', 'taife', 'takas', 'takat', 'takim', 'takip', 'takke', 'takla', 'takma',
'takos', 'takoz', 'taksa', 'taksi', 'takti', 'takva', 'takık', 'takıl', 'takım', 'takıp',
'takır', 'talak', 'talan', 'talay', 'talaz', 'talaş', 'taleb', 'talep', 'talih', 'talik',
'talil', 'talim', 'talip', 'tallı', 'tamah', 'tamam', 'tamer', 'tamik', 'tamim', 'tamir',
'tanen', 'tanga', 'tango', 'tanin', 'tanrı', 'tanık', 'tanım', 'tanıt', 'tanış', 'tapan',
'tapir', 'taplı', 'tapma', 'tapon', 'tapuğ', 'tapış', 'taraf', 'tarak', 'taraz', 'taraş',
'taret', 'tarif', 'tarih', 'tarik', 'tariz', 'tarla', 'tartı', 'tarık', 'tarım', 'tasar',
'tasdi', 'tasma', 'tasni', 'tasım', 'tatak', 'tatar', 'tatil', 'tatlı', 'tatma', 'tatul',
'tavaf', 'tavan', 'tavcı', 'tavik', 'tavil', 'taviz', 'tavla', 'tavlı', 'tavsa', 'tavuk',
'tavus', 'tavır', 'tayfa', 'tayga', 'tayin', 'tayip', 'tayın', 'tazik', 'tazim', 'tazip',
'taziz', 'taçlı', 'tağar', 'tağut', 'taşak', 'taşar', 'taşaş', 'taşlı', 'taşma', 'taşra',
'taşçı', 'taşıl', 'taşım', 'taşıt', 'teali', 'teati', 'tebaa', 'teber', 'tecil', 'tecim',
'tecir', 'tedai', 'tedip', 'tefek', 'tehir', 'teist', 'teizm', 'tekel', 'teker', 'tekid',
'tekil', 'tekin', 'tekir', 'tekit', 'tekiz', 'tekke', 'tekli', 'tekme', 'tekne', 'tekst',
'tekçi', 'telaş', 'telef', 'telek', 'telem', 'teles', 'telif', 'telik', 'telin', 'telis',
'telli', 'telsi', 'telve', 'temas', 'temek', 'temel', 'temin', 'temiz', 'tempo', 'temre',
'tenge', 'tenha', 'tenis', 'tenke', 'tenor', 'tente', 'tenya', 'tenör', 'teori', 'tepal',
'tepik', 'tepir', 'tepiş', 'tepke', 'tepki', 'tepme', 'tepsi', 'teras', 'terbi', 'terde',
'terek', 'teres', 'terfi', 'terim', 'terin', 'terki', 'terle', 'terli', 'terme', 'tersi',
'terso', 'terzi', 'terör', 'terşi', 'tesbi', 'tesik', 'tesir', 'tesis', 'tesit', 'tesri',
'teste', 'testi', 'tetik', 'tetir', 'tevdi', 'tevek', 'tevil', 'tevir', 'tevki', 'tevsi',
'tevzi', 'teyel', 'teyit', 'teype', 'teyze', 'tezat', 'tezce', 'tezek', 'tezli', 'teğet',
'teşci', 'teşne', 'teşri', 'teşyi', 'tifüs', 'tigin', 'tikan', 'tikel', 'tiken', 'tilki',
'tilya', 'timin', 'timüs', 'tinea', 'tiner', 'tipik', 'tiraj', 'tiran', 'tirat', 'tiril',
'tirit', 'tiriz', 'tirle', 'tirma', 'tirsi', 'tirşe', 'titan', 'titiz', 'tohma', 'tohum',
'tokal', 'tokar', 'tokat', 'tokaç', 'toklu', 'tokuz', 'tokuç', 'tokuş', 'tokya', 'tokyo',
'tolga', 'tomak', 'tomar', 'tomat', 'tonaj', 'toner', 'tonga', 'tonik', 'tonil', 'tonla',
'tonlu', 'tonoz', 'topak', 'topal', 'topaz', 'topaç', 'topik', 'topla', 'toplu', 'topuk',
'topun', 'topur', 'toput', 'topuz', 'topçu', 'torak', 'torba', 'torik', 'torna', 'tortu',
'torum', 'torun', 'tosun', 'total', 'totem', 'toyca', 'toycu', 'toyga', 'tozak', 'tozan',
'tozlu', 'tozma', 'toğan', 'toğga', 'trafo', 'trake', 'trans', 'tranş', 'trata', 'trend',
'treni', 'trent', 'trias', 'triko', 'trioz', 'triyo', 'tromp', 'tröst', 'tufan', 'tugay',
'tuhaf', 'tuluk', 'tulum', 'tulup', 'tuman', 'tumba', 'tumma', 'tunga', 'tunik', 'tunuk',
'turaç', 'turba', 'turbo', 'turda', 'turfa', 'turla', 'turna', 'turne', 'turno', 'tursa',
'turta', 'turun', 'turus', 'turşu', 'tutak', 'tutam', 'tutar', 'tutaç', 'tutku', 'tutma',
'tutuk', 'tutum', 'tutun', 'tutuş', 'tutya', 'tuval', 'tuyuğ', 'tuzak', 'tuzcu', 'tuzda',
'tuzla', 'tuzlu', 'tuzum', 'tuzun', 'tuğba', 'tuğcu', 'tuğla', 'tuğlu', 'tuğra', 'tvist',
'töker', 'töllü', 'tömsü', 'törel', 'tören', 'törpü', 'tövbe', 'tözel', 'töğbe', 'tübaj',
'tüfek', 'tükel', 'tümce', 'tümel', 'tümen', 'tümör', 'tümür', 'tünek', 'tünel', 'tüplü',
'tüpçü', 'türap', 'türbe', 'türde', 'türel', 'türev', 'türkü', 'türle', 'türlü', 'türse',
'türüm', 'türün', 'türüz', 'tütme', 'tütsü', 'tütün', 'tüvit', 'tüyer', 'tüylü', 'tüyme',
'tüysü', 'tüzel', 'tüzük', 'tüğüm', 'tıbbi', 'tıfıl', 'tıkaç', 'tıkma', 'tıkım', 'tıkır',
'tıkız', 'tıkış', 'tımar', 'tınaz', 'tınma', 'tıpkı', 'tıpır', 'tıpış', 'tırak', 'tıraş',
'tırık', 'tırıl', 'tırıs', 'tıvgı', 'tığda', 'tığlı', 'tığın', 'tşort', 'tşört', 'ucube',
'ucuna', 'ucunu', 'ucuza', 'udlek', 'uhdut', 'ukala', 'ukela', 'uknum', 'ulama', 'ulamı',
'ulema', 'ulmak', 'uluma', 'ulusu', 'umacı', 'ummak', 'umman', 'umran', 'umuda', 'umumi',
'umunu', 'umure', 'unevi', 'unluk', 'unmak', 'unnab', 'unsur', 'ununu', 'unvan', 'urban',
'urcan', 'urgan', 'urmak', 'ursuz', 'uryan', 'usanç', 'usare', 'uskur', 'uslüp', 'ussal',
'utana', 'utanç', 'utmak', 'uvala', 'uyarı', 'uygan', 'uygar', 'uygun', 'uyluk', 'uymak',
'uymaz', 'uyruk', 'uysal', 'uyuki', 'uyuma', 'uzama', 'uzana', 'uzayı', 'uzağı', 'uzdil',
'uzlet', 'uzluk', 'uzman', 'uzsöz', 'uçara', 'uçarı', 'uçkun', 'uçkur', 'uçlam', 'uçmak',
'uçman', 'uçsuz', 'uçtan', 'uçucu', 'uğlan', 'uğmaç', 'uğrak', 'uğraş', 'uğrun', 'uğuru',
'uşkun', 'uşşak', 'vaadi', 'vacip', 'vadet', 'vadis', 'vagit', 'vagon', 'vahim', 'vahit',
'vahiy', 'vahşi', 'vajen', 'vakad', 'vakar', 'vakfe', 'vakit', 'vakta', 'vakti', 'vakuf',
'vakum', 'vakur', 'vakıa', 'vakıf', 'valan', 'valih', 'valiz', 'valör', 'vapor', 'vapur',
'varak', 'varan', 'varda', 'vardı', 'vargı', 'varil', 'varis', 'varit', 'varlı', 'varma',
'varoş', 'varsa', 'varta', 'varım', 'varın', 'varış', 'vasat', 'vasil', 'vasıf', 'vasıl',
'vatan', 'vater', 'vatka', 'vatoz', 'vazıh', 'vaşak', 'vebal', 'vecde', 'vecih', 'vecit',
'veciz', 'vedia', 'vedre', 'vefat', 'vegan', 'vehim', 'vehme', 'vekil', 'velet', 'velev',
'velur', 'velut', 'verdi', 'verem', 'veren', 'verev', 'vergi', 'verim', 'verin', 'verip',
'verir', 'verit', 'veriş', 'verme', 'vesak', 'vezin', 'vezir', 'vezne', 'vezni', 'veçhe',
'video', 'vidin', 'vigla', 'vihad', 'villa', 'viraj', 'viral', 'viran', 'virdi', 'virüs',
'visal', 'viski', 'vites', 'vitir', 'viyak', 'viyol', 'vizon', 'vizör', 'vişne', 'vodem',
'vokal', 'volan', 'volta', 'volüm', 'vonoz', 'votka', 'voyvo', 'vucut', 'vucüt', 'vukua',
'vukuf', 'vulva', 'vuraç', 'vurgu', 'vurma', 'vuruk', 'vuruş', 'vusub', 'vusul', 'vuzuh',
'vücub', 'vücut', 'vücüh', 'vüküf', 'vürut', 'vürüs', 'vüsat', 'vıcık', 'vıcır', 'vızır',
'yaban', 'yabgu', 'yadın', 'yafta', 'yagli', 'yahey', 'yahni', 'yahut', 'yahşi', 'yakaç',
'yakin', 'yakma', 'yakut', 'yakım', 'yakın', 'yakıp', 'yakıt', 'yakış', 'yakşi', 'yakşı',
'yalak', 'yalan', 'yalap', 'yalaz', 'yalla', 'yalpa', 'yalpı', 'yalva', 'yalım', 'yalın',
'yalız', 'yamak', 'yaman', 'yamaç', 'yamru', 'yamuk', 'yamçı', 'yanak', 'yanal', 'yanar',
'yanay', 'yanaz', 'yancı', 'yangı', 'yankı', 'yanlı', 'yanma', 'yansı', 'yanık', 'yanın',
'yanıp', 'yanıt', 'yanıç', 'yanış', 'yapak', 'yapan', 'yapar', 'yapay', 'yapaz', 'yapma',
'yapık', 'yapım', 'yapıp', 'yapıt', 'yapış', 'yarak', 'yaran', 'yarar', 'yaraş', 'yarda',
'yaren', 'yarga', 'yargı', 'yarka', 'yarma', 'yarık', 'yarım', 'yarın', 'yarış', 'yasak',
'yasal', 'yasdı', 'yasin', 'yaslı', 'yassı', 'yastı', 'yasıb', 'yatak', 'yatar', 'yatay',
'yatlı', 'yatma', 'yatsı', 'yatuk', 'yatçı', 'yatık', 'yatım', 'yatıp', 'yatır', 'yatış',
'yavan', 'yavaş', 'yaver', 'yavru', 'yavsı', 'yavuz', 'yayan', 'yayda', 'yaygı', 'yayla',
'yaylı', 'yayma', 'yayıg', 'yayık', 'yayım', 'yayın', 'yayış', 'yazak', 'yazar', 'yazcı',
'yazda', 'yazgı', 'yazlı', 'yazma', 'yazıh', 'yazık', 'yazım', 'yazın', 'yazıp', 'yazıt',
'yazış', 'yağar', 'yağcı', 'yağlı', 'yağma', 'yağmı', 'yağuş', 'yağır', 'yağız', 'yağış',
'yaşam', 'yaşlı', 'yaşça', 'yaşın', 'yaşıt', 'yebbu', 'yedek', 'yeden', 'yedik', 'yedil',
'yedim', 'yedin', 'yediz', 'yedme', 'yeise', 'yekin', 'yekun', 'yeküm', 'yekün', 'yelek',
'yeleç', 'yelin', 'yelli', 'yelme', 'yelve', 'yemci', 'yemek', 'yemem', 'yemez', 'yemin',
'yemiş', 'yenge', 'yengi', 'yenik', 'yenil', 'yenim', 'yenli', 'yenme', 'yerde', 'yerel',
'yerey', 'yergi', 'yerim', 'yerin', 'yeriz', 'yerle', 'yerli', 'yerme', 'yesir', 'yeter',
'yetik', 'yetim', 'yetke', 'yetki', 'yetme', 'yevmi', 'yeygi', 'yeygü', 'yeyni', 'yezit',
'yezne', 'yeğen', 'yeğin', 'yeğni', 'yeşil', 'yeşim', 'yimek', 'yinit', 'yirik', 'yirmi',
'yitik', 'yitim', 'yitip', 'yitme', 'yivli', 'yiyen', 'yiyim', 'yiyip', 'yiyiş', 'yiyor',
'yiğit', 'yobaz', 'yoklu', 'yoksa', 'yokum', 'yokuş', 'yokçu', 'yolak', 'yolar', 'yolcu',
'yolda', 'yolla', 'yollu', 'yolma', 'yoluk', 'yolun', 'yonca', 'yonga', 'yonma', 'yontu',
'yorga', 'yorma', 'yortu', 'yorum', 'yoruç', 'yosma', 'yosun', 'yozcu', 'yoğun', 'yudum',
'yufka', 'yukaç', 'yulaf', 'yular', 'yumak', 'yumma', 'yumru', 'yumuk', 'yumuş', 'yunak',
'yunan', 'yungu', 'yunma', 'yunus', 'yurdu', 'yutak', 'yutar', 'yutma', 'yutum', 'yuvak',
'yuvar', 'yuvgu', 'yöney', 'yönlü', 'yörük', 'yövme', 'yözek', 'yüklü', 'yükte', 'yükçü',
'yüküm', 'yükün', 'yülgü', 'yülük', 'yünlü', 'yüral', 'yürek', 'yürük', 'yürür', 'yüsek',
'yüsrü', 'yüzde', 'yüzer', 'yüzey', 'yüzgü', 'yüzlü', 'yüzme', 'yüzük', 'yüzün', 'yüzüp',
'yüzüş', 'yıkar', 'yıkma', 'yıkık', 'yıkım', 'yıkış', 'yılan', 'yılgı', 'yılkı', 'yılma',
'yılık', 'yımta', 'yırak', 'yırcı', 'yırık', 'yıvış', 'yığma', 'yığım', 'yığın', 'yığıt',
'yığış', 'zabil', 'zabit', 'zabın', 'zabıt', 'zacir', 'zaden', 'zafar', 'zafel', 'zafer',
'zafir', 'zahir', 'zahit', 'zalim', 'zaman', 'zamir', 'zamlı', 'zamme', 'zango', 'zanka',
'zanlı', 'zarar', 'zarfa', 'zarfı', 'zarif', 'zarsı', 'zarta', 'zaten', 'zatın', 'zavak',
'zavar', 'zayıf', 'zağar', 'zağcı', 'zağlı', 'zeban', 'zebra', 'zebun', 'zecir', 'zecri',
'zefir', 'zehap', 'zehep', 'zehir', 'zekat', 'zeker', 'zelil', 'zelve', 'zemin', 'zenci',
'zenit', 'zenne', 'zerde', 'zerre', 'zerze', 'zeval', 'zevat', 'zevce', 'zeyil', 'zibil',
'zifaf', 'zifin', 'zifir', 'zifos', 'zigon', 'zigot', 'zihaf', 'zihin', 'zihne', 'zihni',
'zikir', 'zikre', 'zikri', 'zilli', 'zimba', 'zinde', 'zineb', 'zinik', 'zinos', 'zirai',
'zirve', 'ziver', 'ziyan', 'zizil', 'zloti', 'zombi', 'zoppa', 'zopur', 'zorba', 'zorca',
'zorla', 'zorlu', 'zorun', 'zuhur', 'zuluf', 'zulüm', 'zurna', 'zuvak', 'zöhre', 'zömbe',
'zübbe', 'zübre', 'zübük', 'zühuf', 'zühul', 'zülal', 'zülfü', 'züllü', 'zülüf', 'zümre',
'züpbe', 'züppe', 'züyuf', 'zıbın', 'zımba', 'zımni', 'zıpka', 'zıpla', 'zıpır', 'zırıl',
'çabak', 'çabuk', 'çader', 'çador', 'çadır', 'çakal', 'çakan', 'çakar', 'çaker', 'çakma',
'çaktı', 'çakıl', 'çakım', 'çakın', 'çakır', 'çakış', 'çalab', 'çalak', 'çalan', 'çalar',
'çaldı', 'çalgı', 'çalkı', 'çalma', 'çaltı', 'çalık', 'çalım', 'çalıp', 'çalış', 'çaman',
'çamat', 'çamur', 'çamuş', 'çamça', 'çamıç', 'çamış', 'çanak', 'çancı', 'çandı', 'çanta',
'çapak', 'çapar', 'çapla', 'çaplı', 'çapma', 'çapul', 'çaput', 'çarka', 'çarkı', 'çarpı',
'çarık', 'çarşı', 'çasar', 'çatak', 'çatal', 'çatkı', 'çatma', 'çatra', 'çatık', 'çatır',
'çatış', 'çavlı', 'çavun', 'çavuş', 'çaycı', 'çaylı', 'çayır', 'çağla', 'çağma', 'çağrı',
'çağıl', 'çağım', 'çağın', 'çaşıt', 'çebiç', 'çecik', 'çedik', 'çehiz', 'çehre', 'çekap',
'çekek', 'çekel', 'çekem', 'çeker', 'çekik', 'çekim', 'çekin', 'çekip', 'çekiç', 'çekiş',
'çekme', 'çekte', 'çekti', 'çekum', 'çekül', 'çelek', 'çelem', 'çelen', 'çelgi', 'çelik',
'çelim', 'çello', 'çelme', 'çemek', 'çemen', 'çemiç', 'çemçe', 'çenar', 'çenek', 'çenet',
'çengi', 'çenti', 'çepel', 'çeper', 'çepez', 'çepin', 'çepit', 'çepiç', 'çepük', 'çerağ',
'çerez', 'çerge', 'çerçi', 'çetik', 'çetin', 'çetük', 'çevik', 'çevir', 'çevre', 'çevri',
'çeyiz', 'çeşit', 'çeşme', 'çeşni', 'çicik', 'çifte', 'çifti', 'çifçi', 'çilek', 'çilik',
'çilim', 'çilli', 'çilpi', 'çilte', 'çimek', 'çimen', 'çimke', 'çimme', 'çinik', 'çinim',
'çinin', 'çinke', 'çinko', 'çinte', 'çipil', 'çiriş', 'çiroz', 'çitar', 'çiten', 'çitil',
'çitme', 'çivit', 'çiyan', 'çiyin', 'çizdi', 'çizek', 'çizer', 'çizge', 'çizgi', 'çizik',
'çizim', 'çizin', 'çizit', 'çiziş', 'çizme', 'çiçek', 'çiğde', 'çiğin', 'çiğit', 'çişik',
'çoban', 'çocuk', 'çokal', 'çoklu', 'çokça', 'çokçu', 'çolak', 'çolpa', 'çoluk', 'çomak',
'çomar', 'çomça', 'çopra', 'çopur', 'çorak', 'çorap', 'çorba', 'çorcu', 'çorlu', 'çotra',
'çotuk', 'çoğul', 'çoğun', 'çoğuz', 'çoşku', 'çubuk', 'çukur', 'çulcu', 'çulha', 'çullu',
'çupra', 'çuval', 'çuşka', 'çökek', 'çökel', 'çöker', 'çökme', 'çöktü', 'çökük', 'çöküm',
'çöküş', 'çömez', 'çömçe', 'çömüş', 'çöplü', 'çöpçü', 'çöpük', 'çörek', 'çörkü', 'çörtü',
'çöten', 'çöven', 'çözdü', 'çözer', 'çözgü', 'çözme', 'çözük', 'çözüm', 'çözüş', 'çöğen',
'çöğür', 'çüdük', 'çükür', 'çülki', 'çünki', 'çünkü', 'çürük', 'çürür', 'çıban', 'çıbır',
'çıdam', 'çıfıt', 'çıhın', 'çıkak', 'çıkan', 'çıkar', 'çıkla', 'çıkma', 'çıkra', 'çıktı',
'çıkık', 'çıkın', 'çıkır', 'çıkıt', 'çıkış', 'çılan', 'çınar', 'çınav', 'çıngı', 'çıpıl',
'çıpır', 'çırak', 'çırağ', 'çırpı', 'çısar', 'çıtak', 'çıtma', 'çıtır', 'çıvaç', 'çıvma',
'çıyan', 'çığır', 'öbürü', 'ödeme', 'ödlek', 'ödünç', 'ödünü', 'öfori', 'öklem', 'ökmen',
'öksüz', 'öküze', 'ölger', 'ölgün', 'ölmek', 'ölmez', 'ölmüş', 'ölçek', 'ölçer', 'ölçme',
'ölçüm', 'ölçün', 'ölçüp', 'ölçüt', 'ölçüş', 'ölücü', 'ölümü', 'ölüsü', 'ölüyü', 'önazı',
'öncek', 'öncel', 'öncül', 'önder', 'öndeç', 'öndüç', 'öneri', 'öneze', 'öngün', 'önkol',
'önlem', 'önleç', 'önlük', 'önsel', 'önsüz', 'önüne', 'önünü', 'öpmek', 'örcin', 'ördek',
'öreke', 'örgen', 'örgün', 'örgüt', 'örmek', 'örnek', 'örsçü', 'örter', 'örtme', 'örtük',
'örtüm', 'örtün', 'örtüş', 'örücü', 'örülü', 'ötede', 'öteki', 'ötepü', 'ötesi', 'öteye',
'öteyi', 'ötmek', 'ötmez', 'ötücü', 'ötürü', 'övmek', 'övret', 'övücü', 'övünç', 'özaşı',
'özcel', 'özdek', 'özdem', 'özden', 'özdeş', 'özeme', 'özene', 'özeni', 'özenç', 'özerk',
'özgen', 'özgül', 'özgün', 'özgür', 'özgüç', 'özlem', 'özler', 'özlük', 'öznel', 'özsel',
'özsen', 'özsüz', 'öğlen', 'öğrek', 'öğren', 'ücret', 'üdeba', 'üfleç', 'ülfet', 'ülger',
'ülgüç', 'ülker', 'ülkül', 'ülküt', 'ülser', 'ümera', 'ümide', 'ümidi', 'ümmet', 'ümran',
'ündek', 'ündeş', 'ünite', 'ünlem', 'ünlen', 'ünsüz', 'ünvan', 'üreme', 'üremi', 'ürkek',
'ürkme', 'ürküş', 'üryan', 'ürüme', 'üsera', 'üsküf', 'üslub', 'üslup', 'üssel', 'üstat',
'üstel', 'üstün', 'ütmek', 'ütopi', 'ütücü', 'ütülü', 'ütüsü', 'üzere', 'üzeri', 'üzeyn',
'üzgeç', 'üzgün', 'üzlük', 'üzmek', 'üzücü', 'üzünç', 'üçgen', 'üçgül', 'üçler', 'üçlük',
'üçtaş', 'üçten', 'üğrüm', 'üşenç', 'üşmek', 'üşüme', 'ğerek', 'ıcığı', 'ıhmak', 'ıklım',
'ıkına', 'ıldız', 'ılgar', 'ılgım', 'ılgın', 'ılgıt', 'ıltar', 'ılıca', 'ılıma', 'ımlık',
'ırado', 'ırakı', 'ırama', 'ırağı', 'ırbık', 'ırgat', 'ırgıp', 'ırkçı', 'ırmak', 'ıskat',
'ıslah', 'ıslak', 'ıslar', 'ıslık', 'ıspır', 'ısrar', 'ıssız', 'ıstar', 'ıtlak', 'ıtnap',
'ıtrah', 'ızgın', 'ızrar', 'ığrıp', 'ışgın', 'ışkın', 'ıştır', 'ışıdı', 'ışıma', 'ışığa',
'ışığı', 'şaban', 'şadan', 'şafak', 'şafii', 'şafta', 'şaftı', 'şaful', 'şahan', 'şahap',
'şahin', 'şahit', 'şahne', 'şahsa', 'şahsi', 'şahsı', 'şahım', 'şahıs', 'şaibe', 'şaire',
'şakak', 'şakul', 'şakır', 'şakıt', 'şalak', 'şalga', 'şaman', 'şamar', 'şamat', 'şamil',
'şamme', 'şamot', 'şanal', 'şanlı', 'şansa', 'şansı', 'şapcı', 'şapel', 'şapka', 'şaplı',
'şapur', 'şapır', 'şarap', 'şarki', 'şarkı', 'şarpi', 'şartı', 'şaryo', 'şarıl', 'şataf',
'şatır', 'şavkı', 'şavul', 'şayak', 'şayan', 'şayet', 'şayia', 'şayka', 'şaşaa', 'şaşal',
'şaşkı', 'şaşma', 'şebek', 'şedde', 'şedit', 'şefik', 'şeher', 'şehir', 'şehit', 'şehla',
'şehre', 'şehri', 'şekel', 'şeker', 'şekil', 'şekle', 'şekli', 'şekva', 'şelek', 'şelte',
'şemit', 'şemse', 'şemsi', 'şepit', 'şeran', 'şeref', 'şerha', 'şerhe', 'şerhi', 'şerif',
'şerik', 'şerir', 'şerit', 'şetim', 'şevke', 'şevki', 'şeyde', 'şeyin', 'şiber', 'şifon',
'şifre', 'şiire', 'şiiri', 'şikar', 'şilem', 'şilep', 'şilin', 'şilte', 'şimdi', 'şinas',
'şinik', 'şinto', 'şipsi', 'şirin', 'şivan', 'şişek', 'şişko', 'şişme', 'şoför', 'şopar',
'şorcu', 'şorik', 'şoset', 'şoson', 'şoven', 'şubat', 'şunca', 'şunda', 'şunun', 'şurup',
'şöför', 'şölen', 'şömen', 'şömiz', 'şörük', 'şöyle', 'şükrü', 'şükür', 'şümul', 'şüphe',
'şüruk', 'şıkım', 'şıkır', 'şıpca', 'şıpka', 'şıpın', 'şıpır', 'şırak', 'şırıl']
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
