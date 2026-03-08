tabsContainer.addEventListener("click", (e) =>{
  const targetBtn = e.target.closest(".tab-btn");

  if(!targetBtn) return;

  const tab = targetBtn.dataset.tab;

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  targetBtn.classList.add("active");

  if(tab){
    const filteredIssues = [...issues]?.filter(
      (issue) => issue?.status === tab,
    );
    renderIssues(filteredIssues);
  }else{
    renderIssues(issues);
  }
});