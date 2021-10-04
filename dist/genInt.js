function genIntern(responses) {
    return (`
    <div class="col-12 col-sm-6 col-md-3 mb-3">
          <div class="card">
            <h4 id=role class="card-header">Intern</h4>
            <div class="card-body">
              <p id=name class="card-text">Name: ${responses.name}</p>
              <p id=id class="card-text">ID #: ${responses.id}</p>
              <p id=email class="card-text">Email: 
              <a href="mailto:${responses.id}">${responses.id}</a>
              </p>
              <p id=school class="card-text">School: ${responses.school}</p>
            </div>
          </div>
        </div>
    `)
}

module.exports = genIntern;