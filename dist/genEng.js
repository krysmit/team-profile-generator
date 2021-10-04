function genEngineer(responses) {
    return (`
    <div class="col-12 col-sm-6 col-md-3 mb-3">
          <div class="card">
            <h4 id=role class="card-header">Engineer</h4>
            <div class="card-body">
              <p id=name class="card-text">Name: ${responses.name}</p>
              <p id=id class="card-text">ID #: ${responses.id}</p>
              <p id=email class="card-text">Email: 
              <a href="mailto:${responses.id}">${responses.id}</a>
              </p>
              <p id=github class="card-text">Github: 
              <a href="https://www.github.com/${responses.github}">${responses.github}</a></p>
            </div>
          </div>
        </div>
    `)
}

module.exports = genEngineer;