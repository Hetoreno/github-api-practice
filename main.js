const username = 'hetoreno';


  async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      return;
    }
  
    const repos = await response.json();
    const repoList = document.querySelector('.repos');
  
    repos.forEach(repo => {
      const repoItem = document.createElement('div');
      repoItem.innerHTML = `
        <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
        <p>${repo.description || 'No description available'}</p>
      `;
      repoList.appendChild(repoItem);
    });
  }
  
  
  
  getRepos();