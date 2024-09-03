class JeemaCoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenomInput: "",
      nomInput: "",
      emailInput: "",
      telephoneInput: "",
      coders: [],
      modifierIndex: null, // Ajout pour la modification
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick() {
    const newCoder = {
      prenom: this.state.prenomInput,
      nom: this.state.nomInput,
      email: this.state.emailInput,
      telephone: this.state.telephoneInput,
    };

    if (this.state.modifierIndex !== null) {
      // Si en mode édition, mettre à jour le coder existant
      const modeCoders = [...this.state.coders];
      modeCoders[this.state.modifierIndex] = newCoder;
      this.setState({ coders: modeCoders, modifierIndex: null });
    } else {
      // Sinon, ajouter un nouveau coder
      this.setState({ coders: [newCoder, ...this.state.coders] });
    }

    // Réinitialiser les champs de saisie
    this.setState({
      prenomInput: "",
      nomInput: "",
      emailInput: "",
      telephoneInput: "",
    });
  }

  handleDelete(index) {
    const modeCoders = this.state.coders.filter((_, i) => i !== index);
    this.setState({ coders: modeCoders });
  }

  handleEdit(index) {
    const coder = this.state.coders[index];
    this.setState({
      prenomInput: coder.prenom,
      nomInput: coder.nom,
      emailInput: coder.email,
      telephoneInput: coder.telephone,
      modifierIndex: index, // Mettre à jour l'index de modification
    });
  }

  render() {
    return (
      <div className="py-4">
        <p className="text-center">JeemaCoder gestion utilisateurs</p>
        <div className="container">
          <div style={{ maxWidth: 600, margin: "auto" }}>
            <div className="row">
              <div className="col-6 p-1">
                <label className="form-label">Prenom</label>
                <input
                  type="text"
                  value={this.state.prenomInput}
                  onChange={(e) => {
                    this.setState({ prenomInput: e.target.value });
                  }}
                  className="form-control"
                />
              </div>
              <div className="col-6 p-1">
                <label className="form-label">Nom</label>
                <input
                  type="text"
                  value={this.state.nomInput}
                  onChange={(e) => {
                    this.setState({ nomInput: e.target.value });
                  }}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 p-1">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={this.state.emailInput}
                  onChange={(e) => {
                    this.setState({ emailInput: e.target.value });
                  }}
                  className="form-control"
                />
              </div>
              <div className="col-6 p-1">
                <label className="form-label">Telephone</label>
                <input
                  type="text"
                  value={this.state.telephoneInput}
                  onChange={(e) => {
                    this.setState({ telephoneInput: e.target.value });
                  }}
                  className="form-control"
                />
              </div>
            </div>

            <button
              onClick={this.handleClick}
              className="btn btn-outline-primary w-100 mt-3"
            >
              {this.state.modifierIndex !== null ? "Modifier" : "Submit"}
            </button>
          </div>
        </div>

        <div className="mt-5 container">
          <h3 className="text-center">Coders</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coders.map((coder, index) => {
                return (
                  <tr key={index}>
                    <td>{coder.prenom}</td>
                    <td>{coder.nom}</td>
                    <td>{coder.email}</td>
                    <td>{coder.telephone}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => this.handleEdit(index)}
                      >
                        Modifier
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.handleDelete(index)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JeemaCoder />);
