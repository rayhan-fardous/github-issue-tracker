document.addEventListener("DOMContentLoaded", ()=> {
  setLoading(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then((res) => res.json())
  .then((json) => {
    issues = json?.data;
    renderIssues(json?.data);
  })
});

const setLoading = (on = true) => {
  if(on){
    spinner.classList.remove("hidden");
    spinner.classList.add("block");
    issueCardsContainer.classList.add("hidden");
    issueCardsContainer.classList.remove("grid");
  } else{
    spinner.classList.add("hidden");
    spinner.classList.remove("block");
    issueCardsContainer.classList.remove("hidden");
    issueCardsContainer.classList.add("grid");
  }
};

const renderIssues = (issues = []) => {
  issueCounter.textContent = issues?.length;
  issueCardsContainer.innerHTML = "";

  issues?.map((issue) => {
    const issueDiv = document.createElement("div");
    issueDiv.classList = `w-full max-w-[345px] rounded-md border-t-3 ${issue?.status === "open" ? "border-green-600" : "border-purple-600"} bg-base-100 shadow-sm`;
    const createdAt = new Date("2024-01-15T10:30:00Z");
    issueDiv.innerHTML = `<div class="p-4 flex flex-col gap-3 border-b border-base-300">
      <div class="flex justify-between items-center gap-3">
        <img src=${issue?.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"} alt=${issue?.status === "open" ? "Open issue" : "Closed issue"} class="w-6" />
        <span class="badge badge-soft ${issue?.priority === "high" ? "badge-error" : issue?.priority === "medium" ? "badge-warning" : "badge-info"} text-xs font-medium tracking-wide uppercase">${issue?.priority}</span>
      </div>
      
      <h4 class="font-semibold">${issue?.title}</h4>
      <p class="text-neutral/60 text-xs -mt-1 line-clamp-2">${issue?.description}</p>
      
      <div class="flex flex-wrap gap-1">
        ${issue?.labels
          ?.map(
            (label) => `<span
        class="badge badge-soft text-[10px] font-medium tracking-tight ${label === "bug" ? "badge-error" : label === "enhancement" ? "badge-success" : label === "documentation" ? "badge-info" : label === "help wanted" ? "badge-warning" : "badge-primary"} uppercase">
          <i class="fa-solid ${label === "bug" ? "fa-bug" : label === "enhancement" ? "fa-wand-magic-sparkles" : label === "documentation" ? "fa-note-sticky" : label === "help wanted" ? "fa-life-ring" : "fa-caret-up"}"></i>
          ${label}
        </span>`,
          )
          .join("")}
      </div>
    </div>

    <div class="p-4 flex flex-col gap-2 text-neutral/60 text-xs">
        <span>#${issue?.id} by ${issue?.author}</span>
        <span>${createdAt.getMonth() + 1}/${createdAt.getDate()}/${createdAt.getFullYear()}</span>
    </div>`;
    
    issueCardsContainer.appendChild(issueDiv);
  });
  setLoading(false);
}