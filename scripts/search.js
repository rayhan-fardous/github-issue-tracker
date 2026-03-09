searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const searchValue = formData.get("search");

  let api;
  if (searchValue) {
    api = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`;
  } else {
    api = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  }

  setLoading(true);
  fetch(api)
    .then((res) => res.json())
    .then((json) => {
      issues = json?.data;
      renderIssues(issues);
    });
});