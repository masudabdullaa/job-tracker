const mobileFirstCorp = document.getElementById("mobile-first-corp");
const webFlowAgency = document.getElementById("webFlow-agency");
const dataViOlutions = document.getElementById("dataViz-olutions");
const cloudFirstInc = document.getElementById("cloudFirst-inc");
const innovationLabs = document.getElementById("innovation-labs");
const megaCorpSolutions = document.getElementById("megaCorp-solutions");
const startupXYZ = document.getElementById("startup-xyz");
const techCorpIndustries = document.getElementById("techCorp-industries");
const mobileFirstInterviewButton = document.getElementById("mobile-first-interview-button");
const mobileFirstRejectButton = document.getElementById("mobile-first-reject-button");
const webFlowAgencyInterview = document.getElementById("webFlow-agency-interview");
const webFlowAgencyReject = document.getElementById("webFlow-agency-reject");
const dataVizOlutionsInterview = document.getElementById("dataViz-olutions-interview");
const dataVizOlutionsReject = document.getElementById("dataViz-olutions-reject");
const cloudFirstIncInterview = document.getElementById("cloudFirst-inc-interview");
const cloudFirstIncReject = document.getElementById("cloudFirst-inc-reject");
const innovationLabsInterview = document.getElementById("innovation-labs-interview");
const innovationLabsReject = document.getElementById("innovation-labs-reject");
const megaCorpSolutionsInterview = document.getElementById("megaCorp-solutions-interview");
const megaCorpSolutionsReject = document.getElementById("megaCorp-solutions-reject");
const startupXYZInterview = document.getElementById("startup-xyz-interview");
const startupXYZReject = document.getElementById("startup-xyz-reject");
const techCorpIndustriesInterview = document.getElementById("techCorp-industries-interview");
const techCorpIndustriesReject = document.getElementById("techCorp-industries-reject");
const totalInterview = document.querySelector(".total_interview");
const totalRejected = document.querySelector(".total_rejected");



mobileFirstInterviewButton.addEventListener("click", function () {
    totalInterview.innerHTML++;
    mobileFirstInterviewButton.classList.add("interview_btn");
    mobileFirstRejectButton.classList.remove("reject_btn");
});
mobileFirstRejectButton.addEventListener("click", function () {
    totalRejected.innerHTML++;
    mobileFirstRejectButton.classList.add("reject_btn");
    mobileFirstInterviewButton.classList.remove("interview_btn");

});
webFlowAgencyInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    webFlowAgencyInterview.classList.add("interview_btn");
    webFlowAgencyReject.classList.remove("reject_btn");
})
webFlowAgencyReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    webFlowAgencyReject.classList.add("reject_btn");
    webFlowAgencyInterview.classList.remove("interview_btn");
})
dataVizOlutionsInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    dataVizOlutionsInterview.classList.add("interview_btn");
    dataVizOlutionsReject.classList.remove("reject_btn");
})
dataVizOlutionsReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    dataVizOlutionsReject.classList.add("reject_btn");
    dataVizOlutionsInterview.classList.remove("interview_btn");
})
cloudFirstIncInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    cloudFirstIncInterview.classList.add("interview_btn");
    cloudFirstIncReject.classList.remove("reject_btn");
})
cloudFirstIncReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    cloudFirstIncReject.classList.add("reject_btn");
    cloudFirstIncInterview.classList.remove("interview_btn");
})
innovationLabsInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    innovationLabsInterview.classList.add("interview_btn");
    innovationLabsReject.classList.remove("reject_btn");
})
innovationLabsReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    innovationLabsReject.classList.add("reject_btn");
    innovationLabsInterview.classList.remove("interview_btn");
})
megaCorpSolutionsInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    megaCorpSolutionsInterview.classList.add("interview_btn");
    megaCorpSolutionsReject.classList.remove("reject_btn");
})
megaCorpSolutionsReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    megaCorpSolutionsReject.classList.add("reject_btn");
    megaCorpSolutionsInterview.classList.remove("interview_btn");
})
startupXYZInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    startupXYZInterview.classList.add("interview_btn");
    startupXYZReject.classList.remove("reject_btn");
})
startupXYZReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    startupXYZReject.classList.add("reject_btn");
    startupXYZInterview.classList.remove("interview_btn");
})
techCorpIndustriesInterview.addEventListener("click", function () {
    totalInterview.innerHTML++;
    techCorpIndustriesInterview.classList.add("interview_btn");
    techCorpIndustriesReject.classList.remove("reject_btn");
})
techCorpIndustriesReject.addEventListener("click", function () {
    totalRejected.innerHTML++;
    techCorpIndustriesReject.classList.add("reject_btn");
    techCorpIndustriesInterview.classList.remove("interview_btn");
})



document.getElementById("mobile-first-corp-delete")
    .addEventListener("click", function () {
        mobileFirstCorp.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("webFlow-agency-delete")
    .addEventListener("click", function () {
        webFlowAgency.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("dataViz-olutions-delete")
    .addEventListener("click", function () {
        dataViOlutions.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("cloudFirst-inc-delete")
    .addEventListener("click", function () {
        cloudFirstInc.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("innovation-labs-delete")
    .addEventListener("click", function () {
        innovationLabs.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("megaCorp-solutions-delete")
    .addEventListener("click", function () {
        megaCorpSolutions.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("startup-xyz-delete")
    .addEventListener("click", function () {
        startupXYZ.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })
document.getElementById("techCorp-industries-delete")
    .addEventListener("click", function () {
        techCorpIndustries.style.display = "none";
        availableJob.innerHTML--;
        totalCount.innerHTML--;
    })


const sectionCount = document.getElementById("section-count");
const availableJob = document.querySelector(".total_job");
const totalCount = document.querySelector(".total_count");
const hidden = document.querySelector(".hidden");
const count = sectionCount.childElementCount;
availableJob.innerHTML = count;
totalCount.innerHTML = count;
if (availableJob.innerHTML == 0 || totalCount.innerHTML == 0) {
    hidden.style.display = "block";
}