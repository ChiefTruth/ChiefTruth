var userSelection = document.getElementById("pagination").value;

var journalEntryIntro={
    progressDay:"Introduction", 
    weatherEntry:"",
    mileageEntry: "",
    additionalNotesEntry: "All entries available on journal release. Currently available entries are: Days 1, 2, 3, 25, & 27.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntryOne={
    progressDay:"One", 
    weatherEntry:"Clear & 90&#8457;",
    mileageEntry: "2.4 Miles taking approximately 20 minutes",
    additionalNotesEntry: "This was my first day back to running since the Twilight 5k in April 2019.",
    runDescriptionEntry:"Today's run was more of an effort to change myself than anything. Even a light jog wouldn't let me forget the bad habits with which I've been inflicting my body. Today's run started at 6:30 pm.",
    scheduledDayEntry:"My day didn't start until around 5:30 pm as this is when I woke up.",
    unscheduledDayEntry:"In a concerted effort to make changes, the majority of my day excluding the run was spent cleaning and preparing my room for some reorganization.",
    healthEntry:"Personal health is absolutely a motivating factor for me taking this initiative. I hope by tracking through this journal, some transitions to healthier behaviors will be noticeable. For this day, I woke up around 5:30 pm, took a short nap after running, then cleaned through the night. What I had to eat today was granola, a few slices of pizza, chicken salad and asparagus.",
};

