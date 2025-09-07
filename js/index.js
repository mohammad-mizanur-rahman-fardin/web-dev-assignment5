const hearts = document.getElementsByClassName('heart-class');
const counter = document.getElementById("heart-available");

for(let i = 0; i < hearts.length; i++){
    hearts[i].addEventListener("click", function(e){
        e.preventDefault();
        let currentCount = parseInt(counter.innerText);
        currentCount++;
        counter.innerText = currentCount;
    });
}

const callButtons = document.querySelectorAll(".call-btn");
const coinAvailable = document.getElementById("coin-available");
totalRemCoinBeforeCall = parseInt(coinAvailable.innerText);

const historyHolder = document.getElementById("history-holder");


const callInfo = {
    "call-emergency": { title: "National Emergency", number: "999", banglaName: "জাতীয় জরুরি সেবা" },
    "call-police": { title: "Police", number: "999", banglaName: "পুলিশ" },
    "call-fire": { title: "Fire Service", number: "999", banglaName: "ফায়ার সার্ভিস" },
    "call-ambulance": { title: "Ambulance", number: "1994-999999", banglaName: "অ্যাম্বুলেন্স" },
    "call-women": { title: "Women & Child Helpline", number: "109", banglaName: "নারী ও শিশু সহায়তা" },
    "call-anti": { title: "Anti-Corruption", number: "106", banglaName: "দুদক" },
    "call-electricity": { title: "Electricity Outage", number: "16216", banglaName: "বিদ্যুৎ বিভ্রাট" },
    "call-brac": { title: "Brac", number: "16445", banglaName: "ব্র্যাক" },
    "call-railway": { title: "Bangladesh Railway", number: "163", banglaName: "বাংলাদেশ রেলওয়ে" }
};


callButtons.forEach(button => {
    button.addEventListener("click", function (){
        const card = button.closest(".card");
        const title = card.children[1].children[1].innerText;

        const id = button.id;
        const info = callInfo[id];
        const now = new Date();
        const localTime = now.toLocaleTimeString();

        console.log(localTime); 

        if(totalRemCoinBeforeCall >= 20){
            coinAvailable.innerText = totalRemCoinBeforeCall - 20;
            totalRemCoinBeforeCall = totalRemCoinBeforeCall - 20;
            const newHistoryCard = document.createElement("div");
            newHistoryCard.classList.add("flex", "justify-between", "items-center", "rounded-[8px]", "p-3", "mt-2", "bg-[#FAFAFA]");
            newHistoryCard.innerHTML = `
                <div  class="flex flex-col gap-y-1">
                    <h3 class="">${info.banglaName}</h3>
                    <p class="text-[#5C5C5C]">${info.number}</p>
                </div>
                <p class="">${localTime}</p>
            `;
            historyHolder.prepend(newHistoryCard);
            

            alert("📞 Calling " + info.title + " " + info.number + "...");
        }
        else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই!কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        }
    });
});


const copyButtons = document.querySelectorAll(".copy-btn");
copyCountElement = document.getElementById("copy-count");
copyCount = parseInt(copyCountElement.innerText);

copyButtons.forEach(button => {
    button.addEventListener("click", function() {
        const card = button.closest(".card");
        const hotlineNumber = card.children[1].children[2].innerText;
        copyCount++;
        copyCountElement.innerText = copyCount;

        navigator.clipboard.writeText(hotlineNumber).then(() => {
            alert('নম্বর কপি হয়েছে: '+ hotlineNumber);
        });
    });
});

const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", function() {
    historyHolder.innerHTML = "";
});