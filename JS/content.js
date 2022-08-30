const response = fetch('datas/data.json');
const jobs = response.json();

function generateJobs(jobs) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs.isActive[i] == true) {
            const jobsSection = document.querySelector(".jobs-section");

            const jobArticle = document.createElement("article");
            jobArticle.className = "job-article"; 

            const leftJobArticlePartDiv = document.createElement("div");
            leftJobArticlePartDiv.className = "left-job-article-part"; 

            const squareDiv = document.createElement("div");
            squareDiv.className = "square"; 

            const letterSpan = document.createElement("span");
            letterSpan.className = "letter"; 

            letterSpan.innerText = jobs.company[i].split("")[0].toUpperCase();
            letterSpan.appendChild(squareDiv);

            const leftDatasDiv = document.createElement("div");
            leftDatasDiv.className = "left-datas";


            const firstLineLeftDiv = document.createElement("div");
            firstLineLeftDiv.className = "first-line-left";


            const postH3 = document.createElement("h3");
            postH3.innerText = jobs.jobTitle[i];
            firstLineLeftDiv.appendChild(postH3);

            if (jobs.remoteWork[i] != "none" || jobs.remoteWork[i] != "unknown") {
                const remoteBox = document.createElement("span");
                const remoteClass = "remote-box" + jobs.remoteWork[i];
                remoteBox.className = remoteClass;

                let remoteText = "Télétravail "
            
                switch(jobs.remoteWork[i]) {
                    case 'eventually' :
                        remoteText += "ponctuel"
                        break;
                    case 'regularly' :
                        remoteText += "partiel"
                        break;
                    case 'full' :
                        remoteText += "total"
                        break;
                }

                remoteBox.innerText = remoteText;
                firstLineLeftDiv.appendChild(remoteBox);
            }

            const secondLineLeftDiv = document.createElement("div");
            secondLineLeftDiv.className = "second-line-left";


            const companyAndCitySpan = document.createElement("span");
            companyAndCitySpan.innerText = jobs.company[i].toLowerCase().charAT(0).toUpperCase() + " - " + jobs.city[i];

            const spaceDiv = document.createElement("div");
            spaceDiv.className = "space"; 

            const contractSpan = document.createElement("span");
            contractSpan.innerText = jobs.contractType[i];

            secondLineLeftDiv.appendChild(companyAndCitySpan);
            secondLineLeftDiv.appendChild(spaceDiv);
            secondLineLeftDiv.appendChild(contractSpan);

            leftDatasDiv.appendChild(firstLineLeftDiv);
            leftDatasDiv.appendChild(secondLineLeftDiv);

            leftJobArticlePartDiv.appendChild(squareDiv);
            leftJobArticlePartDiv.appendChild(leftDatasDiv);

            const rightJobArticlePartDiv = document.createElement("div");
            rightJobArticlePartDiv.className = "right-job-article-part";

            const firstLineRightDiv = document.createElement("div");
            firstLineRightDiv.className = "first-line-right";


            const payFieldSpan = document.createElement("span");
            payFieldSpan.className = "pay-field";

            payFieldSpan.innerText = "Salaire";

            const payNumberSpan = document.createElement("span");
            payNumberSpan.className = "pay-number";

            payNumberSpan.innerText = jobs.salary[i] + "k";

            firstLineRightDiv.appendChild(payFieldSpan);
            firstLineRightDiv.appendChild(payNumberSpan);

            const secondLineRightDiv = document.createElement("div");
            secondLineRightDiv.className = "second-line-right";

            

            const daysNumber = Math.floor((Date.now - Date.parse(jobs.publishDate[i])) / (1000*60*60*24));
            let publishedAgo = ""

            if(daysNumber = 0) {
                publishedAgo = "Aujourd'hui";
            } else {
                publishedAgo = "Il y a " + daysNumber + "jours"
            }

            const publishedAgoSpan = document.createElement("span");
            publishedAgoSpan.innerText = publishedAgo;

            secondLineRightDiv.appendChild(publishedAgoSpan);

            rightJobArticlePartDiv.appendChild(firstLineRightDiv);
            rightJobArticlePartDiv.appendChild(secondLineRightDiv);

            jobArticle.appendChild(leftJobArticlePartDiv);
            jobArticle.appendChild(rightJobArticlePartDiv);

            jobsSection.appendChild(jobArticle);
        }
    }
}

generateJobs(jobs);
