const profile = [
  {
    label: 'Place of birth',
    data: 'Jakarta'
  },
  {
    label: 'Date of birth',
    data: '19 February'
  },
  {
    label: 'Study',
    data: 'Computer Science'
  },
  {
    label: 'Hobby',
    data: 'Reading, Watching, Workout'
  },
  {
    label: 'Goal',
    data: 'To be a good Software Engineer'
  },
]

const tableProfile = profile.map((el) => {
  return `
    <tr>
      <td class="label">${el.label}</td>
      <td class="data">${el.data}</td>
    </tr>
  `
})

const tableProfileHtml = tableProfile.join('')

const profileTable = document.querySelector('.profile-table')

profileTable.innerHTML = tableProfileHtml

const messageBox = document.querySelector('.message')
const messageSendButton = document.querySelector('.send-message-btn')

messageSendButton.addEventListener('click', () => {
  alert("Message successfully sent!")
  messageBox.value = ""
})