const allCards = document.getElementById('allCards')
const totalCount = document.getElementById('total')

// total job count
const updatedTotalCount = totalCount.innerText = allCards.children.length;

// if there is no job then show the empty page
if (updatedTotalCount === 0) {
  const noJob = document.getElementById('noJob');
  noJob.classList.remove('hidden')
}