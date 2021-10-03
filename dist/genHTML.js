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

        <div class="col-12 col-sm-6 col-md-3 mb-3">
          <div class="card">
            <h4 id=role class="card-header">Employee Type</h4>
            <div class="card-body">
              <p id=name class="card-text"></p>
              <p id=id class="card-text"></p>
              <p id=email class="card-text">asdf</p>
              <p id=github class="card-text">sdfg</p>
              <p id=office class="card-text">dfgh</p>
              <p id=school class="card-text">fghj</p>
            </div>
          </div>
        </div>

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
  
  module.exports = genHTML;