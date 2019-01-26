function madLib() {
    
    //creates new variables to call inputs
    var famousPersonInput = document.getElementById('famous-person');
    var anyNumberInput = document.getElementById('any-number');
    var pluralNounInput = document.getElementById('plural-noun');
    var verbInput = document.getElementById('verb');
    var descriptiveAdjectiveInput = document.getElementById('descriptive-adjective');
    var slangWordInput = document.getElementById('slang-word');
    
    //creates values for each variable
    var famousPerson = famousPersonInput.value;
    var anyNumber = anyNumberInput.value;
    var pluralNoun = pluralNounInput.value;
    var verb = verbInput.value;
    var descriptiveAdjective = descriptiveAdjectiveInput.value;
    var slangWord = slangWordInput.value;
    
    //madlib sentence with input variables in order to complete madlib
    var results = `<span style="text-decoration:underline ; font-weight:bold"> ${famousPerson}</span> was stoked about the MadLib Challenge in class today. But they were having trouble coming up with <span style="text-decoration:underline ; font-weight:bold"> ${anyNumber}</span> <span style="text-decoration:underline ; font-weight:bold"> ${pluralNoun}</span> to help them with the Challenge. They figured out they should <span style="text-decoration:underline ; font-weight:bold"> ${verb}</span> to save time. Little did they know it caused them to <span style="text-decoration:underline ; font-weight:bold"> ${descriptiveAdjective}</span>. But in the end it\'s all <span style="text-decoration:underline ; font-weight:bold"> ${slangWord}</span> and they were really happy about that.`; 

    var theSentence = document.getElementById('theSentence');
    theSentence.innerHTML = results;
    
        //error message for blank spaces on madlib
    if (
        famousPerson.length === 0 || anyNumber.length === 0 ||          pluralNoun.length === 0 || verb.length === 0 ||                 descriptiveAdjective.length === 0 || slangWord.length === 0
    )
        //alert message
    {alert("PLEASE FILL OUT ALL BLANKS TO MAKE YOUR MADLIB :)");}

        //if no blanks then it fills out madlib
    else {
        document.getElementById('famous-person').innerHTML =        famousPerson;
        document.getElementById('any-number').innerHTML = anyNumber;
        document.getElementById('plural-noun').innerHTML =  pluralNoun;
        document.getElementById('verb').innerHTML = verb;
        document.getElementById('descriptive-adjetive').innerHTML =     descriptiveAdjective;
        document.getElementById('slang-word').innerHTML = slangWord;
    }

}