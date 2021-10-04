function genManager(responses) {
    return (`
    <div class="col-12 col-sm-6 col-md-3 mb-3">
          <div class="card">
            <h4 id=role class="card-header">Testing</h4>
            <div class="card-body">
              <p id=name class="card-text">Name: ${responses.name}</p>
              <p id=id class="card-text">ID #: ${responses.id}</p>
              <p id=email class="card-text">Email: 
              <a href="mailto:${responses.email}">${responses.email}</a>
              </p>
              <p id=office class="card-text">Office #: ${responses.officeNumb}</p>
            </div>
          </div>
        </div>
    `)
}

module.exports = genManager;