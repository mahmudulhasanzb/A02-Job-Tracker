let mainContainer = document.querySelector('#mainContainer');
const allCards = document.getElementById('allCards');
let noJobSection = document.getElementById('noJobSection');
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
  total.innerText = allCards.children.length;
}

totalCount();

// toggle filter button
const allFilterBtn = document.getElementById('allBtn');
const interviewFilterBtn = document.getElementById('interviewBtn');
const rejectedFilterBtn = document.getElementById('rejectedBtn');

// show empty card function when nothing available
function showEmptyCard() {
  const noJobSection = document.getElementById('noJobSection');
  noJobSection.classList.remove('hidden');
}

let activeFilter = 'all';

// toggle filter button function
function toggleStyle(id) {
  // remove styles when click any button
  allFilterBtn.classList.remove('btn-primary');
  interviewFilterBtn.classList.remove('btn-primary');
  rejectedFilterBtn.classList.remove('btn-primary');

  // add style when click any button
  // allFilterBtn.classList.add('bg-base-100');
  // interviewFilterBtn.classList.add('bg-base-100');
  // rejectedFilterBtn.classList.add('bg-base-100');

  // specify the a button
  const selected = document.getElementById(id);
  // selected.classList.remove('bg-base-100')
  //add style to the specific button
  selected.classList.add('btn-primary');

  const filteredSection = document.getElementById('filtered-section');

  if (id === 'interviewBtn') {
    activeFilter = 'interview';
    allCards.classList.add('hidden');
    renderJob('interview');
  }
  else if (id === 'rejectedBtn') {
    activeFilter = 'rejected';
    allCards.classList.add('hidden');
    renderJob('rejected');
  }
  else {
    activeFilter = 'all';
    allCards.classList.remove('hidden');
    noJobSection.classList.add('hidden');
    // Hide filtered section when 'all' is active
    filteredSection.classList.add('hidden'); 
  }
  // Update counts and job text after filter change
  updateCounts();
}

// ===================================
mainContainer.addEventListener('click', function (event) {
  const interviewCard = event.target.closest('.interview-card');
  if (!interviewCard) return;

  if (event.target.classList.contains('interview-card-btn')) {
    updateJobStatus(interviewCard, 'interview');
  } else if (event.target.classList.contains('rejected-card-btn')) {
    updateJobStatus(interviewCard, 'rejected');
  } else if (event.target.closest('.delete-btn')) {
    deleteCard(interviewCard);
  }
});

//================
function updateJobStatus(interviewCard, cardStatus) {
  const title = interviewCard.querySelector('.title').innerText;
  const position = interviewCard.querySelector('.position').innerText;
  const type = interviewCard.querySelector('.type').innerText;
  const description = interviewCard.querySelector('.description').innerText;

  const job = {
    title,
    position,
    type,
    status: cardStatus,
    description,
  };

  const interviewCardBtn = interviewCard.querySelector('.interview-card-btn');
  const rejectedCardBtn = interviewCard.querySelector('.rejected-card-btn');

  // Removimg from both arrays
  interviews = interviews.filter(item => item.title !== title);
  rejected = rejected.filter(item => item.title !== title);

  // update job status
  if (cardStatus === 'interview') {
    interviews.push(job);
    let status = interviewCard.querySelector('.status-1');
    status.innerText = 'INTERVIEW';
    status.classList.add('bg-green-300');
    status.classList.remove('bg-red-300');


    interviewCardBtn.classList.add('bg-green-500', 'text-white');
    interviewCardBtn.classList.remove('text-green-500');

    rejectedCardBtn.classList.remove('bg-red-500', 'text-white');
    rejectedCardBtn.classList.add('text-red-500');
  }

  if (cardStatus === 'rejected') {
    rejected.push(job);
    let status = interviewCard.querySelector('.status-1');
    status.innerText = 'REJECTED';
    status.classList.add('bg-red-300');
    status.classList.remove('bg-green-300');

    rejectedCardBtn.classList.add('bg-red-500', 'text-white');
    rejectedCardBtn.classList.remove('text-red-500');

    interviewCardBtn.classList.remove('bg-green-500', 'text-white');
    interviewCardBtn.classList.add('text-green-500');
  }

  updateCounts();

  // Handle filtering if active
  if (activeFilter !== 'all') {
    renderJob(activeFilter);
  }
}

function renderJob(status) {
  const filteredSection = document.getElementById('filtered-section');
  filteredSection.innerHTML = '';

  let list = status === 'interview' ? interviews : rejected;

  if (list.length === 0) {
    showEmptyCard();
    allCards.classList.add('hidden');
    filteredSection.classList.add('hidden');
  } else {
    noJobSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    allCards.classList.add('hidden');

    list.forEach(job => {
      const card = document.createElement('div');
      card.className = 'interview-card bg-base-100 card-border p-5 mb-5';
      card.innerHTML = `
                <div class="flex justify-between">
                  <div>
                    <h2 class="title text-xl font-bold text-[#002C5C]">${job.title}</h2>
                    <p class="position text-gray-500">${job.position}</p>
                    <p class="type text-gray-500 mt-2 mb-3">${job.type}</p>
                    <p class="status-1 text-[#002C5C] text-sm font-bold bg-[#002c5c24] px-2 py-1 rounded-md w-fit">${job.status.toUpperCase()}</p>
                  </div>
                  <button class="delete-btn btn rounded-[100%] w-12 h-12 flex items-center justify-center"><img
              src="./assest/Trash.png"></button>
                </div>
                <p class="description mt-2 mb-4">${job.description}</p>
                <div class="flex gap-2 lg:flex-row md:flex-col">
          <button class="interview-card-btn btn text-green-500 border border-green-500">Interview</button>
          <button class="rejected-card-btn btn text-red-500 border border-red-500">Rejected</button>
        </div>
            `;
      filteredSection.appendChild(card);
    });
  }
}

// delete card function
function deleteCard(interviewCard) {
  const title = interviewCard.querySelector('.title').innerText;
  interviews = interviews.filter(item => item.title !== title);
  rejected = rejected.filter(item => item.title !== title);

  interviewCard.remove();
  updateCounts();
}

// update counts function
function updateCounts() {
  total.innerText = allCards.children.length;
  interviewCount.innerText = interviews.length;
  rejectedCount.innerText = rejected.length;

  // Update the jobs count display
  if (activeFilter === 'all') {
    jobs.innerText = allCards.children.length + ' jobs';
  } else {
    let currentCount =
      activeFilter === 'interview' ? interviews.length : rejected.length;
    jobs.innerText =
      currentCount +
      ' of ' +
      (allCards.children.length + (activeFilter === 'all' ? 0 : 0)) +
      ' jobs';
  }
}