var journalEntryTwo={
    progressDay:"Two", 
    weatherEntry:"Sunny & 90-94&#8457;",
    mileageEntry: "7.4 Miles taking approximately 1 hour 15 minutes",
    additionalNotesEntry: "Used the pool for a cooldown.",
    runDescriptionEntry:"This run started around 4:15 pm. It wasn't anything special really, but I felt good about getting that long of a distance so early on in training.",
    scheduledDayEntry:"Nothing was planned for today. The majority of the day was focused around getting a 10 mile run in, but my body still trying to acclimate only allowed me the 7 miles.",
    unscheduledDayEntry:"Other than the run and pool, I played a few matches of my favorite video games, and continued trying to make progress on cleaning my room.",
    healthEntry:"Today, I was asleep from 7:30am-3:30pm. The food I ate was: chicken salad, asparagus, curry with rice, a wild berry mix, granola, an apple, hummus crisps, and a 'Taqueria la Parilla' burrito especial",
};
var journalEntryThree={
    progressDay:"Three", 
    weatherEntry:"Partly Cloudy & 84&#8457;",
    mileageEntry: "20 Minute run resulting in 2.0-2.5 miles",
    additionalNotesEntry: "Standard shakeout run. I do the same route to Griffeth Road for almost every shakeout. Top image is this road captured on today's run.",
    runDescriptionEntry:"Another run to prove to myself that I don't need to go far for it to be worth it or fun!",
    scheduledDayEntry:"Today I mowed grass for a man whom my parents provide some assistance.",
    unscheduledDayEntry:"The rest of this day I spent playing matches of League of Legends.",
    healthEntry:"This day I was awake between 2:30 pm-10:00pm. Meals were: Chicken salad, roast beef sandwich, curry, trail mix, a pear, and an almond bar.",
};
var journalEntryFour={
    progressDay:"Four", 
    weatherEntry:"",
    mileageEntry: "",
    additionalNotesEntry: "Available On Journal Release! Please refer to the Introduction for currently available journal entries.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntryFive={
    progressDay:"Five", 
    weatherEntry:"",
    mileageEntry:"",
    additionalNotesEntry:"Available On Journal Release! Please refer to the Introduction for currently available journal entries." ,
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntrySix={
    progressDay:"Six", 
    weatherEntry:"",
    mileageEntry:"",
    additionalNotesEntry:"Available On Journal Release! Please refer to the Introduction for currently available journal entries.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntrySeven={
    progressDay:"Seven", 
    weatherEntry:"",
    mileageEntry:"",
    additionalNotesEntry:"Available On Journal Release! Please refer to the Introduction for currently available journal entries." ,
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntryEight={
    progressDay:"Eight", 
    weatherEntry:"",
    mileageEntry:"" ,
    additionalNotesEntry: "Available On Journal Release! Please refer to the Introduction for currently available journal entries.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntryNine={
    progressDay:"Nine", 
    weatherEntry:"",
    mileageEntry: "",
    additionalNotesEntry: "Available On Journal Release! Please refer to the Introduction for currently available journal entries.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};
var journalEntryTen={
    progressDay:"Ten", 
    weatherEntry:"",
    mileageEntry: "",
    additionalNotesEntry: "Available On Journal Release! Please refer to the Introduction for currently available journal entries.",
    runDescriptionEntry:"",
    scheduledDayEntry:"",
    unscheduledDayEntry:"",
    healthEntry:"",
};


var progressNumber = [journalEntryIntro.progressDay,journalEntryOne.progressDay,journalEntryTwo.progressDay,journalEntryThree.progressDay,journalEntryFour.progressDay,journalEntryFive.progressDay,journalEntrySix.progressDay,journalEntrySeven.progressDay,journalEntryEight.progressDay,journalEntryNine.progressDay,journalEntryTen.progressDay];
// VARIABLE Date
var weather = [journalEntryIntro.weatherEntry,journalEntryOne.weatherEntry, journalEntryTwo.weatherEntry, journalEntryThree.weatherEntry,journalEntryFour.weatherEntry,journalEntryFive.weatherEntry,journalEntrySix.weatherEntry,journalEntrySeven.weatherEntry,journalEntryEight.weatherEntry,journalEntryNine.weatherEntry,journalEntryTen.weatherEntry];

var mileage = [journalEntryIntro.mileageEntry, journalEntryOne.mileageEntry, journalEntryTwo.mileageEntry, journalEntryThree.mileageEntry,journalEntryFour.mileageEntry,journalEntryFive.mileageEntry,journalEntrySix.mileageEntry,journalEntrySeven.mileageEntry,journalEntryEight.mileageEntry,journalEntryNine.mileageEntry,journalEntryTen.mileageEntry];

var additionalNotes = [journalEntryIntro.additionalNotesEntry, journalEntryOne.additionalNotesEntry, journalEntryTwo.additionalNotesEntry, journalEntryThree.additionalNotesEntry,journalEntryFour.additionalNotesEntry,journalEntryFive.additionalNotesEntry,journalEntrySix.additionalNotesEntry,journalEntrySeven.additionalNotesEntry,journalEntryEight.additionalNotesEntry,journalEntryNine.additionalNotesEntry,journalEntryTen.additionalNotesEntry];


var runDescription = [journalEntryIntro.runDescriptionEntry, journalEntryOne.runDescriptionEntry, journalEntryTwo.runDescriptionEntry, journalEntryThree.runDescriptionEntry, journalEntryFour.runDescriptionEntry,journalEntryFive.runDescriptionEntry,journalEntrySix.runDescriptionEntry,journalEntrySeven.runDescriptionEntry,journalEntryEight.runDescriptionEntry,journalEntryNine.runDescriptionEntry,journalEntryTen.runDescriptionEntry];

var scheduledDay = [journalEntryIntro.scheduledDayEntry, journalEntryOne.scheduledDayEntry, journalEntryTwo.scheduledDayEntry, journalEntryThree.scheduledDayEntry,journalEntryFour.scheduledDayEntry,journalEntryFive.scheduledDayEntry,journalEntrySix.scheduledDayEntry,journalEntrySeven.scheduledDayEntry,journalEntryEight.scheduledDayEntry,journalEntryNine.scheduledDayEntry,journalEntryTen.scheduledDayEntry];

var unscheduledDay= [journalEntryIntro.unscheduledDayEntry, journalEntryOne.unscheduledDayEntry, journalEntryTwo.unscheduledDayEntry, journalEntryThree.unscheduledDayEntry,journalEntryFour.unscheduledDayEntry,journalEntryFive.unscheduledDayEntry,journalEntrySix.unscheduledDayEntry,journalEntrySeven.unscheduledDayEntry,journalEntryEight.unscheduledDayEntry,journalEntryNine.unscheduledDayEntry,journalEntryTen.unscheduledDayEntry];

var health= [journalEntryIntro.healthEntry, journalEntryOne.healthEntry, journalEntryTwo.healthEntry, journalEntryThree.healthEntry,journalEntryFour.healthEntry,journalEntryFive.healthEntry,journalEntrySix.healthEntry,journalEntrySeven.healthEntry,journalEntryEight.healthEntry,journalEntryNine.healthEntry,journalEntryTen.healthEntry];

var imageOne= ["/img/featherInvert.png", " ", "", "/img/runningJournal/imgOne/IMAG1142 - Copy.jpg","","","","","","",""];

var imageTwo= ["/img/featherInvert.png", " ", " ", "","","","","","","",""];

function entrySelector()
{
    if(userSelection<10)
    {
        document.getElementById("progressDay").innerHTML = "Volume One: Day " + progressNumber[document.getElementById("pagination").value];
        //DATE AVAILABLE ON JOURNAL RELEASE
        document.getElementById("weatherEntry").innerHTML = weather[document.getElementById("pagination").value];
        document.getElementById("mileageEntry").innerHTML = mileage[document.getElementById("pagination").value];
        document.getElementById("additionalNotesEntry").innerHTML= additionalNotes[document.getElementById("pagination").value];

        document.getElementById("runDescriptionEntry").innerHTML= runDescription[document.getElementById("pagination").value];
        document.getElementById("scheduledDayEntry").innerHTML = scheduledDay[document.getElementById("pagination").value];
        document.getElementById("unscheduledDayEntry").innerHTML =unscheduledDay[document.getElementById("pagination").value];
        document.getElementById("healthEntry").innerHTML= health[document.getElementById("pagination").value];

        document.getElementById("imageOneEntry").src= imageOne[document.getElementById("pagination").value];
        document.getElementById("imageTwoEntry").src= imageTwo[document.getElementById("pagination").value];
    }
};


