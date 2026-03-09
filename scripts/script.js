let issues;
const loginForm = document.getElementById("login-form");
const issueCardsContainer = document.getElementById("issue-cards-container");
const spinner = document.getElementById("spinner");
const modalSpinner = document.getElementById("modal-spinner");
const tabsContainer = document.getElementById("tabs-container");
const issueCounter = document.getElementById("issue-counter");
const searchForm = document.getElementById("search-form");
const issueModalContent = document.getElementById("issue_modal_content");
const issueModalTitle = document.getElementById("issue_modal_title");

const setModalLoading = (on = true) => {
  if (on) {
    modalSpinner.classList.remove("hidden");
    modalSpinner.classList.add("block");
    issueModalContent.classList.add("hidden");
    issueModalContent.classList.remove("block");
  } else {
    modalSpinner.classList.add("hidden");
    modalSpinner.classList.remove("block");
    issueModalContent.classList.remove("hidden");
    issueModalContent.classList.add("block");
  }
};

issueCardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".issue-div");
  const id = target.dataset.id;

  if (!target || !id) return;

  issue_modal.showModal();

  setModalLoading(true);
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((res) => res.json())
    .then((json) => {
      if (json?.status !== "success") {
        return alert("Failed to fetch issue data");
      }

      const issue = json?.data;

      issueModalTitle.textContent = issue?.title;

      issueModalContent.innerHTML = `
      <p
        class="flex flex-row items-center flex-wrap gap-3 text-xs md:text-sm font-normal text-neutral/60">
        <span class="badge ${issue?.status === "open" ? "badge-success" : "badge-error"} capitalize">${issue?.status}</span> •
        <span>Opened by ${issue?.author}</span> •
        <span>${formatDate(issue?.createdAt)}</span>
      </p>

      <div class="flex flex-wrap gap-2">
        ${issue?.labels
          ?.map(
            (label) => `<span
        class="badge badge-soft text-xs font-medium tracking-tight ${label === "bug" ? "badge-error" : label === "enhancement" ? "badge-success" : label === "documentation" ? "badge-info" : label === "help wanted" ? "badge-warning" : "badge-primary"} uppercase">
          <i class="fa-solid ${label === "bug" ? "fa-bug" : label === "enhancement" ? "fa-wand-magic-sparkles" : label === "documentation" ? "fa-note-sticky" : label === "help wanted" ? "fa-life-ring" : "fa-caret-up"}"></i>
          ${label}
        </span>`,
          )
          .join("")}
      </div>

      <p class="text-neutral/60">
        ${issue?.description}
      </p>

      <div class="rounded-lg bg-base-200/40 p-3 grid grid-cols-2 gap-4 items-start">
        <div class="text-neutral/60 text-sm">
          <span class="block mb-1">Assignee:</span>
          <span class="text-neutral font-semibold">${issue?.assignee}</span>
        </div>
        
        <div class="text-neutral/60 text-sm">
          <span class="block mb-1">Priority:</span>
          <span
            class="badge ${issue?.priority === "high" ? "badge-error" : issue?.priority === "medium" ? "badge-warning" : "badge-info"} text-xs font-medium tracking-wide uppercase"
            >${issue?.priority}
          </span>
        </div>
      </div>
        `;
    })
    .finally(() => {
      setModalLoading(false);
    });
});