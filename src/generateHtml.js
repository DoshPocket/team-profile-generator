function generateHtml (data) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/style.css" 
    />
    <title>Meet the Team</title>
  </head>

  <body>

  <div class="container-fluid">
  <div class="row">
      <div class="col-12 jumbotron bg-danger mb-3 team-heading">
          <h1 class="text-center">My Team</h1>
      </div>
  </div>
</div>

<div class="container">
<div class="row">
    <div class="card-columns"></div>
    <div class="team-area col-12 d-flex justify-content-center card-deck">
    ${data}

    </div>
    </div>
</div>
</div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>`
};

module.exports = generateHtml