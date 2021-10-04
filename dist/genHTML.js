function generateMarkdown(data) {
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Team</title>
</head>

<body>


<main class="d-flex min-vh-100 bg-light">
    <div class="container-fluid my-auto">
      <h1 class="display-2 text-center text-dark">My Team</h1>
      <div class="row justify-content-center">
        ${data}
        <div class="w-100"></div>


      </div>
    </div>
  </main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

</body>
</html>
       
  `;
  }
  
  module.exports = generateMarkdown;