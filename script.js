
const facts = [
    "Ciekawostka 01: Maleńka wyspa-kraj Tuvalu, położona gdzieś pomiędzy Australią a Hawajami na Oceanie Spokojnym, otrzymuje rocznie roczną zapłatę w wysokości prawie 4 milionów dolarów za nic nierobienie (ma domenę tv).",
    "Ciekawostka 02: Walutą, która doświadczyła największej odnotowanej w historii hiperinflacji, jest węgierskie pengő. Po II wojnie światowej inflacja wynosiła 41,9 biliarda w skali miesiąca, co oznaczało podwajanie się cen przeciętnie co każde 15 godzin.",
    "Ciekawostka 03: W 2000 roku Zimbabwe drukowało banknot o wartości 100 bilionów dolarów z powodu hiperinflacji.",
    "Ciekawostka 04: W krajach skandynawskich obecność monet o wartości jednego i dwóch centów jest tak rzadka, że większość cen jest zaokrąglana do najbliższych pięciu centów.",
    "Ciekawostka 05: Giełda Papierów Wartościowych w Amsterdamie, założona w 1602 roku, jest uważana za pierwszą oficjalną giełdę na świecie.",
    "Ciekawostka 06: W Indiach większość transakcji handlowych odbywa się w gotówce, mimo rosnącej popularności płatności elektronicznych.",
    "Ciekawostka 07: McDonald's zarabia więcej na opłatach licencyjnych i czynszu od franczyzobiorców niż na sprzedaży jedzenia.",
    "Ciekawostka 08: 90% waluty na świecie istnieje tylko w formie cyfrowej.",
    "Ciekawostka 09: Najstarsza działająca moneta to Lydian Lion, która została wybita około 600 roku p.n.e.",
    "Ciekawostka 10: Amazon, założony w 1994 roku, nie zarabiał zysków aż do czwartego kwartału 2001 roku.",
    "Ciekawostka 11: W czasach starożytnego Rzymu sol była czasem używana jako forma płatności, stąd pochodzi słowo 'salary' (wynagrodzenie).",
    "Ciekawostka 12: Islandia jest jedynym krajem, który zbankrutował w wyniku kryzysu finansowego w 2008 roku.",
    "Ciekawostka 13: W 1876 roku cena srebra spadła tak bardzo, że wartość srebrnego dolara wynosiła tylko 60 centów w złotych dolarach.",
    "Ciekawostka 14: Złoty jest jedynym metalem, który jest kolorowy. Wszystkie inne metale są srebrzyste.",
    "Ciekawostka 15: Karta kredytowa była pierwotnie tworzona tylko dla ludzi o wysokich dochodach, stąd nazywano ją 'karta prestiżowa'.",
    "Ciekawostka 16: W Japonii istnieją bankomaty, które działają tylko w określonych godzinach.",
    "Ciekawostka 17: Jedna z pierwszych form ubezpieczeń były kontrakty na handel morski w starożytnym Babilonie około 1750 roku p.n.e.",
    "Ciekawostka 18: Pierwsze państwo, które wprowadziło podatek dochodowy, była Wielka Brytania w 1799 roku.",
    "Ciekawostka 19: Fort Knox w Kentucky przechowuje około 147,3 milionów uncji złota.",
    "Ciekawostka 20: Bill Gates zarobiłby więcej, zostawiając 1000 dolarów na podłodze i kontynuując chodzenie, niż zatrzymując się, żeby je podnieść.",
    "Ciekawostka 21: Coca-Cola była pierwotnie sprzedawana jako lekarstwo na bóle głowy i niestrawność w 1886 roku.",
    "Ciekawostka 22: Wenezuela doświadczyła inflacji przekraczającej 1 000 000% w 2018 roku.",
    "Ciekawostka 23: W średniowiecznej Europie używano kawałków tkaniny jako formy płatności.",
    "Ciekawostka 24: Jeden z pierwszych bankomatów w Londynie w 1967 roku wymagał od użytkownika wbicia specjalnego klucza zamiast karty bankomatowej.",
    "Ciekawostka 25: W starożytnym Egipcie piwo było ważnym środkiem płatniczym, zwłaszcza dla robotników budujących piramidy.",
    "Ciekawostka 26: Pablo Escobar miał tyle pieniędzy, że wydawał rocznie około 2,500 dolarów na gumki do wiązania wiązek banknotów.",
    "Ciekawostka 27: Bitcoin, pierwsza kryptowaluta, została stworzona w 2009 roku przez osobę lub grupę osób używającą pseudonimu Satoshi Nakamoto.",
    "Ciekawostka 28: Ceny ropy naftowej są często podawane w dolarach amerykańskich, ponieważ dolar jest światową walutą rezerwową.",
    "Ciekawostka 29: Monopoly, popularna gra planszowa, została stworzona, aby nauczyć ludzi o nieuczciwości rynków nieruchomości.",
    "Ciekawostka 30: W 1933 roku w USA wprowadzono zakaz posiadania złota przez prywatne osoby.",
    "Ciekawostka 31: W starożytnym Rzymie istniała waluta o nazwie 'denarius', która była używana przez ponad 400 lat.",
    "Ciekawostka 32: Produkcja jednego centa amerykańskiego kosztuje więcej niż jego rzeczywista wartość.",
    "Ciekawostka 33: Czwarty kwartał (sezon świąteczny) stanowi często ponad połowę rocznych zysków dla wielu detalistów.",
    "Ciekawostka 34: W 2019 roku długu studenckiego w USA wynosił ponad 1,5 biliona dolarów.",
    "Ciekawostka 35: Wal-Mart jest największym pracodawcą na świecie z ponad 2 milionami pracowników.",
    "Ciekawostka 36: Często używanym wskaźnikiem zdrowia gospodarki jest sprzedaż bielizny męskiej. Gdy maleje, sugeruje to, że konsumenci oszczędzają pieniądze.",
    "Ciekawostka 37: W 1923 roku w Republice Weimarskiej w Niemczech inflacja była tak wysoka, że ludzie używali banknotów jako tapety.",
    "Ciekawostka 38: Chiny posiadają najwięcej rezerw walutowych na świecie, przekraczających 3 biliony dolarów.",
    "Ciekawostka 39: Wielorybnictwo było tak dochodowe w 18. i 19. wieku, że wielu wielorybników stało się pierwszymi amerykańskimi milionerami.",
    "Ciekawostka 40: Dzięki procesowi compounding (odsetki od odsetek) nawet małe oszczędności mogą znacząco wzrosnąć przez długie okresy czasu.",
    "Ciekawostka 41: W 2017 roku globalne bogactwo osiągnęło 280 bilionów dolarów, z czego ponad połowa należała do najbogatszego 1% ludności.",
    "Ciekawostka 42: W czasie Wielkiego Kryzysu w latach 30. XX wieku wskaźnik bezrobocia w USA osiągnął prawie 25%.",
    "Ciekawostka 43: Najdroższym miastem na świecie do życia w 2019 roku było Hongkong.",
    "Ciekawostka 44: W 2018 roku w Wielkiej Brytanii były więcej transakcji kartami płatniczymi niż gotówką.",
    "Ciekawostka 45: System Bretton Woods z 1944 roku utworzył międzynarodowy system monetarny oparty na dolarze amerykańskim.",
    "Ciekawostka 46: W starożytnym Chinach używano muszelek jako formy pieniądza.",
    "Ciekawostka 47: Kiedy McDonald's wprowadził do swojej oferty McFlurry w 1997 roku, stało się to jednym z ich najbardziej dochodowych produktów.",
    "Ciekawostka 48: Apple stał się pierwszą firmą o wartości 1 biliona dolarów w 2018 roku.",
    "Ciekawostka 49: Istnieje teoria ekonomiczna mówiąca, że ceny masłonek mogą przewidywać kierunek gospodarki.",
    "Ciekawostka 50: Jeden z największych skarbów monet znalezionych w USA został odkryty w Kalifornii w 2014 roku i był wart około 10 milionów dolarów.",
    "Ciekawostka 51: W średniowieczu w Europie używano dużej ilości małych monet o nazwie 'pfennig'.",
    "Ciekawostka 52: Według Banku Światowego, około 1,7 miliarda dorosłych na świecie nie miało dostępu do usług bankowych w 2017 roku.",
    "Ciekawostka 53: Krówki są czasem używane jako forma płatności w niektórych kulturach afrykańskich.",
    "Ciekawostka 54: Rynkowa wartość Bitcoin przekroczyła 1 bilion dolarów w 2021 roku.",
    "Ciekawostka 55: System Rezerwy Federalnej (FED) w USA został stworzony w 1913 roku jako odpowiedź na kryzysy bankowe.",
    "Ciekawostka 56: W 2019 roku wartość rynku gier komputerowych przekroczyła 150 miliardów dolarów.",
    "Ciekawostka 57: Kiedy Indie zdelegalizowały niektóre banknoty w 2016 roku, doprowadziło to do masowych kolejek w bankach.",
    "Ciekawostka 58: W 2020 roku wartość rynkowa Tesli przekroczyła sumę wartości GM, Ford, BMW, Daimler i Volkswagen.",
    "Ciekawostka 59: W starożytnym Egipcie istniała forma piwa nazywana 'kash', która była używana jako środek płatniczy.",
    "Ciekawostka 60: Mark Zuckerberg stał się miliarderem w wieku 23 lat dzięki sukcesowi Facebooka."
];

function getCurrentMinute() {
    return new Date().getMinutes();
}

function displayFact() {
    const factElement = document.getElementById('fact');
    factElement.textContent = facts[getCurrentMinute()];
}

// Wywołaj funkcję po załadowaniu strony i następnie co minutę
displayFact();
setInterval(displayFact, 60000);
