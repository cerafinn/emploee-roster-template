// other file with function to create cards based on employee type (3) and function to create HTML (include inline or in header css)
const createHTML = teamArray => {
  const teamCards = []

  const managerCard = manager => {
    return `
<div class="card m-3 p-0" style="max-width: 240px">
  <div class="card-body p-0">
    <div class="card-header bg-primary text-white">
      ${manager.getName()}<br>
      <i class="fas fa-coffee" style="margin-right: 5px"></i>${manager.getRole()}
    </div>
    <ul class="list-group p-3" style="background-color: #e4e3e3;">
      <li class="list-group-item pl-0">ID: ${manager.getId()}</li>
      <li class="list-group-item pl-0">EMAIL: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item pl-0">OFFICE NUMBER: ${manager.getNumber()}</li>
    </ul>
  </div>
</div>
`
  }

  const engineerCard = engineer => {
    return `
<div class="card m-3 p-0" style="max-width: 240px">
  <div class="card-body p-0">
    <div class="card-header bg-primary text-white">
      ${engineer.getName()}<br>
      <i class="fas fa-user-cog" style="margin-right: 5px"></i>${engineer.getRole()}
    </div>
    <ul class="list-group p-3" style="background-color: #e4e3e3;">
      <li class="list-group-item pl-0">ID: ${engineer.getId()}</li>
      <li class="list-group-item pl-0">EMAIL: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item pl-0">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
    </ul>
  </div>
</div>
`
  }

  const internCard = intern => {
    return `
<div class="card m-3 p-0" style="max-width: 240px">
  <div class="card-body p-0">
    <div class="card-header bg-primary text-white">
      ${intern.getName()}<br>
      <i class="fas fa-school" style="margin-right: 5px"></i>${intern.getRole()}
    </div>
    <ul class="list-group p-3" style="background-color: #e4e3e3;">
      <li class="list-group-item pl-0">ID: ${intern.getId()}</li>
      <li class="list-group-item pl-0">EMAIL: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item pl-0">SCHOOL: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>
`
  }

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerCard(manager)));

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerCard(engineer))
    .join(''));

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => internCard(intern))
    .join(''));

    return teamCards.join('');
}
// add each team member to an array to create the cards within the template literal

module.exports = teamArray => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Roboto', sans-serif;">
  <!-- insert header for the webpage -->
  <header class="justify-content-center">
    <h1 class="text-white bg-danger text-center py-3">My Team</h1>
  </header>

  <div class="container">
    <div class="row">
      <div class="d-flex flex-wrap col-12 justify-content-center">
        <!-- insert cards based on input from the app -->
        ${createHTML(teamArray)}
  
      </div>
    </div>
  </div>
</body>
</html>
`
}