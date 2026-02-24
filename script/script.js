const allCards = document.getElementById('allCards');
let jobs = document.getElementById('jobs');
let jobsLength = allCards.children.length;


// count variables
let total = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// count objects
let interviews = [];
let rejected = [];

// count calculation
jobs.innerText = jobsLength + ' jobs';
interviewCount.innerText = interviews.length;
rejectedCount.innerText = rejected.length;

// total count function
function totalCount() {
  total.innerText = allCards.children.length
}

totalCount();

// show empty card function when nothing available
function showEmptyCard() {
  const noJobSection = document.getElementById('noJobSection');
  noJobSection.classList.remove('hidden');
}


// toggle filter button
const allFilterBtn = document.getElementById('allBtn');
const interviewFilterBtn = document.getElementById('interviewBtn');
const rejectedFilterBtn = document.getElementById('rejectedBtn');



// toggle filter button function
function toggleStyle(id) {
  // remove styles when click any button
  allFilterBtn.classList.remove('btn-primary')
  interviewFilterBtn.classList.remove('btn-primary')
  rejectedFilterBtn.classList.remove('btn-primary')

  // add style when click any button
  // allFilterBtn.classList.add('bg-base-100')
  // interviewFilterBtn.classList.add('bg-base-100')
  // rejectedFilterBtn.classList.add('bg-base-100')

  // specify the a button
  const selected = document.getElementById(id);
  // selected.classList.remove('bg-base-100')
  //add style to the specific button
  selected.classList.add('btn-primary')



  if (id === 'interviewBtn') {
    allCards.classList.add('hidden');
    // const filteredSection = document.getElementById('filtered-section');
    // filteredSection.classList.remove('hidden');
    jobs.innerText = interviews.length + ' of ' + jobsLength + ' jobs';
    
    // show the empty card when nothing available
    if (interviews.length == 0) {
      showEmptyCard();
      return;
    }
  }

  else if (id === 'rejectedBtn') {
    allCards.classList.add('hidden');
    // const filteredSection = document.getElementById('filtered-section');
    // filteredSection.classList.remove('hidden');
    jobs.innerText = rejected.length + ' of ' + jobsLength + ' jobs';

    // show the empty card when nothing available
    if (rejected.length === 0) {
      showEmptyCard();
      return;
    }    
  }

  else {
    allCards.classList.remove('hidden');
    noJobSection.classList.add('hidden');
  }

}
