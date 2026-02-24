const allCards = document.getElementById('allCards');

// total count
let total = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// total count function
function totalCount() {
  total.innerText = allCards.children.length
}

totalCount();

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

}
