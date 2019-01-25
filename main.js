function madLib() {

    var famousPersonInput = document.getElementById('famous-person');
    var anyNumberInput = document.getElementById('any-number');
    var pluralNounInput = document.getElementById('plural-noun');
    var verbInput = document.getElementById('verb');
    var descriptiveAdjectiveInput = document.getElementById('descriptive-adjective');
    var slangWordInput = document.getElementById('slang-word');
    
    var famousPerson = famousPersonInput.value;
    var anyNumber = anyNumberInput.value;
    var pluralNoun = pluralNounInput.value;
    var verb = verbInput.value;
    var descriptiveAdjective = descriptiveAdjectiveInput.value;
    var slangWord = slangWordInput.value;

    var results = `<span style="text-decoration:underline ; font-weight:bold"> ${famousPerson}</span> was stoked about the MadLib Challenge in class today. But they were having trouble coming up with <span style="text-decoration:underline ; font-weight:bold"> ${anyNumber}</span> <span style="text-decoration:underline ; font-weight:bold"> ${pluralNoun}</span> to help them with the Challenge. They figured out they should <span style="text-decoration:underline ; font-weight:bold"> ${verb}</span> to save time. Little did they know it caused them to <span style="text-decoration:underline ; font-weight:bold"> ${descriptiveAdjective}</span>. But in the end it\'s all <span style="text-decoration:underline ; font-weight:bold"> ${slangWord}</span> and they were really happy about that.`; 

    var theSentence = document.getElementById('theSentence');
    theSentence.innerHTML = results;
    




}